/**
 * @module
 *
 * This module contains params for VK API methods with the `Params` postfix
 *
 * @example import params
 * ```typescript
 * import { UsersGetParams } from "@vkraft/types/params";
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 18:30:47 using [types](https://github.com/vkraft/types) generator
 */

import type { APIMethods } from "./methods"
import type * as Objects from "./objects"

/**
 * Params for {@link APIMethodsAccount["ban"] | account.ban} method
 */
export interface AccountBanParams {
    owner_id?: number
}

/**
 * Params for {@link APIMethodsAccount["changePassword"] | account.changePassword} method
 */
export interface AccountChangePasswordParams {
    /**
     * Session id received after the [vk.com/dev/auth.restore|auth.restore] method is executed. (If the password is changed right after the access was restored)
     */
    restore_sid?: string
    /**
     * Hash received after a successful OAuth authorization with a code got by SMS. (If the password is changed right after the access was restored)
     */
    change_password_hash?: string
    /**
     * Current user password.
     */
    old_password?: string
    /**
     * New password that will be set as a current
     */
    new_password: string
}

/**
 * Params for {@link APIMethodsAccount["getActiveOffers"] | account.getActiveOffers} method
 */
export interface AccountGetActiveOffersParams {
    offset?: number
    /**
     * Number of results to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsAccount["getAppPermissions"] | account.getAppPermissions} method
 */
export interface AccountGetAppPermissionsParams {
    /**
     * User ID whose settings information shall be got. By default: current user.
     */
    user_id?: number
}

/**
 * Params for {@link APIMethodsAccount["getBanned"] | account.getBanned} method
 */
export interface AccountGetBannedParams {
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of results to return.
     */
    count?: number
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsAccount["getCounters"] | account.getCounters} method
 */
export interface AccountGetCountersParams {
    /**
     * Counters to be returned.
     */
    filter?: Objects.VKAccountCountersFilter[]
}

export type AccountGetInfoFields =
    | "country"
    | "https_required"
    | "own_posts_default"
    | "no_wall_replies"
    | "intro"
    | "lang"
    | "audio_autoplay"

/**
 * Params for {@link APIMethodsAccount["getInfo"] | account.getInfo} method
 */
export interface AccountGetInfoParams {
    /**
     * Fields to return. Possible values: *'country' - user country,, *'https_required' - is "HTTPS only" option enabled,, *'own_posts_default' - is "Show my posts only" option is enabled,, *'no_wall_replies' - are wall replies disabled or not,, *'intro' - is intro passed by user or not,, *'lang' - user language. By default: all.
     */
    fields?: AccountGetInfoFields[]
}

/**
 * Params for {@link APIMethodsAccount["getPushSettings"] | account.getPushSettings} method
 */
export interface AccountGetPushSettingsParams {
    /**
     * Unique device ID.
     */
    device_id?: string
}

/**
 * Params for {@link APIMethodsAccount["registerDevice"] | account.registerDevice} method
 */
export interface AccountRegisterDeviceParams {
    /**
     * Device token used to send notifications. (for mpns, the token shall be URL for sending of notifications)
     */
    token: string
    /**
     * String name of device model.
     */
    device_model?: string
    /**
     * Device year.
     */
    device_year?: number
    /**
     * Unique device ID.
     */
    device_id: string
    /**
     * String version of device operating system.
     */
    system_version?: string
    /**
     * Push settings in a [vk.com/dev/push_settings|special format].
     */
    settings?: string
    sandbox?: boolean | 0 | 1
    pushes_granted?: boolean | 0 | 1
}

/**
 * - `0` — undefined
 * - `1` — female
 * - `2` — male
 */
export type AccountSaveProfileInfoSex = 0 | 1 | 2
/**
 * - `0` — not specified
 * - `1` — single
 * - `2` — relationship
 * - `3` — engaged
 * - `4` — married
 * - `5` — complicated
 * - `6` — actively searching
 * - `7` — in love
 * - `8` — in a civil union
 */
export type AccountSaveProfileInfoRelation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
/**
 * - `0` — hide
 * - `1` — show
 * - `2` — hide year
 */
export type AccountSaveProfileInfoBdateVisibility = 0 | 1 | 2

/**
 * Params for {@link APIMethodsAccount["saveProfileInfo"] | account.saveProfileInfo} method
 */
export interface AccountSaveProfileInfoParams {
    /**
     * User first name.
     */
    first_name?: string
    /**
     * User last name.
     */
    last_name?: string
    /**
     * User maiden name (female only)
     */
    maiden_name?: string
    /**
     * User screen name.
     */
    screen_name?: string
    /**
     * ID of the name change request to be canceled. If this parameter is sent, all the others are ignored.
     */
    cancel_request_id?: number
    /**
     * User sex. Possible values: , * '1' - female,, * '2' - male.
     */
    sex?: AccountSaveProfileInfoSex
    /**
     * User relationship status. Possible values: , * '1' - single,, * '2' - in a relationship,, * '3' - engaged,, * '4' - married,, * '5' - it's complicated,, * '6' - actively searching,, * '7' - in love,, * '0' - not specified.
     */
    relation?: AccountSaveProfileInfoRelation
    /**
     * ID of the relationship partner.
     */
    relation_partner_id?: number
    /**
     * User birth date, format: DD.MM.YYYY.
     */
    bdate?: string
    /**
     * Birth date visibility. Returned values: , * '1' - show birth date,, * '2' - show only month and day,, * '0' - hide birth date.
     */
    bdate_visibility?: AccountSaveProfileInfoBdateVisibility
    /**
     * User home town.
     */
    home_town?: string
    /**
     * User country.
     */
    country_id?: number
    /**
     * User city.
     */
    city_id?: number
    /**
     * Status text.
     */
    status?: string
}

export type AccountSetInfoName =
    | "audio_autoplay"
    | "intro"
    | "no_wall_replies"
    | "own_posts_default"

/**
 * Params for {@link APIMethodsAccount["setInfo"] | account.setInfo} method
 */
export interface AccountSetInfoParams {
    /**
     * Setting name.
     */
    name?: AccountSetInfoName
    /**
     * Setting value.
     */
    value?: string
}

/**
 * Params for {@link APIMethodsAccount["setOnline"] | account.setOnline} method
 */
export interface AccountSetOnlineParams {
    /**
     * '1' if videocalls are available for current device.
     */
    voip?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsAccount["setPushSettings"] | account.setPushSettings} method
 */
export interface AccountSetPushSettingsParams {
    /**
     * Unique device ID.
     */
    device_id: string
    /**
     * Push settings in a [vk.com/dev/push_settings|special format].
     */
    settings?: string
    /**
     * Notification key.
     */
    key?: string
    /**
     * New value for the key in a [vk.com/dev/push_settings|special format].
     */
    value?: string[]
}

/**
 * Params for {@link APIMethodsAccount["setSilenceMode"] | account.setSilenceMode} method
 */
export interface AccountSetSilenceModeParams {
    /**
     * Unique device ID.
     */
    device_id?: string
    /**
     * Time in seconds for what notifications should be disabled. '-1' to disable forever.
     */
    time?: number
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * '1' - to enable sound in this dialog, '0' - to disable sound. Only if 'peer_id' contains user or community ID.
     */
    sound?: number
}

/**
 * Params for {@link APIMethodsAccount["unban"] | account.unban} method
 */
export interface AccountUnbanParams {
    owner_id?: number
}

/**
 * Params for {@link APIMethodsAccount["unregisterDevice"] | account.unregisterDevice} method
 */
export interface AccountUnregisterDeviceParams {
    /**
     * Unique device ID.
     */
    device_id?: string
    sandbox?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsAds["addOfficeUsers"] | ads.addOfficeUsers} method
 */
export interface AdsAddOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
     */
    data: string
}

export type AdsCheckLinkLinkType =
    | "application"
    | "community"
    | "mobile_app"
    | "post"
    | "site"
    | "user"
    | "user_post"
    | "video"

/**
 * Params for {@link APIMethodsAds["checkLink"] | ads.checkLink} method
 */
export interface AdsCheckLinkParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Object type: *'community' - community,, *'post' - community post,, *'application' - VK application,, *'video' - video,, *'site' - external site.
     */
    link_type: AdsCheckLinkLinkType
    /**
     * Object URL.
     */
    link_url: string
    /**
     * Campaign ID
     */
    campaign_id?: number
}

/**
 * Params for {@link APIMethodsAds["createAds"] | ads.createAds} method
 */
export interface AdsCreateAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe created ads. Description of 'ad_specification' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["createCampaigns"] | ads.createCampaigns} method
 */
export interface AdsCreateCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'campaign_specification' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["createClients"] | ads.createClients} method
 */
export interface AdsCreateClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe created campaigns. Description of 'client_specification' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["createLookalikeRequest"] | ads.createLookalikeRequest} method
 */
export interface AdsCreateLookalikeRequestParams {
    account_id: number
    client_id?: number
    source_type: string
    retargeting_group_id?: number
}

/**
 * Params for {@link APIMethodsAds["createTargetGroup"] | ads.createTargetGroup} method
 */
export interface AdsCreateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
     */
    client_id?: number
    /**
     * Name of the target group - a string up to 64 characters long.
     */
    name: string
    /**
     * 'For groups with auditory created with pixel code only.', , Number of days after that users will be automatically removed from the group.
     */
    lifetime: number
    target_pixel_id?: number
    target_pixel_rules?: string
}

/**
 * Params for {@link APIMethodsAds["createTargetPixel"] | ads.createTargetPixel} method
 */
export interface AdsCreateTargetPixelParams {
    account_id: number
    client_id?: number
    name: string
    domain?: string
    category_id: number
}

/**
 * Params for {@link APIMethodsAds["deleteAds"] | ads.deleteAds} method
 */
export interface AdsDeleteAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array with ad IDs.
     */
    ids: string
}

/**
 * Params for {@link APIMethodsAds["deleteCampaigns"] | ads.deleteCampaigns} method
 */
export interface AdsDeleteCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array with IDs of deleted campaigns.
     */
    ids: string
}

/**
 * Params for {@link APIMethodsAds["deleteClients"] | ads.deleteClients} method
 */
export interface AdsDeleteClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array with IDs of deleted clients.
     */
    ids: string
}

/**
 * Params for {@link APIMethodsAds["deleteTargetGroup"] | ads.deleteTargetGroup} method
 */
export interface AdsDeleteTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number
    /**
     * Group ID.
     */
    target_group_id: number
}

/**
 * Params for {@link APIMethodsAds["deleteTargetPixel"] | ads.deleteTargetPixel} method
 */
export interface AdsDeleteTargetPixelParams {
    account_id: number
    client_id?: number
    target_pixel_id: number
}

/**
 * Params for {@link APIMethodsAds["getAds"] | ads.getAds} method
 */
export interface AdsGetAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Available and required for advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number
    /**
     * Flag that specifies whether archived ads shall be shown: *0 - show only active ads,, *1 - show all ads.
     */
    include_deleted?: boolean | 0 | 1
    /**
     * Flag that specifies whether to show only archived ads: *0 - show all ads,, *1 - show only archived ads. Available when include_deleted flag is *1
     */
    only_deleted?: boolean | 0 | 1
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string
    /**
     * Limit of number of returned ads. Used only if ad_ids parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number
    /**
     * Offset. Used in the same cases as 'limit' parameter.
     */
    offset?: number
}

/**
 * Params for {@link APIMethodsAds["getAdsLayout"] | ads.getAdsLayout} method
 */
export interface AdsGetAdsLayoutParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number
    /**
     * Flag that specifies whether archived ads shall be shown. *0 - show only active ads,, *1 - show all ads.
     */
    include_deleted?: boolean | 0 | 1
    /**
     * Flag that specifies whether to show only archived ads: *0 - show all ads,, *1 - show only archived ads. Available when include_deleted flag is *1
     */
    only_deleted?: boolean | 0 | 1
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string
    /**
     * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number
    /**
     * Offset. Used in the same cases as 'limit' parameter.
     */
    offset?: number
}

/**
 * Params for {@link APIMethodsAds["getAdsTargeting"] | ads.getAdsTargeting} method
 */
export interface AdsGetAdsTargetingParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'For advertising agencies.' ID of the client ads are retrieved from.
     */
    client_id?: number
    /**
     * flag that specifies whether archived ads shall be shown: *0 - show only active ads,, *1 - show all ads.
     */
    include_deleted?: boolean | 0 | 1
    only_deleted?: boolean | 0 | 1
    /**
     * Filter by advertising campaigns. Serialized JSON array with campaign IDs. If the parameter is null, ads of all campaigns will be shown.
     */
    campaign_ids?: string
    /**
     * Filter by ads. Serialized JSON array with ad IDs. If the parameter is null, all ads will be shown.
     */
    ad_ids?: string
    /**
     * Limit of number of returned ads. Used only if 'ad_ids' parameter is null, and 'campaign_ids' parameter contains ID of only one campaign.
     */
    limit?: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
}

/**
 * Params for {@link APIMethodsAds["getBudget"] | ads.getBudget} method
 */
export interface AdsGetBudgetParams {
    /**
     * Advertising account ID.
     */
    account_id: number
}

export type AdsGetCampaignsFields = "ads_count"

/**
 * Params for {@link APIMethodsAds["getCampaigns"] | ads.getCampaigns} method
 */
export interface AdsGetCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'For advertising agencies'. ID of the client advertising campaigns are retrieved from.
     */
    client_id?: number
    /**
     * Flag that specifies whether archived ads shall be shown. *0 - show only active campaigns,, *1 - show all campaigns.
     */
    include_deleted?: boolean | 0 | 1
    /**
     * Filter of advertising campaigns to show. Serialized JSON array with campaign IDs. Only campaigns that exist in 'campaign_ids' and belong to the specified advertising account will be shown. If the parameter is null, all campaigns will be shown.
     */
    campaign_ids?: string
    fields?: AdsGetCampaignsFields[]
}

/**
 * Params for {@link APIMethodsAds["getCategories"] | ads.getCategories} method
 */
export interface AdsGetCategoriesParams {
    /**
     * Language. The full list of supported languages is [vk.com/dev/api_requests|here].
     */
    lang?: string
}

/**
 * Params for {@link APIMethodsAds["getClients"] | ads.getClients} method
 */
export interface AdsGetClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
}

export type AdsGetDemographicsIdsType = "ad" | "campaign"
export type AdsGetDemographicsPeriod = "day" | "month" | "overall"

/**
 * Params for {@link APIMethodsAds["getDemographics"] | ads.getDemographics} method
 */
export interface AdsGetDemographicsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Type of requested objects listed in 'ids' parameter: *ad - ads,, *campaign - campaigns.
     */
    ids_type: AdsGetDemographicsIdsType
    /**
     * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string
    /**
     * Data grouping by dates: *day - statistics by days,, *month - statistics by months,, *overall - overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: AdsGetDemographicsPeriod
    /**
     * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 - September 27, 2011, **0 - day it was created on,, *month: YYYY-MM, example: 2011-09 - September 2011, **0 - month it was created in,, *overall: 0.
     */
    date_from: string
    /**
     * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 - September 27, 2011, **0 - current day,, *month: YYYY-MM, example: 2011-09 - September 2011, **0 - current month,, *overall: 0.
     */
    date_to: string
}

/**
 * Params for {@link APIMethodsAds["getFloodStats"] | ads.getFloodStats} method
 */
export interface AdsGetFloodStatsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
}

/**
 * Params for {@link APIMethodsAds["getLookalikeRequests"] | ads.getLookalikeRequests} method
 */
export interface AdsGetLookalikeRequestsParams {
    account_id: number
    client_id?: number
    requests_ids?: string
    offset?: number
    limit?: number
    sort_by?: string
}

/**
 * Params for {@link APIMethodsAds["getMusicians"] | ads.getMusicians} method
 */
export interface AdsGetMusiciansParams {
    artist_name: string
}

/**
 * Params for {@link APIMethodsAds["getMusiciansByIds"] | ads.getMusiciansByIds} method
 */
export interface AdsGetMusiciansByIdsParams {
    ids: number[]
}

/**
 * Params for {@link APIMethodsAds["getOfficeUsers"] | ads.getOfficeUsers} method
 */
export interface AdsGetOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number
}

export type AdsGetPostsReachIdsType = "ad" | "campaign"

/**
 * Params for {@link APIMethodsAds["getPostsReach"] | ads.getPostsReach} method
 */
export interface AdsGetPostsReachParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Type of requested objects listed in 'ids' parameter: *ad - ads,, *campaign - campaigns.
     */
    ids_type: AdsGetPostsReachIdsType
    /**
     * IDs requested ads or campaigns, separated with a comma, depending on the value set in 'ids_type'. Maximum 100 objects.
     */
    ids: string
}

/**
 * Params for {@link APIMethodsAds["getRejectionReason"] | ads.getRejectionReason} method
 */
export interface AdsGetRejectionReasonParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Ad ID.
     */
    ad_id: number
}

export type AdsGetStatisticsIdsType = "ad" | "campaign" | "client" | "office"
export type AdsGetStatisticsPeriod =
    | "day"
    | "month"
    | "overall"
    | "week"
    | "year"
export type AdsGetStatisticsStatsFields = "views_times"

/**
 * Params for {@link APIMethodsAds["getStatistics"] | ads.getStatistics} method
 */
export interface AdsGetStatisticsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Type of requested objects listed in 'ids' parameter: *ad - ads,, *campaign - campaigns,, *client - clients,, *office - account.
     */
    ids_type: AdsGetStatisticsIdsType
    /**
     * IDs requested ads, campaigns, clients or account, separated with a comma, depending on the value set in 'ids_type'. Maximum 2000 objects.
     */
    ids: string
    /**
     * Data grouping by dates: *day - statistics by days,, *month - statistics by months,, *overall - overall statistics. 'date_from' and 'date_to' parameters set temporary limits.
     */
    period: AdsGetStatisticsPeriod
    /**
     * Date to show statistics from. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 - September 27, 2011, **0 - day it was created on,, *month: YYYY-MM, example: 2011-09 - September 2011, **0 - month it was created in,, *overall: 0.
     */
    date_from: string
    /**
     * Date to show statistics to. For different value of 'period' different date format is used: *day: YYYY-MM-DD, example: 2011-09-27 - September 27, 2011, **0 - current day,, *month: YYYY-MM, example: 2011-09 - September 2011, **0 - current month,, *overall: 0.
     */
    date_to: string
    /**
     * Additional fields to add to statistics
     */
    stats_fields?: AdsGetStatisticsStatsFields[]
}

export type AdsGetSuggestionsSection =
    | "browsers"
    | "cities"
    | "cities_regions"
    | "countries"
    | "districts"
    | "group_types"
    | "interest_categories"
    | "interest_categories_v2"
    | "interests"
    | "operators"
    | "positions"
    | "price_lists"
    | "regions"
    | "religions"
    | "schools"
    | "stations"
    | "streets"
    | "user_browsers"
    | "user_devices"
    | "user_operating_systems"
    | "user_os"

/**
 * Params for {@link APIMethodsAds["getSuggestions"] | ads.getSuggestions} method
 */
export interface AdsGetSuggestionsParams {
    /**
     * Section, suggestions are retrieved in. Available values: *countries - request of a list of countries. If q is not set or blank, a short list of countries is shown. Otherwise, a full list of countries is shown. *regions - requested list of regions. 'country' parameter is required. *cities - requested list of cities. 'country' parameter is required. *districts - requested list of districts. 'cities' parameter is required. *stations - requested list of subway stations. 'cities' parameter is required. *streets - requested list of streets. 'cities' parameter is required. *schools - requested list of educational organizations. 'cities' parameter is required. *interests - requested list of interests. *positions - requested list of positions (professions). *group_types - requested list of group types. *religions - requested list of religious commitments. *browsers - requested list of browsers and mobile devices.
     */
    section: AdsGetSuggestionsSection
    /**
     * Objects IDs separated by commas. If the parameter is passed, 'q, country, cities' should not be passed.
     */
    ids?: string
    /**
     * Filter-line of the request (for countries, regions, cities, streets, schools, interests, positions).
     */
    q?: string
    /**
     * ID of the country objects are searched in.
     */
    country?: number
    /**
     * IDs of cities where objects are searched in, separated with a comma.
     */
    cities?: string
    /**
     * Language of the returned string values. Supported languages: *ru - Russian,, *ua - Ukrainian,, *en - English.
     */
    lang?: Objects.VKBaseLang
}

/**
 * Params for {@link APIMethodsAds["getTargetGroups"] | ads.getTargetGroups} method
 */
export interface AdsGetTargetGroupsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Only for advertising agencies.', ID of the client with the advertising account where the group will be created.
     */
    client_id?: number
    /**
     * '1' - to return pixel code.
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsAds["getTargetPixels"] | ads.getTargetPixels} method
 */
export interface AdsGetTargetPixelsParams {
    account_id: number
    client_id?: number
}

/**
 * - `1` — image and text
 * - `2` — big image
 * - `4` — exclusive format
 * - `7` — community square image
 * - `10` — special app format
 * - `6` — special community format
 * - `9` — post in community
 * - `11` — app board
 */
export type AdsGetTargetingStatsAdFormat = 1 | 2 | 4 | 7 | 10 | 6 | 9 | 11

/**
 * Params for {@link APIMethodsAds["getTargetingStats"] | ads.getTargetingStats} method
 */
export interface AdsGetTargetingStatsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    client_id?: number
    /**
     * Serialized JSON object that describes targeting parameters. Description of 'criteria' object see below.
     */
    criteria?: string
    /**
     * ID of an ad which targeting parameters shall be analyzed.
     */
    ad_id?: number
    /**
     * Ad format. Possible values: *'1' - image and text,, *'2' - big image,, *'3' - exclusive format,, *'4' - community, square image,, *'7' - special app format,, *'8' - special community format,, *'9' - post in community,, *'10' - app board.
     */
    ad_format?: AdsGetTargetingStatsAdFormat
    /**
     * Platforms to use for ad showing. Possible values: (for 'ad_format' = '1'), *'0' - VK and partner sites,, *'1' - VK only. (for 'ad_format' = '9'), *'all' - all platforms,, *'desktop' - desktop version,, *'mobile' - mobile version and apps.
     */
    ad_platform?: string
    ad_platform_no_wall?: string
    ad_platform_no_ad_network?: string
    publisher_platforms?: string
    /**
     * URL for the advertised object.
     */
    link_url: string
    /**
     * Domain of the advertised object.
     */
    link_domain?: string
    /**
     * Additionally return recommended cpc and cpm to reach 5,10..95 percents of audience.
     */
    need_precise?: boolean | 0 | 1
    /**
     * Impressions limit period in seconds, must be a multiple of 86400(day)
     */
    impressions_limit_period?: number
}

/**
 * - `1` — image and text
 * - `2` — big image
 * - `4` — community, square image
 * - `7` — special app format
 * - `10` — exclusive format
 * - `11` — adaptive
 */
export type AdsGetUploadURLAdFormat = 1 | 2 | 4 | 7 | 10 | 11

/**
 * Params for {@link APIMethodsAds["getUploadURL"] | ads.getUploadURL} method
 */
export interface AdsGetUploadURLParams {
    /**
     * Ad format: *1 - image and text,, *2 - big image,, *3 - exclusive format,, *4 - community, square image,, *7 - special app format.
     */
    ad_format: AdsGetUploadURLAdFormat
    icon?: number
}

/**
 * Params for {@link APIMethodsAds["importTargetContacts"] | ads.importTargetContacts} method
 */
export interface AdsImportTargetContactsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number
    /**
     * Target group ID.
     */
    target_group_id: number
    /**
     * List of phone numbers, emails or user IDs separated with a comma.
     */
    contacts: string
}

/**
 * Params for {@link APIMethodsAds["removeOfficeUsers"] | ads.removeOfficeUsers} method
 */
export interface AdsRemoveOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array with IDs of deleted managers.
     */
    ids: string
}

/**
 * Params for {@link APIMethodsAds["removeTargetContacts"] | ads.removeTargetContacts} method
 */
export interface AdsRemoveTargetContactsParams {
    account_id: number
    client_id?: number
    target_group_id: number
    contacts: string
}

/**
 * Params for {@link APIMethodsAds["saveLookalikeRequestResult"] | ads.saveLookalikeRequestResult} method
 */
export interface AdsSaveLookalikeRequestResultParams {
    account_id: number
    client_id?: number
    request_id: number
    level: number
}

/**
 * Params for {@link APIMethodsAds["shareTargetGroup"] | ads.shareTargetGroup} method
 */
export interface AdsShareTargetGroupParams {
    account_id: number
    client_id?: number
    target_group_id: number
    share_with_client_id?: number
}

/**
 * Params for {@link APIMethodsAds["updateAds"] | ads.updateAds} method
 */
export interface AdsUpdateAdsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe changes in ads. Description of 'ad_edit_specification' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["updateCampaigns"] | ads.updateCampaigns} method
 */
export interface AdsUpdateCampaignsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe changes in campaigns. Description of 'campaign_mod' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["updateClients"] | ads.updateClients} method
 */
export interface AdsUpdateClientsParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe changes in clients. Description of 'client_mod' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["updateOfficeUsers"] | ads.updateOfficeUsers} method
 */
export interface AdsUpdateOfficeUsersParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * Serialized JSON array of objects that describe added managers. Description of 'user_specification' objects see below.
     */
    data: string
}

/**
 * Params for {@link APIMethodsAds["updateTargetGroup"] | ads.updateTargetGroup} method
 */
export interface AdsUpdateTargetGroupParams {
    /**
     * Advertising account ID.
     */
    account_id: number
    /**
     * 'Only for advertising agencies.' , ID of the client with the advertising account where the group will be created.
     */
    client_id?: number
    /**
     * Group ID.
     */
    target_group_id: number
    /**
     * New name of the target group - a string up to 64 characters long.
     */
    name: string
    /**
     * Domain of the site where user accounting code will be placed.
     */
    domain?: string
    /**
     * 'Only for the groups that get audience from sites with user accounting code.', Time in days when users added to a retarget group will be automatically excluded from it. '0' - automatic exclusion is off.
     */
    lifetime: number
    target_pixel_id?: number
    target_pixel_rules?: string
}

/**
 * Params for {@link APIMethodsAds["updateTargetPixel"] | ads.updateTargetPixel} method
 */
export interface AdsUpdateTargetPixelParams {
    account_id: number
    client_id?: number
    target_pixel_id: number
    name: string
    domain?: string
    category_id: number
}

export type AppWidgetsGetAppImageUploadServerImageType =
    | "160x160"
    | "160x240"
    | "24x24"
    | "50x50"
    | "510x128"

/**
 * Params for {@link APIMethodsAppWidgets["getAppImageUploadServer"] | appWidgets.getAppImageUploadServer} method
 */
export interface AppWidgetsGetAppImageUploadServerParams {
    image_type: AppWidgetsGetAppImageUploadServerImageType
}

export type AppWidgetsGetAppImagesImageType =
    | "160x160"
    | "160x240"
    | "24x24"
    | "50x50"
    | "510x128"

/**
 * Params for {@link APIMethodsAppWidgets["getAppImages"] | appWidgets.getAppImages} method
 */
export interface AppWidgetsGetAppImagesParams {
    /**
     * Offset needed to return a specific subset of images.
     */
    offset?: number
    /**
     * Maximum count of results.
     */
    count?: number
    image_type?: AppWidgetsGetAppImagesImageType
}

export type AppWidgetsGetGroupImageUploadServerImageType =
    | "160x160"
    | "160x240"
    | "24x24"
    | "50x50"
    | "510x128"

/**
 * Params for {@link APIMethodsAppWidgets["getGroupImageUploadServer"] | appWidgets.getGroupImageUploadServer} method
 */
export interface AppWidgetsGetGroupImageUploadServerParams {
    image_type: AppWidgetsGetGroupImageUploadServerImageType
}

export type AppWidgetsGetGroupImagesImageType =
    | "160x160"
    | "160x240"
    | "24x24"
    | "50x50"
    | "510x128"

/**
 * Params for {@link APIMethodsAppWidgets["getGroupImages"] | appWidgets.getGroupImages} method
 */
export interface AppWidgetsGetGroupImagesParams {
    /**
     * Offset needed to return a specific subset of images.
     */
    offset?: number
    /**
     * Maximum count of results.
     */
    count?: number
    image_type?: AppWidgetsGetGroupImagesImageType
}

/**
 * Params for {@link APIMethodsAppWidgets["getImagesById"] | appWidgets.getImagesById} method
 */
export interface AppWidgetsGetImagesByIdParams {
    /**
     * List of images IDs
     */
    images: string[]
}

/**
 * Params for {@link APIMethodsAppWidgets["saveAppImage"] | appWidgets.saveAppImage} method
 */
export interface AppWidgetsSaveAppImageParams {
    /**
     * Parameter returned when photo is uploaded to server
     */
    hash: string
    /**
     * Parameter returned when photo is uploaded to server
     */
    image: string
}

/**
 * Params for {@link APIMethodsAppWidgets["saveGroupImage"] | appWidgets.saveGroupImage} method
 */
export interface AppWidgetsSaveGroupImageParams {
    /**
     * Parameter returned when photo is uploaded to server
     */
    hash: string
    /**
     * Parameter returned when photo is uploaded to server
     */
    image: string
}

export type AppWidgetsUpdateType =
    | "compact_list"
    | "cover_list"
    | "donation"
    | "list"
    | "match"
    | "matches"
    | "table"
    | "text"
    | "tiles"

/**
 * Params for {@link APIMethodsAppWidgets["update"] | appWidgets.update} method
 */
export interface AppWidgetsUpdateParams {
    code: string
    type: AppWidgetsUpdateType
}

export type AppsAddSnippetVkRef = "snippet_im" | "snippet_post"
export type AppsAddSnippetButton =
    | "buy"
    | "buy_ticket"
    | "contact"
    | "create"
    | "enroll"
    | "fill"
    | "go"
    | "help"
    | "open"
    | "play"

/**
 * Params for {@link APIMethodsApps["addSnippet"] | apps.addSnippet} method
 */
export interface AppsAddSnippetParams {
    vk_ref?: AppsAddSnippetVkRef[]
    group_id?: number[]
    hash?: string[]
    snippet_id?: number
    title?: string
    description?: string
    image_url?: string
    small_image_url?: string
    button?: AppsAddSnippetButton
}

/**
 * Params for {@link APIMethodsApps["addUsersToTestingGroup"] | apps.addUsersToTestingGroup} method
 */
export interface AppsAddUsersToTestingGroupParams {
    user_ids: number[]
    group_id: number
}

/**
 * Params for {@link APIMethodsApps["deleteSnippet"] | apps.deleteSnippet} method
 */
export interface AppsDeleteSnippetParams {
    id?: number
}

export type AppsGetPlatform = "android" | "ios" | "web"

/**
 * Params for {@link APIMethodsApps["get"] | apps.get} method
 */
export interface AppsGetParams {
    /**
     * Application ID
     */
    app_id?: number
    /**
     * List of application ID
     */
    app_ids?: number[]
    /**
     * platform. Possible values: *'ios' - iOS,, *'android' - Android,, *'winphone' - Windows Phone,, *'web' - приложения на vk.com. By default: 'web'.
     */
    platform?: AppsGetPlatform
    extended?: boolean | 0 | 1
    return_friends?: boolean | 0 | 1
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', (only if return_friends - 1)
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default),, 'gen' - genitive,, 'dat' - dative,, 'acc' - accusative,, 'ins' - instrumental,, 'abl' - prepositional. (only if 'return_friends' = '1')
     */
    name_case?: Objects.VKBaseNameCase
    /**
     * List of app fields to return. Fields 'id', 'type' and 'title' will always be in response. Leave this field empty to get all fields
     */
    app_fields?: Objects.VKAppsAppFields[]
}

export type AppsGetCatalogSort =
    | "create_date"
    | "growth_rate"
    | "popular"
    | "popular_today"
    | "popular_week"
    | "visitors"
export type AppsGetCatalogFilter =
    | "favorite"
    | "featured"
    | "installed"
    | "new"
    | "recommended"

/**
 * Params for {@link APIMethodsApps["getCatalog"] | apps.getCatalog} method
 */
export interface AppsGetCatalogParams {
    /**
     * Sort order: 'popular_today' - popular for one day (default), 'visitors' - by visitors number , 'create_date' - by creation date, 'growth_rate' - by growth rate, 'popular_week' - popular for one week
     */
    sort?: AppsGetCatalogSort
    /**
     * Offset required to return a specific subset of apps.
     */
    offset?: number
    /**
     * Number of apps to return.
     */
    count?: number
    platform?: string
    /**
     * '1' - to return additional fields 'screenshots', 'MAU', 'catalog_position', and 'international'. If set, 'count' must be less than or equal to '100'. '0' - not to return additional fields (default).
     */
    extended?: boolean | 0 | 1
    return_friends?: boolean | 0 | 1
    fields?: Objects.VKUsersFields[]
    name_case?: Objects.VKBaseNameCase
    /**
     * Search query string.
     */
    q?: string
    genre_id?: number
    /**
     * 'installed' - to return list of installed apps (only for mobile platform).
     */
    filter?: AppsGetCatalogFilter
}

export type AppsGetFriendsListType = "invite" | "request"

/**
 * Params for {@link APIMethodsApps["getFriendsList"] | apps.getFriendsList} method
 */
export interface AppsGetFriendsListParams {
    extended?: boolean | 0 | 1
    /**
     * List size.
     */
    count?: number
    offset?: number
    /**
     * List type. Possible values: * 'invite' - available for invites (don't play the game),, * 'request' - available for request (play the game). By default: 'invite'.
     */
    type?: AppsGetFriendsListType
    /**
     * Additional profile fields, see [vk.com/dev/fields|description].
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    query?: string
}

export type AppsGetLeaderboardType = "level" | "points" | "score"

/**
 * Params for {@link APIMethodsApps["getLeaderboard"] | apps.getLeaderboard} method
 */
export interface AppsGetLeaderboardParams {
    /**
     * Leaderboard type. Possible values: *'level' - by level,, *'points' - by mission points,, *'score' - by score ().
     */
    type: AppsGetLeaderboardType
    /**
     * Rating type. Possible values: *'1' - global rating among all players,, *'0' - rating among user friends.
     */
    global?: boolean | 0 | 1
    /**
     * 1 - to return additional info about users
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsApps["getMiniAppPolicies"] | apps.getMiniAppPolicies} method
 */
export interface AppsGetMiniAppPoliciesParams {
    /**
     * Mini App ID
     */
    app_id: number
}

export type AppsGetScopesType = "group" | "user"

/**
 * Params for {@link APIMethodsApps["getScopes"] | apps.getScopes} method
 */
export interface AppsGetScopesParams {
    type?: AppsGetScopesType
}

/**
 * Params for {@link APIMethodsApps["getScore"] | apps.getScore} method
 */
export interface AppsGetScoreParams {
    user_id?: number
}

/**
 * Params for {@link APIMethodsApps["getTestingGroups"] | apps.getTestingGroups} method
 */
export interface AppsGetTestingGroupsParams {
    group_id?: number
}

/**
 * Params for {@link APIMethodsApps["isNotificationsAllowed"] | apps.isNotificationsAllowed} method
 */
export interface AppsIsNotificationsAllowedParams {
    user_id?: number
}

/**
 * Params for {@link APIMethodsApps["promoHasActiveGift"] | apps.promoHasActiveGift} method
 */
export interface AppsPromoHasActiveGiftParams {
    /**
     * Id of game promo action
     */
    promo_id: number
    user_id?: number
}

/**
 * Params for {@link APIMethodsApps["promoUseGift"] | apps.promoUseGift} method
 */
export interface AppsPromoUseGiftParams {
    /**
     * Id of game promo action
     */
    promo_id: number
    user_id?: number
}

/**
 * Params for {@link APIMethodsApps["removeTestingGroup"] | apps.removeTestingGroup} method
 */
export interface AppsRemoveTestingGroupParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsApps["removeUsersFromTestingGroups"] | apps.removeUsersFromTestingGroups} method
 */
export interface AppsRemoveUsersFromTestingGroupsParams {
    user_ids: number[]
}

export type AppsSendRequestType = "invite" | "request"

/**
 * Params for {@link APIMethodsApps["sendRequest"] | apps.sendRequest} method
 */
export interface AppsSendRequestParams {
    /**
     * id of the user to send a request
     */
    user_id: number
    /**
     * request text
     */
    text?: string
    /**
     * request type. Values: 'invite' - if the request is sent to a user who does not have the app installed,, 'request' - if a user has already installed the app
     */
    type?: AppsSendRequestType
    name?: string
    /**
     * special string key to be sent with the request
     */
    key?: string
    separate?: boolean | 0 | 1
}

export type AppsUpdateMetaForTestingGroupPlatforms = "mobile" | "web" | "mvk"

/**
 * Params for {@link APIMethodsApps["updateMetaForTestingGroup"] | apps.updateMetaForTestingGroup} method
 */
export interface AppsUpdateMetaForTestingGroupParams {
    group_id?: number
    webview: string
    name: string
    platforms: AppsUpdateMetaForTestingGroupPlatforms[]
    user_ids?: number[]
}

/**
 * Params for {@link APIMethodsAuth["restore"] | auth.restore} method
 */
export interface AuthRestoreParams {
    /**
     * User phone number.
     */
    phone: string
    /**
     * User last name.
     */
    last_name: string
}

/**
 * Params for {@link APIMethodsBoard["addTopic"] | board.addTopic} method
 */
export interface BoardAddTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic title.
     */
    title: string
    /**
     * Text of the topic.
     */
    text?: string
    /**
     * For a community: '1' - to post the topic as by the community, '0' - to post the topic as by the user (default)
     */
    from_group?: boolean | 0 | 1
    /**
     * List of media objects attached to the topic, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media object: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media owner. '<media_id>' - Media ID. Example: "photo100172_166443618,photo66748_265827614", , "NOTE: If you try to attach more than one reference, an error will be thrown.",
     */
    attachments?: string[]
}

/**
 * Params for {@link APIMethodsBoard["closeTopic"] | board.closeTopic} method
 */
export interface BoardCloseTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
}

/**
 * Params for {@link APIMethodsBoard["createComment"] | board.createComment} method
 */
export interface BoardCreateCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * ID of the topic to be commented on.
     */
    topic_id: number
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string
    /**
     * (Required if 'text' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media object: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media owner. '<media_id>' - Media ID.
     */
    attachments?: string[]
    /**
     * '1' - to post the comment as by the community, '0' - to post the comment as by the user (default)
     */
    from_group?: boolean | 0 | 1
    /**
     * Sticker ID.
     */
    sticker_id?: number
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string
}

/**
 * Params for {@link APIMethodsBoard["deleteComment"] | board.deleteComment} method
 */
export interface BoardDeleteCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
    /**
     * Comment ID.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsBoard["deleteTopic"] | board.deleteTopic} method
 */
export interface BoardDeleteTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
}

/**
 * Params for {@link APIMethodsBoard["editComment"] | board.editComment} method
 */
export interface BoardEditCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
    /**
     * ID of the comment on the topic.
     */
    comment_id: number
    /**
     * (Required if 'attachments' is not set). New comment text.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media object: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media owner. '<media_id>' - Media ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
}

/**
 * Params for {@link APIMethodsBoard["editTopic"] | board.editTopic} method
 */
export interface BoardEditTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
    /**
     * New title of the topic.
     */
    title: string
}

/**
 * Params for {@link APIMethodsBoard["fixTopic"] | board.fixTopic} method
 */
export interface BoardFixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
}

/**
 * - `asc` — chronological
 * - `desc` — reverse chronological
 */
export type BoardGetCommentsSort = "asc" | "desc"

/**
 * Params for {@link APIMethodsBoard["getComments"] | board.getComments} method
 */
export interface BoardGetCommentsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
    /**
     * '1' - to return the 'likes' field, '0' - not to return the 'likes' field (default)
     */
    need_likes?: boolean | 0 | 1
    start_comment_id?: number
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number
    /**
     * Number of comments to return.
     */
    count?: number
    /**
     * '1' - to return information about users who posted comments, '0' - to return no additional fields (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Sort order: 'asc' - by creation date in chronological order, 'desc' - by creation date in reverse chronological order,
     */
    sort?: BoardGetCommentsSort
}

/**
 * - `1` — updated desc
 * - `2` — created desc
 * - `-1` — updated asc
 * - `-2` — created asc
 * - `0` — as by administrator
 */
export type BoardGetTopicsOrder = 1 | 2 | -1 | -2 | 0
/**
 * - `1` — first
 * - `2` — last
 * - `0` — none
 */
export type BoardGetTopicsPreview = 1 | 2 | 0

/**
 * Params for {@link APIMethodsBoard["getTopics"] | board.getTopics} method
 */
export interface BoardGetTopicsParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * IDs of topics to be returned (100 maximum). By default, all topics are returned. If this parameter is set, the 'order', 'offset', and 'count' parameters are ignored.
     */
    topic_ids?: number[]
    /**
     * Sort order: '1' - by date updated in reverse chronological order. '2' - by date created in reverse chronological order. '-1' - by date updated in chronological order. '-2' - by date created in chronological order. If no sort order is specified, topics are returned in the order specified by the group administrator. Pinned topics are returned first, regardless of the sorting.
     */
    order?: BoardGetTopicsOrder
    /**
     * Offset needed to return a specific subset of topics.
     */
    offset?: number
    /**
     * Number of topics to return.
     */
    count?: number
    /**
     * '1' - to return information about users who created topics or who posted there last, '0' - to return no additional fields (default)
     */
    extended?: boolean | 0 | 1
    /**
     * '1' - to return the first comment in each topic,, '2' - to return the last comment in each topic,, '0' - to return no comments. By default: '0'.
     */
    preview?: BoardGetTopicsPreview
    /**
     * Number of characters after which to truncate the previewed comment. To preview the full comment, specify '0'.
     */
    preview_length?: number
}

/**
 * Params for {@link APIMethodsBoard["openTopic"] | board.openTopic} method
 */
export interface BoardOpenTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
}

/**
 * Params for {@link APIMethodsBoard["restoreComment"] | board.restoreComment} method
 */
export interface BoardRestoreCommentParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
    /**
     * Comment ID.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsBoard["unfixTopic"] | board.unfixTopic} method
 */
export interface BoardUnfixTopicParams {
    /**
     * ID of the community that owns the discussion board.
     */
    group_id: number
    /**
     * Topic ID.
     */
    topic_id: number
}

/**
 * Params for {@link APIMethodsBugtracker["addCompanyGroupsMembers"] | bugtracker.addCompanyGroupsMembers} method
 */
export interface BugtrackerAddCompanyGroupsMembersParams {
    company_id: number
    user_ids: number[]
    company_group_ids: number[]
}

/**
 * Params for {@link APIMethodsBugtracker["addCompanyMembers"] | bugtracker.addCompanyMembers} method
 */
export interface BugtrackerAddCompanyMembersParams {
    user_ids: number[]
    company_id: number
}

/**
 * Params for {@link APIMethodsBugtracker["changeBugreportStatus"] | bugtracker.changeBugreportStatus} method
 */
export interface BugtrackerChangeBugreportStatusParams {
    bugreport_id: number
    status?: number
    comment?: string
    from_statuses?: number[]
    not_in_statuses?: number[]
}

/**
 * Params for {@link APIMethodsBugtracker["createComment"] | bugtracker.createComment} method
 */
export interface BugtrackerCreateCommentParams {
    bugreport_id: number
    text?: string
    hidden?: boolean | 0 | 1
    hidden_attachments?: boolean | 0 | 1
    force?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsBugtracker["getBugreportById"] | bugtracker.getBugreportById} method
 */
export interface BugtrackerGetBugreportByIdParams {
    bugreport_id: number
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsBugtracker["getCompanyGroupMembers"] | bugtracker.getCompanyGroupMembers} method
 */
export interface BugtrackerGetCompanyGroupMembersParams {
    company_id: number
    company_group_id: number
    count?: number
    offset?: number
    filter_name?: string
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

export type BugtrackerGetCompanyMembersFilterRole = 0 | 1

/**
 * Params for {@link APIMethodsBugtracker["getCompanyMembers"] | bugtracker.getCompanyMembers} method
 */
export interface BugtrackerGetCompanyMembersParams {
    company_id: number
    count?: number
    offset?: number
    filter_name?: string
    filter_role?: BugtrackerGetCompanyMembersFilterRole
    filter_not_group?: number
    filter_member_ids?: number[]
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
    extra?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsBugtracker["getDownloadVersionUrl"] | bugtracker.getDownloadVersionUrl} method
 */
export interface BugtrackerGetDownloadVersionUrlParams {
    product_id: number
    version_id: number
    ttl?: number
}

/**
 * Params for {@link APIMethodsBugtracker["getProductBuildUploadServer"] | bugtracker.getProductBuildUploadServer} method
 */
export interface BugtrackerGetProductBuildUploadServerParams {
    product_id: number
}

/**
 * Params for {@link APIMethodsBugtracker["removeCompanyGroupMember"] | bugtracker.removeCompanyGroupMember} method
 */
export interface BugtrackerRemoveCompanyGroupMemberParams {
    company_id: number
    user_id: number
    company_group_id: number
}

/**
 * Params for {@link APIMethodsBugtracker["removeCompanyMember"] | bugtracker.removeCompanyMember} method
 */
export interface BugtrackerRemoveCompanyMemberParams {
    user_id: number
    company_id: number
}

/**
 * Params for {@link APIMethodsBugtracker["saveProductVersion"] | bugtracker.saveProductVersion} method
 */
export interface BugtrackerSaveProductVersionParams {
    product_id?: number
    version_id?: number
    title: string
    release_notes?: string
    visible?: boolean | 0 | 1
    set_rft?: boolean | 0 | 1
}

export type BugtrackerSetCompanyMemberRoleRole = 0 | 1

/**
 * Params for {@link APIMethodsBugtracker["setCompanyMemberRole"] | bugtracker.setCompanyMemberRole} method
 */
export interface BugtrackerSetCompanyMemberRoleParams {
    user_id: number
    company_id: number
    role: BugtrackerSetCompanyMemberRoleRole
}

/**
 * Params for {@link APIMethodsBugtracker["setProductIsOver"] | bugtracker.setProductIsOver} method
 */
export interface BugtrackerSetProductIsOverParams {
    product_id: number
    is_over?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsCalls["forceFinish"] | calls.forceFinish} method
 */
export interface CallsForceFinishParams {
    call_id: string
}

/**
 * Params for {@link APIMethodsCalls["start"] | calls.start} method
 */
export interface CallsStartParams {
    group_id?: number
}

/**
 * Params for {@link APIMethodsDatabase["getChairs"] | database.getChairs} method
 */
export interface DatabaseGetChairsParams {
    /**
     * id of the faculty to get chairs from
     */
    faculty_id: number
    /**
     * offset required to get a certain subset of chairs
     */
    offset?: number
    /**
     * amount of chairs to get
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDatabase["getCities"] | database.getCities} method
 */
export interface DatabaseGetCitiesParams {
    /**
     * Region ID.
     */
    region_id?: number
    /**
     * Search query.
     */
    q?: string
    /**
     * '1' - to return all cities in the country, '0' - to return major cities in the country (default),
     */
    need_all?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of cities.
     */
    offset?: number
    /**
     * Number of cities to return.
     */
    count?: number
    /**
     * Cities fields to return. Sample values: 'fias_guid'
     */
    fields?: Objects.VKDatabaseCitiesFields[]
}

/**
 * Params for {@link APIMethodsDatabase["getCitiesById"] | database.getCitiesById} method
 */
export interface DatabaseGetCitiesByIdParams {
    /**
     * City IDs.
     */
    city_ids?: number[]
    /**
     * Cities fields to return. Sample values: 'fias_guid'
     */
    fields?: Objects.VKDatabaseCitiesFields[]
}

/**
 * Params for {@link APIMethodsDatabase["getCountries"] | database.getCountries} method
 */
export interface DatabaseGetCountriesParams {
    /**
     * '1' - to return a full list of all countries, '0' - to return a list of countries near the current user's country (default).
     */
    need_all?: boolean | 0 | 1
    /**
     * Country codes in [vk.com/dev/country_codes|ISO 3166-1 alpha-2] standard.
     */
    code?: string
    /**
     * Offset needed to return a specific subset of countries.
     */
    offset?: number
    /**
     * Number of countries to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDatabase["getCountriesById"] | database.getCountriesById} method
 */
export interface DatabaseGetCountriesByIdParams {
    /**
     * Country IDs.
     */
    country_ids?: number[]
}

/**
 * Params for {@link APIMethodsDatabase["getFaculties"] | database.getFaculties} method
 */
export interface DatabaseGetFacultiesParams {
    /**
     * University ID.
     */
    university_id: number
    /**
     * Offset needed to return a specific subset of faculties.
     */
    offset?: number
    /**
     * Number of faculties to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDatabase["getMetroStations"] | database.getMetroStations} method
 */
export interface DatabaseGetMetroStationsParams {
    city_id: number
    offset?: number
    count?: number
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsDatabase["getMetroStationsById"] | database.getMetroStationsById} method
 */
export interface DatabaseGetMetroStationsByIdParams {
    station_ids?: number[]
}

/**
 * Params for {@link APIMethodsDatabase["getRegions"] | database.getRegions} method
 */
export interface DatabaseGetRegionsParams {
    /**
     * Search query.
     */
    q?: string
    /**
     * Offset needed to return specific subset of regions.
     */
    offset?: number
    /**
     * Number of regions to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDatabase["getSchoolClasses"] | database.getSchoolClasses} method
 */
export interface DatabaseGetSchoolClassesParams {
    /**
     * Country ID.
     */
    country_id?: number
}

/**
 * Params for {@link APIMethodsDatabase["getSchools"] | database.getSchools} method
 */
export interface DatabaseGetSchoolsParams {
    /**
     * Search query.
     */
    q?: string
    /**
     * City ID.
     */
    city_id: number
    /**
     * Offset needed to return a specific subset of schools.
     */
    offset?: number
    /**
     * Number of schools to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDatabase["getUniversities"] | database.getUniversities} method
 */
export interface DatabaseGetUniversitiesParams {
    /**
     * Search query.
     */
    q?: string
    /**
     * City ID.
     */
    city_id?: number
    /**
     * Offset needed to return a specific subset of universities.
     */
    offset?: number
    /**
     * Number of universities to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsDocs["add"] | docs.add} method
 */
export interface DocsAddParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    owner_id: number
    /**
     * Document ID.
     */
    doc_id: number
    /**
     * Access key. This parameter is required if 'access_key' was returned with the document's data.
     */
    access_key?: string
}

/**
 * Params for {@link APIMethodsDocs["delete"] | docs.delete} method
 */
export interface DocsDeleteParams {
    /**
     * ID of the user or community that owns the document. Use a negative value to designate a community ID.
     */
    owner_id: number
    /**
     * Document ID.
     */
    doc_id: number
}

/**
 * Params for {@link APIMethodsDocs["edit"] | docs.edit} method
 */
export interface DocsEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Document ID.
     */
    doc_id: number
    /**
     * Document title.
     */
    title: string
    /**
     * Document tags.
     */
    tags?: string[]
}

/**
 * - `0` — all
 * - `1` — text
 * - `2` — archive
 * - `3` — gif
 * - `4` — image
 * - `5` — audio
 * - `6` — video
 * - `7` — ebook
 * - `8` — default
 */
export type DocsGetType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 * Params for {@link APIMethodsDocs["get"] | docs.get} method
 */
export interface DocsGetParams {
    /**
     * Number of documents to return. By default, all documents.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of documents.
     */
    offset?: number
    type?: DocsGetType
    /**
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    owner_id?: number
    return_tags?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsDocs["getById"] | docs.getById} method
 */
export interface DocsGetByIdParams {
    /**
     * Document IDs. Example: , "66748_91488,66748_91455",
     */
    docs: string[]
    return_tags?: boolean | 0 | 1
}

export type DocsGetMessagesUploadServerType =
    | "audio_message"
    | "doc"
    | "graffiti"

/**
 * Params for {@link APIMethodsDocs["getMessagesUploadServer"] | docs.getMessagesUploadServer} method
 */
export interface DocsGetMessagesUploadServerParams {
    /**
     * Document type.
     */
    type?: DocsGetMessagesUploadServerType
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number
}

/**
 * Params for {@link APIMethodsDocs["getTypes"] | docs.getTypes} method
 */
export interface DocsGetTypesParams {
    /**
     * ID of the user or community that owns the documents. Use a negative value to designate a community ID.
     */
    owner_id?: number
}

/**
 * Params for {@link APIMethodsDocs["getUploadServer"] | docs.getUploadServer} method
 */
export interface DocsGetUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsDocs["getWallUploadServer"] | docs.getWallUploadServer} method
 */
export interface DocsGetWallUploadServerParams {
    /**
     * Community ID (if the document will be uploaded to the community).
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsDocs["restore"] | docs.restore} method
 */
export interface DocsRestoreParams {
    owner_id: number
    doc_id: number
}

/**
 * Params for {@link APIMethodsDocs["save"] | docs.save} method
 */
export interface DocsSaveParams {
    /**
     * This parameter is returned when the file is [vk.com/dev/upload_files_2|uploaded to the server].
     */
    file: string
    /**
     * Document title.
     */
    title?: string
    /**
     * Document tags.
     */
    tags?: string
    return_tags?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsDocs["search"] | docs.search} method
 */
export interface DocsSearchParams {
    /**
     * Search query string.
     */
    q?: string
    search_own?: boolean | 0 | 1
    /**
     * Number of results to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    return_tags?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsDonut["getFriends"] | donut.getFriends} method
 */
export interface DonutGetFriendsParams {
    owner_id: number
    offset?: number
    count?: number
    fields?: string[]
}

/**
 * Params for {@link APIMethodsDonut["getSubscription"] | donut.getSubscription} method
 */
export interface DonutGetSubscriptionParams {
    owner_id: number
}

/**
 * Params for {@link APIMethodsDonut["getSubscriptions"] | donut.getSubscriptions} method
 */
export interface DonutGetSubscriptionsParams {
    fields?: Objects.VKBaseUserGroupFields[]
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsDonut["isDon"] | donut.isDon} method
 */
export interface DonutIsDonParams {
    owner_id: number
}

/**
 * Params for {@link APIMethodsDownloadedGames["getPaidStatus"] | downloadedGames.getPaidStatus} method
 */
export interface DownloadedGamesGetPaidStatusParams {
    user_id?: number
}

/**
 * Params for {@link APIMethodsFave["addArticle"] | fave.addArticle} method
 */
export interface FaveAddArticleParams {
    url: string
}

/**
 * Params for {@link APIMethodsFave["addLink"] | fave.addLink} method
 */
export interface FaveAddLinkParams {
    /**
     * Link URL.
     */
    link: string
}

/**
 * Params for {@link APIMethodsFave["addPage"] | fave.addPage} method
 */
export interface FaveAddPageParams {
    user_id?: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsFave["addPost"] | fave.addPost} method
 */
export interface FaveAddPostParams {
    owner_id: number
    id: number
    access_key?: string
}

/**
 * Params for {@link APIMethodsFave["addProduct"] | fave.addProduct} method
 */
export interface FaveAddProductParams {
    owner_id: number
    id: number
    access_key?: string
}

export type FaveAddTagPosition = "back" | "front"

/**
 * Params for {@link APIMethodsFave["addTag"] | fave.addTag} method
 */
export interface FaveAddTagParams {
    name?: string
    position?: FaveAddTagPosition
}

/**
 * Params for {@link APIMethodsFave["addVideo"] | fave.addVideo} method
 */
export interface FaveAddVideoParams {
    owner_id: number
    id: number
    access_key?: string
}

/**
 * Params for {@link APIMethodsFave["editTag"] | fave.editTag} method
 */
export interface FaveEditTagParams {
    id: number
    name: string
}

export type FaveGetItemType =
    | "article"
    | "clip"
    | "game"
    | "link"
    | "mini_app"
    | "narrative"
    | "page"
    | "podcast"
    | "post"
    | "product"
    | "video"
    | "youla_product"

/**
 * Params for {@link APIMethodsFave["get"] | fave.get} method
 */
export interface FaveGetParams {
    /**
     * '1' - to return additional 'wall', 'profiles', and 'groups' fields. By default: '0'.
     */
    extended?: boolean | 0 | 1
    item_type?: FaveGetItemType
    /**
     * Tag ID.
     */
    tag_id?: number
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number
    /**
     * Number of users to return.
     */
    count?: number
    fields?: string
    is_from_snackbar?: boolean | 0 | 1
}

export type FaveGetPagesType = "groups" | "hints" | "users"

/**
 * Params for {@link APIMethodsFave["getPages"] | fave.getPages} method
 */
export interface FaveGetPagesParams {
    offset?: number
    count?: number
    type?: FaveGetPagesType
    fields?: Objects.VKBaseUserGroupFields[]
    tag_id?: number
}

/**
 * Params for {@link APIMethodsFave["removeArticle"] | fave.removeArticle} method
 */
export interface FaveRemoveArticleParams {
    owner_id: number
    article_id: number
}

/**
 * Params for {@link APIMethodsFave["removeLink"] | fave.removeLink} method
 */
export interface FaveRemoveLinkParams {
    /**
     * Link ID (can be obtained by [vk.com/dev/faves.getLinks|faves.getLinks] method).
     */
    link_id?: string
    /**
     * Link URL
     */
    link?: string
}

/**
 * Params for {@link APIMethodsFave["removePage"] | fave.removePage} method
 */
export interface FaveRemovePageParams {
    user_id?: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsFave["removePost"] | fave.removePost} method
 */
export interface FaveRemovePostParams {
    owner_id: number
    id: number
}

/**
 * Params for {@link APIMethodsFave["removeProduct"] | fave.removeProduct} method
 */
export interface FaveRemoveProductParams {
    owner_id: number
    id: number
}

/**
 * Params for {@link APIMethodsFave["removeTag"] | fave.removeTag} method
 */
export interface FaveRemoveTagParams {
    id: number
}

/**
 * Params for {@link APIMethodsFave["removeVideo"] | fave.removeVideo} method
 */
export interface FaveRemoveVideoParams {
    owner_id: number
    id: number
}

/**
 * Params for {@link APIMethodsFave["reorderTags"] | fave.reorderTags} method
 */
export interface FaveReorderTagsParams {
    ids: number[]
}

/**
 * Params for {@link APIMethodsFave["setPageTags"] | fave.setPageTags} method
 */
export interface FaveSetPageTagsParams {
    user_id?: number
    group_id?: number
    tag_ids?: number[]
}

export type FaveSetTagsItemType =
    | "article"
    | "clip"
    | "game"
    | "link"
    | "mini_app"
    | "narrative"
    | "page"
    | "podcast"
    | "post"
    | "product"
    | "video"
    | "youla_product"

/**
 * Params for {@link APIMethodsFave["setTags"] | fave.setTags} method
 */
export interface FaveSetTagsParams {
    item_type?: FaveSetTagsItemType
    item_owner_id?: number
    item_id?: number
    tag_ids?: number[]
    link_id?: string
    link_url?: string
}

/**
 * Params for {@link APIMethodsFave["trackPageInteraction"] | fave.trackPageInteraction} method
 */
export interface FaveTrackPageInteractionParams {
    user_id?: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsFriends["add"] | friends.add} method
 */
export interface FriendsAddParams {
    /**
     * ID of the user whose friend request will be approved or to whom a friend request will be sent.
     */
    user_id?: number
    /**
     * Text of the message (up to 500 characters) for the friend request, if any.
     */
    text?: string
    /**
     * '1' to pass an incoming request to followers list.
     */
    follow?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsFriends["addList"] | friends.addList} method
 */
export interface FriendsAddListParams {
    /**
     * Name of the friend list.
     */
    name: string
    /**
     * IDs of users to be added to the friend list.
     */
    user_ids?: number[]
}

/**
 * Params for {@link APIMethodsFriends["areFriends"] | friends.areFriends} method
 */
export interface FriendsAreFriendsParams {
    /**
     * IDs of the users whose friendship status to check.
     */
    user_ids: number[]
    /**
     * '1' - to return 'sign' field. 'sign' is md5("{id}_{user_id}_{friends_status}_{application_secret}"), where id is current user ID. This field allows to check that data has not been modified by the client. By default: '0'.
     */
    need_sign?: boolean | 0 | 1
    /**
     * Return friend request read_state field
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsFriends["delete"] | friends.delete} method
 */
export interface FriendsDeleteParams {
    /**
     * ID of the user whose friend request is to be declined or who is to be deleted from the current user's friend list.
     */
    user_id?: number
}

/**
 * Params for {@link APIMethodsFriends["deleteList"] | friends.deleteList} method
 */
export interface FriendsDeleteListParams {
    /**
     * ID of the friend list to delete.
     */
    list_id: number
}

/**
 * Params for {@link APIMethodsFriends["edit"] | friends.edit} method
 */
export interface FriendsEditParams {
    /**
     * ID of the user whose friend list is to be edited.
     */
    user_id: number
    /**
     * IDs of the friend lists to which to add the user.
     */
    list_ids?: number[]
}

/**
 * Params for {@link APIMethodsFriends["editList"] | friends.editList} method
 */
export interface FriendsEditListParams {
    /**
     * Name of the friend list.
     */
    name?: string
    /**
     * Friend list ID.
     */
    list_id: number
    /**
     * IDs of users in the friend list.
     */
    user_ids?: number[]
    /**
     * (Applies if 'user_ids' parameter is not set.), User IDs to add to the friend list.
     */
    add_user_ids?: number[]
    /**
     * (Applies if 'user_ids' parameter is not set.), User IDs to delete from the friend list.
     */
    delete_user_ids?: number[]
}

export type FriendsGetOrder = "hints" | "mobile" | "name" | "random" | "smart"

/**
 * Params for {@link APIMethodsFriends["get"] | friends.get} method
 */
export interface FriendsGetParams {
    /**
     * User ID. By default, the current user ID.
     */
    user_id?: number
    /**
     * Sort order: , 'name' - by name (enabled only if the 'fields' parameter is used), 'hints' - by rating, similar to how friends are sorted in My friends section, , This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    order?: FriendsGetOrder
    /**
     * ID of the friend list returned by the [vk.com/dev/friends.getLists|friends.getLists] method to be used as the source. This parameter is taken into account only when the uid parameter is set to the current user ID. This parameter is available only for [vk.com/dev/standalone|desktop applications].
     */
    list_id?: number
    /**
     * Number of friends to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number
    /**
     * Profile fields to return. Sample values: 'uid', 'first_name', 'last_name', 'nickname', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'domain', 'has_mobile', 'rate', 'contacts', 'education'.
     */
    fields?: Objects.VKUsersFields[]
    ref?: string
}

/**
 * Params for {@link APIMethodsFriends["getLists"] | friends.getLists} method
 */
export interface FriendsGetListsParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * '1' - to return system friend lists. By default: '0'.
     */
    return_system?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsFriends["getMutual"] | friends.getMutual} method
 */
export interface FriendsGetMutualParams {
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'target_uid'.
     */
    source_uid?: number
    /**
     * ID of the user whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    target_uid?: number
    /**
     * IDs of the users whose friends will be checked against the friends of the user specified in 'source_uid'.
     */
    target_uids?: number[]
    /**
     * Sort order: 'random' - random order
     */
    order?: string
    /**
     * Number of mutual friends to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of mutual friends.
     */
    offset?: number
    /**
     * Return mutual friends total count
     */
    need_common_count?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsFriends["getOnline"] | friends.getOnline} method
 */
export interface FriendsGetOnlineParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Friend list ID. If this parameter is not set, information about all online friends is returned.
     */
    list_id?: number
    /**
     * '1' - to return an additional 'online_mobile' field, '0' - (default),
     */
    online_mobile?: boolean | 0 | 1
    /**
     * Sort order: 'random' - random order
     */
    order?: string
    /**
     * Number of friends to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number
}

/**
 * Params for {@link APIMethodsFriends["getRecent"] | friends.getRecent} method
 */
export interface FriendsGetRecentParams {
    /**
     * Number of recently added friends to return.
     */
    count?: number
}

/**
 * - `0` — date
 * - `1` — mutual
 * - `2` — rotate
 */
export type FriendsGetRequestsSort = 0 | 1 | 2

/**
 * Params for {@link APIMethodsFriends["getRequests"] | friends.getRequests} method
 */
export interface FriendsGetRequestsParams {
    /**
     * Offset needed to return a specific subset of friend requests.
     */
    offset?: number
    /**
     * Number of friend requests to return (default 100, maximum 1000).
     */
    count?: number
    /**
     * '1' - to return response messages from users who have sent a friend request or, if 'suggested' is set to '1', to return a list of suggested friends
     */
    extended?: boolean | 0 | 1
    /**
     * '1' - to return a list of mutual friends (up to 20), if any
     */
    need_mutual?: boolean | 0 | 1
    /**
     * '1' - to return outgoing requests, '0' - to return incoming requests (default)
     */
    out?: boolean | 0 | 1
    /**
     * Sort order: '1' - by number of mutual friends, '0' - by date
     */
    sort?: FriendsGetRequestsSort
    need_viewed?: boolean | 0 | 1
    /**
     * '1' - to return a list of suggested friends, '0' - to return friend requests (default)
     */
    suggested?: boolean | 0 | 1
    ref?: string
    fields?: Objects.VKUsersFields[]
}

export type FriendsGetSuggestionsFilter =
    | "contacts"
    | "mutual"
    | "mutual_contacts"

/**
 * Params for {@link APIMethodsFriends["getSuggestions"] | friends.getSuggestions} method
 */
export interface FriendsGetSuggestionsParams {
    /**
     * Types of potential friends to return: 'mutual' - users with many mutual friends , 'contacts' - users found with the [vk.com/dev/account.importContacts|account.importContacts] method , 'mutual_contacts' - users who imported the same contacts as the current user with the [vk.com/dev/account.importContacts|account.importContacts] method
     */
    filter?: FriendsGetSuggestionsFilter[]
    /**
     * Number of suggestions to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of suggestions.
     */
    offset?: number
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: , 'nom' - nominative (default) , 'gen' - genitive , 'dat' - dative , 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsFriends["search"] | friends.search} method
 */
export interface FriendsSearchParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
    /**
     * Offset needed to return a specific subset of friends.
     */
    offset?: number
    /**
     * Number of friends to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsGifts["get"] | gifts.get} method
 */
export interface GiftsGetParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Number of gifts to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
}

export type GroupsAddAddressWorkInfoStatus =
    | "always_opened"
    | "forever_closed"
    | "no_information"
    | "temporarily_closed"
    | "timetable"

/**
 * Params for {@link APIMethodsGroups["addAddress"] | groups.addAddress} method
 */
export interface GroupsAddAddressParams {
    group_id: number
    title: string
    address: string
    additional_address?: string
    city_id: number
    metro_id?: number
    latitude: number
    longitude: number
    phone?: string
    work_info_status?: Objects.VKGroupsAddressWorkInfoStatus
    timetable?: string
    is_main_address?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["addCallbackServer"] | groups.addCallbackServer} method
 */
export interface GroupsAddCallbackServerParams {
    group_id: number
    url: string
    title: string
    secret_key?: string
}

/**
 * Params for {@link APIMethodsGroups["addLink"] | groups.addLink} method
 */
export interface GroupsAddLinkParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Link URL.
     */
    link: string
    /**
     * Description text for the link.
     */
    text?: string
}

/**
 * Params for {@link APIMethodsGroups["approveRequest"] | groups.approveRequest} method
 */
export interface GroupsApproveRequestParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * User ID.
     */
    user_id: number
}

/**
 * Params for {@link APIMethodsGroups["ban"] | groups.ban} method
 */
export interface GroupsBanParams {
    group_id: number
    owner_id?: number
    end_date?: number
    reason?: number
    comment?: string
    comment_visible?: boolean | 0 | 1
}

export type GroupsCreateType = "event" | "group" | "public"
/**
 * - `0` — none
 * - `1` — place or business
 * - `2` — company or website
 * - `3` — person or group
 * - `4` — product or art
 */
export type GroupsCreateSubtype = 0 | 1 | 2 | 3 | 4

/**
 * Params for {@link APIMethodsGroups["create"] | groups.create} method
 */
export interface GroupsCreateParams {
    /**
     * Community title.
     */
    title: string
    /**
     * Community description (ignored for 'type' = 'public').
     */
    description?: string
    /**
     * Community type. Possible values: *'group' - group,, *'event' - event,, *'public' - public page
     */
    type?: GroupsCreateType
    /**
     * Category ID (for 'type' = 'public' only).
     */
    public_category?: number
    /**
     * Public page subcategory ID.
     */
    public_subcategory?: number
    /**
     * Public page subtype. Possible values: *'1' - place or small business,, *'2' - company, organization or website,, *'3' - famous person or group of people,, *'4' - product or work of art.
     */
    subtype?: GroupsCreateSubtype
}

/**
 * Params for {@link APIMethodsGroups["deleteAddress"] | groups.deleteAddress} method
 */
export interface GroupsDeleteAddressParams {
    group_id: number
    address_id: number
}

/**
 * Params for {@link APIMethodsGroups["deleteCallbackServer"] | groups.deleteCallbackServer} method
 */
export interface GroupsDeleteCallbackServerParams {
    group_id: number
    server_id: number
}

/**
 * Params for {@link APIMethodsGroups["deleteLink"] | groups.deleteLink} method
 */
export interface GroupsDeleteLinkParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Link ID.
     */
    link_id: number
}

/**
 * Params for {@link APIMethodsGroups["disableOnline"] | groups.disableOnline} method
 */
export interface GroupsDisableOnlineParams {
    group_id: number
}

export type GroupsEditAgeLimits = 1 | 2 | 3

/**
 * Params for {@link APIMethodsGroups["edit"] | groups.edit} method
 */
export interface GroupsEditParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Community title.
     */
    title?: string
    /**
     * Community description.
     */
    description?: string
    /**
     * Community screen name.
     */
    screen_name?: string
    /**
     * Community type. Possible values: *'0' - open,, *'1' - closed,, *'2' - private.
     */
    access?: Objects.VKGroupsGroupAccess
    /**
     * Website that will be displayed in the community information field.
     */
    website?: string
    /**
     * Community subject. Possible values: , *'1' - auto/moto,, *'2' - activity holidays,, *'3' - business,, *'4' - pets,, *'5' - health,, *'6' - dating and communication, , *'7' - games,, *'8' - IT (computers and software),, *'9' - cinema,, *'10' - beauty and fashion,, *'11' - cooking,, *'12' - art and culture,, *'13' - literature,, *'14' - mobile services and internet,, *'15' - music,, *'16' - science and technology,, *'17' - real estate,, *'18' - news and media,, *'19' - security,, *'20' - education,, *'21' - home and renovations,, *'22' - politics,, *'23' - food,, *'24' - industry,, *'25' - travel,, *'26' - work,, *'27' - entertainment,, *'28' - religion,, *'29' - family,, *'30' - sports,, *'31' - insurance,, *'32' - television,, *'33' - goods and services,, *'34' - hobbies,, *'35' - finance,, *'36' - photo,, *'37' - esoterics,, *'38' - electronics and appliances,, *'39' - erotic,, *'40' - humor,, *'41' - society, humanities,, *'42' - design and graphics.
     */
    subject?: Objects.VKGroupsGroupSubject
    /**
     * Organizer email (for events).
     */
    email?: string
    /**
     * Organizer phone number (for events).
     */
    phone?: string
    /**
     * RSS feed address for import (available only to communities with special permission. Contact vk.com/support to get it.
     */
    rss?: string
    /**
     * Event start date in Unixtime format.
     */
    event_start_date?: number
    /**
     * Event finish date in Unixtime format.
     */
    event_finish_date?: number
    /**
     * Organizer community ID (for events only).
     */
    event_group_id?: number
    /**
     * Public page category ID.
     */
    public_category?: number
    /**
     * Public page subcategory ID.
     */
    public_subcategory?: number
    /**
     * Founding date of a company or organization owning the community in "dd.mm.YYYY" format.
     */
    public_date?: string
    /**
     * Wall settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (groups and events only),, *'3' - closed (groups and events only).
     */
    wall?: Objects.VKGroupsGroupWall
    /**
     * Board topics settings. Possbile values: , *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    topics?: Objects.VKGroupsGroupTopics
    /**
     * Photos settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    photos?: Objects.VKGroupsGroupPhotos
    /**
     * Video settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    video?: Objects.VKGroupsGroupVideo
    /**
     * Audio settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    audio?: Objects.VKGroupsGroupAudio
    /**
     * Links settings (for public pages only). Possible values: *'0' - disabled,, *'1' - enabled.
     */
    links?: boolean | 0 | 1
    /**
     * Events settings (for public pages only). Possible values: *'0' - disabled,, *'1' - enabled.
     */
    events?: boolean | 0 | 1
    /**
     * Places settings (for public pages only). Possible values: *'0' - disabled,, *'1' - enabled.
     */
    places?: boolean | 0 | 1
    /**
     * Contacts settings (for public pages only). Possible values: *'0' - disabled,, *'1' - enabled.
     */
    contacts?: boolean | 0 | 1
    /**
     * Documents settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    docs?: Objects.VKGroupsGroupDocs
    /**
     * Wiki pages settings. Possible values: *'0' - disabled,, *'1' - open,, *'2' - limited (for groups and events only).
     */
    wiki?: Objects.VKGroupsGroupWiki
    /**
     * Community messages. Possible values: *'0' - disabled,, *'1' - enabled.
     */
    messages?: boolean | 0 | 1
    articles?: boolean | 0 | 1
    addresses?: boolean | 0 | 1
    /**
     * Community age limits. Possible values: *'1' - no limits,, *'2' - 16+,, *'3' - 18+.
     */
    age_limits?: Objects.VKGroupsGroupAgeLimits
    /**
     * Market settings. Possible values: *'0' - disabled,, *'1' - enabled.
     */
    market?: boolean | 0 | 1
    /**
     * Buttons details, see market/objects.json#/definitions/market_custom_button
     */
    market_buttons?: string
    /**
     * market comments settings. Possible values: *'0' - disabled,, *'1' - enabled.
     */
    market_comments?: boolean | 0 | 1
    /**
     * Market delivery countries.
     */
    market_country?: number[]
    /**
     * Market delivery cities (if only one country is specified).
     */
    market_city?: number[]
    /**
     * Market currency settings. Possbile values: , *'643' - Russian rubles,, *'980' - Ukrainian hryvnia,, *'398' - Kazakh tenge,, *'978' - Euro,, *'840' - US dollars
     */
    market_currency?: Objects.VKGroupsGroupMarketCurrency
    /**
     * Seller contact for market. Set '0' for community messages.
     */
    market_contact?: number
    /**
     * ID of a wiki page with market description.
     */
    market_wiki?: number
    /**
     * Obscene expressions filter in comments. Possible values: , *'0' - disabled,, *'1' - enabled.
     */
    obscene_filter?: boolean | 0 | 1
    /**
     * Stopwords filter in comments. Possible values: , *'0' - disabled,, *'1' - enabled.
     */
    obscene_stopwords?: boolean | 0 | 1
    toxic_filter?: boolean | 0 | 1
    disable_replies_from_groups?: boolean | 0 | 1
    /**
     * Keywords for stopwords filter.
     */
    obscene_words?: string[]
    main_section?: number
    secondary_section?: number
    /**
     * Country of the community.
     */
    country?: number
    /**
     * City of the community.
     */
    city?: number
}

export type GroupsEditAddressWorkInfoStatus =
    | "always_opened"
    | "forever_closed"
    | "no_information"
    | "temporarily_closed"
    | "timetable"

/**
 * Params for {@link APIMethodsGroups["editAddress"] | groups.editAddress} method
 */
export interface GroupsEditAddressParams {
    group_id: number
    address_id: number
    title?: string
    address?: string
    additional_address?: string
    city_id?: number
    metro_id?: number
    latitude?: number
    longitude?: number
    phone?: string
    work_info_status?: Objects.VKGroupsAddressWorkInfoStatus
    timetable?: string
    is_main_address?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["editCallbackServer"] | groups.editCallbackServer} method
 */
export interface GroupsEditCallbackServerParams {
    group_id: number
    server_id: number
    url: string
    title: string
    secret_key?: string
}

/**
 * Params for {@link APIMethodsGroups["editLink"] | groups.editLink} method
 */
export interface GroupsEditLinkParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Link ID.
     */
    link_id: number
    /**
     * New description text for the link.
     */
    text?: string
}

/**
 * Params for {@link APIMethodsGroups["editManager"] | groups.editManager} method
 */
export interface GroupsEditManagerParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * User ID.
     */
    user_id: number
    /**
     * Manager role. Possible values: *'moderator',, *'editor',, *'administrator',, *'advertiser'.
     */
    role?: Objects.VKGroupsGroupRole
    /**
     * '1' — allow the manager to accept community calls.
     */
    is_call_operator?: boolean | 0 | 1
    /**
     * '1' - to show the manager in Contacts block of the community.
     */
    is_contact?: boolean | 0 | 1
    /**
     * Position to show in Contacts block.
     */
    contact_position?: string
    /**
     * Contact phone.
     */
    contact_phone?: string
    /**
     * Contact e-mail.
     */
    contact_email?: string
}

/**
 * Params for {@link APIMethodsGroups["enableOnline"] | groups.enableOnline} method
 */
export interface GroupsEnableOnlineParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["get"] | groups.get} method
 */
export interface GroupsGetParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * '1' - to return complete information about a user's communities, '0' - to return a list of community IDs without any additional fields (default),
     */
    extended?: boolean | 0 | 1
    /**
     * Types of communities to return: 'admin' - to return communities administered by the user , 'editor' - to return communities where the user is an administrator or editor, 'moder' - to return communities where the user is an administrator, editor, or moderator, 'groups' - to return only groups, 'publics' - to return only public pages, 'events' - to return only events
     */
    filter?: Objects.VKGroupsFilter[]
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKGroupsFields[]
    /**
     * Offset needed to return a specific subset of communities.
     */
    offset?: number
    /**
     * Number of communities to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsGroups["getAddresses"] | groups.getAddresses} method
 */
export interface GroupsGetAddressesParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number
    address_ids?: number[]
    /**
     * Latitude of  the user geo position.
     */
    latitude?: number
    /**
     * Longitude of the user geo position.
     */
    longitude?: number
    /**
     * Offset needed to return a specific subset of community addresses.
     */
    offset?: number
    /**
     * Number of community addresses to return.
     */
    count?: number
    /**
     * Address fields
     */
    fields?: Objects.VKAddressFields[]
}

/**
 * Params for {@link APIMethodsGroups["getBanned"] | groups.getBanned} method
 */
export interface GroupsGetBannedParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number
    /**
     * Number of users to return.
     */
    count?: number
    fields?: Objects.VKBaseUserGroupFields[]
    owner_id?: number
}

/**
 * Params for {@link APIMethodsGroups["getById"] | groups.getById} method
 */
export interface GroupsGetByIdParams {
    /**
     * IDs or screen names of communities.
     */
    group_ids?: (number | string)[]
    /**
     * ID or screen name of the community.
     */
    group_id?: number | string
    /**
     * Group fields to return.
     */
    fields?: Objects.VKGroupsFields[]
}

/**
 * Params for {@link APIMethodsGroups["getCallbackConfirmationCode"] | groups.getCallbackConfirmationCode} method
 */
export interface GroupsGetCallbackConfirmationCodeParams {
    /**
     * Community ID.
     */
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["getCallbackServers"] | groups.getCallbackServers} method
 */
export interface GroupsGetCallbackServersParams {
    group_id: number
    server_ids?: number[]
}

/**
 * Params for {@link APIMethodsGroups["getCallbackSettings"] | groups.getCallbackSettings} method
 */
export interface GroupsGetCallbackSettingsParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Server ID.
     */
    server_id?: number
}

/**
 * Params for {@link APIMethodsGroups["getCatalogInfo"] | groups.getCatalogInfo} method
 */
export interface GroupsGetCatalogInfoParams {
    /**
     * 1 - to return communities count and three communities for preview. By default: 0.
     */
    extended?: boolean | 0 | 1
    /**
     * 1 - to return subcategories info. By default: 0.
     */
    subcategories?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["getInvitedUsers"] | groups.getInvitedUsers} method
 */
export interface GroupsGetInvitedUsersParams {
    /**
     * Group ID to return invited users for.
     */
    group_id: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of results to return.
     */
    count?: number
    /**
     * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname. Possible values: *'nom' - nominative (default),, *'gen' - genitive,, *'dat' - dative,, *'acc' - accusative, , *'ins' - instrumental,, *'abl' - prepositional.
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsGroups["getInvites"] | groups.getInvites} method
 */
export interface GroupsGetInvitesParams {
    /**
     * Offset needed to return a specific subset of invitations.
     */
    offset?: number
    /**
     * Number of invitations to return.
     */
    count?: number
    /**
     * '1' - to return additional [vk.com/dev/fields_groups|fields] for communities..
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["getLongPollServer"] | groups.getLongPollServer} method
 */
export interface GroupsGetLongPollServerParams {
    /**
     * Community ID.
     */
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["getLongPollSettings"] | groups.getLongPollSettings} method
 */
export interface GroupsGetLongPollSettingsParams {
    /**
     * Community ID.
     */
    group_id: number
}

export type GroupsGetMembersSort =
    | "id_asc"
    | "id_desc"
    | "time_asc"
    | "time_desc"
export type GroupsGetMembersFilter =
    | "donut"
    | "friends"
    | "managers"
    | "unsure"
    | "unsure_friends"

/**
 * Params for {@link APIMethodsGroups["getMembers"] | groups.getMembers} method
 */
export interface GroupsGetMembersParams {
    /**
     * ID or screen name of the community.
     */
    group_id?: number | string
    /**
     * Sort order. Available values: 'id_asc', 'id_desc', 'time_asc', 'time_desc'. 'time_asc' and 'time_desc' are availavle only if the method is called by the group's 'moderator'.
     */
    sort?: GroupsGetMembersSort
    /**
     * Offset needed to return a specific subset of community members.
     */
    offset?: number
    /**
     * Number of community members to return.
     */
    count?: number
    /**
     * List of additional fields to be returned. Available values: 'sex, bdate, city, country, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, online_mobile, lists, domain, has_mobile, contacts, connections, site, education, universities, schools, can_post, can_see_all_posts, can_see_audio, can_write_private_message, status, last_seen, common_count, relation, relatives, counters'.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * *'friends' - only friends in this community will be returned,, *'unsure' - only those who pressed 'I may attend' will be returned (if it's an event).
     */
    filter?: GroupsGetMembersFilter
}

/**
 * Params for {@link APIMethodsGroups["getOnlineStatus"] | groups.getOnlineStatus} method
 */
export interface GroupsGetOnlineStatusParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["getRequests"] | groups.getRequests} method
 */
export interface GroupsGetRequestsParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of results to return.
     */
    count?: number
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
}

/**
 * Params for {@link APIMethodsGroups["getSettings"] | groups.getSettings} method
 */
export interface GroupsGetSettingsParams {
    /**
     * Community ID.
     */
    group_id: number | string
}

/**
 * Params for {@link APIMethodsGroups["getTagList"] | groups.getTagList} method
 */
export interface GroupsGetTagListParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["invite"] | groups.invite} method
 */
export interface GroupsInviteParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * User ID.
     */
    user_id?: number
    /**
     * User IDs.
     */
    user_ids_list?: number[]
}

/**
 * Params for {@link APIMethodsGroups["isMember"] | groups.isMember} method
 */
export interface GroupsIsMemberParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number | string
    /**
     * User ID.
     */
    user_id?: number
    /**
     * User IDs.
     */
    user_ids?: number[]
    /**
     * '1' - to return an extended response with additional fields. By default: '0'.
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["join"] | groups.join} method
 */
export interface GroupsJoinParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number
    /**
     * Optional parameter which is taken into account when 'gid' belongs to the event: '1' - Perhaps I will attend, '0' - I will be there for sure (default), ,
     */
    not_sure?: string
}

/**
 * Params for {@link APIMethodsGroups["leave"] | groups.leave} method
 */
export interface GroupsLeaveParams {
    /**
     * ID or screen name of the community.
     */
    group_id: number
}

/**
 * Params for {@link APIMethodsGroups["removeUser"] | groups.removeUser} method
 */
export interface GroupsRemoveUserParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * User ID.
     */
    user_id: number
}

/**
 * Params for {@link APIMethodsGroups["reorderLink"] | groups.reorderLink} method
 */
export interface GroupsReorderLinkParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Link ID.
     */
    link_id: number
    /**
     * ID of the link after which to place the link with 'link_id'.
     */
    after?: number
}

export type GroupsSearchType = "event" | "group" | "page"
/**
 * - `0` — default
 * - `1` — growth
 * - `2` — attendance
 * - `3` — likes
 * - `4` — comments
 * - `5` — entries
 * - `6` — members
 */
export type GroupsSearchSort = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Params for {@link APIMethodsGroups["search"] | groups.search} method
 */
export interface GroupsSearchParams {
    /**
     * Search query string.
     */
    q: string
    /**
     * Community type. Possible values: 'group, page, event.'
     */
    type?: GroupsSearchType
    /**
     * Country ID.
     */
    country_id?: number
    /**
     * City ID. If this parameter is transmitted, country_id is ignored.
     */
    city_id?: number
    /**
     * '1' - to return only upcoming events. Works with the 'type' = 'event' only.
     */
    future?: boolean | 0 | 1
    /**
     * '1' - to return communities with enabled market only.
     */
    market?: boolean | 0 | 1
    /**
     * Sort order. Possible values: *'0' - default sorting (similar the full version of the site),, *'1' - by growth speed,, *'2'- by the "day attendance/members number" ratio,, *'3' - by the "Likes number/members number" ratio,, *'4' - by the "comments number/members number" ratio,, *'5' - by the "boards entries number/members number" ratio.
     */
    sort?: GroupsSearchSort
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of communities to return. "Note that you can not receive more than first thousand of results, regardless of 'count' and 'offset' values."
     */
    count?: number
}

/**
 * Params for {@link APIMethodsGroups["setCallbackSettings"] | groups.setCallbackSettings} method
 */
export interface GroupsSetCallbackSettingsParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Server ID.
     */
    server_id?: number
    api_version?: string
    /**
     * A new incoming message has been received ('0' - disabled, '1' - enabled).
     */
    message_new?: boolean | 0 | 1
    /**
     * A new outcoming message has been received ('0' - disabled, '1' - enabled).
     */
    message_reply?: boolean | 0 | 1
    /**
     * Allowed messages notifications ('0' - disabled, '1' - enabled).
     */
    message_allow?: boolean | 0 | 1
    message_edit?: boolean | 0 | 1
    /**
     * Denied messages notifications ('0' - disabled, '1' - enabled).
     */
    message_deny?: boolean | 0 | 1
    message_typing_state?: boolean | 0 | 1
    /**
     * Messages read notifications ('0' - disabled, '1' - enabled).
     */
    message_read?: boolean | 0 | 1
    /**
     * New photos notifications ('0' - disabled, '1' - enabled).
     */
    photo_new?: boolean | 0 | 1
    /**
     * New audios notifications ('0' - disabled, '1' - enabled).
     */
    audio_new?: boolean | 0 | 1
    /**
     * New videos notifications ('0' - disabled, '1' - enabled).
     */
    video_new?: boolean | 0 | 1
    /**
     * New wall replies notifications ('0' - disabled, '1' - enabled).
     */
    wall_reply_new?: boolean | 0 | 1
    /**
     * Wall replies edited notifications ('0' - disabled, '1' - enabled).
     */
    wall_reply_edit?: boolean | 0 | 1
    /**
     * A wall comment has been deleted ('0' - disabled, '1' - enabled).
     */
    wall_reply_delete?: boolean | 0 | 1
    /**
     * A wall comment has been restored ('0' - disabled, '1' - enabled).
     */
    wall_reply_restore?: boolean | 0 | 1
    /**
     * New wall posts notifications ('0' - disabled, '1' - enabled).
     */
    wall_post_new?: boolean | 0 | 1
    /**
     * New wall posts notifications ('0' - disabled, '1' - enabled).
     */
    wall_repost?: boolean | 0 | 1
    /**
     * Scheduled post added to time slot ('0' - disabled, '1' - enabled).
     */
    wall_schedule_post_new?: boolean | 0 | 1
    /**
     * Scheduled post removed from time slot ('0' - disabled, '1' - enabled).
     */
    wall_schedule_post_delete?: boolean | 0 | 1
    /**
     * New board posts notifications ('0' - disabled, '1' - enabled).
     */
    board_post_new?: boolean | 0 | 1
    /**
     * Board posts edited notifications ('0' - disabled, '1' - enabled).
     */
    board_post_edit?: boolean | 0 | 1
    /**
     * Board posts restored notifications ('0' - disabled, '1' - enabled).
     */
    board_post_restore?: boolean | 0 | 1
    /**
     * Board posts deleted notifications ('0' - disabled, '1' - enabled).
     */
    board_post_delete?: boolean | 0 | 1
    /**
     * New comment to photo notifications ('0' - disabled, '1' - enabled).
     */
    photo_comment_new?: boolean | 0 | 1
    /**
     * A photo comment has been edited ('0' - disabled, '1' - enabled).
     */
    photo_comment_edit?: boolean | 0 | 1
    /**
     * A photo comment has been deleted ('0' - disabled, '1' - enabled).
     */
    photo_comment_delete?: boolean | 0 | 1
    /**
     * A photo comment has been restored ('0' - disabled, '1' - enabled).
     */
    photo_comment_restore?: boolean | 0 | 1
    /**
     * New comment to video notifications ('0' - disabled, '1' - enabled).
     */
    video_comment_new?: boolean | 0 | 1
    /**
     * A video comment has been edited ('0' - disabled, '1' - enabled).
     */
    video_comment_edit?: boolean | 0 | 1
    /**
     * A video comment has been deleted ('0' - disabled, '1' - enabled).
     */
    video_comment_delete?: boolean | 0 | 1
    /**
     * A video comment has been restored ('0' - disabled, '1' - enabled).
     */
    video_comment_restore?: boolean | 0 | 1
    /**
     * New comment to market item notifications ('0' - disabled, '1' - enabled).
     */
    market_comment_new?: boolean | 0 | 1
    /**
     * A market comment has been edited ('0' - disabled, '1' - enabled).
     */
    market_comment_edit?: boolean | 0 | 1
    /**
     * A market comment has been deleted ('0' - disabled, '1' - enabled).
     */
    market_comment_delete?: boolean | 0 | 1
    /**
     * A market comment has been restored ('0' - disabled, '1' - enabled).
     */
    market_comment_restore?: boolean | 0 | 1
    market_order_new?: boolean | 0 | 1
    market_order_edit?: boolean | 0 | 1
    /**
     * A vote in a public poll has been added ('0' - disabled, '1' - enabled).
     */
    poll_vote_new?: boolean | 0 | 1
    /**
     * Joined community notifications ('0' - disabled, '1' - enabled).
     */
    group_join?: boolean | 0 | 1
    /**
     * Left community notifications ('0' - disabled, '1' - enabled).
     */
    group_leave?: boolean | 0 | 1
    group_change_settings?: boolean | 0 | 1
    group_change_photo?: boolean | 0 | 1
    group_officers_edit?: boolean | 0 | 1
    /**
     * User added to community blacklist
     */
    user_block?: boolean | 0 | 1
    /**
     * User removed from community blacklist
     */
    user_unblock?: boolean | 0 | 1
    /**
     * New form in lead forms
     */
    lead_forms_new?: boolean | 0 | 1
    like_add?: boolean | 0 | 1
    like_remove?: boolean | 0 | 1
    message_event?: boolean | 0 | 1
    message_reaction_event?: boolean | 0 | 1
    donut_subscription_create?: boolean | 0 | 1
    donut_subscription_prolonged?: boolean | 0 | 1
    donut_subscription_cancelled?: boolean | 0 | 1
    donut_subscription_price_changed?: boolean | 0 | 1
    donut_subscription_expired?: boolean | 0 | 1
    donut_money_withdraw?: boolean | 0 | 1
    donut_money_withdraw_error?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["setLongPollSettings"] | groups.setLongPollSettings} method
 */
export interface GroupsSetLongPollSettingsParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Sets whether Long Poll is enabled ('0' - disabled, '1' - enabled).
     */
    enabled?: boolean | 0 | 1
    api_version?: string
    /**
     * A new incoming message has been received ('0' - disabled, '1' - enabled).
     */
    message_new?: boolean | 0 | 1
    /**
     * A new outcoming message has been received ('0' - disabled, '1' - enabled).
     */
    message_reply?: boolean | 0 | 1
    /**
     * Allowed messages notifications ('0' - disabled, '1' - enabled).
     */
    message_allow?: boolean | 0 | 1
    /**
     * Denied messages notifications ('0' - disabled, '1' - enabled).
     */
    message_deny?: boolean | 0 | 1
    /**
     * A message has been edited ('0' - disabled, '1' - enabled).
     */
    message_edit?: boolean | 0 | 1
    message_typing_state?: boolean | 0 | 1
    /**
     * Messages read notifications ('0' - disabled, '1' - enabled).
     */
    message_read?: boolean | 0 | 1
    /**
     * New photos notifications ('0' - disabled, '1' - enabled).
     */
    photo_new?: boolean | 0 | 1
    /**
     * New audios notifications ('0' - disabled, '1' - enabled).
     */
    audio_new?: boolean | 0 | 1
    /**
     * New videos notifications ('0' - disabled, '1' - enabled).
     */
    video_new?: boolean | 0 | 1
    /**
     * New wall replies notifications ('0' - disabled, '1' - enabled).
     */
    wall_reply_new?: boolean | 0 | 1
    /**
     * Wall replies edited notifications ('0' - disabled, '1' - enabled).
     */
    wall_reply_edit?: boolean | 0 | 1
    /**
     * A wall comment has been deleted ('0' - disabled, '1' - enabled).
     */
    wall_reply_delete?: boolean | 0 | 1
    /**
     * A wall comment has been restored ('0' - disabled, '1' - enabled).
     */
    wall_reply_restore?: boolean | 0 | 1
    /**
     * New wall posts notifications ('0' - disabled, '1' - enabled).
     */
    wall_post_new?: boolean | 0 | 1
    /**
     * New wall posts notifications ('0' - disabled, '1' - enabled).
     */
    wall_repost?: boolean | 0 | 1
    /**
     * New board posts notifications ('0' - disabled, '1' - enabled).
     */
    board_post_new?: boolean | 0 | 1
    /**
     * Board posts edited notifications ('0' - disabled, '1' - enabled).
     */
    board_post_edit?: boolean | 0 | 1
    /**
     * Board posts restored notifications ('0' - disabled, '1' - enabled).
     */
    board_post_restore?: boolean | 0 | 1
    /**
     * Board posts deleted notifications ('0' - disabled, '1' - enabled).
     */
    board_post_delete?: boolean | 0 | 1
    /**
     * New comment to photo notifications ('0' - disabled, '1' - enabled).
     */
    photo_comment_new?: boolean | 0 | 1
    /**
     * A photo comment has been edited ('0' - disabled, '1' - enabled).
     */
    photo_comment_edit?: boolean | 0 | 1
    /**
     * A photo comment has been deleted ('0' - disabled, '1' - enabled).
     */
    photo_comment_delete?: boolean | 0 | 1
    /**
     * A photo comment has been restored ('0' - disabled, '1' - enabled).
     */
    photo_comment_restore?: boolean | 0 | 1
    /**
     * New comment to video notifications ('0' - disabled, '1' - enabled).
     */
    video_comment_new?: boolean | 0 | 1
    /**
     * A video comment has been edited ('0' - disabled, '1' - enabled).
     */
    video_comment_edit?: boolean | 0 | 1
    /**
     * A video comment has been deleted ('0' - disabled, '1' - enabled).
     */
    video_comment_delete?: boolean | 0 | 1
    /**
     * A video comment has been restored ('0' - disabled, '1' - enabled).
     */
    video_comment_restore?: boolean | 0 | 1
    /**
     * New comment to market item notifications ('0' - disabled, '1' - enabled).
     */
    market_comment_new?: boolean | 0 | 1
    /**
     * A market comment has been edited ('0' - disabled, '1' - enabled).
     */
    market_comment_edit?: boolean | 0 | 1
    /**
     * A market comment has been deleted ('0' - disabled, '1' - enabled).
     */
    market_comment_delete?: boolean | 0 | 1
    /**
     * A market comment has been restored ('0' - disabled, '1' - enabled).
     */
    market_comment_restore?: boolean | 0 | 1
    /**
     * A vote in a public poll has been added ('0' - disabled, '1' - enabled).
     */
    poll_vote_new?: boolean | 0 | 1
    /**
     * Joined community notifications ('0' - disabled, '1' - enabled).
     */
    group_join?: boolean | 0 | 1
    /**
     * Left community notifications ('0' - disabled, '1' - enabled).
     */
    group_leave?: boolean | 0 | 1
    group_change_settings?: boolean | 0 | 1
    group_change_photo?: boolean | 0 | 1
    group_officers_edit?: boolean | 0 | 1
    /**
     * User added to community blacklist
     */
    user_block?: boolean | 0 | 1
    /**
     * User removed from community blacklist
     */
    user_unblock?: boolean | 0 | 1
    like_add?: boolean | 0 | 1
    like_remove?: boolean | 0 | 1
    message_event?: boolean | 0 | 1
    message_reaction_event?: boolean | 0 | 1
    donut_subscription_create?: boolean | 0 | 1
    donut_subscription_prolonged?: boolean | 0 | 1
    donut_subscription_cancelled?: boolean | 0 | 1
    donut_subscription_price_changed?: boolean | 0 | 1
    donut_subscription_expired?: boolean | 0 | 1
    donut_money_withdraw?: boolean | 0 | 1
    donut_money_withdraw_error?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["setSettings"] | groups.setSettings} method
 */
export interface GroupsSetSettingsParams {
    group_id: number
    messages?: boolean | 0 | 1
    /**
     * By enabling bot abilities, you can send users messages with a customized keyboard attached as well as use other promotional abilities
     */
    bots_capabilities?: boolean | 0 | 1
    /**
     * If this setting is enabled, users will see a Start button when they start a chat with your community for the first time
     */
    bots_start_button?: boolean | 0 | 1
    /**
     * If this setting is enabled then users can add your community to a chat
     */
    bots_add_to_chat?: boolean | 0 | 1
    /**
     * If this setting is enabled then online booking chatbot add in your community chats
     */
    bot_online_booking_enabled?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsGroups["setUserNote"] | groups.setUserNote} method
 */
export interface GroupsSetUserNoteParams {
    group_id: number
    user_id: number
    /**
     * Note body
     */
    note?: string
}

export type GroupsTagAddTagColor =
    | "454647"
    | "45678f"
    | "4bb34b"
    | "5181b8"
    | "539b9c"
    | "5c9ce6"
    | "63b9ba"
    | "6bc76b"
    | "76787a"
    | "792ec0"
    | "7a6c4f"
    | "7ececf"
    | "9e8d6b"
    | "a162de"
    | "aaaeb3"
    | "bbaa84"
    | "e64646"
    | "ff5c5c"
    | "ffa000"
    | "ffc107"

/**
 * Params for {@link APIMethodsGroups["tagAdd"] | groups.tagAdd} method
 */
export interface GroupsTagAddParams {
    group_id: number
    tag_name: string
    tag_color?: GroupsTagAddTagColor
}

export type GroupsTagBindAct = "bind" | "unbind"

/**
 * Params for {@link APIMethodsGroups["tagBind"] | groups.tagBind} method
 */
export interface GroupsTagBindParams {
    group_id: number
    tag_id: number
    user_id: number
    /**
     * Describe the action
     */
    act: GroupsTagBindAct
}

/**
 * Params for {@link APIMethodsGroups["tagDelete"] | groups.tagDelete} method
 */
export interface GroupsTagDeleteParams {
    group_id: number
    tag_id: number
}

/**
 * Params for {@link APIMethodsGroups["tagUpdate"] | groups.tagUpdate} method
 */
export interface GroupsTagUpdateParams {
    group_id: number
    tag_id: number
    tag_name: string
}

export type GroupsToggleMarketState = "advanced" | "basic" | "none"

/**
 * Params for {@link APIMethodsGroups["toggleMarket"] | groups.toggleMarket} method
 */
export interface GroupsToggleMarketParams {
    group_id: number
    state: Objects.VKGroupsMarketState
    ref?: string
}

/**
 * Params for {@link APIMethodsGroups["unban"] | groups.unban} method
 */
export interface GroupsUnbanParams {
    group_id: number
    owner_id?: number
}

/**
 * Params for {@link APIMethodsLeadForms["create"] | leadForms.create} method
 */
export interface LeadFormsCreateParams {
    group_id: number
    name: string
    title: string
    description: string
    questions: string
    policy_link_url: string
    photo?: string
    confirmation?: string
    site_link_url?: string
    active?: boolean | 0 | 1
    once_per_user?: boolean | 0 | 1
    pixel_code?: string
    notify_admins?: number[]
    notify_emails?: string[]
}

/**
 * Params for {@link APIMethodsLeadForms["delete"] | leadForms.delete} method
 */
export interface LeadFormsDeleteParams {
    group_id: number
    form_id: number
}

/**
 * Params for {@link APIMethodsLeadForms["get"] | leadForms.get} method
 */
export interface LeadFormsGetParams {
    group_id: number
    form_id: number
}

/**
 * Params for {@link APIMethodsLeadForms["getLeads"] | leadForms.getLeads} method
 */
export interface LeadFormsGetLeadsParams {
    group_id: number
    form_id: number
    limit?: number
    next_page_token?: string
}

/**
 * Params for {@link APIMethodsLeadForms["list"] | leadForms.list} method
 */
export interface LeadFormsListParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsLeadForms["update"] | leadForms.update} method
 */
export interface LeadFormsUpdateParams {
    group_id: number
    form_id: number
    name: string
    title: string
    description: string
    questions: string
    policy_link_url: string
    photo?: string
    confirmation?: string
    site_link_url?: string
    active?: boolean | 0 | 1
    once_per_user?: boolean | 0 | 1
    pixel_code?: string
    notify_admins?: number[]
    notify_emails?: string[]
}

/**
 * Params for {@link APIMethodsLikes["add"] | likes.add} method
 */
export interface LikesAddParams {
    /**
     * Object type: 'post' - post on user or community wall, 'comment' - comment on a wall post, 'photo' - photo, 'audio' - audio, 'video' - video, 'story' - story, 'note' - note, 'photo_comment' - comment on the photo, 'video_comment' - comment on the video, 'topic_comment' - comment in the discussion, 'sitepage' - page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: Objects.VKLikesType
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number
    /**
     * Object ID.
     */
    item_id: number
    /**
     * Access key required for an object owned by a private entity.
     */
    access_key?: string
    /**
     * Impersonate group
     */
    from_group?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsLikes["delete"] | likes.delete} method
 */
export interface LikesDeleteParams {
    /**
     * Object type: 'post' - post on user or community wall, 'comment' - comment on a wall post, 'photo' - photo, 'audio' - audio, 'video' - video, 'story' - story, 'note' - note, 'photo_comment' - comment on the photo, 'video_comment' - comment on the video, 'topic_comment' - comment in the discussion, 'sitepage' - page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: Objects.VKLikesType
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number
    /**
     * Object ID.
     */
    item_id: number
    /**
     * Access key required for an object owned by a private entity.
     */
    access_key?: string
    /**
     * Impersonate group
     */
    from_group?: boolean | 0 | 1
}

export type LikesGetListFilter = "copies" | "likes"
export type LikesGetListFriendsOnly = 0 | 1 | 2 | 3

/**
 * Params for {@link APIMethodsLikes["getList"] | likes.getList} method
 */
export interface LikesGetListParams {
    /**
     * , Object type: 'post' - post on user or community wall, 'comment' - comment on a wall post, 'photo' - photo, 'audio' - audio, 'video' - video, 'story' - story, 'note' - note, 'photo_comment' - comment on the photo, 'video_comment' - comment on the video, 'topic_comment' - comment in the discussion, 'sitepage' - page of the site where the [vk.com/dev/Like|Like widget] is installed
     */
    type: Objects.VKLikesType
    /**
     * ID of the user, community, or application that owns the object. If the 'type' parameter is set as 'sitepage', the application ID is passed as 'owner_id'. Use negative value for a community id. If the 'type' parameter is not set, the 'owner_id' is assumed to be either the current user or the same application ID as if the 'type' parameter was set to 'sitepage'.
     */
    owner_id?: number
    /**
     * Object ID. If 'type' is set as 'sitepage', 'item_id' can include the 'page_id' parameter value used during initialization of the [vk.com/dev/Like|Like widget].
     */
    item_id?: number
    /**
     * URL of the page where the [vk.com/dev/Like|Like widget] is installed. Used instead of the 'item_id' parameter.
     */
    page_url?: string
    /**
     * Filters to apply: 'likes' - returns information about all users who liked the object (default), 'copies' - returns information only about users who told their friends about the object
     */
    filter?: LikesGetListFilter
    /**
     * Specifies which users are returned: '1' - to return only the current user's friends, '0' - to return all users (default)
     */
    friends_only?: LikesGetListFriendsOnly
    /**
     * Specifies whether extended information will be returned. '1' - to return extended information about users and communities from the 'Likes' list, '0' - to return no additional information (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Offset needed to select a specific subset of users.
     */
    offset?: number
    /**
     * Number of user IDs to return (maximum '1000'). Default is '100' if 'friends_only' is set to '0', otherwise, the default is '10' if 'friends_only' is set to '1'.
     */
    count?: number
    skip_own?: boolean | 0 | 1
    fields?: string[]
}

/**
 * Params for {@link APIMethodsLikes["isLiked"] | likes.isLiked} method
 */
export interface LikesIsLikedParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Object type: 'post' - post on user or community wall, 'comment' - comment on a wall post, 'photo' - photo, 'audio' - audio, 'video' - video, 'story' - story, 'note' - note, 'photo_comment' - comment on the photo, 'video_comment' - comment on the video, 'topic_comment' - comment in the discussion
     */
    type: Objects.VKLikesType
    /**
     * ID of the user or community that owns the object.
     */
    owner_id?: number
    /**
     * Object ID.
     */
    item_id: number
}

/**
 * Params for {@link APIMethodsMarket["add"] | market.add} method
 */
export interface MarketAddParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item name.
     */
    name: string
    /**
     * Item description.
     */
    description: string
    /**
     * Item category ID.
     */
    category_id: number
    /**
     * Item price.
     */
    price?: number
    old_price?: number
    /**
     * Item status ('1' - deleted, '0' - not deleted).
     */
    deleted?: boolean | 0 | 1
    /**
     * Cover photo ID.
     */
    main_photo_id?: number
    /**
     * IDs of additional photos.
     */
    photo_ids?: number[]
    /**
     * IDs of additional videos.
     */
    video_ids?: number[]
    /**
     * Url for button in market item.
     */
    url?: string
    /**
     * IDs of properties variants.
     */
    variant_ids?: number[]
    /**
     * Is main in their group.
     */
    is_main_variant?: boolean | 0 | 1
    dimension_width?: number
    dimension_height?: number
    dimension_length?: number
    weight?: number
    sku?: string
    stock_amount?: number
}

/**
 * Params for {@link APIMethodsMarket["addAlbum"] | market.addAlbum} method
 */
export interface MarketAddAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Collection title.
     */
    title: string
    /**
     * Cover photo ID.
     */
    photo_id?: number
    /**
     * Set as main ('1' - set, '0' - no).
     */
    main_album?: boolean | 0 | 1
    /**
     * Set as hidden
     */
    is_hidden?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["addProperty"] | market.addProperty} method
 */
export interface MarketAddPropertyParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Property name.
     */
    title: string
}

/**
 * Params for {@link APIMethodsMarket["addPropertyVariant"] | market.addPropertyVariant} method
 */
export interface MarketAddPropertyVariantParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Property id.
     */
    property_id: number
    /**
     * Variant name.
     */
    title: string
}

/**
 * Params for {@link APIMethodsMarket["addToAlbum"] | market.addToAlbum} method
 */
export interface MarketAddToAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    item_ids: number[]
    /**
     * Collections IDs to add item to.
     */
    album_ids: number[]
}

/**
 * Params for {@link APIMethodsMarket["createComment"] | market.createComment} method
 */
export interface MarketCreateCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * Comment text (required if 'attachments' parameter is not specified)
     */
    message?: string
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
     */
    attachments?: string[]
    /**
     * '1' - comment will be published on behalf of a community, '0' - on behalf of a user (by default).
     */
    from_group?: boolean | 0 | 1
    /**
     * ID of a comment to reply with current comment to.
     */
    reply_to_comment?: number
    /**
     * Sticker ID.
     */
    sticker_id?: number
    /**
     * Random value to avoid resending one comment.
     */
    guid?: string
}

/**
 * Params for {@link APIMethodsMarket["delete"] | market.delete} method
 */
export interface MarketDeleteParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
}

/**
 * Params for {@link APIMethodsMarket["deleteAlbum"] | market.deleteAlbum} method
 */
export interface MarketDeleteAlbumParams {
    /**
     * ID of an collection owner community.
     */
    owner_id: number
    /**
     * Collection ID.
     */
    album_id: number
}

/**
 * Params for {@link APIMethodsMarket["deleteComment"] | market.deleteComment} method
 */
export interface MarketDeleteCommentParams {
    /**
     * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number
    /**
     * comment id
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsMarket["deleteProperty"] | market.deleteProperty} method
 */
export interface MarketDeletePropertyParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Property id.
     */
    property_id: number
}

/**
 * Params for {@link APIMethodsMarket["deletePropertyVariant"] | market.deletePropertyVariant} method
 */
export interface MarketDeletePropertyVariantParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Variant id.
     */
    variant_id: number
}

/**
 * Params for {@link APIMethodsMarket["edit"] | market.edit} method
 */
export interface MarketEditParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * Item name.
     */
    name?: string
    /**
     * Item description.
     */
    description?: string
    /**
     * Item category ID.
     */
    category_id?: number
    /**
     * Item price.
     */
    price?: number
    old_price?: number
    /**
     * Item status ('1' - deleted, '0' - not deleted).
     */
    deleted?: boolean | 0 | 1
    /**
     * Cover photo ID.
     */
    main_photo_id?: number
    /**
     * IDs of additional photos.
     */
    photo_ids?: number[]
    /**
     * IDs of additional videos.
     */
    video_ids?: number[]
    /**
     * Url for button in market item.
     */
    url?: string
    /**
     * IDs of properties variants.
     */
    variant_ids?: number[]
    /**
     * Is main in their group.
     */
    is_main_variant?: boolean | 0 | 1
    dimension_width?: number
    dimension_height?: number
    dimension_length?: number
    weight?: number
    sku?: string
    stock_amount?: number
}

/**
 * Params for {@link APIMethodsMarket["editAlbum"] | market.editAlbum} method
 */
export interface MarketEditAlbumParams {
    /**
     * ID of an collection owner community.
     */
    owner_id: number
    /**
     * Collection ID.
     */
    album_id: number
    /**
     * Collection title.
     */
    title: string
    /**
     * Cover photo id
     */
    photo_id?: number
    /**
     * Set as main ('1' - set, '0' - no).
     */
    main_album?: boolean | 0 | 1
    /**
     * Set as hidden
     */
    is_hidden?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["editComment"] | market.editComment} method
 */
export interface MarketEditCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * New comment text (required if 'attachments' are not specified), , 2048 symbols maximum.
     */
    message?: string
    /**
     * Comma-separated list of objects attached to a comment. The field is submitted the following way: , "'<owner_id>_<media_id>,<owner_id>_<media_id>'", , '' - media attachment type: "'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document", , '<owner_id>' - media owner id, '<media_id>' - media attachment id, , For example: "photo100172_166443618,photo66748_265827614",
     */
    attachments?: string[]
}

export type MarketEditOrderPaymentStatus = "not_paid" | "paid" | "returned"

/**
 * Params for {@link APIMethodsMarket["editOrder"] | market.editOrder} method
 */
export interface MarketEditOrderParams {
    user_id: number
    order_id: number
    merchant_comment?: string
    status?: number
    track_number?: string
    payment_status?: MarketEditOrderPaymentStatus
    delivery_price?: number
    width?: number
    length?: number
    height?: number
    weight?: number
    comment_for_user?: string
    receipt_link?: string
}

/**
 * Params for {@link APIMethodsMarket["editProperty"] | market.editProperty} method
 */
export interface MarketEditPropertyParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Property id.
     */
    property_id: number
    /**
     * Property name
     */
    title: string
}

/**
 * Params for {@link APIMethodsMarket["editPropertyVariant"] | market.editPropertyVariant} method
 */
export interface MarketEditPropertyVariantParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Variant id.
     */
    variant_id: number
    /**
     * Variant name.
     */
    title: string
}

/**
 * Params for {@link APIMethodsMarket["filterCategories"] | market.filterCategories} method
 */
export interface MarketFilterCategoriesParams {
    /**
     * Category_id filter categories
     */
    category_id?: number
    /**
     * Query filter categories
     */
    query?: string
    /**
     * Number of results to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsMarket["get"] | market.get} method
 */
export interface MarketGetParams {
    /**
     * ID of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number
    album_id?: number
    /**
     * Number of items to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * '1' - method will return additional fields: 'likes, can_comment, car_repost, photos'. These parameters are not returned by default.
     */
    extended?: boolean | 0 | 1
    /**
     * Items update date from (format: yyyy-mm-dd)
     */
    date_from?: string
    /**
     * Items update date to (format: yyyy-mm-dd)
     */
    date_to?: string
    /**
     * Add variants to response if exist
     */
    need_variants?: boolean | 0 | 1
    /**
     * Add disabled items to response
     */
    with_disabled?: boolean | 0 | 1
    fields?: string[]
}

/**
 * Params for {@link APIMethodsMarket["getAlbumById"] | market.getAlbumById} method
 */
export interface MarketGetAlbumByIdParams {
    /**
     * identifier of an album owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number
    /**
     * collections identifiers to obtain data from
     */
    album_ids: number[]
}

/**
 * Params for {@link APIMethodsMarket["getAlbums"] | market.getAlbums} method
 */
export interface MarketGetAlbumsParams {
    /**
     * ID of an items owner community.
     */
    owner_id: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of items to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsMarket["getById"] | market.getById} method
 */
export interface MarketGetByIdParams {
    /**
     * Comma-separated ids list: {user id}_{item id}. If an item belongs to a community -{community id} is used. " 'Videos' value example: , '-4363_136089719,13245770_137352259'"
     */
    item_ids: string[]
    /**
     * '1' - to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["getCategories"] | market.getCategories} method
 */
export interface MarketGetCategoriesParams {
    /**
     * Group Id.
     */
    group_id?: number
    album_id?: number
}

/**
 * - `asc` — old to new
 * - `desc` — new to old
 */
export type MarketGetCommentsSort = "asc" | "desc"

/**
 * Params for {@link APIMethodsMarket["getComments"] | market.getComments} method
 */
export interface MarketGetCommentsParams {
    /**
     * ID of an item owner community
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * '1' - to return likes info.
     */
    need_likes?: boolean | 0 | 1
    /**
     * ID of a comment to start a list from (details below).
     */
    start_comment_id?: number
    offset?: number
    /**
     * Number of results to return.
     */
    count?: number
    /**
     * Sort order ('asc' - from old to new, 'desc' - from new to old)
     */
    sort?: MarketGetCommentsSort
    /**
     * '1' - comments will be returned as numbered objects, in addition lists of 'profiles' and 'groups' objects will be returned.
     */
    extended?: boolean | 0 | 1
    /**
     * List of additional profile fields to return. See the [vk.com/dev/fields|details]
     */
    fields?: Objects.VKUsersFields[]
}

/**
 * Params for {@link APIMethodsMarket["getFavesForAttach"] | market.getFavesForAttach} method
 */
export interface MarketGetFavesForAttachParams {
    /**
     * Group which represents content
     */
    current_group_id?: number
    public_only?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number
    /**
     * Number of users to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsMarket["getGroupOrders"] | market.getGroupOrders} method
 */
export interface MarketGetGroupOrdersParams {
    /**
     * ID or groups domain
     */
    group_id?: number | string
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsMarket["getOrderById"] | market.getOrderById} method
 */
export interface MarketGetOrderByIdParams {
    user_id?: number
    order_id: number
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["getOrderItems"] | market.getOrderItems} method
 */
export interface MarketGetOrderItemsParams {
    user_id?: number
    order_id: number
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsMarket["getOrders"] | market.getOrders} method
 */
export interface MarketGetOrdersParams {
    offset?: number
    count?: number
    extended?: boolean | 0 | 1
    /**
     * Orders status updated date from (format: yyyy-mm-dd)
     */
    date_from?: string
    /**
     * Orders status updated date to (format: yyyy-mm-dd)
     */
    date_to?: string
}

/**
 * Params for {@link APIMethodsMarket["getProductPhotoUploadServer"] | market.getProductPhotoUploadServer} method
 */
export interface MarketGetProductPhotoUploadServerParams {
    /**
     * Community ID.
     */
    group_id: number
    bulk?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["getProperties"] | market.getProperties} method
 */
export interface MarketGetPropertiesParams {
    group_id: number
}

/**
 * Params for {@link APIMethodsMarket["groupItems"] | market.groupItems} method
 */
export interface MarketGroupItemsParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Item ids.
     */
    item_ids: number[]
    /**
     * Items group id.
     */
    item_group_id?: number
}

/**
 * Params for {@link APIMethodsMarket["removeFromAlbum"] | market.removeFromAlbum} method
 */
export interface MarketRemoveFromAlbumParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * Collections IDs to remove item from.
     */
    album_ids: number[]
}

/**
 * Params for {@link APIMethodsMarket["reorderAlbums"] | market.reorderAlbums} method
 */
export interface MarketReorderAlbumsParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Collection ID.
     */
    album_id: number
    /**
     * ID of a collection to place current collection before it.
     */
    before?: number
    /**
     * ID of a collection to place current collection after it.
     */
    after?: number
}

/**
 * Params for {@link APIMethodsMarket["reorderItems"] | market.reorderItems} method
 */
export interface MarketReorderItemsParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * ID of a collection to reorder items in. Set 0 to reorder full items list.
     */
    album_id?: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * ID of an item to place current item before it.
     */
    before?: number
    /**
     * ID of an item to place current item after it.
     */
    after?: number
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 */
export type MarketReportReason = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Params for {@link APIMethodsMarket["report"] | market.report} method
 */
export interface MarketReportParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Item ID.
     */
    item_id: number
    /**
     * Complaint reason. Possible values: *'0' - spam,, *'1' - child porn,, *'2' - extremism,, *'3' - violence,, *'4' - drugs propaganda,, *'5' - adult materials,, *'6' - insult.
     */
    reason?: MarketReportReason
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 */
export type MarketReportCommentReason = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Params for {@link APIMethodsMarket["reportComment"] | market.reportComment} method
 */
export interface MarketReportCommentParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * Complaint reason. Possible values: *'0' - spam,, *'1' - child porn,, *'2' - extremism,, *'3' - violence,, *'4' - drugs propaganda,, *'5' - adult materials,, *'6' - insult.
     */
    reason: MarketReportCommentReason
}

/**
 * Params for {@link APIMethodsMarket["restore"] | market.restore} method
 */
export interface MarketRestoreParams {
    /**
     * ID of an item owner community.
     */
    owner_id: number
    /**
     * Deleted item ID.
     */
    item_id: number
}

/**
 * Params for {@link APIMethodsMarket["restoreComment"] | market.restoreComment} method
 */
export interface MarketRestoreCommentParams {
    /**
     * identifier of an item owner community, "Note that community id in the 'owner_id' parameter should be negative number. For example 'owner_id'=-1 matches the [vk.com/apiclub|VK API] community "
     */
    owner_id: number
    /**
     * deleted comment id
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsMarket["saveProductPhoto"] | market.saveProductPhoto} method
 */
export interface MarketSaveProductPhotoParams {
    /**
     * Upload response
     */
    upload_response: string
}

/**
 * Params for {@link APIMethodsMarket["saveProductPhotoBulk"] | market.saveProductPhotoBulk} method
 */
export interface MarketSaveProductPhotoBulkParams {
    /**
     * Upload response
     */
    upload_response: string
}

/**
 * - `0` — default
 * - `1` — date
 * - `2` — price
 * - `3` — relevance
 */
export type MarketSearchSort = 0 | 1 | 2 | 3
/**
 * - `0` — normal
 * - `1` — reverse
 */
export type MarketSearchRev = 0 | 1

/**
 * Params for {@link APIMethodsMarket["search"] | market.search} method
 */
export interface MarketSearchParams {
    /**
     * ID of an items owner community.
     */
    owner_id: number
    album_id?: number
    /**
     * Search query, for example "pink slippers".
     */
    q?: string
    /**
     * Minimum item price value.
     */
    price_from?: number
    /**
     * Maximum item price value.
     */
    price_to?: number
    sort?: MarketSearchSort
    /**
     * '0' - do not use reverse order, '1' - use reverse order
     */
    rev?: MarketSearchRev
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * Number of items to return.
     */
    count?: number
    /**
     * '1' - to return additional fields: 'likes, can_comment, car_repost, photos'. By default: '0'.
     */
    extended?: boolean | 0 | 1
    status?: number[]
    /**
     * Add variants to response if exist
     */
    need_variants?: boolean | 0 | 1
}

/**
 * - `1` — date
 * - `2` — price
 * - `3` — relevance
 */
export type MarketSearchItemsSortBy = 1 | 2 | 3
export type MarketSearchItemsSortDirection = 0 | 1

/**
 * Params for {@link APIMethodsMarket["searchItems"] | market.searchItems} method
 */
export interface MarketSearchItemsParams {
    q: string
    offset?: number
    count?: number
    category_id?: number
    price_from?: number
    price_to?: number
    sort_by?: MarketSearchItemsSortBy
    sort_direction?: MarketSearchItemsSortDirection
    country?: number
    city?: number
}

/**
 * - `1` — date
 * - `2` — price
 * - `3` — relevance
 */
export type MarketSearchItemsBasicSortBy = 1 | 2 | 3
export type MarketSearchItemsBasicSortDirection = 0 | 1

/**
 * Params for {@link APIMethodsMarket["searchItemsBasic"] | market.searchItemsBasic} method
 */
export interface MarketSearchItemsBasicParams {
    q: string
    offset?: number
    count?: number
    category_id?: number
    price_from?: number
    price_to?: number
    sort_by?: MarketSearchItemsBasicSortBy
    sort_direction?: MarketSearchItemsBasicSortDirection
    country?: number
    city?: number
    only_my_groups?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMarket["ungroupItems"] | market.ungroupItems} method
 */
export interface MarketUngroupItemsParams {
    /**
     * Group id.
     */
    group_id: number
    /**
     * Items group id.
     */
    item_group_id: number
}

/**
 * Params for {@link APIMethodsMessages["addChatUser"] | messages.addChatUser} method
 */
export interface MessagesAddChatUserParams {
    /**
     * Chat ID.
     */
    chat_id: number
    /**
     * ID of the user to be added to the chat.
     */
    user_id?: number
    visible_messages_count?: number
}

/**
 * Params for {@link APIMethodsMessages["addChatUsers"] | messages.addChatUsers} method
 */
export interface MessagesAddChatUsersParams {
    chat_id?: number
    visible_messages_count?: number
}

/**
 * Params for {@link APIMethodsMessages["allowMessagesFromGroup"] | messages.allowMessagesFromGroup} method
 */
export interface MessagesAllowMessagesFromGroupParams {
    /**
     * Group ID.
     */
    group_id: number
    key?: string
}

/**
 * Params for {@link APIMethodsMessages["createChat"] | messages.createChat} method
 */
export interface MessagesCreateChatParams {
    /**
     * IDs of the users to be added to the chat.
     */
    user_ids?: number[]
    /**
     * Chat title.
     */
    title?: string
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["delete"] | messages.delete} method
 */
export interface MessagesDeleteParams {
    /**
     * Message IDs.
     */
    message_ids?: number[]
    /**
     * '1' - to mark message as spam.
     */
    spam?: boolean | 0 | 1
    /**
     * Reason for spam
     */
    reason?: number
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    /**
     * '1' - delete message for for all.
     */
    delete_for_all?: boolean | 0 | 1
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * Conversation message IDs.
     */
    cmids?: number[]
}

/**
 * Params for {@link APIMethodsMessages["deleteChatPhoto"] | messages.deleteChatPhoto} method
 */
export interface MessagesDeleteChatPhotoParams {
    /**
     * Chat ID.
     */
    chat_id: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["deleteConversation"] | messages.deleteConversation} method
 */
export interface MessagesDeleteConversationParams {
    /**
     * User ID. To clear a chat history use 'chat_id'
     */
    user_id?: number
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["deleteReaction"] | messages.deleteReaction} method
 */
export interface MessagesDeleteReactionParams {
    peer_id: number
    cmid: number
}

/**
 * Params for {@link APIMethodsMessages["denyMessagesFromGroup"] | messages.denyMessagesFromGroup} method
 */
export interface MessagesDenyMessagesFromGroupParams {
    /**
     * Group ID.
     */
    group_id: number
}

/**
 * Params for {@link APIMethodsMessages["edit"] | messages.edit} method
 */
export interface MessagesEditParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id: number
    /**
     * (Required if 'attachments' is not set.) Text of the message.
     */
    message?: string
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number
    /**
     * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'wall' - wall post, '<owner_id>' - ID of the media attachment owner. '<media_id>' - media attachment ID. Example: "photo100172_166443618"
     */
    attachment?: string
    /**
     * '1' - to keep forwarded, messages.
     */
    keep_forward_messages?: boolean | 0 | 1
    /**
     * '1' - to keep attached snippets.
     */
    keep_snippets?: boolean | 0 | 1
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    dont_parse_links?: boolean | 0 | 1
    disable_mentions?: boolean | 0 | 1
    message_id?: number
    cmid?: number
    template?: string
    keyboard?: string
}

/**
 * Params for {@link APIMethodsMessages["editChat"] | messages.editChat} method
 */
export interface MessagesEditChatParams {
    /**
     * Chat ID.
     */
    chat_id: number
    /**
     * New title of the chat.
     */
    title?: string
}

/**
 * Params for {@link APIMethodsMessages["getByConversationMessageId"] | messages.getByConversationMessageId} method
 */
export interface MessagesGetByConversationMessageIdParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id: number
    /**
     * Conversation message IDs.
     */
    conversation_message_ids: number[]
    /**
     * Information whether the response should be extended
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["getById"] | messages.getById} method
 */
export interface MessagesGetByIdParams {
    /**
     * Message IDs.
     */
    message_ids?: number[]
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number
    /**
     * Information whether the response should be extended
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
    cmids?: number[]
    peer_id?: number
}

/**
 * Params for {@link APIMethodsMessages["getChat"] | messages.getChat} method
 */
export interface MessagesGetChatParams {
    /**
     * Chat ID.
     */
    chat_id?: number
    /**
     * Chat IDs.
     */
    chat_ids?: number[]
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsMessages["getChatPreview"] | messages.getChatPreview} method
 */
export interface MessagesGetChatPreviewParams {
    peer_id?: number
    /**
     * Invitation link.
     */
    link?: string
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
}

/**
 * Params for {@link APIMethodsMessages["getConversationMembers"] | messages.getConversationMembers} method
 */
export interface MessagesGetConversationMembersParams {
    /**
     * Peer ID.
     */
    peer_id: number
    offset?: number
    count?: number
    /**
     * Extended flag
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
    member_ids?: number[]
}

export type MessagesGetConversationsFilter =
    | "all"
    | "archive"
    | "important"
    | "sorted_chats"
    | "unanswered"
    | "unread"

/**
 * Params for {@link APIMethodsMessages["getConversations"] | messages.getConversations} method
 */
export interface MessagesGetConversationsParams {
    /**
     * Offset needed to return a specific subset of conversations.
     */
    offset?: number
    /**
     * Number of conversations to return.
     */
    count?: number
    /**
     * Filter to apply: 'all' - all conversations, 'unread' - conversations with unread messages, 'important' - conversations, marked as important (only for community messages), 'unanswered' - conversations, marked as unanswered (only for community messages)
     */
    filter?: MessagesGetConversationsFilter
    /**
     * '1' - return extra information about users and communities
     */
    extended?: boolean | 0 | 1
    /**
     * ID of the message from what to return dialogs.
     */
    start_message_id?: number
    /**
     * Profile and communities fields to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["getConversationsById"] | messages.getConversationsById} method
 */
export interface MessagesGetConversationsByIdParams {
    /**
     * Destination IDs. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_ids: number[]
    /**
     * Return extended properties
     */
    extended?: boolean | 0 | 1
    /**
     * Profile and communities fields to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * - `1` — chronological
 * - `0` — reverse chronological
 */
export type MessagesGetHistoryRev = 1 | 0

/**
 * Params for {@link APIMethodsMessages["getHistory"] | messages.getHistory} method
 */
export interface MessagesGetHistoryParams {
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number
    /**
     * Number of messages to return.
     */
    count?: number
    /**
     * ID of the user whose message history you want to return.
     */
    user_id?: number
    peer_id?: number
    /**
     * Starting message ID from which to return history.
     */
    start_message_id?: number
    /**
     * Sort order: '1' - return messages in chronological order. '0' - return messages in reverse chronological order.
     */
    rev?: MessagesGetHistoryRev
    /**
     * Information whether the response should be extended
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

export type MessagesGetHistoryAttachmentsAttachmentTypes =
    | "app_action_games"
    | "app_action_mini_apps"
    | "audio"
    | "audio_message"
    | "clip"
    | "doc"
    | "graffiti"
    | "link"
    | "market"
    | "photo"
    | "share"
    | "video"
    | "wall"
export type MessagesGetHistoryAttachmentsMediaType =
    | "app_action_games"
    | "app_action_mini_apps"
    | "audio"
    | "audio_message"
    | "clip"
    | "doc"
    | "graffiti"
    | "link"
    | "market"
    | "photo"
    | "share"
    | "video"
    | "wall"

/**
 * Params for {@link APIMethodsMessages["getHistoryAttachments"] | messages.getHistoryAttachments} method
 */
export interface MessagesGetHistoryAttachmentsParams {
    attachment_types?: MessagesGetHistoryAttachmentsAttachmentTypes[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
    /**
     * Peer ID. ", For group chat: '2000000000 + chat ID' , , For community: '-community ID'"
     */
    peer_id?: number
    cmid?: number
    attachment_position?: number
    offset?: number
    /**
     * Number of objects to return.
     */
    count?: number
    extended?: boolean | 0 | 1
    /**
     * Additional profile [vk.com/dev/fields|fields] to return.
     */
    fields?: Objects.VKUsersFields[]
    max_forwards_level?: number
    message_video?: boolean | 0 | 1
    /**
     * Type of media files to return: *'photo',, *'video',, *'audio',, *'doc',, *'link'.,*'market'.,*'wall'.,*'share'
     */
    media_type?: MessagesGetHistoryAttachmentsMediaType
    /**
     * Message ID to start return results from.
     */
    start_from?: string
    preserve_order?: boolean | 0 | 1
    /**
     * '1' - to return photo sizes in a
     */
    photo_sizes?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMessages["getImportantMessages"] | messages.getImportantMessages} method
 */
export interface MessagesGetImportantMessagesParams {
    /**
     * Amount of needed important messages.
     */
    count?: number
    offset?: number
    start_message_id?: number
    /**
     * Maximum length of messages body.
     */
    preview_length?: number
    /**
     * Actors fields to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
    /**
     * Return extended properties
     */
    extended?: boolean | 0 | 1
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

export type MessagesGetIntentUsersIntent =
    | "confirmed_notification"
    | "non_promo_newsletter"
    | "promo_newsletter"

/**
 * Params for {@link APIMethodsMessages["getIntentUsers"] | messages.getIntentUsers} method
 */
export interface MessagesGetIntentUsersParams {
    intent: MessagesGetIntentUsersIntent
    subscribe_id?: number
    offset?: number
    count?: number
    extended?: boolean | 0 | 1
    name_case?: Objects.VKBaseNameCase
    fields?: string[]
}

/**
 * Params for {@link APIMethodsMessages["getInviteLink"] | messages.getInviteLink} method
 */
export interface MessagesGetInviteLinkParams {
    /**
     * Destination ID.
     */
    peer_id: number
    /**
     * 1 - to generate new link (revoke previous), 0 - to return previous link.
     */
    reset?: boolean | 0 | 1
    /**
     * Group ID
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["getLastActivity"] | messages.getLastActivity} method
 */
export interface MessagesGetLastActivityParams {
    /**
     * User ID.
     */
    user_id: number
}

/**
 * Params for {@link APIMethodsMessages["getLongPollHistory"] | messages.getLongPollHistory} method
 */
export interface MessagesGetLongPollHistoryParams {
    /**
     * Last value of the 'ts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    ts?: number
    /**
     * Last value of 'pts' parameter returned from the Long Poll server or by using [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    pts?: number
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number
    /**
     * '1' - to return history with online users only.
     */
    onlines?: boolean | 0 | 1
    /**
     * Additional profile [vk.com/dev/fields|fields] to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Maximum number of events to return.
     */
    events_limit?: number
    /**
     * Maximum number of messages to return.
     */
    msgs_limit?: number
    /**
     * Maximum ID of the message among existing ones in the local copy. Both messages received with API methods (for example, , ), and data received from a Long Poll server (events with code 4) are taken into account.
     */
    max_msg_id?: number
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    lp_version?: number
    last_n?: number
    credentials?: boolean | 0 | 1
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsMessages["getLongPollServer"] | messages.getLongPollServer} method
 */
export interface MessagesGetLongPollServerParams {
    /**
     * '1' - to return the 'pts' field, needed for the [vk.com/dev/messages.getLongPollHistory|messages.getLongPollHistory] method.
     */
    need_pts?: boolean | 0 | 1
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    /**
     * Long poll version
     */
    lp_version?: number
}

/**
 * Params for {@link APIMethodsMessages["getMessagesReactions"] | messages.getMessagesReactions} method
 */
export interface MessagesGetMessagesReactionsParams {
    peer_id: number
    cmids: number[]
}

/**
 * Params for {@link APIMethodsMessages["getReactedPeers"] | messages.getReactedPeers} method
 */
export interface MessagesGetReactedPeersParams {
    peer_id: number
    cmid: number
    reaction_id?: number
}

/**
 * Params for {@link APIMethodsMessages["getReactionsAssets"] | messages.getReactionsAssets} method
 */
export interface MessagesGetReactionsAssetsParams {
    client_version?: number
}

/**
 * Params for {@link APIMethodsMessages["isMessagesFromGroupAllowed"] | messages.isMessagesFromGroupAllowed} method
 */
export interface MessagesIsMessagesFromGroupAllowedParams {
    /**
     * Group ID.
     */
    group_id: number
    /**
     * User ID.
     */
    user_id: number
}

/**
 * Params for {@link APIMethodsMessages["joinChatByInviteLink"] | messages.joinChatByInviteLink} method
 */
export interface MessagesJoinChatByInviteLinkParams {
    /**
     * Invitation link.
     */
    link: string
}

/**
 * Params for {@link APIMethodsMessages["markAsAnsweredConversation"] | messages.markAsAnsweredConversation} method
 */
export interface MessagesMarkAsAnsweredConversationParams {
    /**
     * ID of conversation to mark as important.
     */
    peer_id: number
    /**
     * '1' - to mark as answered, '0' - to remove the mark
     */
    answered?: boolean | 0 | 1
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["markAsImportant"] | messages.markAsImportant} method
 */
export interface MessagesMarkAsImportantParams {
    /**
     * IDs of messages to mark as important.
     */
    message_ids?: number[]
    /**
     * '1' - to add a star (mark as important), '0' - to remove the star
     */
    important?: number
}

/**
 * Params for {@link APIMethodsMessages["markAsImportantConversation"] | messages.markAsImportantConversation} method
 */
export interface MessagesMarkAsImportantConversationParams {
    /**
     * ID of conversation to mark as important.
     */
    peer_id: number
    /**
     * '1' - to add a star (mark as important), '0' - to remove the star
     */
    important?: boolean | 0 | 1
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["markAsRead"] | messages.markAsRead} method
 */
export interface MessagesMarkAsReadParams {
    /**
     * IDs of messages to mark as read.
     */
    message_ids?: number[]
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * Message ID to start from.
     */
    start_message_id?: number
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    mark_conversation_as_read?: boolean | 0 | 1
    up_to_cmid?: number
}

/**
 * Params for {@link APIMethodsMessages["markReactionsAsRead"] | messages.markReactionsAsRead} method
 */
export interface MessagesMarkReactionsAsReadParams {
    peer_id: number
    cmids?: number[]
}

export type MessagesMuteChatMentionsMentionStatus = "all" | "allOnline" | "none"

/**
 * Params for {@link APIMethodsMessages["muteChatMentions"] | messages.muteChatMentions} method
 */
export interface MessagesMuteChatMentionsParams {
    /**
     * Chat id
     */
    peer_id: number
    mention_status: MessagesMuteChatMentionsMentionStatus
}

/**
 * Params for {@link APIMethodsMessages["pin"] | messages.pin} method
 */
export interface MessagesPinParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id: number
    /**
     * Message ID
     */
    message_id?: number
    /**
     * Conversation message ID
     */
    cmid?: number
}

/**
 * Params for {@link APIMethodsMessages["removeChatUser"] | messages.removeChatUser} method
 */
export interface MessagesRemoveChatUserParams {
    /**
     * Chat ID.
     */
    chat_id: number
    /**
     * ID of the user to be removed from the chat.
     */
    user_id?: number
    member_id?: number
}

/**
 * Params for {@link APIMethodsMessages["restore"] | messages.restore} method
 */
export interface MessagesRestoreParams {
    /**
     * ID of a previously-deleted message to restore.
     */
    message_id?: number
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
    cmid?: number
    /**
     * Destination ID.
     */
    peer_id?: number
}

/**
 * Params for {@link APIMethodsMessages["search"] | messages.search} method
 */
export interface MessagesSearchParams {
    /**
     * Search query string.
     */
    q?: string
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * Date to search message before in Unixtime.
     */
    date?: number
    /**
     * Number of characters after which to truncate a previewed message. To preview the full message, specify '0'. "NOTE: Messages are not truncated by default. Messages are truncated by words."
     */
    preview_length?: number
    /**
     * Offset needed to return a specific subset of messages.
     */
    offset?: number
    /**
     * Number of messages to return.
     */
    count?: number
    extended?: boolean | 0 | 1
    fields?: string[]
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["searchConversations"] | messages.searchConversations} method
 */
export interface MessagesSearchConversationsParams {
    /**
     * Search query string.
     */
    q?: string
    /**
     * Maximum number of results.
     */
    count?: number
    /**
     * '1' - return extra information about users and communities
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Group ID (for group messages with user access token)
     */
    group_id?: number
}

export type MessagesSendIntent =
    | "account_update"
    | "bot_ad_invite"
    | "bot_ad_promo"
    | "confirmed_notification"
    | "customer_support"
    | "default"
    | "finance_notification"
    | "game_notification"
    | "moderated_newsletter"
    | "non_promo_newsletter"
    | "promo_newsletter"
    | "purchase_update"

/**
 * Params for {@link APIMethodsMessages["send"] | messages.send} method
 */
export interface MessagesSendParams {
    /**
     * User ID (by default - current user).
     */
    user_id?: number
    /**
     * Unique identifier to avoid resending the message.
     */
    random_id?: number
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * IDs of message recipients. (See peer_id)
     */
    peer_ids?: number[]
    /**
     * User's short address (for example, 'illarionov').
     */
    domain?: string
    /**
     * ID of conversation the message will relate to.
     */
    chat_id?: number
    /**
     * (Required if 'attachments' is not set.) Text of the message.
     */
    message?: string
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number
    /**
     * (Required if 'message' is not set.) List of objects attached to the message, separated by commas, in the following format: "<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'wall' - wall post, '<owner_id>' - ID of the media attachment owner. '<media_id>' - media attachment ID. Example: "photo100172_166443618"
     */
    attachment?: string
    reply_to?: number
    /**
     * ID of forwarded messages, separated with a comma. Listed messages of the sender will be shown in the message body at the recipient's. Example: "123,431,544"
     */
    forward_messages?: number[]
    /**
     * JSON describing the forwarded message or reply
     */
    forward?: Objects.VKMessagesForward
    /**
     * Sticker id.
     */
    sticker_id?: number
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
    keyboard?: Objects.VKMessagesKeyboard
    template?: string
    payload?: string
    /**
     * JSON describing the content source in the message
     */
    content_source?: string
    dont_parse_links?: boolean | 0 | 1
    disable_mentions?: boolean | 0 | 1
    intent?: MessagesSendIntent
    subscribe_id?: number
}

/**
 * Params for {@link APIMethodsMessages["sendMessageEventAnswer"] | messages.sendMessageEventAnswer} method
 */
export interface MessagesSendMessageEventAnswerParams {
    event_id: string
    user_id: number
    peer_id: number
    event_data?: string
}

/**
 * Params for {@link APIMethodsMessages["sendReaction"] | messages.sendReaction} method
 */
export interface MessagesSendReactionParams {
    peer_id: number
    cmid: number
    reaction_id: number
}

export type MessagesSetActivityType =
    | "audiomessage"
    | "file"
    | "photo"
    | "typing"
    | "video"

/**
 * Params for {@link APIMethodsMessages["setActivity"] | messages.setActivity} method
 */
export interface MessagesSetActivityParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * 'typing' - user has started to type.
     */
    type?: MessagesSetActivityType
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'chat_id', e.g. '2000000001'. For community: '- community ID', e.g. '-12345'. "
     */
    peer_id?: number
    /**
     * Group ID (for group messages with group access token)
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsMessages["setChatPhoto"] | messages.setChatPhoto} method
 */
export interface MessagesSetChatPhotoParams {
    /**
     * Upload URL from the 'response' field returned by the [vk.com/dev/photos.getChatUploadServer|photos.getChatUploadServer] method upon successfully uploading an image.
     */
    file: string
}

/**
 * Params for {@link APIMethodsMessages["unpin"] | messages.unpin} method
 */
export interface MessagesUnpinParams {
    peer_id: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsNewsfeed["addBan"] | newsfeed.addBan} method
 */
export interface NewsfeedAddBanParams {
    user_ids?: number[]
    group_ids?: number[]
}

/**
 * Params for {@link APIMethodsNewsfeed["deleteBan"] | newsfeed.deleteBan} method
 */
export interface NewsfeedDeleteBanParams {
    user_ids?: number[]
    group_ids?: number[]
}

/**
 * Params for {@link APIMethodsNewsfeed["deleteList"] | newsfeed.deleteList} method
 */
export interface NewsfeedDeleteListParams {
    list_id: number
}

/**
 * Params for {@link APIMethodsNewsfeed["get"] | newsfeed.get} method
 */
export interface NewsfeedGetParams {
    /**
     * Filters to apply: 'post' - new wall posts, 'photo' - new photos, 'photo_tag' - new photo tags, 'wall_photo' - new wall photos, 'friend' - new friends
     */
    filters?: Objects.VKNewsfeedNewsfeedItemType[]
    /**
     * '1' - to return news items from banned sources
     */
    return_banned?: boolean | 0 | 1
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    max_photos?: number
    /**
     * Sources to obtain news from, separated by commas. User IDs can be specified in formats '' or 'u' , where '' is the user's friend ID. Community IDs can be specified in formats '-' or 'g' , where '' is the community ID. If the parameter is not set, all of the user's friends and communities are returned, except for banned sources, which can be obtained with the [vk.com/dev/newsfeed.getBanned|newsfeed.getBanned] method.
     */
    source_ids?: string
    /**
     * identifier required to get the next page of results. Value for this parameter is returned in 'next_from' field in a reply.
     */
    start_from?: string
    /**
     * Number of news items to return (default 50, maximum 100). For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
    section?: string
}

/**
 * Params for {@link APIMethodsNewsfeed["getBanned"] | newsfeed.getBanned} method
 */
export interface NewsfeedGetBannedParams {
    /**
     * '1' - return extra information about users and communities
     */
    extended?: boolean | 0 | 1
    /**
     * Profile fields to return.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsNewsfeed["getComments"] | newsfeed.getComments} method
 */
export interface NewsfeedGetCommentsParams {
    /**
     * Number of comments to return. For auto feed, you can use the 'new_offset' parameter returned by this method.
     */
    count?: number
    /**
     * Filters to apply: 'post' - new comments on wall posts, 'photo' - new comments on photos, 'video' - new comments on videos, 'topic' - new comments on discussions, 'note' - new comments on notes,
     */
    filters?: Objects.VKNewsfeedCommentsFilters[]
    /**
     * Object ID, comments on repost of which shall be returned, e.g. 'wall1_45486'. (If the parameter is set, the 'filters' parameter is optional.),
     */
    reposts?: string
    /**
     * Earliest timestamp (in Unix time) of a comment to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a comment to return. By default, the current time.
     */
    end_time?: number
    last_comments_count?: number
    /**
     * Identificator needed to return the next page with results. Value for this parameter returns in 'next_from' field.
     */
    start_from?: string
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsNewsfeed["getLists"] | newsfeed.getLists} method
 */
export interface NewsfeedGetListsParams {
    /**
     * numeric list identifiers.
     */
    list_ids?: number[]
    /**
     * Return additional list info
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsNewsfeed["getMentions"] | newsfeed.getMentions} method
 */
export interface NewsfeedGetMentionsParams {
    /**
     * Owner ID.
     */
    owner_id?: number
    /**
     * Earliest timestamp (in Unix time) of a post to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a post to return. By default, the current time.
     */
    end_time?: number
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number
    /**
     * Number of posts to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsNewsfeed["getRecommended"] | newsfeed.getRecommended} method
 */
export interface NewsfeedGetRecommendedParams {
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number
    /**
     * Maximum number of photos to return. By default, '5'.
     */
    max_photos?: number
    /**
     * 'new_from' value obtained in previous call.
     */
    start_from?: string
    /**
     * Number of news items to return.
     */
    count?: number
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsNewsfeed["getSuggestedSources"] | newsfeed.getSuggestedSources} method
 */
export interface NewsfeedGetSuggestedSourcesParams {
    /**
     * offset required to choose a particular subset of communities or users.
     */
    offset?: number
    /**
     * amount of communities or users to return.
     */
    count?: number
    /**
     * shuffle the returned list or not.
     */
    shuffle?: boolean | 0 | 1
    /**
     * list of extra fields to be returned. See available fields for [vk.com/dev/fields|users] and [vk.com/dev/fields_groups|communities].
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsNewsfeed["ignoreItem"] | newsfeed.ignoreItem} method
 */
export interface NewsfeedIgnoreItemParams {
    /**
     * Item type. Possible values: *'wall' - post on the wall,, *'tag' - tag on a photo,, *'profilephoto' - profile photo,, *'video' - video,, *'audio' - audio.
     */
    type: Objects.VKNewsfeedIgnoreItemType
    /**
     * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' - user , 'owner_id=-1' - community "
     */
    owner_id?: number
    /**
     * Item identifier
     */
    item_id?: number
}

/**
 * Params for {@link APIMethodsNewsfeed["saveList"] | newsfeed.saveList} method
 */
export interface NewsfeedSaveListParams {
    /**
     * numeric list identifier (if not sent, will be set automatically).
     */
    list_id?: number
    /**
     * list name.
     */
    title: string
    /**
     * users and communities identifiers to be added to the list. Community identifiers must be negative numbers.
     */
    source_ids: number[]
    /**
     * reposts display on and off ('1' is for off).
     */
    no_reposts?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsNewsfeed["search"] | newsfeed.search} method
 */
export interface NewsfeedSearchParams {
    /**
     * Search query string (e.g., 'New Year').
     */
    q?: string
    /**
     * '1' - to return additional information about the user or community that placed the post.
     */
    extended?: boolean | 0 | 1
    /**
     * Number of posts to return.
     */
    count?: number
    /**
     * Geographical latitude point (in degrees, -90 to 90) within which to search.
     */
    latitude?: number
    /**
     * Geographical longitude point (in degrees, -180 to 180) within which to search.
     */
    longitude?: number
    /**
     * Earliest timestamp (in Unix time) of a news item to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a news item to return. By default, the current time.
     */
    end_time?: number
    start_from?: string
    /**
     * Additional fields of [vk.com/dev/fields|profiles] and [vk.com/dev/fields_groups|communities] to return.
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsNewsfeed["unignoreItem"] | newsfeed.unignoreItem} method
 */
export interface NewsfeedUnignoreItemParams {
    /**
     * Item type. Possible values: *'wall' - post on the wall,, *'tag' - tag on a photo,, *'profilephoto' - profile photo,, *'video' - video,, *'audio' - audio.
     */
    type: Objects.VKNewsfeedIgnoreItemType
    /**
     * Item owner's identifier (user or community), "Note that community id must be negative. 'owner_id=1' - user , 'owner_id=-1' - community "
     */
    owner_id?: number
    /**
     * Item identifier
     */
    item_id?: number
    /**
     * Track code of unignored item
     */
    track_code?: string
}

export type NewsfeedUnsubscribeType =
    | "clip"
    | "market"
    | "note"
    | "photo"
    | "post"
    | "topic"
    | "video"

/**
 * Params for {@link APIMethodsNewsfeed["unsubscribe"] | newsfeed.unsubscribe} method
 */
export interface NewsfeedUnsubscribeParams {
    /**
     * Type of object from which to unsubscribe: 'note' - note, 'photo' - photo, 'post' - post on user wall or community wall, 'topic' - topic, 'video' - video
     */
    type: NewsfeedUnsubscribeType
    /**
     * Object owner ID.
     */
    owner_id?: number
    /**
     * Object ID.
     */
    item_id: number
}

/**
 * Params for {@link APIMethodsNotes["add"] | notes.add} method
 */
export interface NotesAddParams {
    /**
     * Note title.
     */
    title: string
    /**
     * Note text.
     */
    text: string
    privacy_view?: string[]
    privacy_comment?: string[]
}

/**
 * Params for {@link APIMethodsNotes["createComment"] | notes.createComment} method
 */
export interface NotesCreateCommentParams {
    /**
     * Note ID.
     */
    note_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
    /**
     * ID of the user to whom the reply is addressed (if the comment is a reply to another comment).
     */
    reply_to?: number
    /**
     * Comment text.
     */
    message: string
    guid?: string
}

/**
 * Params for {@link APIMethodsNotes["delete"] | notes.delete} method
 */
export interface NotesDeleteParams {
    /**
     * Note ID.
     */
    note_id: number
}

/**
 * Params for {@link APIMethodsNotes["deleteComment"] | notes.deleteComment} method
 */
export interface NotesDeleteCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
}

/**
 * Params for {@link APIMethodsNotes["edit"] | notes.edit} method
 */
export interface NotesEditParams {
    /**
     * Note ID.
     */
    note_id: number
    /**
     * Note title.
     */
    title: string
    /**
     * Note text.
     */
    text: string
    privacy_view?: string[]
    privacy_comment?: string[]
}

/**
 * Params for {@link APIMethodsNotes["editComment"] | notes.editComment} method
 */
export interface NotesEditCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
    /**
     * New comment text.
     */
    message: string
}

export type NotesGetSort = 0 | 1

/**
 * Params for {@link APIMethodsNotes["get"] | notes.get} method
 */
export interface NotesGetParams {
    /**
     * Note IDs.
     */
    note_ids?: number[]
    /**
     * Note owner ID.
     */
    user_id?: number
    offset?: number
    /**
     * Number of notes to return.
     */
    count?: number
    sort?: NotesGetSort
}

/**
 * Params for {@link APIMethodsNotes["getById"] | notes.getById} method
 */
export interface NotesGetByIdParams {
    /**
     * Note ID.
     */
    note_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
    need_wiki?: boolean | 0 | 1
}

export type NotesGetCommentsSort = 0 | 1

/**
 * Params for {@link APIMethodsNotes["getComments"] | notes.getComments} method
 */
export interface NotesGetCommentsParams {
    /**
     * Note ID.
     */
    note_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
    sort?: NotesGetCommentsSort
    offset?: number
    /**
     * Number of comments to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsNotes["restoreComment"] | notes.restoreComment} method
 */
export interface NotesRestoreCommentParams {
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * Note owner ID.
     */
    owner_id?: number
}

export type NotificationsGetFilters =
    | "wall"
    | "mentions"
    | "comments"
    | "likes"
    | "reposted"
    | "followers"
    | "friends"

/**
 * Params for {@link APIMethodsNotifications["get"] | notifications.get} method
 */
export interface NotificationsGetParams {
    /**
     * Number of notifications to return.
     */
    count?: number
    start_from?: string
    /**
     * Type of notifications to return: 'wall' - wall posts, 'mentions' - mentions in wall posts, comments, or topics, 'comments' - comments to wall posts, photos, and videos, 'likes' - likes, 'reposted' - wall posts that are copied from the current user's wall, 'followers' - new followers, 'friends' - accepted friend requests
     */
    filters?: NotificationsGetFilters[]
    /**
     * Earliest timestamp (in Unix time) of a notification to return. By default, 24 hours ago.
     */
    start_time?: number
    /**
     * Latest timestamp (in Unix time) of a notification to return. By default, the current time.
     */
    end_time?: number
}

export type NotificationsSendMessageSendingMode =
    | "delayed"
    | "delayed_push"
    | "immediately"
    | "without_push"

/**
 * Params for {@link APIMethodsNotifications["sendMessage"] | notifications.sendMessage} method
 */
export interface NotificationsSendMessageParams {
    user_ids: number[]
    message: string
    fragment?: string
    group_id?: number
    random_id?: number
    /**
     * Type of sending (delivering) notifications: 'immediately' - push and bell notifications will be delivered as soon as possible, 'delayed' - push and bell notifications will be delivered in the most comfortable time for the user, 'delayed_push' - only push notifications will be delivered in the most comfortable time, while the bell notifications will be delivered as soon as possible
     */
    sending_mode?: NotificationsSendMessageSendingMode
}

/**
 * Params for {@link APIMethodsOrders["cancelSubscription"] | orders.cancelSubscription} method
 */
export interface OrdersCancelSubscriptionParams {
    user_id: number
    subscription_id: number
    pending_cancel?: boolean | 0 | 1
}

export type OrdersChangeStateAction = "cancel" | "charge" | "refund"

/**
 * Params for {@link APIMethodsOrders["changeState"] | orders.changeState} method
 */
export interface OrdersChangeStateParams {
    /**
     * order ID.
     */
    order_id: number
    /**
     * action to be done with the order. Available actions: *cancel - to cancel unconfirmed order. *charge - to confirm unconfirmed order. Applies only if processing of [vk.com/dev/payments_status|order_change_state] notification failed. *refund - to cancel confirmed order.
     */
    action: OrdersChangeStateAction
    /**
     * internal ID of the order in the application.
     */
    app_order_id?: number
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default - 0.
     */
    test_mode?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsOrders["get"] | orders.get} method
 */
export interface OrdersGetParams {
    offset?: number
    /**
     * number of returned orders.
     */
    count?: number
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default - 0.
     */
    test_mode?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsOrders["getAmount"] | orders.getAmount} method
 */
export interface OrdersGetAmountParams {
    user_id: number
    votes: string[]
}

/**
 * Params for {@link APIMethodsOrders["getById"] | orders.getById} method
 */
export interface OrdersGetByIdParams {
    /**
     * order ID.
     */
    order_id?: number
    /**
     * order IDs (when information about several orders is requested).
     */
    order_ids?: number[]
    /**
     * if this parameter is set to 1, this method returns a list of test mode orders. By default - 0.
     */
    test_mode?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsOrders["getUserSubscriptionById"] | orders.getUserSubscriptionById} method
 */
export interface OrdersGetUserSubscriptionByIdParams {
    user_id: number
    subscription_id: number
}

/**
 * Params for {@link APIMethodsOrders["getUserSubscriptions"] | orders.getUserSubscriptions} method
 */
export interface OrdersGetUserSubscriptionsParams {
    user_id: number
}

/**
 * Params for {@link APIMethodsPages["clearCache"] | pages.clearCache} method
 */
export interface PagesClearCacheParams {
    /**
     * Address of the page where you need to refesh the cached version
     */
    url: string
}

/**
 * Params for {@link APIMethodsPages["get"] | pages.get} method
 */
export interface PagesGetParams {
    /**
     * Page owner ID.
     */
    owner_id?: number
    /**
     * Wiki page ID.
     */
    page_id?: number
    /**
     * '1' - to return information about a global wiki page
     */
    global?: boolean | 0 | 1
    /**
     * '1' - resulting wiki page is a preview for the attached link
     */
    site_preview?: boolean | 0 | 1
    /**
     * Wiki page title.
     */
    title?: string
    need_source?: boolean | 0 | 1
    /**
     * '1' - to return the page as HTML,
     */
    need_html?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPages["getHistory"] | pages.getHistory} method
 */
export interface PagesGetHistoryParams {
    /**
     * Wiki page ID.
     */
    page_id: number
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number
    user_id?: number
}

/**
 * Params for {@link APIMethodsPages["getTitles"] | pages.getTitles} method
 */
export interface PagesGetTitlesParams {
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsPages["getVersion"] | pages.getVersion} method
 */
export interface PagesGetVersionParams {
    version_id: number
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number
    user_id?: number
    /**
     * '1' - to return the page as HTML
     */
    need_html?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPages["parseWiki"] | pages.parseWiki} method
 */
export interface PagesParseWikiParams {
    /**
     * Text of the wiki page.
     */
    text: string
    /**
     * ID of the group in the context of which this markup is interpreted.
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsPages["save"] | pages.save} method
 */
export interface PagesSaveParams {
    /**
     * Text of the wiki page in wiki-format.
     */
    text?: string
    /**
     * Wiki page ID. The 'title' parameter can be passed instead of 'pid'.
     */
    page_id?: number
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number
    /**
     * User ID
     */
    user_id?: number
    /**
     * Wiki page title.
     */
    title?: string
}

/**
 * - `0` — managers
 * - `1` — members
 * - `2` — all
 */
export type PagesSaveAccessView = 0 | 1 | 2
/**
 * - `0` — managers
 * - `1` — members
 * - `2` — all
 */
export type PagesSaveAccessEdit = 0 | 1 | 2

/**
 * Params for {@link APIMethodsPages["saveAccess"] | pages.saveAccess} method
 */
export interface PagesSaveAccessParams {
    /**
     * Wiki page ID.
     */
    page_id: number
    /**
     * ID of the community that owns the wiki page.
     */
    group_id?: number
    user_id?: number
    /**
     * Who can view the wiki page: '1' - only community members, '2' - all users can view the page, '0' - only community managers
     */
    view?: PagesSaveAccessView
    /**
     * Who can edit the wiki page: '1' - only community members, '2' - all users can edit the page, '0' - only community managers
     */
    edit?: PagesSaveAccessEdit
}

/**
 * Params for {@link APIMethodsPhotos["confirmTag"] | photos.confirmTag} method
 */
export interface PhotosConfirmTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: string
    /**
     * Tag ID.
     */
    tag_id: number
}

/**
 * Params for {@link APIMethodsPhotos["copy"] | photos.copy} method
 */
export interface PhotosCopyParams {
    /**
     * photo's owner ID
     */
    owner_id: number
    /**
     * photo ID
     */
    photo_id: number
    /**
     * for private photos
     */
    access_key?: string
}

/**
 * Params for {@link APIMethodsPhotos["createAlbum"] | photos.createAlbum} method
 */
export interface PhotosCreateAlbumParams {
    /**
     * Album title.
     */
    title: string
    /**
     * ID of the community in which the album will be created.
     */
    group_id?: number
    /**
     * Album description.
     */
    description?: string
    privacy_view?: string[]
    privacy_comment?: string[]
    upload_by_admins_only?: boolean | 0 | 1
    comments_disabled?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["createComment"] | photos.createComment} method
 */
export interface PhotosCreateCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * Comment text.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - Media attachment owner ID. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
    /**
     * '1' - to post a comment from the community
     */
    from_group?: boolean | 0 | 1
    reply_to_comment?: number
    sticker_id?: number
    access_key?: string
    guid?: string
}

/**
 * Params for {@link APIMethodsPhotos["delete"] | photos.delete} method
 */
export interface PhotosDeleteParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id?: number
    photos?: string[]
}

/**
 * Params for {@link APIMethodsPhotos["deleteAlbum"] | photos.deleteAlbum} method
 */
export interface PhotosDeleteAlbumParams {
    /**
     * Album ID.
     */
    album_id: number
    /**
     * ID of the community that owns the album.
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["deleteComment"] | photos.deleteComment} method
 */
export interface PhotosDeleteCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsPhotos["edit"] | photos.edit} method
 */
export interface PhotosEditParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * New caption for the photo. If this parameter is not set, it is considered to be equal to an empty string.
     */
    caption?: string
    latitude?: number
    longitude?: number
    place_str?: string
    foursquare_id?: string
    delete_place?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["editAlbum"] | photos.editAlbum} method
 */
export interface PhotosEditAlbumParams {
    /**
     * ID of the photo album to be edited.
     */
    album_id: number
    /**
     * New album title.
     */
    title?: string
    /**
     * New album description.
     */
    description?: string
    /**
     * ID of the user or community that owns the album.
     */
    owner_id?: number
    privacy_view?: string[]
    privacy_comment?: string[]
    upload_by_admins_only?: boolean | 0 | 1
    comments_disabled?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["editComment"] | photos.editComment} method
 */
export interface PhotosEditCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * New text of the comment.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - Media attachment owner ID. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
}

/**
 * Params for {@link APIMethodsPhotos["get"] | photos.get} method
 */
export interface PhotosGetParams {
    /**
     * ID of the user or community that owns the photos. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Photo album ID. To return information about photos from service albums, use the following string values: 'profile, wall, saved'.
     */
    album_id?: string
    /**
     * Photo IDs.
     */
    photo_ids?: string[]
    /**
     * Sort order: '1' - reverse chronological, '0' - chronological
     */
    rev?: boolean | 0 | 1
    /**
     * '1' - to return additional 'likes', 'comments', and 'tags' fields, '0' - (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Type of feed obtained in 'feed' field of the method.
     */
    feed_type?: string
    /**
     * unixtime, that can be obtained with [vk.com/dev/newsfeed.get|newsfeed.get] method in date field to get all photos uploaded by the user on a specific day, or photos the user has been tagged on. Also, 'uid' parameter of the user the event happened with shall be specified.
     */
    feed?: number
    /**
     * '1' - to return photo sizes in a [vk.com/dev/photo_sizes|special format]
     */
    photo_sizes?: boolean | 0 | 1
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsPhotos["getAlbums"] | photos.getAlbums} method
 */
export interface PhotosGetAlbumsParams {
    /**
     * ID of the user or community that owns the albums.
     */
    owner_id?: number
    /**
     * Album IDs.
     */
    album_ids?: number[]
    /**
     * Offset needed to return a specific subset of albums.
     */
    offset?: number
    /**
     * Number of albums to return.
     */
    count?: number
    /**
     * '1' - to return system albums with negative IDs
     */
    need_system?: boolean | 0 | 1
    /**
     * '1' - to return an additional 'thumb_src' field, '0' - (default)
     */
    need_covers?: boolean | 0 | 1
    /**
     * '1' - to return photo sizes in a
     */
    photo_sizes?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["getAlbumsCount"] | photos.getAlbumsCount} method
 */
export interface PhotosGetAlbumsCountParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Community ID.
     */
    group_id?: number
    need_system?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["getAll"] | photos.getAll} method
 */
export interface PhotosGetAllParams {
    /**
     * ID of a user or community that owns the photos. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * '1' - to return detailed information about photos
     */
    extended?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of photos. By default, '0'.
     */
    offset?: number
    /**
     * Number of photos to return.
     */
    count?: number
    /**
     * '1' - to return image sizes in [vk.com/dev/photo_sizes|special format].
     */
    photo_sizes?: boolean | 0 | 1
    /**
     * '1' - to return photos only from standard albums, '0' - to return all photos including those in service albums, e.g., 'My wall photos' (default)
     */
    no_service_albums?: boolean | 0 | 1
    /**
     * '1' - to show information about photos being hidden from the block above the wall.
     */
    need_hidden?: boolean | 0 | 1
    /**
     * '1' - not to return photos being hidden from the block above the wall. Works only with owner_id>0, no_service_albums is ignored.
     */
    skip_hidden?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["getAllComments"] | photos.getAllComments} method
 */
export interface PhotosGetAllCommentsParams {
    /**
     * ID of the user or community that owns the album(s).
     */
    owner_id?: number
    /**
     * Album ID. If the parameter is not set, comments on all of the user's albums will be returned.
     */
    album_id?: number
    /**
     * '1' - to return an additional 'likes' field, '0' - (default)
     */
    need_likes?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of comments. By default, '0'.
     */
    offset?: number
    /**
     * Number of comments to return. By default, '20'. Maximum value, '100'.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsPhotos["getById"] | photos.getById} method
 */
export interface PhotosGetByIdParams {
    /**
     * IDs separated with a comma, that are IDs of users who posted photos and IDs of photos themselves with an underscore character between such IDs. To get information about a photo in the group album, you shall specify group ID instead of user ID. Example: "1_129207899,6492_135055734, , -20629724_271945303"
     */
    photos: string[]
    /**
     * '1' - to return additional fields, '0' - (default)
     */
    extended?: boolean | 0 | 1
    /**
     * '1' - to return photo sizes in a
     */
    photo_sizes?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["getChatUploadServer"] | photos.getChatUploadServer} method
 */
export interface PhotosGetChatUploadServerParams {
    /**
     * ID of the chat for which you want to upload a cover photo.
     */
    chat_id: number
    crop_x?: number
    crop_y?: number
    /**
     * Width (in pixels) of the photo after cropping.
     */
    crop_width?: number
}

/**
 * - `asc` — old first
 * - `desc` — new first
 */
export type PhotosGetCommentsSort = "asc" | "desc"

/**
 * Params for {@link APIMethodsPhotos["getComments"] | photos.getComments} method
 */
export interface PhotosGetCommentsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * '1' - to return an additional 'likes' field, '0' - (default)
     */
    need_likes?: boolean | 0 | 1
    start_comment_id?: number
    /**
     * Offset needed to return a specific subset of comments. By default, '0'.
     */
    offset?: number
    /**
     * Number of comments to return.
     */
    count?: number
    /**
     * Sort order: 'asc' - old first, 'desc' - new first
     */
    sort?: PhotosGetCommentsSort
    access_key?: string
    extended?: boolean | 0 | 1
    fields?: Objects.VKUsersFields[]
}

/**
 * Params for {@link APIMethodsPhotos["getMarketAlbumUploadServer"] | photos.getMarketAlbumUploadServer} method
 */
export interface PhotosGetMarketAlbumUploadServerParams {
    /**
     * Community ID.
     */
    group_id: number
}

/**
 * Params for {@link APIMethodsPhotos["getMessagesUploadServer"] | photos.getMessagesUploadServer} method
 */
export interface PhotosGetMessagesUploadServerParams {
    /**
     * Destination ID. "For user: 'User ID', e.g. '12345'. For chat: '2000000000' + 'Chat ID', e.g. '2000000001'. For community: '- Community ID', e.g. '-12345'. "
     */
    peer_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["getNewTags"] | photos.getNewTags} method
 */
export interface PhotosGetNewTagsParams {
    /**
     * Offset needed to return a specific subset of photos.
     */
    offset?: number
    /**
     * Number of photos to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsPhotos["getOwnerCoverPhotoUploadServer"] | photos.getOwnerCoverPhotoUploadServer} method
 */
export interface PhotosGetOwnerCoverPhotoUploadServerParams {
    /**
     * ID of community that owns the album (if the photo will be uploaded to a community album).
     */
    group_id?: number
    /**
     * X coordinate of the left-upper corner
     */
    crop_x?: number
    /**
     * Y coordinate of the left-upper corner
     */
    crop_y?: number
    /**
     * X coordinate of the right-bottom corner
     */
    crop_x2?: number
    /**
     * Y coordinate of the right-bottom corner
     */
    crop_y2?: number
    is_video_cover?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["getOwnerPhotoUploadServer"] | photos.getOwnerPhotoUploadServer} method
 */
export interface PhotosGetOwnerPhotoUploadServerParams {
    /**
     * identifier of a community or current user. "Note that community id must be negative. 'owner_id=1' - user, 'owner_id=-1' - community, "
     */
    owner_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["getTags"] | photos.getTags} method
 */
export interface PhotosGetTagsParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    access_key?: string
}

/**
 * Params for {@link APIMethodsPhotos["getUploadServer"] | photos.getUploadServer} method
 */
export interface PhotosGetUploadServerParams {
    album_id?: number
    /**
     * ID of community that owns the album (if the photo will be uploaded to a community album).
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["getUserPhotos"] | photos.getUserPhotos} method
 */
export interface PhotosGetUserPhotosParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Offset needed to return a specific subset of photos. By default, '0'.
     */
    offset?: number
    /**
     * Number of photos to return. Maximum value is 1000.
     */
    count?: number
    /**
     * '1' - to return an additional 'likes' field, '0' - (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Sort order: '1' - by date the tag was added in ascending order, '0' - by date the tag was added in descending order
     */
    sort?: string
}

/**
 * Params for {@link APIMethodsPhotos["getWallUploadServer"] | photos.getWallUploadServer} method
 */
export interface PhotosGetWallUploadServerParams {
    /**
     * ID of community to whose wall the photo will be uploaded.
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["makeCover"] | photos.makeCover} method
 */
export interface PhotosMakeCoverParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * Album ID.
     */
    album_id?: number
}

/**
 * Params for {@link APIMethodsPhotos["move"] | photos.move} method
 */
export interface PhotosMoveParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * ID of the album to which the photo will be moved.
     */
    target_album_id: number
    photo_ids: number[]
}

/**
 * Params for {@link APIMethodsPhotos["putTag"] | photos.putTag} method
 */
export interface PhotosPutTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * ID of the user to be tagged.
     */
    user_id: number
    /**
     * Upper left-corner coordinate of the tagged area (as a percentage of the photo's width).
     */
    x?: number
    /**
     * Upper left-corner coordinate of the tagged area (as a percentage of the photo's height).
     */
    y?: number
    /**
     * Lower right-corner coordinate of the tagged area (as a percentage of the photo's width).
     */
    x2?: number
    /**
     * Lower right-corner coordinate of the tagged area (as a percentage of the photo's height).
     */
    y2?: number
}

/**
 * Params for {@link APIMethodsPhotos["removeTag"] | photos.removeTag} method
 */
export interface PhotosRemoveTagParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * Tag ID.
     */
    tag_id: number
}

/**
 * Params for {@link APIMethodsPhotos["reorderAlbums"] | photos.reorderAlbums} method
 */
export interface PhotosReorderAlbumsParams {
    /**
     * ID of the user or community that owns the album.
     */
    owner_id?: number
    /**
     * Album ID.
     */
    album_id: number
    /**
     * ID of the album before which the album in question shall be placed.
     */
    before?: number
    /**
     * ID of the album after which the album in question shall be placed.
     */
    after?: number
}

/**
 * Params for {@link APIMethodsPhotos["reorderPhotos"] | photos.reorderPhotos} method
 */
export interface PhotosReorderPhotosParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * ID of the photo before which the photo in question shall be placed.
     */
    before?: number
    /**
     * ID of the photo after which the photo in question shall be placed.
     */
    after?: number
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 * - `8` — suicide calls
 */
export type PhotosReportReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8

/**
 * Params for {@link APIMethodsPhotos["report"] | photos.report} method
 */
export interface PhotosReportParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id: number
    /**
     * Photo ID.
     */
    photo_id: number
    /**
     * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse, '8' - suicide calls
     */
    reason?: PhotosReportReason
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 */
export type PhotosReportCommentReason = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Params for {@link APIMethodsPhotos["reportComment"] | photos.reportComment} method
 */
export interface PhotosReportCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id: number
    /**
     * ID of the comment being reported.
     */
    comment_id: number
    /**
     * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
     */
    reason?: PhotosReportCommentReason
}

/**
 * Params for {@link APIMethodsPhotos["restore"] | photos.restore} method
 */
export interface PhotosRestoreParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * Photo ID.
     */
    photo_id: number
}

/**
 * Params for {@link APIMethodsPhotos["restoreComment"] | photos.restoreComment} method
 */
export interface PhotosRestoreCommentParams {
    /**
     * ID of the user or community that owns the photo.
     */
    owner_id?: number
    /**
     * ID of the deleted comment.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsPhotos["save"] | photos.save} method
 */
export interface PhotosSaveParams {
    /**
     * ID of the album to save photos to.
     */
    album_id?: number
    /**
     * ID of the community to save photos to.
     */
    group_id?: number
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server?: number
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photos_list?: string
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash?: string
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    latitude?: number
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    longitude?: number
    /**
     * Text describing the photo. 2048 digits max.
     */
    caption?: string
}

/**
 * Params for {@link APIMethodsPhotos["saveMarketAlbumPhoto"] | photos.saveMarketAlbumPhoto} method
 */
export interface PhotosSaveMarketAlbumPhotoParams {
    /**
     * Community ID.
     */
    group_id: number
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photo: string
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    server: number
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash: string
}

/**
 * Params for {@link APIMethodsPhotos["saveMessagesPhoto"] | photos.saveMessagesPhoto} method
 */
export interface PhotosSaveMessagesPhotoParams {
    /**
     * Parameter returned when the photo is [vk.com/dev/upload_files|uploaded to the server].
     */
    photo: string
    server?: number
    hash?: string
}

/**
 * Params for {@link APIMethodsPhotos["saveOwnerCoverPhoto"] | photos.saveOwnerCoverPhoto} method
 */
export interface PhotosSaveOwnerCoverPhotoParams {
    crop_x?: number
    crop_height?: number
    crop_y?: number
    crop_width?: number
    response_json?: string
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    hash?: string
    /**
     * Parameter returned when photos are [vk.com/dev/upload_files|uploaded to server].
     */
    photo?: string
    is_video_cover?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPhotos["saveOwnerPhoto"] | photos.saveOwnerPhoto} method
 */
export interface PhotosSaveOwnerPhotoParams {
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    server?: string
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    hash?: string
    /**
     * parameter returned after [vk.com/dev/upload_files|photo upload].
     */
    photo?: string
}

/**
 * Params for {@link APIMethodsPhotos["saveWallPhoto"] | photos.saveWallPhoto} method
 */
export interface PhotosSaveWallPhotoParams {
    /**
     * ID of the user on whose wall the photo will be saved.
     */
    user_id?: number
    /**
     * ID of community on whose wall the photo will be saved.
     */
    group_id?: number
    /**
     * Parameter returned when the the photo is [vk.com/dev/upload_files|uploaded to the server].
     */
    photo: string
    server?: number
    hash?: string
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    latitude?: number
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    longitude?: number
    /**
     * Text describing the photo. 2048 digits max.
     */
    caption?: string
}

/**
 * Params for {@link APIMethodsPhotos["search"] | photos.search} method
 */
export interface PhotosSearchParams {
    /**
     * Search query string.
     */
    q?: string
    /**
     * Geographical latitude, in degrees (from '-90' to '90').
     */
    lat?: number
    /**
     * Geographical longitude, in degrees (from '-180' to '180').
     */
    long?: number
    start_time?: number
    end_time?: number
    /**
     * Sort order:
     */
    sort?: number
    /**
     * Offset needed to return a specific subset of photos.
     */
    offset?: number
    /**
     * Number of photos to return.
     */
    count?: number
    /**
     * Radius of search in meters (works very approximately). Available values: '10', '100', '800', '6000', '50000'.
     */
    radius?: number
}

/**
 * Params for {@link APIMethodsPodcasts["searchPodcast"] | podcasts.searchPodcast} method
 */
export interface PodcastsSearchPodcastParams {
    search_string: string
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsPolls["addVote"] | polls.addVote} method
 */
export interface PollsAddVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Poll ID.
     */
    poll_id: number
    answer_ids: number[]
    is_board?: boolean | 0 | 1
}

export type PollsCreateBackgroundId = "1" | "2" | "3" | "4" | "6" | "8" | "9"

/**
 * Params for {@link APIMethodsPolls["create"] | polls.create} method
 */
export interface PollsCreateParams {
    /**
     * question text
     */
    question?: string
    /**
     * '1' - anonymous poll, participants list is hidden,, '0' - public poll, participants list is available,, Default value is '0'.
     */
    is_anonymous?: boolean | 0 | 1
    is_multiple?: boolean | 0 | 1
    end_date?: number
    /**
     * If a poll will be added to a communty it is required to send a negative group identifier. Current user by default.
     */
    owner_id?: number
    app_id?: number
    /**
     * available answers list, for example: " ["yes","no","maybe"]", There can be from 1 to 10 answers.
     */
    add_answers?: string
    photo_id?: number
    background_id?: PollsCreateBackgroundId
    disable_unvote?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsPolls["deleteVote"] | polls.deleteVote} method
 */
export interface PollsDeleteVoteParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Poll ID.
     */
    poll_id: number
    is_board?: boolean | 0 | 1
}

export type PollsEditBackgroundId =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "6"
    | "8"
    | "9"

/**
 * Params for {@link APIMethodsPolls["edit"] | polls.edit} method
 */
export interface PollsEditParams {
    /**
     * poll owner id
     */
    owner_id?: number
    /**
     * edited poll's id
     */
    poll_id: number
    /**
     * new question text
     */
    question?: string
    /**
     * answers list, for example: , "["yes","no","maybe"]"
     */
    add_answers?: string
    /**
     * object containing answers that need to be edited,, key - answer id, value - new answer text. Example: {"382967099":"option1", "382967103":"option2"}"
     */
    edit_answers?: string
    /**
     * list of answer ids to be deleted. For example: "[382967099, 382967103]"
     */
    delete_answers?: string
    end_date?: number
    photo_id?: number
    background_id?: PollsEditBackgroundId
}

/**
 * Params for {@link APIMethodsPolls["getById"] | polls.getById} method
 */
export interface PollsGetByIdParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * '1' - poll is in a board, '0' - poll is on a wall. '0' by default.
     */
    is_board?: boolean | 0 | 1
    /**
     * Poll ID.
     */
    poll_id: number
    extended?: boolean | 0 | 1
    friends_count?: number
    fields?: string[]
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsPolls["getPhotoUploadServer"] | polls.getPhotoUploadServer} method
 */
export interface PollsGetPhotoUploadServerParams {
    owner_id?: number
}

/**
 * Params for {@link APIMethodsPolls["getVoters"] | polls.getVoters} method
 */
export interface PollsGetVotersParams {
    /**
     * ID of the user or community that owns the poll. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Poll ID.
     */
    poll_id: number
    /**
     * Answer IDs.
     */
    answer_ids: number[]
    is_board?: boolean | 0 | 1
    /**
     * '1' - to return only current user's friends, '0' - to return all users (default),
     */
    friends_only?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of voters. '0' - (default)
     */
    offset?: number
    /**
     * Number of user IDs to return (if the 'friends_only' parameter is not set, maximum '1000', otherwise '10'). '100' - (default)
     */
    count?: number
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate (birthdate)', 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online', 'counters'.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: , 'nom' - nominative (default) , 'gen' - genitive , 'dat' - dative , 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsPolls["savePhoto"] | polls.savePhoto} method
 */
export interface PollsSavePhotoParams {
    photo?: string
    hash?: string
}

/**
 * Params for {@link APIMethodsPrettyCards["create"] | prettyCards.create} method
 */
export interface PrettyCardsCreateParams {
    owner_id: number
    photo: string
    title: string
    link: string
    price?: string
    price_old?: string
    button?: string
}

/**
 * Params for {@link APIMethodsPrettyCards["delete"] | prettyCards.delete} method
 */
export interface PrettyCardsDeleteParams {
    owner_id: number
    card_id: number
}

/**
 * Params for {@link APIMethodsPrettyCards["edit"] | prettyCards.edit} method
 */
export interface PrettyCardsEditParams {
    owner_id: number
    card_id: number
    photo?: string
    title?: string
    link?: string
    price?: string
    price_old?: string
    button?: string
}

/**
 * Params for {@link APIMethodsPrettyCards["get"] | prettyCards.get} method
 */
export interface PrettyCardsGetParams {
    owner_id: number
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsPrettyCards["getById"] | prettyCards.getById} method
 */
export interface PrettyCardsGetByIdParams {
    owner_id: number
    card_ids: number[]
}

/**
 * Params for {@link APIMethodsSearch["getHints"] | search.getHints} method
 */
export interface SearchGetHintsParams {
    /**
     * Search query string.
     */
    q?: string
    /**
     * Offset for querying specific result subset
     */
    offset?: number
    /**
     * Maximum number of results to return.
     */
    limit?: number
    filters?: string[]
    fields?: string[]
    search_global?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsSecure["addAppEvent"] | secure.addAppEvent} method
 */
export interface SecureAddAppEventParams {
    /**
     * ID of a user to save the data
     */
    user_id?: number
    /**
     * there are 2 default activities: , * 1 - level. Works similar to ,, * 2 - points, saves points amount, Any other value is for saving completed missions
     */
    activity_id: number
    /**
     * depends on activity_id: * 1 - number, current level number,, * 2 - number, current user's points amount, , Any other value is ignored
     */
    value?: number
}

/**
 * Params for {@link APIMethodsSecure["checkToken"] | secure.checkToken} method
 */
export interface SecureCheckTokenParams {
    /**
     * client 'access_token'
     */
    token?: string
    /**
     * user 'ip address'. Note that user may access using the 'ipv6' address, in this case it is required to transmit the 'ipv6' address. If not transmitted, the address will not be checked.
     */
    ip?: string
}

/**
 * Params for {@link APIMethodsSecure["getSMSHistory"] | secure.getSMSHistory} method
 */
export interface SecureGetSMSHistoryParams {
    user_id?: number
    /**
     * filter by start date. It is set as UNIX-time.
     */
    date_from?: number
    /**
     * filter by end date. It is set as UNIX-time.
     */
    date_to?: number
    /**
     * number of returned posts. By default - 1000.
     */
    limit?: number
}

/**
 * Params for {@link APIMethodsSecure["getTransactionsHistory"] | secure.getTransactionsHistory} method
 */
export interface SecureGetTransactionsHistoryParams {
    type?: number
    uid_from?: number
    uid_to?: number
    date_from?: number
    date_to?: number
    limit?: number
}

/**
 * Params for {@link APIMethodsSecure["getUserLevel"] | secure.getUserLevel} method
 */
export interface SecureGetUserLevelParams {
    user_ids: number[]
}

/**
 * Params for {@link APIMethodsSecure["giveEventSticker"] | secure.giveEventSticker} method
 */
export interface SecureGiveEventStickerParams {
    user_ids: number[]
    achievement_id: number
}

/**
 * Params for {@link APIMethodsSecure["sendNotification"] | secure.sendNotification} method
 */
export interface SecureSendNotificationParams {
    user_ids?: number[]
    user_id?: number
    /**
     * notification text which should be sent in 'UTF-8' encoding ('254' characters maximum).
     */
    message: string
    notification_id?: number
    promo_id?: number
}

/**
 * Params for {@link APIMethodsSecure["sendSMSNotification"] | secure.sendSMSNotification} method
 */
export interface SecureSendSMSNotificationParams {
    /**
     * ID of the user to whom SMS notification is sent. The user shall allow the application to send him/her notifications (, +1).
     */
    user_id: number
    /**
     * 'SMS' text to be sent in 'UTF-8' encoding. Only Latin letters and numbers are allowed. Maximum size is '160' characters.
     */
    message: string
}

/**
 * Params for {@link APIMethodsSecure["setCounter"] | secure.setCounter} method
 */
export interface SecureSetCounterParams {
    counters?: string[]
    user_id?: number
    /**
     * counter value.
     */
    counter?: number
    increment?: boolean | 0 | 1
}

export type StatsGetInterval = "all" | "day" | "month" | "week" | "year"

/**
 * Params for {@link APIMethodsStats["get"] | stats.get} method
 */
export interface StatsGetParams {
    /**
     * Community ID.
     */
    group_id?: number
    /**
     * Application ID.
     */
    app_id?: number
    timestamp_from?: number
    timestamp_to?: number
    interval?: StatsGetInterval
    intervals_count?: number
    filters?: string[]
    stats_groups?: string[]
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsStats["getPostReach"] | stats.getPostReach} method
 */
export interface StatsGetPostReachParams {
    /**
     * post owner community id. Specify with "-" sign.
     */
    owner_id: number
    /**
     * wall posts id
     */
    post_ids: number[]
}

export type StatsTrackVisitorType = "activity" | "close" | "open"

/**
 * Params for {@link APIMethodsStats["trackVisitor"] | stats.trackVisitor} method
 */
export interface StatsTrackVisitorParams {
    type?: StatsTrackVisitorType
}

/**
 * Params for {@link APIMethodsStatus["get"] | status.get} method
 */
export interface StatusGetParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    user_id?: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsStatus["set"] | status.set} method
 */
export interface StatusSetParams {
    /**
     * Text of the new status.
     */
    text?: string
    /**
     * Identifier of a community to set a status in. If left blank the status is set to current user.
     */
    group_id?: number
}

/**
 * Params for {@link APIMethodsStorage["get"] | storage.get} method
 */
export interface StorageGetParams {
    key?: string
    keys?: string[]
    user_id?: number
}

/**
 * Params for {@link APIMethodsStorage["getKeys"] | storage.getKeys} method
 */
export interface StorageGetKeysParams {
    /**
     * user id, whose variables names are returned if they were requested with a server method.
     */
    user_id?: number
    offset?: number
    /**
     * amount of variable names the info needs to be collected from.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsStorage["set"] | storage.set} method
 */
export interface StorageSetParams {
    key: string
    value?: string
    user_id?: number
}

/**
 * Params for {@link APIMethodsStore["addStickersToFavorite"] | store.addStickersToFavorite} method
 */
export interface StoreAddStickersToFavoriteParams {
    /**
     * Sticker IDs to be added
     */
    sticker_ids: number[]
}

/**
 * Params for {@link APIMethodsStore["getProducts"] | store.getProducts} method
 */
export interface StoreGetProductsParams {
    type?: string
    merchant?: string
    section?: string
    product_ids?: number[]
    filters?: string[]
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsStore["getStickersKeywords"] | store.getStickersKeywords} method
 */
export interface StoreGetStickersKeywordsParams {
    stickers_ids?: number[]
    products_ids?: number[]
    aliases?: boolean | 0 | 1
    all_products?: boolean | 0 | 1
    need_stickers?: boolean | 0 | 1
    vmoji_promo?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsStore["removeStickersFromFavorite"] | store.removeStickersFromFavorite} method
 */
export interface StoreRemoveStickersFromFavoriteParams {
    /**
     * Sticker IDs to be removed
     */
    sticker_ids: number[]
}

/**
 * Params for {@link APIMethodsStories["banOwner"] | stories.banOwner} method
 */
export interface StoriesBanOwnerParams {
    /**
     * List of sources IDs
     */
    owners_ids: number[]
}

/**
 * Params for {@link APIMethodsStories["delete"] | stories.delete} method
 */
export interface StoriesDeleteParams {
    /**
     * Story owner's ID. Current user id is used by default.
     */
    owner_id?: number
    /**
     * Story ID.
     */
    story_id?: number
    stories?: string[]
}

/**
 * Params for {@link APIMethodsStories["get"] | stories.get} method
 */
export interface StoriesGetParams {
    /**
     * Owner ID.
     */
    owner_id?: number
    /**
     * '1' - to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["getBanned"] | stories.getBanned} method
 */
export interface StoriesGetBannedParams {
    /**
     * '1' - to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean | 0 | 1
    /**
     * Additional fields to return
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["getById"] | stories.getById} method
 */
export interface StoriesGetByIdParams {
    /**
     * Stories IDs separated by commas. Use format {owner_id}+'_'+{story_id}, for example, 12345_54331.
     */
    stories: string[]
    /**
     * '1' - to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean | 0 | 1
    /**
     * Additional fields to return
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["getPhotoUploadServer"] | stories.getPhotoUploadServer} method
 */
export interface StoriesGetPhotoUploadServerParams {
    /**
     * 1 - to add the story to friend's feed.
     */
    add_to_news?: boolean | 0 | 1
    /**
     * List of users IDs who can see the story.
     */
    user_ids?: number[]
    /**
     * ID of the story to reply with the current.
     */
    reply_to_story?: string
    /**
     * Link text (for community's stories only).
     */
    link_text?: Objects.VKStoriesUploadLinkText
    /**
     * Link URL. Internal links on https://vk.com only.
     */
    link_url?: string
    /**
     * ID of the community to upload the story (should be verified or with the "fire" icon).
     */
    group_id?: number
    clickable_stickers?: string
}

/**
 * Params for {@link APIMethodsStories["getReplies"] | stories.getReplies} method
 */
export interface StoriesGetRepliesParams {
    /**
     * Story owner ID.
     */
    owner_id: number
    /**
     * Story ID.
     */
    story_id: number
    /**
     * Access key for the private object.
     */
    access_key?: string
    /**
     * '1' - to return additional fields for users and communities. Default value is 0.
     */
    extended?: boolean | 0 | 1
    /**
     * Additional fields to return
     */
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["getStats"] | stories.getStats} method
 */
export interface StoriesGetStatsParams {
    /**
     * Story owner ID.
     */
    owner_id: number
    /**
     * Story ID.
     */
    story_id: number
}

/**
 * Params for {@link APIMethodsStories["getVideoUploadServer"] | stories.getVideoUploadServer} method
 */
export interface StoriesGetVideoUploadServerParams {
    /**
     * 1 - to add the story to friend's feed.
     */
    add_to_news?: boolean | 0 | 1
    /**
     * List of users IDs who can see the story.
     */
    user_ids?: number[]
    /**
     * ID of the story to reply with the current.
     */
    reply_to_story?: string
    /**
     * Link text (for community's stories only).
     */
    link_text?: Objects.VKStoriesUploadLinkText
    /**
     * Link URL. Internal links on https://vk.com only.
     */
    link_url?: string
    /**
     * ID of the community to upload the story (should be verified or with the "fire" icon).
     */
    group_id?: number
    clickable_stickers?: string
}

/**
 * Params for {@link APIMethodsStories["getViewers"] | stories.getViewers} method
 */
export interface StoriesGetViewersParams {
    /**
     * Story owner ID.
     */
    owner_id?: number
    /**
     * Story ID.
     */
    story_id: number
    /**
     * Maximum number of results.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of results.
     */
    offset?: number
    /**
     * '1' - to return detailed information about photos
     */
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["hideAllReplies"] | stories.hideAllReplies} method
 */
export interface StoriesHideAllRepliesParams {
    /**
     * ID of the user whose replies should be hidden.
     */
    owner_id: number
    group_id?: number
}

/**
 * Params for {@link APIMethodsStories["hideReply"] | stories.hideReply} method
 */
export interface StoriesHideReplyParams {
    /**
     * ID of the user whose replies should be hidden.
     */
    owner_id: number
    /**
     * Story ID.
     */
    story_id: number
}

/**
 * Params for {@link APIMethodsStories["save"] | stories.save} method
 */
export interface StoriesSaveParams {
    upload_results?: string[]
    upload_results_json?: string
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["search"] | stories.search} method
 */
export interface StoriesSearchParams {
    q?: string
    place_id?: number
    latitude?: number
    longitude?: number
    radius?: number
    mentioned_id?: number
    count?: number
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsStories["sendInteraction"] | stories.sendInteraction} method
 */
export interface StoriesSendInteractionParams {
    access_key: string
    message?: string
    is_broadcast?: boolean | 0 | 1
    is_anonymous?: boolean | 0 | 1
    unseen_marker?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsStories["unbanOwner"] | stories.unbanOwner} method
 */
export interface StoriesUnbanOwnerParams {
    /**
     * List of hidden sources to show stories from.
     */
    owners_ids: number[]
}

export type StreamingGetStatsType = "prepared" | "received"
export type StreamingGetStatsInterval = "1h" | "24h" | "5m"

/**
 * Params for {@link APIMethodsStreaming["getStats"] | streaming.getStats} method
 */
export interface StreamingGetStatsParams {
    type?: StreamingGetStatsType
    interval?: StreamingGetStatsInterval
    start_time?: number
    end_time?: number
}

/**
 * Params for {@link APIMethodsStreaming["getStem"] | streaming.getStem} method
 */
export interface StreamingGetStemParams {
    word: string
}

/**
 * Params for {@link APIMethodsTranslations["translate"] | translations.translate} method
 */
export interface TranslationsTranslateParams {
    texts: string[]
    translation_language: string
}

/**
 * Params for {@link APIMethodsUsers["get"] | users.get} method
 */
export interface UsersGetParams {
    /**
     * User IDs or screen names ('screen_name'). By default, current user ID.
     */
    user_ids?: (number | string)[]
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'contacts', 'education', 'online', 'counters', 'relation', 'last_seen', 'activity', 'can_write_private_message', 'can_see_all_posts', 'can_post', 'universities', 'can_invite_to_chats'
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
    from_group_id?: number
}

/**
 * Params for {@link APIMethodsUsers["getFollowers"] | users.getFollowers} method
 */
export interface UsersGetFollowersParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * Offset needed to return a specific subset of followers.
     */
    offset?: number
    /**
     * Number of followers to return.
     */
    count?: number
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online'.
     */
    fields?: Objects.VKUsersFields[]
    /**
     * Case for declension of user name and surname: 'nom' - nominative (default), 'gen' - genitive , 'dat' - dative, 'acc' - accusative , 'ins' - instrumental , 'abl' - prepositional
     */
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsUsers["getSubscriptions"] | users.getSubscriptions} method
 */
export interface UsersGetSubscriptionsParams {
    /**
     * User ID.
     */
    user_id?: number
    /**
     * '1' - to return a combined list of users and communities, '0' - to return separate lists of users and communities (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of subscriptions.
     */
    offset?: number
    /**
     * Number of users and communities to return.
     */
    count?: number
    fields?: Objects.VKUsersFields[]
}

export type UsersReportType =
    | "advertisement"
    | "advertisment"
    | "fraud"
    | "insult"
    | "porn"
    | "spam"

/**
 * Params for {@link APIMethodsUsers["report"] | users.report} method
 */
export interface UsersReportParams {
    /**
     * ID of the user about whom a complaint is being made.
     */
    user_id: number
    /**
     * Type of complaint: 'porn' - pornography, 'spam' - spamming, 'insult' - abusive behavior, 'advertisement' - disruptive advertisements
     */
    type: UsersReportType
    /**
     * Comment describing the complaint.
     */
    comment?: string
}

/**
 * - `0` — by rating
 * - `1` — by date registered
 */
export type UsersSearchSort = 0 | 1
/**
 * - `0` — any
 * - `1` — female
 * - `2` — male
 */
export type UsersSearchSex = 0 | 1 | 2
/**
 * - `0` — not specified
 * - `1` — not married
 * - `2` — relationship
 * - `3` — engaged
 * - `4` — married
 * - `5` — complicated
 * - `6` — actively searching
 * - `7` — in love
 * - `8` — civil union
 */
export type UsersSearchStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 * Params for {@link APIMethodsUsers["search"] | users.search} method
 */
export interface UsersSearchParams {
    /**
     * Search query string (e.g., 'Vasya Babich').
     */
    q?: string
    /**
     * Sort order: '1' - by date registered, '0' - by rating
     */
    sort?: UsersSearchSort
    /**
     * Offset needed to return a specific subset of users.
     */
    offset?: number
    /**
     * Number of users to return.
     */
    count?: number
    /**
     * Profile fields to return. Sample values: 'nickname', 'screen_name', 'sex', 'bdate' (birthdate), 'city', 'country', 'timezone', 'photo', 'photo_medium', 'photo_big', 'has_mobile', 'rate', 'contacts', 'education', 'online',
     */
    fields?: Objects.VKUsersFields[]
    /**
     * City ID.
     */
    city?: number
    /**
     * City ID. Use parameter city instead
     */
    city_id?: number
    /**
     * Country ID.
     */
    country?: number
    /**
     * Country ID. Use parameter country instead
     */
    country_id?: number
    /**
     * City name in a string.
     */
    hometown?: string
    /**
     * ID of the country where the user graduated.
     */
    university_country?: number
    /**
     * ID of the institution of higher education.
     */
    university?: number
    /**
     * Year of graduation from an institution of higher education.
     */
    university_year?: number
    /**
     * Faculty ID.
     */
    university_faculty?: number
    /**
     * Chair ID.
     */
    university_chair?: number
    /**
     * '1' - female, '2' - male, '0' - any (default)
     */
    sex?: UsersSearchSex
    /**
     * Relationship status: '0' - Not specified, '1' - Not married, '2' - In a relationship, '3' - Engaged, '4' - Married, '5' - It's complicated, '6' - Actively searching, '7' - In love, '8' - In a civil union
     */
    status?: UsersSearchStatus
    /**
     * Minimum age.
     */
    age_from?: number
    /**
     * Maximum age.
     */
    age_to?: number
    /**
     * Day of birth.
     */
    birth_day?: number
    /**
     * Month of birth.
     */
    birth_month?: number
    /**
     * Year of birth.
     */
    birth_year?: number
    /**
     * '1' - online only, '0' - all users
     */
    online?: boolean | 0 | 1
    /**
     * '1' - with photo only, '0' - all users
     */
    has_photo?: boolean | 0 | 1
    /**
     * ID of the country where users finished school.
     */
    school_country?: number
    /**
     * ID of the city where users finished school.
     */
    school_city?: number
    school_class?: number
    /**
     * ID of the school.
     */
    school?: number
    /**
     * School graduation year.
     */
    school_year?: number
    /**
     * Users' religious affiliation.
     */
    religion?: string
    /**
     * Name of the company where users work.
     */
    company?: string
    /**
     * Job position.
     */
    position?: string
    /**
     * ID of a community to search in communities.
     */
    group_id?: number
    from_list?: string[]
    screen_ref?: string
    from_group_id?: number
}

/**
 * Params for {@link APIMethodsUtils["checkLink"] | utils.checkLink} method
 */
export interface UtilsCheckLinkParams {
    /**
     * Link to check (e.g., 'http://google.com').
     */
    url: string
}

/**
 * Params for {@link APIMethodsUtils["deleteFromLastShortened"] | utils.deleteFromLastShortened} method
 */
export interface UtilsDeleteFromLastShortenedParams {
    /**
     * Link key (characters after vk.cc/).
     */
    key: string
}

/**
 * Params for {@link APIMethodsUtils["getLastShortenedLinks"] | utils.getLastShortenedLinks} method
 */
export interface UtilsGetLastShortenedLinksParams {
    /**
     * Number of links to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of links.
     */
    offset?: number
}

export type UtilsGetLinkStatsSource = "vk_cc" | "vk_link"
export type UtilsGetLinkStatsInterval =
    | "day"
    | "forever"
    | "hour"
    | "month"
    | "week"

/**
 * Params for {@link APIMethodsUtils["getLinkStats"] | utils.getLinkStats} method
 */
export interface UtilsGetLinkStatsParams {
    /**
     * Link key (characters after vk.cc/).
     */
    key: string
    /**
     * Source of scope
     */
    source?: UtilsGetLinkStatsSource
    /**
     * Access key for private link stats.
     */
    access_key?: string
    /**
     * Interval.
     */
    interval?: UtilsGetLinkStatsInterval
    /**
     * Number of intervals to return.
     */
    intervals_count?: number
    /**
     * 1 - to return extended stats data (sex, age, geo). 0 - to return views number only.
     */
    extended?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsUtils["getShortLink"] | utils.getShortLink} method
 */
export interface UtilsGetShortLinkParams {
    /**
     * URL to be shortened.
     */
    url: string
    /**
     * 1 - private stats, 0 - public stats.
     */
    private?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsUtils["resolveScreenName"] | utils.resolveScreenName} method
 */
export interface UtilsResolveScreenNameParams {
    /**
     * Screen name of the user, community (e.g., 'apiclub,' 'andrew', or 'rules_of_war'), or application.
     */
    screen_name: string
}

/**
 * Params for {@link APIMethodsVideo["add"] | video.add} method
 */
export interface VideoAddParams {
    /**
     * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
     */
    target_id?: number
    /**
     * Video ID.
     */
    video_id: number
    /**
     * ID of the user or community that owns the video. Use a negative value to designate a community ID.
     */
    owner_id: number
}

/**
 * Params for {@link APIMethodsVideo["addAlbum"] | video.addAlbum} method
 */
export interface VideoAddAlbumParams {
    /**
     * Community ID (if the album will be created in a community).
     */
    group_id?: number
    /**
     * Album title.
     */
    title?: string
    /**
     * new access permissions for the album. Possible values: , *'0' - all users,, *'1' - friends only,, *'2' - friends and friends of friends,, *'3' - "only me".
     */
    privacy?: Objects.VKVideoPlaylistPrivacyCategory[]
}

/**
 * Params for {@link APIMethodsVideo["addToAlbum"] | video.addToAlbum} method
 */
export interface VideoAddToAlbumParams {
    target_id?: number
    album_id?: number
    album_ids?: number[]
    owner_id: number
    video_id: number
}

/**
 * Params for {@link APIMethodsVideo["createComment"] | video.createComment} method
 */
export interface VideoCreateCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * Video ID.
     */
    video_id: number
    /**
     * New comment text.
     */
    message?: string
    /**
     * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media attachment owner. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
    /**
     * '1' - to post the comment from a community name (only if 'owner_id'<0)
     */
    from_group?: boolean | 0 | 1
    reply_to_comment?: number
    sticker_id?: number
    guid?: string
    track_code?: string
}

/**
 * Params for {@link APIMethodsVideo["delete"] | video.delete} method
 */
export interface VideoDeleteParams {
    /**
     * Video ID.
     */
    video_id: number
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    target_id?: number
}

/**
 * Params for {@link APIMethodsVideo["deleteAlbum"] | video.deleteAlbum} method
 */
export interface VideoDeleteAlbumParams {
    /**
     * Community ID (if the album is owned by a community).
     */
    group_id?: number
    /**
     * Album ID.
     */
    album_id: number
    owner_id?: number
}

/**
 * Params for {@link APIMethodsVideo["deleteComment"] | video.deleteComment} method
 */
export interface VideoDeleteCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * ID of the comment to be deleted.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsVideo["deleteThread"] | video.deleteThread} method
 */
export interface VideoDeleteThreadParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    /**
     * ID of the main comment to be deleted as thread.
     */
    thread_id: number
}

/**
 * Params for {@link APIMethodsVideo["edit"] | video.edit} method
 */
export interface VideoEditParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * Video ID.
     */
    video_id: number
    /**
     * New video title.
     */
    name?: string
    /**
     * New video description.
     */
    desc?: string
    /**
     * Privacy settings in a [vk.com/dev/privacy_setting|special format]. Privacy setting is available for videos uploaded to own profile by user.
     */
    privacy_view?: string[]
    /**
     * Privacy settings for comments in a [vk.com/dev/privacy_setting|special format].
     */
    privacy_comment?: string[]
    /**
     * Disable comments for the group video.
     */
    no_comments?: boolean | 0 | 1
    /**
     * '1' - to repeat the playback of the video, '0' - to play the video once,
     */
    repeat?: boolean | 0 | 1
    ord_info?: string
}

/**
 * Params for {@link APIMethodsVideo["editAlbum"] | video.editAlbum} method
 */
export interface VideoEditAlbumParams {
    /**
     * Community ID (if the album edited is owned by a community).
     */
    group_id?: number
    /**
     * Album ID.
     */
    album_id: number
    /**
     * New album title.
     */
    title?: string
    /**
     * new access permissions for the album. Possible values: , *'0' - all users,, *'1' - friends only,, *'2' - friends and friends of friends,, *'3' - "only me".
     */
    privacy?: Objects.VKVideoPlaylistPrivacyCategory[]
    owner_id?: number
}

/**
 * Params for {@link APIMethodsVideo["editComment"] | video.editComment} method
 */
export interface VideoEditCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * New comment text.
     */
    message?: string
    /**
     * List of objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media attachment owner. '<media_id>' - Media attachment ID. Example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
}

export type VideoGetSortAlbum = 0 | 1

/**
 * Params for {@link APIMethodsVideo["get"] | video.get} method
 */
export interface VideoGetParams {
    /**
     * ID of the user or community that owns the video(s).
     */
    owner_id?: number
    /**
     * Video IDs, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", Use a negative value to designate a community ID. Example: "-4363_136089719,13245770_137352259"
     */
    videos?: string[]
    /**
     * ID of the album containing the video(s).
     */
    album_id?: number
    /**
     * Number of videos to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number
    /**
     * '1' - to return an extended response with additional fields
     */
    extended?: boolean | 0 | 1
    fields?: string[]
    /**
     * Sort order: '0' - newest video first, '1' - oldest video first
     */
    sort_album?: VideoGetSortAlbum
}

/**
 * Params for {@link APIMethodsVideo["getAlbumById"] | video.getAlbumById} method
 */
export interface VideoGetAlbumByIdParams {
    /**
     * identifier of a user or community to add a video to. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Album ID.
     */
    album_id: number
}

/**
 * Params for {@link APIMethodsVideo["getAlbums"] | video.getAlbums} method
 */
export interface VideoGetAlbumsParams {
    /**
     * ID of the user or community that owns the video album(s).
     */
    owner_id?: number
    /**
     * Offset needed to return a specific subset of video albums.
     */
    offset?: number
    /**
     * Number of video albums to return.
     */
    count?: number
    /**
     * '1' - to return additional information about album privacy settings for the current user
     */
    extended?: boolean | 0 | 1
    need_system?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsVideo["getAlbumsByVideo"] | video.getAlbumsByVideo} method
 */
export interface VideoGetAlbumsByVideoParams {
    target_id?: number
    owner_id: number
    video_id: number
    extended?: boolean | 0 | 1
}

/**
 * - `asc` — oldest comment first
 * - `desc` — newest comment first
 * - `interest` — most interesting comments first
 */
export type VideoGetCommentsSort = "asc" | "desc" | "interest"

/**
 * Params for {@link APIMethodsVideo["getComments"] | video.getComments} method
 */
export interface VideoGetCommentsParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * Video ID.
     */
    video_id: number
    /**
     * '1' - to return an additional 'likes' field
     */
    need_likes?: boolean | 0 | 1
    start_comment_id?: number
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number
    /**
     * Number of comments to return.
     */
    count?: number
    /**
     * Sort order: 'asc' - oldest comment first, 'desc' - newest comment first
     */
    sort?: VideoGetCommentsSort
    extended?: boolean | 0 | 1
    fields?: string[]
    comment_id?: number
    thread_items_count?: number
}

/**
 * Params for {@link APIMethodsVideo["getLongPollServer"] | video.getLongPollServer} method
 */
export interface VideoGetLongPollServerParams {
    owner_id?: number
    video_id: number
}

/**
 * Params for {@link APIMethodsVideo["getOembed"] | video.getOembed} method
 */
export interface VideoGetOembedParams {
    /**
     * Link to video
     */
    url: string
    /**
     * Maximum width of player
     */
    maxwidth?: number
    /**
     * Maximum width of player
     */
    maxheight?: number
}

/**
 * Params for {@link APIMethodsVideo["getThumbUploadUrl"] | video.getThumbUploadUrl} method
 */
export interface VideoGetThumbUploadUrlParams {
    owner_id: number
}

/**
 * Params for {@link APIMethodsVideo["removeFromAlbum"] | video.removeFromAlbum} method
 */
export interface VideoRemoveFromAlbumParams {
    target_id?: number
    album_id?: number
    album_ids?: number[]
    owner_id: number
    video_id: number
}

/**
 * Params for {@link APIMethodsVideo["reorderAlbums"] | video.reorderAlbums} method
 */
export interface VideoReorderAlbumsParams {
    /**
     * ID of the user or community that owns the albums..
     */
    owner_id?: number
    /**
     * Album ID.
     */
    album_id: number
    /**
     * ID of the album before which the album in question shall be placed.
     */
    before?: number
    /**
     * ID of the album after which the album in question shall be placed.
     */
    after?: number
}

/**
 * Params for {@link APIMethodsVideo["reorderVideos"] | video.reorderVideos} method
 */
export interface VideoReorderVideosParams {
    /**
     * ID of the user or community that owns the album with videos.
     */
    target_id?: number
    /**
     * ID of the video album.
     */
    album_id?: number
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    /**
     * ID of the video.
     */
    video_id: number
    /**
     * ID of the user or community that owns the video before which the video in question shall be placed.
     */
    before_owner_id?: number
    /**
     * ID of the video before which the video in question shall be placed.
     */
    before_video_id?: number
    /**
     * ID of the user or community that owns the video after which the photo in question shall be placed.
     */
    after_owner_id?: number
    /**
     * ID of the video after which the photo in question shall be placed.
     */
    after_video_id?: number
}

export type VideoReportReason =
    | 0
    | 1
    | 2
    | 4
    | 5
    | 6
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 15
    | 27
    | 41
    | 42
    | 43
    | 101

/**
 * Params for {@link APIMethodsVideo["report"] | video.report} method
 */
export interface VideoReportParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    /**
     * Video ID.
     */
    video_id: number
    /**
     * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
     */
    reason?: VideoReportReason
    /**
     * Comment describing the complaint.
     */
    comment?: string
    /**
     * (If the video was found in search results.) Search query string.
     */
    search_query?: string
}

export type VideoReportCommentReason =
    | 0
    | 1
    | 2
    | 4
    | 5
    | 6
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 15
    | 27
    | 41
    | 42
    | 43
    | 101

/**
 * Params for {@link APIMethodsVideo["reportComment"] | video.reportComment} method
 */
export interface VideoReportCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    /**
     * ID of the comment being reported.
     */
    comment_id: number
    /**
     * Reason for the complaint: , 0 - spam , 1 - child pornography , 2 - extremism , 3 - violence , 4 - drug propaganda , 5 - adult material , 6 - insult, abuse
     */
    reason?: VideoReportCommentReason
}

/**
 * Params for {@link APIMethodsVideo["restore"] | video.restore} method
 */
export interface VideoRestoreParams {
    /**
     * Video ID.
     */
    video_id: number
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
}

/**
 * Params for {@link APIMethodsVideo["restoreComment"] | video.restoreComment} method
 */
export interface VideoRestoreCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id?: number
    /**
     * ID of the deleted comment.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsVideo["restoreThread"] | video.restoreThread} method
 */
export interface VideoRestoreThreadParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    /**
     * ID of the main comment to be deleted as thread.
     */
    thread_id: number
}

/**
 * Params for {@link APIMethodsVideo["save"] | video.save} method
 */
export interface VideoSaveParams {
    /**
     * Name of the video.
     */
    name?: string
    /**
     * Description of the video.
     */
    description?: string
    /**
     * '1' - to designate the video as private (send it via a private message), the video will not appear on the user's video list and will not be available by ID for other users, '0' - not to designate the video as private
     */
    is_private?: boolean | 0 | 1
    /**
     * '1' - to post the saved video on a user's wall, '0' - not to post the saved video on a user's wall
     */
    wallpost?: boolean | 0 | 1
    /**
     * URL for embedding the video from an external website.
     */
    link?: string
    /**
     * ID of the community in which the video will be saved. By default, the current user's page.
     */
    group_id?: number
    /**
     * ID of the album to which the saved video will be added.
     */
    album_id?: number
    privacy_view?: string[]
    privacy_comment?: string[]
    no_comments?: boolean | 0 | 1
    /**
     * '1' - to repeat the playback of the video, '0' - to play the video once,
     */
    repeat?: boolean | 0 | 1
    compression?: boolean | 0 | 1
    ord_info?: string
    auto_publish?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsVideo["saveUploadedThumb"] | video.saveUploadedThumb} method
 */
export interface VideoSaveUploadedThumbParams {
    owner_id: number
    thumb_json: string
    thumb_size?: string
    random_tag?: string
    /**
     * Video ID.
     */
    video_id?: number
    /**
     * If flag passed uploaded thumb will automatically set to passed video. Work only with video_id.
     */
    set_thumb?: boolean | 0 | 1
}

/**
 * - `1` — duration
 * - `2` — relevance
 * - `0` — date added
 */
export type VideoSearchSort = 1 | 2 | 0
export type VideoSearchFilters = "long" | "short" | "vimeo" | "vk" | "youtube"

/**
 * Params for {@link APIMethodsVideo["search"] | video.search} method
 */
export interface VideoSearchParams {
    /**
     * Search query string (e.g., 'The Beatles').
     */
    q?: string
    /**
     * Sort order: '1' - by duration, '2' - by relevance, '0' - by date added
     */
    sort?: VideoSearchSort
    /**
     * If not null, only searches for high-definition videos.
     */
    hd?: number
    /**
     * '1' - to disable the Safe Search filter, '0' - to enable the Safe Search filter
     */
    adult?: boolean | 0 | 1
    live?: boolean | 0 | 1
    /**
     * Filters to apply: 'youtube' - return YouTube videos only, 'vimeo' - return Vimeo videos only, 'vk' - return VK videos only, 'short' - return short videos only, 'long' - return long videos only
     */
    filters?: VideoSearchFilters[]
    search_own?: boolean | 0 | 1
    /**
     * Offset needed to return a specific subset of videos.
     */
    offset?: number
    longer?: number
    shorter?: number
    /**
     * Number of videos to return.
     */
    count?: number
    extended?: boolean | 0 | 1
    owner_id?: number
    fields?: string[]
}

/**
 * Params for {@link APIMethodsVideo["startStreaming"] | video.startStreaming} method
 */
export interface VideoStartStreamingParams {
    video_id?: number
    name?: string
    description?: string
    wallpost?: boolean | 0 | 1
    group_id?: number
    privacy_view?: string[]
    privacy_comment?: string[]
    no_comments?: boolean | 0 | 1
    category_id?: number
    publish?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsVideo["stopStreaming"] | video.stopStreaming} method
 */
export interface VideoStopStreamingParams {
    group_id?: number
    video_id?: number
}

/**
 * Params for {@link APIMethodsVideo["unpinComment"] | video.unpinComment} method
 */
export interface VideoUnpinCommentParams {
    /**
     * ID of the user or community that owns the video.
     */
    owner_id: number
    comment_id: number
}

/**
 * Params for {@link APIMethodsWall["checkCopyrightLink"] | wall.checkCopyrightLink} method
 */
export interface WallCheckCopyrightLinkParams {
    link: string
}

/**
 * Params for {@link APIMethodsWall["closeComments"] | wall.closeComments} method
 */
export interface WallCloseCommentsParams {
    owner_id: number
    post_id: number
}

/**
 * Params for {@link APIMethodsWall["createComment"] | wall.createComment} method
 */
export interface WallCreateCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id: number
    /**
     * Group ID.
     */
    from_group?: number
    /**
     * (Required if 'attachments' is not set.) Text of the comment.
     */
    message?: string
    /**
     * ID of comment to reply.
     */
    reply_to_comment?: number
    /**
     * (Required if 'message' is not set.) List of media objects attached to the comment, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media ojbect: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media owner. '<media_id>' - Media ID. For example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
    /**
     * Sticker ID.
     */
    sticker_id?: number
    /**
     * Unique identifier to avoid repeated comments.
     */
    guid?: string
}

/**
 * Params for {@link APIMethodsWall["delete"] | wall.delete} method
 */
export interface WallDeleteParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * ID of the post to be deleted.
     */
    post_id?: number
}

/**
 * Params for {@link APIMethodsWall["deleteComment"] | wall.deleteComment} method
 */
export interface WallDeleteCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
}

/**
 * - `0` — empty_topic
 * - `1` — art
 * - `7` — it
 * - `12` — games
 * - `16` — music
 * - `19` — photo
 * - `21` — science_and_tech
 * - `23` — sport
 * - `25` — travel
 * - `26` — tv_and_cinema
 * - `32` — humor
 * - `43` — fashion
 */
export type WallEditTopicId =
    | 0
    | 1
    | 7
    | 12
    | 16
    | 19
    | 21
    | 23
    | 25
    | 26
    | 32
    | 43

/**
 * Params for {@link APIMethodsWall["edit"] | wall.edit} method
 */
export interface WallEditParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    post_id: number
    friends_only?: boolean | 0 | 1
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media application owner. '<media_id>' - Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error is thrown."
     */
    attachments?: string[]
    services?: string
    signed?: boolean | 0 | 1
    publish_date?: number
    lat?: number
    long?: number
    place_id?: number
    mark_as_ads?: boolean | 0 | 1
    close_comments?: boolean | 0 | 1
    donut_paid_duration?: number
    poster_bkg_id?: number
    poster_bkg_owner_id?: number
    poster_bkg_access_hash?: string
    copyright?: string
    /**
     * Topic ID. Allowed values can be obtained from newsfeed.getPostTopics method
     */
    topic_id?: WallEditTopicId
}

/**
 * Params for {@link APIMethodsWall["editAdsStealth"] | wall.editAdsStealth} method
 */
export interface WallEditAdsStealthParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID. Used for publishing of scheduled and suggested posts.
     */
    post_id: number
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'page' - wiki-page, 'note' - note, 'poll' - poll, 'album' - photo album, '<owner_id>' - ID of the media application owner. '<media_id>' - Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[]
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' - post will be signed with the name of the posting user, '0' - post will not be signed (default)
     */
    signed?: boolean | 0 | 1
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number
    /**
     * Link button ID
     */
    link_button?: string
    /**
     * Link title
     */
    link_title?: string
    /**
     * Link image url
     */
    link_image?: string
    /**
     * Link video ID in format "<owner_id>_<media_id>"
     */
    link_video?: string
}

/**
 * Params for {@link APIMethodsWall["editComment"] | wall.editComment} method
 */
export interface WallEditCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * New comment text.
     */
    message?: string
    /**
     * List of objects attached to the comment, in the following format: , "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, '<owner_id>' - ID of the media attachment owner. '<media_id>' - Media attachment ID. For example: "photo100172_166443618,photo66748_265827614"
     */
    attachments?: string[]
}

/**
 * Params for {@link APIMethodsWall["get"] | wall.get} method
 */
export interface WallGetParams {
    /**
     * User or community short address.
     */
    domain?: number | string
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number
    /**
     * Number of posts to return (maximum 100).
     */
    count?: number
    filter?: Objects.VKWallGetFilter
    /**
     * '1' - to return 'wall', 'profiles', and 'groups' fields, '0' - to return no additional fields (default)
     */
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsWall["getById"] | wall.getById} method
 */
export interface WallGetByIdParams {
    /**
     * User or community IDs and post IDs, separated by underscores. Use a negative value to designate a community ID. Example: "93388_21539,93388_20904,2943_4276,-1_1"
     */
    posts: string[]
    /**
     * '1' - to return user and community objects needed to display posts, '0' - no additional fields are returned (default)
     */
    extended?: boolean | 0 | 1
    /**
     * Sets the number of parent elements to include in the array 'copy_history' that is returned if the post is a repost from another wall.
     */
    copy_history_depth?: number
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsWall["getComment"] | wall.getComment} method
 */
export interface WallGetCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * - `asc` — chronological
 * - `desc` — reverse chronological
 * - `smart` — most interesting
 */
export type WallGetCommentsSort = "asc" | "desc" | "smart"

/**
 * Params for {@link APIMethodsWall["getComments"] | wall.getComments} method
 */
export interface WallGetCommentsParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id?: number
    /**
     * '1' - to return the 'likes' field, '0' - not to return the 'likes' field (default)
     */
    need_likes?: boolean | 0 | 1
    start_comment_id?: number
    /**
     * Offset needed to return a specific subset of comments.
     */
    offset?: number
    /**
     * Number of comments to return (maximum 100).
     */
    count?: number
    /**
     * Sort order: 'asc' - chronological, 'desc' - reverse chronological
     */
    sort?: WallGetCommentsSort
    /**
     * Number of characters at which to truncate comments when previewed. By default, '90'. Specify '0' if you do not want to truncate comments.
     */
    preview_length?: number
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
    /**
     * Comment ID.
     */
    comment_id?: number
    /**
     * Count items in threads.
     */
    thread_items_count?: number
}

/**
 * Params for {@link APIMethodsWall["getReposts"] | wall.getReposts} method
 */
export interface WallGetRepostsParams {
    /**
     * User ID or community ID. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id?: number
    /**
     * Offset needed to return a specific subset of reposts.
     */
    offset?: number
    /**
     * Number of reposts to return.
     */
    count?: number
}

/**
 * Params for {@link APIMethodsWall["openComments"] | wall.openComments} method
 */
export interface WallOpenCommentsParams {
    owner_id: number
    post_id: number
}

/**
 * Params for {@link APIMethodsWall["parseAttachedLink"] | wall.parseAttachedLink} method
 */
export interface WallParseAttachedLinkParams {
    links: string
    extended?: boolean | 0 | 1
    fields?: string[]
    name_case?: Objects.VKBaseNameCase
}

/**
 * Params for {@link APIMethodsWall["pin"] | wall.pin} method
 */
export interface WallPinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id: number
}

/**
 * Params for {@link APIMethodsWall["post"] | wall.post} method
 */
export interface WallPostParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * '1' - post will be available to friends only, '0' - post will be available to all users (default)
     */
    friends_only?: boolean | 0 | 1
    /**
     * For a community: '1' - post will be published by the community, '0' - post will be published by the user (default)
     */
    from_group?: boolean | 0 | 1
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'page' - wiki-page, 'note' - note, 'poll' - poll, 'album' - photo album, '<owner_id>' - ID of the media application owner. '<media_id>' - Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[]
    /**
     * List of services or websites the update will be exported to, if the user has so requested. Sample values: 'twitter', 'facebook'.
     */
    services?: string
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' - post will be signed with the name of the posting user, '0' - post will not be signed (default)
     */
    signed?: boolean | 0 | 1
    /**
     * Publication date (in Unix time). If used, posting will be delayed until the set time.
     */
    publish_date?: number
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number
    /**
     * Post ID. Used for publishing of scheduled and suggested posts.
     */
    post_id?: number
    guid?: string
    mark_as_ads?: boolean | 0 | 1
    link_title?: string
    link_photo_id?: string
    close_comments?: boolean | 0 | 1
    donut_paid_duration?: number
    mute_notifications?: boolean | 0 | 1
    copyright?: string
}

/**
 * Params for {@link APIMethodsWall["postAdsStealth"] | wall.postAdsStealth} method
 */
export interface WallPostAdsStealthParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id: number
    /**
     * (Required if 'attachments' is not set.) Text of the post.
     */
    message?: string
    /**
     * (Required if 'message' is not set.) List of objects attached to the post, in the following format: "<owner_id>_<media_id>,<owner_id>_<media_id>", '' - Type of media attachment: 'photo' - photo, 'video' - video, 'audio' - audio, 'doc' - document, 'page' - wiki-page, 'note' - note, 'poll' - poll, 'album' - photo album, '<owner_id>' - ID of the media application owner. '<media_id>' - Media application ID. Example: "photo100172_166443618,photo66748_265827614", May contain a link to an external page to include in the post. Example: "photo66748_265827614,http://habrahabr.ru", "NOTE: If more than one link is being attached, an error will be thrown."
     */
    attachments?: string[]
    /**
     * Only for posts in communities with 'from_group' set to '1': '1' - post will be signed with the name of the posting user, '0' - post will not be signed (default)
     */
    signed?: boolean | 0 | 1
    /**
     * Geographical latitude of a check-in, in degrees (from -90 to 90).
     */
    lat?: number
    /**
     * Geographical longitude of a check-in, in degrees (from -180 to 180).
     */
    long?: number
    /**
     * ID of the location where the user was tagged.
     */
    place_id?: number
    /**
     * Unique identifier to avoid duplication the same post.
     */
    guid?: string
    /**
     * Link button ID
     */
    link_button?: string
    /**
     * Link title
     */
    link_title?: string
    /**
     * Link image url
     */
    link_image?: string
    /**
     * Link video ID in format "<owner_id>_<media_id>"
     */
    link_video?: string
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 * - `8` — suicide calls
 * - `11` — weapons selling
 */
export type WallReportCommentReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 11

/**
 * Params for {@link APIMethodsWall["reportComment"] | wall.reportComment} method
 */
export interface WallReportCommentParams {
    /**
     * ID of the user or community that owns the wall.
     */
    owner_id: number
    /**
     * Comment ID.
     */
    comment_id: number
    /**
     * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
     */
    reason: WallReportCommentReason
}

/**
 * - `0` — spam
 * - `1` — child pornography
 * - `2` — extremism
 * - `3` — violence
 * - `4` — drug propaganda
 * - `5` — adult material
 * - `6` — insult abuse
 * - `8` — suicide calls
 * - `11` — weapons selling
 */
export type WallReportPostReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 11

/**
 * Params for {@link APIMethodsWall["reportPost"] | wall.reportPost} method
 */
export interface WallReportPostParams {
    /**
     * ID of the user or community that owns the wall.
     */
    owner_id: number
    /**
     * Post ID.
     */
    post_id: number
    /**
     * Reason for the complaint: '0' - spam, '1' - child pornography, '2' - extremism, '3' - violence, '4' - drug propaganda, '5' - adult material, '6' - insult, abuse
     */
    reason: WallReportPostReason
}

/**
 * Params for {@link APIMethodsWall["repost"] | wall.repost} method
 */
export interface WallRepostParams {
    /**
     * ID of the object to be reposted on the wall. Example: "wall66748_3675"
     */
    object: string
    /**
     * Comment to be added along with the reposted object.
     */
    message?: string
    /**
     * Target community ID when reposting to a community.
     */
    group_id?: number
    mark_as_ads?: boolean | 0 | 1
    mute_notifications?: boolean | 0 | 1
}

/**
 * Params for {@link APIMethodsWall["restore"] | wall.restore} method
 */
export interface WallRestoreParams {
    /**
     * User ID or community ID from whose wall the post was deleted. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * ID of the post to be restored.
     */
    post_id?: number
}

/**
 * Params for {@link APIMethodsWall["restoreComment"] | wall.restoreComment} method
 */
export interface WallRestoreCommentParams {
    /**
     * User ID or community ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Comment ID.
     */
    comment_id: number
}

/**
 * Params for {@link APIMethodsWall["search"] | wall.search} method
 */
export interface WallSearchParams {
    /**
     * user or community screen name.
     */
    domain?: number | string
    /**
     * search query string.
     */
    query?: string
    /**
     * '1' - returns only page owner's posts.
     */
    owners_only?: boolean | 0 | 1
    /**
     * count of posts to return.
     */
    count?: number
    /**
     * Offset needed to return a specific subset of posts.
     */
    offset?: number
    /**
     * show extended post info.
     */
    extended?: boolean | 0 | 1
    fields?: Objects.VKBaseUserGroupFields[]
}

/**
 * Params for {@link APIMethodsWall["unpin"] | wall.unpin} method
 */
export interface WallUnpinParams {
    /**
     * ID of the user or community that owns the wall. By default, current user ID. Use a negative value to designate a community ID.
     */
    owner_id?: number
    /**
     * Post ID.
     */
    post_id: number
}

/**
 * Params for {@link APIMethodsWidgets["getComments"] | widgets.getComments} method
 */
export interface WidgetsGetCommentsParams {
    widget_api_id?: number
    url?: string
    page_id?: string
    order?: string
    fields?: Objects.VKUsersFields[]
    offset?: number
    count?: number
}

/**
 * Params for {@link APIMethodsWidgets["getPages"] | widgets.getPages} method
 */
export interface WidgetsGetPagesParams {
    widget_api_id?: number
    order?: string
    period?: string
    offset?: number
    count?: number
}
