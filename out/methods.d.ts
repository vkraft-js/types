/**
 * @module
 *
 * This module contains VK API method types (functions map with input/output)
 *
 * @example import API methods map
 * ```typescript
 * import { APIMethods } from "@vkraft/types/methods";
 *
 * type UsersGetReturn = Awaited<ReturnType<APIMethods["users"]["get"]>>;
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 20.03.2026, 01:21:50 using [types](https://github.com/vkraft/types) generator
 */

import type {
    CallAPIWithOptionalParams,
    CallAPI,
    CallAPIWithoutParams,
    WithFields,
} from "./utils"
import type * as Params from "./params"
import type * as Objects from "./objects"
import type * as Responses from "./responses"

/**
 * VK API account.* methods
 */
export interface APIMethodsAccount {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/account.ban)
     */
    ban: CallAPIWithOptionalParams<
        Params.AccountBanParams,
        Responses.BaseOkResponse
    >
    /**
     * Changes a user password after access is successfully restored with the [vk.com/dev/auth.restore|auth.restore] method.
     *
     * [Documentation](https://dev.vk.com/method/account.changePassword)
     */
    changePassword: CallAPI<
        Params.AccountChangePasswordParams,
        Responses.AccountChangePasswordResponse
    >
    /**
     * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
     *
     * [Documentation](https://dev.vk.com/method/account.getActiveOffers)
     */
    getActiveOffers: CallAPIWithOptionalParams<
        Params.AccountGetActiveOffersParams,
        Responses.AccountGetActiveOffersResponse
    >
    /**
     * Gets settings of the user in this application.
     *
     * [Documentation](https://dev.vk.com/method/account.getAppPermissions)
     */
    getAppPermissions: CallAPIWithOptionalParams<
        Params.AccountGetAppPermissionsParams,
        Responses.AccountGetAppPermissionsResponse
    >
    /**
     * Returns a user's blacklist.
     *
     * [Documentation](https://dev.vk.com/method/account.getBanned)
     */
    getBanned: CallAPIWithOptionalParams<
        Params.AccountGetBannedParams,
        Responses.AccountGetBannedResponse
    >
    /**
     * Returns non-null values of user counters.
     *
     * [Documentation](https://dev.vk.com/method/account.getCounters)
     */
    getCounters: CallAPIWithOptionalParams<
        Params.AccountGetCountersParams,
        Objects.VKAccountAccountCounters
    >
    /**
     * Returns current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.getInfo)
     */
    getInfo: CallAPIWithOptionalParams<
        Params.AccountGetInfoParams,
        Objects.VKAccountInfo
    >
    /**
     * Returns the current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.getProfileInfo)
     */
    getProfileInfo: CallAPIWithoutParams<Objects.VKAccountUserSettings>
    /**
     * Gets settings of push notifications.
     *
     * [Documentation](https://dev.vk.com/method/account.getPushSettings)
     */
    getPushSettings: CallAPIWithOptionalParams<
        Params.AccountGetPushSettingsParams,
        Objects.VKAccountPushSettings
    >
    /**
     * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
     *
     * [Documentation](https://dev.vk.com/method/account.registerDevice)
     */
    registerDevice: CallAPI<
        Params.AccountRegisterDeviceParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits current profile info.
     *
     * [Documentation](https://dev.vk.com/method/account.saveProfileInfo)
     */
    saveProfileInfo: CallAPIWithOptionalParams<
        Params.AccountSaveProfileInfoParams,
        Responses.AccountSaveProfileInfoResponse
    >
    /**
     * Allows to edit the current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.setInfo)
     */
    setInfo: CallAPIWithOptionalParams<
        Params.AccountSetInfoParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks a current user as offline.
     *
     * [Documentation](https://dev.vk.com/method/account.setOffline)
     */
    setOffline: CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     * Marks the current user as online for 15 minutes.
     *
     * [Documentation](https://dev.vk.com/method/account.setOnline)
     */
    setOnline: CallAPIWithOptionalParams<
        Params.AccountSetOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Change push settings.
     *
     * [Documentation](https://dev.vk.com/method/account.setPushSettings)
     */
    setPushSettings: CallAPI<
        Params.AccountSetPushSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * Mutes push notifications for the set period of time.
     *
     * [Documentation](https://dev.vk.com/method/account.setSilenceMode)
     */
    setSilenceMode: CallAPIWithOptionalParams<
        Params.AccountSetSilenceModeParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/account.unban)
     */
    unban: CallAPIWithOptionalParams<
        Params.AccountUnbanParams,
        Responses.BaseOkResponse
    >
    /**
     * Unsubscribes a device from push notifications.
     *
     * [Documentation](https://dev.vk.com/method/account.unregisterDevice)
     */
    unregisterDevice: CallAPIWithOptionalParams<
        Params.AccountUnregisterDeviceParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API ads.* methods
 */
export interface APIMethodsAds {
    /**
     * Adds managers and/or supervisors to advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.addOfficeUsers)
     */
    addOfficeUsers: CallAPI<
        Params.AdsAddOfficeUsersParams,
        Responses.AdsAddOfficeUsersResponse
    >
    /**
     * Allows to check the ad link.
     *
     * [Documentation](https://dev.vk.com/method/ads.checkLink)
     */
    checkLink: CallAPI<Params.AdsCheckLinkParams, Objects.VKAdsLinkStatus>
    /**
     * Creates ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.createAds)
     */
    createAds: CallAPI<
        Params.AdsCreateAdsParams,
        Responses.AdsCreateAdsResponse
    >
    /**
     * Creates advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.createCampaigns)
     */
    createCampaigns: CallAPI<
        Params.AdsCreateCampaignsParams,
        Responses.AdsCreateCampaignsResponse
    >
    /**
     * Creates clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.createClients)
     */
    createClients: CallAPI<
        Params.AdsCreateClientsParams,
        Responses.AdsCreateClientsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.createLookalikeRequest)
     */
    createLookalikeRequest: CallAPI<
        Params.AdsCreateLookalikeRequestParams,
        Responses.AdsCreateLookalikeRequestResponse
    >
    /**
     * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
     *
     * [Documentation](https://dev.vk.com/method/ads.createTargetGroup)
     */
    createTargetGroup: CallAPI<
        Params.AdsCreateTargetGroupParams,
        Responses.AdsCreateTargetGroupResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.createTargetPixel)
     */
    createTargetPixel: CallAPI<
        Params.AdsCreateTargetPixelParams,
        Responses.AdsCreateTargetPixelResponse
    >
    /**
     * Archives ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteAds)
     */
    deleteAds: CallAPI<
        Params.AdsDeleteAdsParams,
        Responses.AdsDeleteAdsResponse
    >
    /**
     * Archives advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteCampaigns)
     */
    deleteCampaigns: CallAPI<
        Params.AdsDeleteCampaignsParams,
        Responses.AdsDeleteCampaignsResponse
    >
    /**
     * Archives clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteClients)
     */
    deleteClients: CallAPI<
        Params.AdsDeleteClientsParams,
        Responses.AdsDeleteClientsResponse
    >
    /**
     * Deletes a retarget group.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteTargetGroup)
     */
    deleteTargetGroup: CallAPI<
        Params.AdsDeleteTargetGroupParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteTargetPixel)
     */
    deleteTargetPixel: CallAPI<
        Params.AdsDeleteTargetPixelParams,
        Responses.BaseUndefinedResponse
    >
    /**
     * Returns a list of advertising accounts.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAccounts)
     */
    getAccounts: CallAPIWithoutParams<Responses.AdsGetAccountsResponse>
    /**
     * Returns number of ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAds)
     */
    getAds: CallAPI<Params.AdsGetAdsParams, Responses.AdsGetAdsResponse>
    /**
     * Returns descriptions of ad layouts.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAdsLayout)
     */
    getAdsLayout: CallAPI<
        Params.AdsGetAdsLayoutParams,
        Responses.AdsGetAdsLayoutResponse
    >
    /**
     * Returns ad targeting parameters.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAdsTargeting)
     */
    getAdsTargeting: CallAPI<
        Params.AdsGetAdsTargetingParams,
        Responses.AdsGetAdsTargetingResponse
    >
    /**
     * Returns current budget of the advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getBudget)
     */
    getBudget: CallAPI<
        Params.AdsGetBudgetParams,
        Responses.AdsGetBudgetResponse
    >
    /**
     * Returns a list of campaigns in an advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getCampaigns)
     */
    getCampaigns: CallAPI<
        Params.AdsGetCampaignsParams,
        Responses.AdsGetCampaignsResponse
    >
    /**
     * Returns a list of possible ad categories.
     *
     * [Documentation](https://dev.vk.com/method/ads.getCategories)
     */
    getCategories: CallAPIWithOptionalParams<
        Params.AdsGetCategoriesParams,
        Responses.AdsGetCategoriesResponse
    >
    /**
     * Returns a list of advertising agency's clients.
     *
     * [Documentation](https://dev.vk.com/method/ads.getClients)
     */
    getClients: CallAPI<
        Params.AdsGetClientsParams,
        Responses.AdsGetClientsResponse
    >
    /**
     * Returns demographics for ads or campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.getDemographics)
     */
    getDemographics: CallAPI<
        Params.AdsGetDemographicsParams,
        Responses.AdsGetDemographicsResponse
    >
    /**
     * Returns information about current state of a counter - number of remaining runs of methods and time to the next counter nulling in seconds.
     *
     * [Documentation](https://dev.vk.com/method/ads.getFloodStats)
     */
    getFloodStats: CallAPI<
        Params.AdsGetFloodStatsParams,
        Objects.VKAdsFloodStats
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getLookalikeRequests)
     */
    getLookalikeRequests: CallAPI<
        Params.AdsGetLookalikeRequestsParams,
        Responses.AdsGetLookalikeRequestsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getMusicians)
     */
    getMusicians: CallAPI<
        Params.AdsGetMusiciansParams,
        Responses.AdsGetMusiciansResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getMusiciansByIds)
     */
    getMusiciansByIds: CallAPI<
        Params.AdsGetMusiciansByIdsParams,
        Responses.AdsGetMusiciansResponse
    >
    /**
     * Returns a list of managers and supervisors of advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getOfficeUsers)
     */
    getOfficeUsers: CallAPI<
        Params.AdsGetOfficeUsersParams,
        Responses.AdsGetOfficeUsersResponse
    >
    /**
     * Returns detailed statistics of promoted posts reach from campaigns and ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.getPostsReach)
     */
    getPostsReach: CallAPI<
        Params.AdsGetPostsReachParams,
        Responses.AdsGetPostsReachResponse
    >
    /**
     * Returns a reason of ad rejection for pre-moderation.
     *
     * [Documentation](https://dev.vk.com/method/ads.getRejectionReason)
     */
    getRejectionReason: CallAPI<
        Params.AdsGetRejectionReasonParams,
        Objects.VKAdsRejectReason
    >
    /**
     * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getStatistics)
     */
    getStatistics: CallAPI<
        Params.AdsGetStatisticsParams,
        Responses.AdsGetStatisticsResponse
    >
    /**
     * Returns a set of auto-suggestions for various targeting parameters.
     *
     * [Documentation](https://dev.vk.com/method/ads.getSuggestions)
     */
    getSuggestions: {
        (
            params: Params.AdsGetSuggestionsParams & {
                cities: Required<
                    Pick<Params.AdsGetSuggestionsParams, "cities">
                >["cities"]
            },
        ): Promise<Responses.AdsGetSuggestionsCitiesResponse>
        (
            params: Params.AdsGetSuggestionsParams,
        ): Promise<
            | Responses.AdsGetSuggestionsResponse
            | Responses.AdsGetSuggestionsRegionsResponse
            | Responses.AdsGetSuggestionsSchoolsResponse
        >
    }
    /**
     * Returns a list of target groups.
     *
     * [Documentation](https://dev.vk.com/method/ads.getTargetGroups)
     */
    getTargetGroups: CallAPI<
        Params.AdsGetTargetGroupsParams,
        Responses.AdsGetTargetGroupsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getTargetPixels)
     */
    getTargetPixels: CallAPI<
        Params.AdsGetTargetPixelsParams,
        Responses.AdsGetTargetPixelsResponse
    >
    /**
     * Returns the size of targeting audience, and also recommended values for CPC and CPM.
     *
     * [Documentation](https://dev.vk.com/method/ads.getTargetingStats)
     */
    getTargetingStats: CallAPI<
        Params.AdsGetTargetingStatsParams,
        Objects.VKAdsTargStats
    >
    /**
     * Returns URL to upload an ad photo to.
     *
     * [Documentation](https://dev.vk.com/method/ads.getUploadURL)
     */
    getUploadURL: CallAPI<
        Params.AdsGetUploadURLParams,
        Responses.AdsGetUploadURLResponse
    >
    /**
     * Returns URL to upload an ad video to.
     *
     * [Documentation](https://dev.vk.com/method/ads.getVideoUploadURL)
     */
    getVideoUploadURL: CallAPIWithoutParams<Responses.AdsGetVideoUploadURLResponse>
    /**
     * Imports a list of advertiser's contacts to count VK registered users against the target group.
     *
     * [Documentation](https://dev.vk.com/method/ads.importTargetContacts)
     */
    importTargetContacts: CallAPI<
        Params.AdsImportTargetContactsParams,
        Responses.AdsImportTargetContactsResponse
    >
    /**
     * Removes managers and/or supervisors from advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.removeOfficeUsers)
     */
    removeOfficeUsers: CallAPI<
        Params.AdsRemoveOfficeUsersParams,
        Responses.AdsRemoveOfficeUsersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.removeTargetContacts)
     */
    removeTargetContacts: CallAPI<
        Params.AdsRemoveTargetContactsParams,
        Responses.AdsRemoveTargetContactsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.saveLookalikeRequestResult)
     */
    saveLookalikeRequestResult: CallAPI<
        Params.AdsSaveLookalikeRequestResultParams,
        Responses.AdsSaveLookalikeRequestResultResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.shareTargetGroup)
     */
    shareTargetGroup: CallAPI<
        Params.AdsShareTargetGroupParams,
        Responses.AdsShareTargetGroupResponse
    >
    /**
     * Edits ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateAds)
     */
    updateAds: CallAPI<
        Params.AdsUpdateAdsParams,
        Responses.AdsUpdateAdsResponse
    >
    /**
     * Edits advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateCampaigns)
     */
    updateCampaigns: CallAPI<
        Params.AdsUpdateCampaignsParams,
        Responses.AdsUpdateCampaignsResponse
    >
    /**
     * Edits clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateClients)
     */
    updateClients: CallAPI<
        Params.AdsUpdateClientsParams,
        Responses.AdsUpdateClientsResponse
    >
    /**
     * Adds managers and/or supervisors to advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateOfficeUsers)
     */
    updateOfficeUsers: CallAPI<
        Params.AdsUpdateOfficeUsersParams,
        Responses.AdsUpdateOfficeUsersResponse
    >
    /**
     * Edits a retarget group.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateTargetGroup)
     */
    updateTargetGroup: CallAPI<
        Params.AdsUpdateTargetGroupParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.updateTargetPixel)
     */
    updateTargetPixel: CallAPI<
        Params.AdsUpdateTargetPixelParams,
        Responses.BaseUndefinedResponse
    >
}

/**
 * VK API appWidgets.* methods
 */
export interface APIMethodsAppWidgets {
    /**
     * Returns a URL for uploading a photo to the community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getAppImageUploadServer)
     */
    getAppImageUploadServer: CallAPI<
        Params.AppWidgetsGetAppImageUploadServerParams,
        Responses.AppWidgetsGetAppImageUploadServerResponse
    >
    /**
     * Returns an app collection of images for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getAppImages)
     */
    getAppImages: CallAPIWithOptionalParams<
        Params.AppWidgetsGetAppImagesParams,
        Objects.VKAppWidgetsPhotos
    >
    /**
     * Returns a URL for uploading a photo to the community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getGroupImageUploadServer)
     */
    getGroupImageUploadServer: CallAPI<
        Params.AppWidgetsGetGroupImageUploadServerParams,
        Responses.AppWidgetsGetGroupImageUploadServerResponse
    >
    /**
     * Returns a community collection of images for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getGroupImages)
     */
    getGroupImages: CallAPIWithOptionalParams<
        Params.AppWidgetsGetGroupImagesParams,
        Objects.VKAppWidgetsPhotos
    >
    /**
     * Returns an image for community app widgets by its ID
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getImagesById)
     */
    getImagesById: CallAPI<
        Params.AppWidgetsGetImagesByIdParams,
        Responses.AppWidgetsGetImagesByIdResponse
    >
    /**
     * Allows to save image into app collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.saveAppImage)
     */
    saveAppImage: CallAPI<
        Params.AppWidgetsSaveAppImageParams,
        Objects.VKAppWidgetsPhoto
    >
    /**
     * Allows to save image into community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.saveGroupImage)
     */
    saveGroupImage: CallAPI<
        Params.AppWidgetsSaveGroupImageParams,
        Objects.VKAppWidgetsPhoto
    >
    /**
     * Allows to update community app widget
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.update)
     */
    update: CallAPI<Params.AppWidgetsUpdateParams, Responses.BaseOkResponse>
}

/**
 * VK API apps.* methods
 */
export interface APIMethodsApps {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.addSnippet)
     */
    addSnippet: CallAPIWithOptionalParams<
        Params.AppsAddSnippetParams,
        Responses.AppsAddSnippetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.addUsersToTestingGroup)
     */
    addUsersToTestingGroup: CallAPI<
        Params.AppsAddUsersToTestingGroupParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Deletes all request notifications from the current app.
     *
     * [Documentation](https://dev.vk.com/method/apps.deleteAppRequests)
     */
    deleteAppRequests: CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.deleteSnippet)
     */
    deleteSnippet: CallAPIWithOptionalParams<
        Params.AppsDeleteSnippetParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns applications data.
     *
     * [Documentation](https://dev.vk.com/method/apps.get)
     */
    get: CallAPIWithOptionalParams<
        Params.AppsGetParams,
        Responses.AppsGetResponse
    >
    /**
     * Returns a list of applications (apps) available to users in the App Catalog.
     *
     * [Documentation](https://dev.vk.com/method/apps.getCatalog)
     */
    getCatalog: CallAPIWithOptionalParams<
        Params.AppsGetCatalogParams,
        Objects.VKAppsCatalogList
    >
    /**
     * Creates friends list for requests and invites in current app.
     *
     * [Documentation](https://dev.vk.com/method/apps.getFriendsList)
     */
    getFriendsList: {
        (
            params: Params.AppsGetFriendsListParams & { extended: 1 | true },
        ): Promise<Responses.AppsGetFriendsListExtendedResponse>
        (
            params?: Params.AppsGetFriendsListParams,
        ): Promise<Responses.AppsGetFriendsListResponse>
    }
    /**
     * Returns players rating in the game.
     *
     * [Documentation](https://dev.vk.com/method/apps.getLeaderboard)
     */
    getLeaderboard: {
        (
            params: Params.AppsGetLeaderboardParams & { extended: 1 | true },
        ): Promise<Responses.AppsGetLeaderboardExtendedResponse>
        (
            params: Params.AppsGetLeaderboardParams,
        ): Promise<Responses.AppsGetLeaderboardResponse>
    }
    /**
     * Returns policies and terms given to a mini app.
     *
     * [Documentation](https://dev.vk.com/method/apps.getMiniAppPolicies)
     */
    getMiniAppPolicies: CallAPI<
        Params.AppsGetMiniAppPoliciesParams,
        Responses.AppsGetMiniAppPoliciesResponse
    >
    /**
     * Returns scopes for auth
     *
     * [Documentation](https://dev.vk.com/method/apps.getScopes)
     */
    getScopes: CallAPIWithOptionalParams<
        Params.AppsGetScopesParams,
        Responses.AppsGetScopesResponse
    >
    /**
     * Returns user score in app
     *
     * [Documentation](https://dev.vk.com/method/apps.getScore)
     */
    getScore: CallAPIWithOptionalParams<
        Params.AppsGetScoreParams,
        Responses.AppsGetScoreResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.getSnippets)
     */
    getSnippets: CallAPIWithoutParams<Responses.AppsGetSnippetsResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.getTestingGroups)
     */
    getTestingGroups: CallAPIWithOptionalParams<
        Params.AppsGetTestingGroupsParams,
        Responses.AppsGetTestingGroupsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.isNotificationsAllowed)
     */
    isNotificationsAllowed: CallAPIWithOptionalParams<
        Params.AppsIsNotificationsAllowedParams,
        Responses.AppsIsNotificationsAllowedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.promoHasActiveGift)
     */
    promoHasActiveGift: CallAPI<
        Params.AppsPromoHasActiveGiftParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.promoUseGift)
     */
    promoUseGift: CallAPI<Params.AppsPromoUseGiftParams, Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.removeTestingGroup)
     */
    removeTestingGroup: CallAPI<
        Params.AppsRemoveTestingGroupParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.removeUsersFromTestingGroups)
     */
    removeUsersFromTestingGroups: CallAPI<
        Params.AppsRemoveUsersFromTestingGroupsParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Sends a request to another user in an app that uses VK authorization.
     *
     * [Documentation](https://dev.vk.com/method/apps.sendRequest)
     */
    sendRequest: CallAPI<
        Params.AppsSendRequestParams,
        Responses.AppsSendRequestResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.updateMetaForTestingGroup)
     */
    updateMetaForTestingGroup: CallAPI<
        Params.AppsUpdateMetaForTestingGroupParams,
        Responses.AppsCreatedGroupResponse
    >
}

/**
 * VK API auth.* methods
 */
export interface APIMethodsAuth {
    /**
     * Allows to restore account access using a code received via SMS. " This method is only available for apps with [vk.com/dev/auth_direct|Direct authorization] access. "
     *
     * [Documentation](https://dev.vk.com/method/auth.restore)
     */
    restore: CallAPI<Params.AuthRestoreParams, Responses.AuthRestoreResponse>
}

/**
 * VK API board.* methods
 */
export interface APIMethodsBoard {
    /**
     * Creates a new topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.addTopic)
     */
    addTopic: CallAPI<
        Params.BoardAddTopicParams,
        Responses.BoardAddTopicResponse
    >
    /**
     * Closes a topic on a community's discussion board so that comments cannot be posted.
     *
     * [Documentation](https://dev.vk.com/method/board.closeTopic)
     */
    closeTopic: CallAPI<Params.BoardCloseTopicParams, Responses.BaseOkResponse>
    /**
     * Adds a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.createComment)
     */
    createComment: CallAPI<
        Params.BoardCreateCommentParams,
        Responses.BoardCreateCommentResponse
    >
    /**
     * Deletes a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.deleteComment)
     */
    deleteComment: CallAPI<
        Params.BoardDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a topic from a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.deleteTopic)
     */
    deleteTopic: CallAPI<
        Params.BoardDeleteTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.editComment)
     */
    editComment: CallAPI<
        Params.BoardEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the title of a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.editTopic)
     */
    editTopic: CallAPI<Params.BoardEditTopicParams, Responses.BaseOkResponse>
    /**
     * Pins a topic (fixes its place) to the top of a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.fixTopic)
     */
    fixTopic: CallAPI<Params.BoardFixTopicParams, Responses.BaseOkResponse>
    /**
     * Returns a list of comments on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.getComments)
     */
    getComments: {
        (
            params: Params.BoardGetCommentsParams & { extended: 1 | true },
        ): Promise<Responses.BoardGetCommentsExtendedResponse>
        (
            params: Params.BoardGetCommentsParams,
        ): Promise<Responses.BoardGetCommentsResponse>
    }
    /**
     * Returns a list of topics on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.getTopics)
     */
    getTopics: {
        (
            params: Params.BoardGetTopicsParams & { extended: 1 | true },
        ): Promise<Responses.BoardGetTopicsExtendedResponse>
        (
            params: Params.BoardGetTopicsParams,
        ): Promise<Responses.BoardGetTopicsResponse>
    }
    /**
     * Re-opens a previously closed topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.openTopic)
     */
    openTopic: CallAPI<Params.BoardOpenTopicParams, Responses.BaseOkResponse>
    /**
     * Restores a comment deleted from a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.restoreComment)
     */
    restoreComment: CallAPI<
        Params.BoardRestoreCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Unpins a pinned topic from the top of a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.unfixTopic)
     */
    unfixTopic: CallAPI<Params.BoardUnfixTopicParams, Responses.BaseOkResponse>
}

/**
 * VK API bugtracker.* methods
 */
export interface APIMethodsBugtracker {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.addCompanyGroupsMembers)
     */
    addCompanyGroupsMembers: CallAPI<
        Params.BugtrackerAddCompanyGroupsMembersParams,
        Responses.BugtrackerAddCompanyGroupsMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.addCompanyMembers)
     */
    addCompanyMembers: CallAPI<
        Params.BugtrackerAddCompanyMembersParams,
        Responses.BugtrackerAddCompanyMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.changeBugreportStatus)
     */
    changeBugreportStatus: CallAPI<
        Params.BugtrackerChangeBugreportStatusParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Creates the comment to bugreport
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.createComment)
     */
    createComment: CallAPI<
        Params.BugtrackerCreateCommentParams,
        Responses.BugtrackerCreateCommentResponse
    >
    /**
     * Returns extended bugreport data
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getBugreportById)
     */
    getBugreportById: CallAPI<
        Params.BugtrackerGetBugreportByIdParams,
        Responses.BugtrackerGetBugreportByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getCompanyGroupMembers)
     */
    getCompanyGroupMembers: CallAPI<
        Params.BugtrackerGetCompanyGroupMembersParams,
        Responses.BugtrackerGetCompanyGroupMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getCompanyMembers)
     */
    getCompanyMembers: CallAPI<
        Params.BugtrackerGetCompanyMembersParams,
        Responses.BugtrackerGetCompanyMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getDownloadVersionUrl)
     */
    getDownloadVersionUrl: CallAPI<
        Params.BugtrackerGetDownloadVersionUrlParams,
        Responses.BugtrackerGetDownloadVersionUrlResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getProductBuildUploadServer)
     */
    getProductBuildUploadServer: CallAPI<
        Params.BugtrackerGetProductBuildUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.removeCompanyGroupMember)
     */
    removeCompanyGroupMember: CallAPI<
        Params.BugtrackerRemoveCompanyGroupMemberParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.removeCompanyMember)
     */
    removeCompanyMember: CallAPI<
        Params.BugtrackerRemoveCompanyMemberParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.saveProductVersion)
     */
    saveProductVersion: CallAPI<
        Params.BugtrackerSaveProductVersionParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.setCompanyMemberRole)
     */
    setCompanyMemberRole: CallAPI<
        Params.BugtrackerSetCompanyMemberRoleParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.setProductIsOver)
     */
    setProductIsOver: CallAPI<
        Params.BugtrackerSetProductIsOverParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API calls.* methods
 */
export interface APIMethodsCalls {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/calls.forceFinish)
     */
    forceFinish: CallAPI<
        Params.CallsForceFinishParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/calls.start)
     */
    start: CallAPIWithOptionalParams<
        Params.CallsStartParams,
        Responses.CallsStartResponse
    >
}

/**
 * VK API database.* methods
 */
export interface APIMethodsDatabase {
    /**
     * Returns list of chairs on a specified faculty.
     *
     * [Documentation](https://dev.vk.com/method/database.getChairs)
     */
    getChairs: CallAPI<
        Params.DatabaseGetChairsParams,
        Responses.DatabaseGetChairsResponse
    >
    /**
     * Returns a list of cities.
     *
     * [Documentation](https://dev.vk.com/method/database.getCities)
     */
    getCities: CallAPIWithOptionalParams<
        Params.DatabaseGetCitiesParams,
        Responses.DatabaseGetCitiesResponse
    >
    /**
     * Returns information about cities by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/database.getCitiesById)
     */
    getCitiesById: CallAPIWithOptionalParams<
        Params.DatabaseGetCitiesByIdParams,
        Responses.DatabaseGetCitiesByIdResponse
    >
    /**
     * Returns a list of countries.
     *
     * [Documentation](https://dev.vk.com/method/database.getCountries)
     */
    getCountries: CallAPIWithOptionalParams<
        Params.DatabaseGetCountriesParams,
        Responses.DatabaseGetCountriesResponse
    >
    /**
     * Returns information about countries by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/database.getCountriesById)
     */
    getCountriesById: CallAPIWithOptionalParams<
        Params.DatabaseGetCountriesByIdParams,
        Responses.DatabaseGetCountriesByIdResponse
    >
    /**
     * Returns a list of faculties (i.e., university departments).
     *
     * [Documentation](https://dev.vk.com/method/database.getFaculties)
     */
    getFaculties: CallAPI<
        Params.DatabaseGetFacultiesParams,
        Responses.DatabaseGetFacultiesResponse
    >
    /**
     * Get metro stations by city
     *
     * [Documentation](https://dev.vk.com/method/database.getMetroStations)
     */
    getMetroStations: CallAPI<
        Params.DatabaseGetMetroStationsParams,
        Responses.DatabaseGetMetroStationsResponse
    >
    /**
     * Get metro station by his id
     *
     * [Documentation](https://dev.vk.com/method/database.getMetroStationsById)
     */
    getMetroStationsById: CallAPIWithOptionalParams<
        Params.DatabaseGetMetroStationsByIdParams,
        Responses.DatabaseGetMetroStationsByIdResponse
    >
    /**
     * Returns a list of regions.
     *
     * [Documentation](https://dev.vk.com/method/database.getRegions)
     */
    getRegions: CallAPIWithOptionalParams<
        Params.DatabaseGetRegionsParams,
        Responses.DatabaseGetRegionsResponse
    >
    /**
     * Returns a list of school classes specified for the country.
     *
     * [Documentation](https://dev.vk.com/method/database.getSchoolClasses)
     */
    getSchoolClasses: CallAPIWithOptionalParams<
        Params.DatabaseGetSchoolClassesParams,
        Responses.DatabaseGetSchoolClassesNewResponse
    >
    /**
     * Returns a list of schools.
     *
     * [Documentation](https://dev.vk.com/method/database.getSchools)
     */
    getSchools: CallAPI<
        Params.DatabaseGetSchoolsParams,
        Responses.DatabaseGetSchoolsResponse
    >
    /**
     * Returns a list of higher education institutions.
     *
     * [Documentation](https://dev.vk.com/method/database.getUniversities)
     */
    getUniversities: CallAPIWithOptionalParams<
        Params.DatabaseGetUniversitiesParams,
        Responses.DatabaseGetUniversitiesResponse
    >
}

/**
 * VK API docs.* methods
 */
export interface APIMethodsDocs {
    /**
     * Copies a document to a user's or community's document list.
     *
     * [Documentation](https://dev.vk.com/method/docs.add)
     */
    add: CallAPI<Params.DocsAddParams, Responses.DocsAddResponse>
    /**
     * Deletes a user or community document.
     *
     * [Documentation](https://dev.vk.com/method/docs.delete)
     */
    delete: CallAPI<Params.DocsDeleteParams, Responses.BaseOkResponse>
    /**
     * Edits a document.
     *
     * [Documentation](https://dev.vk.com/method/docs.edit)
     */
    edit: CallAPI<Params.DocsEditParams, Responses.BaseOkResponse>
    /**
     * Returns detailed information about user or community documents.
     *
     * [Documentation](https://dev.vk.com/method/docs.get)
     */
    get: CallAPIWithOptionalParams<
        Params.DocsGetParams,
        Responses.DocsGetResponse
    >
    /**
     * Returns information about documents by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/docs.getById)
     */
    getById: CallAPI<Params.DocsGetByIdParams, Responses.DocsGetByIdResponse>
    /**
     * Returns the server address for document upload.
     *
     * [Documentation](https://dev.vk.com/method/docs.getMessagesUploadServer)
     */
    getMessagesUploadServer: CallAPIWithOptionalParams<
        Params.DocsGetMessagesUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns documents types available for current user.
     *
     * [Documentation](https://dev.vk.com/method/docs.getTypes)
     */
    getTypes: CallAPIWithOptionalParams<
        Params.DocsGetTypesParams,
        Responses.DocsGetTypesResponse
    >
    /**
     * Returns the server address for document upload.
     *
     * [Documentation](https://dev.vk.com/method/docs.getUploadServer)
     */
    getUploadServer: CallAPIWithOptionalParams<
        Params.DocsGetUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns the server address for document upload onto a user's or community's wall.
     *
     * [Documentation](https://dev.vk.com/method/docs.getWallUploadServer)
     */
    getWallUploadServer: CallAPIWithOptionalParams<
        Params.DocsGetWallUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/docs.restore)
     */
    restore: CallAPI<Params.DocsRestoreParams, Responses.BaseOkResponse>
    /**
     * Saves a document after [vk.com/dev/upload_files_2|uploading it to a server].
     *
     * [Documentation](https://dev.vk.com/method/docs.save)
     */
    save: CallAPI<Params.DocsSaveParams, Responses.DocsSaveResponse>
    /**
     * Returns a list of documents matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/docs.search)
     */
    search: CallAPIWithOptionalParams<
        Params.DocsSearchParams,
        Responses.DocsSearchResponse
    >
}

/**
 * VK API donut.* methods
 */
export interface APIMethodsDonut {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.getFriends)
     */
    getFriends: CallAPI<
        Params.DonutGetFriendsParams,
        Responses.GroupsGetMembersFieldsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.getSubscription)
     */
    getSubscription: CallAPI<
        Params.DonutGetSubscriptionParams,
        Objects.VKDonutDonatorSubscriptionInfo
    >
    /**
     * Returns a list of user's VK Donut subscriptions.
     *
     * [Documentation](https://dev.vk.com/method/donut.getSubscriptions)
     */
    getSubscriptions: CallAPIWithOptionalParams<
        Params.DonutGetSubscriptionsParams,
        Responses.DonutGetSubscriptionsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.isDon)
     */
    isDon: CallAPI<Params.DonutIsDonParams, Objects.VKBaseBoolInt>
}

/**
 * VK API downloadedGames.* methods
 */
export interface APIMethodsDownloadedGames {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/downloadedGames.getPaidStatus)
     */
    getPaidStatus: CallAPIWithOptionalParams<
        Params.DownloadedGamesGetPaidStatusParams,
        Responses.DownloadedGamesPaidStatusResponse
    >
}

/**
 * VK API execute.* methods
 */
export interface APIMethodsExecute {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/execute)
     */
    undefined: CallAPIWithoutParams<Responses.BaseUndefinedResponse>
}

/**
 * VK API fave.* methods
 */
export interface APIMethodsFave {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addArticle)
     */
    addArticle: CallAPI<Params.FaveAddArticleParams, Responses.BaseOkResponse>
    /**
     * Adds a link to user faves.
     *
     * [Documentation](https://dev.vk.com/method/fave.addLink)
     */
    addLink: CallAPI<Params.FaveAddLinkParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addPage)
     */
    addPage: CallAPIWithOptionalParams<
        Params.FaveAddPageParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addPost)
     */
    addPost: CallAPI<Params.FaveAddPostParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addProduct)
     */
    addProduct: CallAPI<Params.FaveAddProductParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addTag)
     */
    addTag: CallAPIWithOptionalParams<
        Params.FaveAddTagParams,
        Objects.VKFaveTag
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addVideo)
     */
    addVideo: CallAPI<Params.FaveAddVideoParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.editTag)
     */
    editTag: CallAPI<Params.FaveEditTagParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.get)
     */
    get: {
        (
            params: Params.FaveGetParams & { extended: 1 | true },
        ): Promise<Responses.FaveGetExtendedResponse>
        (params?: Params.FaveGetParams): Promise<Responses.FaveGetResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.getPages)
     */
    getPages: CallAPIWithOptionalParams<
        Params.FaveGetPagesParams,
        Responses.FaveGetPagesResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.getTags)
     */
    getTags: CallAPIWithoutParams<Responses.FaveGetTagsResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.markSeen)
     */
    markSeen: CallAPIWithoutParams<Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeArticle)
     */
    removeArticle: CallAPI<
        Params.FaveRemoveArticleParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Removes link from the user's faves.
     *
     * [Documentation](https://dev.vk.com/method/fave.removeLink)
     */
    removeLink: CallAPIWithOptionalParams<
        Params.FaveRemoveLinkParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removePage)
     */
    removePage: CallAPIWithOptionalParams<
        Params.FaveRemovePageParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removePost)
     */
    removePost: CallAPI<Params.FaveRemovePostParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeProduct)
     */
    removeProduct: CallAPI<
        Params.FaveRemoveProductParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeTag)
     */
    removeTag: CallAPI<Params.FaveRemoveTagParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeVideo)
     */
    removeVideo: CallAPI<Params.FaveRemoveVideoParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.reorderTags)
     */
    reorderTags: CallAPI<Params.FaveReorderTagsParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.setPageTags)
     */
    setPageTags: CallAPIWithOptionalParams<
        Params.FaveSetPageTagsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.setTags)
     */
    setTags: CallAPIWithOptionalParams<
        Params.FaveSetTagsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.trackPageInteraction)
     */
    trackPageInteraction: CallAPIWithOptionalParams<
        Params.FaveTrackPageInteractionParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API friends.* methods
 */
export interface APIMethodsFriends {
    /**
     * Approves or creates a friend request.
     *
     * [Documentation](https://dev.vk.com/method/friends.add)
     */
    add: CallAPIWithOptionalParams<
        Params.FriendsAddParams,
        Responses.FriendsAddResponse
    >
    /**
     * Creates a new friend list for the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.addList)
     */
    addList: CallAPI<
        Params.FriendsAddListParams,
        Responses.FriendsAddListResponse
    >
    /**
     * Checks the current user's friendship status with other specified users.
     *
     * [Documentation](https://dev.vk.com/method/friends.areFriends)
     */
    areFriends: {
        (
            params: Params.FriendsAreFriendsParams & { extended: 1 | true },
        ): Promise<Responses.FriendsAreFriendsExtendedResponse>
        (
            params: Params.FriendsAreFriendsParams,
        ): Promise<Responses.FriendsAreFriendsResponse>
    }
    /**
     * Declines a friend request or deletes a user from the current user's friend list.
     *
     * [Documentation](https://dev.vk.com/method/friends.delete)
     */
    delete: CallAPIWithOptionalParams<
        Params.FriendsDeleteParams,
        Responses.FriendsDeleteResponse
    >
    /**
     * Marks all incoming friend requests as viewed.
     *
     * [Documentation](https://dev.vk.com/method/friends.deleteAllRequests)
     */
    deleteAllRequests: CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     * Deletes a friend list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.deleteList)
     */
    deleteList: CallAPI<
        Params.FriendsDeleteListParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the friend lists of the selected user.
     *
     * [Documentation](https://dev.vk.com/method/friends.edit)
     */
    edit: CallAPI<Params.FriendsEditParams, Responses.BaseOkResponse>
    /**
     * Edits a friend list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.editList)
     */
    editList: CallAPI<Params.FriendsEditListParams, Responses.BaseOkResponse>
    /**
     * Returns a list of user IDs or detailed information about a user's friends.
     *
     * [Documentation](https://dev.vk.com/method/friends.get)
     */
    get: {
        <F extends Objects.VKUsersFields>(
            params: Params.FriendsGetParams & { fields: F[] },
        ): Promise<
            Omit<Responses.FriendsGetFieldsResponse, "items"> & {
                items: WithFields<Objects.VKUsersUserFull, F>[]
            }
        >
        (
            params: Params.FriendsGetParams & {
                fields: Required<
                    Pick<Params.FriendsGetParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.FriendsGetFieldsResponse>
        (
            params?: Params.FriendsGetParams,
        ): Promise<Responses.FriendsGetResponse>
    }
    /**
     * Returns a list of IDs of the current user's friends who installed the application.
     *
     * [Documentation](https://dev.vk.com/method/friends.getAppUsers)
     */
    getAppUsers: CallAPIWithoutParams<Responses.FriendsGetAppUsersResponse>
    /**
     * Returns a list of the user's friend lists.
     *
     * [Documentation](https://dev.vk.com/method/friends.getLists)
     */
    getLists: CallAPIWithOptionalParams<
        Params.FriendsGetListsParams,
        Responses.FriendsGetListsResponse
    >
    /**
     * Returns a list of user IDs of the mutual friends of two users.
     *
     * [Documentation](https://dev.vk.com/method/friends.getMutual)
     */
    getMutual: {
        (
            params: Params.FriendsGetMutualParams & {
                target_uids: Required<
                    Pick<Params.FriendsGetMutualParams, "target_uids">
                >["target_uids"]
            },
        ): Promise<Responses.FriendsGetMutualTargetUidsResponse>
        (
            params: Params.FriendsGetMutualParams & {
                count: Required<
                    Pick<Params.FriendsGetMutualParams, "count">
                >["count"]
            },
        ): Promise<Objects.VKFriendsMutualFriend>
        (
            params?: Params.FriendsGetMutualParams,
        ): Promise<Responses.FriendsGetMutualResponse>
    }
    /**
     * Returns a list of user IDs of a user's friends who are online.
     *
     * [Documentation](https://dev.vk.com/method/friends.getOnline)
     */
    getOnline: {
        (
            params: Params.FriendsGetOnlineParams & { online_mobile: 1 | true },
        ): Promise<
            | Responses.FriendsGetOnlineOnlineMobileResponse
            | Objects.VKFriendsOnlineUsersWithMobile
        >
        (
            params?: Params.FriendsGetOnlineParams,
        ): Promise<
            Responses.FriendsGetOnlineResponse | Objects.VKFriendsOnlineUsers
        >
    }
    /**
     * Returns a list of user IDs of the current user's recently added friends.
     *
     * [Documentation](https://dev.vk.com/method/friends.getRecent)
     */
    getRecent: CallAPIWithOptionalParams<
        Params.FriendsGetRecentParams,
        Responses.FriendsGetRecentResponse
    >
    /**
     * Returns information about the current user's incoming and outgoing friend requests.
     *
     * [Documentation](https://dev.vk.com/method/friends.getRequests)
     */
    getRequests: {
        (
            params: Params.FriendsGetRequestsParams & { need_mutual: 1 | true },
        ): Promise<Responses.FriendsGetRequestsNeedMutualResponse>
        (
            params: Params.FriendsGetRequestsParams & { extended: 1 | true },
        ): Promise<Responses.FriendsGetRequestsExtendedResponse>
        (
            params?: Params.FriendsGetRequestsParams,
        ): Promise<Responses.FriendsGetRequestsResponse>
    }
    /**
     * Returns a list of profiles of users whom the current user may know.
     *
     * [Documentation](https://dev.vk.com/method/friends.getSuggestions)
     */
    getSuggestions: CallAPIWithOptionalParams<
        Params.FriendsGetSuggestionsParams,
        Responses.FriendsGetSuggestionsResponse
    >
    /**
     * Returns a list of friends matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/friends.search)
     */
    search: CallAPIWithOptionalParams<
        Params.FriendsSearchParams,
        Responses.FriendsSearchResponse
    >
}

/**
 * VK API gifts.* methods
 */
export interface APIMethodsGifts {
    /**
     * Returns a list of user gifts.
     *
     * [Documentation](https://dev.vk.com/method/gifts.get)
     */
    get: CallAPIWithOptionalParams<
        Params.GiftsGetParams,
        Responses.GiftsGetResponse
    >
}

/**
 * VK API groups.* methods
 */
export interface APIMethodsGroups {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.addAddress)
     */
    addAddress: CallAPI<Params.GroupsAddAddressParams, Objects.VKGroupsAddress>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.addCallbackServer)
     */
    addCallbackServer: CallAPI<
        Params.GroupsAddCallbackServerParams,
        Responses.GroupsAddCallbackServerResponse
    >
    /**
     * Allows to add a link to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.addLink)
     */
    addLink: CallAPI<Params.GroupsAddLinkParams, Objects.VKGroupsLinksItem>
    /**
     * Allows to approve join request to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.approveRequest)
     */
    approveRequest: CallAPI<
        Params.GroupsApproveRequestParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.ban)
     */
    ban: CallAPI<Params.GroupsBanParams, Responses.BaseOkResponse>
    /**
     * Creates a new community.
     *
     * [Documentation](https://dev.vk.com/method/groups.create)
     */
    create: CallAPI<Params.GroupsCreateParams, Objects.VKGroupsGroupFull>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteAddress)
     */
    deleteAddress: CallAPI<
        Params.GroupsDeleteAddressParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteCallbackServer)
     */
    deleteCallbackServer: CallAPI<
        Params.GroupsDeleteCallbackServerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to delete a link from the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteLink)
     */
    deleteLink: CallAPI<Params.GroupsDeleteLinkParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.disableOnline)
     */
    disableOnline: CallAPI<
        Params.GroupsDisableOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a community.
     *
     * [Documentation](https://dev.vk.com/method/groups.edit)
     */
    edit: CallAPI<Params.GroupsEditParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.editAddress)
     */
    editAddress: CallAPI<
        Params.GroupsEditAddressParams,
        Objects.VKGroupsAddress
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.editCallbackServer)
     */
    editCallbackServer: CallAPI<
        Params.GroupsEditCallbackServerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to edit a link in the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.editLink)
     */
    editLink: CallAPI<Params.GroupsEditLinkParams, Responses.BaseOkResponse>
    /**
     * Allows to add, remove or edit the community manager.
     *
     * [Documentation](https://dev.vk.com/method/groups.editManager)
     */
    editManager: CallAPI<
        Params.GroupsEditManagerParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.enableOnline)
     */
    enableOnline: CallAPI<
        Params.GroupsEnableOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of the communities to which a user belongs.
     *
     * [Documentation](https://dev.vk.com/method/groups.get)
     */
    get: {
        (
            params: Params.GroupsGetParams & { extended: 1 | true },
        ): Promise<Responses.GroupsGetObjectExtendedResponse>
        (params?: Params.GroupsGetParams): Promise<Responses.GroupsGetResponse>
    }
    /**
     * Returns a list of community addresses.
     *
     * [Documentation](https://dev.vk.com/method/groups.getAddresses)
     */
    getAddresses: CallAPI<
        Params.GroupsGetAddressesParams,
        Responses.GroupsGetAddressesResponse
    >
    /**
     * Returns a list of users on a community blacklist.
     *
     * [Documentation](https://dev.vk.com/method/groups.getBanned)
     */
    getBanned: CallAPI<
        Params.GroupsGetBannedParams,
        Responses.GroupsGetBannedResponse
    >
    /**
     * Returns information about communities by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/groups.getById)
     */
    getById: CallAPIWithOptionalParams<
        Params.GroupsGetByIdParams,
        Responses.GroupsGetByIdObjectResponse
    >
    /**
     * Returns Callback API confirmation code for the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackConfirmationCode)
     */
    getCallbackConfirmationCode: CallAPI<
        Params.GroupsGetCallbackConfirmationCodeParams,
        Responses.GroupsGetCallbackConfirmationCodeResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackServers)
     */
    getCallbackServers: CallAPI<
        Params.GroupsGetCallbackServersParams,
        Responses.GroupsGetCallbackServersResponse
    >
    /**
     * Returns [vk.com/dev/callback_api|Callback API] notifications settings.
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackSettings)
     */
    getCallbackSettings: CallAPI<
        Params.GroupsGetCallbackSettingsParams,
        Objects.VKGroupsCallbackSettings
    >
    /**
     * Returns categories list for communities catalog
     *
     * [Documentation](https://dev.vk.com/method/groups.getCatalogInfo)
     */
    getCatalogInfo: {
        (
            params: Params.GroupsGetCatalogInfoParams & { extended: 1 | true },
        ): Promise<Responses.GroupsGetCatalogInfoExtendedResponse>
        (
            params?: Params.GroupsGetCatalogInfoParams,
        ): Promise<Responses.GroupsGetCatalogInfoResponse>
    }
    /**
     * Returns invited users list of a community
     *
     * [Documentation](https://dev.vk.com/method/groups.getInvitedUsers)
     */
    getInvitedUsers: CallAPI<
        Params.GroupsGetInvitedUsersParams,
        Responses.GroupsGetInvitedUsersResponse
    >
    /**
     * Returns a list of invitations to join communities and events.
     *
     * [Documentation](https://dev.vk.com/method/groups.getInvites)
     */
    getInvites: {
        (
            params: Params.GroupsGetInvitesParams & { extended: 1 | true },
        ): Promise<Responses.GroupsGetInvitesExtendedResponse>
        (
            params?: Params.GroupsGetInvitesParams,
        ): Promise<Responses.GroupsGetInvitesResponse>
    }
    /**
     * Returns the data needed to query a Long Poll server for events
     *
     * [Documentation](https://dev.vk.com/method/groups.getLongPollServer)
     */
    getLongPollServer: CallAPI<
        Params.GroupsGetLongPollServerParams,
        Objects.VKGroupsLongPollServer
    >
    /**
     * Returns Long Poll notification settings
     *
     * [Documentation](https://dev.vk.com/method/groups.getLongPollSettings)
     */
    getLongPollSettings: CallAPI<
        Params.GroupsGetLongPollSettingsParams,
        Objects.VKGroupsLongPollSettings
    >
    /**
     * Returns a list of community members.
     *
     * [Documentation](https://dev.vk.com/method/groups.getMembers)
     */
    getMembers: {
        <F extends Objects.VKUsersFields>(
            params: Params.GroupsGetMembersParams & { fields: F[] },
        ): Promise<
            Omit<Responses.GroupsGetMembersFieldsResponse, "items"> & {
                items: WithFields<Objects.VKGroupsUserXtrRole, F>[]
            }
        >
        (
            params: Params.GroupsGetMembersParams & {
                fields: Required<
                    Pick<Params.GroupsGetMembersParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.GroupsGetMembersFieldsResponse>
        (
            params: Params.GroupsGetMembersParams & {
                filter: Required<
                    Pick<Params.GroupsGetMembersParams, "filter">
                >["filter"]
            },
        ): Promise<Responses.GroupsGetMembersFilterResponse>
        (
            params?: Params.GroupsGetMembersParams,
        ): Promise<Responses.GroupsGetMembersResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.getOnlineStatus)
     */
    getOnlineStatus: CallAPI<
        Params.GroupsGetOnlineStatusParams,
        Responses.GroupsGetOnlineStatusResponse
    >
    /**
     * Returns a list of requests to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.getRequests)
     */
    getRequests: {
        <F extends Objects.VKUsersFields>(
            params: Params.GroupsGetRequestsParams & { fields: F[] },
        ): Promise<
            Omit<Responses.GroupsGetRequestsFieldsResponse, "items"> & {
                items: WithFields<Objects.VKUsersUserFull, F>[]
            }
        >
        (
            params: Params.GroupsGetRequestsParams & {
                fields: Required<
                    Pick<Params.GroupsGetRequestsParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.GroupsGetRequestsFieldsResponse>
        (
            params: Params.GroupsGetRequestsParams,
        ): Promise<Responses.GroupsGetRequestsResponse>
    }
    /**
     * Returns community settings.
     *
     * [Documentation](https://dev.vk.com/method/groups.getSettings)
     */
    getSettings: CallAPI<
        Params.GroupsGetSettingsParams,
        Responses.GroupsGetSettingsResponse
    >
    /**
     * List of group's tags
     *
     * [Documentation](https://dev.vk.com/method/groups.getTagList)
     */
    getTagList: CallAPI<
        Params.GroupsGetTagListParams,
        Responses.GroupsGetTagListResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.getTokenPermissions)
     */
    getTokenPermissions: CallAPIWithoutParams<Responses.GroupsGetTokenPermissionsResponse>
    /**
     * Allows to invite friends to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.invite)
     */
    invite: CallAPI<
        Params.GroupsInviteParams,
        Responses.BaseOkResponse | Responses.GroupsInviteUserIdsListResponse
    >
    /**
     * Returns information specifying whether a user is a member of a community.
     *
     * [Documentation](https://dev.vk.com/method/groups.isMember)
     */
    isMember: {
        (
            params: Params.GroupsIsMemberParams & {
                extended: 1 | true
                user_ids: Required<
                    Pick<Params.GroupsIsMemberParams, "user_ids">
                >["user_ids"]
            },
        ): Promise<Responses.GroupsIsMemberUserIdsExtendedResponse>
        (
            params: Params.GroupsIsMemberParams & {
                user_ids: Required<
                    Pick<Params.GroupsIsMemberParams, "user_ids">
                >["user_ids"]
            },
        ): Promise<Responses.GroupsIsMemberUserIdsResponse>
        (
            params: Params.GroupsIsMemberParams & { extended: 1 | true },
        ): Promise<Responses.GroupsIsMemberExtendedResponse>
        (params: Params.GroupsIsMemberParams): Promise<Objects.VKBaseBoolInt>
    }
    /**
     * With this method you can join the group or public page, and also confirm your participation in an event.
     *
     * [Documentation](https://dev.vk.com/method/groups.join)
     */
    join: CallAPI<Params.GroupsJoinParams, Responses.BaseOkResponse>
    /**
     * With this method you can leave a group, public page, or event.
     *
     * [Documentation](https://dev.vk.com/method/groups.leave)
     */
    leave: CallAPI<Params.GroupsLeaveParams, Responses.BaseOkResponse>
    /**
     * Removes a user from the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.removeUser)
     */
    removeUser: CallAPI<Params.GroupsRemoveUserParams, Responses.BaseOkResponse>
    /**
     * Allows to reorder links in the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.reorderLink)
     */
    reorderLink: CallAPI<
        Params.GroupsReorderLinkParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of communities matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/groups.search)
     */
    search: CallAPI<Params.GroupsSearchParams, Responses.GroupsSearchResponse>
    /**
     * Allow to set notifications settings for group.
     *
     * [Documentation](https://dev.vk.com/method/groups.setCallbackSettings)
     */
    setCallbackSettings: CallAPI<
        Params.GroupsSetCallbackSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets Long Poll notification settings
     *
     * [Documentation](https://dev.vk.com/method/groups.setLongPollSettings)
     */
    setLongPollSettings: CallAPI<
        Params.GroupsSetLongPollSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.setSettings)
     */
    setSettings: CallAPI<
        Params.GroupsSetSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * In order to save note about group participant
     *
     * [Documentation](https://dev.vk.com/method/groups.setUserNote)
     */
    setUserNote: CallAPI<Params.GroupsSetUserNoteParams, Objects.VKBaseBoolInt>
    /**
     * Add new group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagAdd)
     */
    tagAdd: CallAPI<Params.GroupsTagAddParams, Objects.VKBaseBoolInt>
    /**
     * Bind or unbind group's tag to user
     *
     * [Documentation](https://dev.vk.com/method/groups.tagBind)
     */
    tagBind: CallAPI<Params.GroupsTagBindParams, Objects.VKBaseBoolInt>
    /**
     * Delete group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagDelete)
     */
    tagDelete: CallAPI<Params.GroupsTagDeleteParams, Objects.VKBaseBoolInt>
    /**
     * Update group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagUpdate)
     */
    tagUpdate: CallAPI<Params.GroupsTagUpdateParams, Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.toggleMarket)
     */
    toggleMarket: CallAPI<
        Params.GroupsToggleMarketParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.unban)
     */
    unban: CallAPI<Params.GroupsUnbanParams, Responses.BaseOkResponse>
}

/**
 * VK API leadForms.* methods
 */
export interface APIMethodsLeadForms {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.create)
     */
    create: CallAPI<
        Params.LeadFormsCreateParams,
        Responses.LeadFormsCreateResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.delete)
     */
    delete: CallAPI<
        Params.LeadFormsDeleteParams,
        Responses.LeadFormsDeleteResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.get)
     */
    get: CallAPI<Params.LeadFormsGetParams, Objects.VKLeadFormsForm>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.getLeads)
     */
    getLeads: CallAPI<
        Params.LeadFormsGetLeadsParams,
        Responses.LeadFormsGetLeadsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.getUploadURL)
     */
    getUploadURL: CallAPIWithoutParams<Responses.LeadFormsUploadUrlResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.list)
     */
    list: CallAPI<Params.LeadFormsListParams, Responses.LeadFormsListResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.update)
     */
    update: CallAPI<
        Params.LeadFormsUpdateParams,
        Responses.LeadFormsCreateResponse
    >
}

/**
 * VK API likes.* methods
 */
export interface APIMethodsLikes {
    /**
     * Adds the specified object to the 'Likes' list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/likes.add)
     */
    add: CallAPI<Params.LikesAddParams, Responses.LikesAddResponse>
    /**
     * Deletes the specified object from the 'Likes' list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/likes.delete)
     */
    delete: CallAPI<Params.LikesDeleteParams, Responses.LikesDeleteResponse>
    /**
     * Returns a list of IDs of users who added the specified object to their 'Likes' list.
     *
     * [Documentation](https://dev.vk.com/method/likes.getList)
     */
    getList: {
        (
            params: Params.LikesGetListParams & { extended: 1 | true },
        ): Promise<Responses.LikesGetListExtendedResponse>
        (
            params: Params.LikesGetListParams,
        ): Promise<Responses.LikesGetListResponse>
    }
    /**
     * Checks for the object in the 'Likes' list of the specified user.
     *
     * [Documentation](https://dev.vk.com/method/likes.isLiked)
     */
    isLiked: CallAPI<Params.LikesIsLikedParams, Responses.LikesIsLikedResponse>
}

/**
 * VK API market.* methods
 */
export interface APIMethodsMarket {
    /**
     * Ads a new item to the market.
     *
     * [Documentation](https://dev.vk.com/method/market.add)
     */
    add: CallAPI<Params.MarketAddParams, Responses.MarketAddResponse>
    /**
     * Creates new collection of items
     *
     * [Documentation](https://dev.vk.com/method/market.addAlbum)
     */
    addAlbum: CallAPI<
        Params.MarketAddAlbumParams,
        Responses.MarketAddAlbumResponse
    >
    /**
     * Adds property
     *
     * [Documentation](https://dev.vk.com/method/market.addProperty)
     */
    addProperty: CallAPI<
        Params.MarketAddPropertyParams,
        Responses.MarketAddPropertyResponse
    >
    /**
     * Adds property variant
     *
     * [Documentation](https://dev.vk.com/method/market.addPropertyVariant)
     */
    addPropertyVariant: CallAPI<
        Params.MarketAddPropertyVariantParams,
        Responses.MarketAddPropertyVariantResponse
    >
    /**
     * Adds an item to one or multiple collections.
     *
     * [Documentation](https://dev.vk.com/method/market.addToAlbum)
     */
    addToAlbum: CallAPI<Params.MarketAddToAlbumParams, Responses.BaseOkResponse>
    /**
     * Creates a new comment for an item.
     *
     * [Documentation](https://dev.vk.com/method/market.createComment)
     */
    createComment: CallAPI<
        Params.MarketCreateCommentParams,
        Responses.MarketCreateCommentResponse
    >
    /**
     * Deletes an item.
     *
     * [Documentation](https://dev.vk.com/method/market.delete)
     */
    delete: CallAPI<Params.MarketDeleteParams, Responses.BaseOkResponse>
    /**
     * Deletes a collection of items.
     *
     * [Documentation](https://dev.vk.com/method/market.deleteAlbum)
     */
    deleteAlbum: CallAPI<
        Params.MarketDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes an item's comment
     *
     * [Documentation](https://dev.vk.com/method/market.deleteComment)
     */
    deleteComment: CallAPI<
        Params.MarketDeleteCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.deleteProperty)
     */
    deleteProperty: CallAPI<
        Params.MarketDeletePropertyParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.deletePropertyVariant)
     */
    deletePropertyVariant: CallAPI<
        Params.MarketDeletePropertyVariantParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits an item.
     *
     * [Documentation](https://dev.vk.com/method/market.edit)
     */
    edit: CallAPI<Params.MarketEditParams, Responses.BaseOkResponse>
    /**
     * Edits a collection of items
     *
     * [Documentation](https://dev.vk.com/method/market.editAlbum)
     */
    editAlbum: CallAPI<Params.MarketEditAlbumParams, Responses.BaseOkResponse>
    /**
     * Chages item comment's text
     *
     * [Documentation](https://dev.vk.com/method/market.editComment)
     */
    editComment: CallAPI<
        Params.MarketEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edit order
     *
     * [Documentation](https://dev.vk.com/method/market.editOrder)
     */
    editOrder: CallAPI<Params.MarketEditOrderParams, Responses.BaseOkResponse>
    /**
     * Adds property
     *
     * [Documentation](https://dev.vk.com/method/market.editProperty)
     */
    editProperty: CallAPI<
        Params.MarketEditPropertyParams,
        Responses.BaseOkResponse
    >
    /**
     * Edit property variant name
     *
     * [Documentation](https://dev.vk.com/method/market.editPropertyVariant)
     */
    editPropertyVariant: CallAPI<
        Params.MarketEditPropertyVariantParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a filter list of market categories.
     *
     * [Documentation](https://dev.vk.com/method/market.filterCategories)
     */
    filterCategories: CallAPIWithOptionalParams<
        Params.MarketFilterCategoriesParams,
        Responses.MarketGetCategoriesNewResponse
    >
    /**
     * Returns items list for a community.
     *
     * [Documentation](https://dev.vk.com/method/market.get)
     */
    get: {
        (
            params: Params.MarketGetParams & { extended: 1 | true },
        ): Promise<Responses.MarketGetExtendedResponse>
        (params: Params.MarketGetParams): Promise<Responses.MarketGetResponse>
    }
    /**
     * Returns items album's data
     *
     * [Documentation](https://dev.vk.com/method/market.getAlbumById)
     */
    getAlbumById: CallAPI<
        Params.MarketGetAlbumByIdParams,
        Responses.MarketGetAlbumByIdResponse
    >
    /**
     * Returns community's market collections list.
     *
     * [Documentation](https://dev.vk.com/method/market.getAlbums)
     */
    getAlbums: CallAPI<
        Params.MarketGetAlbumsParams,
        Responses.MarketGetAlbumsResponse
    >
    /**
     * Returns information about market items by their ids.
     *
     * [Documentation](https://dev.vk.com/method/market.getById)
     */
    getById: {
        (
            params: Params.MarketGetByIdParams & { extended: 1 | true },
        ): Promise<Responses.MarketGetByIdExtendedResponse>
        (
            params: Params.MarketGetByIdParams,
        ): Promise<Responses.MarketGetByIdResponse>
    }
    /**
     * Returns a list of market categories.
     *
     * [Documentation](https://dev.vk.com/method/market.getCategories)
     */
    getCategories: CallAPIWithOptionalParams<
        Params.MarketGetCategoriesParams,
        Responses.MarketGetCategoriesNewResponse
    >
    /**
     * Returns comments list for an item.
     *
     * [Documentation](https://dev.vk.com/method/market.getComments)
     */
    getComments: CallAPI<
        Params.MarketGetCommentsParams,
        Responses.MarketGetCommentsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.getFavesForAttach)
     */
    getFavesForAttach: CallAPIWithOptionalParams<
        Params.MarketGetFavesForAttachParams,
        Responses.MarketGetFavesForAttachResponse
    >
    /**
     * Get market orders
     *
     * [Documentation](https://dev.vk.com/method/market.getGroupOrders)
     */
    getGroupOrders: CallAPIWithOptionalParams<
        Params.MarketGetGroupOrdersParams,
        Responses.MarketGetGroupOrdersResponse
    >
    /**
     * Get order
     *
     * [Documentation](https://dev.vk.com/method/market.getOrderById)
     */
    getOrderById: CallAPI<
        Params.MarketGetOrderByIdParams,
        Responses.MarketGetOrderByIdResponse
    >
    /**
     * Get market items in the order
     *
     * [Documentation](https://dev.vk.com/method/market.getOrderItems)
     */
    getOrderItems: CallAPI<
        Params.MarketGetOrderItemsParams,
        Responses.MarketGetOrderItemsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.getOrders)
     */
    getOrders: {
        (
            params: Params.MarketGetOrdersParams & { extended: 1 | true },
        ): Promise<Responses.MarketGetOrdersExtendedResponse>
        (
            params?: Params.MarketGetOrdersParams,
        ): Promise<Responses.MarketGetOrdersResponse>
    }
    /**
     * Returns the server address for market photo upload.
     *
     * [Documentation](https://dev.vk.com/method/market.getProductPhotoUploadServer)
     */
    getProductPhotoUploadServer: CallAPI<
        Params.MarketGetProductPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Get properties
     *
     * [Documentation](https://dev.vk.com/method/market.getProperties)
     */
    getProperties: CallAPI<
        Params.MarketGetPropertiesParams,
        Responses.MarketGetPropertiesResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.groupItems)
     */
    groupItems: CallAPI<
        Params.MarketGroupItemsParams,
        Responses.MarketGroupItemsResponse
    >
    /**
     * Removes an item from one or multiple collections.
     *
     * [Documentation](https://dev.vk.com/method/market.removeFromAlbum)
     */
    removeFromAlbum: CallAPI<
        Params.MarketRemoveFromAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the collections list.
     *
     * [Documentation](https://dev.vk.com/method/market.reorderAlbums)
     */
    reorderAlbums: CallAPI<
        Params.MarketReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Changes item place in a collection.
     *
     * [Documentation](https://dev.vk.com/method/market.reorderItems)
     */
    reorderItems: CallAPI<
        Params.MarketReorderItemsParams,
        Responses.BaseOkResponse
    >
    /**
     * Sends a complaint to the item.
     *
     * [Documentation](https://dev.vk.com/method/market.report)
     */
    report: CallAPI<Params.MarketReportParams, Responses.BaseOkResponse>
    /**
     * Sends a complaint to the item's comment.
     *
     * [Documentation](https://dev.vk.com/method/market.reportComment)
     */
    reportComment: CallAPI<
        Params.MarketReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores recently deleted item
     *
     * [Documentation](https://dev.vk.com/method/market.restore)
     */
    restore: CallAPI<Params.MarketRestoreParams, Responses.BaseOkResponse>
    /**
     * Restores a recently deleted comment
     *
     * [Documentation](https://dev.vk.com/method/market.restoreComment)
     */
    restoreComment: CallAPI<
        Params.MarketRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Save market photo after upload.
     *
     * [Documentation](https://dev.vk.com/method/market.saveProductPhoto)
     */
    saveProductPhoto: CallAPI<
        Params.MarketSaveProductPhotoParams,
        Responses.MarketPhotoIdResponse
    >
    /**
     * Bulk save market photo after upload.
     *
     * [Documentation](https://dev.vk.com/method/market.saveProductPhotoBulk)
     */
    saveProductPhotoBulk: CallAPI<
        Params.MarketSaveProductPhotoBulkParams,
        Responses.MarketPhotoIdBulkResponse
    >
    /**
     * Searches market items in a community's catalog
     *
     * [Documentation](https://dev.vk.com/method/market.search)
     */
    search: {
        (
            params: Params.MarketSearchParams & { extended: 1 | true },
        ): Promise<Responses.MarketSearchExtendedResponse>
        (
            params: Params.MarketSearchParams,
        ): Promise<Responses.MarketSearchResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.searchItems)
     */
    searchItems: CallAPI<
        Params.MarketSearchItemsParams,
        Responses.MarketSearchResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.searchItemsBasic)
     */
    searchItemsBasic: CallAPI<
        Params.MarketSearchItemsBasicParams,
        Responses.MarketSearchBasicResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.ungroupItems)
     */
    ungroupItems: CallAPI<
        Params.MarketUngroupItemsParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API messages.* methods
 */
export interface APIMethodsMessages {
    /**
     * Adds a new user to a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.addChatUser)
     */
    addChatUser: CallAPI<
        Params.MessagesAddChatUserParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds new users to a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.addChatUsers)
     */
    addChatUsers: CallAPIWithOptionalParams<
        Params.MessagesAddChatUsersParams,
        Responses.MessagesAddChatUsersResponse
    >
    /**
     * Allows sending messages from community to the current user.
     *
     * [Documentation](https://dev.vk.com/method/messages.allowMessagesFromGroup)
     */
    allowMessagesFromGroup: CallAPI<
        Params.MessagesAllowMessagesFromGroupParams,
        Responses.BaseOkResponse
    >
    /**
     * Creates a chat with several participants.
     *
     * [Documentation](https://dev.vk.com/method/messages.createChat)
     */
    createChat: CallAPIWithOptionalParams<
        Params.MessagesCreateChatParams,
        Responses.MessagesCreateChatWithPeerIdsResponse
    >
    /**
     * Deletes one or more messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.delete)
     */
    delete: CallAPIWithOptionalParams<
        Params.MessagesDeleteParams,
        Responses.MessagesDeleteFullResponse
    >
    /**
     * Deletes a chat's cover picture.
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteChatPhoto)
     */
    deleteChatPhoto: CallAPI<
        Params.MessagesDeleteChatPhotoParams,
        Responses.MessagesDeleteChatPhotoResponse
    >
    /**
     * Deletes all private messages in a conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteConversation)
     */
    deleteConversation: CallAPIWithOptionalParams<
        Params.MessagesDeleteConversationParams,
        Responses.MessagesDeleteConversationResponse
    >
    /**
     * Delete message reaction
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteReaction)
     */
    deleteReaction: CallAPI<
        Params.MessagesDeleteReactionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Denies sending message from community to the current user.
     *
     * [Documentation](https://dev.vk.com/method/messages.denyMessagesFromGroup)
     */
    denyMessagesFromGroup: CallAPI<
        Params.MessagesDenyMessagesFromGroupParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the message.
     *
     * [Documentation](https://dev.vk.com/method/messages.edit)
     */
    edit: CallAPI<Params.MessagesEditParams, Objects.VKBaseBoolInt>
    /**
     * Edits the title of a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.editChat)
     */
    editChat: CallAPI<Params.MessagesEditChatParams, Responses.BaseOkResponse>
    /**
     * Returns messages by their IDs within the conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.getByConversationMessageId)
     */
    getByConversationMessageId: {
        (
            params: Params.MessagesGetByConversationMessageIdParams & {
                extended: 1 | true
            },
        ): Promise<Responses.MessagesGetByConversationMessageIdExtendedResponse>
        (
            params: Params.MessagesGetByConversationMessageIdParams,
        ): Promise<Responses.MessagesGetByConversationMessageIdResponse>
    }
    /**
     * Returns messages by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/messages.getById)
     */
    getById: {
        (
            params: Params.MessagesGetByIdParams & { extended: 1 | true },
        ): Promise<Responses.MessagesGetByIdExtendedResponse>
        (
            params?: Params.MessagesGetByIdParams,
        ): Promise<Responses.MessagesGetByIdResponse>
    }
    /**
     * Returns information about a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.getChat)
     */
    getChat: {
        (
            params: Params.MessagesGetChatParams & {
                chat_ids: Required<
                    Pick<Params.MessagesGetChatParams, "chat_ids">
                >["chat_ids"]
                fields: Required<
                    Pick<Params.MessagesGetChatParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.MessagesGetChatChatIdsFieldsResponse>
        (
            params: Params.MessagesGetChatParams & {
                fields: Required<
                    Pick<Params.MessagesGetChatParams, "fields">
                >["fields"]
            },
        ): Promise<Objects.VKMessagesChatFull>
        (
            params: Params.MessagesGetChatParams & {
                chat_ids: Required<
                    Pick<Params.MessagesGetChatParams, "chat_ids">
                >["chat_ids"]
            },
        ): Promise<Responses.MessagesGetChatChatIdsResponse>
        (params?: Params.MessagesGetChatParams): Promise<Objects.VKMessagesChat>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.getChatPreview)
     */
    getChatPreview: CallAPIWithOptionalParams<
        Params.MessagesGetChatPreviewParams,
        Responses.MessagesGetChatPreviewResponse
    >
    /**
     * Returns a list of IDs of users participating in a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversationMembers)
     */
    getConversationMembers: CallAPI<
        Params.MessagesGetConversationMembersParams,
        Objects.VKMessagesGetConversationMembers
    >
    /**
     * Returns a list of the current user's conversations.
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversations)
     */
    getConversations: CallAPIWithOptionalParams<
        Params.MessagesGetConversationsParams,
        Responses.MessagesGetConversationsResponse
    >
    /**
     * Returns conversations by their IDs
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversationsById)
     */
    getConversationsById: {
        (
            params: Params.MessagesGetConversationsByIdParams & {
                extended: 1 | true
            },
        ): Promise<Objects.VKMessagesGetConversationByIdExtended>
        (
            params: Params.MessagesGetConversationsByIdParams,
        ): Promise<Objects.VKMessagesGetConversationById>
    }
    /**
     * Returns message history for the specified user or group chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.getHistory)
     */
    getHistory: {
        (
            params: Params.MessagesGetHistoryParams & { extended: 1 | true },
        ): Promise<Responses.MessagesGetHistoryExtendedResponse>
        (
            params?: Params.MessagesGetHistoryParams,
        ): Promise<Responses.MessagesGetHistoryResponse>
    }
    /**
     * Returns media files from the dialog or group chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.getHistoryAttachments)
     */
    getHistoryAttachments: CallAPIWithOptionalParams<
        Params.MessagesGetHistoryAttachmentsParams,
        Responses.MessagesGetHistoryAttachmentsResponse
    >
    /**
     * Returns a list of user's important messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.getImportantMessages)
     */
    getImportantMessages: {
        (
            params: Params.MessagesGetImportantMessagesParams & {
                extended: 1 | true
            },
        ): Promise<Responses.MessagesGetImportantMessagesExtendedResponse>
        (
            params?: Params.MessagesGetImportantMessagesParams,
        ): Promise<Responses.MessagesGetImportantMessagesResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.getIntentUsers)
     */
    getIntentUsers: CallAPI<
        Params.MessagesGetIntentUsersParams,
        Responses.MessagesGetIntentUsersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.getInviteLink)
     */
    getInviteLink: CallAPI<
        Params.MessagesGetInviteLinkParams,
        | Responses.MessagesGetInviteLinkResponse
        | Responses.MessagesGetInviteLinkByOwnerResponse
    >
    /**
     * Returns a user's current status and date of last activity.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLastActivity)
     */
    getLastActivity: CallAPI<
        Params.MessagesGetLastActivityParams,
        Objects.VKMessagesLastActivity
    >
    /**
     * Returns updates in user's private messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLongPollHistory)
     */
    getLongPollHistory: CallAPIWithOptionalParams<
        Params.MessagesGetLongPollHistoryParams,
        Responses.MessagesGetLongPollHistoryResponse
    >
    /**
     * Returns data required for connection to a Long Poll server.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLongPollServer)
     */
    getLongPollServer: CallAPIWithOptionalParams<
        Params.MessagesGetLongPollServerParams,
        Objects.VKMessagesLongpollParams
    >
    /**
     * Get reaction counters for message
     *
     * [Documentation](https://dev.vk.com/method/messages.getMessagesReactions)
     */
    getMessagesReactions: CallAPI<
        Params.MessagesGetMessagesReactionsParams,
        Responses.MessagesGetMessagesReactionsResponse
    >
    /**
     * Get reacted users and counters for message
     *
     * [Documentation](https://dev.vk.com/method/messages.getReactedPeers)
     */
    getReactedPeers: CallAPI<
        Params.MessagesGetReactedPeersParams,
        Responses.MessagesGetReactedPeersResponse
    >
    /**
     * Get assets to display message reactions
     *
     * [Documentation](https://dev.vk.com/method/messages.getReactionsAssets)
     */
    getReactionsAssets: CallAPIWithOptionalParams<
        Params.MessagesGetReactionsAssetsParams,
        Responses.MessagesGetReactionsAssetsResponse
    >
    /**
     * Returns information whether sending messages from the community to current user is allowed.
     *
     * [Documentation](https://dev.vk.com/method/messages.isMessagesFromGroupAllowed)
     */
    isMessagesFromGroupAllowed: CallAPI<
        Params.MessagesIsMessagesFromGroupAllowedParams,
        Responses.MessagesIsMessagesFromGroupAllowedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.joinChatByInviteLink)
     */
    joinChatByInviteLink: CallAPI<
        Params.MessagesJoinChatByInviteLinkParams,
        Responses.MessagesJoinChatByInviteLinkResponse
    >
    /**
     * Marks and unmarks conversations as unanswered.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsAnsweredConversation)
     */
    markAsAnsweredConversation: CallAPI<
        Params.MessagesMarkAsAnsweredConversationParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks and unmarks messages as important (starred).
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsImportant)
     */
    markAsImportant: CallAPIWithOptionalParams<
        Params.MessagesMarkAsImportantParams,
        Responses.MessagesMarkAsImportantDeprecatedResponse
    >
    /**
     * Marks and unmarks conversations as important.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsImportantConversation)
     */
    markAsImportantConversation: CallAPI<
        Params.MessagesMarkAsImportantConversationParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks messages as read.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsRead)
     */
    markAsRead: CallAPIWithOptionalParams<
        Params.MessagesMarkAsReadParams,
        Responses.BaseOkResponse
    >
    /**
     * Mark messages reactions as read
     *
     * [Documentation](https://dev.vk.com/method/messages.markReactionsAsRead)
     */
    markReactionsAsRead: CallAPI<
        Params.MessagesMarkReactionsAsReadParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.muteChatMentions)
     */
    muteChatMentions: CallAPI<
        Params.MessagesMuteChatMentionsParams,
        Responses.BaseOkResponse
    >
    /**
     * Pin a message.
     *
     * [Documentation](https://dev.vk.com/method/messages.pin)
     */
    pin: CallAPI<Params.MessagesPinParams, Objects.VKMessagesPinnedMessage>
    /**
     * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.removeChatUser)
     */
    removeChatUser: CallAPI<
        Params.MessagesRemoveChatUserParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a deleted message.
     *
     * [Documentation](https://dev.vk.com/method/messages.restore)
     */
    restore: CallAPIWithOptionalParams<
        Params.MessagesRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of the current user's private messages that match search criteria.
     *
     * [Documentation](https://dev.vk.com/method/messages.search)
     */
    search: {
        (
            params: Params.MessagesSearchParams & { extended: 1 | true },
        ): Promise<Responses.MessagesSearchExtendedResponse>
        (
            params?: Params.MessagesSearchParams,
        ): Promise<Responses.MessagesSearchResponse>
    }
    /**
     * Returns a list of the current user's conversations that match search criteria.
     *
     * [Documentation](https://dev.vk.com/method/messages.searchConversations)
     */
    searchConversations: {
        (
            params: Params.MessagesSearchConversationsParams & {
                extended: 1 | true
            },
        ): Promise<Responses.MessagesSearchConversationsExtendedResponse>
        (
            params?: Params.MessagesSearchConversationsParams,
        ): Promise<Responses.MessagesSearchConversationsResponse>
    }
    /**
     * Sends a message.
     *
     * [Documentation](https://dev.vk.com/method/messages.send)
     */
    send: CallAPIWithOptionalParams<
        Params.MessagesSendParams,
        | Responses.MessagesSendDeprecatedResponse
        | Responses.MessagesSendUserIdsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.sendMessageEventAnswer)
     */
    sendMessageEventAnswer: CallAPI<
        Params.MessagesSendMessageEventAnswerParams,
        Responses.BaseOkResponse
    >
    /**
     * Send message reaction
     *
     * [Documentation](https://dev.vk.com/method/messages.sendReaction)
     */
    sendReaction: CallAPI<
        Params.MessagesSendReactionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Changes the status of a user as typing in a conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.setActivity)
     */
    setActivity: CallAPIWithOptionalParams<
        Params.MessagesSetActivityParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets a previously-uploaded picture as the cover picture of a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.setChatPhoto)
     */
    setChatPhoto: CallAPI<
        Params.MessagesSetChatPhotoParams,
        Responses.MessagesSetChatPhotoResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.unpin)
     */
    unpin: CallAPI<Params.MessagesUnpinParams, Responses.BaseOkResponse>
}

/**
 * VK API newsfeed.* methods
 */
export interface APIMethodsNewsfeed {
    /**
     * Prevents news from specified users and communities from appearing in the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.addBan)
     */
    addBan: CallAPIWithOptionalParams<
        Params.NewsfeedAddBanParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.deleteBan)
     */
    deleteBan: CallAPIWithOptionalParams<
        Params.NewsfeedDeleteBanParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.deleteList)
     */
    deleteList: CallAPI<
        Params.NewsfeedDeleteListParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns data required to show newsfeed for the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.get)
     */
    get: CallAPIWithOptionalParams<
        Params.NewsfeedGetParams,
        Responses.NewsfeedGenericResponse
    >
    /**
     * Returns a list of users and communities banned from the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getBanned)
     */
    getBanned: {
        (
            params: Params.NewsfeedGetBannedParams & { extended: 1 | true },
        ): Promise<Responses.NewsfeedGetBannedExtendedResponse>
        (
            params?: Params.NewsfeedGetBannedParams,
        ): Promise<Responses.NewsfeedGetBannedResponse>
    }
    /**
     * Returns a list of comments in the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getComments)
     */
    getComments: CallAPIWithOptionalParams<
        Params.NewsfeedGetCommentsParams,
        Responses.NewsfeedGetCommentsResponse
    >
    /**
     * Returns a list of newsfeeds followed by the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getLists)
     */
    getLists: {
        (
            params: Params.NewsfeedGetListsParams & { extended: 1 | true },
        ): Promise<Responses.NewsfeedGetListsExtendedResponse>
        (
            params?: Params.NewsfeedGetListsParams,
        ): Promise<Responses.NewsfeedGetListsResponse>
    }
    /**
     * Returns a list of posts on user walls in which the current user is mentioned.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getMentions)
     */
    getMentions: CallAPIWithOptionalParams<
        Params.NewsfeedGetMentionsParams,
        Responses.NewsfeedGetMentionsResponse
    >
    /**
     * , Returns a list of newsfeeds recommended to the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getRecommended)
     */
    getRecommended: CallAPIWithOptionalParams<
        Params.NewsfeedGetRecommendedParams,
        Responses.NewsfeedGenericResponse
    >
    /**
     * Returns communities and users that current user is suggested to follow.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getSuggestedSources)
     */
    getSuggestedSources: CallAPIWithOptionalParams<
        Params.NewsfeedGetSuggestedSourcesParams,
        Responses.NewsfeedGetSuggestedSourcesResponse
    >
    /**
     * Hides an item from the newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.ignoreItem)
     */
    ignoreItem: CallAPI<
        Params.NewsfeedIgnoreItemParams,
        Responses.NewsfeedIgnoreItemResponse
    >
    /**
     * Creates and edits user newsfeed lists
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.saveList)
     */
    saveList: CallAPI<
        Params.NewsfeedSaveListParams,
        Responses.NewsfeedSaveListResponse
    >
    /**
     * Returns search results by statuses.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.search)
     */
    search: {
        (
            params: Params.NewsfeedSearchParams & { extended: 1 | true },
        ): Promise<
            | Responses.NewsfeedSearchExtendedResponse
            | Responses.NewsfeedSearchExtendedStrictResponse
        >
        (
            params?: Params.NewsfeedSearchParams,
        ): Promise<
            | Responses.NewsfeedSearchResponse
            | Responses.NewsfeedSearchStrictResponse
        >
    }
    /**
     * Returns a hidden item to the newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.unignoreItem)
     */
    unignoreItem: CallAPI<
        Params.NewsfeedUnignoreItemParams,
        Responses.BaseOkResponse
    >
    /**
     * Unsubscribes the current user from specified newsfeeds.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.unsubscribe)
     */
    unsubscribe: CallAPI<
        Params.NewsfeedUnsubscribeParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API notes.* methods
 */
export interface APIMethodsNotes {
    /**
     * Creates a new note for the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.add)
     */
    add: CallAPI<Params.NotesAddParams, Responses.NotesAddResponse>
    /**
     * Adds a new comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.createComment)
     */
    createComment: CallAPI<
        Params.NotesCreateCommentParams,
        Responses.NotesCreateCommentResponse
    >
    /**
     * Deletes a note of the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.delete)
     */
    delete: CallAPI<Params.NotesDeleteParams, Responses.BaseOkResponse>
    /**
     * Deletes a comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.deleteComment)
     */
    deleteComment: CallAPI<
        Params.NotesDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a note of the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.edit)
     */
    edit: CallAPI<Params.NotesEditParams, Responses.BaseOkResponse>
    /**
     * Edits a comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.editComment)
     */
    editComment: CallAPI<
        Params.NotesEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of notes created by a user.
     *
     * [Documentation](https://dev.vk.com/method/notes.get)
     */
    get: CallAPIWithOptionalParams<
        Params.NotesGetParams,
        Responses.NotesGetResponse
    >
    /**
     * Returns a note by its ID.
     *
     * [Documentation](https://dev.vk.com/method/notes.getById)
     */
    getById: CallAPI<Params.NotesGetByIdParams, Objects.VKNotesNote>
    /**
     * Returns a list of comments on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.getComments)
     */
    getComments: CallAPI<
        Params.NotesGetCommentsParams,
        Responses.NotesGetCommentsResponse
    >
    /**
     * Restores a deleted comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.restoreComment)
     */
    restoreComment: CallAPI<
        Params.NotesRestoreCommentParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API notifications.* methods
 */
export interface APIMethodsNotifications {
    /**
     * Returns a list of notifications about other users' feedback to the current user's wall posts.
     *
     * [Documentation](https://dev.vk.com/method/notifications.get)
     */
    get: CallAPIWithOptionalParams<
        Params.NotificationsGetParams,
        Responses.NotificationsGetResponse
    >
    /**
     * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
     *
     * [Documentation](https://dev.vk.com/method/notifications.markAsViewed)
     */
    markAsViewed: CallAPIWithoutParams<Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/notifications.sendMessage)
     */
    sendMessage: CallAPI<
        Params.NotificationsSendMessageParams,
        Responses.NotificationsSendMessageResponse
    >
}

/**
 * VK API orders.* methods
 */
export interface APIMethodsOrders {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.cancelSubscription)
     */
    cancelSubscription: CallAPI<
        Params.OrdersCancelSubscriptionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Changes order status.
     *
     * [Documentation](https://dev.vk.com/method/orders.changeState)
     */
    changeState: CallAPI<
        Params.OrdersChangeStateParams,
        Responses.OrdersChangeStateResponse
    >
    /**
     * Returns a list of orders.
     *
     * [Documentation](https://dev.vk.com/method/orders.get)
     */
    get: CallAPIWithOptionalParams<
        Params.OrdersGetParams,
        Responses.OrdersGetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getAmount)
     */
    getAmount: CallAPI<
        Params.OrdersGetAmountParams,
        Responses.OrdersGetAmountResponse
    >
    /**
     * Returns information about orders by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/orders.getById)
     */
    getById: CallAPIWithOptionalParams<
        Params.OrdersGetByIdParams,
        Responses.OrdersGetByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getUserSubscriptionById)
     */
    getUserSubscriptionById: CallAPI<
        Params.OrdersGetUserSubscriptionByIdParams,
        Objects.VKOrdersSubscription
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getUserSubscriptions)
     */
    getUserSubscriptions: CallAPI<
        Params.OrdersGetUserSubscriptionsParams,
        Responses.OrdersGetUserSubscriptionsResponse
    >
}

/**
 * VK API pages.* methods
 */
export interface APIMethodsPages {
    /**
     * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
     *
     * [Documentation](https://dev.vk.com/method/pages.clearCache)
     */
    clearCache: CallAPI<Params.PagesClearCacheParams, Responses.BaseOkResponse>
    /**
     * Returns information about a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.get)
     */
    get: CallAPIWithOptionalParams<
        Params.PagesGetParams,
        Objects.VKPagesWikipageFull
    >
    /**
     * Returns a list of all previous versions of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.getHistory)
     */
    getHistory: CallAPI<
        Params.PagesGetHistoryParams,
        Responses.PagesGetHistoryResponse
    >
    /**
     * Returns a list of wiki pages in a group.
     *
     * [Documentation](https://dev.vk.com/method/pages.getTitles)
     */
    getTitles: CallAPIWithOptionalParams<
        Params.PagesGetTitlesParams,
        Responses.PagesGetTitlesResponse
    >
    /**
     * Returns the text of one of the previous versions of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.getVersion)
     */
    getVersion: CallAPI<
        Params.PagesGetVersionParams,
        Responses.PagesGetVersionResponse
    >
    /**
     * Returns HTML representation of the wiki markup.
     *
     * [Documentation](https://dev.vk.com/method/pages.parseWiki)
     */
    parseWiki: CallAPI<
        Params.PagesParseWikiParams,
        Responses.PagesParseWikiResponse
    >
    /**
     * Saves the text of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.save)
     */
    save: CallAPIWithOptionalParams<
        Params.PagesSaveParams,
        Responses.PagesSaveResponse
    >
    /**
     * Saves modified read and edit access settings for a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.saveAccess)
     */
    saveAccess: CallAPI<
        Params.PagesSaveAccessParams,
        Responses.PagesSaveAccessResponse
    >
}

/**
 * VK API photos.* methods
 */
export interface APIMethodsPhotos {
    /**
     * Confirms a tag on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.confirmTag)
     */
    confirmTag: CallAPI<Params.PhotosConfirmTagParams, Responses.BaseOkResponse>
    /**
     * Allows to copy a photo to the "Saved photos" album
     *
     * [Documentation](https://dev.vk.com/method/photos.copy)
     */
    copy: CallAPI<Params.PhotosCopyParams, Responses.PhotosCopyResponse>
    /**
     * Creates an empty photo album.
     *
     * [Documentation](https://dev.vk.com/method/photos.createAlbum)
     */
    createAlbum: CallAPI<
        Params.PhotosCreateAlbumParams,
        Objects.VKPhotosPhotoAlbumFull
    >
    /**
     * Adds a new comment on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.createComment)
     */
    createComment: CallAPI<
        Params.PhotosCreateCommentParams,
        Responses.PhotosCreateCommentResponse
    >
    /**
     * Deletes a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.delete)
     */
    delete: CallAPIWithOptionalParams<
        Params.PhotosDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a photo album belonging to the current user.
     *
     * [Documentation](https://dev.vk.com/method/photos.deleteAlbum)
     */
    deleteAlbum: CallAPI<
        Params.PhotosDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.deleteComment)
     */
    deleteComment: CallAPI<
        Params.PhotosDeleteCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Edits the caption of a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.edit)
     */
    edit: CallAPI<Params.PhotosEditParams, Responses.BaseOkResponse>
    /**
     * Edits information about a photo album.
     *
     * [Documentation](https://dev.vk.com/method/photos.editAlbum)
     */
    editAlbum: CallAPI<Params.PhotosEditAlbumParams, Responses.BaseOkResponse>
    /**
     * Edits a comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.editComment)
     */
    editComment: CallAPI<
        Params.PhotosEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of a user's or community's photos.
     *
     * [Documentation](https://dev.vk.com/method/photos.get)
     */
    get: CallAPIWithOptionalParams<
        Params.PhotosGetParams,
        Responses.PhotosGetResponse
    >
    /**
     * Returns a list of a user's or community's photo albums.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAlbums)
     */
    getAlbums: CallAPIWithOptionalParams<
        Params.PhotosGetAlbumsParams,
        Responses.PhotosGetAlbumsResponse
    >
    /**
     * Returns the number of photo albums belonging to a user or community.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAlbumsCount)
     */
    getAlbumsCount: CallAPIWithOptionalParams<
        Params.PhotosGetAlbumsCountParams,
        Responses.PhotosGetAlbumsCountResponse
    >
    /**
     * Returns a list of photos belonging to a user or community, in reverse chronological order.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAll)
     */
    getAll: CallAPIWithOptionalParams<
        Params.PhotosGetAllParams,
        Responses.PhotosGetAllResponse
    >
    /**
     * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAllComments)
     */
    getAllComments: CallAPIWithOptionalParams<
        Params.PhotosGetAllCommentsParams,
        Responses.PhotosGetAllCommentsResponse
    >
    /**
     * Returns information about photos by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/photos.getById)
     */
    getById: CallAPI<
        Params.PhotosGetByIdParams,
        Responses.PhotosGetByIdResponse
    >
    /**
     * Returns an upload link for chat cover pictures.
     *
     * [Documentation](https://dev.vk.com/method/photos.getChatUploadServer)
     */
    getChatUploadServer: CallAPI<
        Params.PhotosGetChatUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of comments on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getComments)
     */
    getComments: {
        (
            params: Params.PhotosGetCommentsParams & { extended: 1 | true },
        ): Promise<Responses.PhotosGetCommentsExtendedResponse>
        (
            params: Params.PhotosGetCommentsParams,
        ): Promise<Responses.PhotosGetCommentsResponse>
    }
    /**
     * Returns the server address for market album photo upload.
     *
     * [Documentation](https://dev.vk.com/method/photos.getMarketAlbumUploadServer)
     */
    getMarketAlbumUploadServer: CallAPI<
        Params.PhotosGetMarketAlbumUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns the server address for photo upload in a private message for a user.
     *
     * [Documentation](https://dev.vk.com/method/photos.getMessagesUploadServer)
     */
    getMessagesUploadServer: CallAPIWithOptionalParams<
        Params.PhotosGetMessagesUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Returns a list of photos with tags that have not been viewed.
     *
     * [Documentation](https://dev.vk.com/method/photos.getNewTags)
     */
    getNewTags: CallAPIWithOptionalParams<
        Params.PhotosGetNewTagsParams,
        Responses.PhotosGetNewTagsResponse
    >
    /**
     * Returns the server address for owner cover upload.
     *
     * [Documentation](https://dev.vk.com/method/photos.getOwnerCoverPhotoUploadServer)
     */
    getOwnerCoverPhotoUploadServer: CallAPIWithOptionalParams<
        Params.PhotosGetOwnerCoverPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns an upload server address for a profile or community photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getOwnerPhotoUploadServer)
     */
    getOwnerPhotoUploadServer: CallAPIWithOptionalParams<
        Params.PhotosGetOwnerPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of tags on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getTags)
     */
    getTags: CallAPI<
        Params.PhotosGetTagsParams,
        Responses.PhotosGetTagsResponse
    >
    /**
     * Returns the server address for photo upload.
     *
     * [Documentation](https://dev.vk.com/method/photos.getUploadServer)
     */
    getUploadServer: CallAPIWithOptionalParams<
        Params.PhotosGetUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Returns a list of photos in which a user is tagged.
     *
     * [Documentation](https://dev.vk.com/method/photos.getUserPhotos)
     */
    getUserPhotos: CallAPIWithOptionalParams<
        Params.PhotosGetUserPhotosParams,
        Responses.PhotosGetUserPhotosResponse
    >
    /**
     * Returns the server address for photo upload onto a user's wall.
     *
     * [Documentation](https://dev.vk.com/method/photos.getWallUploadServer)
     */
    getWallUploadServer: CallAPIWithOptionalParams<
        Params.PhotosGetWallUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Makes a photo into an album cover.
     *
     * [Documentation](https://dev.vk.com/method/photos.makeCover)
     */
    makeCover: CallAPI<Params.PhotosMakeCoverParams, Responses.BaseOkResponse>
    /**
     * Moves a photo from one album to another.
     *
     * [Documentation](https://dev.vk.com/method/photos.move)
     */
    move: CallAPI<Params.PhotosMoveParams, Responses.BaseOkResponse>
    /**
     * Adds a tag on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.putTag)
     */
    putTag: CallAPI<Params.PhotosPutTagParams, Responses.PhotosPutTagResponse>
    /**
     * Removes a tag from a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.removeTag)
     */
    removeTag: CallAPI<Params.PhotosRemoveTagParams, Responses.BaseOkResponse>
    /**
     * Reorders the album in the list of user albums.
     *
     * [Documentation](https://dev.vk.com/method/photos.reorderAlbums)
     */
    reorderAlbums: CallAPI<
        Params.PhotosReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the photo in the list of photos of the user album.
     *
     * [Documentation](https://dev.vk.com/method/photos.reorderPhotos)
     */
    reorderPhotos: CallAPI<
        Params.PhotosReorderPhotosParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.report)
     */
    report: CallAPI<Params.PhotosReportParams, Responses.BaseOkResponse>
    /**
     * Reports (submits a complaint about) a comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.reportComment)
     */
    reportComment: CallAPI<
        Params.PhotosReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a deleted photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.restore)
     */
    restore: CallAPI<Params.PhotosRestoreParams, Responses.BaseOkResponse>
    /**
     * Restores a deleted comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.restoreComment)
     */
    restoreComment: CallAPI<
        Params.PhotosRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Saves photos after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.save)
     */
    save: CallAPIWithOptionalParams<
        Params.PhotosSaveParams,
        Responses.PhotosSaveResponse
    >
    /**
     * Saves market album photos after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveMarketAlbumPhoto)
     */
    saveMarketAlbumPhoto: CallAPI<
        Params.PhotosSaveMarketAlbumPhotoParams,
        Responses.PhotosSaveMarketAlbumPhotoResponse
    >
    /**
     * Saves a photo after being successfully uploaded. URL obtained with [vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer] method.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveMessagesPhoto)
     */
    saveMessagesPhoto: CallAPI<
        Params.PhotosSaveMessagesPhotoParams,
        Responses.PhotosSaveMessagesPhotoResponse
    >
    /**
     * Saves cover photo after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveOwnerCoverPhoto)
     */
    saveOwnerCoverPhoto: CallAPIWithOptionalParams<
        Params.PhotosSaveOwnerCoverPhotoParams,
        Responses.PhotosSaveOwnerCoverPhotoResponse
    >
    /**
     * Saves a profile or community photo. Upload URL can be got with the [vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer] method.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveOwnerPhoto)
     */
    saveOwnerPhoto: CallAPIWithOptionalParams<
        Params.PhotosSaveOwnerPhotoParams,
        Responses.PhotosSaveOwnerPhotoResponse
    >
    /**
     * Saves a photo to a user's or community's wall after being uploaded.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveWallPhoto)
     */
    saveWallPhoto: CallAPI<
        Params.PhotosSaveWallPhotoParams,
        Responses.PhotosSaveWallPhotoResponse
    >
    /**
     * Returns a list of photos.
     *
     * [Documentation](https://dev.vk.com/method/photos.search)
     */
    search: CallAPIWithOptionalParams<
        Params.PhotosSearchParams,
        Responses.PhotosSearchResponse
    >
}

/**
 * VK API podcasts.* methods
 */
export interface APIMethodsPodcasts {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/podcasts.searchPodcast)
     */
    searchPodcast: CallAPI<
        Params.PodcastsSearchPodcastParams,
        Responses.PodcastsSearchPodcastResponse
    >
}

/**
 * VK API polls.* methods
 */
export interface APIMethodsPolls {
    /**
     * Adds the current user's vote to the selected answer in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.addVote)
     */
    addVote: CallAPI<Params.PollsAddVoteParams, Objects.VKBaseBoolInt>
    /**
     * Creates polls that can be attached to the users' or communities' posts.
     *
     * [Documentation](https://dev.vk.com/method/polls.create)
     */
    create: CallAPIWithOptionalParams<
        Params.PollsCreateParams,
        Objects.VKPollsPoll
    >
    /**
     * Deletes the current user's vote from the selected answer in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.deleteVote)
     */
    deleteVote: CallAPI<Params.PollsDeleteVoteParams, Objects.VKBaseBoolInt>
    /**
     * Edits created polls
     *
     * [Documentation](https://dev.vk.com/method/polls.edit)
     */
    edit: CallAPI<Params.PollsEditParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/polls.getBackgrounds)
     */
    getBackgrounds: CallAPIWithoutParams<Responses.PollsGetBackgroundsResponse>
    /**
     * Returns detailed information about a poll by its ID.
     *
     * [Documentation](https://dev.vk.com/method/polls.getById)
     */
    getById: CallAPI<Params.PollsGetByIdParams, Objects.VKPollsPollExtended>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/polls.getPhotoUploadServer)
     */
    getPhotoUploadServer: CallAPIWithOptionalParams<
        Params.PollsGetPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of IDs of users who selected specific answers in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.getVoters)
     */
    getVoters: {
        (
            params: Params.PollsGetVotersParams & {
                fields: Required<
                    Pick<Params.PollsGetVotersParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.PollsGetVotersFieldsResponse>
        (
            params: Params.PollsGetVotersParams,
        ): Promise<Responses.PollsGetVotersResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/polls.savePhoto)
     */
    savePhoto: CallAPIWithOptionalParams<
        Params.PollsSavePhotoParams,
        Objects.VKPollsBackground
    >
}

/**
 * VK API prettyCards.* methods
 */
export interface APIMethodsPrettyCards {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.create)
     */
    create: CallAPI<
        Params.PrettyCardsCreateParams,
        Responses.PrettyCardsCreateResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.delete)
     */
    delete: CallAPI<
        Params.PrettyCardsDeleteParams,
        Responses.PrettyCardsDeleteResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.edit)
     */
    edit: CallAPI<
        Params.PrettyCardsEditParams,
        Responses.PrettyCardsEditResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.get)
     */
    get: CallAPI<Params.PrettyCardsGetParams, Responses.PrettyCardsGetResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.getById)
     */
    getById: CallAPI<
        Params.PrettyCardsGetByIdParams,
        Responses.PrettyCardsGetByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.getUploadURL)
     */
    getUploadURL: CallAPIWithoutParams<Responses.PrettyCardsGetUploadURLResponse>
}

/**
 * VK API search.* methods
 */
export interface APIMethodsSearch {
    /**
     * Allows the programmer to do a quick search for any substring.
     *
     * [Documentation](https://dev.vk.com/method/search.getHints)
     */
    getHints: CallAPIWithOptionalParams<
        Params.SearchGetHintsParams,
        Responses.SearchGetHintsResponse
    >
}

/**
 * VK API secure.* methods
 */
export interface APIMethodsSecure {
    /**
     * Adds user activity information to an application
     *
     * [Documentation](https://dev.vk.com/method/secure.addAppEvent)
     */
    addAppEvent: CallAPI<
        Params.SecureAddAppEventParams,
        Responses.BaseOkResponse
    >
    /**
     * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
     *
     * [Documentation](https://dev.vk.com/method/secure.checkToken)
     */
    checkToken: CallAPIWithOptionalParams<
        Params.SecureCheckTokenParams,
        Objects.VKSecureTokenChecked
    >
    /**
     * Returns payment balance of the application in hundredth of a vote.
     *
     * [Documentation](https://dev.vk.com/method/secure.getAppBalance)
     */
    getAppBalance: CallAPIWithoutParams<Responses.SecureGetAppBalanceResponse>
    /**
     * Shows a list of SMS notifications sent by the application using [vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification] method.
     *
     * [Documentation](https://dev.vk.com/method/secure.getSMSHistory)
     */
    getSMSHistory: CallAPIWithOptionalParams<
        Params.SecureGetSMSHistoryParams,
        Responses.SecureGetSMSHistoryResponse
    >
    /**
     * Shows history of votes transaction between users and the application.
     *
     * [Documentation](https://dev.vk.com/method/secure.getTransactionsHistory)
     */
    getTransactionsHistory: CallAPIWithOptionalParams<
        Params.SecureGetTransactionsHistoryParams,
        Responses.SecureGetTransactionsHistoryResponse
    >
    /**
     * Returns one of the previously set game levels of one or more users in the application.
     *
     * [Documentation](https://dev.vk.com/method/secure.getUserLevel)
     */
    getUserLevel: CallAPI<
        Params.SecureGetUserLevelParams,
        Responses.SecureGetUserLevelResponse
    >
    /**
     * Opens the game achievement and gives the user a sticker
     *
     * [Documentation](https://dev.vk.com/method/secure.giveEventSticker)
     */
    giveEventSticker: CallAPI<
        Params.SecureGiveEventStickerParams,
        Responses.SecureGiveEventStickerResponse
    >
    /**
     * Sends notification to the user.
     *
     * [Documentation](https://dev.vk.com/method/secure.sendNotification)
     */
    sendNotification: CallAPI<
        Params.SecureSendNotificationParams,
        Responses.SecureSendNotificationResponse
    >
    /**
     * Sends 'SMS' notification to a user's mobile device.
     *
     * [Documentation](https://dev.vk.com/method/secure.sendSMSNotification)
     */
    sendSMSNotification: CallAPI<
        Params.SecureSendSMSNotificationParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets a counter which is shown to the user in bold in the left menu.
     *
     * [Documentation](https://dev.vk.com/method/secure.setCounter)
     */
    setCounter: CallAPIWithOptionalParams<
        Params.SecureSetCounterParams,
        Objects.VKBaseBoolInt | Responses.SecureSetCounterArrayResponse
    >
}

/**
 * VK API stats.* methods
 */
export interface APIMethodsStats {
    /**
     * Returns statistics of a community or an application.
     *
     * [Documentation](https://dev.vk.com/method/stats.get)
     */
    get: CallAPIWithOptionalParams<
        Params.StatsGetParams,
        Responses.StatsGetResponse
    >
    /**
     * Returns stats for a wall post.
     *
     * [Documentation](https://dev.vk.com/method/stats.getPostReach)
     */
    getPostReach: CallAPI<
        Params.StatsGetPostReachParams,
        Responses.StatsGetPostReachResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stats.trackVisitor)
     */
    trackVisitor: CallAPIWithOptionalParams<
        Params.StatsTrackVisitorParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API status.* methods
 */
export interface APIMethodsStatus {
    /**
     * Returns data required to show the status of a user or community.
     *
     * [Documentation](https://dev.vk.com/method/status.get)
     */
    get: CallAPIWithOptionalParams<
        Params.StatusGetParams,
        Objects.VKStatusStatus
    >
    /**
     * Sets a new status for the current user.
     *
     * [Documentation](https://dev.vk.com/method/status.set)
     */
    set: CallAPIWithOptionalParams<
        Params.StatusSetParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API storage.* methods
 */
export interface APIMethodsStorage {
    /**
     * Returns a value of variable with the name set by key parameter.
     *
     * [Documentation](https://dev.vk.com/method/storage.get)
     */
    get: CallAPIWithOptionalParams<
        Params.StorageGetParams,
        Responses.StorageGetResponse
    >
    /**
     * Returns the names of all variables.
     *
     * [Documentation](https://dev.vk.com/method/storage.getKeys)
     */
    getKeys: CallAPIWithOptionalParams<
        Params.StorageGetKeysParams,
        Responses.StorageGetKeysResponse
    >
    /**
     * Saves a value of variable with the name set by 'key' parameter.
     *
     * [Documentation](https://dev.vk.com/method/storage.set)
     */
    set: CallAPI<Params.StorageSetParams, Responses.BaseOkResponse>
}

/**
 * VK API store.* methods
 */
export interface APIMethodsStore {
    /**
     * Adds given sticker IDs to the list of user's favorite stickers
     *
     * [Documentation](https://dev.vk.com/method/store.addStickersToFavorite)
     */
    addStickersToFavorite: CallAPI<
        Params.StoreAddStickersToFavoriteParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getFavoriteStickers)
     */
    getFavoriteStickers: CallAPIWithoutParams<Responses.StoreGetFavoriteStickersResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getProducts)
     */
    getProducts: CallAPIWithOptionalParams<
        Params.StoreGetProductsParams,
        Responses.StoreGetProductsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getStickersKeywords)
     */
    getStickersKeywords: CallAPIWithOptionalParams<
        Params.StoreGetStickersKeywordsParams,
        Responses.StoreGetStickersKeywordsResponse
    >
    /**
     * Removes given sticker IDs from the list of user's favorite stickers
     *
     * [Documentation](https://dev.vk.com/method/store.removeStickersFromFavorite)
     */
    removeStickersFromFavorite: CallAPI<
        Params.StoreRemoveStickersFromFavoriteParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API stories.* methods
 */
export interface APIMethodsStories {
    /**
     * Allows to hide stories from chosen sources from current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.banOwner)
     */
    banOwner: CallAPI<Params.StoriesBanOwnerParams, Responses.BaseOkResponse>
    /**
     * Allows to delete story.
     *
     * [Documentation](https://dev.vk.com/method/stories.delete)
     */
    delete: CallAPIWithOptionalParams<
        Params.StoriesDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns stories available for current user.
     *
     * [Documentation](https://dev.vk.com/method/stories.get)
     */
    get: CallAPIWithOptionalParams<
        Params.StoriesGetParams,
        Responses.StoriesGetV5113Response
    >
    /**
     * Returns list of sources hidden from current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.getBanned)
     */
    getBanned: {
        (
            params: Params.StoriesGetBannedParams & { extended: 1 | true },
        ): Promise<Responses.StoriesGetBannedExtendedResponse>
        (
            params?: Params.StoriesGetBannedParams,
        ): Promise<Responses.StoriesGetBannedResponse>
    }
    /**
     * Returns story by its ID.
     *
     * [Documentation](https://dev.vk.com/method/stories.getById)
     */
    getById: CallAPI<
        Params.StoriesGetByIdParams,
        Responses.StoriesGetByIdExtendedResponse
    >
    /**
     * Returns URL for uploading a story with photo.
     *
     * [Documentation](https://dev.vk.com/method/stories.getPhotoUploadServer)
     */
    getPhotoUploadServer: CallAPIWithOptionalParams<
        Params.StoriesGetPhotoUploadServerParams,
        Responses.StoriesGetPhotoUploadServerResponse
    >
    /**
     * Returns replies to the story.
     *
     * [Documentation](https://dev.vk.com/method/stories.getReplies)
     */
    getReplies: CallAPI<
        Params.StoriesGetRepliesParams,
        Responses.StoriesGetV5113Response
    >
    /**
     * Returns stories available for current user.
     *
     * [Documentation](https://dev.vk.com/method/stories.getStats)
     */
    getStats: CallAPI<Params.StoriesGetStatsParams, Objects.VKStoriesStoryStats>
    /**
     * Allows to receive URL for uploading story with video.
     *
     * [Documentation](https://dev.vk.com/method/stories.getVideoUploadServer)
     */
    getVideoUploadServer: CallAPIWithOptionalParams<
        Params.StoriesGetVideoUploadServerParams,
        Responses.StoriesGetVideoUploadServerResponse
    >
    /**
     * Returns a list of story viewers.
     *
     * [Documentation](https://dev.vk.com/method/stories.getViewers)
     */
    getViewers: CallAPI<
        Params.StoriesGetViewersParams,
        Responses.StoriesGetViewersExtendedV5115Response
    >
    /**
     * Hides all replies in the last 24 hours from the user to current user's stories.
     *
     * [Documentation](https://dev.vk.com/method/stories.hideAllReplies)
     */
    hideAllReplies: CallAPI<
        Params.StoriesHideAllRepliesParams,
        Responses.BaseOkResponse
    >
    /**
     * Hides the reply to the current user's story.
     *
     * [Documentation](https://dev.vk.com/method/stories.hideReply)
     */
    hideReply: CallAPI<Params.StoriesHideReplyParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.save)
     */
    save: CallAPIWithOptionalParams<
        Params.StoriesSaveParams,
        Responses.StoriesSaveResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.search)
     */
    search: CallAPIWithOptionalParams<
        Params.StoriesSearchParams,
        Responses.StoriesGetV5113Response
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.sendInteraction)
     */
    sendInteraction: CallAPI<
        Params.StoriesSendInteractionParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to show stories from hidden sources in current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.unbanOwner)
     */
    unbanOwner: CallAPI<
        Params.StoriesUnbanOwnerParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API streaming.* methods
 */
export interface APIMethodsStreaming {
    /**
     * Allows to receive data for the connection to Streaming API.
     *
     * [Documentation](https://dev.vk.com/method/streaming.getServerUrl)
     */
    getServerUrl: CallAPIWithoutParams<Responses.StreamingGetServerUrlResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/streaming.getStats)
     */
    getStats: CallAPIWithOptionalParams<
        Params.StreamingGetStatsParams,
        Responses.StreamingGetStatsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/streaming.getStem)
     */
    getStem: CallAPI<
        Params.StreamingGetStemParams,
        Responses.StreamingGetStemResponse
    >
}

/**
 * VK API translations.* methods
 */
export interface APIMethodsTranslations {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/translations.translate)
     */
    translate: CallAPI<
        Params.TranslationsTranslateParams,
        Responses.TranslationsTranslateResponse
    >
}

/**
 * VK API users.* methods
 */
export interface APIMethodsUsers {
    /**
     * Returns detailed information on users.
     *
     * [Documentation](https://dev.vk.com/method/users.get)
     */
    get: CallAPIWithOptionalParams<
        Params.UsersGetParams,
        Responses.UsersGetResponse
    >
    /**
     * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
     *
     * [Documentation](https://dev.vk.com/method/users.getFollowers)
     */
    getFollowers: {
        <F extends Objects.VKUsersFields>(
            params: Params.UsersGetFollowersParams & { fields: F[] },
        ): Promise<
            Omit<Responses.UsersGetFollowersFieldsResponse, "items"> & {
                items: WithFields<Objects.VKUsersUserFull, F>[]
            }
        >
        (
            params: Params.UsersGetFollowersParams & {
                fields: Required<
                    Pick<Params.UsersGetFollowersParams, "fields">
                >["fields"]
            },
        ): Promise<Responses.UsersGetFollowersFieldsResponse>
        (
            params?: Params.UsersGetFollowersParams,
        ): Promise<Responses.UsersGetFollowersResponse>
    }
    /**
     * Returns a list of IDs of users and communities followed by the user.
     *
     * [Documentation](https://dev.vk.com/method/users.getSubscriptions)
     */
    getSubscriptions: {
        (
            params: Params.UsersGetSubscriptionsParams & { extended: 1 | true },
        ): Promise<Responses.UsersGetSubscriptionsExtendedResponse>
        (
            params?: Params.UsersGetSubscriptionsParams,
        ): Promise<Responses.UsersGetSubscriptionsResponse>
    }
    /**
     * Reports (submits a complain about) a user.
     *
     * [Documentation](https://dev.vk.com/method/users.report)
     */
    report: CallAPI<Params.UsersReportParams, Responses.BaseOkResponse>
    /**
     * Returns a list of users matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/users.search)
     */
    search: CallAPIWithOptionalParams<
        Params.UsersSearchParams,
        Responses.UsersSearchResponse
    >
}

/**
 * VK API utils.* methods
 */
export interface APIMethodsUtils {
    /**
     * Checks whether a link is blocked in VK.
     *
     * [Documentation](https://dev.vk.com/method/utils.checkLink)
     */
    checkLink: CallAPI<Params.UtilsCheckLinkParams, Objects.VKUtilsLinkChecked>
    /**
     * Deletes shortened link from user's list.
     *
     * [Documentation](https://dev.vk.com/method/utils.deleteFromLastShortened)
     */
    deleteFromLastShortened: CallAPI<
        Params.UtilsDeleteFromLastShortenedParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of user's shortened links.
     *
     * [Documentation](https://dev.vk.com/method/utils.getLastShortenedLinks)
     */
    getLastShortenedLinks: CallAPIWithOptionalParams<
        Params.UtilsGetLastShortenedLinksParams,
        Responses.UtilsGetLastShortenedLinksResponse
    >
    /**
     * Returns stats data for shortened link.
     *
     * [Documentation](https://dev.vk.com/method/utils.getLinkStats)
     */
    getLinkStats: {
        (
            params: Params.UtilsGetLinkStatsParams & { extended: 1 | true },
        ): Promise<Objects.VKUtilsLinkStatsExtended>
        (
            params: Params.UtilsGetLinkStatsParams,
        ): Promise<Objects.VKUtilsLinkStats>
    }
    /**
     * Returns the current time of the VK server.
     *
     * [Documentation](https://dev.vk.com/method/utils.getServerTime)
     */
    getServerTime: CallAPIWithoutParams<Responses.UtilsGetServerTimeResponse>
    /**
     * Allows to receive a link shortened via vk.cc.
     *
     * [Documentation](https://dev.vk.com/method/utils.getShortLink)
     */
    getShortLink: CallAPI<
        Params.UtilsGetShortLinkParams,
        Objects.VKUtilsShortLink
    >
    /**
     * Detects a type of object (e.g., user, community, application) and its ID by screen name.
     *
     * [Documentation](https://dev.vk.com/method/utils.resolveScreenName)
     */
    resolveScreenName: CallAPI<
        Params.UtilsResolveScreenNameParams,
        Objects.VKUtilsDomainResolved
    >
}

/**
 * VK API video.* methods
 */
export interface APIMethodsVideo {
    /**
     * Adds a video to a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.add)
     */
    add: CallAPI<Params.VideoAddParams, Responses.BaseOkResponse>
    /**
     * Creates an empty album for videos.
     *
     * [Documentation](https://dev.vk.com/method/video.addAlbum)
     */
    addAlbum: CallAPIWithOptionalParams<
        Params.VideoAddAlbumParams,
        Responses.VideoAddAlbumResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.addToAlbum)
     */
    addToAlbum: CallAPI<
        Params.VideoAddToAlbumParams,
        Responses.BaseOkResponse | Responses.VideoChangeVideoAlbumsResponse
    >
    /**
     * Adds a new comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.createComment)
     */
    createComment: CallAPI<
        Params.VideoCreateCommentParams,
        Responses.VideoCreateCommentResponse
    >
    /**
     * Deletes a video from a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.delete)
     */
    delete: CallAPI<Params.VideoDeleteParams, Responses.BaseOkResponse>
    /**
     * Deletes a video album.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteAlbum)
     */
    deleteAlbum: CallAPI<
        Params.VideoDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteComment)
     */
    deleteComment: CallAPI<
        Params.VideoDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a thread on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteThread)
     */
    deleteThread: CallAPI<
        Params.VideoDeleteThreadParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits information about a video on a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.edit)
     */
    edit: CallAPI<Params.VideoEditParams, Responses.VideoEditResponse>
    /**
     * Edits the title of a video album.
     *
     * [Documentation](https://dev.vk.com/method/video.editAlbum)
     */
    editAlbum: CallAPI<Params.VideoEditAlbumParams, Responses.BaseOkResponse>
    /**
     * Edits the text of a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.editComment)
     */
    editComment: CallAPI<
        Params.VideoEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns detailed information about videos.
     *
     * [Documentation](https://dev.vk.com/method/video.get)
     */
    get: CallAPIWithOptionalParams<
        Params.VideoGetParams,
        Responses.VideoGetResponse
    >
    /**
     * Returns video album info
     *
     * [Documentation](https://dev.vk.com/method/video.getAlbumById)
     */
    getAlbumById: CallAPI<
        Params.VideoGetAlbumByIdParams,
        Objects.VKVideoVideoAlbumFull
    >
    /**
     * Returns a list of video albums owned by a user or community.
     *
     * [Documentation](https://dev.vk.com/method/video.getAlbums)
     */
    getAlbums: {
        (
            params: Params.VideoGetAlbumsParams & { extended: 1 | true },
        ): Promise<Responses.VideoGetAlbumsExtendedResponse>
        (
            params?: Params.VideoGetAlbumsParams,
        ): Promise<Responses.VideoGetAlbumsResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.getAlbumsByVideo)
     */
    getAlbumsByVideo: {
        (
            params: Params.VideoGetAlbumsByVideoParams & { extended: 1 | true },
        ): Promise<Responses.VideoGetAlbumsByVideoExtendedResponse>
        (
            params: Params.VideoGetAlbumsByVideoParams,
        ): Promise<Responses.VideoGetAlbumsByVideoResponse>
    }
    /**
     * Returns a list of comments on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.getComments)
     */
    getComments: {
        (
            params: Params.VideoGetCommentsParams & { extended: 1 | true },
        ): Promise<Responses.VideoGetCommentsExtendedResponse>
        (
            params: Params.VideoGetCommentsParams,
        ): Promise<Responses.VideoGetCommentsResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.getLongPollServer)
     */
    getLongPollServer: CallAPI<
        Params.VideoGetLongPollServerParams,
        Responses.VideoGetLongPollServerResponse
    >
    /**
     * Returns oEmbed player to video
     *
     * [Documentation](https://dev.vk.com/method/video.getOembed)
     */
    getOembed: CallAPI<
        Params.VideoGetOembedParams,
        Responses.VideoGetOembedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.getThumbUploadUrl)
     */
    getThumbUploadUrl: CallAPI<
        Params.VideoGetThumbUploadUrlParams,
        Responses.VideoGetThumbUploadUrlResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.liveGetCategories)
     */
    liveGetCategories: CallAPIWithoutParams<Responses.VideoLiveGetCategoriesResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.removeFromAlbum)
     */
    removeFromAlbum: CallAPI<
        Params.VideoRemoveFromAlbumParams,
        Responses.BaseOkResponse | Responses.VideoChangeVideoAlbumsResponse
    >
    /**
     * Reorders the album in the list of user video albums.
     *
     * [Documentation](https://dev.vk.com/method/video.reorderAlbums)
     */
    reorderAlbums: CallAPI<
        Params.VideoReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the video in the video album.
     *
     * [Documentation](https://dev.vk.com/method/video.reorderVideos)
     */
    reorderVideos: CallAPI<
        Params.VideoReorderVideosParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a video.
     *
     * [Documentation](https://dev.vk.com/method/video.report)
     */
    report: CallAPI<Params.VideoReportParams, Responses.BaseOkResponse>
    /**
     * Reports (submits a complaint about) a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.reportComment)
     */
    reportComment: CallAPI<
        Params.VideoReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a previously deleted video.
     *
     * [Documentation](https://dev.vk.com/method/video.restore)
     */
    restore: CallAPI<Params.VideoRestoreParams, Responses.BaseOkResponse>
    /**
     * Restores a previously deleted comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.restoreComment)
     */
    restoreComment: CallAPI<
        Params.VideoRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Restores a deleted thread on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.restoreThread)
     */
    restoreThread: CallAPI<
        Params.VideoRestoreThreadParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a server address (required for upload) and video data.
     *
     * [Documentation](https://dev.vk.com/method/video.save)
     */
    save: CallAPIWithOptionalParams<
        Params.VideoSaveParams,
        Objects.VKVideoSaveResult
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.saveUploadedThumb)
     */
    saveUploadedThumb: CallAPI<
        Params.VideoSaveUploadedThumbParams,
        Responses.VideoSaveUploadedThumbResponse
    >
    /**
     * Returns a list of videos under the set search criterion.
     *
     * [Documentation](https://dev.vk.com/method/video.search)
     */
    search: {
        (
            params: Params.VideoSearchParams & { extended: 1 | true },
        ): Promise<Responses.VideoSearchExtendedResponse>
        (
            params?: Params.VideoSearchParams,
        ): Promise<Responses.VideoSearchResponse>
    }
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.startStreaming)
     */
    startStreaming: CallAPIWithOptionalParams<
        Params.VideoStartStreamingParams,
        Responses.VideoStartStreamingResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.stopStreaming)
     */
    stopStreaming: CallAPIWithOptionalParams<
        Params.VideoStopStreamingParams,
        Responses.VideoStopStreamingResponse
    >
    /**
     * Unpin comment of a video.
     *
     * [Documentation](https://dev.vk.com/method/video.unpinComment)
     */
    unpinComment: CallAPI<
        Params.VideoUnpinCommentParams,
        Responses.BaseOkResponse
    >
}

/**
 * VK API wall.* methods
 */
export interface APIMethodsWall {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.checkCopyrightLink)
     */
    checkCopyrightLink: CallAPI<
        Params.WallCheckCopyrightLinkParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.closeComments)
     */
    closeComments: CallAPI<
        Params.WallCloseCommentsParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Adds a comment to a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.createComment)
     */
    createComment: CallAPI<
        Params.WallCreateCommentParams,
        Responses.WallCreateCommentResponse
    >
    /**
     * Deletes a post from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.delete)
     */
    delete: CallAPIWithOptionalParams<
        Params.WallDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.deleteComment)
     */
    deleteComment: CallAPI<
        Params.WallDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.edit)
     */
    edit: CallAPI<Params.WallEditParams, Responses.WallEditResponse>
    /**
     * Allows to edit hidden post.
     *
     * [Documentation](https://dev.vk.com/method/wall.editAdsStealth)
     */
    editAdsStealth: CallAPI<
        Params.WallEditAdsStealthParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a comment on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.editComment)
     */
    editComment: CallAPI<Params.WallEditCommentParams, Responses.BaseOkResponse>
    /**
     * Returns a list of posts on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.get)
     */
    get: {
        (
            params: Params.WallGetParams & { extended: 1 | true },
        ): Promise<Responses.WallGetExtendedResponse>
        (params?: Params.WallGetParams): Promise<Responses.WallGetResponse>
    }
    /**
     * Returns a list of posts from user or community walls by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/wall.getById)
     */
    getById: {
        (
            params: Params.WallGetByIdParams & { extended: 1 | true },
        ): Promise<Responses.WallGetByIdExtendedResponse>
        (
            params: Params.WallGetByIdParams,
        ): Promise<Responses.WallGetByIdResponse>
    }
    /**
     * Returns a comment on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.getComment)
     */
    getComment: {
        (
            params: Params.WallGetCommentParams & { extended: 1 | true },
        ): Promise<Responses.WallGetCommentExtendedResponse>
        (
            params: Params.WallGetCommentParams,
        ): Promise<Responses.WallGetCommentResponse>
    }
    /**
     * Returns a list of comments on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.getComments)
     */
    getComments: {
        (
            params: Params.WallGetCommentsParams & { extended: 1 | true },
        ): Promise<Responses.WallGetCommentsExtendedResponse>
        (
            params?: Params.WallGetCommentsParams,
        ): Promise<Responses.WallGetCommentsResponse>
    }
    /**
     * Returns information about reposts of a post on user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.getReposts)
     */
    getReposts: CallAPIWithOptionalParams<
        Params.WallGetRepostsParams,
        Responses.WallGetRepostsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.openComments)
     */
    openComments: CallAPI<Params.WallOpenCommentsParams, Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.parseAttachedLink)
     */
    parseAttachedLink: CallAPI<
        Params.WallParseAttachedLinkParams,
        Responses.WallParseAttachedLinkResponse
    >
    /**
     * Pins the post on wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.pin)
     */
    pin: CallAPI<Params.WallPinParams, Responses.BaseOkResponse>
    /**
     * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
     *
     * [Documentation](https://dev.vk.com/method/wall.post)
     */
    post: CallAPIWithOptionalParams<
        Params.WallPostParams,
        Responses.WallPostResponse
    >
    /**
     * Allows to create hidden post which will not be shown on the community's wall and can be used for creating an ad with type "Community post".
     *
     * [Documentation](https://dev.vk.com/method/wall.postAdsStealth)
     */
    postAdsStealth: CallAPI<
        Params.WallPostAdsStealthParams,
        Responses.WallPostAdsStealthResponse
    >
    /**
     * Reports (submits a complaint about) a comment on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.reportComment)
     */
    reportComment: CallAPI<
        Params.WallReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.reportPost)
     */
    reportPost: CallAPI<Params.WallReportPostParams, Responses.BaseOkResponse>
    /**
     * Reposts (copies) an object to a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.repost)
     */
    repost: CallAPI<Params.WallRepostParams, Responses.WallRepostResponse>
    /**
     * Restores a post deleted from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.restore)
     */
    restore: CallAPIWithOptionalParams<
        Params.WallRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a comment deleted from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.restoreComment)
     */
    restoreComment: CallAPI<
        Params.WallRestoreCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to search posts on user or community walls.
     *
     * [Documentation](https://dev.vk.com/method/wall.search)
     */
    search: {
        (
            params: Params.WallSearchParams & { extended: 1 | true },
        ): Promise<Responses.WallSearchExtendedResponse>
        (
            params?: Params.WallSearchParams,
        ): Promise<Responses.WallSearchResponse>
    }
    /**
     * Unpins the post on wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.unpin)
     */
    unpin: CallAPI<Params.WallUnpinParams, Responses.BaseOkResponse>
}

/**
 * VK API widgets.* methods
 */
export interface APIMethodsWidgets {
    /**
     * Gets a list of comments for the page added through the [vk.com/dev/Comments|Comments widget].
     *
     * [Documentation](https://dev.vk.com/method/widgets.getComments)
     */
    getComments: CallAPIWithOptionalParams<
        Params.WidgetsGetCommentsParams,
        Responses.WidgetsGetCommentsResponse
    >
    /**
     * Gets a list of application/site pages where the [vk.com/dev/Comments|Comments widget] or [vk.com/dev/Like|Like widget] is installed.
     *
     * [Documentation](https://dev.vk.com/method/widgets.getPages)
     */
    getPages: CallAPIWithOptionalParams<
        Params.WidgetsGetPagesParams,
        Responses.WidgetsGetPagesResponse
    >
}

/**
 * Map of all VK API methods organized by category
 */
export interface APIMethods {
    account: APIMethodsAccount
    ads: APIMethodsAds
    appWidgets: APIMethodsAppWidgets
    apps: APIMethodsApps
    auth: APIMethodsAuth
    board: APIMethodsBoard
    bugtracker: APIMethodsBugtracker
    calls: APIMethodsCalls
    database: APIMethodsDatabase
    docs: APIMethodsDocs
    donut: APIMethodsDonut
    downloadedGames: APIMethodsDownloadedGames
    execute: APIMethodsExecute
    fave: APIMethodsFave
    friends: APIMethodsFriends
    gifts: APIMethodsGifts
    groups: APIMethodsGroups
    leadForms: APIMethodsLeadForms
    likes: APIMethodsLikes
    market: APIMethodsMarket
    messages: APIMethodsMessages
    newsfeed: APIMethodsNewsfeed
    notes: APIMethodsNotes
    notifications: APIMethodsNotifications
    orders: APIMethodsOrders
    pages: APIMethodsPages
    photos: APIMethodsPhotos
    podcasts: APIMethodsPodcasts
    polls: APIMethodsPolls
    prettyCards: APIMethodsPrettyCards
    search: APIMethodsSearch
    secure: APIMethodsSecure
    stats: APIMethodsStats
    status: APIMethodsStatus
    storage: APIMethodsStorage
    store: APIMethodsStore
    stories: APIMethodsStories
    streaming: APIMethodsStreaming
    translations: APIMethodsTranslations
    users: APIMethodsUsers
    utils: APIMethodsUtils
    video: APIMethodsVideo
    wall: APIMethodsWall
    widgets: APIMethodsWidgets
}
