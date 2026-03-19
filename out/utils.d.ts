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
 * Generated at 19.03.2026, 03:53:01 using [types](https://github.com/vkraft/types) generator
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
