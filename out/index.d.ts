/**
 * @module
 *
 * This module re-exports all VK API type modules
 *
 * @example import
 * ```typescript
 * import { VKUsersUserFull, APIMethods, APIMethodReturn } from "@vkraft/types";
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 20.03.2026, 01:21:50 using [types](https://github.com/vkraft/types) generator
 */

export type * from "./methods"
export type * from "./params"
export type * as VKParams from "./params"
export type * from "./objects"
export type * as VKObjects from "./objects"
export type * from "./responses"
export type * as VKResponses from "./responses"
export type * from "./errors"
export type {
    APIMethod,
    APIMethodParams,
    APIMethodReturn,
    VKAPINested,
    VKCallbackEventMap,
    WithFields,
} from "./utils"
