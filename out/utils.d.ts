/**
 * @module
 *
 * This module contains type-utils for convenient work
 *
 * @example import utils
 * ```typescript
 * import { APIMethodParams, APIMethodReturn } from "@vkraft/types/utils";
 *
 * type UsersGetReturn = APIMethodReturn<"users.get">;
 * type UsersGetParams = APIMethodParams<"users.get">;
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 14:04:09 using [types](https://github.com/vkraft/types) generator
 */

import type { APIMethods } from "./methods"

export type CallAPI<T, R> = (params: T) => Promise<R>
export type CallAPIWithoutParams<R> = () => Promise<R>
export type CallAPIWithOptionalParams<T, R> = (params?: T) => Promise<R>

/**
 * @example
 * ```typescript
 * type UsersGetParams = APIMethodParams<"users.get">;
 * ```
 */
export type APIMethodParams<APIMethod extends keyof APIMethods> = Parameters<
    APIMethods[APIMethod]
>[0]
/**
 * @example
 * ```typescript
 * type UsersGetReturn = APIMethodReturn<"users.get">;
 * ```
 */
export type APIMethodReturn<APIMethod extends keyof APIMethods> = Awaited<
    ReturnType<APIMethods[APIMethod]>
>

/**
 * Nested proxy type for `api.users.get()` style access.
 *
 * Splits flat `APIMethods` keys like `"users.get"` into `{ users: { get: ... } }`.
 *
 * @example
 * ```typescript
 * const api = new Proxy({}, { ... }) as VKAPINested;
 * await api.users.get({ user_ids: [1] });
 * ```
 */
type ExtractCategory<T extends string> = T extends `${infer C}.${string}`
    ? C
    : never
export type VKAPINested = {
    [Cat in ExtractCategory<keyof APIMethods & string>]: {
        [M in keyof APIMethods as M extends `${Cat}.${infer Method}`
            ? Method
            : never]: APIMethods[M]
    }
}

/**
 * Make properties whose names match the given fields required.
 *
 * Use with VK API objects to narrow types based on requested `fields`.
 * Fields that don't correspond to property names (composite fields like
 * `"education"`, `"contacts"`) are safely ignored — those properties stay optional.
 *
 * @example
 * ```typescript
 * import type { WithFields, VKUsersUserFull, VKUsersFields } from "@vkraft/types";
 *
 * type MyUser = WithFields<VKUsersUserFull, "photo_100" | "sex" | "city">;
 * // photo_100, sex, city are now required; everything else stays optional
 * ```
 */
export type WithFields<T, F extends string> = Omit<T, F & keyof T> &
    Required<Pick<T, F & keyof T>>
