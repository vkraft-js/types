/**
 * @module
 *
 * This module contains VK API response types
 *
 * @example import response
 * ```typescript
 * import { UsersGetResponse } from "@vkraft/types/responses";
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 16:49:52 using [types](https://github.com/vkraft/types) generator
 */

import type * as Objects from "./objects"

/**
 *
 */
export interface AccountChangePasswordResponse {
    /**
     * New token
     */
    token: string
    /**
     * New secret
     */
    secret?: string
}

/**
 *
 */
export interface AccountGetActiveOffersResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKAccountOffer[]
}

/**
 * Permissions mask
 */
export type AccountGetAppPermissionsResponse = number

/**
 *
 */
export interface AccountGetBannedResponse {
    /**
     * Total number
     */
    count: number
    items: number[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroup[]
}

/**
 *
 */
export type AccountGetCountersResponse = Objects.VKAccountAccountCounters

/**
 *
 */
export type AccountGetInfoResponse = Objects.VKAccountInfo

/**
 *
 */
export type AccountGetProfileInfoResponse = Objects.VKAccountUserSettings

/**
 *
 */
export type AccountGetPushSettingsResponse = Objects.VKAccountPushSettings

/**
 *
 */
export interface AccountSaveProfileInfoResponse {
    /**
     * 1 if changes has been processed
     */
    changed: Objects.VKBaseBoolInt
    name_request?: Objects.VKAccountNameRequest
}

/**
 *
 */
export type AdsAddOfficeUsersResponse = boolean[]

/**
 *
 */
export type AdsCheckLinkResponse = Objects.VKAdsLinkStatus

/**
 *
 */
export type AdsCreateAdsResponse = Objects.VKAdsCreateAdStatus[]

/**
 *
 */
export type AdsCreateCampaignsResponse = Objects.VKAdsCreateCampaignStatus[]

/**
 *
 */
export type AdsCreateClientsResponse = Objects.VKAdsCreateClientsStatus[]

/**
 *
 */
export interface AdsCreateLookalikeRequestResponse {
    /**
     * Request ID
     */
    request_id?: number
}

/**
 *
 */
export interface AdsCreateTargetGroupResponse {
    /**
     * Group ID
     */
    id?: number
    /**
     * Pixel code
     */
    pixel?: string
}

/**
 *
 */
export interface AdsCreateTargetPixelResponse {
    /**
     * Pixel ID
     */
    id?: number
    /**
     * Pixel code
     */
    pixel?: string
}

/**
 *
 */
export type AdsDeleteAdsResponse = number[]

/**
 *
 */
export type AdsDeleteCampaignsResponse = number[]

/**
 *
 */
export type AdsDeleteClientsResponse = number[]

/**
 *
 */
export type AdsGetAccountsResponse = Objects.VKAdsAccount[]

/**
 *
 */
export type AdsGetAdsLayoutResponse = Objects.VKAdsAdLayout[]

/**
 *
 */
export type AdsGetAdsTargetingResponse = Objects.VKAdsTargSettings[]

/**
 *
 */
export type AdsGetAdsResponse = Objects.VKAdsAd[]

/**
 * Budget
 */
export type AdsGetBudgetResponse = string

/**
 *
 */
export type AdsGetCampaignsResponse = Objects.VKAdsCampaign[]

/**
 *
 */
export interface AdsGetCategoriesResponse {
    /**
     * Old categories
     */
    v1?: Objects.VKAdsCategory[]
    /**
     * Actual categories
     */
    v2?: Objects.VKAdsCategory[]
}

/**
 *
 */
export type AdsGetClientsResponse = Objects.VKAdsClient[]

/**
 *
 */
export type AdsGetDemographicsResponse = Objects.VKAdsDemoStats[]

/**
 *
 */
export type AdsGetFloodStatsResponse = Objects.VKAdsFloodStats

/**
 *
 */
export interface AdsGetLookalikeRequestsResponse {
    /**
     * Total count of found lookalike requests
     */
    count: number
    /**
     * found lookalike requests
     */
    items: Objects.VKAdsLookalikeRequest[]
}

/**
 *
 */
export interface AdsGetMusiciansResponse {
    /**
     * Musicians
     */
    items: Objects.VKAdsMusician[]
}

/**
 *
 */
export type AdsGetOfficeUsersResponse = Objects.VKAdsUsers[]

/**
 *
 */
export type AdsGetPostsReachResponse = Objects.VKAdsPromotedPostReach[]

/**
 *
 */
export type AdsGetRejectionReasonResponse = Objects.VKAdsRejectReason

/**
 *
 */
export type AdsGetStatisticsResponse = Objects.VKAdsStats[]

/**
 *
 */
export type AdsGetSuggestionsCitiesResponse =
    Objects.VKAdsTargSuggestionsCities[]

/**
 *
 */
export type AdsGetSuggestionsRegionsResponse =
    Objects.VKAdsTargSuggestionsRegions[]

/**
 *
 */
export type AdsGetSuggestionsResponse = Objects.VKAdsTargSuggestions[]

/**
 *
 */
export type AdsGetSuggestionsSchoolsResponse =
    Objects.VKAdsTargSuggestionsSchools[]

/**
 *
 */
export type AdsGetTargetGroupsResponse = Objects.VKAdsTargetGroup[]

/**
 *
 */
export type AdsGetTargetPixelsResponse = Objects.VKAdsTargetPixelInfo[]

/**
 *
 */
export type AdsGetTargetingStatsResponse = Objects.VKAdsTargStats

/**
 * Photo upload URL
 */
export type AdsGetUploadURLResponse = string

/**
 * Video upload URL
 */
export type AdsGetVideoUploadURLResponse = string

/**
 * Imported contacts number
 */
export type AdsImportTargetContactsResponse = number

/**
 *
 */
export type AdsRemoveOfficeUsersResponse = boolean[]

/**
 * - `1` — ok
 */
export type AdsRemoveTargetContactsResponseResult = 1

/**
 *
 */
export interface AdsRemoveTargetContactsResponse {
    /**
     * Operation result
     */
    result: AdsRemoveTargetContactsResponseResult
}

/**
 *
 */
export interface AdsSaveLookalikeRequestResultResponse {
    /**
     * Retargeting group ID
     */
    retargeting_group_id: number
    /**
     * Audience count
     */
    audience_count: number
}

/**
 *
 */
export interface AdsShareTargetGroupResponse {
    /**
     * Group ID
     */
    id: number
}

/**
 *
 */
export type AdsUpdateAdsResponse = Objects.VKAdsUpdateAdsStatus[]

/**
 *
 */
export type AdsUpdateCampaignsResponse = Objects.VKAdsCreateCampaignStatus[]

/**
 *
 */
export type AdsUpdateClientsResponse = Objects.VKAdsUpdateClientsStatus[]

/**
 *
 */
export type AdsUpdateOfficeUsersResponse =
    Objects.VKAdsUpdateOfficeUsersResult[]

/**
 *
 */
export interface AppWidgetsGetAppImageUploadServerResponse {
    /**
     * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
     */
    upload_url?: string
}

/**
 *
 */
export type AppWidgetsGetAppImagesResponse = Objects.VKAppWidgetsPhotos

/**
 *
 */
export interface AppWidgetsGetGroupImageUploadServerResponse {
    /**
     * To upload an image, generate POST-request to upload_url with a file in photo field. Then call appWidgets.saveAppImage method
     */
    upload_url?: string
}

/**
 *
 */
export type AppWidgetsGetGroupImagesResponse = Objects.VKAppWidgetsPhotos

/**
 *
 */
export type AppWidgetsGetImagesByIdResponse = Objects.VKAppWidgetsPhoto[]

/**
 *
 */
export type AppWidgetsSaveAppImageResponse = Objects.VKAppWidgetsPhoto

/**
 *
 */
export type AppWidgetsSaveGroupImageResponse = Objects.VKAppWidgetsPhoto

/**
 *
 */
export interface AppsAddSnippetResponse {
    snippet_id: number
}

/**
 *
 */
export interface AppsCreatedGroupResponse {
    group_id: number
}

/**
 *
 */
export type AppsGetCatalogResponse = Objects.VKAppsCatalogList

/**
 *
 */
export interface AppsGetFriendsListExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface AppsGetFriendsListResponse {
    /**
     * Total number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface AppsGetLeaderboardExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKAppsLeaderboard[]
    profiles?: Objects.VKUsersUser[]
}

/**
 *
 */
export interface AppsGetLeaderboardResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKAppsLeaderboard[]
}

/**
 *
 */
export interface AppsGetMiniAppPoliciesResponse {
    /**
     * URL of the app's privacy policy
     */
    privacy_policy?: string
    /**
     * URL of the app's terms
     */
    terms?: string
}

/**
 *
 */
export interface AppsGetScopesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKAppsScope[]
}

/**
 * Score number
 */
export type AppsGetScoreResponse = number

/**
 *
 */
export interface AppsGetSnippetsResponse {
    items?: Objects.VKAppsCustomSnippet[]
}

/**
 *
 */
export type AppsGetTestingGroupsResponse = Objects.VKAppsTestingGroup[]

/**
 *
 */
export interface AppsGetResponse {
    /**
     * Total number of applications
     */
    count: number
    /**
     * List of applications
     */
    items: Objects.VKAppsApp[]
    /**
     * List of friends profiles, used only when return_friends=true
     */
    profiles?: Objects.VKUsersUserFull[]
    /**
     * List of groups, used only when extended=true
     */
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface AppsImageUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    image?: string
}

/**
 *
 */
export interface AppsIsNotificationsAllowedResponse {
    /**
     * Whether notifications are allowed for current user from concrete app or not
     */
    is_allowed: boolean
}

/**
 * Request ID
 */
export type AppsSendRequestResponse = number

/**
 * - `1` — ok
 */
export type AuthRestoreResponseSuccess = 1

/**
 *
 */
export interface AuthRestoreResponse {
    /**
     * 1 if success
     */
    success?: AuthRestoreResponseSuccess
    /**
     * Parameter needed to grant access by code
     */
    sid?: string
}

/**
 *
 */
export type BaseBoolResponse = Objects.VKBaseBoolInt

/**
 *
 */
export type BaseGetUploadServerResponse = Objects.VKBaseUploadServer

/**
 *
 */
export type BaseOkResponse = number

/**
 *
 */
export type BaseUndefinedResponse = Record<string, unknown>

/**
 * Topic ID
 */
export type BoardAddTopicResponse = number

/**
 * Comment ID
 */
export type BoardCreateCommentResponse = number

/**
 *
 */
export interface BoardGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBoardTopicComment[]
    poll?: Objects.VKPollsPoll
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    /**
     * Offset of comment
     */
    real_offset?: number
}

/**
 *
 */
export interface BoardGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBoardTopicComment[]
    poll?: Objects.VKPollsPoll
    /**
     * Offset of comment
     */
    real_offset?: number
}

/**
 *
 */
export interface BoardGetTopicsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBoardTopic[]
    default_order: Objects.VKBoardDefaultOrder
    /**
     * Information whether current user can add topic
     */
    can_add_topics: Objects.VKBaseBoolInt
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface BoardGetTopicsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBoardTopic[]
    default_order: Objects.VKBoardDefaultOrder
    /**
     * Information whether current user can add topic
     */
    can_add_topics: Objects.VKBaseBoolInt
}

/**
 *
 */
export interface BugtrackerAddCompanyGroupsMembersResponse {
    errors: Objects.VKBugtrackerAddCompanyGroupsMembersError[]
}

/**
 *
 */
export interface BugtrackerAddCompanyMembersResponse {
    errors: string[]
}

/**
 *
 */
export interface BugtrackerCreateCommentResponse {
    comment: Objects.VKBugtrackerComment
    comment_flood?: boolean
    subscribe_state?: Objects.VKBugtrackerBugreportSubscribeState
}

/**
 *
 */
export interface BugtrackerGetBugreportByIdResponse {
    bugreport?: Objects.VKBugtrackerBugreport
    profiles?: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface BugtrackerGetCompanyGroupMembersResponse {
    user_ids: number[]
    profiles?: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface BugtrackerGetCompanyMembersResponse {
    company_members: Objects.VKBugtrackerCompanyMember[]
    count: number
    profiles?: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface BugtrackerGetDownloadVersionUrlResponse {
    url: string
    app_title?: string
    bundle_name?: string
    build_id?: number
    build_name?: string
    build_title?: string
}

/**
 *
 */
export interface CallsStartResponse {
    /**
     * Call id
     */
    call_id?: string
    /**
     * Join link
     */
    join_link: string
    /**
     * OK join link
     */
    ok_join_link: string
    /**
     * video id for link
     */
    broadcast_video_id?: string
    /**
     * video id for streaming
     */
    broadcast_ov_id?: string
    short_credentials?: Objects.VKCallsShortCredentials
}

/**
 *
 */
export interface DatabaseGetChairsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBaseObject[]
}

/**
 *
 */
export type DatabaseGetCitiesByIdResponse = Objects.VKDatabaseCityById[]

/**
 *
 */
export interface DatabaseGetCitiesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseCity[]
}

/**
 *
 */
export type DatabaseGetCountriesByIdResponse = Objects.VKBaseCountry[]

/**
 *
 */
export interface DatabaseGetCountriesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKBaseCountry[]
}

/**
 *
 */
export interface DatabaseGetFacultiesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseFaculty[]
}

/**
 *
 */
export type DatabaseGetMetroStationsByIdResponse = Objects.VKDatabaseStation[]

/**
 *
 */
export interface DatabaseGetMetroStationsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseStation[]
}

/**
 *
 */
export interface DatabaseGetRegionsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseRegion[]
}

/**
 *
 */
export type DatabaseGetSchoolClassesNewResponse =
    Objects.VKDatabaseSchoolClass[]

/**
 *
 */
export interface DatabaseGetSchoolsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseSchool[]
}

/**
 *
 */
export interface DatabaseGetUniversitiesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDatabaseUniversity[]
}

/**
 * Document ID
 */
export type DocsAddResponse = number

/**
 *
 */
export interface DocsDocUploadResponse {
    /**
     * Uploaded file data
     */
    file?: string
}

/**
 *
 */
export type DocsGetByIdResponse = Objects.VKDocsDoc[]

/**
 *
 */
export interface DocsGetTypesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDocsDocTypes[]
}

/**
 *
 */
export type DocsGetUploadServerResponse = Objects.VKBaseUploadServer

/**
 *
 */
export interface DocsGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDocsDoc[]
}

/**
 *
 */
export interface DocsSaveResponse {
    type?: Objects.VKDocsDocAttachmentType
    audio_message?: Objects.VKMessagesAudioMessage
    doc?: Objects.VKDocsDoc
    graffiti?: Objects.VKMessagesGraffiti
}

/**
 *
 */
export interface DocsSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKDocsDoc[]
}

/**
 *
 */
export type DonutGetSubscriptionResponse =
    Objects.VKDonutDonatorSubscriptionInfo

/**
 *
 */
export interface DonutGetSubscriptionsResponse {
    subscriptions: Objects.VKDonutDonatorSubscriptionInfo[]
    count?: number
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface DownloadedGamesPaidStatusResponse {
    /**
     * Game has been paid
     */
    is_paid: boolean
}

/**
 *
 */
export type FaveAddTagResponse = Objects.VKFaveTag

/**
 *
 */
export interface FaveGetPagesResponse {
    count: number
    items: Objects.VKFavePage[]
}

/**
 *
 */
export interface FaveGetTagsResponse {
    count: number
    items: Objects.VKFaveTag[]
}

/**
 *
 */
export interface FaveGetExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKFaveBookmark[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroup[]
}

/**
 *
 */
export interface FaveGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKFaveBookmark[]
}

/**
 *
 */
export interface FriendsAddListResponse {
    /**
     * List ID
     */
    list_id: number
}

/**
 * Friend request status
 */
export type FriendsAddResponse = number

/**
 *
 */
export type FriendsAreFriendsExtendedResponse =
    Objects.VKFriendsFriendExtendedStatus[]

/**
 *
 */
export type FriendsAreFriendsResponse = Objects.VKFriendsFriendStatus[]

/**
 * - `1` — ok
 */
export type FriendsDeleteResponseFriendDeleted = 1
/**
 * - `1` — ok
 */
export type FriendsDeleteResponseOutRequestDeleted = 1
/**
 * - `1` — ok
 */
export type FriendsDeleteResponseInRequestDeleted = 1
/**
 * - `1` — ok
 */
export type FriendsDeleteResponseSuggestionDeleted = 1

/**
 *
 */
export interface FriendsDeleteResponse {
    success: number
    /**
     * Returns 1 if friend has been deleted
     */
    friend_deleted?: FriendsDeleteResponseFriendDeleted
    /**
     * Returns 1 if out request has been canceled
     */
    out_request_deleted?: FriendsDeleteResponseOutRequestDeleted
    /**
     * Returns 1 if incoming request has been declined
     */
    in_request_deleted?: FriendsDeleteResponseInRequestDeleted
    /**
     * Returns 1 if suggestion has been declined
     */
    suggestion_deleted?: FriendsDeleteResponseSuggestionDeleted
}

/**
 *
 */
export type FriendsGetAppUsersResponse = number[]

/**
 *
 */
export interface FriendsGetListsResponse {
    /**
     * Total number of friends lists
     */
    count: number
    items: Objects.VKFriendsFriendsList[]
}

/**
 *
 */
export type FriendsGetMutualResponse = number[]

/**
 *
 */
export type FriendsGetMutualTargetUidsResponse = Objects.VKFriendsMutualFriend[]

/**
 *
 */
export type FriendsGetMutualTotalCountResponse = Objects.VKFriendsMutualFriend

/**
 *
 */
export type FriendsGetOnlineExtendedResponse = Objects.VKFriendsOnlineUsers

/**
 *
 */
export type FriendsGetOnlineOnlineMobileExtendedResponse =
    Objects.VKFriendsOnlineUsersWithMobile

/**
 *
 */
export interface FriendsGetOnlineOnlineMobileResponse {
    online: number[]
    online_mobile: number[]
}

/**
 *
 */
export type FriendsGetOnlineResponse = number[]

/**
 *
 */
export type FriendsGetRecentResponse = number[]

/**
 *
 */
export interface FriendsGetRequestsExtendedResponse {
    /**
     * Total requests number
     */
    count: number
    items: Objects.VKFriendsRequestsXtrMessage[]
    /**
     * Total unread requests number
     */
    count_unread?: number
    /**
     * Friend requests last viewed timestamp
     */
    last_viewed?: number
}

/**
 *
 */
export interface FriendsGetRequestsNeedMutualResponse {
    /**
     * Total requests number
     */
    count: number
    items: Objects.VKFriendsRequestsXtrMutual[]
    /**
     * Total unread requests number
     */
    count_unread?: number
    /**
     * Friend requests last viewed timestamp
     */
    last_viewed?: number
}

/**
 *
 */
export interface FriendsGetRequestsResponse {
    /**
     * Total requests number
     */
    count: number
    items: number[]
    /**
     * Total unread requests number
     */
    count_unread?: number
    /**
     * Friend requests last viewed timestamp
     */
    last_viewed?: number
}

/**
 *
 */
export interface FriendsGetSuggestionsResponse {
    /**
     * Total results number
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface FriendsGetFieldsResponse {
    /**
     * Total friends number
     */
    count: number
    items: Objects.VKUsersUserFull[]
    profiles?: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface FriendsGetResponse {
    /**
     * Total friends number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface FriendsSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface GiftsGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKGiftsGift[]
}

/**
 *
 */
export type GroupsAddAddressResponse = Objects.VKGroupsAddress

/**
 *
 */
export interface GroupsAddCallbackServerResponse {
    server_id: number
}

/**
 *
 */
export type GroupsAddLinkResponse = Objects.VKGroupsLinksItem

/**
 *
 */
export type GroupsCreateResponse = Objects.VKGroupsGroupFull

/**
 * Result
 */
export type GroupsEditAddressResponse = Objects.VKGroupsAddress

/**
 *
 */
export interface GroupsGetAddressesResponse {
    /**
     * Total count of addresses
     */
    count: number
    items: Objects.VKGroupsAddress[]
}

/**
 *
 */
export interface GroupsGetBannedResponse {
    /**
     * Total users number
     */
    count: number
    items: Objects.VKGroupsOwnerXtrBanInfo[]
}

/**
 *
 */
export interface GroupsGetByIdObjectResponse {
    groups?: Objects.VKGroupsGroupFull[]
    profiles?: Objects.VKGroupsProfileItem[]
}

/**
 *
 */
export interface GroupsGetCallbackConfirmationCodeResponse {
    /**
     * Confirmation code
     */
    code: string
}

/**
 *
 */
export interface GroupsGetCallbackServersResponse {
    count: number
    items: Objects.VKGroupsCallbackServer[]
}

/**
 *
 */
export type GroupsGetCallbackSettingsResponse = Objects.VKGroupsCallbackSettings

/**
 *
 */
export interface GroupsGetCatalogInfoExtendedResponse {
    /**
     * Information whether catalog is enabled for current user
     */
    enabled: Objects.VKBaseBoolInt
    categories?: Objects.VKGroupsGroupCategoryFull[]
}

/**
 *
 */
export interface GroupsGetCatalogInfoResponse {
    /**
     * Information whether catalog is enabled for current user
     */
    enabled: Objects.VKBaseBoolInt
    categories?: Objects.VKGroupsGroupCategory[]
}

/**
 *
 */
export interface GroupsGetInvitedUsersResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface GroupsGetInvitesExtendedResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKGroupsGroupFull[]
    profiles: Objects.VKUsersUserMin[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface GroupsGetInvitesResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export type GroupsGetLongPollServerResponse = Objects.VKGroupsLongPollServer

/**
 *
 */
export type GroupsGetLongPollSettingsResponse = Objects.VKGroupsLongPollSettings

/**
 *
 */
export interface GroupsGetMembersFieldsResponse {
    /**
     * Total members number
     */
    count: number
    items: Objects.VKGroupsUserXtrRole[]
    /**
     * Encoded string for a next page
     */
    next_from?: string
}

/**
 *
 */
export interface GroupsGetMembersFilterResponse {
    /**
     * Total members number
     */
    count: number
    items: Objects.VKGroupsMemberRole[]
    /**
     * Encoded string for a next page
     */
    next_from?: string
}

/**
 *
 */
export interface GroupsGetMembersResponse {
    /**
     * Total members number
     */
    count: number
    items: number[]
    /**
     * Encoded string for a next page
     */
    next_from?: string
}

/**
 *
 */
export interface GroupsGetOnlineStatusResponse {
    /**
     * Estimated time of answer (for status = answer_mark)
     */
    minutes?: number
    status: Objects.VKGroupsOnlineStatusType
}

/**
 *
 */
export interface GroupsGetRequestsFieldsResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface GroupsGetRequestsResponse {
    /**
     * Total communities number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface GroupsGetSettingsResponse {
    /**
     * Community access settings
     */
    access?: Objects.VKGroupsGroupAccess
    /**
     * Community's page domain
     */
    address?: string
    /**
     * Audio settings
     */
    audio: Objects.VKGroupsGroupAudio
    /**
     * Articles settings
     */
    articles: number
    /**
     * Photo suggests setting
     */
    recognize_photo?: number
    /**
     * City id of group
     */
    city_id: number
    /**
     * City name of group
     */
    city_name: string
    contacts?: Objects.VKBaseBoolInt
    links?: Objects.VKBaseBoolInt
    sections_list?: Objects.VKGroupsSectionsListItem[]
    main_section?: Objects.VKGroupsGroupFullSection
    secondary_section?: Objects.VKGroupsGroupFullSection
    age_limits?: Objects.VKGroupsGroupAgeLimits
    /**
     * Community description
     */
    description: string
    /**
     * Docs settings
     */
    docs: Objects.VKGroupsGroupDocs
    events?: Objects.VKBaseBoolInt
    addresses?: boolean
    /**
     * By enabling bot abilities, you can send users messages with a customized keyboard attached as well as use other promotional abilities
     */
    bots_capabilities?: Objects.VKBaseBoolInt
    /**
     * If this setting is enabled, users will see a Start button when they start a chat with your community for the first time
     */
    bots_start_button?: Objects.VKBaseBoolInt
    /**
     * If this setting is enabled then users can add your community to a chat
     */
    bots_add_to_chat?: Objects.VKBaseBoolInt
    bot_online_booking_enabled?: Objects.VKBaseBoolInt
    /**
     * Information whether the obscene filter is enabled
     */
    obscene_filter: Objects.VKBaseBoolInt
    /**
     * Information whether the stop words filter is enabled
     */
    obscene_stopwords: Objects.VKBaseBoolInt
    /**
     * The list of stop words
     */
    obscene_words: string[]
    /**
     * Information whether the toxic filter is enabled
     */
    toxic_filter: Objects.VKBaseBoolInt
    /**
     * Information whether the replies from groups is disabled
     */
    disable_replies_from_groups: Objects.VKBaseBoolInt
    event_group_id?: number
    /**
     * Photos settings
     */
    photos: Objects.VKGroupsGroupPhotos
    /**
     * Information about the group category
     */
    public_category?: number
    public_category_list?: Objects.VKGroupsGroupPublicCategoryList[]
    public_date?: string
    public_date_label?: string
    /**
     * Information about the group subcategory
     */
    public_subcategory?: number
    /**
     * URL of the RSS feed
     */
    rss?: string
    /**
     * Start date
     */
    start_date?: number
    /**
     * Finish date in Unix-time format
     */
    finish_date?: number
    /**
     * Community subject ID
     */
    subject?: number
    subject_list?: Objects.VKGroupsSubjectItem[]
    suggested_privacy?: Objects.VKGroupsGroupSuggestedPrivacy
    /**
     * Community title
     */
    title: string
    /**
     * Topics settings
     */
    topics: Objects.VKGroupsGroupTopics
    twitter?: Objects.VKGroupsSettingsTwitter
    /**
     * Video settings
     */
    video: Objects.VKGroupsGroupVideo
    /**
     * Wall settings
     */
    wall: Objects.VKGroupsGroupWall
    /**
     * Community website
     */
    website?: string
    /**
     * Community phone
     */
    phone?: string
    /**
     * Community email
     */
    email?: string
    /**
     * Wiki settings
     */
    wiki: Objects.VKGroupsGroupWiki
}

/**
 *
 */
export type GroupsGetTagListResponse = Objects.VKGroupsGroupTag[]

/**
 *
 */
export interface GroupsGetTokenPermissionsResponse {
    mask: number
    permissions: Objects.VKGroupsTokenPermissionSetting[]
}

/**
 *
 */
export interface GroupsGetObjectExtendedResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface GroupsGetResponse {
    /**
     * Total communities number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface GroupsInviteUserIdsListResponse {
    /**
     * Total invited users number
     */
    invites_send_count: number
}

/**
 *
 */
export interface GroupsIsMemberExtendedResponse {
    /**
     * Information whether user is a member of the group
     */
    member: Objects.VKBaseBoolInt
    /**
     * Information whether user has been invited to the group
     */
    invitation?: Objects.VKBaseBoolInt
    /**
     * Information whether user can be invited
     */
    can_invite?: Objects.VKBaseBoolInt
    /**
     * Information whether user's invite to the group can be recalled
     */
    can_recall?: Objects.VKBaseBoolInt
    /**
     * Information whether user has sent request to the group
     */
    request?: Objects.VKBaseBoolInt
}

/**
 *
 */
export type GroupsIsMemberUserIdsExtendedResponse =
    Objects.VKGroupsMemberStatusFull[]

/**
 *
 */
export type GroupsIsMemberUserIdsResponse = Objects.VKGroupsMemberStatus[]

/**
 *
 */
export interface GroupsSearchResponse {
    /**
     * Total communities number
     */
    count: number
    items: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface LeadFormsCreateResponse {
    form_id: number
    url: string
}

/**
 *
 */
export interface LeadFormsDeleteResponse {
    form_id: number
}

/**
 *
 */
export interface LeadFormsGetLeadsResponse {
    leads: Objects.VKLeadFormsLead[]
    next_page_token?: string
}

/**
 *
 */
export type LeadFormsGetResponse = Objects.VKLeadFormsForm

/**
 *
 */
export type LeadFormsListResponse = Objects.VKLeadFormsForm[]

/**
 *
 */
export type LeadFormsUploadUrlResponse = string

/**
 *
 */
export interface LikesAddResponse {
    /**
     * Total likes number
     */
    likes: number
}

/**
 *
 */
export interface LikesDeleteResponse {
    /**
     * Total likes number
     */
    likes: number
}

/**
 *
 */
export interface LikesGetListExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKUsersSubscriptionsItem[]
    /**
     * Author of post if he liked the comment
     */
    liked_by_author?: Objects.VKUsersSubscriptionsItem
    /**
     * Group where post is present if they liked the comment
     */
    liked_by_group?: Objects.VKUsersSubscriptionsItem
}

/**
 *
 */
export interface LikesGetListResponse {
    /**
     * Total number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface LikesIsLikedResponse {
    /**
     * Information whether user liked the object
     */
    liked: Objects.VKBaseBoolInt
    /**
     * Information whether user reposted the object
     */
    copied: Objects.VKBaseBoolInt
}

/**
 *
 */
export interface MarketAddAlbumResponse {
    /**
     * Album ID
     */
    market_album_id?: number
    /**
     * Albums count
     */
    albums_count?: number
}

/**
 *
 */
export interface MarketAddPropertyVariantResponse {
    variant_id: number
}

/**
 *
 */
export interface MarketAddPropertyResponse {
    property_id: number
}

/**
 *
 */
export interface MarketAddResponse {
    /**
     * Item ID
     */
    market_item_id: number
}

/**
 * Comment ID
 */
export type MarketCreateCommentResponse = number

/**
 *
 */
export interface MarketGetAlbumByIdResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketAlbum[]
}

/**
 *
 */
export interface MarketGetAlbumsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketAlbum[]
}

/**
 *
 */
export interface MarketGetByIdExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketItemFull[]
}

/**
 *
 */
export interface MarketGetByIdResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketItem[]
}

/**
 *
 */
export interface MarketGetCategoriesNewResponse {
    items: Objects.VKMarketMarketCategoryTree[]
}

/**
 *
 */
export interface MarketGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
    /**
     * List of users, available only if extended=true exists in query params
     */
    profiles?: Objects.VKUsersUserFull[]
    /**
     * List of groups, available only if extended=true exists in query params
     */
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MarketGetFavesForAttachResponse {
    market_items: Objects.VKMarketMarketItem[]
    /**
     * Offset for using in next query
     */
    next_from?: number
}

/**
 *
 */
export interface MarketGetGroupOrdersResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketOrder[]
}

/**
 *
 */
export interface MarketGetOrderByIdResponse {
    order?: Objects.VKMarketOrder
}

/**
 *
 */
export interface MarketGetOrderItemsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketOrderItem[]
}

/**
 *
 */
export interface MarketGetOrdersExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketOrder[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MarketGetOrdersResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketOrder[]
}

/**
 *
 */
export interface MarketGetPropertiesResponse {
    items: Objects.VKMarketProperty[]
    count: number
}

/**
 *
 */
export interface MarketGetExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketItemFull[]
    variants?: Objects.VKMarketMarketItemFull[]
}

/**
 *
 */
export interface MarketGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMarketMarketItem[]
    variants?: Objects.VKMarketMarketItem[]
}

/**
 *
 */
export interface MarketGroupItemsResponse {
    item_group_id: number
}

/**
 *
 */
export type MarketPhotoIdBulkResponse = Objects.VKMarketUploadPhotoData[]

/**
 *
 */
export interface MarketPhotoIdResponse {
    /**
     * Photo ID
     */
    photo_id: number
    photo?: Objects.VKPhotosPhoto
}

/**
 *
 */
export interface MarketSearchBasicResponse {
    /**
     * Current chunk size
     */
    count: number
    /**
     * Total size
     */
    total: number
    /**
     * Next chunk present
     */
    has_more?: boolean
    items: Objects.VKMarketMarketItemBasicWithGroup[]
}

/**
 *
 */
export interface MarketSearchExtendedResponse {
    /**
     * Total number
     */
    count: number
    view_type: Objects.VKMarketServicesViewType
    items: Objects.VKMarketMarketItemFull[]
    variants?: Objects.VKMarketMarketItemFull[]
}

/**
 *
 */
export interface MarketSearchResponse {
    /**
     * Total number
     */
    count: number
    view_type: Objects.VKMarketServicesViewType
    items: Objects.VKMarketMarketItem[]
    variants?: Objects.VKMarketMarketItem[]
    groups?: Objects.VKGroupsGroupFull[]
    filters?: Objects.VKMarketGlobalSearchFilters
}

/**
 *
 */
export interface MessagesAddChatUsersResponse {
    failed_peer_ids: number[]
    failed_phone_numbers: string[]
    invitees: number[]
}

/**
 *
 */
export interface MessagesCreateChatWithPeerIdsResponse {
    /**
     * Chat ID
     */
    chat_id?: number
    /**
     * List of successfully added peer ids
     */
    peer_ids?: number[]
}

/**
 *
 */
export interface MessagesDeleteChatPhotoResponse {
    /**
     * Service message ID
     */
    message_id?: number
    chat?: Objects.VKMessagesChat
}

/**
 *
 */
export interface MessagesDeleteConversationResponse {
    /**
     * Id of the last message, that was deleted
     */
    last_deleted_id: number
}

/**
 *
 */
export type MessagesDeleteFullResponse =
    Objects.VKMessagesDeleteFullResponseItem[]

/**
 *
 */
export interface MessagesGetByConversationMessageIdExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetByConversationMessageIdResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
}

/**
 *
 */
export interface MessagesGetByIdExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetByIdResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
}

/**
 *
 */
export interface MessagesGetChatPreviewResponse {
    preview: Objects.VKMessagesChatPreview
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export type MessagesGetChatChatIdsFieldsResponse = Objects.VKMessagesChatFull[]

/**
 *
 */
export type MessagesGetChatChatIdsResponse = Objects.VKMessagesChat[]

/**
 *
 */
export type MessagesGetChatFieldsResponse = Objects.VKMessagesChatFull

/**
 *
 */
export type MessagesGetChatResponse = Objects.VKMessagesChat

/**
 *
 */
export type MessagesGetConversationMembersResponse =
    Objects.VKMessagesGetConversationMembers

/**
 *
 */
export type MessagesGetConversationsByIdExtendedResponse =
    Objects.VKMessagesGetConversationByIdExtended

/**
 *
 */
export type MessagesGetConversationsByIdResponse =
    Objects.VKMessagesGetConversationById

/**
 *
 */
export interface MessagesGetConversationsResponse {
    /**
     * Total number
     */
    count: number
    /**
     * Unread dialogs number
     */
    unread_count?: number
    items: Objects.VKMessagesConversationWithMessage[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetHistoryAttachmentsResponse {
    items: Objects.VKMessagesHistoryAttachment[]
    /**
     * Value for pagination
     */
    next_from?: string
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetHistoryExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    conversations?: Objects.VKMessagesConversation[]
}

/**
 *
 */
export interface MessagesGetHistoryResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
}

/**
 *
 */
export interface MessagesGetImportantMessagesExtendedResponse {
    messages: Objects.VKMessagesMessagesArray
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    conversations?: Objects.VKMessagesConversation[]
}

/**
 *
 */
export interface MessagesGetImportantMessagesResponse {
    messages: Objects.VKMessagesMessagesArray
    profiles?: Objects.VKUsersUser[]
    groups?: Objects.VKGroupsGroupFull[]
    conversations?: Objects.VKMessagesConversation[]
}

/**
 *
 */
export interface MessagesGetIntentUsersResponse {
    count: number
    items: number[]
    profiles?: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface MessagesGetInviteLinkByOwnerResponse {
    items: Objects.VKMessagesGetInviteLinkByOwnerResponseItem[]
}

/**
 *
 */
export interface MessagesGetInviteLinkResponse {
    link?: string
}

/**
 *
 */
export type MessagesGetLastActivityResponse = Objects.VKMessagesLastActivity

/**
 *
 */
export interface MessagesGetLongPollHistoryResponse {
    history?: (string | number)[][]
    messages?: Objects.VKMessagesLongpollMessages
    credentials?: Objects.VKMessagesLongpollParams
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    chats?: Objects.VKMessagesChat[]
    /**
     * Persistence timestamp
     */
    new_pts?: number
    from_pts?: number
    /**
     * Has more
     */
    more?: boolean
    conversations?: Objects.VKMessagesConversation[]
}

/**
 *
 */
export type MessagesGetLongPollServerResponse = Objects.VKMessagesLongpollParams

/**
 *
 */
export interface MessagesGetMessagesReactionsResponse {
    items: Objects.VKMessagesReactionCountersResponseItem[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetReactedPeersResponse {
    /**
     * Total number
     */
    count: number
    reactions: Objects.VKMessagesReactionResponseItem[]
    counters: Objects.VKMessagesReactionCounterResponseItem[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesGetReactionsAssetsResponse {
    /**
     * Current reactions assets version
     */
    version: number
    /**
     * Base reactions assets to display by default
     */
    assets: Objects.VKMessagesReactionAssetItem[]
    /**
     * Extended reactions assets for special occasions, user allowed to switch to the base version
     */
    override_assets?: Objects.VKMessagesReactionAssetItem[]
    /**
     * Enabled reactions for current account. You can use reactions only from this array or already present on target message
     */
    reaction_ids: number[]
}

/**
 *
 */
export interface MessagesIsMessagesFromGroupAllowedResponse {
    is_allowed?: Objects.VKBaseBoolInt
}

/**
 *
 */
export interface MessagesJoinChatByInviteLinkResponse {
    chat_id?: number
}

/**
 *
 */
export type MessagesMarkAsImportantDeprecatedResponse = number[]

/**
 *
 */
export type MessagesPinResponse = Objects.VKMessagesPinnedMessage

/**
 *
 */
export interface MessagesSearchConversationsExtendedResponse {
    /**
     * Total results number
     */
    count: number
    items: Objects.VKMessagesConversation[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface MessagesSearchConversationsResponse {
    /**
     * Total results number
     */
    count: number
    items: Objects.VKMessagesConversation[]
}

/**
 *
 */
export interface MessagesSearchExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    conversations?: Objects.VKMessagesConversation[]
}

/**
 *
 */
export interface MessagesSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKMessagesMessage[]
}

/**
 * Message ID
 */
export type MessagesSendDeprecatedResponse = number

/**
 *
 */
export type MessagesSendUserIdsResponse =
    Objects.VKMessagesSendUserIdsResponseItem[]

/**
 *
 */
export interface MessagesSetChatPhotoResponse {
    /**
     * Service message ID
     */
    message_id?: number
    chat?: Objects.VKMessagesChat
}

/**
 *
 */
export interface NewsfeedGenericResponse {
    items: Objects.VKNewsfeedNewsfeedItem[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    lives_items?: Objects.VKNewsfeedNewsfeedItem[]
}

/**
 *
 */
export interface NewsfeedGetBannedExtendedResponse {
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface NewsfeedGetBannedResponse {
    groups?: number[]
    members?: number[]
}

/**
 *
 */
export interface NewsfeedGetCommentsResponse {
    items: Objects.VKNewsfeedCommentsItem[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    /**
     * Next from value
     */
    next_from?: string
}

/**
 *
 */
export interface NewsfeedGetListsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKNewsfeedListFull[]
}

/**
 *
 */
export interface NewsfeedGetListsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKNewsfeedList[]
}

/**
 *
 */
export interface NewsfeedGetMentionsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallpostFull[]
}

/**
 *
 */
export interface NewsfeedGetSuggestedSourcesResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKUsersSubscriptionsItem[]
}

/**
 *
 */
export interface NewsfeedIgnoreItemResponse {
    status: boolean
}

/**
 * List ID
 */
export type NewsfeedSaveListResponse = number

/**
 *
 */
export interface NewsfeedSearchExtendedResponse {
    items: Objects.VKWallWallpostFull[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    suggested_queries?: string[]
    next_from?: string
    /**
     * Filtered number
     */
    count: number
    /**
     * Total number
     */
    total_count?: number
}

/**
 *
 */
export interface NewsfeedSearchExtendedStrictResponse {
    items: Objects.VKWallWallpostFull[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    suggested_queries?: string[]
    next_from?: string
    /**
     * Filtered number
     */
    count: number
    /**
     * Total number
     */
    total_count?: number
}

/**
 *
 */
export interface NewsfeedSearchResponse {
    items: Objects.VKWallWallpostFull[]
    suggested_queries?: string[]
    next_from?: string
    /**
     * Filtered number
     */
    count: number
    /**
     * Total number
     */
    total_count?: number
}

/**
 *
 */
export interface NewsfeedSearchStrictResponse {
    items: Objects.VKWallWallpostFull[]
    suggested_queries?: string[]
    next_from?: string
    /**
     * Filtered number
     */
    count: number
    /**
     * Total number
     */
    total_count?: number
}

/**
 * Note ID
 */
export type NotesAddResponse = number

/**
 * Comment ID
 */
export type NotesCreateCommentResponse = number

/**
 *
 */
export type NotesGetByIdResponse = Objects.VKNotesNote

/**
 *
 */
export interface NotesGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKNotesNoteComment[]
}

/**
 *
 */
export interface NotesGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKNotesNote[]
}

/**
 *
 */
export interface NotificationsGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKNotificationsNotificationItem[]
    profiles?: Objects.VKUsersUser[]
    groups?: Objects.VKGroupsGroup[]
    /**
     * Time when user has been checked notifications last time
     */
    last_viewed?: number
    photos?: Objects.VKPhotosPhoto[]
    videos?: Objects.VKVideoVideoFull[]
    apps?: Objects.VKAppsApp[]
    next_from?: string
    ttl?: number
}

/**
 *
 */
export type NotificationsSendMessageResponse =
    Objects.VKNotificationsSendMessageItem[]

/**
 * New state
 */
export type OrdersChangeStateResponse = string

/**
 *
 */
export type OrdersGetAmountResponse = Objects.VKOrdersAmount[]

/**
 *
 */
export type OrdersGetByIdResponse = Objects.VKOrdersOrder[]

/**
 *
 */
export type OrdersGetUserSubscriptionByIdResponse = Objects.VKOrdersSubscription

/**
 *
 */
export interface OrdersGetUserSubscriptionsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKOrdersSubscription[]
}

/**
 *
 */
export type OrdersGetResponse = Objects.VKOrdersOrder[]

/**
 *
 */
export type PagesGetHistoryResponse = Objects.VKPagesWikipageHistory[]

/**
 *
 */
export type PagesGetTitlesResponse = Objects.VKPagesWikipage[]

/**
 *
 */
export interface PagesGetVersionResponse {
    id: number
    page_id: number
    group_id: number
    title: string
    source: string
    current_user_can_edit: number
    who_can_view: number
    who_can_edit: number
    version_created: number
    creator_id?: number
    parent?: string
    parent2?: string
    html?: string
}

/**
 *
 */
export type PagesGetResponse = Objects.VKPagesWikipageFull

/**
 * HTML source
 */
export type PagesParseWikiResponse = string

/**
 * Page ID
 */
export type PagesSaveAccessResponse = number

/**
 * Page ID
 */
export type PagesSaveResponse = number

/**
 * Photo ID
 */
export type PhotosCopyResponse = number

/**
 *
 */
export type PhotosCreateAlbumResponse = Objects.VKPhotosPhotoAlbumFull

/**
 * Created comment ID
 */
export type PhotosCreateCommentResponse = number

/**
 * Albums number
 */
export type PhotosGetAlbumsCountResponse = number

/**
 *
 */
export interface PhotosGetAlbumsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhotoAlbumFull[]
}

/**
 *
 */
export interface PhotosGetAllCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
}

/**
 *
 */
export interface PhotosGetAllResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhoto[]
    /**
     * Information whether next page is presented
     */
    more?: Objects.VKBaseBoolInt
}

/**
 *
 */
export type PhotosGetByIdResponse = Objects.VKPhotosPhoto[]

/**
 *
 */
export interface PhotosGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number
    /**
     * Real offset of the comments
     */
    real_offset?: number
    items: Objects.VKWallWallComment[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface PhotosGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    /**
     * Real offset of the comments
     */
    real_offset?: number
    items: Objects.VKWallWallComment[]
}

/**
 *
 */
export type PhotosGetMessagesUploadServerResponse = Objects.VKPhotosPhotoUpload

/**
 *
 */
export interface PhotosGetNewTagsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhotoXtrTagInfo[]
}

/**
 *
 */
export type PhotosGetTagsResponse = Objects.VKPhotosPhotoTag[]

/**
 *
 */
export type PhotosGetUploadServerResponse = Objects.VKPhotosPhotoUpload

/**
 *
 */
export interface PhotosGetUserPhotosResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhoto[]
    /**
     * next from pagination cursor
     */
    next_from?: string
}

/**
 *
 */
export type PhotosGetWallUploadServerResponse = Objects.VKPhotosPhotoUpload

/**
 *
 */
export interface PhotosGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhoto[]
    /**
     * next from pagination cursor
     */
    next_from?: string
}

/**
 *
 */
export interface PhotosMarketAlbumUploadResponse {
    /**
     * Community ID
     */
    gid?: number
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 *
 */
export interface PhotosMarketUploadResponse {
    /**
     * Crop data
     */
    crop_data?: string
    /**
     * Crop hash
     */
    crop_hash?: string
    /**
     * Community ID
     */
    group_id?: number
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 *
 */
export interface PhotosMessageUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 *
 */
export interface PhotosOwnerCoverUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
}

/**
 *
 */
export interface PhotosOwnerUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 *
 */
export interface PhotosPhotoUploadResponse {
    /**
     * Album ID
     */
    aid?: number
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Uploaded photos data
     */
    photos_list?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 * Created tag ID
 */
export type PhotosPutTagResponse = number

/**
 *
 */
export type PhotosSaveMarketAlbumPhotoResponse = Objects.VKPhotosPhoto[]

/**
 *
 */
export type PhotosSaveMessagesPhotoResponse = Objects.VKPhotosPhoto[]

/**
 *
 */
export interface PhotosSaveOwnerCoverPhotoResponse {
    images?: Objects.VKBaseImage[]
}

/**
 *
 */
export interface PhotosSaveOwnerPhotoResponse {
    /**
     * Photo hash
     */
    photo_hash: string
    /**
     * Uploaded image url
     */
    photo_src: string
    /**
     * Uploaded image url
     */
    photo_src_big?: string
    /**
     * Uploaded image url
     */
    photo_src_small?: string
    /**
     * Returns 1 if profile photo is saved
     */
    saved?: number
    /**
     * Created post ID
     */
    post_id?: number
}

/**
 *
 */
export type PhotosSaveWallPhotoResponse = Objects.VKPhotosPhoto[]

/**
 *
 */
export type PhotosSaveResponse = Objects.VKPhotosPhoto[]

/**
 *
 */
export interface PhotosSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPhotosPhoto[]
}

/**
 *
 */
export interface PhotosWallUploadResponse {
    /**
     * Uploading hash
     */
    hash?: string
    /**
     * Uploaded photo data
     */
    photo?: string
    /**
     * Upload server number
     */
    server?: number
}

/**
 *
 */
export interface PodcastsSearchPodcastResponse {
    podcasts: Objects.VKPodcastExternalData[]
    /**
     * Total amount of found results
     */
    results_total: number
}

/**
 *
 */
export type PollsCreateResponse = Objects.VKPollsPoll

/**
 *
 */
export type PollsGetBackgroundsResponse = Objects.VKPollsBackground[]

/**
 *
 */
export type PollsGetByIdResponse = Objects.VKPollsPollExtended

/**
 *
 */
export type PollsGetVotersFieldsResponse = Objects.VKPollsFieldsVoters[]

/**
 *
 */
export type PollsGetVotersResponse = Objects.VKPollsVoters[]

/**
 *
 */
export type PollsSavePhotoResponse = Objects.VKPollsBackground

/**
 *
 */
export interface PrettyCardsCreateResponse {
    /**
     * Owner ID of created pretty card
     */
    owner_id: number
    /**
     * Card ID of created pretty card
     */
    card_id: string
}

/**
 *
 */
export interface PrettyCardsDeleteResponse {
    /**
     * Owner ID of deleted pretty card
     */
    owner_id: number
    /**
     * Card ID of deleted pretty card
     */
    card_id: string
    /**
     * Error reason if error happened
     */
    error?: string
}

/**
 *
 */
export interface PrettyCardsEditResponse {
    /**
     * Owner ID of edited pretty card
     */
    owner_id: number
    /**
     * Card ID of edited pretty card
     */
    card_id: string
}

/**
 *
 */
export type PrettyCardsGetByIdResponse =
    Objects.VKPrettyCardsPrettyCardOrError[]

/**
 * Upload URL
 */
export type PrettyCardsGetUploadURLResponse = string

/**
 *
 */
export interface PrettyCardsGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKPrettyCardsPrettyCard[]
}

/**
 *
 */
export interface SearchGetHintsResponse {
    count: number
    items: Objects.VKSearchHint[]
    suggested_queries?: string[]
}

/**
 *
 */
export type SecureCheckTokenResponse = Objects.VKSecureTokenChecked

/**
 * App balance
 */
export type SecureGetAppBalanceResponse = number

/**
 *
 */
export type SecureGetSMSHistoryResponse = Objects.VKSecureSmsNotification[]

/**
 *
 */
export type SecureGetTransactionsHistoryResponse = Objects.VKSecureTransaction[]

/**
 *
 */
export type SecureGetUserLevelResponse = Objects.VKSecureLevel[]

/**
 *
 */
export type SecureGiveEventStickerResponse =
    Objects.VKSecureGiveEventStickerItem[]

/**
 *
 */
export type SecureSendNotificationResponse = number[]

/**
 *
 */
export type SecureSetCounterArrayResponse = Objects.VKSecureSetCounterItem[]

/**
 *
 */
export type StatsGetPostReachResponse = Objects.VKStatsWallpostStat[]

/**
 *
 */
export type StatsGetResponse = Objects.VKStatsPeriod[]

/**
 *
 */
export type StatusGetResponse = Objects.VKStatusStatus

/**
 *
 */
export type StorageGetKeysResponse = string[]

/**
 *
 */
export type StorageGetResponse = Objects.VKStorageValue[]

/**
 *
 */
export interface StoreGetFavoriteStickersResponse {
    /**
     * Count of favorite stickers
     */
    count: number
    /**
     * List of sticker objects
     */
    items: Objects.VKBaseStickerNew[]
}

/**
 *
 */
export interface StoreGetProductsResponse {
    items: Objects.VKStoreProduct[]
    count: number
}

/**
 *
 */
export interface StoreGetStickersKeywordsResponse {
    count: number
    dictionary: Objects.VKStoreStickersKeyword[]
    /**
     * Total count of chunks to load
     */
    chunks_count?: number
    /**
     * Chunks version hash
     */
    chunks_hash?: string
}

/**
 *
 */
export interface StoriesGetBannedExtendedResponse {
    /**
     * Stories count
     */
    count: number
    items: number[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface StoriesGetBannedResponse {
    /**
     * Stories count
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface StoriesGetByIdExtendedResponse {
    /**
     * Stories count
     */
    count: number
    items: Objects.VKStoriesStory[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface StoriesGetPhotoUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string
    /**
     * Users ID who can to see story.
     */
    user_ids: number[]
}

/**
 *
 */
export type StoriesGetStatsResponse = Objects.VKStoriesStoryStats

/**
 *
 */
export interface StoriesGetVideoUploadServerResponse {
    /**
     * Upload URL
     */
    upload_url: string
    /**
     * Users ID who can to see story.
     */
    user_ids: number[]
}

/**
 *
 */
export interface StoriesGetViewersExtendedV5115Response {
    /**
     * Viewers count
     */
    count: number
    items: Objects.VKStoriesViewersItem[]
    hidden_reason?: string
    next_from?: string
}

/**
 *
 */
export interface StoriesGetV5113Response {
    count: number
    items: Objects.VKStoriesFeedItem[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    need_upload_screen?: boolean
    track_code?: string
    next_from?: string
}

/**
 *
 */
export interface StoriesSaveResponse {
    count: number
    items: Objects.VKStoriesStory[]
    profiles?: Objects.VKUsersUser[]
    groups?: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface StoriesUploadResponse {
    /**
     * A string hash that is used in the stories.save method
     */
    upload_result?: string
}

/**
 *
 */
export interface StreamingGetServerUrlResponse {
    /**
     * Server host
     */
    endpoint?: string
    /**
     * Access key
     */
    key?: string
}

/**
 *
 */
export type StreamingGetStatsResponse = Objects.VKStreamingStats[]

/**
 *
 */
export interface StreamingGetStemResponse {
    /**
     * part of a word responsible for its lexical meaning
     */
    stem?: string
}

/**
 *
 */
export interface TranslationsTranslateResponse {
    texts?: string[]
    source_lang?: string
}

/**
 *
 */
export interface UsersGetFollowersFieldsResponse {
    /**
     * Total number of available results
     */
    count: number
    friends_count?: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export interface UsersGetFollowersResponse {
    /**
     * Total friends number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface UsersGetSubscriptionsExtendedResponse {
    /**
     * Total number of available results
     */
    count: number
    items: Objects.VKUsersSubscriptionsItem[]
}

/**
 *
 */
export interface UsersGetSubscriptionsResponse {
    users: Objects.VKUsersUsersArray
    groups: Objects.VKGroupsGroupsArray
}

/**
 *
 */
export type UsersGetResponse = Objects.VKUsersUserFull[]

/**
 *
 */
export interface UsersSearchResponse {
    /**
     * Total number of available results
     */
    count: number
    items: Objects.VKUsersUserFull[]
}

/**
 *
 */
export type UtilsCheckLinkResponse = Objects.VKUtilsLinkChecked

/**
 *
 */
export interface UtilsGetLastShortenedLinksResponse {
    /**
     * Total number of available results
     */
    count: number
    items: Objects.VKUtilsLastShortenedLink[]
}

/**
 *
 */
export type UtilsGetLinkStatsExtendedResponse = Objects.VKUtilsLinkStatsExtended

/**
 *
 */
export type UtilsGetLinkStatsResponse = Objects.VKUtilsLinkStats

/**
 * Time as Unixtime
 */
export type UtilsGetServerTimeResponse = number

/**
 *
 */
export type UtilsGetShortLinkResponse = Objects.VKUtilsShortLink

/**
 *
 */
export type UtilsResolveScreenNameResponse = Objects.VKUtilsDomainResolved

/**
 *
 */
export interface VideoAddAlbumResponse {
    /**
     * Created album ID
     */
    album_id: number
}

/**
 *
 */
export type VideoChangeVideoAlbumsResponse = number[]

/**
 * Created comment ID
 */
export type VideoCreateCommentResponse = number

/**
 *
 */
export interface VideoEditResponse {
    success: Objects.VKBaseBoolInt
    /**
     * Access key for access link
     */
    access_key?: string
}

/**
 *
 */
export type VideoGetAlbumByIdResponse = Objects.VKVideoVideoAlbumFull

/**
 *
 */
export interface VideoGetAlbumsByVideoExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoAlbumFull[]
}

/**
 *
 */
export type VideoGetAlbumsByVideoResponse = number[]

/**
 *
 */
export interface VideoGetAlbumsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoAlbumFull[]
}

/**
 *
 */
export interface VideoGetAlbumsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoAlbum[]
}

/**
 *
 */
export interface VideoGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    /**
     * Count of replies of current level
     */
    current_level_count?: number
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    real_offset?: number
}

/**
 *
 */
export interface VideoGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
    /**
     * Count of replies of current level
     */
    current_level_count?: number
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    real_offset?: number
}

/**
 *
 */
export interface VideoGetLongPollServerResponse {
    url: string
}

/**
 *
 */
export interface VideoGetOembedResponse {
    /**
     * Version of oEmbed (always 1.0)
     */
    version: string
    /**
     * Type of embed content (always video)
     */
    type: string
    /**
     * Title of video
     */
    title?: string
    /**
     * Author of video
     */
    author_name?: string
    /**
     * HTML of player
     */
    html: string
    /**
     * Width of player
     */
    width?: number
    /**
     * Height of player
     */
    height?: number
    /**
     * Name of video provider
     */
    provider_name?: string
    /**
     * Video provider url
     */
    provider_url?: string
    /**
     * Video thumbnail url
     */
    thumbnail_url?: string
    /**
     * Video thumbnail width
     */
    thumbnail_width?: number
    /**
     * Video thumbnail height
     */
    thumbnail_height?: number
}

/**
 *
 */
export interface VideoGetThumbUploadUrlResponse {
    /**
     * Url for thumb upload
     */
    upload_url: string
}

/**
 *
 */
export interface VideoGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoFull[]
    profiles?: Objects.VKUsersUserFull[]
    groups?: Objects.VKGroupsGroupFull[]
    /**
     * Max attached short videos
     */
    max_attached_short_videos?: number
}

/**
 *
 */
export type VideoLiveGetCategoriesResponse = Objects.VKVideoLiveCategory[]

/**
 *
 */
export interface VideoSaveUploadedThumbResponse {
    image?: Objects.VKVideoVideoImage[]
    /**
     * ID of uploaded thumb
     */
    photo_id: number
    /**
     * Owner ID of uploaded thumb
     */
    photo_owner_id?: number
    /**
     * Hash of uploaded thumb
     */
    photo_hash: string
}

/**
 *
 */
export type VideoSaveResponse = Objects.VKVideoSaveResult

/**
 *
 */
export interface VideoSearchExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoFull[]
    profiles: Objects.VKUsersUser[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface VideoSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKVideoVideoFull[]
}

/**
 *
 */
export interface VideoStartStreamingResponse {
    /**
     * Owner ID of created video object
     */
    owner_id: number
    /**
     * Video ID of created video object
     */
    video_id: number
    /**
     * Video title
     */
    name: string
    /**
     * Video description
     */
    description: string
    /**
     * Video access key
     */
    access_key: string
    stream: Objects.VKVideoStreamInputParams
    post_id?: number
}

/**
 *
 */
export interface VideoStopStreamingResponse {
    unique_viewers?: number
}

/**
 *
 */
export interface VideoUploadResponse {
    /**
     * Video size
     */
    size?: number
    /**
     * Video ID
     */
    video_id?: number
}

/**
 *
 */
export interface WallCreateCommentResponse {
    /**
     * Created comment ID
     */
    comment_id: number
    parents_stack?: number[]
}

/**
 *
 */
export interface WallEditResponse {
    /**
     * Edited post ID
     */
    post_id: number
}

/**
 *
 */
export interface WallGetByIdExtendedResponse {
    items: Objects.VKWallWallItem[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface WallGetByIdResponse {
    items?: Objects.VKWallWallItem[]
}

/**
 *
 */
export interface WallGetCommentExtendedResponse {
    items: Objects.VKWallWallComment[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    /**
     * Author id of the comment's post
     */
    post_author_id?: number
}

/**
 *
 */
export interface WallGetCommentResponse {
    items: Objects.VKWallWallComment[]
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
}

/**
 *
 */
export interface WallGetCommentsExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
    /**
     * Count of replies of current level
     */
    current_level_count?: number
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    /**
     * Author id of comments' post
     */
    post_author_id?: number
}

/**
 *
 */
export interface WallGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallComment[]
    /**
     * Count of replies of current level
     */
    current_level_count?: number
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
}

/**
 *
 */
export interface WallGetRepostsResponse {
    items: Objects.VKWallWallpostFull[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface WallGetExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallItem[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface WallGetResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallItem[]
}

/**
 *
 */
export interface WallParseAttachedLinkResponse {
    data: Objects.VKWallWallpostAttachment[]
    groups?: Objects.VKGroupsGroupFull[]
    profiles?: Objects.VKUsersUser[]
}

/**
 *
 */
export interface WallPostAdsStealthResponse {
    /**
     * Created post ID
     */
    post_id: number
}

/**
 *
 */
export interface WallPostResponse {
    /**
     * Created post ID
     */
    post_id: number
}

/**
 *
 */
export interface WallRepostResponse {
    success: number
    /**
     * Created post ID
     */
    post_id: number
    /**
     * Reposts number
     */
    reposts_count: number
    /**
     * Reposts to wall number
     */
    wall_repost_count?: number
    /**
     * Reposts to mail number
     */
    mail_repost_count?: number
    /**
     * Reposts number
     */
    likes_count: number
}

/**
 *
 */
export interface WallSearchExtendedResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallItem[]
    profiles: Objects.VKUsersUserFull[]
    groups: Objects.VKGroupsGroupFull[]
}

/**
 *
 */
export interface WallSearchResponse {
    /**
     * Total number
     */
    count: number
    items: Objects.VKWallWallItem[]
}

/**
 *
 */
export interface WidgetsGetCommentsResponse {
    /**
     * Total number
     */
    count: number
    posts: Objects.VKWidgetsWidgetComment[]
}

/**
 *
 */
export interface WidgetsGetPagesResponse {
    /**
     * Total number
     */
    count: number
    pages: Objects.VKWidgetsWidgetPage[]
}
