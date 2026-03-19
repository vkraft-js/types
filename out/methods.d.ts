/**
 * @module
 *
 * This module contains VK API method types (functions map with input/output)
 *
 * @example import API methods map
 * ```typescript
 * import { APIMethods } from "@vkraft/types/methods";
 *
 * type UsersGetReturn = Awaited<ReturnType<APIMethods["users.get"]>>;
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 13:17:19 using [types](https://github.com/vkraft/types) generator
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
 * This object is a map of VK API methods (functions map with input/output)
 */
export interface APIMethods {
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/account.ban)
     */
    "account.ban": CallAPIWithOptionalParams<
        Params.AccountBanParams,
        Responses.BaseOkResponse
    >
    /**
     * Changes a user password after access is successfully restored with the [vk.com/dev/auth.restore|auth.restore] method.
     *
     * [Documentation](https://dev.vk.com/method/account.changePassword)
     */
    "account.changePassword": CallAPI<
        Params.AccountChangePasswordParams,
        Responses.AccountChangePasswordResponse
    >
    /**
     * Returns a list of active ads (offers) which executed by the user will bring him/her respective number of votes to his balance in the application.
     *
     * [Documentation](https://dev.vk.com/method/account.getActiveOffers)
     */
    "account.getActiveOffers": CallAPIWithOptionalParams<
        Params.AccountGetActiveOffersParams,
        Responses.AccountGetActiveOffersResponse
    >
    /**
     * Gets settings of the user in this application.
     *
     * [Documentation](https://dev.vk.com/method/account.getAppPermissions)
     */
    "account.getAppPermissions": CallAPIWithOptionalParams<
        Params.AccountGetAppPermissionsParams,
        Responses.AccountGetAppPermissionsResponse
    >
    /**
     * Returns a user's blacklist.
     *
     * [Documentation](https://dev.vk.com/method/account.getBanned)
     */
    "account.getBanned": CallAPIWithOptionalParams<
        Params.AccountGetBannedParams,
        Responses.AccountGetBannedResponse
    >
    /**
     * Returns non-null values of user counters.
     *
     * [Documentation](https://dev.vk.com/method/account.getCounters)
     */
    "account.getCounters": CallAPIWithOptionalParams<
        Params.AccountGetCountersParams,
        Objects.VKAccountAccountCounters
    >
    /**
     * Returns current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.getInfo)
     */
    "account.getInfo": CallAPIWithOptionalParams<
        Params.AccountGetInfoParams,
        Objects.VKAccountInfo
    >
    /**
     * Returns the current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.getProfileInfo)
     */
    "account.getProfileInfo": CallAPIWithoutParams<Objects.VKAccountUserSettings>
    /**
     * Gets settings of push notifications.
     *
     * [Documentation](https://dev.vk.com/method/account.getPushSettings)
     */
    "account.getPushSettings": CallAPIWithOptionalParams<
        Params.AccountGetPushSettingsParams,
        Objects.VKAccountPushSettings
    >
    /**
     * Subscribes an iOS/Android/Windows Phone-based device to receive push notifications
     *
     * [Documentation](https://dev.vk.com/method/account.registerDevice)
     */
    "account.registerDevice": CallAPI<
        Params.AccountRegisterDeviceParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits current profile info.
     *
     * [Documentation](https://dev.vk.com/method/account.saveProfileInfo)
     */
    "account.saveProfileInfo": CallAPIWithOptionalParams<
        Params.AccountSaveProfileInfoParams,
        Responses.AccountSaveProfileInfoResponse
    >
    /**
     * Allows to edit the current account info.
     *
     * [Documentation](https://dev.vk.com/method/account.setInfo)
     */
    "account.setInfo": CallAPIWithOptionalParams<
        Params.AccountSetInfoParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks a current user as offline.
     *
     * [Documentation](https://dev.vk.com/method/account.setOffline)
     */
    "account.setOffline": CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     * Marks the current user as online for 15 minutes.
     *
     * [Documentation](https://dev.vk.com/method/account.setOnline)
     */
    "account.setOnline": CallAPIWithOptionalParams<
        Params.AccountSetOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Change push settings.
     *
     * [Documentation](https://dev.vk.com/method/account.setPushSettings)
     */
    "account.setPushSettings": CallAPI<
        Params.AccountSetPushSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * Mutes push notifications for the set period of time.
     *
     * [Documentation](https://dev.vk.com/method/account.setSilenceMode)
     */
    "account.setSilenceMode": CallAPIWithOptionalParams<
        Params.AccountSetSilenceModeParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/account.unban)
     */
    "account.unban": CallAPIWithOptionalParams<
        Params.AccountUnbanParams,
        Responses.BaseOkResponse
    >
    /**
     * Unsubscribes a device from push notifications.
     *
     * [Documentation](https://dev.vk.com/method/account.unregisterDevice)
     */
    "account.unregisterDevice": CallAPIWithOptionalParams<
        Params.AccountUnregisterDeviceParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds managers and/or supervisors to advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.addOfficeUsers)
     */
    "ads.addOfficeUsers": CallAPI<
        Params.AdsAddOfficeUsersParams,
        Responses.AdsAddOfficeUsersResponse
    >
    /**
     * Allows to check the ad link.
     *
     * [Documentation](https://dev.vk.com/method/ads.checkLink)
     */
    "ads.checkLink": CallAPI<Params.AdsCheckLinkParams, Objects.VKAdsLinkStatus>
    /**
     * Creates ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.createAds)
     */
    "ads.createAds": CallAPI<
        Params.AdsCreateAdsParams,
        Responses.AdsCreateAdsResponse
    >
    /**
     * Creates advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.createCampaigns)
     */
    "ads.createCampaigns": CallAPI<
        Params.AdsCreateCampaignsParams,
        Responses.AdsCreateCampaignsResponse
    >
    /**
     * Creates clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.createClients)
     */
    "ads.createClients": CallAPI<
        Params.AdsCreateClientsParams,
        Responses.AdsCreateClientsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.createLookalikeRequest)
     */
    "ads.createLookalikeRequest": CallAPI<
        Params.AdsCreateLookalikeRequestParams,
        Responses.AdsCreateLookalikeRequestResponse
    >
    /**
     * Creates a group to re-target ads for users who visited advertiser's site (viewed information about the product, registered, etc.).
     *
     * [Documentation](https://dev.vk.com/method/ads.createTargetGroup)
     */
    "ads.createTargetGroup": CallAPI<
        Params.AdsCreateTargetGroupParams,
        Responses.AdsCreateTargetGroupResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.createTargetPixel)
     */
    "ads.createTargetPixel": CallAPI<
        Params.AdsCreateTargetPixelParams,
        Responses.AdsCreateTargetPixelResponse
    >
    /**
     * Archives ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteAds)
     */
    "ads.deleteAds": CallAPI<
        Params.AdsDeleteAdsParams,
        Responses.AdsDeleteAdsResponse
    >
    /**
     * Archives advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteCampaigns)
     */
    "ads.deleteCampaigns": CallAPI<
        Params.AdsDeleteCampaignsParams,
        Responses.AdsDeleteCampaignsResponse
    >
    /**
     * Archives clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteClients)
     */
    "ads.deleteClients": CallAPI<
        Params.AdsDeleteClientsParams,
        Responses.AdsDeleteClientsResponse
    >
    /**
     * Deletes a retarget group.
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteTargetGroup)
     */
    "ads.deleteTargetGroup": CallAPI<
        Params.AdsDeleteTargetGroupParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.deleteTargetPixel)
     */
    "ads.deleteTargetPixel": CallAPI<
        Params.AdsDeleteTargetPixelParams,
        Responses.BaseUndefinedResponse
    >
    /**
     * Returns a list of advertising accounts.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAccounts)
     */
    "ads.getAccounts": CallAPIWithoutParams<Responses.AdsGetAccountsResponse>
    /**
     * Returns number of ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAds)
     */
    "ads.getAds": CallAPI<Params.AdsGetAdsParams, Responses.AdsGetAdsResponse>
    /**
     * Returns descriptions of ad layouts.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAdsLayout)
     */
    "ads.getAdsLayout": CallAPI<
        Params.AdsGetAdsLayoutParams,
        Responses.AdsGetAdsLayoutResponse
    >
    /**
     * Returns ad targeting parameters.
     *
     * [Documentation](https://dev.vk.com/method/ads.getAdsTargeting)
     */
    "ads.getAdsTargeting": CallAPI<
        Params.AdsGetAdsTargetingParams,
        Responses.AdsGetAdsTargetingResponse
    >
    /**
     * Returns current budget of the advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getBudget)
     */
    "ads.getBudget": CallAPI<
        Params.AdsGetBudgetParams,
        Responses.AdsGetBudgetResponse
    >
    /**
     * Returns a list of campaigns in an advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getCampaigns)
     */
    "ads.getCampaigns": CallAPI<
        Params.AdsGetCampaignsParams,
        Responses.AdsGetCampaignsResponse
    >
    /**
     * Returns a list of possible ad categories.
     *
     * [Documentation](https://dev.vk.com/method/ads.getCategories)
     */
    "ads.getCategories": CallAPIWithOptionalParams<
        Params.AdsGetCategoriesParams,
        Responses.AdsGetCategoriesResponse
    >
    /**
     * Returns a list of advertising agency's clients.
     *
     * [Documentation](https://dev.vk.com/method/ads.getClients)
     */
    "ads.getClients": CallAPI<
        Params.AdsGetClientsParams,
        Responses.AdsGetClientsResponse
    >
    /**
     * Returns demographics for ads or campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.getDemographics)
     */
    "ads.getDemographics": CallAPI<
        Params.AdsGetDemographicsParams,
        Responses.AdsGetDemographicsResponse
    >
    /**
     * Returns information about current state of a counter - number of remaining runs of methods and time to the next counter nulling in seconds.
     *
     * [Documentation](https://dev.vk.com/method/ads.getFloodStats)
     */
    "ads.getFloodStats": CallAPI<
        Params.AdsGetFloodStatsParams,
        Objects.VKAdsFloodStats
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getLookalikeRequests)
     */
    "ads.getLookalikeRequests": CallAPI<
        Params.AdsGetLookalikeRequestsParams,
        Responses.AdsGetLookalikeRequestsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getMusicians)
     */
    "ads.getMusicians": CallAPI<
        Params.AdsGetMusiciansParams,
        Responses.AdsGetMusiciansResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getMusiciansByIds)
     */
    "ads.getMusiciansByIds": CallAPI<
        Params.AdsGetMusiciansByIdsParams,
        Responses.AdsGetMusiciansResponse
    >
    /**
     * Returns a list of managers and supervisors of advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getOfficeUsers)
     */
    "ads.getOfficeUsers": CallAPI<
        Params.AdsGetOfficeUsersParams,
        Responses.AdsGetOfficeUsersResponse
    >
    /**
     * Returns detailed statistics of promoted posts reach from campaigns and ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.getPostsReach)
     */
    "ads.getPostsReach": CallAPI<
        Params.AdsGetPostsReachParams,
        Responses.AdsGetPostsReachResponse
    >
    /**
     * Returns a reason of ad rejection for pre-moderation.
     *
     * [Documentation](https://dev.vk.com/method/ads.getRejectionReason)
     */
    "ads.getRejectionReason": CallAPI<
        Params.AdsGetRejectionReasonParams,
        Objects.VKAdsRejectReason
    >
    /**
     * Returns statistics of performance indicators for ads, campaigns, clients or the whole account.
     *
     * [Documentation](https://dev.vk.com/method/ads.getStatistics)
     */
    "ads.getStatistics": CallAPI<
        Params.AdsGetStatisticsParams,
        Responses.AdsGetStatisticsResponse
    >
    /**
     * Returns a set of auto-suggestions for various targeting parameters.
     *
     * [Documentation](https://dev.vk.com/method/ads.getSuggestions)
     */
    "ads.getSuggestions": {
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
    "ads.getTargetGroups": CallAPI<
        Params.AdsGetTargetGroupsParams,
        Responses.AdsGetTargetGroupsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.getTargetPixels)
     */
    "ads.getTargetPixels": CallAPI<
        Params.AdsGetTargetPixelsParams,
        Responses.AdsGetTargetPixelsResponse
    >
    /**
     * Returns the size of targeting audience, and also recommended values for CPC and CPM.
     *
     * [Documentation](https://dev.vk.com/method/ads.getTargetingStats)
     */
    "ads.getTargetingStats": CallAPI<
        Params.AdsGetTargetingStatsParams,
        Objects.VKAdsTargStats
    >
    /**
     * Returns URL to upload an ad photo to.
     *
     * [Documentation](https://dev.vk.com/method/ads.getUploadURL)
     */
    "ads.getUploadURL": CallAPI<
        Params.AdsGetUploadURLParams,
        Responses.AdsGetUploadURLResponse
    >
    /**
     * Returns URL to upload an ad video to.
     *
     * [Documentation](https://dev.vk.com/method/ads.getVideoUploadURL)
     */
    "ads.getVideoUploadURL": CallAPIWithoutParams<Responses.AdsGetVideoUploadURLResponse>
    /**
     * Imports a list of advertiser's contacts to count VK registered users against the target group.
     *
     * [Documentation](https://dev.vk.com/method/ads.importTargetContacts)
     */
    "ads.importTargetContacts": CallAPI<
        Params.AdsImportTargetContactsParams,
        Responses.AdsImportTargetContactsResponse
    >
    /**
     * Removes managers and/or supervisors from advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.removeOfficeUsers)
     */
    "ads.removeOfficeUsers": CallAPI<
        Params.AdsRemoveOfficeUsersParams,
        Responses.AdsRemoveOfficeUsersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.removeTargetContacts)
     */
    "ads.removeTargetContacts": CallAPI<
        Params.AdsRemoveTargetContactsParams,
        Responses.AdsRemoveTargetContactsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.saveLookalikeRequestResult)
     */
    "ads.saveLookalikeRequestResult": CallAPI<
        Params.AdsSaveLookalikeRequestResultParams,
        Responses.AdsSaveLookalikeRequestResultResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.shareTargetGroup)
     */
    "ads.shareTargetGroup": CallAPI<
        Params.AdsShareTargetGroupParams,
        Responses.AdsShareTargetGroupResponse
    >
    /**
     * Edits ads.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateAds)
     */
    "ads.updateAds": CallAPI<
        Params.AdsUpdateAdsParams,
        Responses.AdsUpdateAdsResponse
    >
    /**
     * Edits advertising campaigns.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateCampaigns)
     */
    "ads.updateCampaigns": CallAPI<
        Params.AdsUpdateCampaignsParams,
        Responses.AdsUpdateCampaignsResponse
    >
    /**
     * Edits clients of an advertising agency.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateClients)
     */
    "ads.updateClients": CallAPI<
        Params.AdsUpdateClientsParams,
        Responses.AdsUpdateClientsResponse
    >
    /**
     * Adds managers and/or supervisors to advertising account.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateOfficeUsers)
     */
    "ads.updateOfficeUsers": CallAPI<
        Params.AdsUpdateOfficeUsersParams,
        Responses.AdsUpdateOfficeUsersResponse
    >
    /**
     * Edits a retarget group.
     *
     * [Documentation](https://dev.vk.com/method/ads.updateTargetGroup)
     */
    "ads.updateTargetGroup": CallAPI<
        Params.AdsUpdateTargetGroupParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/ads.updateTargetPixel)
     */
    "ads.updateTargetPixel": CallAPI<
        Params.AdsUpdateTargetPixelParams,
        Responses.BaseUndefinedResponse
    >
    /**
     * Returns a URL for uploading a photo to the community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getAppImageUploadServer)
     */
    "appWidgets.getAppImageUploadServer": CallAPI<
        Params.AppWidgetsGetAppImageUploadServerParams,
        Responses.AppWidgetsGetAppImageUploadServerResponse
    >
    /**
     * Returns an app collection of images for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getAppImages)
     */
    "appWidgets.getAppImages": CallAPIWithOptionalParams<
        Params.AppWidgetsGetAppImagesParams,
        Objects.VKAppWidgetsPhotos
    >
    /**
     * Returns a URL for uploading a photo to the community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getGroupImageUploadServer)
     */
    "appWidgets.getGroupImageUploadServer": CallAPI<
        Params.AppWidgetsGetGroupImageUploadServerParams,
        Responses.AppWidgetsGetGroupImageUploadServerResponse
    >
    /**
     * Returns a community collection of images for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getGroupImages)
     */
    "appWidgets.getGroupImages": CallAPIWithOptionalParams<
        Params.AppWidgetsGetGroupImagesParams,
        Objects.VKAppWidgetsPhotos
    >
    /**
     * Returns an image for community app widgets by its ID
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.getImagesById)
     */
    "appWidgets.getImagesById": CallAPI<
        Params.AppWidgetsGetImagesByIdParams,
        Responses.AppWidgetsGetImagesByIdResponse
    >
    /**
     * Allows to save image into app collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.saveAppImage)
     */
    "appWidgets.saveAppImage": CallAPI<
        Params.AppWidgetsSaveAppImageParams,
        Objects.VKAppWidgetsPhoto
    >
    /**
     * Allows to save image into community collection for community app widgets
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.saveGroupImage)
     */
    "appWidgets.saveGroupImage": CallAPI<
        Params.AppWidgetsSaveGroupImageParams,
        Objects.VKAppWidgetsPhoto
    >
    /**
     * Allows to update community app widget
     *
     * [Documentation](https://dev.vk.com/method/appWidgets.update)
     */
    "appWidgets.update": CallAPI<
        Params.AppWidgetsUpdateParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.addSnippet)
     */
    "apps.addSnippet": CallAPIWithOptionalParams<
        Params.AppsAddSnippetParams,
        Responses.AppsAddSnippetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.addUsersToTestingGroup)
     */
    "apps.addUsersToTestingGroup": CallAPI<
        Params.AppsAddUsersToTestingGroupParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Deletes all request notifications from the current app.
     *
     * [Documentation](https://dev.vk.com/method/apps.deleteAppRequests)
     */
    "apps.deleteAppRequests": CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.deleteSnippet)
     */
    "apps.deleteSnippet": CallAPIWithOptionalParams<
        Params.AppsDeleteSnippetParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns applications data.
     *
     * [Documentation](https://dev.vk.com/method/apps.get)
     */
    "apps.get": CallAPIWithOptionalParams<
        Params.AppsGetParams,
        Responses.AppsGetResponse
    >
    /**
     * Returns a list of applications (apps) available to users in the App Catalog.
     *
     * [Documentation](https://dev.vk.com/method/apps.getCatalog)
     */
    "apps.getCatalog": CallAPIWithOptionalParams<
        Params.AppsGetCatalogParams,
        Objects.VKAppsCatalogList
    >
    /**
     * Creates friends list for requests and invites in current app.
     *
     * [Documentation](https://dev.vk.com/method/apps.getFriendsList)
     */
    "apps.getFriendsList": {
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
    "apps.getLeaderboard": {
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
    "apps.getMiniAppPolicies": CallAPI<
        Params.AppsGetMiniAppPoliciesParams,
        Responses.AppsGetMiniAppPoliciesResponse
    >
    /**
     * Returns scopes for auth
     *
     * [Documentation](https://dev.vk.com/method/apps.getScopes)
     */
    "apps.getScopes": CallAPIWithOptionalParams<
        Params.AppsGetScopesParams,
        Responses.AppsGetScopesResponse
    >
    /**
     * Returns user score in app
     *
     * [Documentation](https://dev.vk.com/method/apps.getScore)
     */
    "apps.getScore": CallAPIWithOptionalParams<
        Params.AppsGetScoreParams,
        Responses.AppsGetScoreResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.getSnippets)
     */
    "apps.getSnippets": CallAPIWithoutParams<Responses.AppsGetSnippetsResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.getTestingGroups)
     */
    "apps.getTestingGroups": CallAPIWithOptionalParams<
        Params.AppsGetTestingGroupsParams,
        Responses.AppsGetTestingGroupsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.isNotificationsAllowed)
     */
    "apps.isNotificationsAllowed": CallAPIWithOptionalParams<
        Params.AppsIsNotificationsAllowedParams,
        Responses.AppsIsNotificationsAllowedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.promoHasActiveGift)
     */
    "apps.promoHasActiveGift": CallAPI<
        Params.AppsPromoHasActiveGiftParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.promoUseGift)
     */
    "apps.promoUseGift": CallAPI<
        Params.AppsPromoUseGiftParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.removeTestingGroup)
     */
    "apps.removeTestingGroup": CallAPI<
        Params.AppsRemoveTestingGroupParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.removeUsersFromTestingGroups)
     */
    "apps.removeUsersFromTestingGroups": CallAPI<
        Params.AppsRemoveUsersFromTestingGroupsParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Sends a request to another user in an app that uses VK authorization.
     *
     * [Documentation](https://dev.vk.com/method/apps.sendRequest)
     */
    "apps.sendRequest": CallAPI<
        Params.AppsSendRequestParams,
        Responses.AppsSendRequestResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/apps.updateMetaForTestingGroup)
     */
    "apps.updateMetaForTestingGroup": CallAPI<
        Params.AppsUpdateMetaForTestingGroupParams,
        Responses.AppsCreatedGroupResponse
    >
    /**
     * Allows to restore account access using a code received via SMS. " This method is only available for apps with [vk.com/dev/auth_direct|Direct authorization] access. "
     *
     * [Documentation](https://dev.vk.com/method/auth.restore)
     */
    "auth.restore": CallAPI<
        Params.AuthRestoreParams,
        Responses.AuthRestoreResponse
    >
    /**
     * Creates a new topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.addTopic)
     */
    "board.addTopic": CallAPI<
        Params.BoardAddTopicParams,
        Responses.BoardAddTopicResponse
    >
    /**
     * Closes a topic on a community's discussion board so that comments cannot be posted.
     *
     * [Documentation](https://dev.vk.com/method/board.closeTopic)
     */
    "board.closeTopic": CallAPI<
        Params.BoardCloseTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.createComment)
     */
    "board.createComment": CallAPI<
        Params.BoardCreateCommentParams,
        Responses.BoardCreateCommentResponse
    >
    /**
     * Deletes a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.deleteComment)
     */
    "board.deleteComment": CallAPI<
        Params.BoardDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a topic from a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.deleteTopic)
     */
    "board.deleteTopic": CallAPI<
        Params.BoardDeleteTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a comment on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.editComment)
     */
    "board.editComment": CallAPI<
        Params.BoardEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the title of a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.editTopic)
     */
    "board.editTopic": CallAPI<
        Params.BoardEditTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Pins a topic (fixes its place) to the top of a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.fixTopic)
     */
    "board.fixTopic": CallAPI<
        Params.BoardFixTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of comments on a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.getComments)
     */
    "board.getComments": {
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
    "board.getTopics": {
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
    "board.openTopic": CallAPI<
        Params.BoardOpenTopicParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a comment deleted from a topic on a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.restoreComment)
     */
    "board.restoreComment": CallAPI<
        Params.BoardRestoreCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Unpins a pinned topic from the top of a community's discussion board.
     *
     * [Documentation](https://dev.vk.com/method/board.unfixTopic)
     */
    "board.unfixTopic": CallAPI<
        Params.BoardUnfixTopicParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.addCompanyGroupsMembers)
     */
    "bugtracker.addCompanyGroupsMembers": CallAPI<
        Params.BugtrackerAddCompanyGroupsMembersParams,
        Responses.BugtrackerAddCompanyGroupsMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.addCompanyMembers)
     */
    "bugtracker.addCompanyMembers": CallAPI<
        Params.BugtrackerAddCompanyMembersParams,
        Responses.BugtrackerAddCompanyMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.changeBugreportStatus)
     */
    "bugtracker.changeBugreportStatus": CallAPI<
        Params.BugtrackerChangeBugreportStatusParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Creates the comment to bugreport
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.createComment)
     */
    "bugtracker.createComment": CallAPI<
        Params.BugtrackerCreateCommentParams,
        Responses.BugtrackerCreateCommentResponse
    >
    /**
     * Returns extended bugreport data
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getBugreportById)
     */
    "bugtracker.getBugreportById": CallAPI<
        Params.BugtrackerGetBugreportByIdParams,
        Responses.BugtrackerGetBugreportByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getCompanyGroupMembers)
     */
    "bugtracker.getCompanyGroupMembers": CallAPI<
        Params.BugtrackerGetCompanyGroupMembersParams,
        Responses.BugtrackerGetCompanyGroupMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getCompanyMembers)
     */
    "bugtracker.getCompanyMembers": CallAPI<
        Params.BugtrackerGetCompanyMembersParams,
        Responses.BugtrackerGetCompanyMembersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getDownloadVersionUrl)
     */
    "bugtracker.getDownloadVersionUrl": CallAPI<
        Params.BugtrackerGetDownloadVersionUrlParams,
        Responses.BugtrackerGetDownloadVersionUrlResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.getProductBuildUploadServer)
     */
    "bugtracker.getProductBuildUploadServer": CallAPI<
        Params.BugtrackerGetProductBuildUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.removeCompanyGroupMember)
     */
    "bugtracker.removeCompanyGroupMember": CallAPI<
        Params.BugtrackerRemoveCompanyGroupMemberParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.removeCompanyMember)
     */
    "bugtracker.removeCompanyMember": CallAPI<
        Params.BugtrackerRemoveCompanyMemberParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.saveProductVersion)
     */
    "bugtracker.saveProductVersion": CallAPI<
        Params.BugtrackerSaveProductVersionParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.setCompanyMemberRole)
     */
    "bugtracker.setCompanyMemberRole": CallAPI<
        Params.BugtrackerSetCompanyMemberRoleParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/bugtracker.setProductIsOver)
     */
    "bugtracker.setProductIsOver": CallAPI<
        Params.BugtrackerSetProductIsOverParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/calls.forceFinish)
     */
    "calls.forceFinish": CallAPI<
        Params.CallsForceFinishParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/calls.start)
     */
    "calls.start": CallAPIWithOptionalParams<
        Params.CallsStartParams,
        Responses.CallsStartResponse
    >
    /**
     * Returns list of chairs on a specified faculty.
     *
     * [Documentation](https://dev.vk.com/method/database.getChairs)
     */
    "database.getChairs": CallAPI<
        Params.DatabaseGetChairsParams,
        Responses.DatabaseGetChairsResponse
    >
    /**
     * Returns a list of cities.
     *
     * [Documentation](https://dev.vk.com/method/database.getCities)
     */
    "database.getCities": CallAPIWithOptionalParams<
        Params.DatabaseGetCitiesParams,
        Responses.DatabaseGetCitiesResponse
    >
    /**
     * Returns information about cities by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/database.getCitiesById)
     */
    "database.getCitiesById": CallAPIWithOptionalParams<
        Params.DatabaseGetCitiesByIdParams,
        Responses.DatabaseGetCitiesByIdResponse
    >
    /**
     * Returns a list of countries.
     *
     * [Documentation](https://dev.vk.com/method/database.getCountries)
     */
    "database.getCountries": CallAPIWithOptionalParams<
        Params.DatabaseGetCountriesParams,
        Responses.DatabaseGetCountriesResponse
    >
    /**
     * Returns information about countries by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/database.getCountriesById)
     */
    "database.getCountriesById": CallAPIWithOptionalParams<
        Params.DatabaseGetCountriesByIdParams,
        Responses.DatabaseGetCountriesByIdResponse
    >
    /**
     * Returns a list of faculties (i.e., university departments).
     *
     * [Documentation](https://dev.vk.com/method/database.getFaculties)
     */
    "database.getFaculties": CallAPI<
        Params.DatabaseGetFacultiesParams,
        Responses.DatabaseGetFacultiesResponse
    >
    /**
     * Get metro stations by city
     *
     * [Documentation](https://dev.vk.com/method/database.getMetroStations)
     */
    "database.getMetroStations": CallAPI<
        Params.DatabaseGetMetroStationsParams,
        Responses.DatabaseGetMetroStationsResponse
    >
    /**
     * Get metro station by his id
     *
     * [Documentation](https://dev.vk.com/method/database.getMetroStationsById)
     */
    "database.getMetroStationsById": CallAPIWithOptionalParams<
        Params.DatabaseGetMetroStationsByIdParams,
        Responses.DatabaseGetMetroStationsByIdResponse
    >
    /**
     * Returns a list of regions.
     *
     * [Documentation](https://dev.vk.com/method/database.getRegions)
     */
    "database.getRegions": CallAPIWithOptionalParams<
        Params.DatabaseGetRegionsParams,
        Responses.DatabaseGetRegionsResponse
    >
    /**
     * Returns a list of school classes specified for the country.
     *
     * [Documentation](https://dev.vk.com/method/database.getSchoolClasses)
     */
    "database.getSchoolClasses": CallAPIWithOptionalParams<
        Params.DatabaseGetSchoolClassesParams,
        Responses.DatabaseGetSchoolClassesNewResponse
    >
    /**
     * Returns a list of schools.
     *
     * [Documentation](https://dev.vk.com/method/database.getSchools)
     */
    "database.getSchools": CallAPI<
        Params.DatabaseGetSchoolsParams,
        Responses.DatabaseGetSchoolsResponse
    >
    /**
     * Returns a list of higher education institutions.
     *
     * [Documentation](https://dev.vk.com/method/database.getUniversities)
     */
    "database.getUniversities": CallAPIWithOptionalParams<
        Params.DatabaseGetUniversitiesParams,
        Responses.DatabaseGetUniversitiesResponse
    >
    /**
     * Copies a document to a user's or community's document list.
     *
     * [Documentation](https://dev.vk.com/method/docs.add)
     */
    "docs.add": CallAPI<Params.DocsAddParams, Responses.DocsAddResponse>
    /**
     * Deletes a user or community document.
     *
     * [Documentation](https://dev.vk.com/method/docs.delete)
     */
    "docs.delete": CallAPI<Params.DocsDeleteParams, Responses.BaseOkResponse>
    /**
     * Edits a document.
     *
     * [Documentation](https://dev.vk.com/method/docs.edit)
     */
    "docs.edit": CallAPI<Params.DocsEditParams, Responses.BaseOkResponse>
    /**
     * Returns detailed information about user or community documents.
     *
     * [Documentation](https://dev.vk.com/method/docs.get)
     */
    "docs.get": CallAPIWithOptionalParams<
        Params.DocsGetParams,
        Responses.DocsGetResponse
    >
    /**
     * Returns information about documents by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/docs.getById)
     */
    "docs.getById": CallAPI<
        Params.DocsGetByIdParams,
        Responses.DocsGetByIdResponse
    >
    /**
     * Returns the server address for document upload.
     *
     * [Documentation](https://dev.vk.com/method/docs.getMessagesUploadServer)
     */
    "docs.getMessagesUploadServer": CallAPIWithOptionalParams<
        Params.DocsGetMessagesUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns documents types available for current user.
     *
     * [Documentation](https://dev.vk.com/method/docs.getTypes)
     */
    "docs.getTypes": CallAPIWithOptionalParams<
        Params.DocsGetTypesParams,
        Responses.DocsGetTypesResponse
    >
    /**
     * Returns the server address for document upload.
     *
     * [Documentation](https://dev.vk.com/method/docs.getUploadServer)
     */
    "docs.getUploadServer": CallAPIWithOptionalParams<
        Params.DocsGetUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns the server address for document upload onto a user's or community's wall.
     *
     * [Documentation](https://dev.vk.com/method/docs.getWallUploadServer)
     */
    "docs.getWallUploadServer": CallAPIWithOptionalParams<
        Params.DocsGetWallUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/docs.restore)
     */
    "docs.restore": CallAPI<Params.DocsRestoreParams, Responses.BaseOkResponse>
    /**
     * Saves a document after [vk.com/dev/upload_files_2|uploading it to a server].
     *
     * [Documentation](https://dev.vk.com/method/docs.save)
     */
    "docs.save": CallAPI<Params.DocsSaveParams, Responses.DocsSaveResponse>
    /**
     * Returns a list of documents matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/docs.search)
     */
    "docs.search": CallAPIWithOptionalParams<
        Params.DocsSearchParams,
        Responses.DocsSearchResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.getFriends)
     */
    "donut.getFriends": CallAPI<
        Params.DonutGetFriendsParams,
        Responses.GroupsGetMembersFieldsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.getSubscription)
     */
    "donut.getSubscription": CallAPI<
        Params.DonutGetSubscriptionParams,
        Objects.VKDonutDonatorSubscriptionInfo
    >
    /**
     * Returns a list of user's VK Donut subscriptions.
     *
     * [Documentation](https://dev.vk.com/method/donut.getSubscriptions)
     */
    "donut.getSubscriptions": CallAPIWithOptionalParams<
        Params.DonutGetSubscriptionsParams,
        Responses.DonutGetSubscriptionsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/donut.isDon)
     */
    "donut.isDon": CallAPI<Params.DonutIsDonParams, Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/downloadedGames.getPaidStatus)
     */
    "downloadedGames.getPaidStatus": CallAPIWithOptionalParams<
        Params.DownloadedGamesGetPaidStatusParams,
        Responses.DownloadedGamesPaidStatusResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/execute)
     */
    execute: CallAPIWithoutParams<Responses.BaseUndefinedResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addArticle)
     */
    "fave.addArticle": CallAPI<
        Params.FaveAddArticleParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds a link to user faves.
     *
     * [Documentation](https://dev.vk.com/method/fave.addLink)
     */
    "fave.addLink": CallAPI<Params.FaveAddLinkParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addPage)
     */
    "fave.addPage": CallAPIWithOptionalParams<
        Params.FaveAddPageParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addPost)
     */
    "fave.addPost": CallAPI<Params.FaveAddPostParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addProduct)
     */
    "fave.addProduct": CallAPI<
        Params.FaveAddProductParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addTag)
     */
    "fave.addTag": CallAPIWithOptionalParams<
        Params.FaveAddTagParams,
        Objects.VKFaveTag
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.addVideo)
     */
    "fave.addVideo": CallAPI<
        Params.FaveAddVideoParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.editTag)
     */
    "fave.editTag": CallAPI<Params.FaveEditTagParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.get)
     */
    "fave.get": {
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
    "fave.getPages": CallAPIWithOptionalParams<
        Params.FaveGetPagesParams,
        Responses.FaveGetPagesResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.getTags)
     */
    "fave.getTags": CallAPIWithoutParams<Responses.FaveGetTagsResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.markSeen)
     */
    "fave.markSeen": CallAPIWithoutParams<Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeArticle)
     */
    "fave.removeArticle": CallAPI<
        Params.FaveRemoveArticleParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Removes link from the user's faves.
     *
     * [Documentation](https://dev.vk.com/method/fave.removeLink)
     */
    "fave.removeLink": CallAPIWithOptionalParams<
        Params.FaveRemoveLinkParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removePage)
     */
    "fave.removePage": CallAPIWithOptionalParams<
        Params.FaveRemovePageParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removePost)
     */
    "fave.removePost": CallAPI<
        Params.FaveRemovePostParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeProduct)
     */
    "fave.removeProduct": CallAPI<
        Params.FaveRemoveProductParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeTag)
     */
    "fave.removeTag": CallAPI<
        Params.FaveRemoveTagParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.removeVideo)
     */
    "fave.removeVideo": CallAPI<
        Params.FaveRemoveVideoParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.reorderTags)
     */
    "fave.reorderTags": CallAPI<
        Params.FaveReorderTagsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.setPageTags)
     */
    "fave.setPageTags": CallAPIWithOptionalParams<
        Params.FaveSetPageTagsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.setTags)
     */
    "fave.setTags": CallAPIWithOptionalParams<
        Params.FaveSetTagsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/fave.trackPageInteraction)
     */
    "fave.trackPageInteraction": CallAPIWithOptionalParams<
        Params.FaveTrackPageInteractionParams,
        Responses.BaseOkResponse
    >
    /**
     * Approves or creates a friend request.
     *
     * [Documentation](https://dev.vk.com/method/friends.add)
     */
    "friends.add": CallAPIWithOptionalParams<
        Params.FriendsAddParams,
        Responses.FriendsAddResponse
    >
    /**
     * Creates a new friend list for the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.addList)
     */
    "friends.addList": CallAPI<
        Params.FriendsAddListParams,
        Responses.FriendsAddListResponse
    >
    /**
     * Checks the current user's friendship status with other specified users.
     *
     * [Documentation](https://dev.vk.com/method/friends.areFriends)
     */
    "friends.areFriends": {
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
    "friends.delete": CallAPIWithOptionalParams<
        Params.FriendsDeleteParams,
        Responses.FriendsDeleteResponse
    >
    /**
     * Marks all incoming friend requests as viewed.
     *
     * [Documentation](https://dev.vk.com/method/friends.deleteAllRequests)
     */
    "friends.deleteAllRequests": CallAPIWithoutParams<Responses.BaseOkResponse>
    /**
     * Deletes a friend list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.deleteList)
     */
    "friends.deleteList": CallAPI<
        Params.FriendsDeleteListParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the friend lists of the selected user.
     *
     * [Documentation](https://dev.vk.com/method/friends.edit)
     */
    "friends.edit": CallAPI<Params.FriendsEditParams, Responses.BaseOkResponse>
    /**
     * Edits a friend list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/friends.editList)
     */
    "friends.editList": CallAPI<
        Params.FriendsEditListParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of user IDs or detailed information about a user's friends.
     *
     * [Documentation](https://dev.vk.com/method/friends.get)
     */
    "friends.get": {
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
    "friends.getAppUsers": CallAPIWithoutParams<Responses.FriendsGetAppUsersResponse>
    /**
     * Returns a list of the user's friend lists.
     *
     * [Documentation](https://dev.vk.com/method/friends.getLists)
     */
    "friends.getLists": CallAPIWithOptionalParams<
        Params.FriendsGetListsParams,
        Responses.FriendsGetListsResponse
    >
    /**
     * Returns a list of user IDs of the mutual friends of two users.
     *
     * [Documentation](https://dev.vk.com/method/friends.getMutual)
     */
    "friends.getMutual": {
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
    "friends.getOnline": {
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
    "friends.getRecent": CallAPIWithOptionalParams<
        Params.FriendsGetRecentParams,
        Responses.FriendsGetRecentResponse
    >
    /**
     * Returns information about the current user's incoming and outgoing friend requests.
     *
     * [Documentation](https://dev.vk.com/method/friends.getRequests)
     */
    "friends.getRequests": {
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
    "friends.getSuggestions": CallAPIWithOptionalParams<
        Params.FriendsGetSuggestionsParams,
        Responses.FriendsGetSuggestionsResponse
    >
    /**
     * Returns a list of friends matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/friends.search)
     */
    "friends.search": CallAPIWithOptionalParams<
        Params.FriendsSearchParams,
        Responses.FriendsSearchResponse
    >
    /**
     * Returns a list of user gifts.
     *
     * [Documentation](https://dev.vk.com/method/gifts.get)
     */
    "gifts.get": CallAPIWithOptionalParams<
        Params.GiftsGetParams,
        Responses.GiftsGetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.addAddress)
     */
    "groups.addAddress": CallAPI<
        Params.GroupsAddAddressParams,
        Objects.VKGroupsAddress
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.addCallbackServer)
     */
    "groups.addCallbackServer": CallAPI<
        Params.GroupsAddCallbackServerParams,
        Responses.GroupsAddCallbackServerResponse
    >
    /**
     * Allows to add a link to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.addLink)
     */
    "groups.addLink": CallAPI<
        Params.GroupsAddLinkParams,
        Objects.VKGroupsLinksItem
    >
    /**
     * Allows to approve join request to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.approveRequest)
     */
    "groups.approveRequest": CallAPI<
        Params.GroupsApproveRequestParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.ban)
     */
    "groups.ban": CallAPI<Params.GroupsBanParams, Responses.BaseOkResponse>
    /**
     * Creates a new community.
     *
     * [Documentation](https://dev.vk.com/method/groups.create)
     */
    "groups.create": CallAPI<
        Params.GroupsCreateParams,
        Objects.VKGroupsGroupFull
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteAddress)
     */
    "groups.deleteAddress": CallAPI<
        Params.GroupsDeleteAddressParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteCallbackServer)
     */
    "groups.deleteCallbackServer": CallAPI<
        Params.GroupsDeleteCallbackServerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to delete a link from the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.deleteLink)
     */
    "groups.deleteLink": CallAPI<
        Params.GroupsDeleteLinkParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.disableOnline)
     */
    "groups.disableOnline": CallAPI<
        Params.GroupsDisableOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a community.
     *
     * [Documentation](https://dev.vk.com/method/groups.edit)
     */
    "groups.edit": CallAPI<Params.GroupsEditParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.editAddress)
     */
    "groups.editAddress": CallAPI<
        Params.GroupsEditAddressParams,
        Objects.VKGroupsAddress
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.editCallbackServer)
     */
    "groups.editCallbackServer": CallAPI<
        Params.GroupsEditCallbackServerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to edit a link in the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.editLink)
     */
    "groups.editLink": CallAPI<
        Params.GroupsEditLinkParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to add, remove or edit the community manager.
     *
     * [Documentation](https://dev.vk.com/method/groups.editManager)
     */
    "groups.editManager": CallAPI<
        Params.GroupsEditManagerParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.enableOnline)
     */
    "groups.enableOnline": CallAPI<
        Params.GroupsEnableOnlineParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of the communities to which a user belongs.
     *
     * [Documentation](https://dev.vk.com/method/groups.get)
     */
    "groups.get": {
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
    "groups.getAddresses": CallAPI<
        Params.GroupsGetAddressesParams,
        Responses.GroupsGetAddressesResponse
    >
    /**
     * Returns a list of users on a community blacklist.
     *
     * [Documentation](https://dev.vk.com/method/groups.getBanned)
     */
    "groups.getBanned": CallAPI<
        Params.GroupsGetBannedParams,
        Responses.GroupsGetBannedResponse
    >
    /**
     * Returns information about communities by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/groups.getById)
     */
    "groups.getById": CallAPIWithOptionalParams<
        Params.GroupsGetByIdParams,
        Responses.GroupsGetByIdObjectResponse
    >
    /**
     * Returns Callback API confirmation code for the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackConfirmationCode)
     */
    "groups.getCallbackConfirmationCode": CallAPI<
        Params.GroupsGetCallbackConfirmationCodeParams,
        Responses.GroupsGetCallbackConfirmationCodeResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackServers)
     */
    "groups.getCallbackServers": CallAPI<
        Params.GroupsGetCallbackServersParams,
        Responses.GroupsGetCallbackServersResponse
    >
    /**
     * Returns [vk.com/dev/callback_api|Callback API] notifications settings.
     *
     * [Documentation](https://dev.vk.com/method/groups.getCallbackSettings)
     */
    "groups.getCallbackSettings": CallAPI<
        Params.GroupsGetCallbackSettingsParams,
        Objects.VKGroupsCallbackSettings
    >
    /**
     * Returns categories list for communities catalog
     *
     * [Documentation](https://dev.vk.com/method/groups.getCatalogInfo)
     */
    "groups.getCatalogInfo": {
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
    "groups.getInvitedUsers": CallAPI<
        Params.GroupsGetInvitedUsersParams,
        Responses.GroupsGetInvitedUsersResponse
    >
    /**
     * Returns a list of invitations to join communities and events.
     *
     * [Documentation](https://dev.vk.com/method/groups.getInvites)
     */
    "groups.getInvites": {
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
    "groups.getLongPollServer": CallAPI<
        Params.GroupsGetLongPollServerParams,
        Objects.VKGroupsLongPollServer
    >
    /**
     * Returns Long Poll notification settings
     *
     * [Documentation](https://dev.vk.com/method/groups.getLongPollSettings)
     */
    "groups.getLongPollSettings": CallAPI<
        Params.GroupsGetLongPollSettingsParams,
        Objects.VKGroupsLongPollSettings
    >
    /**
     * Returns a list of community members.
     *
     * [Documentation](https://dev.vk.com/method/groups.getMembers)
     */
    "groups.getMembers": {
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
    "groups.getOnlineStatus": CallAPI<
        Params.GroupsGetOnlineStatusParams,
        Responses.GroupsGetOnlineStatusResponse
    >
    /**
     * Returns a list of requests to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.getRequests)
     */
    "groups.getRequests": {
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
    "groups.getSettings": CallAPI<
        Params.GroupsGetSettingsParams,
        Responses.GroupsGetSettingsResponse
    >
    /**
     * List of group's tags
     *
     * [Documentation](https://dev.vk.com/method/groups.getTagList)
     */
    "groups.getTagList": CallAPI<
        Params.GroupsGetTagListParams,
        Responses.GroupsGetTagListResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.getTokenPermissions)
     */
    "groups.getTokenPermissions": CallAPIWithoutParams<Responses.GroupsGetTokenPermissionsResponse>
    /**
     * Allows to invite friends to the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.invite)
     */
    "groups.invite": CallAPI<
        Params.GroupsInviteParams,
        Responses.BaseOkResponse | Responses.GroupsInviteUserIdsListResponse
    >
    /**
     * Returns information specifying whether a user is a member of a community.
     *
     * [Documentation](https://dev.vk.com/method/groups.isMember)
     */
    "groups.isMember": {
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
    "groups.join": CallAPI<Params.GroupsJoinParams, Responses.BaseOkResponse>
    /**
     * With this method you can leave a group, public page, or event.
     *
     * [Documentation](https://dev.vk.com/method/groups.leave)
     */
    "groups.leave": CallAPI<Params.GroupsLeaveParams, Responses.BaseOkResponse>
    /**
     * Removes a user from the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.removeUser)
     */
    "groups.removeUser": CallAPI<
        Params.GroupsRemoveUserParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to reorder links in the community.
     *
     * [Documentation](https://dev.vk.com/method/groups.reorderLink)
     */
    "groups.reorderLink": CallAPI<
        Params.GroupsReorderLinkParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of communities matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/groups.search)
     */
    "groups.search": CallAPI<
        Params.GroupsSearchParams,
        Responses.GroupsSearchResponse
    >
    /**
     * Allow to set notifications settings for group.
     *
     * [Documentation](https://dev.vk.com/method/groups.setCallbackSettings)
     */
    "groups.setCallbackSettings": CallAPI<
        Params.GroupsSetCallbackSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets Long Poll notification settings
     *
     * [Documentation](https://dev.vk.com/method/groups.setLongPollSettings)
     */
    "groups.setLongPollSettings": CallAPI<
        Params.GroupsSetLongPollSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.setSettings)
     */
    "groups.setSettings": CallAPI<
        Params.GroupsSetSettingsParams,
        Responses.BaseOkResponse
    >
    /**
     * In order to save note about group participant
     *
     * [Documentation](https://dev.vk.com/method/groups.setUserNote)
     */
    "groups.setUserNote": CallAPI<
        Params.GroupsSetUserNoteParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Add new group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagAdd)
     */
    "groups.tagAdd": CallAPI<Params.GroupsTagAddParams, Objects.VKBaseBoolInt>
    /**
     * Bind or unbind group's tag to user
     *
     * [Documentation](https://dev.vk.com/method/groups.tagBind)
     */
    "groups.tagBind": CallAPI<Params.GroupsTagBindParams, Objects.VKBaseBoolInt>
    /**
     * Delete group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagDelete)
     */
    "groups.tagDelete": CallAPI<
        Params.GroupsTagDeleteParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Update group's tag
     *
     * [Documentation](https://dev.vk.com/method/groups.tagUpdate)
     */
    "groups.tagUpdate": CallAPI<
        Params.GroupsTagUpdateParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.toggleMarket)
     */
    "groups.toggleMarket": CallAPI<
        Params.GroupsToggleMarketParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/groups.unban)
     */
    "groups.unban": CallAPI<Params.GroupsUnbanParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.create)
     */
    "leadForms.create": CallAPI<
        Params.LeadFormsCreateParams,
        Responses.LeadFormsCreateResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.delete)
     */
    "leadForms.delete": CallAPI<
        Params.LeadFormsDeleteParams,
        Responses.LeadFormsDeleteResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.get)
     */
    "leadForms.get": CallAPI<Params.LeadFormsGetParams, Objects.VKLeadFormsForm>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.getLeads)
     */
    "leadForms.getLeads": CallAPI<
        Params.LeadFormsGetLeadsParams,
        Responses.LeadFormsGetLeadsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.getUploadURL)
     */
    "leadForms.getUploadURL": CallAPIWithoutParams<Responses.LeadFormsUploadUrlResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.list)
     */
    "leadForms.list": CallAPI<
        Params.LeadFormsListParams,
        Responses.LeadFormsListResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/leadForms.update)
     */
    "leadForms.update": CallAPI<
        Params.LeadFormsUpdateParams,
        Responses.LeadFormsCreateResponse
    >
    /**
     * Adds the specified object to the 'Likes' list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/likes.add)
     */
    "likes.add": CallAPI<Params.LikesAddParams, Responses.LikesAddResponse>
    /**
     * Deletes the specified object from the 'Likes' list of the current user.
     *
     * [Documentation](https://dev.vk.com/method/likes.delete)
     */
    "likes.delete": CallAPI<
        Params.LikesDeleteParams,
        Responses.LikesDeleteResponse
    >
    /**
     * Returns a list of IDs of users who added the specified object to their 'Likes' list.
     *
     * [Documentation](https://dev.vk.com/method/likes.getList)
     */
    "likes.getList": {
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
    "likes.isLiked": CallAPI<
        Params.LikesIsLikedParams,
        Responses.LikesIsLikedResponse
    >
    /**
     * Ads a new item to the market.
     *
     * [Documentation](https://dev.vk.com/method/market.add)
     */
    "market.add": CallAPI<Params.MarketAddParams, Responses.MarketAddResponse>
    /**
     * Creates new collection of items
     *
     * [Documentation](https://dev.vk.com/method/market.addAlbum)
     */
    "market.addAlbum": CallAPI<
        Params.MarketAddAlbumParams,
        Responses.MarketAddAlbumResponse
    >
    /**
     * Adds property
     *
     * [Documentation](https://dev.vk.com/method/market.addProperty)
     */
    "market.addProperty": CallAPI<
        Params.MarketAddPropertyParams,
        Responses.MarketAddPropertyResponse
    >
    /**
     * Adds property variant
     *
     * [Documentation](https://dev.vk.com/method/market.addPropertyVariant)
     */
    "market.addPropertyVariant": CallAPI<
        Params.MarketAddPropertyVariantParams,
        Responses.MarketAddPropertyVariantResponse
    >
    /**
     * Adds an item to one or multiple collections.
     *
     * [Documentation](https://dev.vk.com/method/market.addToAlbum)
     */
    "market.addToAlbum": CallAPI<
        Params.MarketAddToAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Creates a new comment for an item.
     *
     * [Documentation](https://dev.vk.com/method/market.createComment)
     */
    "market.createComment": CallAPI<
        Params.MarketCreateCommentParams,
        Responses.MarketCreateCommentResponse
    >
    /**
     * Deletes an item.
     *
     * [Documentation](https://dev.vk.com/method/market.delete)
     */
    "market.delete": CallAPI<
        Params.MarketDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a collection of items.
     *
     * [Documentation](https://dev.vk.com/method/market.deleteAlbum)
     */
    "market.deleteAlbum": CallAPI<
        Params.MarketDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes an item's comment
     *
     * [Documentation](https://dev.vk.com/method/market.deleteComment)
     */
    "market.deleteComment": CallAPI<
        Params.MarketDeleteCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.deleteProperty)
     */
    "market.deleteProperty": CallAPI<
        Params.MarketDeletePropertyParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.deletePropertyVariant)
     */
    "market.deletePropertyVariant": CallAPI<
        Params.MarketDeletePropertyVariantParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits an item.
     *
     * [Documentation](https://dev.vk.com/method/market.edit)
     */
    "market.edit": CallAPI<Params.MarketEditParams, Responses.BaseOkResponse>
    /**
     * Edits a collection of items
     *
     * [Documentation](https://dev.vk.com/method/market.editAlbum)
     */
    "market.editAlbum": CallAPI<
        Params.MarketEditAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Chages item comment's text
     *
     * [Documentation](https://dev.vk.com/method/market.editComment)
     */
    "market.editComment": CallAPI<
        Params.MarketEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edit order
     *
     * [Documentation](https://dev.vk.com/method/market.editOrder)
     */
    "market.editOrder": CallAPI<
        Params.MarketEditOrderParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds property
     *
     * [Documentation](https://dev.vk.com/method/market.editProperty)
     */
    "market.editProperty": CallAPI<
        Params.MarketEditPropertyParams,
        Responses.BaseOkResponse
    >
    /**
     * Edit property variant name
     *
     * [Documentation](https://dev.vk.com/method/market.editPropertyVariant)
     */
    "market.editPropertyVariant": CallAPI<
        Params.MarketEditPropertyVariantParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a filter list of market categories.
     *
     * [Documentation](https://dev.vk.com/method/market.filterCategories)
     */
    "market.filterCategories": CallAPIWithOptionalParams<
        Params.MarketFilterCategoriesParams,
        Responses.MarketGetCategoriesNewResponse
    >
    /**
     * Returns items list for a community.
     *
     * [Documentation](https://dev.vk.com/method/market.get)
     */
    "market.get": {
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
    "market.getAlbumById": CallAPI<
        Params.MarketGetAlbumByIdParams,
        Responses.MarketGetAlbumByIdResponse
    >
    /**
     * Returns community's market collections list.
     *
     * [Documentation](https://dev.vk.com/method/market.getAlbums)
     */
    "market.getAlbums": CallAPI<
        Params.MarketGetAlbumsParams,
        Responses.MarketGetAlbumsResponse
    >
    /**
     * Returns information about market items by their ids.
     *
     * [Documentation](https://dev.vk.com/method/market.getById)
     */
    "market.getById": {
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
    "market.getCategories": CallAPIWithOptionalParams<
        Params.MarketGetCategoriesParams,
        Responses.MarketGetCategoriesNewResponse
    >
    /**
     * Returns comments list for an item.
     *
     * [Documentation](https://dev.vk.com/method/market.getComments)
     */
    "market.getComments": CallAPI<
        Params.MarketGetCommentsParams,
        Responses.MarketGetCommentsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.getFavesForAttach)
     */
    "market.getFavesForAttach": CallAPIWithOptionalParams<
        Params.MarketGetFavesForAttachParams,
        Responses.MarketGetFavesForAttachResponse
    >
    /**
     * Get market orders
     *
     * [Documentation](https://dev.vk.com/method/market.getGroupOrders)
     */
    "market.getGroupOrders": CallAPIWithOptionalParams<
        Params.MarketGetGroupOrdersParams,
        Responses.MarketGetGroupOrdersResponse
    >
    /**
     * Get order
     *
     * [Documentation](https://dev.vk.com/method/market.getOrderById)
     */
    "market.getOrderById": CallAPI<
        Params.MarketGetOrderByIdParams,
        Responses.MarketGetOrderByIdResponse
    >
    /**
     * Get market items in the order
     *
     * [Documentation](https://dev.vk.com/method/market.getOrderItems)
     */
    "market.getOrderItems": CallAPI<
        Params.MarketGetOrderItemsParams,
        Responses.MarketGetOrderItemsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.getOrders)
     */
    "market.getOrders": {
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
    "market.getProductPhotoUploadServer": CallAPI<
        Params.MarketGetProductPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Get properties
     *
     * [Documentation](https://dev.vk.com/method/market.getProperties)
     */
    "market.getProperties": CallAPI<
        Params.MarketGetPropertiesParams,
        Responses.MarketGetPropertiesResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.groupItems)
     */
    "market.groupItems": CallAPI<
        Params.MarketGroupItemsParams,
        Responses.MarketGroupItemsResponse
    >
    /**
     * Removes an item from one or multiple collections.
     *
     * [Documentation](https://dev.vk.com/method/market.removeFromAlbum)
     */
    "market.removeFromAlbum": CallAPI<
        Params.MarketRemoveFromAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the collections list.
     *
     * [Documentation](https://dev.vk.com/method/market.reorderAlbums)
     */
    "market.reorderAlbums": CallAPI<
        Params.MarketReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Changes item place in a collection.
     *
     * [Documentation](https://dev.vk.com/method/market.reorderItems)
     */
    "market.reorderItems": CallAPI<
        Params.MarketReorderItemsParams,
        Responses.BaseOkResponse
    >
    /**
     * Sends a complaint to the item.
     *
     * [Documentation](https://dev.vk.com/method/market.report)
     */
    "market.report": CallAPI<
        Params.MarketReportParams,
        Responses.BaseOkResponse
    >
    /**
     * Sends a complaint to the item's comment.
     *
     * [Documentation](https://dev.vk.com/method/market.reportComment)
     */
    "market.reportComment": CallAPI<
        Params.MarketReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores recently deleted item
     *
     * [Documentation](https://dev.vk.com/method/market.restore)
     */
    "market.restore": CallAPI<
        Params.MarketRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a recently deleted comment
     *
     * [Documentation](https://dev.vk.com/method/market.restoreComment)
     */
    "market.restoreComment": CallAPI<
        Params.MarketRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Save market photo after upload.
     *
     * [Documentation](https://dev.vk.com/method/market.saveProductPhoto)
     */
    "market.saveProductPhoto": CallAPI<
        Params.MarketSaveProductPhotoParams,
        Responses.MarketPhotoIdResponse
    >
    /**
     * Bulk save market photo after upload.
     *
     * [Documentation](https://dev.vk.com/method/market.saveProductPhotoBulk)
     */
    "market.saveProductPhotoBulk": CallAPI<
        Params.MarketSaveProductPhotoBulkParams,
        Responses.MarketPhotoIdBulkResponse
    >
    /**
     * Searches market items in a community's catalog
     *
     * [Documentation](https://dev.vk.com/method/market.search)
     */
    "market.search": {
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
    "market.searchItems": CallAPI<
        Params.MarketSearchItemsParams,
        Responses.MarketSearchResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.searchItemsBasic)
     */
    "market.searchItemsBasic": CallAPI<
        Params.MarketSearchItemsBasicParams,
        Responses.MarketSearchBasicResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/market.ungroupItems)
     */
    "market.ungroupItems": CallAPI<
        Params.MarketUngroupItemsParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds a new user to a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.addChatUser)
     */
    "messages.addChatUser": CallAPI<
        Params.MessagesAddChatUserParams,
        Responses.BaseOkResponse
    >
    /**
     * Adds new users to a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.addChatUsers)
     */
    "messages.addChatUsers": CallAPIWithOptionalParams<
        Params.MessagesAddChatUsersParams,
        Responses.MessagesAddChatUsersResponse
    >
    /**
     * Allows sending messages from community to the current user.
     *
     * [Documentation](https://dev.vk.com/method/messages.allowMessagesFromGroup)
     */
    "messages.allowMessagesFromGroup": CallAPI<
        Params.MessagesAllowMessagesFromGroupParams,
        Responses.BaseOkResponse
    >
    /**
     * Creates a chat with several participants.
     *
     * [Documentation](https://dev.vk.com/method/messages.createChat)
     */
    "messages.createChat": CallAPIWithOptionalParams<
        Params.MessagesCreateChatParams,
        Responses.MessagesCreateChatWithPeerIdsResponse
    >
    /**
     * Deletes one or more messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.delete)
     */
    "messages.delete": CallAPIWithOptionalParams<
        Params.MessagesDeleteParams,
        Responses.MessagesDeleteFullResponse
    >
    /**
     * Deletes a chat's cover picture.
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteChatPhoto)
     */
    "messages.deleteChatPhoto": CallAPI<
        Params.MessagesDeleteChatPhotoParams,
        Responses.MessagesDeleteChatPhotoResponse
    >
    /**
     * Deletes all private messages in a conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteConversation)
     */
    "messages.deleteConversation": CallAPIWithOptionalParams<
        Params.MessagesDeleteConversationParams,
        Responses.MessagesDeleteConversationResponse
    >
    /**
     * Delete message reaction
     *
     * [Documentation](https://dev.vk.com/method/messages.deleteReaction)
     */
    "messages.deleteReaction": CallAPI<
        Params.MessagesDeleteReactionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Denies sending message from community to the current user.
     *
     * [Documentation](https://dev.vk.com/method/messages.denyMessagesFromGroup)
     */
    "messages.denyMessagesFromGroup": CallAPI<
        Params.MessagesDenyMessagesFromGroupParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the message.
     *
     * [Documentation](https://dev.vk.com/method/messages.edit)
     */
    "messages.edit": CallAPI<Params.MessagesEditParams, Objects.VKBaseBoolInt>
    /**
     * Edits the title of a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.editChat)
     */
    "messages.editChat": CallAPI<
        Params.MessagesEditChatParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns messages by their IDs within the conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.getByConversationMessageId)
     */
    "messages.getByConversationMessageId": {
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
    "messages.getById": {
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
    "messages.getChat": {
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
    "messages.getChatPreview": CallAPIWithOptionalParams<
        Params.MessagesGetChatPreviewParams,
        Responses.MessagesGetChatPreviewResponse
    >
    /**
     * Returns a list of IDs of users participating in a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversationMembers)
     */
    "messages.getConversationMembers": CallAPI<
        Params.MessagesGetConversationMembersParams,
        Objects.VKMessagesGetConversationMembers
    >
    /**
     * Returns a list of the current user's conversations.
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversations)
     */
    "messages.getConversations": CallAPIWithOptionalParams<
        Params.MessagesGetConversationsParams,
        Responses.MessagesGetConversationsResponse
    >
    /**
     * Returns conversations by their IDs
     *
     * [Documentation](https://dev.vk.com/method/messages.getConversationsById)
     */
    "messages.getConversationsById": {
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
    "messages.getHistory": {
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
    "messages.getHistoryAttachments": CallAPIWithOptionalParams<
        Params.MessagesGetHistoryAttachmentsParams,
        Responses.MessagesGetHistoryAttachmentsResponse
    >
    /**
     * Returns a list of user's important messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.getImportantMessages)
     */
    "messages.getImportantMessages": {
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
    "messages.getIntentUsers": CallAPI<
        Params.MessagesGetIntentUsersParams,
        Responses.MessagesGetIntentUsersResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.getInviteLink)
     */
    "messages.getInviteLink": CallAPI<
        Params.MessagesGetInviteLinkParams,
        | Responses.MessagesGetInviteLinkResponse
        | Responses.MessagesGetInviteLinkByOwnerResponse
    >
    /**
     * Returns a user's current status and date of last activity.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLastActivity)
     */
    "messages.getLastActivity": CallAPI<
        Params.MessagesGetLastActivityParams,
        Objects.VKMessagesLastActivity
    >
    /**
     * Returns updates in user's private messages.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLongPollHistory)
     */
    "messages.getLongPollHistory": CallAPIWithOptionalParams<
        Params.MessagesGetLongPollHistoryParams,
        Responses.MessagesGetLongPollHistoryResponse
    >
    /**
     * Returns data required for connection to a Long Poll server.
     *
     * [Documentation](https://dev.vk.com/method/messages.getLongPollServer)
     */
    "messages.getLongPollServer": CallAPIWithOptionalParams<
        Params.MessagesGetLongPollServerParams,
        Objects.VKMessagesLongpollParams
    >
    /**
     * Get reaction counters for message
     *
     * [Documentation](https://dev.vk.com/method/messages.getMessagesReactions)
     */
    "messages.getMessagesReactions": CallAPI<
        Params.MessagesGetMessagesReactionsParams,
        Responses.MessagesGetMessagesReactionsResponse
    >
    /**
     * Get reacted users and counters for message
     *
     * [Documentation](https://dev.vk.com/method/messages.getReactedPeers)
     */
    "messages.getReactedPeers": CallAPI<
        Params.MessagesGetReactedPeersParams,
        Responses.MessagesGetReactedPeersResponse
    >
    /**
     * Get assets to display message reactions
     *
     * [Documentation](https://dev.vk.com/method/messages.getReactionsAssets)
     */
    "messages.getReactionsAssets": CallAPIWithOptionalParams<
        Params.MessagesGetReactionsAssetsParams,
        Responses.MessagesGetReactionsAssetsResponse
    >
    /**
     * Returns information whether sending messages from the community to current user is allowed.
     *
     * [Documentation](https://dev.vk.com/method/messages.isMessagesFromGroupAllowed)
     */
    "messages.isMessagesFromGroupAllowed": CallAPI<
        Params.MessagesIsMessagesFromGroupAllowedParams,
        Responses.MessagesIsMessagesFromGroupAllowedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.joinChatByInviteLink)
     */
    "messages.joinChatByInviteLink": CallAPI<
        Params.MessagesJoinChatByInviteLinkParams,
        Responses.MessagesJoinChatByInviteLinkResponse
    >
    /**
     * Marks and unmarks conversations as unanswered.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsAnsweredConversation)
     */
    "messages.markAsAnsweredConversation": CallAPI<
        Params.MessagesMarkAsAnsweredConversationParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks and unmarks messages as important (starred).
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsImportant)
     */
    "messages.markAsImportant": CallAPIWithOptionalParams<
        Params.MessagesMarkAsImportantParams,
        Responses.MessagesMarkAsImportantDeprecatedResponse
    >
    /**
     * Marks and unmarks conversations as important.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsImportantConversation)
     */
    "messages.markAsImportantConversation": CallAPI<
        Params.MessagesMarkAsImportantConversationParams,
        Responses.BaseOkResponse
    >
    /**
     * Marks messages as read.
     *
     * [Documentation](https://dev.vk.com/method/messages.markAsRead)
     */
    "messages.markAsRead": CallAPIWithOptionalParams<
        Params.MessagesMarkAsReadParams,
        Responses.BaseOkResponse
    >
    /**
     * Mark messages reactions as read
     *
     * [Documentation](https://dev.vk.com/method/messages.markReactionsAsRead)
     */
    "messages.markReactionsAsRead": CallAPI<
        Params.MessagesMarkReactionsAsReadParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.muteChatMentions)
     */
    "messages.muteChatMentions": CallAPI<
        Params.MessagesMuteChatMentionsParams,
        Responses.BaseOkResponse
    >
    /**
     * Pin a message.
     *
     * [Documentation](https://dev.vk.com/method/messages.pin)
     */
    "messages.pin": CallAPI<
        Params.MessagesPinParams,
        Objects.VKMessagesPinnedMessage
    >
    /**
     * Allows the current user to leave a chat or, if the current user started the chat, allows the user to remove another user from the chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.removeChatUser)
     */
    "messages.removeChatUser": CallAPI<
        Params.MessagesRemoveChatUserParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a deleted message.
     *
     * [Documentation](https://dev.vk.com/method/messages.restore)
     */
    "messages.restore": CallAPIWithOptionalParams<
        Params.MessagesRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of the current user's private messages that match search criteria.
     *
     * [Documentation](https://dev.vk.com/method/messages.search)
     */
    "messages.search": {
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
    "messages.searchConversations": {
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
    "messages.send": CallAPIWithOptionalParams<
        Params.MessagesSendParams,
        | Responses.MessagesSendDeprecatedResponse
        | Responses.MessagesSendUserIdsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.sendMessageEventAnswer)
     */
    "messages.sendMessageEventAnswer": CallAPI<
        Params.MessagesSendMessageEventAnswerParams,
        Responses.BaseOkResponse
    >
    /**
     * Send message reaction
     *
     * [Documentation](https://dev.vk.com/method/messages.sendReaction)
     */
    "messages.sendReaction": CallAPI<
        Params.MessagesSendReactionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Changes the status of a user as typing in a conversation.
     *
     * [Documentation](https://dev.vk.com/method/messages.setActivity)
     */
    "messages.setActivity": CallAPIWithOptionalParams<
        Params.MessagesSetActivityParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets a previously-uploaded picture as the cover picture of a chat.
     *
     * [Documentation](https://dev.vk.com/method/messages.setChatPhoto)
     */
    "messages.setChatPhoto": CallAPI<
        Params.MessagesSetChatPhotoParams,
        Responses.MessagesSetChatPhotoResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/messages.unpin)
     */
    "messages.unpin": CallAPI<
        Params.MessagesUnpinParams,
        Responses.BaseOkResponse
    >
    /**
     * Prevents news from specified users and communities from appearing in the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.addBan)
     */
    "newsfeed.addBan": CallAPIWithOptionalParams<
        Params.NewsfeedAddBanParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Allows news from previously banned users and communities to be shown in the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.deleteBan)
     */
    "newsfeed.deleteBan": CallAPIWithOptionalParams<
        Params.NewsfeedDeleteBanParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.deleteList)
     */
    "newsfeed.deleteList": CallAPI<
        Params.NewsfeedDeleteListParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns data required to show newsfeed for the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.get)
     */
    "newsfeed.get": CallAPIWithOptionalParams<
        Params.NewsfeedGetParams,
        Responses.NewsfeedGenericResponse
    >
    /**
     * Returns a list of users and communities banned from the current user's newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getBanned)
     */
    "newsfeed.getBanned": {
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
    "newsfeed.getComments": CallAPIWithOptionalParams<
        Params.NewsfeedGetCommentsParams,
        Responses.NewsfeedGetCommentsResponse
    >
    /**
     * Returns a list of newsfeeds followed by the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getLists)
     */
    "newsfeed.getLists": {
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
    "newsfeed.getMentions": CallAPIWithOptionalParams<
        Params.NewsfeedGetMentionsParams,
        Responses.NewsfeedGetMentionsResponse
    >
    /**
     * , Returns a list of newsfeeds recommended to the current user.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getRecommended)
     */
    "newsfeed.getRecommended": CallAPIWithOptionalParams<
        Params.NewsfeedGetRecommendedParams,
        Responses.NewsfeedGenericResponse
    >
    /**
     * Returns communities and users that current user is suggested to follow.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.getSuggestedSources)
     */
    "newsfeed.getSuggestedSources": CallAPIWithOptionalParams<
        Params.NewsfeedGetSuggestedSourcesParams,
        Responses.NewsfeedGetSuggestedSourcesResponse
    >
    /**
     * Hides an item from the newsfeed.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.ignoreItem)
     */
    "newsfeed.ignoreItem": CallAPI<
        Params.NewsfeedIgnoreItemParams,
        Responses.NewsfeedIgnoreItemResponse
    >
    /**
     * Creates and edits user newsfeed lists
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.saveList)
     */
    "newsfeed.saveList": CallAPI<
        Params.NewsfeedSaveListParams,
        Responses.NewsfeedSaveListResponse
    >
    /**
     * Returns search results by statuses.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.search)
     */
    "newsfeed.search": {
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
    "newsfeed.unignoreItem": CallAPI<
        Params.NewsfeedUnignoreItemParams,
        Responses.BaseOkResponse
    >
    /**
     * Unsubscribes the current user from specified newsfeeds.
     *
     * [Documentation](https://dev.vk.com/method/newsfeed.unsubscribe)
     */
    "newsfeed.unsubscribe": CallAPI<
        Params.NewsfeedUnsubscribeParams,
        Responses.BaseOkResponse
    >
    /**
     * Creates a new note for the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.add)
     */
    "notes.add": CallAPI<Params.NotesAddParams, Responses.NotesAddResponse>
    /**
     * Adds a new comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.createComment)
     */
    "notes.createComment": CallAPI<
        Params.NotesCreateCommentParams,
        Responses.NotesCreateCommentResponse
    >
    /**
     * Deletes a note of the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.delete)
     */
    "notes.delete": CallAPI<Params.NotesDeleteParams, Responses.BaseOkResponse>
    /**
     * Deletes a comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.deleteComment)
     */
    "notes.deleteComment": CallAPI<
        Params.NotesDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a note of the current user.
     *
     * [Documentation](https://dev.vk.com/method/notes.edit)
     */
    "notes.edit": CallAPI<Params.NotesEditParams, Responses.BaseOkResponse>
    /**
     * Edits a comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.editComment)
     */
    "notes.editComment": CallAPI<
        Params.NotesEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of notes created by a user.
     *
     * [Documentation](https://dev.vk.com/method/notes.get)
     */
    "notes.get": CallAPIWithOptionalParams<
        Params.NotesGetParams,
        Responses.NotesGetResponse
    >
    /**
     * Returns a note by its ID.
     *
     * [Documentation](https://dev.vk.com/method/notes.getById)
     */
    "notes.getById": CallAPI<Params.NotesGetByIdParams, Objects.VKNotesNote>
    /**
     * Returns a list of comments on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.getComments)
     */
    "notes.getComments": CallAPI<
        Params.NotesGetCommentsParams,
        Responses.NotesGetCommentsResponse
    >
    /**
     * Restores a deleted comment on a note.
     *
     * [Documentation](https://dev.vk.com/method/notes.restoreComment)
     */
    "notes.restoreComment": CallAPI<
        Params.NotesRestoreCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of notifications about other users' feedback to the current user's wall posts.
     *
     * [Documentation](https://dev.vk.com/method/notifications.get)
     */
    "notifications.get": CallAPIWithOptionalParams<
        Params.NotificationsGetParams,
        Responses.NotificationsGetResponse
    >
    /**
     * Resets the counter of new notifications about other users' feedback to the current user's wall posts.
     *
     * [Documentation](https://dev.vk.com/method/notifications.markAsViewed)
     */
    "notifications.markAsViewed": CallAPIWithoutParams<Objects.VKBaseBoolInt>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/notifications.sendMessage)
     */
    "notifications.sendMessage": CallAPI<
        Params.NotificationsSendMessageParams,
        Responses.NotificationsSendMessageResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.cancelSubscription)
     */
    "orders.cancelSubscription": CallAPI<
        Params.OrdersCancelSubscriptionParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Changes order status.
     *
     * [Documentation](https://dev.vk.com/method/orders.changeState)
     */
    "orders.changeState": CallAPI<
        Params.OrdersChangeStateParams,
        Responses.OrdersChangeStateResponse
    >
    /**
     * Returns a list of orders.
     *
     * [Documentation](https://dev.vk.com/method/orders.get)
     */
    "orders.get": CallAPIWithOptionalParams<
        Params.OrdersGetParams,
        Responses.OrdersGetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getAmount)
     */
    "orders.getAmount": CallAPI<
        Params.OrdersGetAmountParams,
        Responses.OrdersGetAmountResponse
    >
    /**
     * Returns information about orders by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/orders.getById)
     */
    "orders.getById": CallAPIWithOptionalParams<
        Params.OrdersGetByIdParams,
        Responses.OrdersGetByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getUserSubscriptionById)
     */
    "orders.getUserSubscriptionById": CallAPI<
        Params.OrdersGetUserSubscriptionByIdParams,
        Objects.VKOrdersSubscription
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/orders.getUserSubscriptions)
     */
    "orders.getUserSubscriptions": CallAPI<
        Params.OrdersGetUserSubscriptionsParams,
        Responses.OrdersGetUserSubscriptionsResponse
    >
    /**
     * Allows to clear the cache of particular 'external' pages which may be attached to VK posts.
     *
     * [Documentation](https://dev.vk.com/method/pages.clearCache)
     */
    "pages.clearCache": CallAPI<
        Params.PagesClearCacheParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns information about a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.get)
     */
    "pages.get": CallAPIWithOptionalParams<
        Params.PagesGetParams,
        Objects.VKPagesWikipageFull
    >
    /**
     * Returns a list of all previous versions of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.getHistory)
     */
    "pages.getHistory": CallAPI<
        Params.PagesGetHistoryParams,
        Responses.PagesGetHistoryResponse
    >
    /**
     * Returns a list of wiki pages in a group.
     *
     * [Documentation](https://dev.vk.com/method/pages.getTitles)
     */
    "pages.getTitles": CallAPIWithOptionalParams<
        Params.PagesGetTitlesParams,
        Responses.PagesGetTitlesResponse
    >
    /**
     * Returns the text of one of the previous versions of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.getVersion)
     */
    "pages.getVersion": CallAPI<
        Params.PagesGetVersionParams,
        Responses.PagesGetVersionResponse
    >
    /**
     * Returns HTML representation of the wiki markup.
     *
     * [Documentation](https://dev.vk.com/method/pages.parseWiki)
     */
    "pages.parseWiki": CallAPI<
        Params.PagesParseWikiParams,
        Responses.PagesParseWikiResponse
    >
    /**
     * Saves the text of a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.save)
     */
    "pages.save": CallAPIWithOptionalParams<
        Params.PagesSaveParams,
        Responses.PagesSaveResponse
    >
    /**
     * Saves modified read and edit access settings for a wiki page.
     *
     * [Documentation](https://dev.vk.com/method/pages.saveAccess)
     */
    "pages.saveAccess": CallAPI<
        Params.PagesSaveAccessParams,
        Responses.PagesSaveAccessResponse
    >
    /**
     * Confirms a tag on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.confirmTag)
     */
    "photos.confirmTag": CallAPI<
        Params.PhotosConfirmTagParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to copy a photo to the "Saved photos" album
     *
     * [Documentation](https://dev.vk.com/method/photos.copy)
     */
    "photos.copy": CallAPI<
        Params.PhotosCopyParams,
        Responses.PhotosCopyResponse
    >
    /**
     * Creates an empty photo album.
     *
     * [Documentation](https://dev.vk.com/method/photos.createAlbum)
     */
    "photos.createAlbum": CallAPI<
        Params.PhotosCreateAlbumParams,
        Objects.VKPhotosPhotoAlbumFull
    >
    /**
     * Adds a new comment on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.createComment)
     */
    "photos.createComment": CallAPI<
        Params.PhotosCreateCommentParams,
        Responses.PhotosCreateCommentResponse
    >
    /**
     * Deletes a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.delete)
     */
    "photos.delete": CallAPIWithOptionalParams<
        Params.PhotosDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a photo album belonging to the current user.
     *
     * [Documentation](https://dev.vk.com/method/photos.deleteAlbum)
     */
    "photos.deleteAlbum": CallAPI<
        Params.PhotosDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.deleteComment)
     */
    "photos.deleteComment": CallAPI<
        Params.PhotosDeleteCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Edits the caption of a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.edit)
     */
    "photos.edit": CallAPI<Params.PhotosEditParams, Responses.BaseOkResponse>
    /**
     * Edits information about a photo album.
     *
     * [Documentation](https://dev.vk.com/method/photos.editAlbum)
     */
    "photos.editAlbum": CallAPI<
        Params.PhotosEditAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.editComment)
     */
    "photos.editComment": CallAPI<
        Params.PhotosEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of a user's or community's photos.
     *
     * [Documentation](https://dev.vk.com/method/photos.get)
     */
    "photos.get": CallAPIWithOptionalParams<
        Params.PhotosGetParams,
        Responses.PhotosGetResponse
    >
    /**
     * Returns a list of a user's or community's photo albums.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAlbums)
     */
    "photos.getAlbums": CallAPIWithOptionalParams<
        Params.PhotosGetAlbumsParams,
        Responses.PhotosGetAlbumsResponse
    >
    /**
     * Returns the number of photo albums belonging to a user or community.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAlbumsCount)
     */
    "photos.getAlbumsCount": CallAPIWithOptionalParams<
        Params.PhotosGetAlbumsCountParams,
        Responses.PhotosGetAlbumsCountResponse
    >
    /**
     * Returns a list of photos belonging to a user or community, in reverse chronological order.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAll)
     */
    "photos.getAll": CallAPIWithOptionalParams<
        Params.PhotosGetAllParams,
        Responses.PhotosGetAllResponse
    >
    /**
     * Returns a list of comments on a specific photo album or all albums of the user sorted in reverse chronological order.
     *
     * [Documentation](https://dev.vk.com/method/photos.getAllComments)
     */
    "photos.getAllComments": CallAPIWithOptionalParams<
        Params.PhotosGetAllCommentsParams,
        Responses.PhotosGetAllCommentsResponse
    >
    /**
     * Returns information about photos by their IDs.
     *
     * [Documentation](https://dev.vk.com/method/photos.getById)
     */
    "photos.getById": CallAPI<
        Params.PhotosGetByIdParams,
        Responses.PhotosGetByIdResponse
    >
    /**
     * Returns an upload link for chat cover pictures.
     *
     * [Documentation](https://dev.vk.com/method/photos.getChatUploadServer)
     */
    "photos.getChatUploadServer": CallAPI<
        Params.PhotosGetChatUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of comments on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getComments)
     */
    "photos.getComments": {
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
    "photos.getMarketAlbumUploadServer": CallAPI<
        Params.PhotosGetMarketAlbumUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns the server address for photo upload in a private message for a user.
     *
     * [Documentation](https://dev.vk.com/method/photos.getMessagesUploadServer)
     */
    "photos.getMessagesUploadServer": CallAPIWithOptionalParams<
        Params.PhotosGetMessagesUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Returns a list of photos with tags that have not been viewed.
     *
     * [Documentation](https://dev.vk.com/method/photos.getNewTags)
     */
    "photos.getNewTags": CallAPIWithOptionalParams<
        Params.PhotosGetNewTagsParams,
        Responses.PhotosGetNewTagsResponse
    >
    /**
     * Returns the server address for owner cover upload.
     *
     * [Documentation](https://dev.vk.com/method/photos.getOwnerCoverPhotoUploadServer)
     */
    "photos.getOwnerCoverPhotoUploadServer": CallAPIWithOptionalParams<
        Params.PhotosGetOwnerCoverPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns an upload server address for a profile or community photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getOwnerPhotoUploadServer)
     */
    "photos.getOwnerPhotoUploadServer": CallAPIWithOptionalParams<
        Params.PhotosGetOwnerPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of tags on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.getTags)
     */
    "photos.getTags": CallAPI<
        Params.PhotosGetTagsParams,
        Responses.PhotosGetTagsResponse
    >
    /**
     * Returns the server address for photo upload.
     *
     * [Documentation](https://dev.vk.com/method/photos.getUploadServer)
     */
    "photos.getUploadServer": CallAPIWithOptionalParams<
        Params.PhotosGetUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Returns a list of photos in which a user is tagged.
     *
     * [Documentation](https://dev.vk.com/method/photos.getUserPhotos)
     */
    "photos.getUserPhotos": CallAPIWithOptionalParams<
        Params.PhotosGetUserPhotosParams,
        Responses.PhotosGetUserPhotosResponse
    >
    /**
     * Returns the server address for photo upload onto a user's wall.
     *
     * [Documentation](https://dev.vk.com/method/photos.getWallUploadServer)
     */
    "photos.getWallUploadServer": CallAPIWithOptionalParams<
        Params.PhotosGetWallUploadServerParams,
        Objects.VKPhotosPhotoUpload
    >
    /**
     * Makes a photo into an album cover.
     *
     * [Documentation](https://dev.vk.com/method/photos.makeCover)
     */
    "photos.makeCover": CallAPI<
        Params.PhotosMakeCoverParams,
        Responses.BaseOkResponse
    >
    /**
     * Moves a photo from one album to another.
     *
     * [Documentation](https://dev.vk.com/method/photos.move)
     */
    "photos.move": CallAPI<Params.PhotosMoveParams, Responses.BaseOkResponse>
    /**
     * Adds a tag on the photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.putTag)
     */
    "photos.putTag": CallAPI<
        Params.PhotosPutTagParams,
        Responses.PhotosPutTagResponse
    >
    /**
     * Removes a tag from a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.removeTag)
     */
    "photos.removeTag": CallAPI<
        Params.PhotosRemoveTagParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the album in the list of user albums.
     *
     * [Documentation](https://dev.vk.com/method/photos.reorderAlbums)
     */
    "photos.reorderAlbums": CallAPI<
        Params.PhotosReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the photo in the list of photos of the user album.
     *
     * [Documentation](https://dev.vk.com/method/photos.reorderPhotos)
     */
    "photos.reorderPhotos": CallAPI<
        Params.PhotosReorderPhotosParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.report)
     */
    "photos.report": CallAPI<
        Params.PhotosReportParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.reportComment)
     */
    "photos.reportComment": CallAPI<
        Params.PhotosReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a deleted photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.restore)
     */
    "photos.restore": CallAPI<
        Params.PhotosRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a deleted comment on a photo.
     *
     * [Documentation](https://dev.vk.com/method/photos.restoreComment)
     */
    "photos.restoreComment": CallAPI<
        Params.PhotosRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Saves photos after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.save)
     */
    "photos.save": CallAPIWithOptionalParams<
        Params.PhotosSaveParams,
        Responses.PhotosSaveResponse
    >
    /**
     * Saves market album photos after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveMarketAlbumPhoto)
     */
    "photos.saveMarketAlbumPhoto": CallAPI<
        Params.PhotosSaveMarketAlbumPhotoParams,
        Responses.PhotosSaveMarketAlbumPhotoResponse
    >
    /**
     * Saves a photo after being successfully uploaded. URL obtained with [vk.com/dev/photos.getMessagesUploadServer|photos.getMessagesUploadServer] method.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveMessagesPhoto)
     */
    "photos.saveMessagesPhoto": CallAPI<
        Params.PhotosSaveMessagesPhotoParams,
        Responses.PhotosSaveMessagesPhotoResponse
    >
    /**
     * Saves cover photo after successful uploading.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveOwnerCoverPhoto)
     */
    "photos.saveOwnerCoverPhoto": CallAPIWithOptionalParams<
        Params.PhotosSaveOwnerCoverPhotoParams,
        Responses.PhotosSaveOwnerCoverPhotoResponse
    >
    /**
     * Saves a profile or community photo. Upload URL can be got with the [vk.com/dev/photos.getOwnerPhotoUploadServer|photos.getOwnerPhotoUploadServer] method.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveOwnerPhoto)
     */
    "photos.saveOwnerPhoto": CallAPIWithOptionalParams<
        Params.PhotosSaveOwnerPhotoParams,
        Responses.PhotosSaveOwnerPhotoResponse
    >
    /**
     * Saves a photo to a user's or community's wall after being uploaded.
     *
     * [Documentation](https://dev.vk.com/method/photos.saveWallPhoto)
     */
    "photos.saveWallPhoto": CallAPI<
        Params.PhotosSaveWallPhotoParams,
        Responses.PhotosSaveWallPhotoResponse
    >
    /**
     * Returns a list of photos.
     *
     * [Documentation](https://dev.vk.com/method/photos.search)
     */
    "photos.search": CallAPIWithOptionalParams<
        Params.PhotosSearchParams,
        Responses.PhotosSearchResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/podcasts.searchPodcast)
     */
    "podcasts.searchPodcast": CallAPI<
        Params.PodcastsSearchPodcastParams,
        Responses.PodcastsSearchPodcastResponse
    >
    /**
     * Adds the current user's vote to the selected answer in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.addVote)
     */
    "polls.addVote": CallAPI<Params.PollsAddVoteParams, Objects.VKBaseBoolInt>
    /**
     * Creates polls that can be attached to the users' or communities' posts.
     *
     * [Documentation](https://dev.vk.com/method/polls.create)
     */
    "polls.create": CallAPIWithOptionalParams<
        Params.PollsCreateParams,
        Objects.VKPollsPoll
    >
    /**
     * Deletes the current user's vote from the selected answer in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.deleteVote)
     */
    "polls.deleteVote": CallAPI<
        Params.PollsDeleteVoteParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Edits created polls
     *
     * [Documentation](https://dev.vk.com/method/polls.edit)
     */
    "polls.edit": CallAPI<Params.PollsEditParams, Responses.BaseOkResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/polls.getBackgrounds)
     */
    "polls.getBackgrounds": CallAPIWithoutParams<Responses.PollsGetBackgroundsResponse>
    /**
     * Returns detailed information about a poll by its ID.
     *
     * [Documentation](https://dev.vk.com/method/polls.getById)
     */
    "polls.getById": CallAPI<
        Params.PollsGetByIdParams,
        Objects.VKPollsPollExtended
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/polls.getPhotoUploadServer)
     */
    "polls.getPhotoUploadServer": CallAPIWithOptionalParams<
        Params.PollsGetPhotoUploadServerParams,
        Objects.VKBaseUploadServer
    >
    /**
     * Returns a list of IDs of users who selected specific answers in the poll.
     *
     * [Documentation](https://dev.vk.com/method/polls.getVoters)
     */
    "polls.getVoters": {
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
    "polls.savePhoto": CallAPIWithOptionalParams<
        Params.PollsSavePhotoParams,
        Objects.VKPollsBackground
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.create)
     */
    "prettyCards.create": CallAPI<
        Params.PrettyCardsCreateParams,
        Responses.PrettyCardsCreateResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.delete)
     */
    "prettyCards.delete": CallAPI<
        Params.PrettyCardsDeleteParams,
        Responses.PrettyCardsDeleteResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.edit)
     */
    "prettyCards.edit": CallAPI<
        Params.PrettyCardsEditParams,
        Responses.PrettyCardsEditResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.get)
     */
    "prettyCards.get": CallAPI<
        Params.PrettyCardsGetParams,
        Responses.PrettyCardsGetResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.getById)
     */
    "prettyCards.getById": CallAPI<
        Params.PrettyCardsGetByIdParams,
        Responses.PrettyCardsGetByIdResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/prettyCards.getUploadURL)
     */
    "prettyCards.getUploadURL": CallAPIWithoutParams<Responses.PrettyCardsGetUploadURLResponse>
    /**
     * Allows the programmer to do a quick search for any substring.
     *
     * [Documentation](https://dev.vk.com/method/search.getHints)
     */
    "search.getHints": CallAPIWithOptionalParams<
        Params.SearchGetHintsParams,
        Responses.SearchGetHintsResponse
    >
    /**
     * Adds user activity information to an application
     *
     * [Documentation](https://dev.vk.com/method/secure.addAppEvent)
     */
    "secure.addAppEvent": CallAPI<
        Params.SecureAddAppEventParams,
        Responses.BaseOkResponse
    >
    /**
     * Checks the user authentication in 'IFrame' and 'Flash' apps using the 'access_token' parameter.
     *
     * [Documentation](https://dev.vk.com/method/secure.checkToken)
     */
    "secure.checkToken": CallAPIWithOptionalParams<
        Params.SecureCheckTokenParams,
        Objects.VKSecureTokenChecked
    >
    /**
     * Returns payment balance of the application in hundredth of a vote.
     *
     * [Documentation](https://dev.vk.com/method/secure.getAppBalance)
     */
    "secure.getAppBalance": CallAPIWithoutParams<Responses.SecureGetAppBalanceResponse>
    /**
     * Shows a list of SMS notifications sent by the application using [vk.com/dev/secure.sendSMSNotification|secure.sendSMSNotification] method.
     *
     * [Documentation](https://dev.vk.com/method/secure.getSMSHistory)
     */
    "secure.getSMSHistory": CallAPIWithOptionalParams<
        Params.SecureGetSMSHistoryParams,
        Responses.SecureGetSMSHistoryResponse
    >
    /**
     * Shows history of votes transaction between users and the application.
     *
     * [Documentation](https://dev.vk.com/method/secure.getTransactionsHistory)
     */
    "secure.getTransactionsHistory": CallAPIWithOptionalParams<
        Params.SecureGetTransactionsHistoryParams,
        Responses.SecureGetTransactionsHistoryResponse
    >
    /**
     * Returns one of the previously set game levels of one or more users in the application.
     *
     * [Documentation](https://dev.vk.com/method/secure.getUserLevel)
     */
    "secure.getUserLevel": CallAPI<
        Params.SecureGetUserLevelParams,
        Responses.SecureGetUserLevelResponse
    >
    /**
     * Opens the game achievement and gives the user a sticker
     *
     * [Documentation](https://dev.vk.com/method/secure.giveEventSticker)
     */
    "secure.giveEventSticker": CallAPI<
        Params.SecureGiveEventStickerParams,
        Responses.SecureGiveEventStickerResponse
    >
    /**
     * Sends notification to the user.
     *
     * [Documentation](https://dev.vk.com/method/secure.sendNotification)
     */
    "secure.sendNotification": CallAPI<
        Params.SecureSendNotificationParams,
        Responses.SecureSendNotificationResponse
    >
    /**
     * Sends 'SMS' notification to a user's mobile device.
     *
     * [Documentation](https://dev.vk.com/method/secure.sendSMSNotification)
     */
    "secure.sendSMSNotification": CallAPI<
        Params.SecureSendSMSNotificationParams,
        Responses.BaseOkResponse
    >
    /**
     * Sets a counter which is shown to the user in bold in the left menu.
     *
     * [Documentation](https://dev.vk.com/method/secure.setCounter)
     */
    "secure.setCounter": CallAPIWithOptionalParams<
        Params.SecureSetCounterParams,
        Objects.VKBaseBoolInt | Responses.SecureSetCounterArrayResponse
    >
    /**
     * Returns statistics of a community or an application.
     *
     * [Documentation](https://dev.vk.com/method/stats.get)
     */
    "stats.get": CallAPIWithOptionalParams<
        Params.StatsGetParams,
        Responses.StatsGetResponse
    >
    /**
     * Returns stats for a wall post.
     *
     * [Documentation](https://dev.vk.com/method/stats.getPostReach)
     */
    "stats.getPostReach": CallAPI<
        Params.StatsGetPostReachParams,
        Responses.StatsGetPostReachResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stats.trackVisitor)
     */
    "stats.trackVisitor": CallAPIWithOptionalParams<
        Params.StatsTrackVisitorParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns data required to show the status of a user or community.
     *
     * [Documentation](https://dev.vk.com/method/status.get)
     */
    "status.get": CallAPIWithOptionalParams<
        Params.StatusGetParams,
        Objects.VKStatusStatus
    >
    /**
     * Sets a new status for the current user.
     *
     * [Documentation](https://dev.vk.com/method/status.set)
     */
    "status.set": CallAPIWithOptionalParams<
        Params.StatusSetParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a value of variable with the name set by key parameter.
     *
     * [Documentation](https://dev.vk.com/method/storage.get)
     */
    "storage.get": CallAPIWithOptionalParams<
        Params.StorageGetParams,
        Responses.StorageGetResponse
    >
    /**
     * Returns the names of all variables.
     *
     * [Documentation](https://dev.vk.com/method/storage.getKeys)
     */
    "storage.getKeys": CallAPIWithOptionalParams<
        Params.StorageGetKeysParams,
        Responses.StorageGetKeysResponse
    >
    /**
     * Saves a value of variable with the name set by 'key' parameter.
     *
     * [Documentation](https://dev.vk.com/method/storage.set)
     */
    "storage.set": CallAPI<Params.StorageSetParams, Responses.BaseOkResponse>
    /**
     * Adds given sticker IDs to the list of user's favorite stickers
     *
     * [Documentation](https://dev.vk.com/method/store.addStickersToFavorite)
     */
    "store.addStickersToFavorite": CallAPI<
        Params.StoreAddStickersToFavoriteParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getFavoriteStickers)
     */
    "store.getFavoriteStickers": CallAPIWithoutParams<Responses.StoreGetFavoriteStickersResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getProducts)
     */
    "store.getProducts": CallAPIWithOptionalParams<
        Params.StoreGetProductsParams,
        Responses.StoreGetProductsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/store.getStickersKeywords)
     */
    "store.getStickersKeywords": CallAPIWithOptionalParams<
        Params.StoreGetStickersKeywordsParams,
        Responses.StoreGetStickersKeywordsResponse
    >
    /**
     * Removes given sticker IDs from the list of user's favorite stickers
     *
     * [Documentation](https://dev.vk.com/method/store.removeStickersFromFavorite)
     */
    "store.removeStickersFromFavorite": CallAPI<
        Params.StoreRemoveStickersFromFavoriteParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to hide stories from chosen sources from current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.banOwner)
     */
    "stories.banOwner": CallAPI<
        Params.StoriesBanOwnerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to delete story.
     *
     * [Documentation](https://dev.vk.com/method/stories.delete)
     */
    "stories.delete": CallAPIWithOptionalParams<
        Params.StoriesDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns stories available for current user.
     *
     * [Documentation](https://dev.vk.com/method/stories.get)
     */
    "stories.get": CallAPIWithOptionalParams<
        Params.StoriesGetParams,
        Responses.StoriesGetV5113Response
    >
    /**
     * Returns list of sources hidden from current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.getBanned)
     */
    "stories.getBanned": {
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
    "stories.getById": CallAPI<
        Params.StoriesGetByIdParams,
        Responses.StoriesGetByIdExtendedResponse
    >
    /**
     * Returns URL for uploading a story with photo.
     *
     * [Documentation](https://dev.vk.com/method/stories.getPhotoUploadServer)
     */
    "stories.getPhotoUploadServer": CallAPIWithOptionalParams<
        Params.StoriesGetPhotoUploadServerParams,
        Responses.StoriesGetPhotoUploadServerResponse
    >
    /**
     * Returns replies to the story.
     *
     * [Documentation](https://dev.vk.com/method/stories.getReplies)
     */
    "stories.getReplies": CallAPI<
        Params.StoriesGetRepliesParams,
        Responses.StoriesGetV5113Response
    >
    /**
     * Returns stories available for current user.
     *
     * [Documentation](https://dev.vk.com/method/stories.getStats)
     */
    "stories.getStats": CallAPI<
        Params.StoriesGetStatsParams,
        Objects.VKStoriesStoryStats
    >
    /**
     * Allows to receive URL for uploading story with video.
     *
     * [Documentation](https://dev.vk.com/method/stories.getVideoUploadServer)
     */
    "stories.getVideoUploadServer": CallAPIWithOptionalParams<
        Params.StoriesGetVideoUploadServerParams,
        Responses.StoriesGetVideoUploadServerResponse
    >
    /**
     * Returns a list of story viewers.
     *
     * [Documentation](https://dev.vk.com/method/stories.getViewers)
     */
    "stories.getViewers": CallAPI<
        Params.StoriesGetViewersParams,
        Responses.StoriesGetViewersExtendedV5115Response
    >
    /**
     * Hides all replies in the last 24 hours from the user to current user's stories.
     *
     * [Documentation](https://dev.vk.com/method/stories.hideAllReplies)
     */
    "stories.hideAllReplies": CallAPI<
        Params.StoriesHideAllRepliesParams,
        Responses.BaseOkResponse
    >
    /**
     * Hides the reply to the current user's story.
     *
     * [Documentation](https://dev.vk.com/method/stories.hideReply)
     */
    "stories.hideReply": CallAPI<
        Params.StoriesHideReplyParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.save)
     */
    "stories.save": CallAPIWithOptionalParams<
        Params.StoriesSaveParams,
        Responses.StoriesSaveResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.search)
     */
    "stories.search": CallAPIWithOptionalParams<
        Params.StoriesSearchParams,
        Responses.StoriesGetV5113Response
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/stories.sendInteraction)
     */
    "stories.sendInteraction": CallAPI<
        Params.StoriesSendInteractionParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to show stories from hidden sources in current user's feed.
     *
     * [Documentation](https://dev.vk.com/method/stories.unbanOwner)
     */
    "stories.unbanOwner": CallAPI<
        Params.StoriesUnbanOwnerParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to receive data for the connection to Streaming API.
     *
     * [Documentation](https://dev.vk.com/method/streaming.getServerUrl)
     */
    "streaming.getServerUrl": CallAPIWithoutParams<Responses.StreamingGetServerUrlResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/streaming.getStats)
     */
    "streaming.getStats": CallAPIWithOptionalParams<
        Params.StreamingGetStatsParams,
        Responses.StreamingGetStatsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/streaming.getStem)
     */
    "streaming.getStem": CallAPI<
        Params.StreamingGetStemParams,
        Responses.StreamingGetStemResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/translations.translate)
     */
    "translations.translate": CallAPI<
        Params.TranslationsTranslateParams,
        Responses.TranslationsTranslateResponse
    >
    /**
     * Returns detailed information on users.
     *
     * [Documentation](https://dev.vk.com/method/users.get)
     */
    "users.get": CallAPIWithOptionalParams<
        Params.UsersGetParams,
        Responses.UsersGetResponse
    >
    /**
     * Returns a list of IDs of followers of the user in question, sorted by date added, most recent first.
     *
     * [Documentation](https://dev.vk.com/method/users.getFollowers)
     */
    "users.getFollowers": {
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
    "users.getSubscriptions": {
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
    "users.report": CallAPI<Params.UsersReportParams, Responses.BaseOkResponse>
    /**
     * Returns a list of users matching the search criteria.
     *
     * [Documentation](https://dev.vk.com/method/users.search)
     */
    "users.search": CallAPIWithOptionalParams<
        Params.UsersSearchParams,
        Responses.UsersSearchResponse
    >
    /**
     * Checks whether a link is blocked in VK.
     *
     * [Documentation](https://dev.vk.com/method/utils.checkLink)
     */
    "utils.checkLink": CallAPI<
        Params.UtilsCheckLinkParams,
        Objects.VKUtilsLinkChecked
    >
    /**
     * Deletes shortened link from user's list.
     *
     * [Documentation](https://dev.vk.com/method/utils.deleteFromLastShortened)
     */
    "utils.deleteFromLastShortened": CallAPI<
        Params.UtilsDeleteFromLastShortenedParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of user's shortened links.
     *
     * [Documentation](https://dev.vk.com/method/utils.getLastShortenedLinks)
     */
    "utils.getLastShortenedLinks": CallAPIWithOptionalParams<
        Params.UtilsGetLastShortenedLinksParams,
        Responses.UtilsGetLastShortenedLinksResponse
    >
    /**
     * Returns stats data for shortened link.
     *
     * [Documentation](https://dev.vk.com/method/utils.getLinkStats)
     */
    "utils.getLinkStats": {
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
    "utils.getServerTime": CallAPIWithoutParams<Responses.UtilsGetServerTimeResponse>
    /**
     * Allows to receive a link shortened via vk.cc.
     *
     * [Documentation](https://dev.vk.com/method/utils.getShortLink)
     */
    "utils.getShortLink": CallAPI<
        Params.UtilsGetShortLinkParams,
        Objects.VKUtilsShortLink
    >
    /**
     * Detects a type of object (e.g., user, community, application) and its ID by screen name.
     *
     * [Documentation](https://dev.vk.com/method/utils.resolveScreenName)
     */
    "utils.resolveScreenName": CallAPI<
        Params.UtilsResolveScreenNameParams,
        Objects.VKUtilsDomainResolved
    >
    /**
     * Adds a video to a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.add)
     */
    "video.add": CallAPI<Params.VideoAddParams, Responses.BaseOkResponse>
    /**
     * Creates an empty album for videos.
     *
     * [Documentation](https://dev.vk.com/method/video.addAlbum)
     */
    "video.addAlbum": CallAPIWithOptionalParams<
        Params.VideoAddAlbumParams,
        Responses.VideoAddAlbumResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.addToAlbum)
     */
    "video.addToAlbum": CallAPI<
        Params.VideoAddToAlbumParams,
        Responses.BaseOkResponse | Responses.VideoChangeVideoAlbumsResponse
    >
    /**
     * Adds a new comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.createComment)
     */
    "video.createComment": CallAPI<
        Params.VideoCreateCommentParams,
        Responses.VideoCreateCommentResponse
    >
    /**
     * Deletes a video from a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.delete)
     */
    "video.delete": CallAPI<Params.VideoDeleteParams, Responses.BaseOkResponse>
    /**
     * Deletes a video album.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteAlbum)
     */
    "video.deleteAlbum": CallAPI<
        Params.VideoDeleteAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteComment)
     */
    "video.deleteComment": CallAPI<
        Params.VideoDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a thread on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.deleteThread)
     */
    "video.deleteThread": CallAPI<
        Params.VideoDeleteThreadParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits information about a video on a user or community page.
     *
     * [Documentation](https://dev.vk.com/method/video.edit)
     */
    "video.edit": CallAPI<Params.VideoEditParams, Responses.VideoEditResponse>
    /**
     * Edits the title of a video album.
     *
     * [Documentation](https://dev.vk.com/method/video.editAlbum)
     */
    "video.editAlbum": CallAPI<
        Params.VideoEditAlbumParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits the text of a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.editComment)
     */
    "video.editComment": CallAPI<
        Params.VideoEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns detailed information about videos.
     *
     * [Documentation](https://dev.vk.com/method/video.get)
     */
    "video.get": CallAPIWithOptionalParams<
        Params.VideoGetParams,
        Responses.VideoGetResponse
    >
    /**
     * Returns video album info
     *
     * [Documentation](https://dev.vk.com/method/video.getAlbumById)
     */
    "video.getAlbumById": CallAPI<
        Params.VideoGetAlbumByIdParams,
        Objects.VKVideoVideoAlbumFull
    >
    /**
     * Returns a list of video albums owned by a user or community.
     *
     * [Documentation](https://dev.vk.com/method/video.getAlbums)
     */
    "video.getAlbums": {
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
    "video.getAlbumsByVideo": {
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
    "video.getComments": {
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
    "video.getLongPollServer": CallAPI<
        Params.VideoGetLongPollServerParams,
        Responses.VideoGetLongPollServerResponse
    >
    /**
     * Returns oEmbed player to video
     *
     * [Documentation](https://dev.vk.com/method/video.getOembed)
     */
    "video.getOembed": CallAPI<
        Params.VideoGetOembedParams,
        Responses.VideoGetOembedResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.getThumbUploadUrl)
     */
    "video.getThumbUploadUrl": CallAPI<
        Params.VideoGetThumbUploadUrlParams,
        Responses.VideoGetThumbUploadUrlResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.liveGetCategories)
     */
    "video.liveGetCategories": CallAPIWithoutParams<Responses.VideoLiveGetCategoriesResponse>
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.removeFromAlbum)
     */
    "video.removeFromAlbum": CallAPI<
        Params.VideoRemoveFromAlbumParams,
        Responses.BaseOkResponse | Responses.VideoChangeVideoAlbumsResponse
    >
    /**
     * Reorders the album in the list of user video albums.
     *
     * [Documentation](https://dev.vk.com/method/video.reorderAlbums)
     */
    "video.reorderAlbums": CallAPI<
        Params.VideoReorderAlbumsParams,
        Responses.BaseOkResponse
    >
    /**
     * Reorders the video in the video album.
     *
     * [Documentation](https://dev.vk.com/method/video.reorderVideos)
     */
    "video.reorderVideos": CallAPI<
        Params.VideoReorderVideosParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a video.
     *
     * [Documentation](https://dev.vk.com/method/video.report)
     */
    "video.report": CallAPI<Params.VideoReportParams, Responses.BaseOkResponse>
    /**
     * Reports (submits a complaint about) a comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.reportComment)
     */
    "video.reportComment": CallAPI<
        Params.VideoReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a previously deleted video.
     *
     * [Documentation](https://dev.vk.com/method/video.restore)
     */
    "video.restore": CallAPI<
        Params.VideoRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a previously deleted comment on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.restoreComment)
     */
    "video.restoreComment": CallAPI<
        Params.VideoRestoreCommentParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Restores a deleted thread on a video.
     *
     * [Documentation](https://dev.vk.com/method/video.restoreThread)
     */
    "video.restoreThread": CallAPI<
        Params.VideoRestoreThreadParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a server address (required for upload) and video data.
     *
     * [Documentation](https://dev.vk.com/method/video.save)
     */
    "video.save": CallAPIWithOptionalParams<
        Params.VideoSaveParams,
        Objects.VKVideoSaveResult
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.saveUploadedThumb)
     */
    "video.saveUploadedThumb": CallAPI<
        Params.VideoSaveUploadedThumbParams,
        Responses.VideoSaveUploadedThumbResponse
    >
    /**
     * Returns a list of videos under the set search criterion.
     *
     * [Documentation](https://dev.vk.com/method/video.search)
     */
    "video.search": {
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
    "video.startStreaming": CallAPIWithOptionalParams<
        Params.VideoStartStreamingParams,
        Responses.VideoStartStreamingResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/video.stopStreaming)
     */
    "video.stopStreaming": CallAPIWithOptionalParams<
        Params.VideoStopStreamingParams,
        Responses.VideoStopStreamingResponse
    >
    /**
     * Unpin comment of a video.
     *
     * [Documentation](https://dev.vk.com/method/video.unpinComment)
     */
    "video.unpinComment": CallAPI<
        Params.VideoUnpinCommentParams,
        Responses.BaseOkResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.checkCopyrightLink)
     */
    "wall.checkCopyrightLink": CallAPI<
        Params.WallCheckCopyrightLinkParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.closeComments)
     */
    "wall.closeComments": CallAPI<
        Params.WallCloseCommentsParams,
        Objects.VKBaseBoolInt
    >
    /**
     * Adds a comment to a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.createComment)
     */
    "wall.createComment": CallAPI<
        Params.WallCreateCommentParams,
        Responses.WallCreateCommentResponse
    >
    /**
     * Deletes a post from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.delete)
     */
    "wall.delete": CallAPIWithOptionalParams<
        Params.WallDeleteParams,
        Responses.BaseOkResponse
    >
    /**
     * Deletes a comment on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.deleteComment)
     */
    "wall.deleteComment": CallAPI<
        Params.WallDeleteCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.edit)
     */
    "wall.edit": CallAPI<Params.WallEditParams, Responses.WallEditResponse>
    /**
     * Allows to edit hidden post.
     *
     * [Documentation](https://dev.vk.com/method/wall.editAdsStealth)
     */
    "wall.editAdsStealth": CallAPI<
        Params.WallEditAdsStealthParams,
        Responses.BaseOkResponse
    >
    /**
     * Edits a comment on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.editComment)
     */
    "wall.editComment": CallAPI<
        Params.WallEditCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Returns a list of posts on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.get)
     */
    "wall.get": {
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
    "wall.getById": {
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
    "wall.getComment": {
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
    "wall.getComments": {
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
    "wall.getReposts": CallAPIWithOptionalParams<
        Params.WallGetRepostsParams,
        Responses.WallGetRepostsResponse
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.openComments)
     */
    "wall.openComments": CallAPI<
        Params.WallOpenCommentsParams,
        Objects.VKBaseBoolInt
    >
    /**
     *
     *
     * [Documentation](https://dev.vk.com/method/wall.parseAttachedLink)
     */
    "wall.parseAttachedLink": CallAPI<
        Params.WallParseAttachedLinkParams,
        Responses.WallParseAttachedLinkResponse
    >
    /**
     * Pins the post on wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.pin)
     */
    "wall.pin": CallAPI<Params.WallPinParams, Responses.BaseOkResponse>
    /**
     * Adds a new post on a user wall or community wall. Can also be used to publish suggested or scheduled posts.
     *
     * [Documentation](https://dev.vk.com/method/wall.post)
     */
    "wall.post": CallAPIWithOptionalParams<
        Params.WallPostParams,
        Responses.WallPostResponse
    >
    /**
     * Allows to create hidden post which will not be shown on the community's wall and can be used for creating an ad with type "Community post".
     *
     * [Documentation](https://dev.vk.com/method/wall.postAdsStealth)
     */
    "wall.postAdsStealth": CallAPI<
        Params.WallPostAdsStealthParams,
        Responses.WallPostAdsStealthResponse
    >
    /**
     * Reports (submits a complaint about) a comment on a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.reportComment)
     */
    "wall.reportComment": CallAPI<
        Params.WallReportCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Reports (submits a complaint about) a post on a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.reportPost)
     */
    "wall.reportPost": CallAPI<
        Params.WallReportPostParams,
        Responses.BaseOkResponse
    >
    /**
     * Reposts (copies) an object to a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.repost)
     */
    "wall.repost": CallAPI<
        Params.WallRepostParams,
        Responses.WallRepostResponse
    >
    /**
     * Restores a post deleted from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.restore)
     */
    "wall.restore": CallAPIWithOptionalParams<
        Params.WallRestoreParams,
        Responses.BaseOkResponse
    >
    /**
     * Restores a comment deleted from a user wall or community wall.
     *
     * [Documentation](https://dev.vk.com/method/wall.restoreComment)
     */
    "wall.restoreComment": CallAPI<
        Params.WallRestoreCommentParams,
        Responses.BaseOkResponse
    >
    /**
     * Allows to search posts on user or community walls.
     *
     * [Documentation](https://dev.vk.com/method/wall.search)
     */
    "wall.search": {
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
    "wall.unpin": CallAPI<Params.WallUnpinParams, Responses.BaseOkResponse>
    /**
     * Gets a list of comments for the page added through the [vk.com/dev/Comments|Comments widget].
     *
     * [Documentation](https://dev.vk.com/method/widgets.getComments)
     */
    "widgets.getComments": CallAPIWithOptionalParams<
        Params.WidgetsGetCommentsParams,
        Responses.WidgetsGetCommentsResponse
    >
    /**
     * Gets a list of application/site pages where the [vk.com/dev/Comments|Comments widget] or [vk.com/dev/Like|Like widget] is installed.
     *
     * [Documentation](https://dev.vk.com/method/widgets.getPages)
     */
    "widgets.getPages": CallAPIWithOptionalParams<
        Params.WidgetsGetPagesParams,
        Responses.WidgetsGetPagesResponse
    >
}
