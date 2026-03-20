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
 * Generated at 20.03.2026, 01:21:50 using [types](https://github.com/vkraft/types) generator
 */

import type { APIMethods } from "./methods"
import type * as Objects from "./objects"

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

/**
 * Maps VK callback event type strings to their corresponding object types.
 *
 * Enables discriminated union narrowing:
 * ```typescript
 * if (event.type === "message_new") {
 *     event.object.message; // fully typed
 * }
 * ```
 */
export interface VKCallbackEventMap {
    audio_new: Objects.VKCallbackAudioNew
    board_post_new: Objects.VKCallbackBoardPostNew
    board_post_edit: Objects.VKCallbackBoardPostEdit
    board_post_restore: Objects.VKCallbackBoardPostRestore
    board_post_delete: Objects.VKCallbackBoardPostDelete
    confirmation: Objects.VKCallbackConfirmation
    group_leave: Objects.VKCallbackGroupLeave
    group_join: Objects.VKCallbackGroupJoin
    group_change_photo: Objects.VKCallbackGroupChangePhoto
    group_change_settings: Objects.VKCallbackGroupChangeSettings
    group_officers_edit: Objects.VKCallbackGroupOfficersEdit
    lead_forms_new: Record<string, unknown>
    market_comment_new: Record<string, unknown>
    market_comment_delete: Objects.VKCallbackMarketCommentDelete
    market_comment_edit: Record<string, unknown>
    market_comment_restore: Record<string, unknown>
    market_order_new: Record<string, unknown>
    market_order_edit: Record<string, unknown>
    message_new: Required<Objects.VKCallbackMessageNew>
    message_reply: Record<string, unknown>
    message_edit: Record<string, unknown>
    message_allow: Objects.VKCallbackMessageAllow
    message_deny: Objects.VKCallbackMessageDeny
    message_read: Objects.VKCallbackMessageRead
    message_typing_state: Objects.VKCallbackMessageTypingState
    messages_edit: Record<string, unknown>
    message_reaction_event: Objects.VKCallbackMessageReactionEvent
    photo_new: Objects.VKCallbackPhotoNew
    photo_comment_new: Record<string, unknown>
    photo_comment_delete: Objects.VKCallbackPhotoCommentDelete
    photo_comment_edit: Record<string, unknown>
    photo_comment_restore: Record<string, unknown>
    poll_vote_new: Objects.VKCallbackPollVoteNew
    user_block: Objects.VKCallbackUserBlock
    user_unblock: Objects.VKCallbackUserUnblock
    video_new: Objects.VKCallbackVideoNew
    video_comment_new: Record<string, unknown>
    video_comment_delete: Objects.VKCallbackVideoCommentDelete
    video_comment_edit: Record<string, unknown>
    video_comment_restore: Record<string, unknown>
    wall_post_new: Objects.VKCallbackWallPostNew
    wall_reply_new: Objects.VKCallbackWallReplyNew
    wall_reply_edit: Objects.VKCallbackWallReplyEdit
    wall_reply_delete: Record<string, unknown>
    wall_reply_restore: Objects.VKCallbackWallReplyRestore
    wall_repost: Objects.VKCallbackWallRepost
    wall_schedule_post_new: Record<string, unknown>
    wall_schedule_post_delete: Record<string, unknown>
}
