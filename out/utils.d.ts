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
 * Generated at 19.03.2026, 18:30:47 using [types](https://github.com/vkraft/types) generator
 */

import type { APIMethods } from "./methods"

export type CallAPI<T, R> = (params: T) => Promise<R>
export type CallAPIWithoutParams<R> = () => Promise<R>
export type CallAPIWithOptionalParams<T, R> = (params?: T) => Promise<R>

/**
 * Resolve a dot-notation method name to its call signature.
 *
 * @example
 * ```typescript
 * type UsersGet = APIMethod<"users.get">;
 * ```
 */
export type APIMethod<T extends string> =
    T extends `${infer Cat}.${infer Method}`
        ? Cat extends keyof APIMethods
            ? Method extends keyof APIMethods[Cat]
                ? APIMethods[Cat][Method]
                : never
            : never
        : never

/**
 * @example
 * ```typescript
 * type UsersGetParams = APIMethodParams<"users.get">;
 * ```
 */
export type APIMethodParams<T extends string> = Parameters<APIMethod<T>>[0]
/**
 * @example
 * ```typescript
 * type UsersGetReturn = APIMethodReturn<"users.get">;
 * ```
 */
export type APIMethodReturn<T extends string> = Awaited<
    ReturnType<APIMethod<T>>
>

/**
 * Nested proxy type for `api.users.get()` style access.
 *
 * APIMethods is already natively nested, so this is a simple alias.
 *
 * @example
 * ```typescript
 * const api = new Proxy({}, { ... }) as VKAPINested;
 * await api.users.get({ user_ids: [1] });
 * ```
 */
export type VKAPINested = APIMethods

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
