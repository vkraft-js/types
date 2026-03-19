# Token-Scoped API Types

Split `APIMethods` and `VKAPINested` by `access_token_type` so users get only the methods available for their token type.

## Goal

```typescript
import type { VKAPINestedUser, VKAPINestedGroup, VKAPINestedService } from "@vkraft/types";

// Only user-token methods available
const userApi = createAPI(userToken) as VKAPINestedUser;
await userApi.messages.send({ ... }); // OK
await userApi.secure.addAppEvent({ ... }); // TS error — service-only method

// Only service-token methods available
const serviceApi = createAPI(serviceToken) as VKAPINestedService;
await serviceApi.secure.addAppEvent({ ... }); // OK
await serviceApi.messages.send({ ... }); // TS error — user-only method
```

## Data source

Each method in `VKCOM/vk-api-schema` has `access_token_type: string[]`:

```json
{ "name": "users.get", "access_token_type": ["user", "group", "service"] }
{ "name": "users.search", "access_token_type": ["user"] }
{ "name": "secure.addAppEvent", "access_token_type": ["service"] }
```

Three token types: `user`, `group`, `service`.

## Approach: `Pick<APIMethods, ...>`

Chosen for best balance of boilerplate vs TypeScript performance.

### Alternatives considered

| Approach | Boilerplate | TS Perf | Why not |
|---|---|---|---|
| **`Pick` (chosen)** | Medium | Good | Built-in, compiler-optimized homomorphic mapped type |
| Conditional mapped type (`FilterByToken<T>`) | Medium | Bad | Lazy evaluation on every access, ~3000 conditional checks |
| Intersection (`&`) per category | High | Bad | Expensive flattening of ~50 intersected objects |
| Duplicate interfaces | Huge | Best | 3-4x file size, unmaintainable |

### Generated output

**`methods.d.ts`** — after `APIMethods` interface:

```typescript
/** VK API methods available with a group access token */
export type APIMethodsGroup = Pick<APIMethods, "users.get" | "messages.send" | ...>;

/** VK API methods available with a service access token */
export type APIMethodsService = Pick<APIMethods, "users.get" | "apps.get" | ...>;

/** VK API methods available with a user access token */
export type APIMethodsUser = Pick<APIMethods, "users.get" | "users.search" | "messages.send" | ...>;
```

**`utils.d.ts`** — generic helper + token-specific nested types:

```typescript
import type { APIMethods, APIMethodsGroup, APIMethodsService, APIMethodsUser } from "./methods"

type VKAPINestedFor<Methods> = {
    [Cat in ExtractCategory<keyof Methods & string>]: {
        [M in keyof Methods as M extends `${Cat}.${infer Method}` ? Method : never]: Methods[M]
    }
}

export type VKAPINested = VKAPINestedFor<APIMethods>
export type VKAPINestedUser = VKAPINestedFor<APIMethodsUser>
export type VKAPINestedGroup = VKAPINestedFor<APIMethodsGroup>
export type VKAPINestedService = VKAPINestedFor<APIMethodsService>
```

**`index.d.ts`** — exports:

```typescript
export type { APIMethodParams, APIMethodReturn, VKAPINested, VKAPINestedUser, VKAPINestedGroup, VKAPINestedService, WithFields } from "./utils"
```

## Implementation plan

### 1. `src/index.ts` — group methods by token type

After fetching the schema, iterate `schema.methods` and build a `Map<string, string[]>` of token type to method names from `access_token_type`.

### 2. `methods.d.ts` generation — emit `Pick` types

After `APIMethods.generateMany(...)`, emit one `Pick<APIMethods, ...>` per token type with the corresponding method name union.

### 3. `utils.d.ts` generation — add `VKAPINestedFor` + variants

- Extract `VKAPINested` body into a generic `VKAPINestedFor<Methods>` helper
- Redefine `VKAPINested = VKAPINestedFor<APIMethods>` (backwards compatible)
- Add `VKAPINestedUser`, `VKAPINestedGroup`, `VKAPINestedService`
- Update the import from `"./methods"` to include the token-specific types

### 4. `index.d.ts` generation — export new types

Add `VKAPINestedUser`, `VKAPINestedGroup`, `VKAPINestedService` to the utils re-export line.

### 5. README — document usage

Add a section showing how to use token-scoped types for type-safe API clients.
