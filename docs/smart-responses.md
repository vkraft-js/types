# Smart Response Type Inference

`@vkraft/types` automatically infers the correct response type based on the parameters you pass — no manual type assertions needed.

## How It Works

Many VK API methods return different response shapes depending on parameters. For example, `friends.get` returns user IDs by default, but returns full user objects when you pass `fields`.

The generated types use **TypeScript overloaded signatures** to automatically select the right return type:

```typescript
// Just IDs — FriendsGetResponse
const friends = await api.friends.get({ user_id: 1 });
//    ^? { count: number; items: number[] }

// Full objects — FriendsGetFieldsResponse
const friends = await api.friends.get({ user_id: 1, fields: ["photo_100"] });
//    ^? { count: number; items: VKUsersUserFull[] }
```

## Supported Patterns

### `extended` parameter

When you pass `extended: 1` (or `extended: true`), methods return an extended response with `profiles` and `groups` arrays:

```typescript
// Base response
const wall = await api.wall.get({ owner_id: 1 });
//    ^? WallGetResponse

// Extended response — includes profiles/groups
const wall = await api.wall.get({ owner_id: 1, extended: 1 });
//    ^? WallGetExtendedResponse
```

### `fields` parameter

When you pass `fields`, methods return objects with full profile data instead of just IDs:

```typescript
const followers = await api.users.getFollowers({ user_id: 1 });
//    ^? { count: number; items: number[] }

const followers = await api.users.getFollowers({ user_id: 1, fields: ["photo_100"] });
//    ^? { count: number; items: VKUsersUserFull[] }
```

### Combined parameters

Some methods have multiple axes. TypeScript picks the most specific overload:

```typescript
// friends.getOnline has 4 variants:
api.friends.getOnline({})                                          // → base
api.friends.getOnline({ online_mobile: 1 })                       // → onlineMobile
api.friends.getOnline({ extended: 1 })                             // → extended
api.friends.getOnline({ online_mobile: 1, extended: 1 })           // → onlineMobileExtended
```

## How Overloads Are Generated

The generator maps VK schema response variant keys to method parameters:

| Variant Key | Trigger Parameter | Constraint |
|---|---|---|
| `extendedResponse` | `extended` | `{ extended: 1 \| true }` |
| `fieldsResponse` | `fields` | `{ fields: ... }` (required) |
| `userIdsResponse` | `user_ids` | `{ user_ids: ... }` (required) |
| `onlineMobileResponse` | `online_mobile` | `{ online_mobile: 1 \| true }` |
| `userIds_Extended_Response` | `user_ids` + `extended` | both required |

Overloads are ordered from **most specific** (most constraints) to **least specific** (base response), so TypeScript's overload resolution picks the right one.

## Under the Hood

The generated `.d.ts` for a method like `wall.get` looks like:

```typescript
"wall.get": {
    // Most specific first
    (params: WallGetParams & { extended: 1 | true }): Promise<WallGetExtendedResponse>
    // Fallback
    (params?: WallGetParams): Promise<WallGetResponse>
}
```

TypeScript picks the first overload whose parameter type matches the argument. When you pass `{ extended: 1 }`, the first overload matches. When you pass `{}`, it falls through to the base overload.

## Fallback Behavior

For response variants that can't be mapped to parameters (rare), all variant types are merged into a union on the base overload. You can narrow with a type assertion when needed:

```typescript
const result = await api.someMethod(params) as SpecificResponseType;
```

## `WithFields<T, F>` — Narrow Object Types by Requested Fields

VK API returns all properties on "full" objects (e.g., `VKUsersUserFull`), but only the ones matching your `fields` parameter are actually populated. Use `WithFields` to make exactly those properties required:

```typescript
import type { WithFields, VKUsersUserFull, VKUsersFields } from "@vkraft/types";

// Only photo_100, sex, city become required — everything else stays optional
type MyUser = WithFields<VKUsersUserFull, "photo_100" | "sex" | "city">;

const user: MyUser = /* ... */;
user.photo_100; // string (required — no undefined)
user.sex;       // VKBaseSex (required)
user.city;      // { id: number; title: string } (required)
user.bdate;     // string | undefined (not requested — stays optional)
```

### How it works

```typescript
type WithFields<T, F extends string> =
    Omit<T, F & keyof T> & Required<Pick<T, F & keyof T>>
```

1. `F & keyof T` — intersects requested field names with actual property names. Fields like `"education"` that don't match a property name are silently ignored (safe!)
2. `Pick<T, ...>` + `Required` — makes matched properties required
3. `Omit<T, ...> &` — merges back with the rest of the object (unchanged)

### Coverage

~87% of `fields` enum values directly match property names and work perfectly with `WithFields`. The remaining ~13% are **composite fields** that expand into multiple properties:

| Field | Expands to |
|---|---|
| `contacts` | `mobile_phone`, `home_phone` |
| `education` | `university`, `faculty`, `graduation`, `education_form`, `education_status` |
| `connections` | `skype`, `facebook`, `twitter`, `livejournal` |

For composite fields, `WithFields` safely ignores the mismatch — the expanded properties remain optional. You can include them explicitly if needed:

```typescript
type MyUser = WithFields<VKUsersUserFull,
    | "education"            // ignored (composite), but doesn't break anything
    | "university"           // ← this one actually makes it required
    | "faculty"
>;
```

### Usage with API calls

```typescript
const followers = await api.users.getFollowers({
    user_id: 1,
    fields: ["photo_100", "sex"],
});

// Narrow the response items:
type Item = WithFields<(typeof followers)["items"][number], "photo_100" | "sex">;
```
