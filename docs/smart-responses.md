# Smart Response Type Inference

`@vkraft/types` automatically infers the correct response type based on the parameters you pass — no manual type assertions needed.

## How It Works

Many VK API methods return different response shapes depending on parameters. For example, `friends.get` returns user IDs by default, but returns full user objects when you pass `fields`.

The generated types use **TypeScript overloaded signatures** to automatically select the right return type:

```typescript
// Just IDs — FriendsGetResponse
const friends = await api.friends.get({ user_id: 1 });
//    ^? { count: number; items: number[] }

// Full objects with specific fields required
const friends = await api.friends.get({ user_id: 1, fields: ["photo_100", "sex"] });
//    ^? { count: number; items: WithFields<VKUsersUserFull, "photo_100" | "sex">[] }
//    friends.items[0].photo_100  → string (required!)
//    friends.items[0].sex        → VKBaseSex (required!)
//    friends.items[0].bdate      → string | undefined (not requested)
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

### `fields` parameter — automatic `WithFields` narrowing

When you pass `fields` with literal string values, TypeScript **automatically narrows the response items** so that only the requested fields are required:

```typescript
const followers = await api.users.getFollowers({ user_id: 1 });
//    ^? { count: number; items: number[] }

const followers = await api.users.getFollowers({
    user_id: 1,
    fields: ["photo_100", "city", "sex"],
});
// items are WithFields<VKUsersUserFull, "photo_100" | "city" | "sex">
followers.items[0].photo_100  // string ✓ required
followers.items[0].city       // { id; title } ✓ required
followers.items[0].sex        // VKBaseSex ✓ required
followers.items[0].bdate      // string | undefined (not requested)
```

This works automatically for methods with `fieldsResponse` in the VK schema:
- `friends.get`
- `users.getFollowers`
- `groups.getMembers`
- `groups.getRequests`

### Combined parameters

Some methods have multiple axes. TypeScript picks the most specific overload:

```typescript
// groups.isMember has 4 variants:
api.groups.isMember({ group_id: "1" })                                    // → base
api.groups.isMember({ group_id: "1", user_ids: [1] })                    // → userIds
api.groups.isMember({ group_id: "1", extended: 1 })                      // → extended
api.groups.isMember({ group_id: "1", user_ids: [1], extended: 1 })       // → userIds + extended
```

## How Overloads Are Generated

The generator maps VK schema response variant keys to method parameters:

| Variant Key | Trigger Parameter | Constraint |
|---|---|---|
| `extendedResponse` | `extended` | `{ extended: 1 \| true }` |
| `fieldsResponse` | `fields` | `{ fields: F[] }` (generic) |
| `userIdsResponse` | `user_ids` | `{ user_ids: ... }` (required) |
| `onlineMobileResponse` | `online_mobile` | `{ online_mobile: 1 \| true }` |
| `userIds_Extended_Response` | `user_ids` + `extended` | both required |

Overloads are ordered from **most specific** to **least specific**:

1. Generic `<F extends FieldsEnum>` overload (if applicable) — narrowed `WithFields` return
2. Non-generic trigger overloads — full response type
3. Base overload (no constraints) — default response

## Under the Hood

The generated `.d.ts` for `friends.get` looks like:

```typescript
"friends.get": {
    // 1. Generic — captures literal field names, narrows items
    <F extends Objects.VKUsersFields>(
        params: Params.FriendsGetParams & { fields: F[] }
    ): Promise<
        Omit<Responses.FriendsGetFieldsResponse, "items"> & {
            items: WithFields<Objects.VKUsersUserFull, F>[]
        }
    >
    // 2. Non-generic fallback with fields — all properties optional
    (params: Params.FriendsGetParams & { fields: ... }): Promise<Responses.FriendsGetFieldsResponse>
    // 3. Without fields — just IDs
    (params?: Params.FriendsGetParams): Promise<Responses.FriendsGetResponse>
}
```

TypeScript picks the first matching overload. When you pass `{ fields: ["sex", "city"] }`, the generic overload captures `F = "sex" | "city"` and returns items with those properties required.

## `WithFields<T, F>` — The Utility Type

The core type that powers field narrowing:

```typescript
type WithFields<T, F extends string> =
    Omit<T, F & keyof T> & Required<Pick<T, F & keyof T>>
```

1. `F & keyof T` — intersects requested field names with actual property names. Fields like `"education"` that don't match a property are silently ignored (safe!)
2. `Pick<T, ...>` + `Required` — makes matched properties required
3. `Omit<T, ...> &` — merges back with the rest of the object (unchanged)

### Coverage

~87% of `fields` enum values directly match property names and work perfectly. The remaining ~13% are **composite fields** that expand into multiple properties:

| Field | Expands to |
|---|---|
| `contacts` | `mobile_phone`, `home_phone` |
| `education` | `university`, `faculty`, `graduation`, `education_form`, `education_status` |
| `connections` | `skype`, `facebook`, `twitter`, `livejournal` |

For composite fields, `WithFields` safely ignores the mismatch — no errors, no bugs. You can include the actual property names explicitly:

```typescript
type MyUser = WithFields<VKUsersUserFull,
    | "education"            // ignored (no matching property), but safe
    | "university"           // ← this makes university required
    | "faculty"              // ← this makes faculty required
>;
```

### Manual usage

You can also use `WithFields` directly for any VK object type:

```typescript
import type { WithFields, VKUsersUserFull } from "@vkraft/types";

type MyUser = WithFields<VKUsersUserFull, "photo_100" | "sex" | "city">;
```
