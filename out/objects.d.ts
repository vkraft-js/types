/**
 * @module
 *
 * This module contains VK API object types with the `VK` prefix
 *
 * @example import object
 * ```typescript
 * import { VKUsersUserFull } from "@vkraft/types/objects";
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 03:53:01 using [types](https://github.com/vkraft/types) generator
 */

/**
 *
 */
export interface VKAccountAccountCounters {
    /**
     * New app requests number
     */
    app_requests?: number
    /**
     * New events number
     */
    events?: number
    /**
     * New faves number
     */
    faves?: number
    /**
     * New friends requests number
     */
    friends?: number
    /**
     * New friends recommendations number
     */
    friends_recommendations?: number
    /**
     * New gifts number
     */
    gifts?: number
    /**
     * New groups number
     */
    groups?: number
    /**
     * New messages number. Will be removed when messages.getCounters is released.
     */
    messages?: number
    /**
     * New memories number
     */
    memories?: number
    /**
     * New notes number
     */
    notes?: number
    /**
     * New notifications number
     */
    notifications?: number
    /**
     * New photo tags number
     */
    photos?: number
}

/**
 *
 */
export type VKAccountCountersFilter =
    | "app_requests"
    | "events"
    | "friends"
    | "friends_recommendations"
    | "games"
    | "gifts"
    | "groups"
    | "messages"
    | "notes"
    | "notifications"
    | "photos"
    | "faves"
    | "memories"

/**
 *
 */
export interface VKAccountInfo {
    /**
     * Two factor authentication is enabled
     */
    "2fa_required"?: VKBaseBoolInt
    /**
     * Information whether HTTPS-only is enabled
     */
    https_required?: VKBaseBoolInt
    /**
     * Information whether user has been processed intro
     */
    intro?: number
    /**
     * Language ID
     */
    lang?: number
    /**
     * Information whether wall comments should be hidden
     */
    no_wall_replies?: VKBaseBoolInt
    /**
     * Information whether only owners posts should be shown
     */
    own_posts_default?: VKBaseBoolInt
}

/**
 *
 */
export interface VKAccountNameRequest {
    /**
     * First name in request
     */
    first_name?: string
    /**
     * Request ID needed to cancel the request
     */
    id?: number
    /**
     * Last name in request
     */
    last_name?: string
    status?: VKAccountNameRequestStatus
    /**
     * Text to display to user
     */
    lang?: string
    /**
     * href for link in lang field
     */
    link_href?: string
    /**
     * label to display for link in lang field
     */
    link_label?: string
}

/**
 * Request status
 */
export type VKAccountNameRequestStatus =
    | "success"
    | "processing"
    | "declined"
    | "was_accepted"
    | "was_declined"
    | "declined_with_link"
    | "response"
    | "response_with_link"

export type VKAccountOfferLinkType = "profile" | "group" | "app"

/**
 *
 */
export interface VKAccountOffer {
    /**
     * Offer description
     */
    description?: string
    /**
     * Offer ID
     */
    id?: number
    /**
     * URL of the preview image
     */
    img?: string
    /**
     * Instruction how to process the offer
     */
    instruction?: string
    /**
     * Instruction how to process the offer (HTML format)
     */
    instruction_html?: string
    /**
     * Offer price
     */
    price?: number
    /**
     * Offer short description
     */
    short_description?: string
    /**
     * Offer tag
     */
    tag?: string
    /**
     * Offer title
     */
    title?: string
    /**
     * Currency amount
     */
    currency_amount?: number
    /**
     * Link id
     */
    link_id?: number
    /**
     * Link type
     */
    link_type?: VKAccountOfferLinkType
}

/**
 *
 */
export interface VKAccountPushConversations {
    /**
     * Items count
     */
    count?: number
    items?: VKAccountPushConversationsItem[]
}

/**
 *
 */
export interface VKAccountPushConversationsItem {
    /**
     * Time until that notifications are disabled in seconds
     */
    disabled_until: number
    /**
     * Peer ID
     */
    peer_id: number
    /**
     * Information whether the sound are enabled
     */
    sound: VKBaseBoolInt
    /**
     * Information whether the mentions are disabled
     */
    disabled_mentions?: VKBaseBoolInt
    /**
     * Information whether the mass mentions (like '@all', '@online') are disabled. Can be affected by 'disabled_mentions'
     */
    disabled_mass_mentions?: VKBaseBoolInt
}

/**
 *
 */
export interface VKAccountPushParams {
    msg?: VKAccountPushParamsMode[]
    chat?: VKAccountPushParamsMode[]
    like?: VKAccountPushParamsSettings[]
    repost?: VKAccountPushParamsSettings[]
    comment?: VKAccountPushParamsSettings[]
    mention?: VKAccountPushParamsSettings[]
    reply?: VKAccountPushParamsOnoff[]
    new_post?: VKAccountPushParamsOnoff[]
    wall_post?: VKAccountPushParamsOnoff[]
    wall_publish?: VKAccountPushParamsOnoff[]
    friend?: VKAccountPushParamsOnoff[]
    friend_found?: VKAccountPushParamsOnoff[]
    friend_accepted?: VKAccountPushParamsOnoff[]
    group_invite?: VKAccountPushParamsOnoff[]
    group_accepted?: VKAccountPushParamsOnoff[]
    birthday?: VKAccountPushParamsOnoff[]
    event_soon?: VKAccountPushParamsOnoff[]
    app_request?: VKAccountPushParamsOnoff[]
    sdk_open?: VKAccountPushParamsOnoff[]
}

/**
 * Settings parameters
 */
export type VKAccountPushParamsMode = "on" | "off" | "no_sound" | "no_text"

/**
 * Settings parameters
 */
export type VKAccountPushParamsOnoff = "on" | "off" | "no_sound"

/**
 * Settings parameters
 */
export type VKAccountPushParamsSettings = "on" | "off" | "fr_of_fr" | "no_sound"

/**
 *
 */
export interface VKAccountPushSettings {
    /**
     * Information whether notifications are disabled
     */
    disabled?: VKBaseBoolInt
    /**
     * Time until that notifications are disabled in Unixtime
     */
    disabled_until?: number
    settings?: VKAccountPushParams
    conversations?: VKAccountPushConversations
}

/**
 *
 */
export interface VKAccountUserSettings {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    connections?: VKUsersUserConnections
    /**
     * User's date of birth
     */
    bdate?: string
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility?: number
    city?: VKBaseCity
    /**
     * User's hometown
     */
    home_town: string
    /**
     * User maiden name
     */
    maiden_name?: string
    name_request?: VKAccountNameRequest
    personal?: VKUsersPersonal
    /**
     * User phone number with some hidden digits
     */
    phone?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    /**
     * Information whether relation status is pending
     */
    relation_pending?: VKBaseBoolInt
    relation_requests?: VKUsersUserMin[]
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * User status
     */
    status: string
    status_audio?: VKAudioAudio
    interests?: VKAccountUserSettingsInterests
    languages?: string[]
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * flag about service account
     */
    is_service_account?: boolean
}

/**
 *
 */
export interface VKAccountUserSettingsInterest {
    title: string
    value: string
}

/**
 *
 */
export interface VKAccountUserSettingsInterests {
    activities?: VKAccountUserSettingsInterest
    interests?: VKAccountUserSettingsInterest
    music?: VKAccountUserSettingsInterest
    tv?: VKAccountUserSettingsInterest
    movies?: VKAccountUserSettingsInterest
    books?: VKAccountUserSettingsInterest
    games?: VKAccountUserSettingsInterest
    quotes?: VKAccountUserSettingsInterest
    about?: VKAccountUserSettingsInterest
}

/**
 *
 */
export type VKAddressFields =
    | "id"
    | "title"
    | "address"
    | "additional_address"
    | "country_id"
    | "city_id"
    | "city"
    | "metro_station_id"
    | "metro_station"
    | "latitude"
    | "longitude"
    | "distance"
    | "work_info_status"
    | "timetable"
    | "phone"
    | "time_offset"

/**
 * Current user's role
 */
export type VKAdsAccessRole = "admin" | "manager" | "reports"

/**
 * Current user's role
 */
export type VKAdsAccessRolePublic = "manager" | "reports"

/**
 *
 */
export interface VKAdsAccesses {
    /**
     * Client ID
     */
    client_id?: string
    role?: VKAdsAccessRole
}

/**
 *
 */
export interface VKAdsAccount {
    access_role: VKAdsAccessRole
    /**
     * Account ID
     */
    account_id: number
    /**
     * Information whether account is active
     */
    account_status: VKBaseBoolInt
    account_type: VKAdsAccountType
    /**
     * Account name
     */
    account_name: string
    /**
     * Can user view account budget
     */
    can_view_budget: boolean
}

/**
 * Account type
 */
export type VKAdsAccountType = "general" | "agency"

/**
 *
 */
export interface VKAdsAd {
    /**
     * Ad format
     */
    ad_format: number
    /**
     * Ad platform
     */
    ad_platform: number | string
    /**
     * Total limit
     */
    all_limit: string
    approved: VKAdsAdApproved
    /**
     * Campaign ID
     */
    campaign_id: number
    /**
     * Category ID
     */
    category1_id?: number
    /**
     * Additional category ID
     */
    category2_id?: number
    cost_type: VKAdsAdCostType
    /**
     * Cost of a click, kopecks
     */
    cpc?: string
    /**
     * Cost of 1000 impressions, kopecks
     */
    cpm?: string
    /**
     * Cost of an action, kopecks
     */
    cpa?: string
    /**
     * Cost of 1000 impressions optimized, kopecks
     */
    ocpm?: string
    /**
     * Autobidding
     */
    autobidding?: VKBaseBoolInt
    /**
     * Max cost of target actions for autobidding, kopecks
     */
    autobidding_max_cost?: string
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_medical?: VKBaseBoolInt
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_specialist?: VKBaseBoolInt
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_supplements?: VKBaseBoolInt
    /**
     * Information whether disclaimer is enabled
     */
    disclaimer_credits?: VKBaseBoolInt
    /**
     * Ad ID
     */
    id: number
    /**
     * Impressions limit
     */
    impressions_limit?: number
    /**
     * Impressions limit period
     */
    impressions_limit_period?: number
    /**
     * Information whether impressions are limited
     */
    impressions_limited?: VKBaseBoolInt
    /**
     * Ad title
     */
    name: string
    status: VKAdsAdStatus
    /**
     * Information whether the ad is a video
     */
    video?: VKBaseBoolInt
    /**
     * Day limit
     */
    day_limit?: string
    /**
     * Goal type
     */
    goal_type?: number
    /**
     * User goal type
     */
    user_goal_type?: number
    /**
     * Age restriction
     */
    age_restriction?: number
    /**
     * Conversion pixel id
     */
    conversion_pixel_id?: number
    /**
     * Conversion event id
     */
    conversion_event_id?: number
    /**
     * Create time
     */
    create_time?: number
    /**
     * Update time
     */
    update_time?: number
    /**
     * Start time
     */
    start_time?: number
    /**
     * Stop time
     */
    stop_time?: number
    /**
     * Publisher platform auto
     */
    publisher_platforms_auto?: VKBaseBoolInt
    /**
     * Publisher platforms
     */
    publisher_platforms?: string
    /**
     * Link url
     */
    link_url?: string
    /**
     * Link owner id
     */
    link_owner_id?: number
    /**
     * Link id
     */
    link_id?: number
    /**
     * Has campaign budget optimization
     */
    has_campaign_budget_optimization?: boolean
    /**
     * Events retargeting groups
     */
    events_retargeting_groups?: VKAdsEventsRetargetingGroup[]
    /**
     * Weekly schedule hours
     */
    weekly_schedule_hours?: string[]
    /**
     * Weekly schedule use holidays
     */
    weekly_schedule_use_holidays?: number
    /**
     * Ad platform no ad network
     */
    ad_platform_no_ad_network?: number
    /**
     * Ad platform no wall
     */
    ad_platform_no_wall?: number
    /**
     * Disclaimer finance
     */
    disclaimer_finance?: number
    /**
     * Disclaimer finance name
     */
    disclaimer_finance_name?: string
    /**
     * Disclaimer finance license no
     */
    disclaimer_finance_license_no?: string
    /**
     * is promo
     */
    is_promo?: boolean
    /**
     * Suggested criteria
     */
    suggested_criteria?: number
    /**
     * Link type
     */
    link_type?: number
}

/**
 * Review status
 *
 * - `0` — not moderated
 * - `1` — pending moderation
 * - `2` — approved
 * - `3` — rejected
 */
export type VKAdsAdApproved = 0 | 1 | 2 | 3

/**
 * Cost type
 *
 * - `0` — per clicks
 * - `1` — per impressions
 * - `2` — per actions
 * - `3` — per impressions optimized
 */
export type VKAdsAdCostType = 0 | 1 | 2 | 3

/**
 *
 */
export interface VKAdsAdLayout {
    /**
     * Ad format
     */
    ad_format: number
    /**
     * Campaign ID
     */
    campaign_id: number
    cost_type: VKAdsAdCostType
    /**
     * Ad description
     */
    description: string
    /**
     * Ad ID
     */
    id: number
    /**
     * Image URL
     */
    image_src: string
    /**
     * URL of the preview image in double size
     */
    image_src_2x?: string
    /**
     * Domain of advertised object
     */
    link_domain?: string
    /**
     * URL of advertised object
     */
    link_url: string
    /**
     * Type of advertised object
     */
    link_type: number
    /**
     * link to preview an ad as it is shown on the website
     */
    preview_link?: string
    /**
     * Ad title
     */
    title: string
    /**
     * Information whether the ad is a video
     */
    video?: VKBaseBoolInt
    /**
     * Social
     */
    social?: boolean
    /**
     * Okved
     */
    okved?: string
    /**
     * Age restriction
     */
    age_restriction?: number
    /**
     * Goal type
     */
    goal_type?: number
    /**
     * Link title
     */
    link_title?: string
    /**
     * Link button
     */
    link_button?: string
    /**
     * Repeat video
     */
    repeat_video?: number
    /**
     * Video source 240p
     */
    video_src_240?: string
    /**
     * Video source 360p
     */
    video_src_360?: string
    /**
     * Video source 480p
     */
    video_src_480?: string
    /**
     * Video source 720p
     */
    video_src_720?: string
    /**
     * Video source 1080p
     */
    video_src_1080?: string
    /**
     * Video source 1440p
     */
    video_src_1440?: string
    /**
     * Video source 2160p
     */
    video_src_2160?: string
    /**
     * Video image source
     */
    video_image_src?: string
    /**
     * Video image source 2x
     */
    video_image_src_2x?: string
    /**
     * Video duration
     */
    video_duration?: number
    /**
     * Icon source
     */
    icon_src?: string
    /**
     * Icon source 2x
     */
    icon_src_2x?: string
    post?: VKAdsPost
    stories_data?: VKAdsStories
    clips_list?: VKAdsClipItem[]
}

/**
 * Ad atatus
 *
 * - `0` — stopped
 * - `1` — started
 * - `2` — deleted
 */
export type VKAdsAdStatus = 0 | 1 | 2

/**
 *
 */
export interface VKAdsCampaign {
    /**
     * Amount of active ads in campaign
     */
    ads_count?: number
    /**
     * Campaign's total limit, rubles
     */
    all_limit: string
    /**
     * Campaign create time, as Unixtime
     */
    create_time?: number
    /**
     * Campaign goal type
     */
    goal_type?: number
    /**
     * Campaign user goal type
     */
    user_goal_type?: number
    /**
     * Shows if Campaign Budget Optimization is on
     */
    is_cbo_enabled?: boolean
    /**
     * Campaign's day limit, rubles
     */
    day_limit: string
    /**
     * Campaign ID
     */
    id: number
    /**
     * Campaign title
     */
    name: string
    /**
     * Campaign start time, as Unixtime
     */
    start_time: number
    status: VKAdsCampaignStatus
    /**
     * Campaign stop time, as Unixtime
     */
    stop_time: number
    type: VKAdsCampaignType
    /**
     * Campaign update time, as Unixtime
     */
    update_time?: number
    /**
     * Limit of views per user per campaign
     */
    views_limit?: number
}

/**
 * Campaign status
 *
 * - `0` — stopped
 * - `1` — started
 * - `2` — deleted
 */
export type VKAdsCampaignStatus = 0 | 1 | 2

/**
 * Campaign type
 */
export type VKAdsCampaignType =
    | "normal"
    | "vk_apps_managed"
    | "mobile_apps"
    | "promoted_posts"
    | "adaptive_ads"
    | "stories"

/**
 *
 */
export interface VKAdsCategory {
    /**
     * Category ID
     */
    id: number
    /**
     * Category name
     */
    name: string
    subcategories?: VKAdsCategory[]
}

/**
 *
 */
export interface VKAdsClient {
    /**
     * Client's total limit, rubles
     */
    all_limit: string
    /**
     * Client's day limit, rubles
     */
    day_limit: string
    /**
     * Client ID
     */
    id: number
    /**
     * Client name
     */
    name: string
    /**
     * Ord data
     */
    ord_data?: VKAdsOrdData
}

/**
 *
 */
export interface VKAdsClipItem {
    /**
     * Video id
     */
    video_id?: number
    /**
     * Preview url
     */
    preview_url?: string
    link?: VKAdsClipItemLink
}

/**
 * Link
 */
export interface VKAdsClipItemLink {
    /**
     * Text
     */
    text?: string
    /**
     * Key
     */
    key?: string
    /**
     * Url
     */
    url?: string
}

/**
 *
 */
export interface VKAdsCreateAdStatus {
    /**
     * Ad ID
     */
    id: number
    /**
     * Stealth Post ID
     */
    post_id?: number
    /**
     * Error code
     */
    error_code?: number
    /**
     * Error description
     */
    error_desc?: string
}

/**
 *
 */
export interface VKAdsCreateCampaignStatus {
    /**
     * Campaign ID
     */
    id: number
    /**
     * Error code
     */
    error_code?: number
    /**
     * Error description
     */
    error_desc?: string
}

/**
 *
 */
export interface VKAdsCreateClientsStatus {
    /**
     * Client ID
     */
    id: number
    /**
     * Error code
     */
    error_code?: number
    /**
     * Error description
     */
    error_desc?: string
}

/**
 *
 */
export interface VKAdsCriteria {
    /**
     * Age from
     */
    age_from?: string
    /**
     * Age to
     */
    age_to?: string
    /**
     * Apps IDs
     */
    apps?: string
    /**
     * Apps IDs to except
     */
    apps_not?: string
    /**
     * Days to birthday
     */
    birthday?: string
    /**
     * Cities IDs
     */
    cities?: string
    /**
     * Cities IDs to except
     */
    cities_not?: string
    /**
     * Districts IDs
     */
    districts?: string
    /**
     * Communities IDs
     */
    groups?: string
    /**
     * Interests categories IDs
     */
    interest_categories?: string
    /**
     * Interests
     */
    interests?: string
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying?: string
    /**
     * Positions IDs
     */
    positions?: string
    /**
     * Religions IDs
     */
    religions?: string
    /**
     * Retargeting groups ids
     */
    retargeting_groups?: string
    /**
     * Retargeting groups NOT ids
     */
    retargeting_groups_not?: string
    /**
     * School graduation year from
     */
    school_from?: string
    /**
     * School graduation year to
     */
    school_to?: string
    /**
     * Schools IDs
     */
    schools?: string
    sex?: VKAdsCriteriaSex
    /**
     * Stations IDs
     */
    stations?: string
    /**
     * Relationship statuses
     */
    statuses?: string
    /**
     * Streets IDs
     */
    streets?: string
    /**
     * Travellers
     */
    travellers?: string
    /**
     * AB test
     */
    ab_test?: string
    /**
     * University graduation year from
     */
    uni_from?: string
    /**
     * University graduation year to
     */
    uni_to?: string
    /**
     * Browsers
     */
    user_browsers?: string
    /**
     * Devices
     */
    user_devices?: string
    /**
     * Operating systems
     */
    user_os?: string
    /**
     * Suggested criteria
     */
    suggested_criteria?: string
    /**
     * Group not
     */
    groups_not?: string
    /**
     * Price list audience type
     */
    price_list_audience_type?: string
    /**
     * Count
     */
    count?: string
    /**
     * Group active formula
     */
    groups_active_formula?: string
    /**
     * Interest categories formula
     */
    interest_categories_formula?: string
    /**
     * Groups formula
     */
    groups_formula?: string
    /**
     * Groups active
     */
    groups_active?: string
    /**
     * Group types
     */
    group_types?: string
    /**
     * Key phrases
     */
    key_phrases?: string
    /**
     * Key phrases days
     */
    key_phrases_days?: string
    /**
     * Geo near
     */
    geo_near?: string
    /**
     * Geo point type
     */
    geo_point_type?: string
    /**
     * Price list id
     */
    price_list_id?: string
    /**
     * Groups recommended ids
     */
    groups_recommended?: string
    /**
     * Groups active recommended ids
     */
    groups_active_recommended?: string
    /**
     * Music artists formula
     */
    music_artists_formula?: string
    /**
     * Price list retargeting formula
     */
    price_list_retargeting_formula?: string
    /**
     * Tags
     */
    tags?: string
    /**
     * Browsers
     */
    browsers?: string
    /**
     * Mobile os min version
     */
    mobile_os_min_version?: string
    /**
     * Mobile apps events formula
     */
    mobile_apps_events_formula?: string
    /**
     * Mobile os max version
     */
    mobile_os_max_version?: string
    /**
     * operators
     */
    operators?: string
    /**
     * wifi_only
     */
    wifi_only?: string
    /**
     * mobile_manufacturers
     */
    mobile_manufacturers?: string
}

/**
 * Sex
 *
 * - `0` — any
 * - `1` — male
 * - `2` — female
 */
export type VKAdsCriteriaSex = "0" | "1" | "2"

/**
 *
 */
export interface VKAdsDemoStats {
    /**
     * Object ID
     */
    id?: number
    stats?: VKAdsDemostatsFormat[]
    type?: VKAdsObjectType
}

/**
 *
 */
export interface VKAdsDemographicStatsPeriodItemBase {
    /**
     * Clicks rate
     */
    clicks_rate?: number
    /**
     * Impressions rate
     */
    impressions_rate?: number
}

/**
 *
 */
export interface VKAdsDemostatsFormat {
    age?: VKAdsStatsAge[]
    cities?: VKAdsStatsCities[]
    /**
     * Day as YYYY-MM-DD
     */
    day?: string
    day_from?: string
    day_to?: string
    /**
     * Month as YYYY-MM
     */
    month?: string
    /**
     * 1 if period=overall
     */
    overall?: number
    sex?: VKAdsStatsSex[]
    sex_age?: VKAdsStatsSexAge[]
}

/**
 *
 */
export interface VKAdsEventsRetargetingGroup {
    id?: number
    value?: number[]
}

/**
 *
 */
export interface VKAdsFloodStats {
    /**
     * Requests left
     */
    left: number
    /**
     * Time to refresh in seconds
     */
    refresh: number
    /**
     * Used requests per user
     */
    stats_by_user?: VKAdsFloodStatsByUserItem[]
}

/**
 *
 */
export interface VKAdsFloodStatsByUserItem {
    /**
     * User ID
     */
    user_id: number
    /**
     * Used requests
     */
    requests_count: number
}

/**
 *
 */
export interface VKAdsLinkStatus {
    /**
     * Reject reason
     */
    description?: string
    /**
     * URL
     */
    redirect_url?: string
    /**
     * Link status
     */
    status: string
}

export type VKAdsLookalikeRequestStatus =
    | "search_in_progress"
    | "search_failed"
    | "search_done"
    | "save_in_progress"
    | "save_failed"
    | "save_done"
export type VKAdsLookalikeRequestSourceType = "retargeting_group"

/**
 *
 */
export interface VKAdsLookalikeRequest {
    /**
     * Lookalike request ID
     */
    id: number
    /**
     * Lookalike request create time, as Unixtime
     */
    create_time: number
    /**
     * Lookalike request update time, as Unixtime
     */
    update_time: number
    /**
     * Time by which lookalike request would be deleted, as Unixtime
     */
    scheduled_delete_time?: number
    /**
     * Lookalike request status
     */
    status: VKAdsLookalikeRequestStatus
    /**
     * Lookalike request source type
     */
    source_type: VKAdsLookalikeRequestSourceType
    /**
     * Retargeting group id, which was used as lookalike seed
     */
    source_retargeting_group_id?: number
    /**
     * Lookalike request seed name (retargeting group name)
     */
    source_name?: string
    /**
     * Lookalike request seed audience size
     */
    audience_count?: number
    save_audience_levels?: VKAdsLookalikeRequestSaveAudienceLevel[]
}

/**
 *
 */
export interface VKAdsLookalikeRequestSaveAudienceLevel {
    /**
     * Save audience level id, which is used in save audience queries
     */
    level?: number
    /**
     * Saved audience audience size for according level
     */
    audience_count?: number
}

/**
 *
 */
export interface VKAdsMobileStatItem {
    key?: string
    value?: number
}

/**
 *
 */
export interface VKAdsMusician {
    /**
     * Targeting music artist ID
     */
    id: number
    /**
     * Music artist ID as in VKMusic
     */
    original_id: string
    /**
     * Music artist name
     */
    name: string
    /**
     * Music artist photo
     */
    avatar?: string
}

/**
 * Object type
 */
export type VKAdsObjectType = "ad" | "campaign" | "client" | "office"

/**
 *
 */
export type VKAdsOrdClientType =
    | "person"
    | "individual"
    | "legal"
    | "foreign"
    | "unknown"

/**
 *
 */
export interface VKAdsOrdData {
    client_type: VKAdsOrdClientType
    client_name: string
    inn?: string
    phone: string
    agency_phone?: string
    subagent?: VKAdsOrdSubagent
    contract_number: string
    contract_date: string
    contract_type: string
    contract_object: string
    with_vat: boolean
}

/**
 *
 */
export interface VKAdsOrdSubagent {
    type: VKAdsOrdClientType
    name: string
    inn?: string
    phone: string
}

/**
 *
 */
export interface VKAdsPost {
    /**
     * Post id
     */
    id?: number
    /**
     * From id
     */
    from_id?: number
    /**
     * Owner id
     */
    owner_id?: number
    /**
     * Date
     */
    date?: number
    /**
     * Edited date
     */
    edited?: number
    /**
     * Is pinned
     */
    is_pinned?: number
    /**
     * Marked as ads
     */
    marked_as_ads?: number
    ads_easy_promote?: VKAdsPostEasyPromote
    donut?: VKAdsPostDonut
    comments?: VKAdsPostComments
    copyright?: VKWallPostCopyright
    /**
     * Short text rate
     */
    short_text_rate?: number
    /**
     * Type
     */
    type?: string
    /**
     * Is favorite
     */
    is_favorite?: boolean
    likes?: VKAdsPostLikes
    views?: VKAdsPostViews
    /**
     * Post type
     */
    post_type?: string
    reposts?: VKAdsPostReposts
    /**
     * Text
     */
    text?: string
    /**
     * Is promoted post stealth
     */
    is_promoted_post_stealth?: boolean
    /**
     * Hash
     */
    hash?: string
    owner?: VKAdsPostOwner
    attachments?: VKWallWallpostAttachment[]
    /**
     * Created by
     */
    created_by?: number
    /**
     * Carousel offset
     */
    carousel_offset?: number
    /**
     * Can edit
     */
    can_edit?: number
    /**
     * Can delete
     */
    can_delete?: number
    /**
     * Can pin
     */
    can_pin?: number
}

/**
 * Comments
 */
export interface VKAdsPostComments {
    /**
     * Count
     */
    count?: number
}

/**
 * Donut
 */
export interface VKAdsPostDonut {
    /**
     * Is donut
     */
    is_donut?: boolean
}

/**
 * Ads easy promote
 */
export interface VKAdsPostEasyPromote {
    /**
     * Type
     */
    type?: number
    /**
     * Text
     */
    text?: string
    /**
     * Label text
     */
    label_text?: string
    /**
     * Button text
     */
    button_text?: string
    /**
     * Is ad not easy
     */
    is_ad_not_easy?: boolean
    /**
     * Ad id
     */
    ad_id?: number
    /**
     * Top union id
     */
    top_union_id?: number
}

/**
 * Likes
 */
export interface VKAdsPostLikes {
    /**
     * Can like
     */
    can_like?: number
    /**
     * Count
     */
    count?: number
    /**
     * User likes
     */
    user_likes?: number
}

/**
 * Owner
 */
export interface VKAdsPostOwner {
    /**
     * Owner id
     */
    id?: number
    /**
     * Name
     */
    name?: string
    /**
     * Photo url
     */
    photo?: string
    /**
     * Profile url
     */
    url?: string
}

/**
 * Reposts
 */
export interface VKAdsPostReposts {
    /**
     * Count
     */
    count?: number
    /**
     * Wall count
     */
    wall_count?: number
    /**
     * Mail count
     */
    mail_count?: number
}

/**
 * Views
 */
export interface VKAdsPostViews {
    /**
     * Count
     */
    count?: number
}

/**
 *
 */
export interface VKAdsPromotedPostReach {
    /**
     * Hides amount
     */
    hide: number
    /**
     * Object ID from 'ids' parameter
     */
    id: number
    /**
     * Community joins
     */
    join_group: number
    /**
     * Link clicks
     */
    links: number
    /**
     * Subscribers reach
     */
    reach_subscribers: number
    /**
     * Total reach
     */
    reach_total: number
    /**
     * Reports amount
     */
    report: number
    /**
     * Community clicks
     */
    to_group: number
    /**
     * 'Unsubscribe' events amount
     */
    unsubscribe: number
    /**
     * Video views for 100 percent
     */
    video_views_100p?: number
    /**
     * Video views for 25 percent
     */
    video_views_25p?: number
    /**
     * Video views for 3 seconds
     */
    video_views_3s?: number
    /**
     * Video views for 10 seconds
     */
    video_views_10s?: number
    /**
     * Video views for 50 percent
     */
    video_views_50p?: number
    /**
     * Video views for 75 percent
     */
    video_views_75p?: number
    /**
     * Video starts
     */
    video_views_start?: number
    /**
     * Pretty cards clicks
     */
    pretty_cards_clicks?: number
}

/**
 *
 */
export interface VKAdsRejectReason {
    /**
     * Comment text
     */
    comment?: string
    rules?: VKAdsRules[]
}

/**
 *
 */
export interface VKAdsRules {
    /**
     * Help url
     */
    help_url?: string | boolean
    /**
     * Label
     */
    help_label?: string
    /**
     * Content Html
     */
    content_html?: string
    /**
     * Help chat
     */
    help_chat?: boolean
}

export type VKAdsStatisticClickActionType =
    | "load"
    | "impression"
    | "click_deeplink"
    | "click"
    | "click_post_owner"
    | "click_post_link"
    | "click_pretty_card"
    | "like_post"
    | "share_post"
    | "video_start"
    | "video_pause"
    | "video_resume"
    | "video_play_3s"
    | "video_play_10s"
    | "video_play_25"
    | "video_play_50"
    | "video_play_75"
    | "video_play_95"
    | "video_play_100"
    | "video_volume_on"
    | "video_volume_off"
    | "video_fullscreen_on"
    | "video_fullscreen_off"
    | "hide"

/**
 *
 */
export interface VKAdsStatisticClickAction {
    type?: VKAdsStatisticClickActionType
    url?: string
}

/**
 *
 */
export interface VKAdsStats {
    /**
     * Object ID
     */
    id?: number
    stats?: VKAdsStatsFormat[]
    type?: VKAdsObjectType
    views_times?: VKAdsStatsViewsTimes
}

/**
 *
 */
export interface VKAdsStatsAge {
    /**
     * Age interval
     */
    value?: string
    /**
     * Clicks rate
     */
    clicks_rate?: number
    /**
     * Impressions rate
     */
    impressions_rate?: number
}

/**
 *
 */
export interface VKAdsStatsCities {
    /**
     * City name
     */
    name?: string
    /**
     * City ID
     */
    value?: number | string
    /**
     * Clicks rate
     */
    clicks_rate?: number
    /**
     * Impressions rate
     */
    impressions_rate?: number
}

/**
 *
 */
export interface VKAdsStatsFormat {
    /**
     * Clicks number
     */
    clicks?: number
    /**
     * External clicks number
     */
    link_external_clicks?: number
    /**
     * Day as YYYY-MM-DD
     */
    day?: string
    /**
     * Impressions number
     */
    impressions?: number
    /**
     * Events number
     */
    join_rate?: number
    /**
     * Month as YYYY-MM
     */
    month?: string
    /**
     * Year as YYYY
     */
    year?: number
    /**
     * 1 if period=overall
     */
    overall?: number
    /**
     * Reach
     */
    reach?: number
    /**
     * Spent funds
     */
    spent?: string
    /**
     * Video plays unique started count
     */
    video_plays_unique_started?: number
    /**
     * Video plays unique 3 seconds count
     */
    video_plays_unique_3_seconds?: number
    /**
     * Video plays unique 10 seconds count
     */
    video_plays_unique_10_seconds?: number
    /**
     * Video plays unique 25 percents count
     */
    video_plays_unique_25_percents?: number
    /**
     * Video plays unique 50 percents count
     */
    video_plays_unique_50_percents?: number
    /**
     * Video plays unique 75 percents count
     */
    video_plays_unique_75_percents?: number
    /**
     * Video plays unique 100 percents count
     */
    video_plays_unique_100_percents?: number
    /**
     * Effective cost per click
     */
    effective_cost_per_click?: string
    /**
     * Effective cost per mille
     */
    effective_cost_per_mille?: string
    /**
     * Effective cpf
     */
    effective_cpf?: string
    /**
     * Effective cost per message
     */
    effective_cost_per_message?: string
    /**
     * Message sends count
     */
    message_sends?: number
    /**
     * Message sends by anu user
     */
    message_sends_by_any_user?: number
    /**
     * Conversions external
     */
    conversions_external?: number
    /**
     * Conversions count
     */
    conversion_count?: number
    /**
     * Conversions CR
     */
    conversion_cr?: string
    /**
     * Day from
     */
    day_from?: string
    /**
     * Day to
     */
    day_to?: string
    /**
     * Ctr
     */
    ctr?: string
    /**
     * Unique views count
     */
    uniq_views_count?: number
    /**
     * Mobile app stat
     */
    mobile_app_stat?: VKAdsMobileStatItem[]
}

/**
 *
 */
export interface VKAdsStatsSex {
    value?: VKAdsStatsSexValue
    /**
     * Clicks rate
     */
    clicks_rate?: number
    /**
     * Impressions rate
     */
    impressions_rate?: number
}

/**
 *
 */
export interface VKAdsStatsSexAge {
    /**
     * Sex and age interval
     */
    value?: string
    /**
     * Clicks rate
     */
    clicks_rate?: number
    /**
     * Impressions rate
     */
    impressions_rate?: number
}

/**
 * Sex
 *
 * - `f` — female
 * - `m` — male
 */
export type VKAdsStatsSexValue = "f" | "m"

/**
 *
 */
export interface VKAdsStatsViewsTimes {
    views_ads_times_1?: number
    views_ads_times_2?: number
    views_ads_times_3?: number
    views_ads_times_4?: number
    views_ads_times_5?: string
    views_ads_times_6?: number
    views_ads_times_7?: number
    views_ads_times_8?: number
    views_ads_times_9?: number
    views_ads_times_10?: number
    views_ads_times_11_plus?: number
}

/**
 *
 */
export interface VKAdsStories {
    stories?: VKAdsStoryItem[]
    owner?: VKAdsStoriesOwner
    /**
     * Stories disclaimers text
     */
    stories_disclaimers_text?: string
}

/**
 *
 */
export interface VKAdsStoriesOwner {
    /**
     * Owner id
     */
    id?: number | boolean
    /**
     * Href
     */
    href?: string
    /**
     * Name
     */
    name?: string
    /**
     * Photo
     */
    photo?: string
    /**
     * Verify
     */
    verify?: string
    /**
     * Gender
     */
    gender?: string
    /**
     * Name get
     */
    name_get?: string
    /**
     * First name
     */
    firstName?: string
    /**
     * First name gen
     */
    first_name_gen?: string
    /**
     * First name ins
     */
    first_name_ins?: string
    /**
     * Can follow
     */
    can_follow?: boolean
}

/**
 *
 */
export interface VKAdsStoryItem {
    /**
     * Story id
     */
    id?: number
    /**
     * Owner id
     */
    owner_id?: number
    /**
     * Story raw id
     */
    raw_id?: string
    /**
     * Date
     */
    date?: string
    /**
     * Time
     */
    time?: number
    /**
     * Type
     */
    type?: string
    /**
     * Is unread
     */
    unread?: boolean
    /**
     * Can like
     */
    canLike?: boolean
    /**
     * Can comment
     */
    can_comment?: boolean
    /**
     * Can share
     */
    can_share?: boolean
    /**
     * Can remove
     */
    can_remove?: boolean
    /**
     * Can manage
     */
    can_manage?: boolean
    /**
     * Can ask
     */
    can_ask?: boolean
    /**
     * Can ask anonymous
     */
    can_ask_anonymous?: boolean
    /**
     * Is profile question
     */
    isProfileQuestion?: boolean
    stats?: VKAdsStoryItemStats
    link?: VKAdsStoryItemLink
    /**
     * Photo url
     */
    photo_url?: string
    /**
     * Preview url
     */
    preview_url?: string
    /**
     * Track code
     */
    track_code?: string
    /**
     * Is part of narrative
     */
    isPartOfNarrative?: boolean
    /**
     * Is ads
     */
    isAds?: boolean
    /**
     * Video url
     */
    video_url?: string
    /**
     * First frame
     */
    first_frame?: string
    /**
     * Small preview
     */
    small_preview?: string
    /**
     * Is liked
     */
    isLiked?: boolean
}

/**
 *
 */
export interface VKAdsStoryItemLink {
    /**
     * Key
     */
    key?: string
    /**
     * Text
     */
    text?: string
    /**
     * Url
     */
    url?: string
    /**
     * Raw url
     */
    raw_url?: string
}

/**
 *
 */
export interface VKAdsStoryItemStats {
    follow?: VKAdsStoryItemStatsFollow
    url_view?: VKAdsStoryItemStatsUrlView
}

/**
 * Follow event stats
 */
export interface VKAdsStoryItemStatsFollow {
    /**
     * Event type
     */
    event_type?: string
    /**
     * Event hash
     */
    rhash?: string
}

/**
 * Url view event stats
 */
export interface VKAdsStoryItemStatsUrlView {
    /**
     * Event type
     */
    event_type?: string
    /**
     * Event hash
     */
    rhash?: string
}

/**
 *
 */
export interface VKAdsTargSettings {
    /**
     * Ad ID
     */
    id?: string
    /**
     * Campaign ID
     */
    campaign_id?: string
    /**
     * Age from
     */
    age_from?: string
    /**
     * Age to
     */
    age_to?: string
    /**
     * Apps IDs
     */
    apps?: string
    /**
     * Apps IDs to except
     */
    apps_not?: string
    /**
     * Days to birthday
     */
    birthday?: string
    /**
     * Cities IDs
     */
    cities?: string
    /**
     * Cities IDs to except
     */
    cities_not?: string
    /**
     * Districts IDs
     */
    districts?: string
    /**
     * Communities IDs
     */
    groups?: string
    /**
     * Interests categories IDs
     */
    interest_categories?: string
    /**
     * Interests
     */
    interests?: string
    /**
     * Information whether the user has proceeded VK payments before
     */
    paying?: string
    /**
     * Positions IDs
     */
    positions?: string
    /**
     * Religions IDs
     */
    religions?: string
    /**
     * Retargeting groups ids
     */
    retargeting_groups?: string
    /**
     * Retargeting groups NOT ids
     */
    retargeting_groups_not?: string
    /**
     * School graduation year from
     */
    school_from?: string
    /**
     * School graduation year to
     */
    school_to?: string
    /**
     * Schools IDs
     */
    schools?: string
    sex?: VKAdsCriteriaSex
    /**
     * Stations IDs
     */
    stations?: string
    /**
     * Relationship statuses
     */
    statuses?: string
    /**
     * Streets IDs
     */
    streets?: string
    /**
     * Travellers
     */
    travellers?: string
    /**
     * AB test
     */
    ab_test?: string
    /**
     * University graduation year from
     */
    uni_from?: string
    /**
     * University graduation year to
     */
    uni_to?: string
    /**
     * Browsers
     */
    user_browsers?: string
    /**
     * Devices
     */
    user_devices?: string
    /**
     * Operating systems
     */
    user_os?: string
    /**
     * Suggested criteria
     */
    suggested_criteria?: string
    /**
     * Group not
     */
    groups_not?: string
    /**
     * Price list audience type
     */
    price_list_audience_type?: string
    /**
     * Count
     */
    count?: string
    /**
     * Group active formula
     */
    groups_active_formula?: string
    /**
     * Interest categories formula
     */
    interest_categories_formula?: string
    /**
     * Groups formula
     */
    groups_formula?: string
    /**
     * Groups active
     */
    groups_active?: string
    /**
     * Group types
     */
    group_types?: string
    /**
     * Key phrases
     */
    key_phrases?: string
    /**
     * Key phrases days
     */
    key_phrases_days?: string
    /**
     * Geo near
     */
    geo_near?: string
    /**
     * Geo point type
     */
    geo_point_type?: string
    /**
     * Price list id
     */
    price_list_id?: string
    /**
     * Groups recommended ids
     */
    groups_recommended?: string
    /**
     * Groups active recommended ids
     */
    groups_active_recommended?: string
    /**
     * Music artists formula
     */
    music_artists_formula?: string
    /**
     * Price list retargeting formula
     */
    price_list_retargeting_formula?: string
    /**
     * Tags
     */
    tags?: string
    /**
     * Browsers
     */
    browsers?: string
    /**
     * Mobile os min version
     */
    mobile_os_min_version?: string
    /**
     * Mobile apps events formula
     */
    mobile_apps_events_formula?: string
    /**
     * Mobile os max version
     */
    mobile_os_max_version?: string
    /**
     * operators
     */
    operators?: string
    /**
     * wifi_only
     */
    wifi_only?: string
    /**
     * mobile_manufacturers
     */
    mobile_manufacturers?: string
}

/**
 *
 */
export interface VKAdsTargStats {
    /**
     * Audience
     */
    audience_count: number
    /**
     * Recommended CPC value for 50% reach (old format)
     */
    recommended_cpc?: string
    /**
     * Recommended CPM value for 50% reach (old format)
     */
    recommended_cpm?: string
    /**
     * Recommended CPC value for 50% reach
     */
    recommended_cpc_50?: string
    /**
     * Recommended CPM value for 50% reach
     */
    recommended_cpm_50?: string
    /**
     * Recommended CPC value for 70% reach
     */
    recommended_cpc_70?: string
    /**
     * Recommended CPM value for 70% reach
     */
    recommended_cpm_70?: string
    /**
     * Recommended CPC value for 90% reach
     */
    recommended_cpc_90?: string
    /**
     * Recommended CPM value for 90% reach
     */
    recommended_cpm_90?: string
    /**
     * Total alive audience
     */
    total_alive_audience?: number
}

/**
 *
 */
export interface VKAdsTargSuggestions {
    /**
     * Object ID
     */
    id?: number
    /**
     * Object name
     */
    name?: string
    /**
     * Object type
     */
    type?: string
    /**
     * Parent
     */
    parent?: string
}

/**
 *
 */
export interface VKAdsTargSuggestionsCities {
    /**
     * Object ID
     */
    id?: number
    /**
     * Object name
     */
    name?: string
    /**
     * Parent object
     */
    parent?: string
}

/**
 *
 */
export interface VKAdsTargSuggestionsRegions {
    /**
     * Object ID
     */
    id?: number
    /**
     * Object name
     */
    name?: string
    /**
     * Object type
     */
    type?: string
}

/**
 *
 */
export interface VKAdsTargSuggestionsSchools {
    /**
     * Full school title
     */
    desc?: string
    /**
     * School ID
     */
    id?: number
    /**
     * School title
     */
    name?: string
    /**
     * City name
     */
    parent?: string
    type?: VKAdsTargSuggestionsSchoolsType
}

/**
 * School type
 */
export type VKAdsTargSuggestionsSchoolsType =
    | "school"
    | "university"
    | "faculty"
    | "chair"

/**
 *
 */
export interface VKAdsTargetGroup {
    /**
     * Group ID
     */
    id?: number
    /**
     * Group name
     */
    name?: string
    /**
     * Is audience
     */
    is_audience?: boolean
    /**
     * Is shared
     */
    is_shared?: boolean
    /**
     * File source
     */
    file_source?: boolean
    /**
     * API source
     */
    api_source?: boolean
    /**
     * File source
     */
    lookalike_source?: boolean
    /**
     * Audience
     */
    audience_count?: number
    /**
     * Site domain
     */
    domain?: string
    /**
     * Number of days for user to be in group
     */
    lifetime?: number
    /**
     * Pixel code
     */
    pixel?: string
    /**
     * Target Pixel id
     */
    target_pixel_id?: number
    /**
     * Target Pixel rules
     */
    target_pixel_rules?: VKAdsTargetGroupTargetPixelRule[]
    /**
     * Last updated
     */
    last_updated?: number
}

/**
 *
 */
export interface VKAdsTargetGroupTargetPixelRule {
    url_full_match?: string
    event_full_match?: string
    url_substrings_match?: string[]
    event_substrings_match?: string[]
    url_regex_match?: string
    event_regex_match?: string
}

/**
 *
 */
export interface VKAdsTargetPixelInfo {
    target_pixel_id: number
    name: string
    domain: string
    category_id: number
    last_updated: number
    pixel: string
}

/**
 *
 */
export interface VKAdsUpdateOfficeUsersResult {
    user_id: number
    is_success: boolean
    error?: VKBaseError
}

/**
 *
 */
export interface VKAdsUpdateAdsStatus {
    /**
     * Ad ID
     */
    id: number
    /**
     * Error code
     */
    error_code?: number
    /**
     * Error description
     */
    error_desc?: string
}

/**
 *
 */
export interface VKAdsUpdateClientsStatus {
    /**
     * Client ID
     */
    id: number
    /**
     * Error code
     */
    error_code?: number
    /**
     * Error description
     */
    error_desc?: string
}

/**
 *
 */
export interface VKAdsUserSpecification {
    user_id: number
    role: VKAdsAccessRolePublic
    grant_access_to_all_clients?: boolean
    client_ids?: number[]
    view_budget?: boolean
}

/**
 *
 */
export interface VKAdsUserSpecificationCutted {
    user_id: number
    role: VKAdsAccessRolePublic
    client_id?: number
    view_budget?: boolean
}

/**
 *
 */
export interface VKAdsUsers {
    accesses: VKAdsAccesses[]
    /**
     * User ID
     */
    user_id: number
}

/**
 *
 */
export interface VKAppWidgetsPhoto {
    /**
     * Image ID
     */
    id: string
    images: VKBaseImage[]
}

/**
 *
 */
export interface VKAppWidgetsPhotos {
    count?: number
    items?: VKAppWidgetsPhoto[]
}

/**
 *
 */
export interface VKAppsApp {
    type: VKAppsAppType
    /**
     * Application ID
     */
    id: number
    /**
     * Application title
     */
    title: string
    /**
     * Application author's ID
     */
    author_owner_id?: number
    /**
     * Is application installed
     */
    is_installed?: boolean
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139?: string
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150?: string
    /**
     * URL of the app icon with 278 px in width
     */
    icon_278?: string
    /**
     * URL of the app icon with 576 px in width
     */
    icon_576?: string
    /**
     * Hex color code without hash sign
     */
    background_loader_color?: string
    /**
     * SVG data
     */
    loader_icon?: string
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75?: string
    /**
     * Screen orientation
     */
    screen_orientation?: number
    /**
     * Application author's URL
     */
    author_url?: string
    /**
     * URL of the app banner with 1120 px in width
     */
    banner_1120?: string
    /**
     * URL of the app banner with 560 px in width
     */
    banner_560?: string
    /**
     * URL of the app icon with 16 px in width
     */
    icon_16?: string
    /**
     * Is new flag
     */
    is_new?: VKBaseBoolInt
    /**
     * Is push enabled
     */
    push_enabled?: VKBaseBoolInt
    friends?: number[]
    /**
     * Catalog position
     */
    catalog_position?: number
    /**
     * Application description
     */
    description?: string
    /**
     * Genre name
     */
    genre?: string
    /**
     * Genre ID
     */
    genre_id?: number
    /**
     * Information whether the application is multilanguage
     */
    international?: boolean
    /**
     * Information whether application is in mobile catalog
     */
    is_in_catalog?: number
    leaderboard_type?: VKAppsAppLeaderboardType
    /**
     * Members number
     */
    members_count?: number
    /**
     * Application ID in store
     */
    platform_id?: string
    /**
     * Date when the application has been published in Unixtime
     */
    published_date?: number
    /**
     * Screen name
     */
    screen_name?: string
    /**
     * Application section name
     */
    section?: string
}

/**
 * App fields available for response
 */
export type VKAppsAppFields =
    | "author_group"
    | "author_id"
    | "author_url"
    | "banner_1120"
    | "banner_560"
    | "banner_186"
    | "banner_896"
    | "icon_16"
    | "icon_25"
    | "icon_50"
    | "icon_100"
    | "icon_200"
    | "icon_128"
    | "icon_256"
    | "is_new"
    | "new"
    | "is_html5_app"
    | "push_enabled"
    | "catalog_banner"
    | "friends"
    | "catalog_position"
    | "description"
    | "genre"
    | "genre_id"
    | "international"
    | "is_in_catalog"
    | "installed"
    | "leaderboard_type"
    | "members_count"
    | "platform_id"
    | "published_date"
    | "screen_name"
    | "section"
    | "type"
    | "id"
    | "title"
    | "author_owner_id"
    | "is_installed"
    | "icon_139"
    | "icon_150"
    | "icon_278"
    | "icon_576"
    | "background_loader_color"
    | "loader_icon"
    | "icon_75"
    | "open_in_external_browser"
    | "ad_config"
    | "screen_orientation"

/**
 * Leaderboard type
 *
 * - `0` — not supported
 * - `1` — levels
 * - `2` — points
 */
export type VKAppsAppLeaderboardType = 0 | 1 | 2

/**
 *
 */
export interface VKAppsAppMin {
    type: VKAppsAppType
    /**
     * Application ID
     */
    id: number
    /**
     * Application title
     */
    title: string
    /**
     * Application author's ID
     */
    author_owner_id?: number
    /**
     * Is application installed
     */
    is_installed?: boolean
    /**
     * URL of the app icon with 139 px in width
     */
    icon_139?: string
    /**
     * URL of the app icon with 150 px in width
     */
    icon_150?: string
    /**
     * URL of the app icon with 278 px in width
     */
    icon_278?: string
    /**
     * URL of the app icon with 576 px in width
     */
    icon_576?: string
    /**
     * Hex color code without hash sign
     */
    background_loader_color?: string
    /**
     * SVG data
     */
    loader_icon?: string
    /**
     * URL of the app icon with 75 px in width
     */
    icon_75?: string
    /**
     * Screen orientation
     */
    screen_orientation?: number
}

/**
 * Application type
 */
export type VKAppsAppType =
    | "app"
    | "game"
    | "site"
    | "standalone"
    | "vk_app"
    | "community_app"
    | "html5_game"
    | "mini_app"

/**
 *
 */
export interface VKAppsCatalogList {
    /**
     * Total number
     */
    count: number
    items: VKAppsApp[]
    profiles?: VKUsersUserMin[]
}

export type VKAppsCustomSnippetVkRef = "snippet_im" | "snippet_post"
export type VKAppsCustomSnippetButton =
    | "buy"
    | "buy_ticket"
    | "contact"
    | "create"
    | "enroll"
    | "fill"
    | "go"
    | "open"
    | "play"

/**
 *
 */
export interface VKAppsCustomSnippet {
    vk_ref?: VKAppsCustomSnippetVkRef[]
    group_id?: number[]
    hash?: string[]
    snippet_id?: number
    title?: string
    description?: string
    expired_at?: number
    image_url?: string
    small_image_url?: string
    button?: VKAppsCustomSnippetButton
}

/**
 *
 */
export interface VKAppsLeaderboard {
    /**
     * Level
     */
    level?: number
    /**
     * Points number
     */
    points?: number
    /**
     * Score number
     */
    score?: number
    /**
     * User ID
     */
    user_id: number
}

export type VKAppsScopeName =
    | "friends"
    | "photos"
    | "video"
    | "pages"
    | "status"
    | "notes"
    | "wall"
    | "docs"
    | "groups"
    | "stats"
    | "market"
    | "stories"
    | "app_widget"
    | "messages"
    | "manage"
    | "notify"
    | "audio"
    | "support"
    | "menu"
    | "wallmenu"
    | "ads"
    | "offline"
    | "notifications"
    | "email"
    | "adsweb"
    | "leads"
    | "group_messages"
    | "exchange"
    | "phone"

/**
 * Scope description
 */
export interface VKAppsScope {
    /**
     * Scope name
     */
    name: VKAppsScopeName
    /**
     * Scope title
     */
    title?: string
}

export type VKAppsTestingGroupPlatforms = "mobile" | "web" | "mvk"

/**
 *
 */
export interface VKAppsTestingGroup {
    user_ids: number[]
    group_id: number
    name?: string
    webview?: string
    platforms?: VKAppsTestingGroupPlatforms[]
}

/**
 *
 */
export interface VKAudioAudio {
    /**
     * Access key for the audio
     */
    access_key?: string
    /**
     * Artist name
     */
    artist: string
    /**
     * Audio ID
     */
    id: number
    /**
     * Audio owner's ID
     */
    owner_id: number
    /**
     * Title
     */
    title: string
    /**
     * URL of mp3 file
     */
    url?: string
    /**
     * Duration in seconds
     */
    duration: number
    /**
     * Stream duration in seconds
     */
    stream_duration?: number
    /**
     * Date when uploaded
     */
    date?: number
    /**
     * Album ID
     */
    album_id?: number
    /**
     * Performer name
     */
    performer?: string
    /**
     * Примерный объем памяти занимаемый аудио на устройстве. Реализовано только для эпизодов подкастов
     */
    file_size?: number
}

/**
 *
 *
 * - `0` — no
 * - `1` — yes
 */
export type VKBaseBoolInt = 0 | 1

/**
 *
 */
export interface VKBaseCity {
    /**
     * City ID
     */
    id: number
    /**
     * City title
     */
    title: string
}

/**
 *
 */
export interface VKBaseCommentsInfo {
    /**
     * Information whether current user can comment the post
     */
    can_post?: VKBaseBoolInt
    can_open?: VKBaseBoolInt
    can_close?: VKBaseBoolInt
    /**
     * Information whether current user can view the comments
     */
    can_view?: VKBaseBoolInt
    /**
     * Comments number
     */
    count?: number
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    donut?: VKWallWallpostCommentsDonut
    list?: VKWallWallComment[]
}

/**
 *
 */
export interface VKBaseCountry {
    /**
     * Country ID
     */
    id: number
    /**
     * Country title
     */
    title: string
}

/**
 *
 */
export interface VKBaseCropPhoto {
    photo: VKPhotosPhoto
    crop: VKBaseCropPhotoCrop
    rect: VKBaseCropPhotoRect
}

/**
 *
 */
export interface VKBaseCropPhotoCrop {
    /**
     * Coordinate X of the left upper corner
     */
    x: number
    /**
     * Coordinate Y of the left upper corner
     */
    y: number
    /**
     * Coordinate X of the right lower corner
     */
    x2: number
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

/**
 *
 */
export interface VKBaseCropPhotoRect {
    /**
     * Coordinate X of the left upper corner
     */
    x: number
    /**
     * Coordinate Y of the left upper corner
     */
    y: number
    /**
     * Coordinate X of the right lower corner
     */
    x2: number
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

export type VKBaseErrorInnerType = "base_error"

/**
 *
 */
export interface VKBaseError {
    inner_type: VKBaseErrorInnerType
    /**
     * Error code
     */
    error_code: number
    /**
     * Error subcode
     */
    error_subcode?: number
    /**
     * Error message
     */
    error_msg?: string
    /**
     * Localized error message
     */
    error_text?: string
    request_params?: VKBaseRequestParam[]
}

/**
 *
 */
export interface VKBaseGeo {
    coordinates?: VKBaseGeoCoordinates
    place?: VKBasePlace
    /**
     * Information whether a map is showed
     */
    showmap?: number
    /**
     * Place type
     */
    type?: string
}

/**
 *
 */
export interface VKBaseGeoCoordinates {
    latitude: number
    longitude: number
}

/**
 *
 */
export interface VKBaseGradientPoint {
    /**
     * Hex color code without #
     */
    color: string
    /**
     * Point position
     */
    position: number
}

export type VKBaseImageTheme = "light" | "dark"

/**
 *
 */
export interface VKBaseImage {
    id?: string
    /**
     * Image url
     */
    url: string
    /**
     * Image width
     */
    width: number
    /**
     * Image height
     */
    height: number
    theme?: VKBaseImageTheme
}

/**
 *
 *
 * - `ru` — russian
 * - `ua` — ukrainian
 * - `be` — belarusian
 * - `en` — english
 * - `es` — spanish
 * - `fi` — finnish
 * - `de` — german
 * - `it` — italian
 */
export type VKBaseLang = "ru" | "ua" | "be" | "en" | "es" | "fi" | "de" | "it"

/**
 *
 */
export interface VKBaseLikes {
    /**
     * Likes number
     */
    count?: number
    /**
     * Information whether current user likes the photo
     */
    user_likes?: VKBaseBoolInt
}

/**
 *
 */
export interface VKBaseLikesInfo {
    /**
     * Information whether current user can like the post
     */
    can_like: VKBaseBoolInt
    /**
     * Information whether current user can repost
     */
    can_publish?: VKBaseBoolInt
    /**
     * Whether user can like comment as author
     */
    can_like_as_author?: VKBaseBoolInt
    /**
     * Whether current owner of the group can like the reply
     */
    can_like_by_group?: VKBaseBoolInt
    /**
     * Likes number
     */
    count: number
    /**
     * Information whether current uer has liked the post
     */
    user_likes: VKBaseBoolInt
    /**
     * Information whether post author liked the reply
     */
    author_liked?: boolean
    /**
     * Information whether group liked the reply
     */
    group_liked?: boolean
    /**
     * Remove repost feature for post
     */
    repost_disabled?: boolean
}

/**
 *
 */
export interface VKBaseLink {
    application?: VKBaseLinkApplication
    button?: VKBaseLinkButton
    /**
     * Link caption
     */
    caption?: string
    /**
     * Link description
     */
    description?: string
    /**
     * Link ID
     */
    id?: string
    is_favorite?: boolean
    photo?: VKPhotosPhoto
    /**
     * String ID of the page with article preview
     */
    preview_page?: string
    /**
     * URL of the page with article preview
     */
    preview_url?: string
    rating?: VKBaseLinkRating
    /**
     * Link title
     */
    title?: string
    /**
     * Link URL
     */
    url: string
    target_object?: VKLinkTargetObject
    /**
     * Information whether the current link is external
     */
    is_external?: boolean
    /**
     * Video from link
     */
    video?: VKVideoVideoFull
    text?: string
    product?: VKBaseLinkProduct
}

/**
 *
 */
export interface VKBaseLinkApplication {
    /**
     * Application Id
     */
    app_id?: number
    store?: VKBaseLinkApplicationStore
}

/**
 *
 */
export interface VKBaseLinkApplicationStore {
    /**
     * Store Id
     */
    id?: number
    /**
     * Store name
     */
    name?: string
}

/**
 *
 */
export interface VKBaseLinkButton {
    /**
     * Button action
     */
    action?: VKBaseLinkButtonAction
    /**
     * Button title
     */
    title?: string
    /**
     * Target block id
     */
    block_id?: string
    /**
     * Target section id
     */
    section_id?: string
    /**
     * artist id
     */
    artist_id?: string
    /**
     * curator id
     */
    curator_id?: number
    /**
     * Video album id
     */
    album_id?: number
    /**
     * Owner id
     */
    owner_id?: number
    /**
     * Button icon name, e.g. 'phone' or 'gift'
     */
    icon?: string
    style?: VKBaseLinkButtonStyle
    audio_id?: number
    hashtag?: string
}

/**
 *
 */
export interface VKBaseLinkButtonAction {
    type: VKBaseLinkButtonActionType
    /**
     * Action URL
     */
    url?: string
    consume_reason?: string
}

/**
 * Action type
 */
export type VKBaseLinkButtonActionType =
    | "open_url"
    | "market_clear_recent_queries"
    | "close_web_app"
    | "add_playlist"
    | "open_search_tab"
    | "open_search_filters"
    | "reset_search_filters"
    | "import_contacts"
    | "add_friends"
    | "onboarding"
    | "show_filters"

/**
 * Button style
 *
 * - `updates` — updates
 * - `default` — default
 * - `primary` — primary
 * - `secondary` — secondary
 * - `negative` — negative
 * - `tertiary` — tertiary
 * - `float_bottom` — float_bottom
 * - `cell_button_centered_icon` — cell_button_centered_icon
 * - `borderless_with_icon` — borderless_with_icon
 * - `gray` — gray
 * - `flat` — flat
 * - `outline_with_chevron` — outline_with_chevron
 * - `inline` — inline
 * - `modal` — modal
 * - `right_button` — right_button
 * - `after_toolbar` — after_toolbar
 */
export type VKBaseLinkButtonStyle =
    | "updates"
    | "default"
    | "primary"
    | "secondary"
    | "negative"
    | "tertiary"
    | "float_bottom"
    | "cell_button_centered_icon"
    | "borderless_with_icon"
    | "gray"
    | "flat"
    | "outline_with_chevron"
    | "inline"
    | "modal"
    | "right_button"
    | "after_toolbar"

/**
 *
 */
export interface VKBaseLinkNoProduct {
    application?: VKBaseLinkApplication
    button?: VKBaseLinkButton
    /**
     * Link caption
     */
    caption?: string
    /**
     * Link description
     */
    description?: string
    /**
     * Link ID
     */
    id?: string
    is_favorite?: boolean
    photo?: VKPhotosPhoto
    /**
     * String ID of the page with article preview
     */
    preview_page?: string
    /**
     * URL of the page with article preview
     */
    preview_url?: string
    rating?: VKBaseLinkRating
    /**
     * Link title
     */
    title?: string
    /**
     * Link URL
     */
    url: string
    target_object?: VKLinkTargetObject
    /**
     * Information whether the current link is external
     */
    is_external?: boolean
    /**
     * Video from link
     */
    video?: VKVideoVideoFull
}

export type VKBaseLinkProductType = "product"

/**
 *
 */
export interface VKBaseLinkProduct {
    price: VKMarketPrice
    merchant?: string
    category?: VKBaseLinkProductCategory
    geo?: VKBaseGeoCoordinates
    distance?: number
    city?: string
    status?: VKBaseLinkProductStatus
    orders_count?: number
    type?: VKBaseLinkProductType
}

/**
 *
 */
export type VKBaseLinkProductCategory = string | VKMarketMarketCategoryNested

/**
 * Status representation
 */
export type VKBaseLinkProductStatus =
    | "active"
    | "blocked"
    | "sold"
    | "deleted"
    | "archived"

export type VKBaseLinkRatingType = "rating"

/**
 *
 */
export interface VKBaseLinkRating {
    /**
     * Count of reviews
     */
    reviews_count?: number
    /**
     * Count of stars
     */
    stars?: number
    type?: VKBaseLinkRatingType
}

/**
 *
 */
export interface VKBaseMessageError {
    /**
     * Error code
     */
    code?: number
    /**
     * Error message
     */
    description?: string
}

/**
 *
 *
 * - `Nom` — nominative
 * - `Gen` — genitive
 * - `Dat` — dative
 * - `Acc` — accusative
 * - `Ins` — instrumental
 * - `Abl` — prepositional
 */
export type VKBaseNameCase = "Nom" | "Gen" | "Dat" | "Acc" | "Ins" | "Abl"

/**
 *
 */
export interface VKBaseObject {
    /**
     * Object ID
     */
    id: number
    /**
     * Object title
     */
    title: string
}

/**
 *
 */
export interface VKBaseObjectCount {
    /**
     * Items count
     */
    count?: number
}

/**
 *
 */
export interface VKBaseObjectWithName {
    /**
     * Object ID
     */
    id: number
    /**
     * Object name
     */
    name: string
}

/**
 *
 */
export interface VKBaseOwnerCover {
    /**
     * Information whether cover is enabled
     */
    enabled: VKBaseBoolInt
    images?: VKBaseImage[]
    crop_params?: VKBaseOwnerCoverCropParams
    original_image?: VKBaseImage
    photo_id?: number
}

/**
 *
 */
export interface VKBaseOwnerCoverCropParams {
    x?: number
    y?: number
    width?: number
    height?: number
}

/**
 *
 */
export interface VKBasePlace {
    /**
     * Place address
     */
    address?: string
    /**
     * Checkins number
     */
    checkins?: number
    /**
     * City name
     */
    city?: string
    /**
     * Date of the place creation in Unixtime
     */
    created?: number
    /**
     * URL of the place's icon
     */
    icon?: string
    /**
     * Place ID
     */
    id?: number
    /**
     * Place latitude
     */
    latitude?: number
    /**
     * Place longitude
     */
    longitude?: number
    /**
     * Place title
     */
    title?: string
    /**
     * Place type
     */
    type?: string
}

/**
 *
 *
 * - `1` — Property exists
 */
export type VKBasePropertyExists = 1

/**
 * Count of views
 */
export interface VKBaseRepostsInfo {
    /**
     * Total reposts counter. Sum of wall and mail reposts counters
     */
    count: number
    /**
     * Wall reposts counter
     */
    wall_count?: number
    /**
     * Mail reposts counter
     */
    mail_count?: number
    /**
     * Information whether current user has reposted the post
     */
    user_reposted?: VKBaseBoolInt
}

/**
 *
 */
export interface VKBaseRequestParam {
    /**
     * Parameter name
     */
    key: string
    /**
     * Parameter value
     */
    value: string
}

/**
 *
 *
 * - `0` — unknown
 * - `1` — female
 * - `2` — male
 */
export type VKBaseSex = 0 | 1 | 2

/**
 *
 */
export type VKBaseSticker = VKBaseStickerNew

export type VKBaseStickerAnimationType = "light" | "dark"

/**
 *
 */
export interface VKBaseStickerAnimation {
    /**
     * Type of animation script
     */
    type?: VKBaseStickerAnimationType
    /**
     * URL of animation script
     */
    url?: string
}

export type VKBaseStickerNewInnerType = "base_sticker_new"

/**
 *
 */
export interface VKBaseStickerNew {
    inner_type: VKBaseStickerNewInnerType
    /**
     * Sticker ID
     */
    sticker_id?: number
    /**
     * Pack ID
     */
    product_id?: number
    images?: VKBaseImage[]
    images_with_background?: VKBaseImage[]
    /**
     * URL of sticker animation script
     */
    animation_url?: string
    /**
     * Array of sticker animation script objects
     */
    animations?: VKBaseStickerAnimation[]
    /**
     * Information whether the sticker is allowed
     */
    is_allowed?: boolean
}

/**
 *
 */
export interface VKBaseUploadServer {
    /**
     * Upload URL
     */
    upload_url: string
}

/**
 *
 */
export type VKBaseUserGroupFields =
    | "about"
    | "action_button"
    | "activities"
    | "activity"
    | "addresses"
    | "admin_level"
    | "age_limits"
    | "author_id"
    | "ban_info"
    | "bdate"
    | "blacklisted"
    | "blacklisted_by_me"
    | "books"
    | "can_ban"
    | "can_create_topic"
    | "can_message"
    | "can_post"
    | "can_see_all_posts"
    | "can_see_audio"
    | "can_send_friend_request"
    | "can_upload_video"
    | "can_write_private_message"
    | "career"
    | "city"
    | "common_count"
    | "connections"
    | "contacts"
    | "counters"
    | "cover"
    | "crop_photo"
    | "deactivated"
    | "description"
    | "domain"
    | "education"
    | "exports"
    | "finish_date"
    | "fixed_post"
    | "followers_count"
    | "friend_status"
    | "games"
    | "has_market_app"
    | "has_mobile"
    | "has_photo"
    | "home_town"
    | "id"
    | "interests"
    | "is_admin"
    | "is_closed"
    | "is_favorite"
    | "is_friend"
    | "is_best_friend"
    | "is_hidden_from_feed"
    | "is_member"
    | "is_messages_blocked"
    | "can_send_notify"
    | "is_subscribed"
    | "last_seen"
    | "links"
    | "lists"
    | "maiden_name"
    | "main_album_id"
    | "main_section"
    | "market"
    | "member_status"
    | "members_count"
    | "military"
    | "movies"
    | "music"
    | "name"
    | "nickname"
    | "occupation"
    | "online"
    | "online_status"
    | "personal"
    | "phone"
    | "photo_100"
    | "photo_200"
    | "photo_200_orig"
    | "photo_400_orig"
    | "photo_50"
    | "photo_id"
    | "photo_max"
    | "photo_max_orig"
    | "photo_avg_color"
    | "quotes"
    | "relation"
    | "relatives"
    | "schools"
    | "screen_name"
    | "sex"
    | "site"
    | "start_date"
    | "status"
    | "timezone"
    | "trending"
    | "tv"
    | "type"
    | "universities"
    | "verified"
    | "wall_comments"
    | "wiki_page"
    | "first_name"
    | "first_name_acc"
    | "first_name_dat"
    | "first_name_gen"
    | "last_name"
    | "last_name_acc"
    | "last_name_dat"
    | "last_name_gen"
    | "can_subscribe_stories"
    | "is_subscribed_stories"
    | "vk_admin_status"
    | "can_upload_story"
    | "clips_count"
    | "image_status"
    | "is_nft"
    | "is_nft_photo"
    | "is_verified"
    | "url"

/**
 *
 */
export interface VKBaseUserId {
    /**
     * User ID
     */
    user_id?: number
}

/**
 * Sort type
 *
 * - `1` — desc_updated
 * - `2` — desc_created
 * - `-1` — asc_updated
 * - `-2` — asc_created
 */
export type VKBoardDefaultOrder = 1 | 2 | -1 | -2

/**
 *
 */
export interface VKBoardTopic {
    /**
     * Comments number
     */
    comments?: number
    /**
     * Date when the topic has been created in Unixtime
     */
    created?: number
    /**
     * Creator ID
     */
    created_by?: number
    /**
     * Topic ID
     */
    id?: number
    /**
     * Information whether the topic is closed
     */
    is_closed?: VKBaseBoolInt
    /**
     * Information whether the topic is fixed
     */
    is_fixed?: VKBaseBoolInt
    /**
     * Topic title
     */
    title?: string
    /**
     * Date when the topic has been updated in Unixtime
     */
    updated?: number
    /**
     * ID of user who updated the topic
     */
    updated_by?: number
    /**
     * First comment text
     */
    first_comment?: string
    /**
     * Last comment text
     */
    last_comment?: string
}

/**
 *
 */
export interface VKBoardTopicComment {
    attachments?: VKWallCommentAttachment[]
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number
    /**
     * Author ID
     */
    from_id: number
    /**
     * Comment ID
     */
    id: number
    /**
     * Real position of the comment
     */
    real_offset?: number
    /**
     * Comment text
     */
    text: string
    /**
     * Information whether current user can edit the comment
     */
    can_edit?: VKBaseBoolInt
    likes?: VKBaseLikesInfo
}

/**
 *
 */
export interface VKBugtrackerAddCompanyGroupsMembersError {
    group_id: number
    user_id: number
}

export type VKBugtrackerAttachmentType = "photo" | "doc"

/**
 *
 */
export interface VKBugtrackerAttachment {
    doc?: VKDocsDoc
    photo?: VKPhotosPhoto
    type: VKBugtrackerAttachmentType
}

/**
 * - `1` — need_correction_long_time
 * - `2` — ready_for_testing_long_time
 */
export type VKBugtrackerBugreportStatusAutoUpdateReason = 1 | 2

/**
 *
 */
export interface VKBugtrackerBugreport {
    id: number
    original_id?: number
    clones_count?: number
    title: string
    owner_id: number
    created: number
    updated: number
    description?: string
    state_actual?: string
    state_supposed?: string
    phone?: string
    comments_count?: number
    can_remove?: boolean
    can_change_status?: boolean
    can_bookmark?: boolean
    is_bookmarked?: boolean
    can_edit?: boolean
    can_export_to_trackers?: boolean
    can_export_to_csv?: boolean
    can_add_moder_comment?: boolean
    can_add_hidden_comment?: boolean
    can_view_history?: boolean
    is_deleted?: boolean
    can_restore?: boolean
    is_vulnerability?: boolean
    is_severity_by_moderator?: boolean
    hidden_docs?: boolean
    is_confidential?: boolean
    private_comment?: string
    can_change_product?: boolean
    company_id: number
    tournament_score?: number
    moderator_user_id?: number
    moderated?: number
    screen_reader?: number
    status_auto_update_ts?: number
    status_auto_update_reason?: VKBugtrackerBugreportStatusAutoUpdateReason
    product_has_wishes?: boolean
}

/**
 *
 */
export interface VKBugtrackerBugreportSubscribeState {
    can_set_subscribe: boolean
    is_subscribed?: boolean
    set_subscribe_hash?: string
}

/**
 *
 */
export interface VKBugtrackerComment {
    bugreport_id: number
    comment_id: number
    created: number
    text: string
    meta_text?: string
    from_id?: number
    author_name?: string
    author_photo?: string
    can_edit?: boolean
    can_remove?: boolean
    is_hidden?: boolean
    attachments?: VKBugtrackerAttachment[]
    is_unread?: boolean
    author?: VKBugtrackerCommentAuthor
    is_attachments_hidden?: boolean
}

/**
 *
 */
export interface VKBugtrackerCommentAuthor {
    author_id?: number
    name?: string
    photo?: string
    moder_name?: string
    moder_number?: number
    link?: string
}

/**
 *
 */
export interface VKBugtrackerCompanyMember {
    user_id: number
    company_id: number
    role: number
    role_name: string
    ts: number
    groups_count: number
    products_count: number
    reporter_url: string
    groups?: number[]
    products?: VKBugtrackerCompanyMemberProduct[]
}

/**
 *
 */
export interface VKBugtrackerCompanyMemberProduct {
    id: number
    title?: string
    photo_url?: string
    access: number
    status: number
    licence_status_text?: string
}

/**
 *
 */
export interface VKCallbackAppPayload {
    user_id: number
    app_id: number
    payload: string
}

/**
 *
 */
export type VKCallbackAudioNew = VKAudioAudio

/**
 *
 */
export interface VKCallbackBase {
    type: VKCallbackType
    group_id: number
    /**
     * Unique event id. If it passed twice or more - you should ignore it.
     */
    event_id: string
    /**
     * API object version
     */
    v: string
    secret?: string
}

/**
 *
 */
export interface VKCallbackBoardPostDelete {
    topic_owner_id: number
    topic_id: number
    id: number
    deleter_id?: number
}

/**
 *
 */
export type VKCallbackBoardPostEdit = VKBoardTopicComment

/**
 *
 */
export type VKCallbackBoardPostNew = VKBoardTopicComment

/**
 *
 */
export type VKCallbackBoardPostRestore = VKBoardTopicComment

/**
 *
 */
export interface VKCallbackConfirmation {
    type: VKCallbackType
    group_id: number
    /**
     * Unique event id. If it passed twice or more - you should ignore it.
     */
    event_id: string
    /**
     * API object version
     */
    v: string
    secret?: string
}

/**
 *
 */
export interface VKCallbackDonutMoneyWithdraw {
    amount: number
    amount_without_fee: number
}

/**
 *
 */
export interface VKCallbackDonutMoneyWithdrawError {
    reason: string
}

/**
 *
 */
export interface VKCallbackDonutSubscriptionCancelled {
    user_id?: number
}

/**
 *
 */
export interface VKCallbackDonutSubscriptionCreate {
    user_id?: number
    amount: number
    amount_without_fee: number
}

/**
 *
 */
export interface VKCallbackDonutSubscriptionExpired {
    user_id?: number
}

/**
 *
 */
export interface VKCallbackDonutSubscriptionPriceChanged {
    user_id?: number
    amount_old: number
    amount_new: number
    amount_diff?: number
    amount_diff_without_fee?: number
}

/**
 *
 */
export interface VKCallbackDonutSubscriptionProlonged {
    user_id?: number
    amount: number
    amount_without_fee: number
}

/**
 *
 */
export interface VKCallbackForeignMessage {
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Conversation message ID
     */
    conversation_message_id: number
    /**
     * Date when the message was created
     */
    date: number
    /**
     * Message author's ID
     */
    from_id: number
    fwd_messages?: VKCallbackForeignMessage[]
    geo?: VKBaseGeo
    /**
     * Message ID
     */
    id?: number
    /**
     * Peer ID
     */
    peer_id?: number
    reply_message?: VKCallbackForeignMessage
    /**
     * Message text
     */
    text: string
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    is_cropped?: boolean
}

/**
 * Forwarded messages
 */
export interface VKCallbackFwdMessages {}

/**
 *
 */
export interface VKCallbackGroupChangePhoto {
    user_id: number
    photo: VKPhotosPhoto
}

/**
 *
 */
export interface VKCallbackGroupChangeSettings {
    user_id: number
    changes?: VKCallbackGroupSettingsChanges
}

/**
 *
 */
export interface VKCallbackGroupJoin {
    user_id: number
    join_type: VKCallbackGroupJoinType
}

/**
 *
 */
export type VKCallbackGroupJoinType =
    | "join"
    | "unsure"
    | "accepted"
    | "approved"
    | "request"

/**
 *
 */
export interface VKCallbackGroupLeave {
    user_id?: number
    self?: VKBaseBoolInt
}

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 */
export type VKCallbackGroupMarket = 0 | 1

/**
 *
 *
 * - `0` — none
 * - `1` — moderator
 * - `2` — editor
 * - `3` — administrator
 */
export type VKCallbackGroupOfficerRole = 0 | 1 | 2 | 3

/**
 *
 */
export interface VKCallbackGroupOfficersEdit {
    admin_id: number
    user_id: number
    level_old: VKCallbackGroupOfficerRole
    level_new: VKCallbackGroupOfficerRole
}

/**
 *
 */
export interface VKCallbackGroupSettingsChanges {
    title?: VKCallbackGroupSettingsChangesStringValues
    screen_name?: VKCallbackGroupSettingsChangesStringValues
    event_start_date?: VKCallbackGroupSettingsChangesIntegerValues
    event_finish_date?: VKCallbackGroupSettingsChangesIntegerValues
    event_group_id?: VKCallbackGroupSettingsChangesIntegerValues
    donations?: VKCallbackGroupSettingsChangesIntegerValues
    wall?: VKCallbackGroupSettingsChangesIntegerValues
    replies?: VKCallbackGroupSettingsChangesIntegerValues
    topics?: VKCallbackGroupSettingsChangesIntegerValues
    photos?: VKCallbackGroupSettingsChangesIntegerValues
    docs?: VKCallbackGroupSettingsChangesIntegerValues
    messages?: VKCallbackGroupSettingsChangesIntegerValues
    market?: VKCallbackGroupSettingsChangesIntegerValues
    market_wiki?: VKCallbackGroupSettingsChangesIntegerValues
    board?: VKCallbackGroupSettingsChangesIntegerValues
    links?: VKCallbackGroupSettingsChangesIntegerValues
    audio?: VKCallbackGroupSettingsChangesIntegerValues
    video?: VKCallbackGroupSettingsChangesIntegerValues
    can_post_topics?: VKCallbackGroupSettingsChangesIntegerValues
    can_post_albums?: VKCallbackGroupSettingsChangesIntegerValues
    can_post_video?: VKCallbackGroupSettingsChangesIntegerValues
    disable_market_comments?: VKCallbackGroupSettingsChangesIntegerValues
    status_default?: VKCallbackGroupSettingsChangesIntegerValues
    access?: VKCallbackGroupSettingsChangesIntegerValues
    email?: VKCallbackGroupSettingsChangesStringValues
    country_id?: VKCallbackGroupSettingsChangesIntegerValues
    city_id?: VKCallbackGroupSettingsChangesIntegerValues
    address?: VKCallbackGroupSettingsChangesStringValues
    description?: VKCallbackGroupSettingsChangesStringValues
    website?: VKCallbackGroupSettingsChangesStringValues
    phone?: VKCallbackGroupSettingsChangesStringValues
    age_limits?: VKCallbackGroupSettingsChangesIntegerValues
    category_v2?: VKCallbackGroupSettingsChangesIntegerValues
    public_category?: VKCallbackGroupSettingsChangesIntegerValues
    public_subcategory?: VKCallbackGroupSettingsChangesIntegerValues
}

/**
 *
 */
export interface VKCallbackGroupSettingsChangesIntegerValues {
    old_value?: number
    new_value?: number
}

/**
 *
 */
export interface VKCallbackGroupSettingsChangesStringValues {
    old_value?: string
    new_value?: string
}

/**
 *
 */
export interface VKCallbackInfoForBots {
    button_actions?: VKMessagesTemplateActionTypeNames[]
    /**
     * client has support keyboard
     */
    keyboard?: boolean
    /**
     * client has support inline keyboard
     */
    inline_keyboard?: boolean
    /**
     * client has support carousel
     */
    carousel?: boolean
    /**
     * client or user language id
     */
    lang_id?: number
}

export type VKCallbackLikeAddRemoveObjectType =
    | "video"
    | "photo"
    | "post"
    | "comment"
    | "note"
    | "topic_comment"
    | "photo_comment"
    | "video_comment"
    | "market"
    | "market_comment"

/**
 *
 */
export interface VKCallbackLikeAddRemove {
    liker_id: number
    object_type: VKCallbackLikeAddRemoveObjectType
    object_owner_id: number
    object_id: number
    post_id: number
    thread_reply_id?: number
}

/**
 *
 */
export interface VKCallbackMarketComment {
    id: number
    from_id: number
    date: number
    text?: string
    market_owner_id?: number
    photo_id?: number
}

/**
 *
 */
export interface VKCallbackMarketCommentDelete {
    owner_id: number
    id: number
    user_id: number
    item_id: number
}

/**
 *
 */
export interface VKCallbackMessage {
    action?: VKMessagesActionOneOf
    /**
     * Only for messages from community. Contains user ID of community admin, who sent this message.
     */
    admin_author_id?: number
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number
    /**
     * Is it an deleted message
     */
    deleted?: VKBaseBoolInt
    /**
     * Message author's ID
     */
    from_id: number
    fwd_messages?: VKCallbackFwdMessages
    geo?: VKBaseGeo
    /**
     * Message ID
     */
    id: number
    /**
     * this message is cropped for bot
     */
    is_cropped?: boolean
    keyboard?: VKMessagesKeyboard
    payload?: string
    /**
     * Message text
     */
    text: string
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number
    /**
     * Is silent message, push without sound
     */
    is_silent?: boolean
    /**
     * Is message unavailable for some reason, including its id equals 0
     */
    is_unavailable?: boolean
    version: number
    /**
     * Information whether the message is outcoming
     */
    out: VKBaseBoolInt
    /**
     * Peer ID
     */
    peer_id: number
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id?: number
    ref?: string
    ref_source?: string
    /**
     * Is it an important message
     */
    important?: boolean
    is_hidden?: boolean
    /**
     * Members number
     */
    members_count?: number
    reply_message?: VKCallbackForeignMessage
    /**
     * Reaction id set on message
     */
    reaction_id?: number
    /**
     * Actual reactions counters on this message
     */
    reactions?: VKMessagesReactionCounterResponseItem[]
    /**
     * Last reaction id set on this message
     */
    last_reaction_id?: number
    /**
     * Is message pinned in its conversation
     */
    is_pinned?: boolean
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean
    /**
     * Date when the message has been pinned in Unixtime
     */
    pinned_at?: number
    influence_score?: number
}

/**
 *
 */
export interface VKCallbackMessageAllow {
    user_id: number
    key: string
}

/**
 *
 */
export interface VKCallbackMessageDeny {
    user_id: number
}

/**
 *
 */
export interface VKCallbackMessageEvent {
    user_id: number
    peer_id: number
    event_id: string
    payload: string
    conversation_message_id?: number
}

/**
 *
 */
export type VKCallbackMessageNew = VKCallbackMessageObject

/**
 *
 */
export interface VKCallbackMessageObject {
    client_info?: VKCallbackInfoForBots
    message?: VKCallbackMessage
}

/**
 *
 */
export interface VKCallbackMessageReactionEvent {
    reacted_id: number
    peer_id: number
    cmid: number
    reaction_id?: number
}

/**
 *
 */
export interface VKCallbackMessageRead {
    from_id: number
    peer_id: number
    read_message_id: number
    conversation_message_id: number
}

export type VKCallbackMessageTypingStateState =
    | "message_typing_state"
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"

/**
 *
 */
export interface VKCallbackMessageTypingState {
    from_id: number
    to_id: number
    state: VKCallbackMessageTypingStateState
}

/**
 *
 */
export interface VKCallbackPhotoComment {
    /**
     * Comment ID
     */
    id: number
    /**
     * Author ID
     */
    from_id: number
    can_edit?: VKBaseBoolInt
    post_id?: number
    owner_id?: number
    parents_stack?: number[]
    photo_id?: number
    video_id?: number
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number
    /**
     * Comment text
     */
    text: string
    attachments?: VKWallWallpostAttachment[]
    donut?: VKWallWallCommentDonut
    likes?: VKBaseLikesInfo
    /**
     * Real position of the comment
     */
    real_offset?: number
    /**
     * Replied user ID
     */
    reply_to_user?: number
    /**
     * Replied comment ID
     */
    reply_to_comment?: number
    thread?: VKCommentThread
    /**
     * Whether post is by author of the post or not
     */
    is_from_post_author?: boolean
    deleted?: boolean
    /**
     * Photo ID
     */
    pid?: number
    photo_owner_id: number
}

/**
 *
 */
export interface VKCallbackPhotoCommentDelete {
    id: number
    owner_id: number
    user_id: number
    photo_id: number
    deleter_id: number
}

/**
 *
 */
export type VKCallbackPhotoNew = VKPhotosPhoto

/**
 *
 */
export interface VKCallbackPollVoteNew {
    owner_id: number
    poll_id: number
    option_id: number
    user_id: number
}

/**
 *
 */
export type VKCallbackType =
    | "audio_new"
    | "board_post_new"
    | "board_post_edit"
    | "board_post_restore"
    | "board_post_delete"
    | "confirmation"
    | "group_leave"
    | "group_join"
    | "group_change_photo"
    | "group_change_settings"
    | "group_officers_edit"
    | "lead_forms_new"
    | "market_comment_new"
    | "market_comment_delete"
    | "market_comment_edit"
    | "market_comment_restore"
    | "market_order_new"
    | "market_order_edit"
    | "message_new"
    | "message_reply"
    | "message_edit"
    | "message_allow"
    | "message_deny"
    | "message_read"
    | "message_typing_state"
    | "messages_edit"
    | "message_reaction_event"
    | "photo_new"
    | "photo_comment_new"
    | "photo_comment_delete"
    | "photo_comment_edit"
    | "photo_comment_restore"
    | "poll_vote_new"
    | "user_block"
    | "user_unblock"
    | "video_new"
    | "video_comment_new"
    | "video_comment_delete"
    | "video_comment_edit"
    | "video_comment_restore"
    | "wall_post_new"
    | "wall_reply_new"
    | "wall_reply_edit"
    | "wall_reply_delete"
    | "wall_reply_restore"
    | "wall_repost"
    | "wall_schedule_post_new"
    | "wall_schedule_post_delete"

/**
 *
 */
export interface VKCallbackUserBlock {
    admin_id: number
    user_id: number
    unblock_date: number
    reason: number
    comment?: string
}

/**
 *
 */
export interface VKCallbackUserUnblock {
    admin_id: number
    user_id: number
    by_end_date: number
}

/**
 *
 */
export interface VKCallbackVideoComment {
    /**
     * Comment ID
     */
    id: number
    /**
     * Author ID
     */
    from_id: number
    can_edit?: VKBaseBoolInt
    post_id?: number
    owner_id?: number
    parents_stack?: number[]
    photo_id?: number
    video_id?: number
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number
    /**
     * Comment text
     */
    text: string
    attachments?: VKWallWallpostAttachment[]
    donut?: VKWallWallCommentDonut
    likes?: VKBaseLikesInfo
    /**
     * Real position of the comment
     */
    real_offset?: number
    /**
     * Replied user ID
     */
    reply_to_user?: number
    /**
     * Replied comment ID
     */
    reply_to_comment?: number
    thread?: VKCommentThread
    /**
     * Whether post is by author of the post or not
     */
    is_from_post_author?: boolean
    deleted?: boolean
    /**
     * Photo ID
     */
    pid?: number
    video_owner_id?: number
}

/**
 *
 */
export interface VKCallbackVideoCommentDelete {
    id: number
    owner_id: number
    deleter_id: number
    video_id: number
}

/**
 *
 */
export type VKCallbackVideoNew = VKAudioAudio

/**
 *
 */
export interface VKCallbackVkpayTransaction {
    amount: number
    from_id: number
    description: string
    date: number
    payload?: string
}

/**
 *
 */
export interface VKCallbackWallCommentDelete {
    owner_id: number
    id: number
    user_id: number
    post_id: number
}

/**
 *
 */
export type VKCallbackWallPostNew = VKWallWallpost

/**
 *
 */
export type VKCallbackWallReplyEdit = VKWallWallComment

/**
 *
 */
export type VKCallbackWallReplyNew = VKWallWallComment

/**
 *
 */
export type VKCallbackWallReplyRestore = VKWallWallComment

/**
 *
 */
export type VKCallbackWallRepost = VKWallWallpost

/**
 *
 */
export interface VKCallsCall {
    /**
     * Call duration
     */
    duration?: number
    /**
     * Caller initiator
     */
    initiator_id: number
    /**
     * Caller receiver
     */
    receiver_id: number
    state: VKCallsEndState
    /**
     * Timestamp for call
     */
    time: number
    /**
     * Was this call initiated as video call
     */
    video?: boolean
    participants?: VKCallsParticipants
}

/**
 * State in which call ended up
 */
export type VKCallsEndState =
    | "canceled_by_initiator"
    | "canceled_by_receiver"
    | "reached"

/**
 *
 */
export interface VKCallsParticipants {
    list?: number[]
    /**
     * Participants count
     */
    count?: number
}

/**
 * These credentials may be used to join a call without knowing a VK Join Link
 */
export interface VKCallsShortCredentials {
    /**
     * Short numeric ID of a call
     */
    id: string
    /**
     * Password that can be used to join a call by short numeric ID
     */
    password: string
    /**
     * Link without a password
     */
    link_without_password: string
    /**
     * Link with a password
     */
    link_with_password: string
}

/**
 *
 */
export interface VKCommentThread {
    /**
     * Comments number
     */
    count: number
    items?: VKWallWallComment[]
    /**
     * Information whether current user can comment the post
     */
    can_post?: boolean
    /**
     * Information whether recommended to display reply button
     */
    show_reply_button?: boolean
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    /**
     * Information whether author commented the thread
     */
    author_replied?: boolean
}

/**
 *
 */
export interface VKDatabaseCitiesFields {}

/**
 *
 */
export interface VKDatabaseCity {
    /**
     * Object ID
     */
    id: number
    /**
     * Object title
     */
    title: string
    /**
     * Area title
     */
    area?: string
    /**
     * Region title
     */
    region?: string
    /**
     * Information whether the city is included in important cities list
     */
    important?: VKBaseBoolInt
}

/**
 *
 */
export type VKDatabaseCityById = VKBaseObject

/**
 *
 */
export interface VKDatabaseFaculty {
    /**
     * Faculty ID
     */
    id?: number
    /**
     * Faculty title
     */
    title?: string
}

/**
 *
 */
export interface VKDatabaseLanguageFull {
    /**
     * Language ID
     */
    id: number
    /**
     * Language native name
     */
    native_name: string
}

/**
 *
 */
export interface VKDatabaseRegion {
    /**
     * Region ID
     */
    id?: number
    /**
     * Region title
     */
    title?: string
}

/**
 *
 */
export interface VKDatabaseSchool {
    /**
     * School ID
     */
    id?: number
    /**
     * School title
     */
    title?: string
}

/**
 *
 */
export type VKDatabaseSchoolClass = VKBaseObject

/**
 *
 */
export interface VKDatabaseStation {
    /**
     * City ID
     */
    city_id?: number
    /**
     * Hex color code without #
     */
    color?: string
    /**
     * Station ID
     */
    id: number
    /**
     * Station name
     */
    name: string
}

/**
 *
 */
export interface VKDatabaseUniversity {
    /**
     * University ID
     */
    id?: number
    /**
     * University title
     */
    title?: string
}

/**
 *
 */
export interface VKDocsDoc {
    /**
     * Document ID
     */
    id: number
    /**
     * Document owner ID
     */
    owner_id: number
    /**
     * Document title
     */
    title: string
    /**
     * File size in bites
     */
    size: number
    /**
     * File extension
     */
    ext: string
    /**
     * File URL
     */
    url?: string
    /**
     * Date when file has been uploaded in Unixtime
     */
    date: number
    /**
     * Document type
     */
    type: number
    preview?: VKDocsDocPreview
    is_licensed?: VKBaseBoolInt
    /**
     * Access key for the document
     */
    access_key?: string
    /**
     * Document tags
     */
    tags?: string[]
}

/**
 * Doc attachment type
 */
export type VKDocsDocAttachmentType = "doc" | "graffiti" | "audio_message"

/**
 *
 */
export interface VKDocsDocPreview {
    audio_msg?: VKDocsDocPreviewAudioMsg
    graffiti?: VKDocsDocPreviewGraffiti
    photo?: VKDocsDocPreviewPhoto
    video?: VKDocsDocPreviewVideo
}

/**
 *
 */
export interface VKDocsDocPreviewAudioMsg {
    /**
     * Audio message duration in seconds
     */
    duration: number
    /**
     * MP3 file URL
     */
    link_mp3: string
    /**
     * OGG file URL
     */
    link_ogg: string
    waveform: number[]
}

/**
 *
 */
export interface VKDocsDocPreviewGraffiti {
    /**
     * Graffiti file URL
     */
    src: string
    /**
     * Graffiti width
     */
    width: number
    /**
     * Graffiti height
     */
    height: number
}

/**
 *
 */
export interface VKDocsDocPreviewPhoto {
    sizes?: VKDocsDocPreviewPhotoSizes[]
}

/**
 *
 */
export interface VKDocsDocPreviewPhotoSizes {
    /**
     * URL of the image
     */
    src: string
    /**
     * Width in px
     */
    width: number
    /**
     * Height in px
     */
    height: number
    type: VKPhotosPhotoSizesType
}

/**
 *
 */
export interface VKDocsDocPreviewVideo {
    /**
     * Video URL
     */
    src: string
    /**
     * Video's width in pixels
     */
    width: number
    /**
     * Video's height in pixels
     */
    height: number
    /**
     * Video file size in bites
     */
    file_size: number
}

/**
 *
 */
export interface VKDocsDocTypes {
    /**
     * Doc type ID
     */
    id: number
    /**
     * Doc type title
     */
    name: string
    /**
     * Number of docs
     */
    count: number
}

export type VKDonutDonatorSubscriptionInfoStatus = "active" | "expiring"

/**
 * Info about user VK Donut subscription
 */
export interface VKDonutDonatorSubscriptionInfo {
    owner_id: number
    next_payment_date: number
    amount: number
    status: VKDonutDonatorSubscriptionInfoStatus
}

/**
 *
 */
export interface VKEventsEventAttach {
    /**
     * address of event
     */
    address?: string
    /**
     * text of attach
     */
    button_text: string
    /**
     * array of friends ids
     */
    friends: number[]
    /**
     * event ID
     */
    id: number
    /**
     * is favorite
     */
    is_favorite: boolean
    /**
     * Current user's member status
     */
    member_status?: VKGroupsGroupFullMemberStatus
    /**
     * text of attach
     */
    text: string
    /**
     * event start time
     */
    time?: number
}

/**
 *
 */
export interface VKFaveBookmark {
    /**
     * Timestamp, when this item was bookmarked
     */
    added_date: number
    link?: VKBaseLink
    post?: VKWallWallpostFull
    product?: VKMarketMarketItemFull
    /**
     * Has user seen this item
     */
    seen: boolean
    tags: VKFaveTag[]
    /**
     * Item type
     */
    type: VKFaveBookmarkType
    video?: VKVideoVideoFull
}

/**
 *
 */
export type VKFaveBookmarkType =
    | "post"
    | "video"
    | "product"
    | "article"
    | "link"
    | "clip"
    | "game"
    | "mini_app"

/**
 *
 */
export interface VKFavePage {
    /**
     * Some info about user or group
     */
    description: string
    group?: VKGroupsGroupFull
    tags: VKFaveTag[]
    /**
     * Item type
     */
    type: VKFavePageType
    /**
     * Timestamp, when this page was bookmarked
     */
    updated_date?: number
    user?: VKUsersUserFull
}

/**
 *
 */
export type VKFavePageType = "user" | "group" | "hints"

/**
 *
 */
export interface VKFaveTag {
    /**
     * Tag id
     */
    id?: number
    /**
     * Tag name
     */
    name?: string
}

/**
 *
 */
export interface VKFriendsFriendExtendedStatus {
    friend_status: VKFriendsFriendStatusStatus
    /**
     * MD5 hash for the result validation
     */
    sign?: string
    /**
     * User ID
     */
    user_id: number
    /**
     * Is friend request from other user unread
     */
    is_request_unread?: boolean
}

/**
 *
 */
export interface VKFriendsFriendStatus {
    friend_status: VKFriendsFriendStatusStatus
    /**
     * MD5 hash for the result validation
     */
    sign?: string
    /**
     * User ID
     */
    user_id: number
}

/**
 * Friend status with the user
 *
 * - `0` — not a friend
 * - `1` — outcoming request
 * - `2` — incoming request
 * - `3` — is friend
 */
export type VKFriendsFriendStatusStatus = 0 | 1 | 2 | 3

/**
 *
 */
export interface VKFriendsFriendsList {
    /**
     * List ID
     */
    id: number
    /**
     * List title
     */
    name: string
}

/**
 *
 */
export interface VKFriendsMutualFriend {
    /**
     * Total mutual friends number
     */
    common_count?: number
    common_friends?: number[]
    /**
     * User ID
     */
    id?: number
}

/**
 *
 */
export interface VKFriendsOnlineUsers {
    online: number[]
    /**
     * Total online friends number
     */
    total_count?: number
}

/**
 *
 */
export interface VKFriendsOnlineUsersWithMobile {
    online: number[]
    online_mobile: number[]
    /**
     * Total online friends number
     */
    total_count?: number
}

/**
 *
 */
export interface VKFriendsRequestsMutual {
    /**
     * Total mutual friends number
     */
    count?: number
    users?: number[]
}

export type VKFriendsRequestsXtrMessageWallDefault = "owner" | "all"

/**
 *
 */
export interface VKFriendsRequestsXtrMessage {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKUsersUserType
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKFriendsRequestsXtrMessageWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
    /**
     * User ID
     */
    user_id: number
    /**
     * ID of the user by whom friend has been suggested
     */
    from?: string
    track_code?: string
    /**
     * Message sent with a request
     */
    message?: string
    /**
     * Request timestamp
     */
    timestamp?: number
}

export type VKFriendsRequestsXtrMutualWallDefault = "owner" | "all"

/**
 *
 */
export interface VKFriendsRequestsXtrMutual {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKUsersUserType
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKFriendsRequestsXtrMutualWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
    /**
     * User ID
     */
    user_id: number
    /**
     * ID of the user by whom friend has been suggested
     */
    from?: string
    track_code?: string
    /**
     * Message sent with a request
     */
    message?: string
    /**
     * Request timestamp
     */
    timestamp?: number
}

/**
 *
 */
export interface VKGiftsGift {
    /**
     * Date when gist has been sent in Unixtime
     */
    date?: number
    /**
     * Gift sender ID
     */
    from_id?: number
    gift?: VKGiftsLayout
    /**
     * Hash
     */
    gift_hash?: string
    /**
     * Gift ID
     */
    id?: number
    /**
     * Comment text
     */
    message?: string
    privacy?: VKGiftsGiftPrivacy
}

/**
 * Gift privacy
 *
 * - `0` — name and message for all
 * - `1` — name for all
 * - `2` — name and message for recipient only
 */
export type VKGiftsGiftPrivacy = 0 | 1 | 2

/**
 *
 */
export interface VKGiftsLayout {
    /**
     * Gift ID
     */
    id: number
    /**
     * URL of the preview image with 512 px in width
     */
    thumb_512?: string
    /**
     * URL of the preview image with 256 px in width
     */
    thumb_256?: string
    /**
     * URL of the preview image with 48 px in width
     */
    thumb_48?: string
    /**
     * URL of the preview image with 96 px in width
     */
    thumb_96?: string
    /**
     * ID of the sticker pack, if the gift is representing one
     */
    stickers_product_id?: number
    /**
     * Information whether gift represents a stickers style
     */
    is_stickers_style?: boolean
    /**
     * ID of the build of constructor gift
     */
    build_id?: string
    /**
     * Keywords used for search
     */
    keywords?: string
}

/**
 *
 */
export interface VKGroupsAddress {
    /**
     * Additional address to the place (6 floor, left door)
     */
    additional_address?: string
    /**
     * String address to the place (Nevsky, 28)
     */
    address?: string
    /**
     * City id of address
     */
    city_id?: number
    /**
     * City for address
     */
    city?: VKDatabaseCityById
    /**
     * Metro for address
     */
    metro_station?: VKDatabaseStation
    /**
     * Country for address
     */
    country?: VKBaseCountry
    /**
     * Distance from the point
     */
    distance?: number
    /**
     * Address id
     */
    id: number
    /**
     * Address latitude
     */
    latitude?: number
    /**
     * Address longitude
     */
    longitude?: number
    /**
     * Metro id of address
     */
    metro_station_id?: number
    /**
     * Address phone
     */
    phone?: string
    /**
     * Time offset int minutes from utc time
     */
    time_offset?: number
    /**
     * Week timetable for the address
     */
    timetable?: VKGroupsAddressTimetable
    /**
     * Title of the place (Zinger, etc)
     */
    title?: string
    /**
     * Status of information about timetable
     */
    work_info_status?: VKGroupsAddressWorkInfoStatus
    place_id?: number
}

/**
 * Timetable for a week
 */
export interface VKGroupsAddressTimetable {
    /**
     * Timetable for friday
     */
    fri?: VKGroupsAddressTimetableDay
    /**
     * Timetable for monday
     */
    mon?: VKGroupsAddressTimetableDay
    /**
     * Timetable for saturday
     */
    sat?: VKGroupsAddressTimetableDay
    /**
     * Timetable for sunday
     */
    sun?: VKGroupsAddressTimetableDay
    /**
     * Timetable for thursday
     */
    thu?: VKGroupsAddressTimetableDay
    /**
     * Timetable for tuesday
     */
    tue?: VKGroupsAddressTimetableDay
    /**
     * Timetable for wednesday
     */
    wed?: VKGroupsAddressTimetableDay
}

/**
 * Timetable for one day
 */
export interface VKGroupsAddressTimetableDay {
    /**
     * Close time of the break in minutes
     */
    break_close_time?: number
    /**
     * Start time of the break in minutes
     */
    break_open_time?: number
    /**
     * Close time in minutes
     */
    close_time: number
    /**
     * Open time in minutes
     */
    open_time: number
}

/**
 * Status of information about timetable
 */
export type VKGroupsAddressWorkInfoStatus =
    | "no_information"
    | "temporarily_closed"
    | "always_opened"
    | "timetable"
    | "forever_closed"

/**
 *
 */
export interface VKGroupsAddressesInfo {
    /**
     * Information whether addresses is enabled
     */
    is_enabled: boolean
    /**
     * Main address id for group
     */
    main_address_id?: number
    /**
     * Main address
     */
    main_address?: VKGroupsAddress
    /**
     * Count of addresses
     */
    count?: number
}

/**
 *
 */
export interface VKGroupsBanInfo {
    /**
     * Administrator ID
     */
    admin_id?: number
    /**
     * Comment for a ban
     */
    comment?: string
    /**
     * Show comment for user
     */
    comment_visible?: boolean
    is_closed?: boolean
    /**
     * Date when user has been added to blacklist in Unixtime
     */
    date?: number
    /**
     * Date when user will be removed from blacklist in Unixtime
     */
    end_date?: number
    reason?: VKGroupsBanInfoReason
}

/**
 * Ban reason
 *
 * - `0` — other
 * - `1` — spam
 * - `2` — verbal abuse
 * - `3` — strong language
 * - `4` — flood
 */
export type VKGroupsBanInfoReason = 0 | 1 | 2 | 3 | 4

export type VKGroupsCallbackServerStatus =
    | "unconfigured"
    | "failed"
    | "wait"
    | "ok"

/**
 *
 */
export interface VKGroupsCallbackServer {
    id: number
    title: string
    creator_id: number
    url: string
    secret_key: string
    status: VKGroupsCallbackServerStatus
}

/**
 *
 */
export interface VKGroupsCallbackSettings {
    /**
     * API version used for the events
     */
    api_version?: string
    events?: VKGroupsLongPollEvents
}

/**
 *
 */
export interface VKGroupsContactsItem {
    /**
     * User ID
     */
    user_id?: number
    /**
     * Contact description
     */
    desc?: string
    /**
     * Contact phone
     */
    phone?: string
    /**
     * Contact email
     */
    email?: string
}

/**
 *
 */
export interface VKGroupsCountersGroup {
    /**
     * Addresses number
     */
    addresses?: number
    /**
     * Photo albums number
     */
    albums?: number
    /**
     * Audios number
     */
    audios?: number
    /**
     * Audio playlists number
     */
    audio_playlists?: number
    /**
     * Docs number
     */
    docs?: number
    /**
     * Market items number
     */
    market?: number
    /**
     * Photos number
     */
    photos?: number
    /**
     * Topics number
     */
    topics?: number
    /**
     * Videos number
     */
    videos?: number
    /**
     * Playlists number
     */
    video_playlists?: number
    /**
     * Market services number
     */
    market_services?: number
    /**
     * Podcasts number
     */
    podcasts?: number
    /**
     * Articles number
     */
    articles?: number
    /**
     * Narratives number
     */
    narratives?: number
    /**
     * Clips number
     */
    clips?: number
    /**
     * Clips followers number
     */
    clips_followers?: number
    /**
     * Videos followers number
     */
    videos_followers?: number
    /**
     * Clips views number
     */
    clips_views?: number
    /**
     * Clips likes number
     */
    clips_likes?: number
}

/**
 *
 */
export type VKGroupsFields =
    | "id"
    | "name"
    | "screen_name"
    | "is_closed"
    | "type"
    | "is_admin"
    | "admin_level"
    | "is_member"
    | "is_advertiser"
    | "start_date"
    | "finish_date"
    | "deactivated"
    | "photo_50"
    | "photo_100"
    | "photo_200"
    | "photo_200_orig"
    | "photo_400"
    | "photo_400_orig"
    | "photo_max"
    | "photo_max_orig"
    | "est_date"
    | "public_date_label"
    | "photo_max_size"
    | "is_video_live_notifications_blocked"
    | "video_live"
    | "market"
    | "member_status"
    | "is_adult"
    | "is_hidden_from_feed"
    | "is_favorite"
    | "is_subscribed"
    | "city"
    | "verified"
    | "description"
    | "wiki_page"
    | "members_count"
    | "members_count_text"
    | "requests_count"
    | "video_live_level"
    | "video_live_count"
    | "clips_count"
    | "textlives_count"
    | "counters"
    | "cover"
    | "can_post"
    | "can_suggest"
    | "can_upload_story"
    | "can_upload_doc"
    | "can_upload_video"
    | "can_upload_clip"
    | "can_see_all_posts"
    | "can_create_topic"
    | "activity"
    | "fixed_post"
    | "has_photo"
    | "crop_photo"
    | "status"
    | "status_audio"
    | "main_album_id"
    | "links"
    | "contacts"
    | "wall"
    | "site"
    | "main_section"
    | "secondary_section"
    | "trending"
    | "can_message"
    | "is_messages_blocked"
    | "can_send_notify"
    | "online_status"
    | "invited_by"
    | "age_limits"
    | "ban_info"
    | "has_market_app"
    | "using_vkpay_market_app"
    | "has_group_channel"
    | "addresses"
    | "messages"
    | "business_rating"
    | "is_subscribed_podcasts"
    | "can_subscribe_podcasts"
    | "can_subscribe_posts"
    | "live_covers"
    | "stories_archive_count"
    | "has_unseen_stories"
    | "category"
    | "category0"
    | "category1"
    | "rating"
    | "is_market_market_link_attachment_enabled"
    | "is_market_message_to_bc_attachment_enabled"
    | "unread_count"
    | "videos_count"

/**
 *
 */
export type VKGroupsFilter =
    | "admin"
    | "editor"
    | "moder"
    | "advertiser"
    | "groups"
    | "publics"
    | "events"
    | "has_addresses"

/**
 *
 */
export interface VKGroupsGroup {
    /**
     * Community ID
     */
    id: number
    /**
     * Community name
     */
    name?: string
    /**
     * Domain of the community page
     */
    screen_name?: string
    is_closed?: VKGroupsGroupIsClosed
    type?: VKGroupsGroupType
    /**
     * Information whether current user is administrator
     */
    is_admin?: VKBaseBoolInt
    admin_level?: VKGroupsGroupAdminLevel
    /**
     * Information whether current user is member
     */
    is_member?: VKBaseBoolInt
    /**
     * Information whether current user is advertiser
     */
    is_advertiser?: VKBaseBoolInt
    /**
     * Start date in Unixtime format
     */
    start_date?: number
    /**
     * Finish date in Unixtime format
     */
    finish_date?: number
    /**
     * Information whether community is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether community is banned
     */
    deactivated?: string
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100?: string
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the community with 200 pixels in width original
     */
    photo_200_orig?: string
    /**
     * URL of square photo of the community with 400 pixels in width
     */
    photo_400?: string
    /**
     * URL of square photo of the community with 400 pixels in width original
     */
    photo_400_orig?: string
    /**
     * URL of square photo of the community with max pixels in width
     */
    photo_max?: string
    /**
     * URL of square photo of the community with max pixels in width original
     */
    photo_max_orig?: string
    /**
     * Established date
     */
    est_date?: string
    /**
     * Public date label
     */
    public_date_label?: string
    photo_max_size?: VKGroupsPhotoSize
    is_video_live_notifications_blocked?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
}

/**
 *
 *
 * - `0` — open
 * - `1` — closed
 * - `2` — private
 */
export type VKGroupsGroupAccess = 0 | 1 | 2

/**
 * Level of current user's credentials as manager
 *
 * - `1` — moderator
 * - `2` — editor
 * - `3` — administrator
 */
export type VKGroupsGroupAdminLevel = 1 | 2 | 3

/**
 *
 *
 * - `1` — unlimited
 * - `2` — 16 plus
 * - `3` — 18 plus
 */
export type VKGroupsGroupAgeLimits = 1 | 2 | 3

/**
 *
 */
export interface VKGroupsGroupAttach {
    /**
     * group ID
     */
    id: number
    /**
     * text of attach
     */
    text: string
    /**
     * activity or category of group
     */
    status: string
    /**
     * size of group
     */
    size: number
    /**
     * is favorite
     */
    is_favorite: boolean
}

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupAudio = 0 | 1 | 2

/**
 *
 */
export interface VKGroupsGroupBanInfo {
    /**
     * Ban comment
     */
    comment?: string
    /**
     * End date of ban in Unixtime
     */
    end_date?: number
    reason?: VKGroupsBanInfoReason
}

/**
 *
 */
export interface VKGroupsGroupCategory {
    /**
     * Category ID
     */
    id: number
    /**
     * Category name
     */
    name: string
    subcategories?: VKGroupsGroupSubcategory[]
}

/**
 *
 */
export interface VKGroupsGroupCategoryFull {
    /**
     * Category ID
     */
    id: number
    /**
     * Category name
     */
    name: string
    /**
     * Pages number
     */
    page_count: number
    page_previews: VKGroupsGroup[]
    subcategories?: VKGroupsGroupCategory[]
}

/**
 *
 */
export interface VKGroupsGroupCategoryType {
    id: number
    name: string
}

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupDocs = 0 | 1 | 2

/**
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 * - `3` — restricted
 */
export type VKGroupsGroupFullWall = 0 | 1 | 2 | 3
export type VKGroupsGroupFullVideoNotificationsStatus =
    | "none"
    | "all"
    | "preferred"

/**
 *
 */
export interface VKGroupsGroupFull {
    /**
     * Community ID
     */
    id: number
    /**
     * Community name
     */
    name?: string
    /**
     * Domain of the community page
     */
    screen_name?: string
    is_closed?: VKGroupsGroupIsClosed
    type?: VKGroupsGroupType
    /**
     * Information whether current user is administrator
     */
    is_admin?: VKBaseBoolInt
    admin_level?: VKGroupsGroupAdminLevel
    /**
     * Information whether current user is member
     */
    is_member?: VKBaseBoolInt
    /**
     * Information whether current user is advertiser
     */
    is_advertiser?: VKBaseBoolInt
    /**
     * Start date in Unixtime format
     */
    start_date?: number
    /**
     * Finish date in Unixtime format
     */
    finish_date?: number
    /**
     * Information whether community is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether community is banned
     */
    deactivated?: string
    /**
     * URL of square photo of the community with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the community with 100 pixels in width
     */
    photo_100?: string
    /**
     * URL of square photo of the community with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the community with 200 pixels in width original
     */
    photo_200_orig?: string
    /**
     * URL of square photo of the community with 400 pixels in width
     */
    photo_400?: string
    /**
     * URL of square photo of the community with 400 pixels in width original
     */
    photo_400_orig?: string
    /**
     * URL of square photo of the community with max pixels in width
     */
    photo_max?: string
    /**
     * URL of square photo of the community with max pixels in width original
     */
    photo_max_orig?: string
    /**
     * Established date
     */
    est_date?: string
    /**
     * Public date label
     */
    public_date_label?: string
    photo_max_size?: VKGroupsPhotoSize
    is_video_live_notifications_blocked?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    market?: VKGroupsMarketInfo
    /**
     * Information whether community has installed market app
     */
    has_market_app?: boolean
    using_vkpay_market_app?: boolean
    /**
     * Current user's member status
     */
    member_status?: VKGroupsGroupFullMemberStatus
    /**
     * Information whether community is adult
     */
    is_adult?: VKBaseBoolInt
    /**
     * Information whether community is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Information whether community is in faves
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether current user is subscribed
     */
    is_subscribed?: VKBaseBoolInt
    city?: VKBaseObject
    /**
     * Community description
     */
    description?: string
    /**
     * Community's main wiki page title
     */
    wiki_page?: string
    /**
     * Community members number
     */
    members_count?: number
    /**
     * Info about number of users in group
     */
    members_count_text?: string
    /**
     * The number of incoming requests to the community
     */
    requests_count?: number
    /**
     * Community level live streams achievements
     */
    video_live_level?: number
    /**
     * Number of community's live streams
     */
    video_live_count?: number
    /**
     * Number of community's clips
     */
    clips_count?: number
    counters?: VKGroupsCountersGroup
    /**
     * Textlives number
     */
    textlives_count?: number
    cover?: VKBaseOwnerCover
    video_cover?: VKBaseOwnerCover
    /**
     * Information whether current user can post on community's wall
     */
    can_post?: VKBaseBoolInt
    can_suggest?: VKBaseBoolInt
    /**
     * Information whether current user can upload story
     */
    can_upload_story?: VKBaseBoolInt
    /**
     * Information whether current user can call to community
     */
    can_call_to_community?: boolean
    /**
     * Information whether current user can upload doc
     */
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether current user can upload video
     */
    can_upload_video?: VKBaseBoolInt
    /**
     * Information whether current user can upload clip
     */
    can_upload_clip?: VKBaseBoolInt
    /**
     * Information whether current user can see all posts on community's wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can create topic
     */
    can_create_topic?: VKBaseBoolInt
    /**
     * Type of group, start date of event or category of public page
     */
    activity?: string
    /**
     * Fixed post ID
     */
    fixed_post?: number
    /**
     * Information whether community has photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Данные о точках, по которым вырезаны профильная и миниатюрная фотографии сообщества
     */
    crop_photo?: VKBaseCropPhoto
    /**
     * Community status
     */
    status?: string
    status_audio?: VKAudioAudio
    /**
     * Community's main photo album ID
     */
    main_album_id?: number
    links?: VKGroupsLinksItem[]
    contacts?: VKGroupsContactsItem[]
    /**
     * Information about wall status in community
     */
    wall?: VKGroupsGroupFullWall
    /**
     * Community's website
     */
    site?: string
    main_section?: VKGroupsGroupFullSection
    secondary_section?: VKGroupsGroupFullSection
    /**
     * Information whether the community has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    /**
     * Information whether current user can send a message to community
     */
    can_message?: VKBaseBoolInt
    /**
     * Information whether community can send a message to current user
     */
    is_messages_blocked?: VKBaseBoolInt
    /**
     * Information whether community can send notifications by phone number to current user
     */
    can_send_notify?: VKBaseBoolInt
    /**
     * Status of replies in community messages
     */
    online_status?: VKGroupsOnlineStatus
    /**
     * Inviter ID
     */
    invited_by?: number
    /**
     * Information whether age limit
     */
    age_limits?: VKGroupsGroupFullAgeLimits
    /**
     * User ban info
     */
    ban_info?: VKGroupsGroupBanInfo
    has_group_channel?: boolean
    /**
     * Info about addresses in groups
     */
    addresses?: VKGroupsAddressesInfo
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    /**
     * Live covers state
     */
    live_covers?: VKGroupsLiveCovers
    stories_archive_count?: number
    has_unseen_stories?: boolean
    /**
     * Information about the status of video notifications for the current user.
     */
    video_notifications_status?: VKGroupsGroupFullVideoNotificationsStatus
    /**
     * Community videos number
     */
    videos_count?: number
}

/**
 *
 *
 * - `1` — no
 * - `2` — over 16
 * - `3` — over 18
 */
export type VKGroupsGroupFullAgeLimits = 1 | 2 | 3

/**
 *
 *
 * - `0` — not a member
 * - `1` — member
 * - `2` — not sure
 * - `3` — declined
 * - `4` — has sent a request
 * - `5` — invited
 */
export type VKGroupsGroupFullMemberStatus = 0 | 1 | 2 | 3 | 4 | 5

/**
 * Main section of community
 *
 * - `0` — none
 * - `1` — photos
 * - `2` — topics
 * - `3` — audios
 * - `4` — videos
 * - `5` — market
 * - `6` — stories
 * - `7` — apps
 * - `8` — followers
 * - `9` — links
 * - `10` — events
 * - `11` — places
 * - `12` — contacts
 * - `13` — app_btns
 * - `14` — docs
 * - `15` — event_counters
 * - `16` — group_messages
 * - `24` — albums
 * - `26` — categories
 * - `27` — admin_help
 * - `31` — app_widget
 * - `32` — public_help
 * - `33` — hs_donation_app
 * - `34` — hs_market_app
 * - `35` — addresses
 * - `36` — artist_page
 * - `37` — podcast
 * - `39` — articles
 * - `40` — admin_tips
 * - `41` — menu
 * - `42` — fixed_post
 * - `43` — chats
 * - `44` — evergreen_notice
 * - `45` — musicians
 * - `46` — narratives
 * - `47` — donut_donate
 * - `48` — clips
 * - `49` — market_cart
 * - `50` — curators
 * - `51` — market_services
 * - `53` — classifieds
 * - `54` — textlives
 * - `55` — donut_for_dons
 * - `57` — badges
 * - `58` — chats_creation
 * - `59` — stream_creation
 * - `60` — rating
 * - `61` — service_rating
 * - `62` — recommended_tips_widget
 */
export type VKGroupsGroupFullSection =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 24
    | 26
    | 27
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 53
    | 54
    | 55
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62

/**
 * Information whether community is closed
 *
 * - `0` — open
 * - `1` — closed
 * - `2` — private
 */
export type VKGroupsGroupIsClosed = 0 | 1 | 2

/**
 *
 *
 * - `643` — russian rubles
 * - `980` — ukrainian hryvnia
 * - `398` — kazakh tenge
 * - `978` — euro
 * - `840` — us dollars
 */
export type VKGroupsGroupMarketCurrency = 643 | 980 | 398 | 978 | 840

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupPhotos = 0 | 1 | 2

/**
 *
 */
export interface VKGroupsGroupPublicCategoryList {
    id?: number
    name?: string
    subcategories?: VKGroupsGroupCategoryType[]
}

/**
 *
 */
export type VKGroupsGroupRole =
    | "moderator"
    | "editor"
    | "administrator"
    | "advertiser"

/**
 *
 */
export interface VKGroupsGroupSubcategory {
    /**
     * Object ID
     */
    id: number
    /**
     * Object name
     */
    name: string
    genders?: VKBaseObjectWithName[]
}

/**
 *
 *
 * - `1` — auto
 * - `2` — activity holidays
 * - `3` — business
 * - `4` — pets
 * - `5` — health
 * - `6` — dating and communication
 * - `7` — games
 * - `8` — it
 * - `9` — cinema
 * - `10` — beauty and fashion
 * - `11` — cooking
 * - `12` — art and culture
 * - `13` — literature
 * - `14` — mobile services and internet
 * - `15` — music
 * - `16` — science and technology
 * - `17` — real estate
 * - `18` — news and media
 * - `19` — security
 * - `20` — education
 * - `21` — home and renovations
 * - `22` — politics
 * - `23` — food
 * - `24` — industry
 * - `25` — travel
 * - `26` — work
 * - `27` — entertainment
 * - `28` — religion
 * - `29` — family
 * - `30` — sports
 * - `31` — insurance
 * - `32` — television
 * - `33` — goods and services
 * - `34` — hobbies
 * - `35` — finance
 * - `36` — photo
 * - `37` — esoterics
 * - `38` — electronics and appliances
 * - `39` — erotic
 * - `40` — humor
 * - `41` — society_humanities
 * - `42` — design and graphics
 */
export type VKGroupsGroupSubject =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42

/**
 *
 *
 * - `0` — none
 * - `1` — all
 * - `2` — subscribers
 */
export type VKGroupsGroupSuggestedPrivacy = 0 | 1 | 2

export type VKGroupsGroupTagColor =
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
 *
 */
export interface VKGroupsGroupTag {
    id: number
    name: string
    color: VKGroupsGroupTagColor
    uses?: number
}

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupTopics = 0 | 1 | 2

/**
 * Community type
 */
export type VKGroupsGroupType = "group" | "page" | "event"

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupVideo = 0 | 1 | 2

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 * - `3` — closed
 */
export type VKGroupsGroupWall = 0 | 1 | 2 | 3

/**
 *
 *
 * - `0` — disabled
 * - `1` — open
 * - `2` — limited
 */
export type VKGroupsGroupWiki = 0 | 1 | 2

/**
 *
 */
export interface VKGroupsGroupsArray {
    /**
     * Communities number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface VKGroupsLinksItem {
    /**
     * Link title
     */
    name?: string
    /**
     * Link description
     */
    desc?: string
    /**
     * Information whether the link title can be edited
     */
    edit_title?: VKBaseBoolInt
    /**
     * Link ID
     */
    id?: number
    /**
     * URL of square image of the link with 100 pixels in width
     */
    photo_100?: string
    /**
     * URL of square image of the link with 50 pixels in width
     */
    photo_50?: string
    /**
     * Link URL
     */
    url?: string
    /**
     * Information whether the image on processing
     */
    image_processing?: VKBaseBoolInt
}

/**
 *
 */
export interface VKGroupsLiveCovers {
    /**
     * Information whether live covers is enabled
     */
    is_enabled: boolean
    /**
     * Information whether live covers photo scaling is enabled
     */
    is_scalable?: boolean
    story_ids?: string[]
}

/**
 *
 */
export interface VKGroupsLongPollEvents {
    audio_new: VKBaseBoolInt
    board_post_delete: VKBaseBoolInt
    board_post_edit: VKBaseBoolInt
    board_post_new: VKBaseBoolInt
    board_post_restore: VKBaseBoolInt
    group_change_photo: VKBaseBoolInt
    group_change_settings: VKBaseBoolInt
    group_join: VKBaseBoolInt
    group_leave: VKBaseBoolInt
    group_officers_edit: VKBaseBoolInt
    lead_forms_new?: VKBaseBoolInt
    market_comment_delete: VKBaseBoolInt
    market_comment_edit: VKBaseBoolInt
    market_comment_new: VKBaseBoolInt
    market_comment_restore: VKBaseBoolInt
    market_order_new?: VKBaseBoolInt
    market_order_edit?: VKBaseBoolInt
    message_allow: VKBaseBoolInt
    message_deny: VKBaseBoolInt
    message_new: VKBaseBoolInt
    message_read: VKBaseBoolInt
    message_reply: VKBaseBoolInt
    message_typing_state: VKBaseBoolInt
    message_edit: VKBaseBoolInt
    photo_comment_delete: VKBaseBoolInt
    photo_comment_edit: VKBaseBoolInt
    photo_comment_new: VKBaseBoolInt
    photo_comment_restore: VKBaseBoolInt
    photo_new: VKBaseBoolInt
    poll_vote_new: VKBaseBoolInt
    user_block: VKBaseBoolInt
    user_unblock: VKBaseBoolInt
    video_comment_delete: VKBaseBoolInt
    video_comment_edit: VKBaseBoolInt
    video_comment_new: VKBaseBoolInt
    video_comment_restore: VKBaseBoolInt
    video_new: VKBaseBoolInt
    message_reaction_event: VKBaseBoolInt
    wall_post_new: VKBaseBoolInt
    wall_reply_delete: VKBaseBoolInt
    wall_reply_edit: VKBaseBoolInt
    wall_reply_new: VKBaseBoolInt
    wall_reply_restore: VKBaseBoolInt
    wall_repost: VKBaseBoolInt
    wall_schedule_post_new: VKBaseBoolInt
    wall_schedule_post_delete: VKBaseBoolInt
    donut_subscription_create: VKBaseBoolInt
    donut_subscription_prolonged: VKBaseBoolInt
    donut_subscription_cancelled: VKBaseBoolInt
    donut_subscription_expired: VKBaseBoolInt
    donut_subscription_price_changed: VKBaseBoolInt
    donut_money_withdraw: VKBaseBoolInt
    donut_money_withdraw_error: VKBaseBoolInt
}

/**
 *
 */
export interface VKGroupsLongPollServer {
    /**
     * Long Poll key
     */
    key: string
    /**
     * Long Poll server address
     */
    server: string
    /**
     * Number of the last event
     */
    ts: string
}

/**
 *
 */
export interface VKGroupsLongPollSettings {
    /**
     * API version used for the events
     */
    api_version?: string
    events: VKGroupsLongPollEvents
    /**
     * Shows whether Long Poll is enabled
     */
    is_enabled: boolean
}

/**
 *
 */
export interface VKGroupsMarketInfo {
    /**
     * Market type
     */
    type?: string
    /**
     * Contact person ID
     */
    contact_id?: number
    currency?: VKMarketCurrency
    /**
     * Currency name
     */
    currency_text?: string
    /**
     * Information whether the market is enabled
     */
    enabled?: VKBaseBoolInt
    /**
     * Main market album ID
     */
    main_album_id?: number
    /**
     * Maximum price
     */
    price_max?: string
    /**
     * Minimum price
     */
    price_min?: string
    min_order_price?: VKMarketPrice
}

/**
 *
 */
export interface VKGroupsMarketProperties {
    market?: VKGroupsMarketInfo
    /**
     * Information whether community has installed market app
     */
    has_market_app?: boolean
    using_vkpay_market_app?: boolean
}

/**
 * Declares state if market is enabled in group.
 */
export type VKGroupsMarketState = "none" | "basic" | "advanced"

/**
 *
 */
export interface VKGroupsMemberRole {
    /**
     * User ID
     */
    id: number
    /**
     * Allow the manager to accept community calls.
     */
    is_call_operator?: boolean
    permissions?: VKGroupsMemberRolePermission[]
    role?: VKGroupsMemberRoleStatus
}

/**
 *
 */
export type VKGroupsMemberRolePermission = "ads"

/**
 * User's credentials as community admin
 */
export type VKGroupsMemberRoleStatus =
    | "moderator"
    | "editor"
    | "administrator"
    | "creator"
    | "advertiser"

/**
 *
 */
export interface VKGroupsMemberStatus {
    /**
     * Information whether user is a member of the group
     */
    member: VKBaseBoolInt
    /**
     * User ID
     */
    user_id: number
}

/**
 *
 */
export interface VKGroupsMemberStatusFull {
    /**
     * Information whether user can be invited
     */
    can_invite?: VKBaseBoolInt
    /**
     * Information whether user's invite to the group can be recalled
     */
    can_recall?: VKBaseBoolInt
    /**
     * Information whether user has been invited to the group
     */
    invitation?: VKBaseBoolInt
    /**
     * Information whether user is a member of the group
     */
    member: VKBaseBoolInt
    /**
     * Information whether user has send request to the group
     */
    request?: VKBaseBoolInt
    /**
     * User ID
     */
    user_id: number
}

/**
 * Online status of group
 */
export interface VKGroupsOnlineStatus {
    /**
     * Estimated time of answer (for status = answer_mark)
     */
    minutes?: number
    status: VKGroupsOnlineStatusType
}

/**
 * Type of online status of group
 */
export type VKGroupsOnlineStatusType = "none" | "online" | "answer_mark"

export type VKGroupsOwnerXtrBanInfoType = "group" | "profile"

/**
 *
 */
export interface VKGroupsOwnerXtrBanInfo {
    ban_info?: VKGroupsBanInfo
    /**
     * Information about group if type = group
     */
    group?: VKGroupsGroup
    /**
     * Information about group if type = profile
     */
    profile?: VKUsersUser
    type?: VKGroupsOwnerXtrBanInfoType
}

/**
 *
 */
export interface VKGroupsPhotoSize {
    /**
     * Image height
     */
    height: number
    /**
     * Image width
     */
    width: number
}

/**
 *
 */
export interface VKGroupsProfileItem {
    /**
     * User id
     */
    id: number
    /**
     * Url for user photo
     */
    photo_50: string
    /**
     * Url for user photo
     */
    photo_100: string
    /**
     * User first name
     */
    first_name: string
    /**
     * User last name
     */
    last_name?: string
    /**
     * Domain of the user page
     */
    screen_name?: string
}

/**
 * User's credentials as community admin
 */
export type VKGroupsRoleOptions =
    | "moderator"
    | "editor"
    | "administrator"
    | "creator"

/**
 *
 */
export type VKGroupsSectionsListItem = VKBaseObject

export type VKGroupsSettingsTwitterStatus = "loading" | "sync"

/**
 *
 */
export interface VKGroupsSettingsTwitter {
    status: VKGroupsSettingsTwitterStatus
    name?: string
}

/**
 *
 */
export interface VKGroupsSubjectItem {
    /**
     * Subject ID
     */
    id: number
    /**
     * Subject title
     */
    name: string
}

/**
 *
 */
export interface VKGroupsTokenPermissionSetting {
    name: string
    setting: number
}

export type VKGroupsUserXtrRoleWallDefault = "owner" | "all"

/**
 *
 */
export interface VKGroupsUserXtrRole {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKUsersUserType
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKGroupsUserXtrRoleWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
    permissions?: VKGroupsMemberRolePermission[]
    role?: VKGroupsRoleOptions
}

/**
 *
 */
export interface VKLeadFormsAnswer {
    key: string
    answer: VKLeadFormsAnswerOneOf
}

/**
 *
 */
export interface VKLeadFormsAnswerItem {
    key?: string
    value: string
}

/**
 *
 */
export type VKLeadFormsAnswerOneOf =
    | VKLeadFormsAnswerItem
    | VKLeadFormsAnswerItem[]

/**
 *
 */
export interface VKLeadFormsForm {
    form_id: number
    group_id: number
    photo?: string
    name?: string
    title?: string
    description?: string
    confirmation?: string
    site_link_url?: string
    policy_link_url?: string
    questions?: VKLeadFormsQuestionItem[]
    active?: VKBaseBoolInt
    leads_count: number
    pixel_code?: string
    once_per_user?: number
    notify_admins?: string
    notify_emails?: string
    url: string
}

/**
 *
 */
export interface VKLeadFormsLead {
    lead_id: number
    user_id: number
    date: number
    answers: VKLeadFormsAnswer[]
    ad_id?: number
}

export type VKLeadFormsQuestionItemType =
    | "input"
    | "textarea"
    | "radio"
    | "checkbox"
    | "select"

/**
 *
 */
export interface VKLeadFormsQuestionItem {
    key: string
    type: VKLeadFormsQuestionItemType
    label?: string
    /**
     * Опции выбора для типов radio, checkbox, select
     */
    options?: VKLeadFormsQuestionItemOption[]
}

/**
 *
 */
export interface VKLeadFormsQuestionItemOption {
    key?: string
    label: string
}

/**
 *
 */
export type VKLikesType =
    | "post"
    | "comment"
    | "photo"
    | "audio"
    | "video"
    | "note"
    | "market"
    | "photo_comment"
    | "video_comment"
    | "topic_comment"
    | "market_comment"
    | "sitepage"
    | "textpost"
    | "community_review"
    | "story"
    | "group_like"

/**
 *
 */
export interface VKLinkTargetObject {
    /**
     * Object type
     */
    type?: string
    /**
     * Owner ID
     */
    owner_id?: number
    /**
     * Item ID
     */
    item_id?: number
}

/**
 *
 */
export interface VKMarketCurrency {
    /**
     * Currency ID
     */
    id: number
    /**
     * Currency sign
     */
    name: string
    /**
     * Currency title
     */
    title: string
}

/**
 *
 */
export interface VKMarketGlobalSearchFilters {
    city?: VKBaseCity
    country?: VKBaseCountry
}

/**
 * Information about the group where the item is placed
 */
export interface VKMarketItemOwnerInfo {
    /**
     * Avatar of the group
     */
    avatar?: VKBaseImage[]
    /**
     * Name of the group
     */
    name?: string
    /**
     * Category of the item or description of the group
     */
    category?: string
    /**
     * Link to the section of the group
     */
    category_url?: string
    /**
     * Is the group is VK corporated market
     */
    is_corporated_market?: boolean
    /**
     * Type of the market group
     */
    market_type?: VKMarketOwnerType
}

/**
 * Information about promotion of the market item
 */
export interface VKMarketItemPromotionInfo {
    /**
     * Can the item be promoted?
     */
    is_available?: boolean
}

/**
 * - `0` — market
 * - `1` — market_services
 */
export type VKMarketMarketAlbumType = 0 | 1

/**
 *
 */
export interface VKMarketMarketAlbum {
    /**
     * Market album ID
     */
    id: number
    /**
     * Market album owner's ID
     */
    owner_id: number
    /**
     * Market album title
     */
    title: string
    /**
     * Items number
     */
    count: number
    /**
     * Is album main for owner
     */
    is_main?: boolean
    /**
     * Is album hidden
     */
    is_hidden?: boolean
    photo?: VKPhotosPhoto
    /**
     * Date when album has been updated last time in Unixtime
     */
    updated_time: number
    /**
     * Type of album
     */
    type?: VKMarketMarketAlbumType
    /**
     * Is album needed to be blurred (18+) or not
     */
    is_blur_enabled?: boolean
}

/**
 *
 */
export type VKMarketMarketCategory = VKMarketMarketCategoryNested

export type VKMarketMarketCategoryNestedInnerType =
    "market_market_category_nested"

/**
 *
 */
export interface VKMarketMarketCategoryNested {
    inner_type: VKMarketMarketCategoryNestedInnerType
    /**
     * Category ID
     */
    id: number
    /**
     * Category name
     */
    name: string
    /**
     * Is v2 category
     */
    is_v2?: boolean
    parent?: VKMarketMarketCategoryNested
}

/**
 *
 */
export interface VKMarketMarketCategoryTree {
    /**
     * Category ID
     */
    id: number
    /**
     * Category name
     */
    name: string
    /**
     * Icon name
     */
    icon_name?: string
    children?: VKMarketMarketCategoryTree[]
    view?: VKMarketMarketCategoryTreeView
    /**
     * SEO-friendly URL to page with category's items
     */
    url?: string
    /**
     * SEO-friendly variant of category's name
     */
    seo_name?: string
    /**
     * Title for category's page. Used for SEO
     */
    page_title?: string
    /**
     * Description for category's page. Used for SEO
     */
    page_description?: string
}

export type VKMarketMarketCategoryTreeViewType = "tab_root"

/**
 *
 */
export interface VKMarketMarketCategoryTreeView {
    type?: VKMarketMarketCategoryTreeViewType
    selected?: boolean
    root_path?: string[]
}

/**
 *
 */
export interface VKMarketMarketItem {
    /**
     * Access key for the market item
     */
    access_key?: string
    availability: VKMarketMarketItemAvailability
    /**
     * Title for button for url
     */
    button_title?: string
    category: VKMarketMarketCategory
    category_v2?: VKMarketMarketCategory
    /**
     * Date when the item has been created in Unixtime
     */
    date?: number
    /**
     * Item description
     */
    description: string
    external_id?: string
    /**
     * Item ID
     */
    id: number
    is_favorite?: boolean
    /**
     * Item owner's ID
     */
    owner_id: number
    is_owner?: boolean
    is_adult?: boolean
    price: VKMarketPrice
    /**
     * URL of the preview image
     */
    thumb_photo?: string
    /**
     * Item title
     */
    title: string
    /**
     * URL to item
     */
    url?: string
    variants_grouping_id?: number
    is_main_variant?: boolean
    sku?: string
    /**
     * Inventory balances
     */
    stock_amount?: number
    /**
     * Attach for post id
     */
    post_id?: number
    /**
     * Attach for post owner id
     */
    post_owner_id?: number
}

/**
 * Information whether the item is available
 *
 * - `0` — available
 * - `1` — removed
 * - `2` — unavailable
 */
export type VKMarketMarketItemAvailability = 0 | 1 | 2

/**
 *
 */
export interface VKMarketMarketItemBasic {
    /**
     * Item ID
     */
    id: number
    /**
     * Item owner's ID
     */
    owner_id: number
    /**
     * Item title
     */
    title: string
    price: VKMarketPrice
    /**
     * URL of the preview image
     */
    thumb_photo?: string
    is_favorite?: boolean
}

/**
 *
 */
export interface VKMarketMarketItemBasicWithGroup {
    /**
     * Item ID
     */
    id: number
    /**
     * Item owner's ID
     */
    owner_id: number
    /**
     * Item title
     */
    title: string
    price: VKMarketPrice
    /**
     * URL of the preview image
     */
    thumb_photo?: string
    is_favorite?: boolean
    is_group_verified?: boolean
    group_name?: string
    group_link?: string
    is_owner?: boolean
    is_adult?: boolean
}

/**
 *
 */
export interface VKMarketMarketItemFull {
    /**
     * Access key for the market item
     */
    access_key?: string
    availability: VKMarketMarketItemAvailability
    /**
     * Title for button for url
     */
    button_title?: string
    category: VKMarketMarketCategory
    category_v2?: VKMarketMarketCategory
    /**
     * Date when the item has been created in Unixtime
     */
    date?: number
    /**
     * Item description
     */
    description: string
    external_id?: string
    /**
     * Item ID
     */
    id: number
    is_favorite?: boolean
    /**
     * Item owner's ID
     */
    owner_id: number
    is_owner?: boolean
    is_adult?: boolean
    price: VKMarketPrice
    /**
     * URL of the preview image
     */
    thumb_photo?: string
    /**
     * Item title
     */
    title: string
    /**
     * URL to item
     */
    url?: string
    variants_grouping_id?: number
    is_main_variant?: boolean
    sku?: string
    /**
     * Inventory balances
     */
    stock_amount?: number
    /**
     * Attach for post id
     */
    post_id?: number
    /**
     * Attach for post owner id
     */
    post_owner_id?: number
    albums_ids?: number[]
    photos?: VKPhotosPhoto[]
    /**
     * Information whether current use can comment the item
     */
    can_comment?: VKBaseBoolInt
    /**
     * Information about whether to show the comments tab
     */
    show_comments?: VKBaseBoolInt
    /**
     * Information whether current use can repost the item
     */
    can_repost?: VKBaseBoolInt
    likes?: VKBaseLikes
    reposts?: VKBaseRepostsInfo
    /**
     * Views number
     */
    views_count?: number
    /**
     * Object identifier in wishlist of viewer
     */
    wishlist_item_id?: number
    /**
     * Rating of product
     */
    rating?: number
    /**
     * Count of product orders
     */
    orders_count?: number
    /**
     * Information for cancel and revert order
     */
    cancel_info?: VKBaseLink
    /**
     * User agreement info
     */
    user_agreement_info?: string
    /**
     * Contains ad ID if it has
     */
    ad_id?: number
    /**
     * Information about the group where the item is placed
     */
    owner_info?: VKMarketItemOwnerInfo
    /**
     * Can the item be updated by current user?
     */
    can_edit?: boolean
    /**
     * Can item be deleted by current user?
     */
    can_delete?: boolean
    /**
     * Can item be restored by current user?
     */
    can_recover?: boolean
    /**
     * Can the item be converted from a product into a service?
     */
    can_show_convert_to_service?: boolean
    /**
     * Information about promotion of the item
     */
    promotion?: VKMarketItemPromotionInfo
    /**
     * The amount of the discount if VK Pay is used for payment
     */
    vk_pay_discount?: number
}

/**
 *
 */
export interface VKMarketOrder {
    id: number
    group_id: number
    user_id: number
    display_order_id?: string
    date: number
    status: number
    items_count: number
    track_number?: string
    track_link?: string
    comment?: string
    address?: string
    merchant_comment?: string
    weight?: number
    total_price: VKMarketPrice
    discount?: VKMarketPrice
    /**
     * Several order items for preview
     */
    preview_order_items?: VKMarketOrderItem[]
    /**
     * Information for cancel and revert order
     */
    cancel_info?: VKBaseLink
    /**
     * Seller comment for user
     */
    comment_for_user?: string
    is_viewed_by_admin?: boolean
    date_viewed?: number
    /**
     * Extended field. Can current viewer add review for at least one item in this order
     */
    can_add_review?: boolean
}

/**
 *
 */
export interface VKMarketOrderItem {
    owner_id: number
    item_id: number
    price: VKMarketPrice
    quantity: number
    item: VKMarketMarketItem
    title?: string
    photo?: VKPhotosPhoto
    variants?: string[]
    /**
     * Extended field. Can current viewer add review for this ordered item
     */
    can_add_review?: boolean
}

/**
 * Type of the market group
 */
export type VKMarketOwnerType = "base" | "pro" | "disabled"

/**
 * - `0` — exact
 * - `2` — range
 * - `3` — by_agreement
 */
export type VKMarketPricePriceType = 0 | 2 | 3
/**
 * - `0` — item
 * - `2` — hour
 * - `3` — m3
 * - `4` — m2
 */
export type VKMarketPricePriceUnit = 0 | 2 | 3 | 4

/**
 *
 */
export interface VKMarketPrice {
    /**
     * Amount
     */
    amount: string
    /**
     * Amount to for price_type=2
     */
    amount_to?: string
    price_type?: VKMarketPricePriceType
    price_unit?: VKMarketPricePriceUnit
    currency: VKMarketCurrency
    discount_rate?: number
    old_amount?: string
    /**
     * Text
     */
    text: string
    /**
     * Textual representation of old price
     */
    old_amount_text?: string
}

export type VKMarketPropertyType = "text" | "color"

/**
 *
 */
export interface VKMarketProperty {
    id: number
    /**
     * Property name
     */
    title: string
    /**
     * Property type
     */
    type?: VKMarketPropertyType
    variants: VKMarketPropertyVariant[]
}

/**
 *
 */
export interface VKMarketPropertyVariant {
    id: number
    /**
     * Property name
     */
    title: string
    /**
     * Property value corresponding to property type
     */
    value?: string
}

/**
 * Type of view. 1 - cards, 2 - rows
 *
 * - `1` — cards
 * - `2` — rows
 */
export type VKMarketServicesViewType = 1 | 2

/**
 *
 */
export interface VKMarketUploadPhotoData {
    /**
     * Photo ID
     */
    photo_id: number
    photo?: VKPhotosPhoto
}

/**
 *
 */
export type VKMessagesActionOneOf = VKMessagesMessageAction

/**
 *
 */
export interface VKMessagesAudioMessage {
    /**
     * Access key for audio message
     */
    access_key?: string
    transcript_error?: number
    /**
     * Audio message duration in seconds
     */
    duration: number
    /**
     * Audio message ID
     */
    id: number
    /**
     * MP3 file URL
     */
    link_mp3: string
    /**
     * OGG file URL
     */
    link_ogg: string
    /**
     * Audio message owner ID
     */
    owner_id: number
    waveform: number[]
}

/**
 *
 */
export interface VKMessagesBaseMessage {
    action?: VKMessagesActionOneOf
    /**
     * Only for messages from community. Contains user ID of community admin, who sent this message.
     */
    admin_author_id?: number
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number
    /**
     * Is it an deleted message
     */
    deleted?: VKBaseBoolInt
    /**
     * Message author's ID
     */
    from_id: number
    fwd_messages?: VKMessagesFwdMessages
    geo?: VKBaseGeo
    /**
     * Message ID
     */
    id: number
    /**
     * this message is cropped for bot
     */
    is_cropped?: boolean
    keyboard?: VKMessagesKeyboard
    payload?: string
    /**
     * Message text
     */
    text: string
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number
    /**
     * Is silent message, push without sound
     */
    is_silent?: boolean
    /**
     * Is message unavailable for some reason, including its id equals 0
     */
    is_unavailable?: boolean
    version: number
    /**
     * Information whether the message is outcoming
     */
    out: VKBaseBoolInt
    /**
     * Peer ID
     */
    peer_id: number
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id?: number
    ref?: string
    ref_source?: string
}

/**
 *
 */
export interface VKMessagesChat {
    /**
     * Chat creator ID
     */
    admin_id: number
    /**
     * Chat ID
     */
    id: number
    /**
     * Shows that user has been kicked from the chat
     */
    kicked?: VKBaseBoolInt
    /**
     * Shows that user has been left the chat
     */
    left?: VKBaseBoolInt
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100?: string
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50?: string
    push_settings?: VKMessagesChatPushSettings
    /**
     * Chat title
     */
    title?: string
    /**
     * Chat type
     */
    type: string
    users: number[]
    /**
     * If provided photo is default
     */
    is_default_photo?: boolean
    /**
     * Count members in a chat
     */
    members_count: number
    /**
     * If chat is group channel
     */
    is_group_channel?: boolean
}

/**
 *
 */
export interface VKMessagesChatFull {
    /**
     * Chat creator ID
     */
    admin_id: number
    /**
     * Chat ID
     */
    id: number
    /**
     * Shows that user has been kicked from the chat
     */
    kicked?: VKBaseBoolInt
    /**
     * Shows that user has been left the chat
     */
    left?: VKBaseBoolInt
    /**
     * URL of the preview image with 100 px in width
     */
    photo_100?: string
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string
    /**
     * URL of the preview image with 50 px in width
     */
    photo_50?: string
    push_settings?: VKMessagesChatPushSettings
    /**
     * Chat title
     */
    title?: string
    /**
     * Chat type
     */
    type: string
    users: VKMessagesUserXtrInvitedBy[]
    /**
     * If provided photo is default
     */
    is_default_photo?: boolean
    /**
     * Count members in a chat
     */
    members_count: number
    /**
     * If chat is group channel
     */
    is_group_channel?: boolean
}

/**
 *
 */
export interface VKMessagesChatPreview {
    admin_id: number
    joined?: boolean
    local_id?: number
    members: number[]
    members_count?: number
    title: string
    is_member?: boolean
    photo?: VKMessagesChatSettingsPhoto
    is_don?: boolean
    is_nft?: boolean
    is_group_channel?: boolean
    button?: VKBaseLinkButton
}

/**
 *
 */
export interface VKMessagesChatPushSettings {
    /**
     * Time until that notifications are disabled
     */
    disabled_until?: number
    /**
     * Information whether the sound is on
     */
    sound?: VKBaseBoolInt
}

/**
 *
 */
export interface VKMessagesChatRestrictions {
    /**
     * Only admins can promote users to admins
     */
    admins_promote_users?: boolean
    /**
     * Only admins can change chat info
     */
    only_admins_edit_info?: boolean
    /**
     * Only admins can edit pinned message
     */
    only_admins_edit_pin?: boolean
    /**
     * Only admins can invite users to this chat
     */
    only_admins_invite?: boolean
    /**
     * Only admins can kick users from this chat
     */
    only_admins_kick?: boolean
}

/**
 *
 */
export interface VKMessagesChatSettings {
    members_count?: number
    friends_count?: number
    owner_id: number
    /**
     * Chat title
     */
    title: string
    pinned_messages_count?: number
    pinned_message?: VKMessagesPinnedMessage
    state: VKMessagesChatSettingsState
    photo?: VKMessagesChatSettingsPhoto
    /**
     * Ids of chat admins
     */
    admin_ids?: number[]
    active_ids?: number[]
    is_group_channel?: boolean
    acl: VKMessagesChatSettingsAcl
    permissions?: VKMessagesChatSettingsPermissions
    is_disappearing?: boolean
    theme?: string
    disappearing_chat_link?: string
    is_service?: boolean
}

/**
 *
 */
export interface VKMessagesChatSettingsAcl {
    /**
     * Can you change photo, description and name
     */
    can_change_info: boolean
    /**
     * Can you change invite link for this chat
     */
    can_change_invite_link: boolean
    /**
     * Can you pin/unpin message for this chat
     */
    can_change_pin: boolean
    /**
     * Can you invite other peers in chat
     */
    can_invite: boolean
    /**
     * Can you promote simple users to chat admins
     */
    can_promote_users: boolean
    /**
     * Can you see invite link for this chat
     */
    can_see_invite_link: boolean
    /**
     * Can you moderate (delete) other users' messages
     */
    can_moderate: boolean
    /**
     * Can you copy chat
     */
    can_copy_chat: boolean
    /**
     * Can you init group call in the chat
     */
    can_call: boolean
    /**
     * Can you use mass mentions
     */
    can_use_mass_mentions: boolean
    /**
     * Can you change chat service type
     */
    can_change_service_type?: boolean
}

export type VKMessagesChatSettingsPermissionsInvite =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsChangeInfo =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsChangePin =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsUseMassMentions =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsSeeInviteLink =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsCall =
    | "owner"
    | "owner_and_admins"
    | "all"
export type VKMessagesChatSettingsPermissionsChangeAdmins =
    | "owner"
    | "owner_and_admins"

/**
 *
 */
export interface VKMessagesChatSettingsPermissions {
    /**
     * Who can invite users to chat
     */
    invite?: VKMessagesChatSettingsPermissionsInvite
    /**
     * Who can change chat info
     */
    change_info?: VKMessagesChatSettingsPermissionsChangeInfo
    /**
     * Who can change pinned message
     */
    change_pin?: VKMessagesChatSettingsPermissionsChangePin
    /**
     * Who can use mass mentions
     */
    use_mass_mentions?: VKMessagesChatSettingsPermissionsUseMassMentions
    /**
     * Who can see invite link
     */
    see_invite_link?: VKMessagesChatSettingsPermissionsSeeInviteLink
    /**
     * Who can make calls
     */
    call?: VKMessagesChatSettingsPermissionsCall
    /**
     * Who can change admins
     */
    change_admins?: VKMessagesChatSettingsPermissionsChangeAdmins
}

/**
 *
 */
export interface VKMessagesChatSettingsPhoto {
    /**
     * URL of the preview image with 50px in width
     */
    photo_50?: string
    /**
     * URL of the preview image with 100px in width
     */
    photo_100?: string
    /**
     * URL of the preview image with 200px in width
     */
    photo_200?: string
    /**
     * If provided photo is default
     */
    is_default_photo?: boolean
    /**
     * If provided photo is default call photo
     */
    is_default_call_photo?: boolean
}

/**
 *
 */
export type VKMessagesChatSettingsState = "in" | "kicked" | "left" | "out"

export type VKMessagesConversationSpecialServiceType = "business_notify"

/**
 *
 */
export interface VKMessagesConversation {
    peer: VKMessagesConversationPeer
    sort_id?: VKMessagesConversationSortId
    /**
     * ID of the last message in conversation
     */
    last_message_id: number
    /**
     * Conversation message ID of the last message in conversation
     */
    last_conversation_message_id: number
    /**
     * Last message user have read
     */
    in_read: number
    /**
     * Last outcoming message have been read by the opponent
     */
    out_read: number
    /**
     * Unread messages number
     */
    unread_count?: number
    /**
     * Is this conversation unread
     */
    is_marked_unread?: boolean
    out_read_by?: VKMessagesOutReadBy
    important?: boolean
    unanswered?: boolean
    special_service_type?: VKMessagesConversationSpecialServiceType
    message_request_data?: VKMessagesMessageRequestData
    /**
     * Ids of messages with mentions
     */
    mentions?: number[]
    current_keyboard?: VKMessagesKeyboard
    push_settings?: VKMessagesPushSettings
    can_write?: VKMessagesConversationCanWrite
    chat_settings?: VKMessagesChatSettings
    version: number
}

/**
 *
 */
export interface VKMessagesConversationCanWrite {
    allowed: boolean
    reason?: number
    until?: number
}

/**
 *
 */
export interface VKMessagesConversationMember {
    /**
     * Is it possible for user to kick this member
     */
    can_kick?: boolean
    /**
     * Does this member have write permission
     */
    is_restricted_to_write?: boolean
    invited_by?: number
    is_admin?: boolean
    is_owner?: boolean
    is_message_request?: boolean
    join_date?: number
    /**
     * Message request date
     */
    request_date?: number
    member_id: number
}

/**
 *
 */
export interface VKMessagesConversationPeer {
    id: number
    local_id?: number
    type: VKMessagesConversationPeerType
}

/**
 * Peer type
 */
export type VKMessagesConversationPeerType = "chat" | "email" | "user" | "group"

/**
 *
 */
export interface VKMessagesConversationSortId {
    /**
     * Major id for sorting conversations
     */
    major_id: number
    /**
     * Minor id for sorting conversations
     */
    minor_id: number
}

/**
 *
 */
export interface VKMessagesConversationWithMessage {
    conversation: VKMessagesConversation
    last_message?: VKMessagesMessage
}

/**
 *
 */
export interface VKMessagesDeleteFullResponseItem {
    peer_id?: number
    message_id?: number
    conversation_message_id?: number
    response?: VKBaseBoolInt
    error?: VKBaseMessageError
}

/**
 *
 */
export interface VKMessagesForeignMessage {
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Conversation message ID
     */
    conversation_message_id: number
    /**
     * Date when the message was created
     */
    date: number
    /**
     * Message author's ID
     */
    from_id: number
    fwd_messages?: VKMessagesForeignMessage[]
    geo?: VKBaseGeo
    /**
     * Message ID
     */
    id?: number
    /**
     * Peer ID
     */
    peer_id?: number
    reply_message?: VKMessagesForeignMessage
    /**
     * Message text
     */
    text: string
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
}

/**
 *
 */
export interface VKMessagesForward {
    /**
     * Messages owner_id
     */
    owner_id?: number
    /**
     * Messages peer_id
     */
    peer_id?: number
    conversation_message_ids?: number[]
    cmids?: number[]
    message_ids?: number[]
    /**
     * If you need to reply to a message
     */
    is_reply?: boolean
}

/**
 * Forwarded messages
 */
export interface VKMessagesFwdMessages {}

/**
 *
 */
export interface VKMessagesGetConversationById {
    /**
     * Total number
     */
    count: number
    items: VKMessagesConversation[]
}

/**
 *
 */
export interface VKMessagesGetConversationByIdExtended {
    /**
     * Total number
     */
    count: number
    items: VKMessagesConversation[]
    profiles?: VKUsersUserFull[]
    groups?: VKGroupsGroupFull[]
}

/**
 *
 */
export interface VKMessagesGetConversationMembers {
    items: VKMessagesConversationMember[]
    /**
     * Chat members count
     */
    count: number
    chat_restrictions?: VKMessagesChatRestrictions
    profiles?: VKUsersUserFull[]
    groups?: VKGroupsGroupFull[]
}

/**
 *
 */
export interface VKMessagesGetInviteLinkByOwnerResponseItem {
    owner_id: number
    link?: string
    error?: VKBaseMessageError
}

/**
 *
 */
export interface VKMessagesGraffiti {
    /**
     * Access key for graffiti
     */
    access_key?: string
    /**
     * Graffiti ID
     */
    id: number
    /**
     * Graffiti owner ID
     */
    owner_id: number
    /**
     * Graffiti URL
     */
    url: string
    /**
     * Graffiti width
     */
    width: number
    /**
     * Graffiti height
     */
    height: number
}

/**
 *
 */
export interface VKMessagesHistoryAttachment {
    attachment: VKMessagesHistoryMessageAttachment
    /**
     * Message sending time
     */
    date: number
    /**
     * Message ID
     */
    message_id: number
    /**
     * Message Exipire ttl
     */
    message_expire_ttl?: number
    /**
     * Conversation Message ID
     */
    cmid: number
    /**
     * Message author's ID
     */
    from_id: number
    /**
     * Forward level (optional)
     */
    forward_level?: number
    was_listened?: boolean
    /**
     * Attachment position in the Message
     */
    position?: number
}

/**
 *
 */
export interface VKMessagesHistoryMessageAttachment {
    audio?: VKAudioAudio
    audio_message?: VKMessagesAudioMessage
    doc?: VKDocsDoc
    graffiti?: VKMessagesGraffiti
    market?: VKMarketMarketItem
    photo?: VKPhotosPhoto
    type: VKMessagesHistoryMessageAttachmentType
}

/**
 * Attachments type
 */
export type VKMessagesHistoryMessageAttachmentType =
    | "app_action"
    | "audio"
    | "doc"
    | "link"
    | "market"
    | "photo"
    | "video"
    | "wall"
    | "graffiti"
    | "audio_message"

/**
 *
 */
export interface VKMessagesKeyboard {
    /**
     * Should this keyboard disappear on first use
     */
    one_time: boolean
    buttons: VKMessagesKeyboardButton[][]
    /**
     * Community or bot, which set this keyboard
     */
    author_id?: number
    inline?: boolean
}

export type VKMessagesKeyboardButtonColor =
    | "default"
    | "positive"
    | "negative"
    | "primary"

/**
 *
 */
export interface VKMessagesKeyboardButton {
    action: VKMessagesKeyboardButtonPropertyAction
    /**
     * Button color
     */
    color?: VKMessagesKeyboardButtonColor
}

export type VKMessagesKeyboardButtonActionCallbackType = "callback"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionCallback {
    /**
     * Label for button
     */
    label: string
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionCallbackType
}

export type VKMessagesKeyboardButtonActionLocationType = "location"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionLocation {
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionLocationType
}

export type VKMessagesKeyboardButtonActionOpenAppType = "open_app"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionOpenApp {
    /**
     * Fragment value in app link like vk.com/app{app_id}_-654321#hash
     */
    app_id: number
    /**
     * Fragment value in app link like vk.com/app123456_-654321#{hash}
     */
    hash?: string
    /**
     * Label for button
     */
    label: string
    /**
     * Fragment value in app link like vk.com/app123456_{owner_id}#hash
     */
    owner_id: number
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionOpenAppType
}

export type VKMessagesKeyboardButtonActionOpenLinkType = "open_link"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionOpenLink {
    /**
     * Label for button
     */
    label: string
    /**
     * link for button
     */
    link: string
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionOpenLinkType
}

export type VKMessagesKeyboardButtonActionOpenPhotoType = "open_photo"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionOpenPhoto {
    type: VKMessagesKeyboardButtonActionOpenPhotoType
}

export type VKMessagesKeyboardButtonActionTextType = "text"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionText {
    /**
     * Label for button
     */
    label: string
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionTextType
}

export type VKMessagesKeyboardButtonActionVkpayType = "vkpay"

/**
 * Description of the action, that should be performed on button click
 */
export interface VKMessagesKeyboardButtonActionVkpay {
    /**
     * Fragment value in app link like vk.com/app123456_-654321#{hash}
     */
    hash: string
    /**
     * Additional data sent along with message for developer convenience
     */
    payload?: string
    type: VKMessagesKeyboardButtonActionVkpayType
}

/**
 *
 */
export type VKMessagesKeyboardButtonPropertyAction =
    | VKMessagesKeyboardButtonActionLocation
    | VKMessagesKeyboardButtonActionOpenApp
    | VKMessagesKeyboardButtonActionOpenLink
    | VKMessagesKeyboardButtonActionOpenPhoto
    | VKMessagesKeyboardButtonActionText
    | VKMessagesKeyboardButtonActionCallback
    | VKMessagesKeyboardButtonActionVkpay

/**
 *
 */
export interface VKMessagesLastActivity {
    /**
     * Information whether user is online
     */
    online: VKBaseBoolInt
    /**
     * Time when user was online in Unixtime
     */
    time: number
}

/**
 *
 */
export interface VKMessagesLongpollMessages {}

/**
 *
 */
export interface VKMessagesLongpollParams {
    /**
     * Server URL
     */
    server: string
    /**
     * Key
     */
    key: string
    /**
     * Timestamp
     */
    ts: number
    /**
     * Persistent timestamp
     */
    pts?: number
}

/**
 *
 */
export interface VKMessagesMessage {
    action?: VKMessagesActionOneOf
    /**
     * Only for messages from community. Contains user ID of community admin, who sent this message.
     */
    admin_author_id?: number
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number
    /**
     * Is it an deleted message
     */
    deleted?: VKBaseBoolInt
    /**
     * Message author's ID
     */
    from_id: number
    fwd_messages?: VKMessagesFwdMessages
    geo?: VKBaseGeo
    /**
     * Message ID
     */
    id: number
    /**
     * this message is cropped for bot
     */
    is_cropped?: boolean
    keyboard?: VKMessagesKeyboard
    payload?: string
    /**
     * Message text
     */
    text: string
    /**
     * Date when the message has been updated in Unixtime
     */
    update_time?: number
    /**
     * Is silent message, push without sound
     */
    is_silent?: boolean
    /**
     * Is message unavailable for some reason, including its id equals 0
     */
    is_unavailable?: boolean
    version: number
    /**
     * Information whether the message is outcoming
     */
    out: VKBaseBoolInt
    /**
     * Peer ID
     */
    peer_id: number
    /**
     * ID used for sending messages. It returned only for outgoing messages
     */
    random_id?: number
    ref?: string
    ref_source?: string
    /**
     * Is it an important message
     */
    important?: boolean
    is_hidden?: boolean
    /**
     * Members number
     */
    members_count?: number
    reply_message?: VKMessagesForeignMessage
    /**
     * Reaction id set on message
     */
    reaction_id?: number
    /**
     * Actual reactions counters on this message
     */
    reactions?: VKMessagesReactionCounterResponseItem[]
    /**
     * Last reaction id set on this message
     */
    last_reaction_id?: number
    /**
     * Is message pinned in its conversation
     */
    is_pinned?: boolean
    /**
     * Was the audio message inside already listened by you
     */
    was_listened?: boolean
    /**
     * Date when the message has been pinned in Unixtime
     */
    pinned_at?: number
}

/**
 *
 */
export interface VKMessagesMessageAction {
    /**
     * Message ID
     */
    conversation_message_id?: number
    /**
     * Email address for chat_invite_user or chat_kick_user actions
     */
    email?: string
    /**
     * User or email peer ID
     */
    member_id?: number
    /**
     * Message body of related message
     */
    message?: string
    photo?: VKMessagesMessageActionPhoto
    /**
     * New chat title for chat_create and chat_title_update actions
     */
    text?: string
    type: VKMessagesMessageActionStatus
}

/**
 *
 */
export interface VKMessagesMessageActionPhoto {
    /**
     * URL of the preview image with 50px in width
     */
    photo_50: string
    /**
     * URL of the preview image with 100px in width
     */
    photo_100: string
    /**
     * URL of the preview image with 200px in width
     */
    photo_200: string
}

/**
 * Action status
 */
export type VKMessagesMessageActionStatus =
    | "chat_photo_update"
    | "chat_photo_remove"
    | "chat_create"
    | "chat_title_update"
    | "chat_invite_user"
    | "chat_kick_user"
    | "chat_pin_message"
    | "chat_unpin_message"
    | "chat_invite_user_by_link"
    | "chat_invite_user_by_message_request"
    | "chat_screenshot"

/**
 *
 */
export interface VKMessagesMessageAttachment {
    audio?: VKAudioAudio
    audio_message?: VKMessagesAudioMessage
    call?: VKCallsCall
    doc?: VKDocsDoc
    gift?: VKGiftsLayout
    graffiti?: VKMessagesGraffiti
    market?: VKMarketMarketItem
    market_market_album?: VKMarketMarketAlbum
    photo?: VKPhotosPhoto
    sticker?: VKBaseSticker
    story?: VKStoriesStory
    type: VKMessagesMessageAttachmentType
    wall_reply?: VKWallWallComment
    poll?: VKPollsPoll
}

/**
 * Attachment type
 */
export type VKMessagesMessageAttachmentType =
    | "photo"
    | "audio"
    | "video"
    | "video_playlist"
    | "doc"
    | "link"
    | "market"
    | "gift"
    | "sticker"
    | "wall"
    | "wall_reply"
    | "article"
    | "poll"
    | "podcasts"
    | "call"
    | "graffiti"
    | "audio_message"

/**
 *
 */
export interface VKMessagesMessageRequestData {
    /**
     * Status of message request
     */
    status?: string
    /**
     * Message request sender id
     */
    inviter_id?: number
    /**
     * Message request date
     */
    request_date?: number
}

/**
 *
 */
export interface VKMessagesMessagesArray {
    count?: number
    items?: VKMessagesMessage[]
}

/**
 *
 */
export interface VKMessagesOutReadBy {
    count?: number
    member_ids?: number[]
}

/**
 *
 */
export interface VKMessagesPinnedMessage {
    attachments?: VKMessagesMessageAttachment[]
    /**
     * Unique auto-incremented number for all messages with this peer
     */
    conversation_message_id: number
    /**
     * Message ID
     */
    id: number
    /**
     * Date when the message has been sent in Unixtime
     */
    date: number
    /**
     * Message author's ID
     */
    from_id: number
    /**
     * Forwarded messages
     */
    fwd_messages?: VKMessagesForeignMessage[]
    geo?: VKBaseGeo
    /**
     * Peer ID
     */
    peer_id: number
    reply_message?: VKMessagesForeignMessage
    /**
     * Message text
     */
    text: string
    keyboard?: VKMessagesKeyboard
    /**
     * Information whether the message is outcoming
     */
    out?: boolean
    /**
     * Is it an important message
     */
    important?: boolean
}

/**
 *
 */
export interface VKMessagesPushSettings {
    /**
     * Information whether push notifications are disabled forever
     */
    disabled_forever: boolean
    /**
     * Time until what notifications are disabled
     */
    disabled_until?: number
    /**
     * Information whether the sound is on
     */
    no_sound: boolean
    /**
     * Information whether the mentions are disabled
     */
    disabled_mentions?: boolean
    /**
     * Information whether the mass mentions (like '@all', '@online') are disabled
     */
    disabled_mass_mentions?: boolean
}

/**
 *
 */
export interface VKMessagesReactionAssetItem {
    reaction_id: number
    /**
     * Liks to reactions assets for each asset type
     */
    links: VKMessagesReactionAssetItemLinks
}

/**
 *
 */
export interface VKMessagesReactionAssetItemLinks {
    /**
     * Big reaction animation json file
     */
    big_animation: string
    /**
     * Small reaction animation json file
     */
    small_animation: string
    /**
     * Reaction image file
     */
    static: string
}

/**
 *
 */
export interface VKMessagesReactionCounterResponseItem {
    reaction_id: number
    count: number
    user_ids: number[]
}

/**
 *
 */
export interface VKMessagesReactionCountersResponseItem {
    cmid: number
    counters: VKMessagesReactionCounterResponseItem[]
}

/**
 *
 */
export interface VKMessagesReactionResponseItem {
    user_id: number
    reaction_id: number
}

/**
 *
 */
export interface VKMessagesSendUserIdsResponseItem {
    peer_id: number
    message_id: number
    conversation_message_id: number
    error?: VKBaseMessageError
}

/**
 * Template action type names
 */
export type VKMessagesTemplateActionTypeNames =
    | "text"
    | "start"
    | "location"
    | "vkpay"
    | "open_app"
    | "open_photo"
    | "open_link"
    | "callback"
    | "intent_subscribe"
    | "intent_unsubscribe"
    | "open_modal_view"

/**
 * Object type
 */
export type VKMessagesUserTypeForXtrInvitedBy = "profile" | "group"

export type VKMessagesUserXtrInvitedByWallDefault = "owner" | "all"

/**
 *
 */
export interface VKMessagesUserXtrInvitedBy {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKMessagesUserTypeForXtrInvitedBy
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKMessagesUserXtrInvitedByWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
    /**
     * ID of the inviter
     */
    invited_by?: number
    /**
     * Name of group
     */
    name?: string
}

/**
 *
 */
export interface VKNewsfeedCommentsBase {
    /**
     * Information whether current user can comment the post
     */
    can_post?: VKBaseBoolInt
    can_open?: VKBaseBoolInt
    can_close?: VKBaseBoolInt
    /**
     * Information whether current user can view the comments
     */
    can_view?: VKBaseBoolInt
    /**
     * Comments number
     */
    count?: number
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: boolean
    donut?: VKWallWallpostCommentsDonut
    list?: VKWallWallComment[]
}

/**
 *
 */
export type VKNewsfeedCommentsFilters =
    | "post"
    | "photo"
    | "video"
    | "topic"
    | "note"

/**
 *
 */
export type VKNewsfeedCommentsItem =
    | VKNewsfeedCommentsItemTypeTopic
    | VKNewsfeedCommentsItemTypePhoto
    | VKNewsfeedCommentsItemTypeVideo
    | VKNewsfeedCommentsItemTypeNotes
    | VKNewsfeedCommentsItemTypePost
    | VKNewsfeedCommentsItemTypeMarket

/**
 *
 */
export interface VKNewsfeedCommentsItemBase {
    type: VKNewsfeedNewsfeedItemType
    source_id?: number
    date?: number
    post_id?: number
}

/**
 *
 */
export interface VKNewsfeedCommentsItemTypeMarket {
    /**
     * Access key for the market item
     */
    access_key?: string
    availability: VKMarketMarketItemAvailability
    /**
     * Title for button for url
     */
    button_title?: string
    category: VKMarketMarketCategory
    category_v2?: VKMarketMarketCategory
    date?: number
    /**
     * Item description
     */
    description: string
    external_id?: string
    /**
     * Item ID
     */
    id: number
    is_favorite?: boolean
    /**
     * Item owner's ID
     */
    owner_id: number
    is_owner?: boolean
    is_adult?: boolean
    price: VKMarketPrice
    /**
     * URL of the preview image
     */
    thumb_photo?: string
    /**
     * Item title
     */
    title: string
    /**
     * URL to item
     */
    url?: string
    variants_grouping_id?: number
    is_main_variant?: boolean
    sku?: string
    /**
     * Inventory balances
     */
    stock_amount?: number
    post_id?: number
    /**
     * Attach for post owner id
     */
    post_owner_id?: number
    type: VKNewsfeedNewsfeedItemType
    source_id?: number
    comments?: VKNewsfeedCommentsBase
    likes?: VKBaseLikes
}

/**
 *
 */
export interface VKNewsfeedCommentsItemTypeNotes {
    type: VKNewsfeedNewsfeedItemType
    source_id?: number
    date?: number
    post_id?: number
    text?: string
    comments?: VKNewsfeedCommentsBase
    likes?: VKBaseLikes
}

export type VKNewsfeedCommentsItemTypePhotoVerticalAlign =
    | "top"
    | "middle"
    | "bottom"

/**
 *
 */
export interface VKNewsfeedCommentsItemTypePhoto {
    /**
     * Access key for the photo
     */
    access_key?: string
    /**
     * Album ID
     */
    album_id: number
    date: number
    /**
     * Original photo height
     */
    height?: number
    /**
     * Photo ID
     */
    id: number
    images?: VKPhotosImage[]
    /**
     * Latitude
     */
    lat?: number
    /**
     * Longitude
     */
    long?: number
    /**
     * Photo owner's ID
     */
    owner_id: number
    /**
     * URL of image with 2560 px width
     */
    photo_256?: string
    /**
     * Thumb Hash
     */
    thumb_hash?: string
    /**
     * Information whether current user can comment the photo
     */
    can_comment?: VKBaseBoolInt
    place?: string
    post_id?: number
    sizes?: VKPhotosPhotoSizes[]
    square_crop?: string
    /**
     * Photo caption
     */
    text?: string
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number
    /**
     * Original photo width
     */
    width?: number
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean
    likes?: VKBaseLikes
    comments?: VKNewsfeedCommentsBase
    reposts?: VKBaseRepostsInfo
    tags?: VKBaseObjectCount
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden?: VKBasePropertyExists
    /**
     * Real position of the photo
     */
    real_offset?: number
    /**
     * Sets vertical alignment of a photo
     */
    vertical_align?: VKNewsfeedCommentsItemTypePhotoVerticalAlign
    type: VKNewsfeedNewsfeedItemType
    source_id?: number
}

export type VKNewsfeedCommentsItemTypePostInnerType = "wall_wallpost"
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
export type VKNewsfeedCommentsItemTypePostTopicId =
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
 *
 */
export interface VKNewsfeedCommentsItemTypePost {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    inner_type: VKNewsfeedCommentsItemTypePostInnerType
    /**
     * Access key to private object
     */
    access_key?: string
    is_deleted?: boolean
    deleted_reason?: string
    deleted_details?: string
    donut_miniapp_url?: string
    attachments?: VKWallWallpostAttachment[]
    /**
     * Information about the source of the post
     */
    copyright?: VKWallPostCopyright
    date?: number
    /**
     * Date of editing in Unixtime
     */
    edited?: number
    from_id?: number
    geo?: VKWallGeo
    /**
     * Post ID
     */
    id?: number
    /**
     * Is post archived, only for post owners
     */
    is_archived?: boolean
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean
    /**
     * Count of likes
     */
    likes?: VKBaseLikesInfo
    /**
     * Wall owner's ID
     */
    owner_id?: number
    post_id?: number
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack?: number[]
    post_source?: VKWallPostSource
    post_type?: VKWallPostType
    reposts?: VKBaseRepostsInfo
    /**
     * Post signer ID
     */
    signer_id?: number
    /**
     * Post text
     */
    text?: string
    /**
     * Count of views
     */
    views?: VKWallViews
    copy_history?: VKWallWallpostFull[]
    /**
     * Information whether current user can edit the post
     */
    can_edit?: VKBaseBoolInt
    /**
     * Post creator ID (if post still can be edited)
     */
    created_by?: number
    /**
     * Information whether current user can delete the post
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can pin the post
     */
    can_pin?: VKBaseBoolInt
    donut?: VKWallWallpostDonut
    /**
     * Information whether the post is pinned
     */
    is_pinned?: VKBaseBoolInt
    comments?: VKNewsfeedCommentsBase
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads?: VKBaseBoolInt
    /**
     * Topic ID. Allowed values can be obtained from newsfeed.getPostTopics method
     */
    topic_id?: VKNewsfeedCommentsItemTypePostTopicId
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    /**
     * Hash for sharing
     */
    hash?: string
    type: VKNewsfeedNewsfeedItemType
    feedback?: VKNewsfeedItemWallpostFeedback
    to_id?: number
    source_id?: number
}

/**
 *
 */
export interface VKNewsfeedCommentsItemTypeTopic {
    type: VKNewsfeedNewsfeedItemType
    source_id?: number
    date?: number
    post_id?: number
    text?: string
    comments?: VKNewsfeedCommentsBase
    likes?: VKBaseLikes
}

export type VKNewsfeedCommentsItemTypeVideoResponseType = "min" | "full"
export type VKNewsfeedCommentsItemTypeVideoType =
    | "video"
    | "music_video"
    | "movie"
    | "live"
    | "short_video"

/**
 *
 */
export interface VKNewsfeedCommentsItemTypeVideo {
    response_type?: VKNewsfeedCommentsItemTypeVideoResponseType
    /**
     * Video access key
     */
    access_key?: string
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date?: number
    /**
     * Information whether current user can comment the video
     */
    can_comment?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video
     */
    can_edit?: VKBaseBoolInt
    /**
     * Information whether current user can delete the video
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can like the video
     */
    can_like?: VKBaseBoolInt
    /**
     * Information whether current user can repost the video
     */
    can_repost?: number
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe?: VKBaseBoolInt
    /**
     * Information whether current user can promote the video
     */
    can_be_promoted?: VKBaseBoolInt
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves?: VKBaseBoolInt
    /**
     * Information whether current user can add the video
     */
    can_add?: VKBaseBoolInt
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video privacy
     */
    can_edit_privacy?: VKBaseBoolInt
    /**
     * 1 if video is private
     */
    is_private?: VKBaseBoolInt
    comments?: VKNewsfeedCommentsBase
    date?: number
    /**
     * Video description
     */
    description?: string
    /**
     * Video duration in seconds
     */
    duration?: number
    image?: VKVideoVideoImage[]
    first_frame?: VKVideoVideoImage[]
    /**
     * Video width
     */
    width?: number
    /**
     * Video height
     */
    height?: number
    /**
     * Video ID
     */
    id?: number
    /**
     * Video owner ID
     */
    owner_id?: number
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id?: number
    /**
     * Video title
     */
    title?: string
    /**
     * Whether video is added to bookmarks
     */
    is_favorite?: boolean
    /**
     * Video embed URL
     */
    player?: string
    /**
     * Returns if the video is processing
     */
    processing?: VKBasePropertyExists
    /**
     * 1 if  video is being converted
     */
    converting?: VKBaseBoolInt
    /**
     * 1 if video is added to user's albums
     */
    added?: VKBaseBoolInt
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed?: VKBaseBoolInt
    track_code?: string
    /**
     * Information whether the video is repeated
     */
    repeat?: VKBasePropertyExists
    type: VKNewsfeedCommentsItemTypeVideoType
    /**
     * Number of views
     */
    views?: number
    /**
     * If video is external, number of views on vk
     */
    local_views?: number
    /**
     * Restriction code
     */
    content_restricted?: number
    /**
     * Restriction text
     */
    content_restricted_message?: string
    /**
     * Live donations balance
     */
    balance?: number
    /**
     * 1 if the video is a live stream
     */
    live?: VKBasePropertyExists
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming?: VKBasePropertyExists
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time?: number
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify?: VKBaseBoolInt
    /**
     * Number of spectators of the stream
     */
    spectators?: number
    /**
     * External platform
     */
    platform?: string
    likes?: VKBaseLikes
    reposts?: VKBaseRepostsInfo
    source_id?: number
    post_id?: number
    text?: string
}

/**
 *
 *
 * - `wall` — post on the wall
 * - `tag` — tag on a photo
 * - `profilephoto` — profile photo
 * - `video` — video
 * - `photo` — photo
 * - `audio` — audio
 */
export type VKNewsfeedIgnoreItemType =
    | "wall"
    | "tag"
    | "profilephoto"
    | "video"
    | "photo"
    | "audio"

/**
 *
 */
export interface VKNewsfeedItemAudio {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    audio?: VKNewsfeedItemAudioAudio
    /**
     * Post ID
     */
    post_id?: number
}

/**
 *
 */
export interface VKNewsfeedItemAudioAudio {
    /**
     * Audios number
     */
    count?: number
    items?: VKAudioAudio[]
}

/**
 *
 */
export interface VKNewsfeedItemBase {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
}

export type VKNewsfeedItemDigestTemplate = "list" | "grid" | "single"

/**
 *
 */
export interface VKNewsfeedItemDigest {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    /**
     * id of feed in digest
     */
    feed_id?: string
    items?: VKNewsfeedItemDigestItem[]
    main_post_ids?: string[]
    /**
     * type of digest
     */
    template?: VKNewsfeedItemDigestTemplate
    header?: VKNewsfeedItemDigestHeader
    footer?: VKNewsfeedItemDigestFooter
}

export type VKNewsfeedItemDigestButtonStyle = "primary"

/**
 *
 */
export interface VKNewsfeedItemDigestButton {
    title: string
    style?: VKNewsfeedItemDigestButtonStyle
}

export type VKNewsfeedItemDigestFooterStyle = "text" | "button"

/**
 *
 */
export interface VKNewsfeedItemDigestFooter {
    style: VKNewsfeedItemDigestFooterStyle
    /**
     * text for invite to enable smart feed
     */
    text: string
    button?: VKNewsfeedItemDigestButton
    feed_id?: string
}

export type VKNewsfeedItemDigestFullItemInnerType =
    "newsfeed_item_digest_full_item"
export type VKNewsfeedItemDigestFullItemStyle =
    | "default"
    | "inversed"
    | "spotlight"

/**
 *
 */
export interface VKNewsfeedItemDigestFullItem {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    inner_type: VKNewsfeedItemDigestFullItemInnerType
    text?: string
    source_name?: string
    attachment_index?: number
    attachment?: VKWallWallpostAttachment
    style?: VKNewsfeedItemDigestFullItemStyle
    post: VKNewsfeedItemWallpost
    /**
     * Optional red badge for posts in digest block
     */
    badge_text?: string
}

export type VKNewsfeedItemDigestHeaderStyle = "singleline" | "multiline"

/**
 *
 */
export interface VKNewsfeedItemDigestHeader {
    /**
     * Title of the header
     */
    title: string
    /**
     * Subtitle of the header, when title have two strings
     */
    subtitle?: string
    /**
     * Optional field for red badge in Trends feed blocks
     */
    badge_text?: string
    style: VKNewsfeedItemDigestHeaderStyle
    button?: VKNewsfeedItemDigestButton
}

/**
 *
 */
export type VKNewsfeedItemDigestItem = VKNewsfeedItemDigestFullItem

/**
 *
 */
export interface VKNewsfeedItemFriend {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    friends?: VKNewsfeedItemFriendFriends
}

/**
 *
 */
export interface VKNewsfeedItemFriendFriends {
    /**
     * Number of friends has been added
     */
    count?: number
    items?: VKBaseUserId[]
}

/**
 *
 */
export interface VKNewsfeedItemHolidayRecommendationsBlockHeader {
    /**
     * Title of the header
     */
    title?: string
    /**
     * Subtitle of the header
     */
    subtitle?: string
    image?: VKBaseImage[]
    action?: VKBaseLinkButtonAction
}

/**
 *
 */
export interface VKNewsfeedItemPhoto {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    photos?: VKNewsfeedItemPhotoPhotos
    /**
     * Post ID
     */
    post_id?: number
}

/**
 *
 */
export interface VKNewsfeedItemPhotoPhotos {
    /**
     * Photos number
     */
    count?: number
    items?: VKPhotosPhoto[]
}

/**
 *
 */
export interface VKNewsfeedItemPhotoTag {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    photo_tags?: VKNewsfeedItemPhotoTagPhotoTags
    /**
     * Post ID
     */
    post_id?: number
}

/**
 *
 */
export interface VKNewsfeedItemPhotoTagPhotoTags {
    /**
     * Tags number
     */
    count?: number
    items?: VKPhotosPhoto[]
}

/**
 *
 */
export interface VKNewsfeedItemPromoButton {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    text?: string
    title?: string
    action?: VKNewsfeedItemPromoButtonAction
    images?: VKNewsfeedItemPromoButtonImage[]
}

/**
 *
 */
export interface VKNewsfeedItemPromoButtonAction {
    url?: string
    type?: string
    target?: string
}

/**
 *
 */
export interface VKNewsfeedItemPromoButtonImage {
    width?: number
    height?: number
    url?: string
}

/**
 *
 */
export interface VKNewsfeedItemTopic {
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    comments?: VKBaseCommentsInfo
    likes?: VKBaseLikesInfo
    /**
     * Topic post ID
     */
    post_id: number
    /**
     * Post text
     */
    text: string
}

/**
 *
 */
export interface VKNewsfeedItemVideo {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    type: VKNewsfeedNewsfeedItemType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date when item has been added in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    video?: VKNewsfeedItemVideoVideo
    /**
     * Post ID
     */
    post_id?: number
}

/**
 *
 */
export interface VKNewsfeedItemVideoVideo {
    /**
     * Tags number
     */
    count?: number
    items?: VKVideoVideoFull[]
}

export type VKNewsfeedItemWallpostInnerType = "wall_wallpost"
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
export type VKNewsfeedItemWallpostTopicId =
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
 *
 */
export interface VKNewsfeedItemWallpost {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    type: VKWallPostType
    /**
     * Item source ID
     */
    source_id: number
    /**
     * Date of publishing in Unixtime
     */
    date: number
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    feedback?: VKNewsfeedItemWallpostFeedback
    inner_type: VKNewsfeedItemWallpostInnerType
    /**
     * Access key to private object
     */
    access_key?: string
    is_deleted?: boolean
    deleted_reason?: string
    deleted_details?: string
    donut_miniapp_url?: string
    attachments?: VKWallWallpostAttachment[]
    /**
     * Information about the source of the post
     */
    copyright?: VKWallPostCopyright
    /**
     * Date of editing in Unixtime
     */
    edited?: number
    /**
     * Post author ID
     */
    from_id?: number
    geo?: VKWallGeo
    /**
     * Post ID
     */
    id?: number
    /**
     * Is post archived, only for post owners
     */
    is_archived?: boolean
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean
    /**
     * Count of likes
     */
    likes?: VKBaseLikesInfo
    /**
     * Wall owner's ID
     */
    owner_id?: number
    /**
     * If post type 'reply', contains original post ID
     */
    post_id?: number
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack?: number[]
    post_source?: VKWallPostSource
    post_type?: VKWallPostType
    reposts?: VKBaseRepostsInfo
    /**
     * Post signer ID
     */
    signer_id?: number
    /**
     * Post text
     */
    text?: string
    /**
     * Count of views
     */
    views?: VKWallViews
    copy_history?: VKWallWallpostFull[]
    /**
     * Information whether current user can edit the post
     */
    can_edit?: VKBaseBoolInt
    /**
     * Post creator ID (if post still can be edited)
     */
    created_by?: number
    /**
     * Information whether current user can delete the post
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can pin the post
     */
    can_pin?: VKBaseBoolInt
    donut?: VKWallWallpostDonut
    /**
     * Information whether the post is pinned
     */
    is_pinned?: VKBaseBoolInt
    comments?: VKBaseCommentsInfo
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads?: VKBaseBoolInt
    /**
     * Topic ID. Allowed values can be obtained from newsfeed.getPostTopics method
     */
    topic_id?: VKNewsfeedItemWallpostTopicId
    /**
     * Hash for sharing
     */
    hash?: string
    to_id?: number
}

/**
 *
 */
export interface VKNewsfeedItemWallpostFeedback {
    type: VKNewsfeedItemWallpostFeedbackType
    question: string
    answers?: VKNewsfeedItemWallpostFeedbackAnswer[]
    stars_count?: number
    descriptions?: string[]
    gratitude?: string
    track_code?: string
}

/**
 *
 */
export interface VKNewsfeedItemWallpostFeedbackAnswer {
    title: string
    id: string
}

/**
 *
 */
export type VKNewsfeedItemWallpostFeedbackType = "buttons" | "stars"

/**
 *
 */
export interface VKNewsfeedList {
    /**
     * List ID
     */
    id: number
    /**
     * List title
     */
    title: string
}

/**
 *
 */
export interface VKNewsfeedListFull {
    /**
     * List ID
     */
    id: number
    /**
     * List title
     */
    title: string
    /**
     * Information whether reposts hiding is enabled
     */
    no_reposts?: VKBaseBoolInt
    source_ids?: number[]
}

/**
 *
 */
export type VKNewsfeedNewsfeedItem =
    | VKNewsfeedItemWallpost
    | VKNewsfeedItemPhoto
    | VKNewsfeedItemPhotoTag
    | VKNewsfeedItemFriend
    | VKNewsfeedItemAudio
    | VKNewsfeedItemVideo
    | VKNewsfeedItemTopic
    | VKNewsfeedItemDigest
    | VKNewsfeedItemPromoButton

/**
 * Item type
 */
export type VKNewsfeedNewsfeedItemType =
    | "post"
    | "photo"
    | "photo_tag"
    | "wall_photo"
    | "friend"
    | "audio"
    | "video"
    | "topic"
    | "digest"
    | "stories"
    | "note"
    | "audio_playlist"
    | "clip"
    | "clips_retention"

/**
 *
 */
export interface VKNotesNote {
    read_comments?: number
    /**
     * Information whether current user can comment the note
     */
    can_comment?: VKBaseBoolInt
    /**
     * Comments number
     */
    comments: number
    /**
     * Date when the note has been created in Unixtime
     */
    date: number
    /**
     * Note ID
     */
    id: number
    /**
     * Note owner's ID
     */
    owner_id: number
    /**
     * Note text
     */
    text?: string
    /**
     * Note text in wiki format
     */
    text_wiki?: string
    /**
     * Note title
     */
    title: string
    /**
     * URL of the page with note preview
     */
    view_url: string
    privacy_view?: string[]
    privacy_comment?: string[]
}

/**
 *
 */
export interface VKNotesNoteComment {
    /**
     * Date when the comment has beed added in Unixtime
     */
    date: number
    /**
     * Comment ID
     */
    id: number
    /**
     * Comment text
     */
    message: string
    /**
     * Note ID
     */
    nid: number
    /**
     * Note ID
     */
    oid: number
    /**
     * ID of replied comment
     */
    reply_to?: number
    /**
     * Comment author's ID
     */
    uid: number
}

/**
 *
 */
export interface VKNotificationsFeedback {
    attachments?: VKWallWallpostAttachment[]
    /**
     * Reply author's ID
     */
    from_id?: number
    geo?: VKBaseGeo
    /**
     * Item ID
     */
    id?: number
    likes?: VKBaseLikesInfo
    /**
     * Reply text
     */
    text?: string
    /**
     * Wall owner's ID
     */
    to_id?: number
}

export type VKNotificationsNotificationInnerType = "notifications_notification"

/**
 *
 */
export interface VKNotificationsNotification {
    inner_type: VKNotificationsNotificationInnerType
    /**
     * Date when the event has been occurred
     */
    date?: number
    feedback?: VKNotificationsFeedback
    parent?: VKNotificationsNotification
    reply?: VKNotificationsReply
    /**
     * Notification type
     */
    type?: string
}

/**
 *
 */
export type VKNotificationsNotificationItem = VKNotificationsNotification

/**
 *
 */
export interface VKNotificationsReply {
    /**
     * Date when the reply has been created in Unixtime
     */
    date?: number
    /**
     * Reply ID
     */
    id?: number
    /**
     * Reply text
     */
    text?: number
}

/**
 * - `1` — notifications disabled
 * - `2` — flood control per hour
 * - `3` — flood control per day
 * - `4` — app is not installed
 */
export type VKNotificationsSendMessageErrorCode = 1 | 2 | 3 | 4

/**
 *
 */
export interface VKNotificationsSendMessageError {
    /**
     * Error code
     */
    code?: VKNotificationsSendMessageErrorCode
    /**
     * Error description
     */
    description?: string
}

/**
 *
 */
export interface VKNotificationsSendMessageItem {
    /**
     * User ID
     */
    user_id?: number
    /**
     * Notification status
     */
    status?: boolean
    error?: VKNotificationsSendMessageError
}

/**
 *
 */
export interface VKOauthError {
    /**
     * Error type
     */
    error: string
    /**
     * Error description
     */
    error_description: string
    /**
     * URI for validation
     */
    redirect_uri?: string
}

/**
 *
 */
export interface VKOrdersAmount {
    amounts?: VKOrdersAmountItem[]
    /**
     * Currency name
     */
    currency?: string
}

/**
 *
 */
export interface VKOrdersAmountItem {
    /**
     * Votes amount in user's currency
     */
    amount?: number
    /**
     * Amount description
     */
    description?: string
    /**
     * Votes number
     */
    votes?: string
}

export type VKOrdersOrderStatus =
    | "created"
    | "charged"
    | "refunded"
    | "chargeable"
    | "cancelled"
    | "declined"

/**
 *
 */
export interface VKOrdersOrder {
    /**
     * Amount
     */
    amount: string
    /**
     * App order ID
     */
    app_order_id: string
    /**
     * Cancel transaction ID
     */
    cancel_transaction_id?: string
    /**
     * Date of creation in Unixtime
     */
    date: string
    /**
     * Order ID
     */
    id: string
    /**
     * Order item
     */
    item: string
    /**
     * Receiver ID
     */
    receiver_id: string
    /**
     * Order status
     */
    status: VKOrdersOrderStatus
    /**
     * Transaction ID
     */
    transaction_id?: string
    /**
     * User ID
     */
    user_id: string
}

/**
 *
 */
export interface VKOrdersSubscription {
    /**
     * Cancel reason
     */
    cancel_reason?: string
    /**
     * Date of creation in Unixtime
     */
    create_time: number
    /**
     * Subscription ID
     */
    id: number
    /**
     * Subscription order item
     */
    item_id: string
    /**
     * Date of next bill in Unixtime
     */
    next_bill_time?: number
    /**
     * Subscription expiration time in Unixtime
     */
    expire_time?: number
    /**
     * Pending cancel state
     */
    pending_cancel?: boolean
    /**
     * Subscription period
     */
    period: number
    /**
     * Date of last period start in Unixtime
     */
    period_start_time: number
    /**
     * Subscription price
     */
    price: number
    /**
     * Subscription name
     */
    title?: string
    /**
     * Subscription's application id
     */
    app_id?: number
    /**
     * Subscription's application name
     */
    application_name?: string
    /**
     * Item photo image url
     */
    photo_url?: string
    /**
     * Subscription status
     */
    status: string
    /**
     * Is test subscription
     */
    test_mode?: boolean
    /**
     * Date of trial expire in Unixtime
     */
    trial_expire_time?: number
    /**
     * Date of last change in Unixtime
     */
    update_time: number
    /**
     * Is game (not miniapp) subscription
     */
    is_game?: boolean
}

/**
 * - `1` — banned
 * - `2` — adult
 * - `3` — hidden
 * - `4` — deleted
 * - `5` — blacklisted
 */
export type VKOwnerStateState = 1 | 2 | 3 | 4 | 5

/**
 *
 */
export interface VKOwnerState {
    state?: VKOwnerStateState
    /**
     * wiki text to describe user state
     */
    description?: string
}

/**
 *
 *
 * - `0` — community managers only
 * - `1` — community members only
 * - `2` — everyone
 */
export type VKPagesPrivacySettings = 0 | 1 | 2

/**
 *
 */
export interface VKPagesWikipage {
    /**
     * Page creator ID
     */
    creator_id?: number
    /**
     * Page creator name
     */
    creator_name?: string
    /**
     * Last editor ID
     */
    editor_id?: number
    /**
     * Last editor name
     */
    editor_name?: string
    /**
     * Community ID
     */
    group_id: number
    /**
     * Page ID
     */
    id: number
    /**
     * Page title
     */
    title: string
    /**
     * Views number
     */
    views: number
    /**
     * Edit settings of the page
     */
    who_can_edit: VKPagesPrivacySettings
    /**
     * View settings of the page
     */
    who_can_view: VKPagesPrivacySettings
    created: number
    edited: number
}

/**
 *
 */
export interface VKPagesWikipageFull {
    /**
     * Date when the page has been created in Unixtime
     */
    created: number
    /**
     * Page creator ID
     */
    creator_id?: number
    /**
     * Information whether current user can edit the page
     */
    current_user_can_edit?: VKBaseBoolInt
    /**
     * Information whether current user can edit the page access settings
     */
    current_user_can_edit_access?: VKBaseBoolInt
    /**
     * Date when the page has been edited in Unixtime
     */
    edited: number
    /**
     * Last editor ID
     */
    editor_id?: number
    /**
     * Community ID
     */
    group_id: number
    /**
     * Page content, HTML
     */
    html?: string
    /**
     * Page ID
     */
    id: number
    /**
     * Page content, wiki
     */
    source?: string
    /**
     * Page title
     */
    title: string
    /**
     * URL of the page preview
     */
    view_url: string
    /**
     * Views number
     */
    views: number
    /**
     * Edit settings of the page
     */
    who_can_edit: VKPagesPrivacySettings
    /**
     * View settings of the page
     */
    who_can_view: VKPagesPrivacySettings
    /**
     * URL
     */
    url?: string
    /**
     * Parent
     */
    parent?: string
    /**
     * Parent2
     */
    parent2?: string
    /**
     * Owner ID
     */
    owner_id?: number
}

/**
 *
 */
export interface VKPagesWikipageHistory {
    /**
     * Version ID
     */
    id: number
    /**
     * Page size in bytes
     */
    length: number
    /**
     * Date when the page has been edited in Unixtime
     */
    date: number
    /**
     * Last editor ID
     */
    editor_id: number
    /**
     * Last editor name
     */
    editor_name: string
}

/**
 *
 */
export interface VKPhotosImage {
    /**
     * Height of the photo in px.
     */
    height?: number
    type?: VKPhotosImageType
    /**
     * Photo URL.
     */
    url?: string
    /**
     * Width of the photo in px.
     */
    width?: number
}

/**
 * Photo's type.
 */
export type VKPhotosImageType =
    | "s"
    | "m"
    | "x"
    | "l"
    | "o"
    | "p"
    | "q"
    | "r"
    | "y"
    | "z"
    | "w"
    | "base"

export type VKPhotosPhotoVerticalAlign = "top" | "middle" | "bottom"

/**
 *
 */
export interface VKPhotosPhoto {
    /**
     * Access key for the photo
     */
    access_key?: string
    /**
     * Album ID
     */
    album_id: number
    /**
     * Date when uploaded
     */
    date: number
    /**
     * Original photo height
     */
    height?: number
    /**
     * Photo ID
     */
    id: number
    images?: VKPhotosImage[]
    /**
     * Latitude
     */
    lat?: number
    /**
     * Longitude
     */
    long?: number
    /**
     * Photo owner's ID
     */
    owner_id: number
    /**
     * URL of image with 2560 px width
     */
    photo_256?: string
    /**
     * Thumb Hash
     */
    thumb_hash?: string
    /**
     * Information whether current user can comment the photo
     */
    can_comment?: VKBaseBoolInt
    place?: string
    /**
     * Post ID
     */
    post_id?: number
    sizes?: VKPhotosPhotoSizes[]
    square_crop?: string
    /**
     * Photo caption
     */
    text?: string
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number
    /**
     * Original photo width
     */
    width?: number
    /**
     * Whether photo has attached tag links
     */
    has_tags: boolean
    likes?: VKBaseLikes
    comments?: VKBaseObjectCount
    reposts?: VKBaseRepostsInfo
    tags?: VKBaseObjectCount
    /**
     * Returns if the photo is hidden above the wall
     */
    hidden?: VKBasePropertyExists
    /**
     * Real position of the photo
     */
    real_offset?: number
    /**
     * Sets vertical alignment of a photo
     */
    vertical_align?: VKPhotosPhotoVerticalAlign
}

/**
 *
 */
export interface VKPhotosPhotoAlbum {
    /**
     * Date when the album has been created in Unixtime
     */
    created: number
    /**
     * Photo album description
     */
    description?: string
    /**
     * Photo album ID
     */
    id: number
    /**
     * Album owner's ID
     */
    owner_id: number
    /**
     * Photos number
     */
    size: number
    thumb?: VKPhotosPhoto
    /**
     * Photo album title
     */
    title: string
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated: number
}

/**
 *
 */
export interface VKPhotosPhotoAlbumFull {
    /**
     * Information whether current user can upload photo to the album
     */
    can_upload?: VKBaseBoolInt
    /**
     * Information whether album comments are disabled
     */
    comments_disabled?: VKBaseBoolInt
    /**
     * Date when the album has been created in Unixtime, not set for system albums
     */
    created?: number
    /**
     * Photo album description
     */
    description?: string
    /**
     * album can delete
     */
    can_delete?: boolean
    /**
     * Photo album ID
     */
    id: number
    /**
     * album can be selected to feed
     */
    can_include_to_feed?: boolean
    /**
     * Need show privacy lock at album
     */
    is_locked?: boolean
    /**
     * Album owner's ID
     */
    owner_id: number
    /**
     * Photos number
     */
    size: number
    sizes?: VKPhotosPhotoSizes[]
    /**
     * Thumb photo ID
     */
    thumb_id?: number
    /**
     * Information whether the album thumb is last photo
     */
    thumb_is_last?: VKBaseBoolInt
    /**
     * URL of the thumb image
     */
    thumb_src?: string
    /**
     * Photo album title
     */
    title: string
    /**
     * Date when the album has been updated last time in Unixtime, not set for system albums
     */
    updated?: number
    /**
     * Information whether only community administrators can upload photos
     */
    upload_by_admins_only?: VKBaseBoolInt
}

/**
 *
 */
export interface VKPhotosPhotoSizes {
    /**
     * Height in px
     */
    height: number
    /**
     * URL of the image
     */
    url?: string
    /**
     * URL of the image
     */
    src?: string
    type: VKPhotosPhotoSizesType
    /**
     * Width in px
     */
    width: number
}

/**
 * Size type
 */
export type VKPhotosPhotoSizesType =
    | "t"
    | "s"
    | "m"
    | "x"
    | "o"
    | "p"
    | "q"
    | "r"
    | "k"
    | "l"
    | "y"
    | "z"
    | "c"
    | "w"
    | "a"
    | "b"
    | "e"
    | "i"
    | "d"
    | "j"
    | "temp"
    | "h"
    | "g"
    | "n"
    | "f"
    | "max"
    | "base"
    | "u"
    | "v"
    | "orig"

/**
 *
 */
export interface VKPhotosPhotoTag {
    /**
     * Date when tag has been added in Unixtime
     */
    date: number
    /**
     * Tag ID
     */
    id: number
    /**
     * ID of the tag creator
     */
    placer_id: number
    /**
     * Tag description
     */
    tagged_name: string
    /**
     * Tagged description.
     */
    description?: string
    /**
     * Tagged user ID
     */
    user_id: number
    /**
     * Information whether the tag is reviewed
     */
    viewed: VKBaseBoolInt
    /**
     * Coordinate X of the left upper corner
     */
    x: number
    /**
     * Coordinate X of the right lower corner
     */
    x2: number
    /**
     * Coordinate Y of the left upper corner
     */
    y: number
    /**
     * Coordinate Y of the right lower corner
     */
    y2: number
}

/**
 *
 */
export interface VKPhotosPhotoUpload {
    /**
     * Album ID
     */
    album_id: number
    /**
     * URL to upload photo
     */
    upload_url: string
    /**
     * Fallback URL if upload_url returned error
     */
    fallback_upload_url?: string
    /**
     * User ID
     */
    user_id: number
    /**
     * Group ID
     */
    group_id?: number
}

/**
 *
 */
export interface VKPhotosPhotoXtrTagInfo {
    /**
     * Access key for the photo
     */
    access_key?: string
    /**
     * Album ID
     */
    album_id: number
    /**
     * Date when uploaded
     */
    date: number
    /**
     * Original photo height
     */
    height?: number
    /**
     * Photo ID
     */
    id: number
    /**
     * Latitude
     */
    lat?: number
    /**
     * Longitude
     */
    long?: number
    /**
     * Photo owner's ID
     */
    owner_id: number
    /**
     * URL of image with 1280 px width
     */
    photo_1280?: string
    /**
     * URL of image with 130 px width
     */
    photo_130?: string
    /**
     * URL of image with 2560 px width
     */
    photo_2560?: string
    /**
     * URL of image with 604 px width
     */
    photo_604?: string
    /**
     * URL of image with 75 px width
     */
    photo_75?: string
    /**
     * URL of image with 807 px width
     */
    photo_807?: string
    /**
     * ID of the tag creator
     */
    placer_id?: number
    /**
     * Post ID
     */
    post_id?: number
    sizes?: VKPhotosPhotoSizes[]
    /**
     * Date when tag has been added in Unixtime
     */
    tag_created?: number
    /**
     * Tag ID
     */
    tag_id?: number
    /**
     * Photo caption
     */
    text?: string
    /**
     * ID of the user who have uploaded the photo
     */
    user_id?: number
    /**
     * Original photo width
     */
    width?: number
    /**
     * Whether photo has attached tag links
     */
    has_tags?: boolean
}

/**
 *
 */
export interface VKPhotosTagsSuggestionItem {
    title?: string
    caption?: string
    type?: string
    buttons?: VKPhotosTagsSuggestionItemButton[]
    photo?: VKPhotosPhoto
    tags?: VKPhotosPhotoTag[]
    track_code?: string
}

export type VKPhotosTagsSuggestionItemButtonAction =
    | "confirm"
    | "decline"
    | "show_tags"
export type VKPhotosTagsSuggestionItemButtonStyle = "primary" | "secondary"

/**
 *
 */
export interface VKPhotosTagsSuggestionItemButton {
    title?: string
    action?: VKPhotosTagsSuggestionItemButtonAction
    style?: VKPhotosTagsSuggestionItemButtonStyle
}

/**
 *
 */
export interface VKPodcastCover {
    sizes?: VKPhotosPhotoSizes[]
}

/**
 *
 */
export interface VKPodcastExternalData {
    /**
     * Url of the podcast page
     */
    url?: string
    /**
     * Url of the podcasts owner community
     */
    owner_url?: string
    /**
     * Podcast title
     */
    title?: string
    /**
     * Name of the podcasts owner community
     */
    owner_name?: string
    /**
     * Podcast cover
     */
    cover?: VKPodcastCover
}

/**
 *
 */
export interface VKPollsAnswer {
    /**
     * Answer ID
     */
    id: number
    /**
     * Answer rate in percents
     */
    rate: number
    /**
     * Answer text
     */
    text: string
    /**
     * Votes number
     */
    votes: number
}

export type VKPollsBackgroundType = "gradient" | "tile" | "color"

/**
 *
 */
export interface VKPollsBackground {
    /**
     * Gradient angle with 0 on positive X axis
     */
    angle?: number
    /**
     * Hex color code without #
     */
    color?: string
    /**
     * Original height of pattern tile
     */
    height?: number
    id?: number
    name?: string
    /**
     * Pattern tiles
     */
    images?: VKBaseImage[]
    /**
     * Gradient points
     */
    points?: VKBaseGradientPoint[]
    type?: VKPollsBackgroundType
    /**
     * Original with of pattern tile
     */
    width?: number
}

/**
 *
 */
export interface VKPollsFieldsVoters {
    /**
     * Answer ID
     */
    answer_id?: number
    users?: VKPollsVotersFieldsUsers
    /**
     * Answer offset
     */
    answer_offset?: string
}

/**
 *
 */
export interface VKPollsFriend {
    id: number
}

/**
 *
 */
export interface VKPollsPoll {
    anonymous?: VKPollsPollAnonymous
    friends?: VKPollsFriend[]
    /**
     * Information whether the poll with multiple choices
     */
    multiple: boolean
    /**
     * Current user's answer ID
     */
    answer_id?: number
    end_date: number
    /**
     * Current user's answer IDs
     */
    answer_ids?: number[]
    closed: boolean
    is_board: boolean
    can_edit: boolean
    can_vote: boolean
    can_report: boolean
    can_share: boolean
    embed_hash?: string
    photo?: VKPollsBackground
    answers: VKPollsAnswer[]
    /**
     * Date when poll has been created in Unixtime
     */
    created: number
    /**
     * Poll ID
     */
    id: number
    /**
     * Poll owner's ID
     */
    owner_id: number
    /**
     * Poll author's ID
     */
    author_id?: number
    /**
     * Poll question
     */
    question: string
    background?: VKPollsBackground
    /**
     * Votes number
     */
    votes: number
    disable_unvote: boolean
}

/**
 * Information whether the field is anonymous
 */
export interface VKPollsPollAnonymous {}

/**
 *
 */
export interface VKPollsPollExtended {
    anonymous?: VKPollsPollAnonymous
    friends?: VKPollsFriend[]
    /**
     * Information whether the poll with multiple choices
     */
    multiple: boolean
    /**
     * Current user's answer ID
     */
    answer_id?: number
    end_date: number
    /**
     * Current user's answer IDs
     */
    answer_ids?: number[]
    closed: boolean
    is_board: boolean
    can_edit: boolean
    can_vote: boolean
    can_report: boolean
    can_share: boolean
    embed_hash?: string
    photo?: VKPollsBackground
    answers: VKPollsAnswer[]
    /**
     * Date when poll has been created in Unixtime
     */
    created: number
    /**
     * Poll ID
     */
    id: number
    /**
     * Poll owner's ID
     */
    owner_id: number
    /**
     * Poll author's ID
     */
    author_id?: number
    /**
     * Poll question
     */
    question: string
    background?: VKPollsBackground
    /**
     * Votes number
     */
    votes: number
    disable_unvote: boolean
    profiles?: VKUsersUserFull[]
}

/**
 *
 */
export interface VKPollsVoters {
    /**
     * Answer ID
     */
    answer_id?: number
    users?: VKPollsVotersUsers
    /**
     * Answer offset
     */
    answer_offset?: string
}

/**
 *
 */
export interface VKPollsVotersFieldsUsers {
    /**
     * Votes number
     */
    count?: number
    items?: VKUsersUserFull[]
}

/**
 *
 */
export interface VKPollsVotersUsers {
    /**
     * Votes number
     */
    count?: number
    items?: number[]
}

/**
 *
 */
export type VKPrettyCardsButtonOneOf = VKBaseLinkButton | string

export type VKPrettyCardsPrettyCardInnerType = "prettyCards_prettyCard"

/**
 *
 */
export interface VKPrettyCardsPrettyCard {
    inner_type: VKPrettyCardsPrettyCardInnerType
    /**
     * Button key
     */
    button?: VKPrettyCardsButtonOneOf
    /**
     * Button text in current language
     */
    button_text?: string
    /**
     * Card ID (long int returned as string)
     */
    card_id: string
    images?: VKBaseImage[]
    /**
     * Link URL
     */
    link_url: string
    /**
     * Photo ID (format "<owner_id>_<media_id>")
     */
    photo: string
    /**
     * Price if set (decimal number returned as string)
     */
    price?: string
    /**
     * Old price if set (decimal number returned as string)
     */
    price_old?: string
    /**
     * Title
     */
    title: string
}

/**
 *
 */
export type VKPrettyCardsPrettyCardOrError =
    | VKPrettyCardsPrettyCard
    | VKBaseError

/**
 *
 */
export interface VKSearchHint {
    app?: VKAppsApp
    /**
     * Object description
     */
    description: string
    /**
     * Information whether the object has been found globally
     */
    global?: VKBaseBoolInt
    group?: VKGroupsGroup
    profile?: VKUsersUserMin
    section?: VKSearchHintSection
    type: VKSearchHintType
    link?: VKBaseLink
}

/**
 * Section title
 */
export type VKSearchHintSection =
    | "groups"
    | "events"
    | "publics"
    | "correspondents"
    | "people"
    | "friends"
    | "mutual_friends"
    | "promo"

/**
 * Object type
 */
export type VKSearchHintType =
    | "group"
    | "profile"
    | "vk_app"
    | "app"
    | "html5_game"
    | "link"

/**
 *
 */
export interface VKSecureGiveEventStickerItem {
    user_id?: number
    status?: string
}

/**
 *
 */
export interface VKSecureLevel {
    /**
     * Level
     */
    level?: number
    /**
     * User ID
     */
    uid?: number
}

/**
 *
 */
export interface VKSecureSetCounterItem {
    /**
     * User ID
     */
    id: number
    result: VKBaseBoolInt
}

/**
 *
 */
export interface VKSecureSmsNotification {
    /**
     * Application ID
     */
    app_id?: string
    /**
     * Date when message has been sent in Unixtime
     */
    date?: string
    /**
     * Notification ID
     */
    id?: string
    /**
     * Messsage text
     */
    message?: string
    /**
     * User ID
     */
    user_id?: string
}

/**
 *
 */
export interface VKSecureTokenChecked {
    /**
     * Date when access_token has been generated in Unixtime
     */
    date?: number
    /**
     * Date when access_token will expire in Unixtime
     */
    expire?: number
    /**
     * Returns if successfully processed
     */
    success?: number
    /**
     * User ID
     */
    user_id?: number
}

/**
 *
 */
export interface VKSecureTransaction {
    /**
     * Transaction date in Unixtime
     */
    date?: number
    /**
     * Transaction ID
     */
    id?: number
    /**
     * From ID
     */
    uid_from?: number
    /**
     * To ID
     */
    uid_to?: number
    /**
     * Votes number
     */
    votes?: number
}

/**
 * Activity stats
 */
export interface VKStatsActivity {
    /**
     * Comments number
     */
    comments?: number
    /**
     * Reposts number
     */
    copies?: number
    /**
     * Hidden from news count
     */
    hidden?: number
    /**
     * Likes number
     */
    likes?: number
    /**
     * New subscribers count
     */
    subscribed?: number
    /**
     * Unsubscribed count
     */
    unsubscribed?: number
}

/**
 *
 */
export interface VKStatsCity {
    /**
     * Visitors number
     */
    count?: number
    /**
     * City name
     */
    name?: string
    /**
     * City ID
     */
    value?: number
}

/**
 *
 */
export interface VKStatsCountry {
    /**
     * Country code
     */
    code?: string
    /**
     * Visitors number
     */
    count?: number
    /**
     * Country name
     */
    name?: string
    /**
     * Country ID
     */
    value?: number
}

/**
 *
 */
export interface VKStatsPeriod {
    activity?: VKStatsActivity
    period_from?: VKStatsPeriodFromOneOf
    period_to?: VKStatsPeriodToOneOf
    reach?: VKStatsReach
    visitors?: VKStatsViews
}

/**
 * Unix timestamp
 */
export interface VKStatsPeriodFromOneOf {}

/**
 * Unix timestamp
 */
export interface VKStatsPeriodToOneOf {}

/**
 * Reach stats
 */
export interface VKStatsReach {
    age?: VKStatsSexAge[]
    cities?: VKStatsCity[]
    countries?: VKStatsCountry[]
    /**
     * Reach count from mobile devices
     */
    mobile_reach?: number
    /**
     * Reach count
     */
    reach?: number
    /**
     * Subscribers reach count
     */
    reach_subscribers?: number
    sex?: VKStatsSexAge[]
    sex_age?: VKStatsSexAge[]
}

/**
 *
 */
export interface VKStatsSexAge {
    /**
     * Visitors number
     */
    count?: number
    /**
     * Sex/age value
     */
    value: string
    reach?: number
    reach_subscribers?: number
    count_subscribers?: number
}

/**
 * Views stats
 */
export interface VKStatsViews {
    age?: VKStatsSexAge[]
    cities?: VKStatsCity[]
    countries?: VKStatsCountry[]
    /**
     * Number of views from mobile devices
     */
    mobile_views?: number
    sex?: VKStatsSexAge[]
    sex_age?: VKStatsSexAge[]
    /**
     * Views number
     */
    views?: number
    /**
     * Visitors number
     */
    visitors?: number
}

/**
 *
 */
export interface VKStatsWallpostStat {
    post_id?: number
    /**
     * Hidings number
     */
    hide?: number
    /**
     * People have joined the group
     */
    join_group?: number
    /**
     * Link clickthrough
     */
    links?: number
    /**
     * Subscribers reach
     */
    reach_subscribers?: number
    reach_subscribers_count?: number
    /**
     * Total reach
     */
    reach_total?: number
    reach_total_count?: number
    reach_viral?: number
    reach_ads?: number
    /**
     * Reports number
     */
    report?: number
    /**
     * Clickthrough to community
     */
    to_group?: number
    /**
     * Unsubscribed members
     */
    unsubscribe?: number
    sex_age?: VKStatsSexAge[]
}

/**
 *
 */
export interface VKStatusStatus {
    /**
     * Status text
     */
    text: string
    audio?: VKAudioAudio
}

/**
 *
 */
export interface VKStickersImageSet {
    /**
     * Base URL for images in set
     */
    base_url: string
    /**
     * Version number to be appended to the image URL
     */
    version?: number
    images?: VKBaseImage[]
}

/**
 *
 */
export interface VKStorageValue {
    key: string
    value: string
}

export type VKStoreProductType = "stickers"

/**
 *
 */
export interface VKStoreProduct {
    /**
     * Id of the product
     */
    id: number
    /**
     * Product type
     */
    type: VKStoreProductType
    /**
     * Information whether sticker product wasn't used after being purchased
     */
    is_new?: boolean
    /**
     * Product copyright information
     */
    copyright?: string
    /**
     * Id of the base pack (for sticker pack styles)
     */
    base_id?: number
    /**
     * Array of style ids available for the sticker pack
     */
    style_ids?: number[]
    /**
     * Information whether the product is purchased (1 - yes, 0 - no)
     */
    purchased?: VKBaseBoolInt
    /**
     * Information whether the product is active (1 - yes, 0 - no)
     */
    active?: VKBaseBoolInt
    /**
     * Information whether the product is promoted (1 - yes, 0 - no)
     */
    promoted?: VKBaseBoolInt
    /**
     * Date (Unix time) when the product was purchased
     */
    purchase_date?: number
    /**
     * Title of the product
     */
    title?: string
    stickers?: VKBaseStickerNew[]
    /**
     * Array of style sticker ids (for sticker pack styles)
     */
    style_sticker_ids?: number[]
    /**
     * Array of icon images or icon set object of the product (for stickers product type)
     */
    icon?: VKStoreProductIcon
    /**
     * Array of preview images of the product (for stickers product type)
     */
    previews?: VKBaseImage[]
    /**
     * Information whether the product is an animated sticker pack (for stickers product type)
     */
    has_animation?: boolean
    /**
     * Subtitle of the product
     */
    subtitle?: string
    payment_region?: string
    /**
     * Information whether sticker pack is a vmoji pack
     */
    is_vmoji?: boolean
    title_lang_key?: string
    description_lang_key?: string
    url?: string
    /**
     * Information whether the product is a sticker pack with popup stickers (for stickers product type)
     */
    is_popup?: boolean
}

/**
 *
 */
export type VKStoreProductIcon = VKStickersImageSet

/**
 *
 */
export interface VKStoreStickersKeyword {
    words: string[]
    user_stickers?: VKBaseStickerNew[]
    promoted_stickers?: VKBaseStickerNew[]
    stickers?: VKStoreStickersKeywordSticker[]
}

/**
 *
 */
export interface VKStoreStickersKeywordSticker {
    /**
     * Pack id
     */
    pack_id: number
    /**
     * Sticker id
     */
    sticker_id: number
}

/**
 *
 */
export interface VKStoriesClickableArea {
    x: number
    y: number
}

export type VKStoriesClickableStickerStyle =
    | "transparent"
    | "blue_gradient"
    | "red_gradient"
    | "underline"
    | "blue"
    | "green"
    | "white"
    | "question_reply"
    | "light"
    | "impressive"
    | "dark"
    | "accent_background"
    | "accent_text"
    | "dark_unique"
    | "light_unique"
    | "light_text"
    | "dark_text"
    | "black"
    | "dark_without_bg"
    | "light_without_bg"
    | "rectangle"
    | "circle"
    | "poop"
    | "heart"
    | "star"
    | "album"
    | "horizontal"
    | "equalizer"
    | "header_meta"
    | "preview"
    | "miniature"
    | "fullview"
    | "cta"
    | "sticker"
    | "sticker_and_cta"
    | "accent"
export type VKStoriesClickableStickerType =
    | "hashtag"
    | "mention"
    | "link"
    | "question"
    | "place"
    | "market_item"
    | "music"
    | "story_reply"
    | "owner"
    | "post"
    | "poll"
    | "sticker"
    | "app"
    | "situational_theme"
    | "playlist"
    | "clip"
    | "vk_video"
    | "situational_template"
    | "spoiler"
    | "service_yc_item"
export type VKStoriesClickableStickerSubtype =
    | "market_item"
    | "aliexpress_product"

/**
 *
 */
export interface VKStoriesClickableSticker {
    clickable_area: VKStoriesClickableArea[]
    /**
     * Clickable sticker ID
     */
    id: number
    hashtag?: string
    link_object?: VKBaseLink
    mention?: string
    tooltip_text?: string
    owner_id?: number
    story_id?: number
    clip_id?: number
    video_id?: number
    question?: string
    question_button?: string
    place_id?: number
    market_item?: VKMarketMarketItem
    audio?: VKAudioAudio
    audio_start_time?: number
    style?: VKStoriesClickableStickerStyle
    type: VKStoriesClickableStickerType
    subtype?: VKStoriesClickableStickerSubtype
    post_owner_id?: number
    post_id?: number
    poll?: VKPollsPoll
    /**
     * Color, hex format
     */
    color?: string
    /**
     * Sticker ID
     */
    sticker_id?: number
    /**
     * Sticker pack ID
     */
    sticker_pack_id?: number
    app?: VKAppsAppMin
    /**
     * Additional context for app sticker
     */
    app_context?: string
    /**
     * Whether current user has unread interaction with this app
     */
    has_new_interactions?: boolean
    /**
     * Whether current user allowed broadcast notify from this app
     */
    is_broadcast_notify_allowed?: boolean
    situational_theme_id?: number
    situational_app_url?: string
}

/**
 *
 */
export interface VKStoriesClickableStickers {
    clickable_stickers: VKStoriesClickableSticker[]
    original_height: number
    original_width: number
}

export type VKStoriesFeedItemType =
    | "promo_stories"
    | "stories"
    | "live_active"
    | "live_finished"
    | "app_grouped_stories"
    | "discover"

/**
 *
 */
export interface VKStoriesFeedItem {
    /**
     * Type of Feed Item
     */
    type: VKStoriesFeedItemType
    id?: string
    owner_id?: number
    /**
     * Author stories
     */
    stories?: VKStoriesStory[]
    /**
     * Grouped stories of various authors (for types community_grouped_stories/app_grouped_stories type)
     */
    grouped?: VKStoriesFeedItem[]
    /**
     * App, which stories has been grouped (for type app_grouped_stories)
     */
    app?: VKAppsAppMin
    /**
     * Additional data for promo stories (for type promo_stories)
     */
    promo_data?: VKStoriesPromoBlock
    track_code?: string
    has_unseen?: boolean
    name?: string
}

/**
 * Additional data for promo stories
 */
export interface VKStoriesPromoBlock {
    /**
     * Promo story title
     */
    name: string
    /**
     * RL of square photo of the story with 50 pixels in width
     */
    photo_50: string
    /**
     * RL of square photo of the story with 100 pixels in width
     */
    photo_100: string
    /**
     * Hide animation for promo story
     */
    not_animated: boolean
    /**
     * Promo story from advice
     */
    is_advice: boolean
}

/**
 *
 */
export interface VKStoriesReplies {
    /**
     * Replies number.
     */
    count: number
    /**
     * New replies number.
     */
    new?: number
}

/**
 *
 */
export interface VKStoriesStory {
    /**
     * Access key for private object.
     */
    access_key?: string
    /**
     * Information whether current user can comment the story (0 - no, 1 - yes).
     */
    can_comment?: VKBaseBoolInt
    /**
     * Information whether current user can reply to the story (0 - no, 1 - yes).
     */
    can_reply?: VKBaseBoolInt
    /**
     * Information whether current user can see the story (0 - no, 1 - yes).
     */
    can_see?: VKBaseBoolInt
    /**
     * Information whether current user can like the story.
     */
    can_like?: boolean
    /**
     * Information whether current user can share the story (0 - no, 1 - yes).
     */
    can_share?: VKBaseBoolInt
    /**
     * Information whether current user can hide the story (0 - no, 1 - yes).
     */
    can_hide?: VKBaseBoolInt
    /**
     * Date when story has been added in Unixtime.
     */
    date?: number
    /**
     * Story expiration time. Unixtime.
     */
    expires_at?: number
    /**
     * Story ID.
     */
    id: number
    /**
     * Information whether the story is deleted (false - no, true - yes).
     */
    is_deleted?: boolean
    /**
     * Information whether the story is expired (false - no, true - yes).
     */
    is_expired?: boolean
    link?: VKStoriesStoryLink
    /**
     * Story owner's ID.
     */
    owner_id: number
    parent_story?: VKStoriesStory
    /**
     * Access key for private object.
     */
    parent_story_access_key?: string
    /**
     * Parent story ID.
     */
    parent_story_id?: number
    /**
     * Parent story owner's ID.
     */
    parent_story_owner_id?: number
    photo?: VKPhotosPhoto
    /**
     * url with blured preview image.
     */
    blurred_preview?: string
    /**
     * Replies counters to current story.
     */
    replies?: VKStoriesReplies
    /**
     * Information whether current user has seen the story or not (0 - no, 1 - yes).
     */
    seen?: VKBaseBoolInt
    type?: VKStoriesStoryType
    clickable_stickers?: VKStoriesClickableStickers
    video?: VKVideoVideoFull
    /**
     * Views number.
     */
    views?: number
    /**
     * Information whether story has question sticker and current user can send question to the author
     */
    can_ask?: VKBaseBoolInt
    /**
     * Information whether story has question sticker and current user can send anonymous question to the author
     */
    can_ask_anonymous?: VKBaseBoolInt
    narratives_count?: number
    first_narrative_title?: string
    first_narrative_id?: number
    can_use_in_narrative?: boolean
}

/**
 *
 */
export interface VKStoriesStoryLink {
    /**
     * Link text
     */
    text: string
    /**
     * Link URL
     */
    url: string
    /**
     * How to open url
     */
    link_url_target?: string
}

/**
 *
 */
export interface VKStoriesStoryStats {
    answer: VKStoriesStoryStatsStat
    bans: VKStoriesStoryStatsStat
    open_link: VKStoriesStoryStatsStat
    replies: VKStoriesStoryStatsStat
    shares: VKStoriesStoryStatsStat
    subscribers: VKStoriesStoryStatsStat
    views: VKStoriesStoryStatsStat
    likes: VKStoriesStoryStatsStat
}

/**
 *
 */
export interface VKStoriesStoryStatsStat {
    /**
     * Stat value
     */
    count?: number
    state: VKStoriesStoryStatsState
}

/**
 * Statistic state
 */
export type VKStoriesStoryStatsState = "on" | "off" | "hidden"

/**
 * Story type.
 */
export type VKStoriesStoryType =
    | "photo"
    | "video"
    | "live_active"
    | "live_finished"

/**
 *
 */
export type VKStoriesUploadLinkText =
    | "to_store"
    | "vote"
    | "more"
    | "book"
    | "order"
    | "enroll"
    | "fill"
    | "signup"
    | "buy"
    | "ticket"
    | "write"
    | "open"
    | "learn_more"
    | "view"
    | "go_to"
    | "contact"
    | "watch"
    | "play"
    | "install"
    | "read"
    | "calendar"
    | "market_online_booking"
    | "market_link"
    | "message_to_bc"

/**
 *
 */
export interface VKStoriesUploadResult {
    upload_result?: string
}

/**
 *
 */
export interface VKStoriesViewersItem {
    /**
     * user has like for this object
     */
    is_liked: boolean
    /**
     * user id
     */
    user_id: number
    user?: VKUsersUserFull
}

export type VKStreamingStatsEventType = "post" | "comment" | "share"

/**
 *
 */
export interface VKStreamingStats {
    /**
     * Events type
     */
    event_type: VKStreamingStatsEventType
    /**
     * Statistics
     */
    stats: VKStreamingStatsPoint[]
}

/**
 *
 */
export interface VKStreamingStatsPoint {
    timestamp: number
    value: number
}

/**
 *
 */
export interface VKUsersCareer {
    /**
     * City ID
     */
    city_id?: number
    /**
     * City name
     */
    city_name?: string
    /**
     * Company name
     */
    company?: string
    /**
     * From year
     */
    from?: number
    /**
     * Community ID
     */
    group_id?: number
    /**
     * Career ID
     */
    id?: number
    /**
     * Position
     */
    position?: string
    /**
     * Till year
     */
    until?: number
}

/**
 *
 */
export interface VKUsersExports {
    facebook?: number
    livejournal?: number
    twitter?: number
}

/**
 *
 */
export type VKUsersFields =
    | "first_name_nom"
    | "first_name_gen"
    | "first_name_dat"
    | "first_name_acc"
    | "first_name_ins"
    | "first_name_abl"
    | "last_name_nom"
    | "last_name_gen"
    | "last_name_dat"
    | "last_name_acc"
    | "last_name_ins"
    | "last_name_abl"
    | "photo_id"
    | "verified"
    | "sex"
    | "bdate"
    | "bdate_visibility"
    | "city"
    | "home_town"
    | "has_photo"
    | "photo"
    | "photo_rec"
    | "photo_50"
    | "photo_100"
    | "photo_200_orig"
    | "photo_200"
    | "photo_400"
    | "photo_400_orig"
    | "photo_big"
    | "photo_medium"
    | "photo_medium_rec"
    | "photo_max"
    | "photo_max_orig"
    | "photo_max_size"
    | "third_party_buttons"
    | "online"
    | "lists"
    | "domain"
    | "has_mobile"
    | "contacts"
    | "language"
    | "site"
    | "education"
    | "universities"
    | "schools"
    | "status"
    | "last_seen"
    | "followers_count"
    | "counters"
    | "common_count"
    | "online_info"
    | "occupation"
    | "nickname"
    | "relatives"
    | "relation"
    | "personal"
    | "connections"
    | "exports"
    | "wall_comments"
    | "wall_default"
    | "activities"
    | "activity"
    | "interests"
    | "music"
    | "movies"
    | "tv"
    | "books"
    | "is_no_index"
    | "no_index"
    | "games"
    | "about"
    | "quotes"
    | "can_post"
    | "can_see_all_posts"
    | "can_see_audio"
    | "can_see_gifts"
    | "work"
    | "places"
    | "can_write_private_message"
    | "can_send_friend_request"
    | "can_upload_doc"
    | "can_ban"
    | "is_favorite"
    | "is_hidden_from_feed"
    | "timezone"
    | "screen_name"
    | "maiden_name"
    | "crop_photo"
    | "is_friend"
    | "is_best_friend"
    | "friend_status"
    | "career"
    | "military"
    | "blacklisted"
    | "blacklisted_by_me"
    | "can_subscribe_posts"
    | "descriptions"
    | "trending"
    | "mutual"
    | "friendship_weeks"
    | "can_invite_to_chats"
    | "stories_archive_count"
    | "has_unseen_stories"
    | "video_live"
    | "video_live_level"
    | "video_live_count"
    | "clips_count"
    | "service_description"
    | "can_see_wishes"
    | "is_subscribed_podcasts"
    | "can_subscribe_podcasts"
    | "animated_avatar"
    | "owner_state"
    | "is_verified"
    | "oauth_linked"
    | "oauth_verification"
    | "promotion_allowance"

/**
 *
 */
export interface VKUsersLastSeen {
    /**
     * Type of the platform that used for the last authorization
     */
    platform?: number
    /**
     * Last visit date (in Unix time)
     */
    time?: number
}

/**
 *
 */
export interface VKUsersMilitary {
    /**
     * From year
     */
    from?: number
    /**
     * Military ID
     */
    id?: number
    /**
     * Unit name
     */
    unit: string
    /**
     * Unit ID
     */
    unit_id: number
    /**
     * Till year
     */
    until?: number
}

export type VKUsersOccupationType = "school" | "university" | "work"

/**
 *
 */
export interface VKUsersOccupation {
    /**
     * ID of school, university, company group
     */
    id?: number
    /**
     * Name of occupation
     */
    name?: string
    /**
     * Type of occupation
     */
    type?: VKUsersOccupationType
    graduate_year?: number
    city_id?: number
}

export type VKUsersOnlineInfoStatus =
    | "recently"
    | "last_week"
    | "last_month"
    | "long_ago"
    | "not_show"

/**
 *
 */
export interface VKUsersOnlineInfo {
    /**
     * Whether you can see real online status of user or not
     */
    visible: boolean
    /**
     * Last time we saw user being active
     */
    last_seen?: number
    /**
     * Whether user is currently online or not
     */
    is_online?: boolean
    /**
     * Application id from which user is currently online or was last seen online
     */
    app_id?: number
    /**
     * Is user online from desktop app or mobile app
     */
    is_mobile?: boolean
    /**
     * In case user online is not visible, it indicates approximate timeframe of user online
     */
    status?: VKUsersOnlineInfoStatus
}

/**
 *
 */
export interface VKUsersPersonal {
    /**
     * User's views on alcohol
     */
    alcohol?: number
    /**
     * User's inspired by
     */
    inspired_by?: string
    langs?: string[]
    /**
     * User's languages with full info
     */
    langs_full?: VKDatabaseLanguageFull[]
    /**
     * User's personal priority in life
     */
    life_main?: number
    /**
     * User's personal priority in people
     */
    people_main?: number
    /**
     * User's political views
     */
    political?: number
    /**
     * User's religion
     */
    religion?: string
    /**
     * User's religion id
     */
    religion_id?: number
    /**
     * User's views on smoking
     */
    smoking?: number
}

export type VKUsersRelativeType =
    | "parent"
    | "child"
    | "grandparent"
    | "grandchild"
    | "sibling"

/**
 *
 */
export interface VKUsersRelative {
    /**
     * Date of child birthday (format dd.mm.yyyy)
     */
    birth_date?: string
    /**
     * Relative ID
     */
    id?: number
    /**
     * Name of relative
     */
    name?: string
    /**
     * Relative type
     */
    type: VKUsersRelativeType
}

/**
 *
 */
export interface VKUsersSchool {
    /**
     * City ID
     */
    city?: number
    /**
     * School class letter
     */
    class?: string
    /**
     * School class id
     */
    class_id?: number
    /**
     * School ID
     */
    id?: string
    /**
     * School name
     */
    name?: string
    /**
     * School type ID
     */
    type?: number
    /**
     * School type name
     */
    type_str?: string
    /**
     * Year the user started to study
     */
    year_from?: number
    /**
     * Graduation year
     */
    year_graduated?: number
    /**
     * Year the user finished to study
     */
    year_to?: number
    speciality?: string
}

/**
 *
 */
export type VKUsersSubscriptionsItem = VKUsersUserFull | VKGroupsGroupFull

/**
 *
 */
export interface VKUsersUniversity {
    /**
     * Chair ID
     */
    chair?: number
    /**
     * Chair name
     */
    chair_name?: string
    /**
     * City ID
     */
    city?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * Education form id
     */
    education_form_id?: number
    /**
     * Education status
     */
    education_status?: string
    /**
     * Education status id
     */
    education_status_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * University ID
     */
    id?: number
    /**
     * University name
     */
    name?: string
    university_group_id?: number
}

/**
 *
 */
export interface VKUsersUser {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
}

/**
 *
 */
export interface VKUsersUserConnections {
    /**
     * User's Skype nickname
     */
    skype: string
    /**
     * User's Facebook account
     */
    facebook: string
    /**
     * User's Facebook name
     */
    facebook_name?: string
    /**
     * User's Twitter account
     */
    twitter: string
    /**
     * User's Livejournal account
     */
    livejournal?: string
    /**
     * User's Instagram account
     */
    instagram: string
}

/**
 *
 */
export interface VKUsersUserCounters {
    /**
     * Albums number
     */
    albums?: number
    /**
     * Badges number
     */
    badges?: number
    /**
     * Audios number
     */
    audios?: number
    /**
     * Followers number
     */
    followers?: number
    /**
     * Friends number
     */
    friends?: number
    /**
     * Gifts number
     */
    gifts?: number
    /**
     * Communities number
     */
    groups?: number
    /**
     * Notes number
     */
    notes?: number
    /**
     * Online friends number
     */
    online_friends?: number
    /**
     * Public pages number
     */
    pages?: number
    /**
     * Photos number
     */
    photos?: number
    /**
     * Subscriptions number
     */
    subscriptions?: number
    /**
     * Number of photos with user
     */
    user_photos?: number
    /**
     * Number of videos with user
     */
    user_videos?: number
    /**
     * Videos number
     */
    videos?: number
    /**
     * Playlists number
     */
    video_playlists?: number
    new_photo_tags?: number
    new_recognition_tags?: number
    mutual_friends?: number
    friends_followers?: number
    posts?: number
    articles?: number
    wishes?: number
    podcasts?: number
    clips?: number
    clips_followers?: number
    /**
     * Videos followers number
     */
    videos_followers?: number
    clips_views?: number
    clips_likes?: number
}

export type VKUsersUserFullWallDefault = "owner" | "all"

/**
 *
 */
export interface VKUsersUserFull {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKUsersUserType
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKUsersUserFullWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
}

/**
 *
 */
export interface VKUsersUserMin {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
}

/**
 *
 *
 * - `0` — not specified
 * - `1` — single
 * - `2` — in a relationship
 * - `3` — engaged
 * - `4` — married
 * - `5` — complicated
 * - `6` — actively searching
 * - `7` — in love
 * - `8` — in a civil union
 */
export type VKUsersUserRelation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 *
 */
export interface VKUsersUserSettingsXtr {
    connections?: VKUsersUserConnections
    /**
     * User's date of birth
     */
    bdate?: string
    /**
     * Information whether user's birthdate are hidden
     */
    bdate_visibility?: number
    city?: VKBaseCity
    /**
     * User first name
     */
    first_name?: string
    /**
     * User's hometown
     */
    home_town: string
    /**
     * User last name
     */
    last_name?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    name_request?: VKAccountNameRequest
    personal?: VKUsersPersonal
    /**
     * User phone number with some hidden digits
     */
    phone?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    /**
     * Information whether relation status is pending
     */
    relation_pending?: VKBaseBoolInt
    relation_requests?: VKUsersUserMin[]
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * User status
     */
    status: string
    status_audio?: VKAudioAudio
    interests?: VKAccountUserSettingsInterests
    languages?: string[]
}

/**
 * Object type
 */
export type VKUsersUserType = "profile"

export type VKUsersUserXtrTypeWallDefault = "owner" | "all"

/**
 *
 */
export interface VKUsersUserXtrType {
    /**
     * Returns if a profile is deleted or blocked
     */
    deactivated?: string
    /**
     * User first name
     */
    first_name?: string
    /**
     * Returns if a profile is hidden.
     */
    hidden?: number
    /**
     * User ID
     */
    id: number
    /**
     * User last name
     */
    last_name?: string
    can_access_closed?: boolean
    is_closed?: boolean
    /**
     * User sex
     */
    sex?: VKBaseSex
    /**
     * Domain name of the user's page
     */
    screen_name?: string
    /**
     * URL of square photo of the user with 50 pixels in width
     */
    photo_50?: string
    /**
     * URL of square photo of the user with 100 pixels in width
     */
    photo_100?: string
    online_info?: VKUsersOnlineInfo
    /**
     * Information whether the user is online
     */
    online?: VKBaseBoolInt
    /**
     * Information whether the user is online in mobile site or application
     */
    online_mobile?: VKBaseBoolInt
    /**
     * Application ID
     */
    online_app?: number
    /**
     * Information whether the user is verified
     */
    verified?: VKBaseBoolInt
    /**
     * Information whether the user has a "fire" pictogram.
     */
    trending?: VKBaseBoolInt
    friend_status?: VKFriendsFriendStatusStatus
    mutual?: VKFriendsRequestsMutual
    /**
     * User's first name in nominative case
     */
    first_name_nom?: string
    /**
     * User's first name in genitive case
     */
    first_name_gen?: string
    /**
     * User's first name in dative case
     */
    first_name_dat?: string
    /**
     * User's first name in accusative case
     */
    first_name_acc?: string
    /**
     * User's first name in instrumental case
     */
    first_name_ins?: string
    /**
     * User's first name in prepositional case
     */
    first_name_abl?: string
    /**
     * User's last name in nominative case
     */
    last_name_nom?: string
    /**
     * User's last name in genitive case
     */
    last_name_gen?: string
    /**
     * User's last name in dative case
     */
    last_name_dat?: string
    /**
     * User's last name in accusative case
     */
    last_name_acc?: string
    /**
     * User's last name in instrumental case
     */
    last_name_ins?: string
    /**
     * User's last name in prepositional case
     */
    last_name_abl?: string
    /**
     * User nickname
     */
    nickname?: string
    /**
     * User maiden name
     */
    maiden_name?: string
    /**
     * User contact name
     */
    contact_name?: string
    /**
     * Domain name of the user's page
     */
    domain?: string
    /**
     * User's date of birth
     */
    bdate?: string
    city?: VKBaseCity
    /**
     * User's timezone
     */
    timezone?: number
    owner_state?: VKOwnerState
    /**
     * URL of square photo of the user with 200 pixels in width
     */
    photo_200?: string
    /**
     * URL of square photo of the user with maximum width
     */
    photo_max?: string
    /**
     * URL of user's photo with 200 pixels in width
     */
    photo_200_orig?: string
    /**
     * URL of user's photo with 400 pixels in width
     */
    photo_400_orig?: string
    /**
     * URL of user's photo of maximum size
     */
    photo_max_orig?: string
    /**
     * ID of the user's main photo
     */
    photo_id?: string
    /**
     * Information whether the user has main photo
     */
    has_photo?: VKBaseBoolInt
    /**
     * Information whether the user specified his phone number
     */
    has_mobile?: VKBaseBoolInt
    /**
     * Information whether the user is a friend of current user
     */
    is_friend?: VKBaseBoolInt
    /**
     * Information whether the user is a best friend of current user
     */
    is_best_friend?: boolean
    /**
     * Information whether current user can comment wall posts
     */
    wall_comments?: VKBaseBoolInt
    /**
     * Information whether current user can post on the user's wall
     */
    can_post?: VKBaseBoolInt
    /**
     * Information whether current user can see other users' audio on the wall
     */
    can_see_all_posts?: VKBaseBoolInt
    /**
     * Information whether current user can see the user's audio
     */
    can_see_audio?: VKBaseBoolInt
    type?: VKUsersUserType
    email?: string
    skype?: string
    facebook?: string
    facebook_name?: string
    twitter?: string
    livejournal?: string
    instagram?: string
    test?: VKBaseBoolInt
    video_live?: VKVideoLiveInfo
    is_video_live_notifications_blocked?: VKBaseBoolInt
    is_service?: boolean
    service_description?: string
    photo_rec?: string | boolean
    photo_medium?: string | boolean
    photo_medium_rec?: string | boolean
    photo?: string
    photo_big?: string
    photo_400?: string
    photo_max_size?: VKPhotosPhoto
    language?: string
    stories_archive_count?: number
    has_unseen_stories?: boolean
    wall_default?: VKUsersUserXtrTypeWallDefault
    /**
     * Information whether current user can call
     */
    can_call?: boolean
    /**
     * Information whether group can call user
     */
    can_call_from_group?: boolean
    /**
     * Information whether user/group can invite user as voicerooms speakr
     */
    can_invite_as_voicerooms_speaker?: boolean
    /**
     * Information whether current user can see the user's wishes
     */
    can_see_wishes?: boolean
    /**
     * Information whether current user can see the user's gifts
     */
    can_see_gifts?: VKBaseBoolInt
    interests?: string
    books?: string
    tv?: string
    quotes?: string
    about?: string
    games?: string
    movies?: string
    activities?: string
    music?: string
    /**
     * Information whether current user can write private message
     */
    can_write_private_message?: VKBaseBoolInt
    /**
     * Information whether current user can send a friend request
     */
    can_send_friend_request?: VKBaseBoolInt
    /**
     * Information whether current user can be invited to the community
     */
    can_be_invited_group?: boolean
    /**
     * User's mobile phone number
     */
    mobile_phone?: string
    /**
     * User's additional phone number
     */
    home_phone?: string
    /**
     * User's website
     */
    site?: string
    status_audio?: VKAudioAudio
    /**
     * User's status
     */
    status?: string
    /**
     * User's status
     */
    activity?: string
    status_app?: VKAppsAppMin
    last_seen?: VKUsersLastSeen
    exports?: VKUsersExports
    crop_photo?: VKBaseCropPhoto
    /**
     * Number of user's followers and friends
     */
    followers_count?: number
    /**
     * User level in live streams achievements
     */
    video_live_level?: number
    /**
     * Number of user's live streams
     */
    video_live_count?: number
    /**
     * Number of user's clips
     */
    clips_count?: number
    /**
     * Information whether current user is in the requested user's blacklist.
     */
    blacklisted?: VKBaseBoolInt
    /**
     * Information whether the requested user is in current user's blacklist
     */
    blacklisted_by_me?: VKBaseBoolInt
    /**
     * Information whether the requested user is in faves of current user
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Information whether the requested user is hidden from current user's newsfeed
     */
    is_hidden_from_feed?: VKBaseBoolInt
    /**
     * Number of common friends with current user
     */
    common_count?: number
    occupation?: VKUsersOccupation
    career?: VKUsersCareer[]
    military?: VKUsersMilitary[]
    /**
     * University ID
     */
    university?: number
    /**
     * University name
     */
    university_name?: string
    university_group_id?: number
    /**
     * Faculty ID
     */
    faculty?: number
    /**
     * Faculty name
     */
    faculty_name?: string
    /**
     * Graduation year
     */
    graduation?: number
    /**
     * Education form
     */
    education_form?: string
    /**
     * User's education status
     */
    education_status?: string
    /**
     * User hometown
     */
    home_town?: string
    /**
     * User relationship status
     */
    relation?: VKUsersUserRelation
    relation_partner?: VKUsersUserMin
    personal?: VKUsersPersonal
    universities?: VKUsersUniversity[]
    schools?: VKUsersSchool[]
    relatives?: VKUsersRelative[]
    /**
     * Information whether current user is subscribed to podcasts
     */
    is_subscribed_podcasts?: boolean
    /**
     * Owner in whitelist or not
     */
    can_subscribe_podcasts?: boolean
    /**
     * Can subscribe to wall
     */
    can_subscribe_posts?: boolean
    counters?: VKUsersUserCounters
    access_key?: string
    can_upload_doc?: VKBaseBoolInt
    /**
     * Information whether the user can be baned (added to black list) by me
     */
    can_ban?: boolean
    hash?: string
    /**
     * Access to user profile is restricted for search engines
     */
    is_no_index?: boolean
    /**
     * Contact person ID
     */
    contact_id?: number
    is_message_request?: boolean
    descriptions?: string[]
    lists?: number[]
}

/**
 *
 */
export interface VKUsersUsersArray {
    /**
     * Users number
     */
    count: number
    items: number[]
}

/**
 *
 */
export interface VKUtilsDomainResolved {
    /**
     * Object ID
     */
    object_id?: number
    /**
     * Group ID
     */
    group_id?: number
    type?: VKUtilsDomainResolvedType
}

/**
 * Object type
 */
export type VKUtilsDomainResolvedType =
    | "user"
    | "group"
    | "application"
    | "event"
    | "page"
    | "vk_app"
    | "community_application"

/**
 *
 */
export interface VKUtilsLastShortenedLink {
    /**
     * Access key for private stats
     */
    access_key?: string
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string
    /**
     * Short link URL
     */
    short_url?: string
    /**
     * Creation time in Unixtime
     */
    timestamp?: number
    /**
     * Full URL
     */
    url?: string
    /**
     * Total views number
     */
    views?: number
}

/**
 *
 */
export interface VKUtilsLinkChecked {
    /**
     * Link URL
     */
    link?: string
    status?: VKUtilsLinkCheckedStatus
}

/**
 * Link status
 */
export type VKUtilsLinkCheckedStatus = "not_banned" | "banned" | "processing"

/**
 *
 */
export interface VKUtilsLinkStats {
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string
    stats?: VKUtilsStats[]
}

/**
 *
 */
export interface VKUtilsLinkStatsExtended {
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string
    stats?: VKUtilsStatsExtended[]
}

/**
 *
 */
export interface VKUtilsShortLink {
    /**
     * Access key for private stats
     */
    access_key?: string
    /**
     * Link key (characters after vk.cc/)
     */
    key?: string
    /**
     * Short link URL
     */
    short_url?: string
    /**
     * Full URL
     */
    url?: string
}

/**
 *
 */
export interface VKUtilsStats {
    /**
     * Start time
     */
    timestamp?: number
    /**
     * Total views number
     */
    views?: number
}

/**
 *
 */
export interface VKUtilsStatsCity {
    /**
     * City ID
     */
    city_id?: number
    /**
     * Views number
     */
    views?: number
}

/**
 *
 */
export interface VKUtilsStatsCountry {
    /**
     * Country ID
     */
    country_id?: number
    /**
     * Views number
     */
    views?: number
}

/**
 *
 */
export interface VKUtilsStatsExtended {
    cities?: VKUtilsStatsCity[]
    countries?: VKUtilsStatsCountry[]
    sex_age?: VKUtilsStatsSexAge[]
    /**
     * Start time
     */
    timestamp?: number
    /**
     * Total views number
     */
    views?: number
}

/**
 *
 */
export interface VKUtilsStatsSexAge {
    /**
     * Age denotation
     */
    age_range?: string
    /**
     *  Views by female users
     */
    female?: number
    /**
     *  Views by male users
     */
    male?: number
}

/**
 *
 */
export interface VKVideoEpisode {
    /**
     * Seconds from start of the video
     */
    time?: number
    /**
     * Description of episode
     */
    text?: string
}

/**
 *
 */
export interface VKVideoLiveCategory {
    id: number
    label: string
    sublist?: VKVideoLiveCategory[]
}

/**
 *
 */
export interface VKVideoLiveInfo {
    enabled: VKBaseBoolInt
    is_notifications_blocked?: VKBaseBoolInt
}

/**
 * Video live settings
 */
export interface VKVideoLiveSettings {
    /**
     * If user car rewind live or not
     */
    can_rewind?: VKBaseBoolInt
    /**
     * If live is endless or not
     */
    is_endless?: VKBaseBoolInt
    /**
     * Max possible time for rewind
     */
    max_duration?: number
    /**
     * If live in clips apps
     */
    is_clips_live?: VKBaseBoolInt
}

/**
 *
 *
 * - `all` — all
 * - `friends` — friends
 * - `friends_of_friends` — friends of friends
 * - `friends_of_friends_only` — friends of friends only
 * - `only_me` — only me
 */
export type VKVideoPlaylistPrivacyCategory =
    | "all"
    | "friends"
    | "friends_of_friends"
    | "friends_of_friends_only"
    | "only_me"

/**
 *
 */
export interface VKVideoSaveResult {
    /**
     * Video access key
     */
    access_key?: string
    /**
     * Video description
     */
    description?: string
    /**
     * Video owner ID
     */
    owner_id?: number
    /**
     * Video title
     */
    title?: string
    /**
     * URL for the video uploading
     */
    upload_url?: string
    /**
     * Video ID
     */
    video_id?: number
}

/**
 *
 */
export interface VKVideoStreamInputParams {
    url?: string
    key?: string
    okmp_url?: string
    webrtc_url?: string
}

export type VKVideoVideoResponseType = "min" | "full"
export type VKVideoVideoType =
    | "interactive"
    | "video"
    | "music_video"
    | "movie"
    | "live"
    | "short_video"
    | "story"
    | "video_message"

/**
 *
 */
export interface VKVideoVideo {
    response_type?: VKVideoVideoResponseType
    /**
     * Video access key
     */
    access_key?: string
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date?: number
    /**
     * Information whether current user can comment the video
     */
    can_comment?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video
     */
    can_edit?: VKBaseBoolInt
    /**
     * Information whether current user can delete the video
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can like the video
     */
    can_like?: VKBaseBoolInt
    /**
     * Information whether current user can repost the video
     */
    can_repost?: number
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe?: VKBaseBoolInt
    /**
     * Information whether current user can promote the video
     */
    can_be_promoted?: VKBaseBoolInt
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves?: VKBaseBoolInt
    /**
     * Information whether current user can add the video
     */
    can_add?: VKBaseBoolInt
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video privacy
     */
    can_edit_privacy?: VKBaseBoolInt
    /**
     * 1 if video is private
     */
    is_private?: VKBaseBoolInt
    /**
     * Number of comments
     */
    comments?: number
    /**
     * Date when video has been uploaded in Unixtime
     */
    date?: number
    /**
     * Video description
     */
    description?: string
    /**
     * Video duration in seconds
     */
    duration?: number
    image?: VKVideoVideoImage[]
    first_frame?: VKVideoVideoImage[]
    /**
     * Video width
     */
    width?: number
    /**
     * Video height
     */
    height?: number
    /**
     * Video ID
     */
    id?: number
    /**
     * Video owner ID
     */
    owner_id?: number
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id?: number
    /**
     * Video title
     */
    title?: string
    /**
     * Whether video is added to bookmarks
     */
    is_favorite?: boolean
    /**
     * Video embed URL
     */
    player?: string
    /**
     * Returns if the video is processing
     */
    processing?: VKBasePropertyExists
    /**
     * 1 if  video is being converted
     */
    converting?: VKBaseBoolInt
    /**
     * 1 if video is added to user's albums
     */
    added?: VKBaseBoolInt
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed?: VKBaseBoolInt
    track_code?: string
    /**
     * Information whether the video is repeated
     */
    repeat?: VKBasePropertyExists
    type?: VKVideoVideoType
    /**
     * Number of views
     */
    views?: number
    /**
     * If video is external, number of views on vk
     */
    local_views?: number
    /**
     * Restriction code
     */
    content_restricted?: number
    /**
     * Restriction text
     */
    content_restricted_message?: string
    /**
     * Live donations balance
     */
    balance?: number
    /**
     * 1 if the video is a live stream
     */
    live?: VKBasePropertyExists
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming?: VKBasePropertyExists
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time?: number
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify?: VKBaseBoolInt
    /**
     * Number of spectators of the stream
     */
    spectators?: number
    /**
     * External platform
     */
    platform?: string
    likes?: VKBaseLikes
    reposts?: VKBaseRepostsInfo
}

export type VKVideoVideoAlbumResponseType = "min" | "full"

/**
 *
 */
export interface VKVideoVideoAlbum {
    /**
     * Album ID
     */
    id: number
    /**
     * Album owner's ID
     */
    owner_id: number
    /**
     * Album title
     */
    title: string
    /**
     * Album trackcode
     */
    track_code?: string
    response_type?: VKVideoVideoAlbumResponseType
}

export type VKVideoVideoAlbumFullResponseType = "min" | "full"

/**
 *
 */
export interface VKVideoVideoAlbumFull {
    /**
     * Album ID
     */
    id: number
    /**
     * Album owner's ID
     */
    owner_id: number
    /**
     * Album title
     */
    title: string
    /**
     * Album trackcode
     */
    track_code?: string
    response_type?: VKVideoVideoAlbumFullResponseType
    /**
     * Total number of videos in album
     */
    count: number
    /**
     * Album cover image in different sizes
     */
    image?: VKVideoVideoImage[]
    /**
     * Need blur album thumb or not
     */
    image_blur?: VKBasePropertyExists
    /**
     * Information whether album is system
     */
    is_system?: VKBasePropertyExists
    /**
     * Date when the album has been updated last time in Unixtime
     */
    updated_time: number
    /**
     * Is user can edit playlist
     */
    can_edit?: VKBaseBoolInt
    /**
     * Is user can delete playlist
     */
    can_delete?: VKBaseBoolInt
    /**
     * Is user can upload video to playlist
     */
    can_upload?: VKBaseBoolInt
}

/**
 *
 */
export interface VKVideoVideoFiles {
    /**
     * URL of the external player
     */
    external?: string
    /**
     * URL of the mpeg4 file with 144p quality
     */
    mp4_144?: string
    /**
     * URL of the mpeg4 file with 240p quality
     */
    mp4_240?: string
    /**
     * URL of the mpeg4 file with 360p quality
     */
    mp4_360?: string
    /**
     * URL of the mpeg4 file with 480p quality
     */
    mp4_480?: string
    /**
     * URL of the mpeg4 file with 720p quality
     */
    mp4_720?: string
    /**
     * URL of the mpeg4 file with 1080p quality
     */
    mp4_1080?: string
    /**
     * URL of the mpeg4 file with 2K quality
     */
    mp4_1440?: string
    /**
     * URL of the mpeg4 file with 4K quality
     */
    mp4_2160?: string
    /**
     * URL of the flv file with 320p quality
     */
    flv_320?: string
}

export type VKVideoVideoFullResponseType = "min" | "full"
export type VKVideoVideoFullType =
    | "interactive"
    | "video"
    | "music_video"
    | "movie"
    | "live"
    | "short_video"
    | "story"
    | "video_message"

/**
 *
 */
export interface VKVideoVideoFull {
    response_type?: VKVideoVideoFullResponseType
    /**
     * Video access key
     */
    access_key?: string
    /**
     * Date when the video has been added in Unixtime
     */
    adding_date?: number
    /**
     * Information whether current user can comment the video
     */
    can_comment?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video
     */
    can_edit?: VKBaseBoolInt
    /**
     * Information whether current user can delete the video
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can like the video
     */
    can_like?: VKBaseBoolInt
    /**
     * Information whether current user can repost the video
     */
    can_repost?: number
    /**
     * Information whether current user can subscribe to author of the video
     */
    can_subscribe?: VKBaseBoolInt
    /**
     * Information whether current user can promote the video
     */
    can_be_promoted?: VKBaseBoolInt
    /**
     * Information whether current user can add the video to favourites
     */
    can_add_to_faves?: VKBaseBoolInt
    /**
     * Information whether current user can add the video
     */
    can_add?: VKBaseBoolInt
    /**
     * Information whether current user can attach action button to the video
     */
    can_attach_link?: VKBaseBoolInt
    /**
     * Information whether current user can edit the video privacy
     */
    can_edit_privacy?: VKBaseBoolInt
    /**
     * 1 if video is private
     */
    is_private?: VKBaseBoolInt
    /**
     * Number of comments
     */
    comments?: number
    /**
     * Date when video has been uploaded in Unixtime
     */
    date?: number
    /**
     * Video description
     */
    description?: string
    /**
     * Video duration in seconds
     */
    duration?: number
    image?: VKVideoVideoImage[]
    first_frame?: VKVideoVideoImage[]
    /**
     * Video width
     */
    width?: number
    /**
     * Video height
     */
    height?: number
    /**
     * Video ID
     */
    id?: number
    /**
     * Video owner ID
     */
    owner_id?: number
    /**
     * Id of the user who uploaded the video if it was uploaded to a group by member
     */
    user_id?: number
    /**
     * Video title
     */
    title?: string
    /**
     * Whether video is added to bookmarks
     */
    is_favorite?: boolean
    /**
     * Video embed URL
     */
    player?: string
    /**
     * Returns if the video is processing
     */
    processing?: VKBasePropertyExists
    /**
     * 1 if  video is being converted
     */
    converting?: VKBaseBoolInt
    /**
     * 1 if video is added to user's albums
     */
    added?: VKBaseBoolInt
    /**
     * 1 if user is subscribed to author of the video
     */
    is_subscribed?: VKBaseBoolInt
    track_code?: string
    /**
     * Information whether the video is repeated
     */
    repeat?: VKBasePropertyExists
    type?: VKVideoVideoFullType
    /**
     * Number of views
     */
    views?: number
    /**
     * If video is external, number of views on vk
     */
    local_views?: number
    /**
     * Restriction code
     */
    content_restricted?: number
    /**
     * Restriction text
     */
    content_restricted_message?: string
    /**
     * Live donations balance
     */
    balance?: number
    /**
     * 1 if the video is a live stream
     */
    live?: VKBasePropertyExists
    /**
     * 1 if the video is an upcoming stream
     */
    upcoming?: VKBasePropertyExists
    /**
     * Date in Unixtime when the live stream is scheduled to start by the author
     */
    live_start_time?: number
    /**
     * Whether current user is subscribed to the upcoming live stream notification (if not subscribed to the author)
     */
    live_notify?: VKBaseBoolInt
    /**
     * Number of spectators of the stream
     */
    spectators?: number
    /**
     * External platform
     */
    platform?: string
    likes?: VKBaseLikes
    reposts?: VKBaseRepostsInfo
    files?: VKVideoVideoFiles
    trailer?: VKVideoVideoFiles
    /**
     * List of video episodes with timecodes
     */
    episodes?: VKVideoEpisode[]
    /**
     * Settings for live stream
     */
    live_settings?: VKVideoLiveSettings
}

export type VKVideoVideoImageTheme = "light" | "dark"

/**
 *
 */
export interface VKVideoVideoImage {
    id?: string
    /**
     * Image url
     */
    url: string
    /**
     * Image width
     */
    width: number
    /**
     * Image height
     */
    height: number
    theme?: VKVideoVideoImageTheme
    with_padding?: VKBasePropertyExists
    size?: string
}

/**
 *
 */
export interface VKWallAppPost {
    /**
     * Application ID
     */
    id?: number
    /**
     * Application name
     */
    name?: string
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130?: string
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604?: string
}

/**
 *
 */
export interface VKWallAttachedNote {
    /**
     * Comments number
     */
    comments: number
    /**
     * Date when the note has been created in Unixtime
     */
    date: number
    /**
     * Note ID
     */
    id: number
    /**
     * Note owner's ID
     */
    owner_id: number
    /**
     * Read comments number
     */
    read_comments: number
    /**
     * Note title
     */
    title: string
    /**
     * Note text
     */
    text?: string
    privacy_view?: string[]
    privacy_comment?: string[]
    can_comment?: number
    /**
     * Note wiki text
     */
    text_wiki?: string
    /**
     * URL of the page with note preview
     */
    view_url: string
}

/**
 *
 */
export interface VKWallCarouselBase {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
}

/**
 *
 */
export interface VKWallCommentAttachment {
    audio?: VKAudioAudio
    doc?: VKDocsDoc
    link?: VKBaseLink
    market?: VKMarketMarketItem
    market_market_album?: VKMarketMarketAlbum
    note?: VKWallAttachedNote
    page?: VKPagesWikipageFull
    photo?: VKPhotosPhoto
    sticker?: VKBaseSticker
    type: VKWallCommentAttachmentType
    video?: VKVideoVideo
    graffiti?: VKWallGraffiti
}

/**
 * Attachment type
 */
export type VKWallCommentAttachmentType =
    | "photo"
    | "audio"
    | "audio_playlist"
    | "video"
    | "doc"
    | "link"
    | "note"
    | "page"
    | "market_market_album"
    | "market"
    | "sticker"
    | "graffiti"

export type VKWallGeoType = "place" | "point"

/**
 *
 */
export interface VKWallGeo {
    /**
     * Coordinates as string. <latitude> <longtitude>
     */
    coordinates?: string
    /**
     * Information whether a map is showed
     */
    showmap?: number
    /**
     * Place type
     */
    type?: VKWallGeoType
}

/**
 * Filter to apply: 'owner' - posts by the wall owner, 'others' - posts by someone else, 'all' - posts by the wall owner and others (default), 'postponed' - timed posts (only available for calls with an 'access_token'), 'suggests' - suggested posts on a community wall
 */
export type VKWallGetFilter =
    | "owner"
    | "others"
    | "all"
    | "postponed"
    | "suggests"
    | "archived"
    | "donut"

/**
 *
 */
export interface VKWallGraffiti {
    /**
     * Graffiti ID
     */
    id?: number
    /**
     * Graffiti owner's ID
     */
    owner_id?: number
    /**
     * URL of the preview image with 200 px in width
     */
    photo_200?: string
    /**
     * URL of the preview image with 586 px in width
     */
    photo_586?: string
    /**
     * Graffiti height
     */
    height?: number
    /**
     * Graffiti URL
     */
    url?: string
    /**
     * Graffiti width
     */
    width?: number
    /**
     * Access key for graffiti
     */
    access_key?: string
}

/**
 *
 */
export interface VKWallPostCopyright {
    id?: number
    link: string
    name: string
    type: string
}

/**
 *
 */
export interface VKWallPostSource {
    /**
     * Additional data
     */
    data?: string
    /**
     * Platform name
     */
    platform?: string
    type?: VKWallPostSourceType
    /**
     * URL to an external site used to publish the post
     */
    url?: string
    link?: VKBaseLink
}

/**
 * Type of post source
 */
export type VKWallPostSourceType =
    | "vk"
    | "widget"
    | "api"
    | "rss"
    | "sms"
    | "mvk"

/**
 * Post type
 */
export type VKWallPostType =
    | "post"
    | "copy"
    | "reply"
    | "postpone"
    | "suggest"
    | "post_ads"
    | "photo"
    | "video"
    | "clip"

/**
 *
 */
export interface VKWallPostedPhoto {
    /**
     * Photo ID
     */
    id?: number
    /**
     * Photo owner's ID
     */
    owner_id?: number
    /**
     * URL of the preview image with 130 px in width
     */
    photo_130?: string
    /**
     * URL of the preview image with 604 px in width
     */
    photo_604?: string
}

/**
 *
 */
export interface VKWallViews {
    /**
     * Count
     */
    count?: number
}

/**
 *
 */
export interface VKWallWallComment {
    /**
     * Comment ID
     */
    id: number
    /**
     * Author ID
     */
    from_id: number
    can_edit?: VKBaseBoolInt
    post_id?: number
    owner_id?: number
    parents_stack?: number[]
    photo_id?: number
    video_id?: number
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number
    /**
     * Comment text
     */
    text: string
    attachments?: VKWallWallpostAttachment[]
    donut?: VKWallWallCommentDonut
    likes?: VKBaseLikesInfo
    /**
     * Real position of the comment
     */
    real_offset?: number
    /**
     * Replied user ID
     */
    reply_to_user?: number
    /**
     * Replied comment ID
     */
    reply_to_comment?: number
    thread?: VKCommentThread
    /**
     * Whether post is by author of the post or not
     */
    is_from_post_author?: boolean
    deleted?: boolean
    /**
     * Photo ID
     */
    pid?: number
}

/**
 *
 */
export interface VKWallWallCommentDonut {
    /**
     * Means commentator is donator
     */
    is_don?: boolean
    placeholder?: VKWallWallCommentDonutPlaceholder
}

/**
 *
 */
export interface VKWallWallCommentDonutPlaceholder {
    text: string
}

/**
 *
 */
export type VKWallWallItem = VKWallWallpostFull

export type VKWallWallpostInnerType = "wall_wallpost"

/**
 *
 */
export interface VKWallWallpost {
    inner_type: VKWallWallpostInnerType
    /**
     * Access key to private object
     */
    access_key?: string
    is_deleted?: boolean
    deleted_reason?: string
    deleted_details?: string
    donut_miniapp_url?: string
    attachments?: VKWallWallpostAttachment[]
    /**
     * Information about the source of the post
     */
    copyright?: VKWallPostCopyright
    /**
     * Date of publishing in Unixtime
     */
    date?: number
    /**
     * Date of editing in Unixtime
     */
    edited?: number
    /**
     * Post author ID
     */
    from_id?: number
    geo?: VKWallGeo
    /**
     * Post ID
     */
    id?: number
    /**
     * Is post archived, only for post owners
     */
    is_archived?: boolean
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean
    /**
     * Count of likes
     */
    likes?: VKBaseLikesInfo
    /**
     * Wall owner's ID
     */
    owner_id?: number
    /**
     * If post type 'reply', contains original post ID
     */
    post_id?: number
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack?: number[]
    post_source?: VKWallPostSource
    post_type?: VKWallPostType
    reposts?: VKBaseRepostsInfo
    /**
     * Post signer ID
     */
    signer_id?: number
    /**
     * Post text
     */
    text?: string
    /**
     * Count of views
     */
    views?: VKWallViews
}

/**
 *
 */
export interface VKWallWallpostAttachment {
    /**
     * Access key for the audio
     */
    access_key?: string
    album?: VKPhotosPhotoAlbum
    app?: VKWallAppPost
    audio?: VKAudioAudio
    doc?: VKDocsDoc
    event?: VKEventsEventAttach
    group?: VKGroupsGroupAttach
    graffiti?: VKWallGraffiti
    link?: VKBaseLink
    market?: VKMarketMarketItem
    market_album?: VKMarketMarketAlbum
    note?: VKNotesNote
    page?: VKPagesWikipageFull
    photo?: VKPhotosPhoto
    poll?: VKPollsPoll
    posted_photo?: VKWallPostedPhoto
    type: VKWallWallpostAttachmentType
    video?: VKVideoVideoFull
    clip?: VKVideoVideoFull
    video_playlist?: VKVideoVideoAlbumFull
}

/**
 * Attachment type
 */
export type VKWallWallpostAttachmentType =
    | "photo"
    | "photos_list"
    | "posted_photo"
    | "audio"
    | "audio_playlist"
    | "video"
    | "clip"
    | "video_playlist"
    | "doc"
    | "link"
    | "graffiti"
    | "note"
    | "app"
    | "poll"
    | "page"
    | "album"
    | "market_album"
    | "market"
    | "event"
    | "donut_link"
    | "article"
    | "textlive"
    | "textpost"
    | "textpost_publish"
    | "situational_theme"
    | "group"
    | "sticker"
    | "podcast"

/**
 *
 */
export interface VKWallWallpostCommentsDonut {
    placeholder?: VKWallWallpostCommentsDonutPlaceholder
}

/**
 * Info about paid comments feature
 */
export interface VKWallWallpostCommentsDonutPlaceholder {
    text: string
}

export type VKWallWallpostDonutEditMode = "all" | "duration"

/**
 * Info about paid wall post
 */
export interface VKWallWallpostDonut {
    /**
     * Post only for dons
     */
    is_donut: boolean
    /**
     * Value of this field need to pass in wall.post/edit in donut_paid_duration
     */
    paid_duration?: number
    /**
     * If placeholder was respond, text and all attachments will be hidden
     */
    placeholder?: VKWallWallpostDonutPlaceholder
    /**
     * Says whether group admin can post free copy of this donut post
     */
    can_publish_free_copy?: boolean
    /**
     * Says what user can edit in post about donut properties
     */
    edit_mode?: VKWallWallpostDonutEditMode
}

/**
 *
 */
export interface VKWallWallpostDonutPlaceholder {
    text: string
}

export type VKWallWallpostFullInnerType = "wall_wallpost"
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
export type VKWallWallpostFullTopicId =
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
 *
 */
export interface VKWallWallpostFull {
    /**
     * Index of current carousel element
     */
    carousel_offset?: number
    inner_type: VKWallWallpostFullInnerType
    /**
     * Access key to private object
     */
    access_key?: string
    is_deleted?: boolean
    deleted_reason?: string
    deleted_details?: string
    donut_miniapp_url?: string
    attachments?: VKWallWallpostAttachment[]
    /**
     * Information about the source of the post
     */
    copyright?: VKWallPostCopyright
    /**
     * Date of publishing in Unixtime
     */
    date?: number
    /**
     * Date of editing in Unixtime
     */
    edited?: number
    /**
     * Post author ID
     */
    from_id?: number
    geo?: VKWallGeo
    /**
     * Post ID
     */
    id?: number
    /**
     * Is post archived, only for post owners
     */
    is_archived?: boolean
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: boolean
    /**
     * Count of likes
     */
    likes?: VKBaseLikesInfo
    /**
     * Wall owner's ID
     */
    owner_id?: number
    /**
     * If post type 'reply', contains original post ID
     */
    post_id?: number
    /**
     * If post type 'reply', contains original parent IDs stack
     */
    parents_stack?: number[]
    post_source?: VKWallPostSource
    post_type?: VKWallPostType
    reposts?: VKBaseRepostsInfo
    /**
     * Post signer ID
     */
    signer_id?: number
    /**
     * Post text
     */
    text?: string
    /**
     * Count of views
     */
    views?: VKWallViews
    copy_history?: VKWallWallpostFull[]
    /**
     * Information whether current user can edit the post
     */
    can_edit?: VKBaseBoolInt
    /**
     * Post creator ID (if post still can be edited)
     */
    created_by?: number
    /**
     * Information whether current user can delete the post
     */
    can_delete?: VKBaseBoolInt
    /**
     * Information whether current user can pin the post
     */
    can_pin?: VKBaseBoolInt
    donut?: VKWallWallpostDonut
    /**
     * Information whether the post is pinned
     */
    is_pinned?: VKBaseBoolInt
    comments?: VKBaseCommentsInfo
    /**
     * Information whether the post is marked as ads
     */
    marked_as_ads?: VKBaseBoolInt
    /**
     * Topic ID. Allowed values can be obtained from newsfeed.getPostTopics method
     */
    topic_id?: VKWallWallpostFullTopicId
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
    /**
     * Hash for sharing
     */
    hash?: string
    type?: VKWallPostType
    feedback?: VKNewsfeedItemWallpostFeedback
    to_id?: number
}

/**
 *
 */
export interface VKWidgetsCommentMedia {
    /**
     * Media item ID
     */
    item_id?: number
    /**
     * Media owner's ID
     */
    owner_id?: number
    /**
     * URL of the preview image (type=photo only)
     */
    thumb_src?: string
    type?: VKWidgetsCommentMediaType
}

/**
 * Media type
 */
export type VKWidgetsCommentMediaType = "audio" | "photo" | "video"

/**
 *
 */
export interface VKWidgetsCommentReplies {
    /**
     * Information whether current user can comment the post
     */
    can_post?: VKBaseBoolInt
    /**
     * Comments number
     */
    count?: number
    replies?: VKWidgetsCommentRepliesItem[]
    /**
     * Information whether groups can comment the post
     */
    groups_can_post?: VKBaseBoolInt
    /**
     * Information whether current user can view the comments
     */
    can_view?: VKBaseBoolInt
}

/**
 *
 */
export interface VKWidgetsCommentRepliesItem {
    /**
     * Comment ID
     */
    cid?: number
    /**
     * Date when the comment has been added in Unixtime
     */
    date?: number
    likes?: VKWidgetsWidgetLikes
    /**
     * Comment text
     */
    text?: string
    /**
     * User ID
     */
    uid?: number
    user?: VKUsersUserFull
}

/**
 *
 */
export interface VKWidgetsWidgetComment {
    attachments?: VKWallCommentAttachment[]
    /**
     * Wall owner's ID
     */
    owner_id?: number
    /**
     * Information whether current user can delete the comment
     */
    can_delete?: VKBaseBoolInt
    comments?: VKWidgetsCommentReplies
    /**
     * Date when the comment has been added in Unixtime
     */
    date: number
    /**
     * Comment author ID
     */
    from_id: number
    /**
     * Comment ID
     */
    id: number
    likes?: VKBaseLikesInfo
    media?: VKWidgetsCommentMedia
    post_source?: VKWallPostSource
    /**
     * Post type
     */
    post_type: string
    reposts?: VKBaseRepostsInfo
    /**
     * Comment text
     */
    text: string
    /**
     * Wall owner
     */
    to_id: number
    user?: VKUsersUserFull
    /**
     * Information whether the post in favorites list
     */
    is_favorite?: VKBaseBoolInt
    /**
     * Preview length control parameter
     */
    short_text_rate?: number
}

/**
 *
 */
export interface VKWidgetsWidgetLikes {
    /**
     * Likes number
     */
    count?: number
}

/**
 *
 */
export interface VKWidgetsWidgetPage {
    comments?: VKBaseObjectCount
    /**
     * Date when widgets on the page has been initialized firstly in Unixtime
     */
    date?: number
    /**
     * Page description
     */
    description?: string
    /**
     * Page ID
     */
    id?: number
    likes?: VKBaseObjectCount
    /**
     * page_id parameter value
     */
    page_id?: string
    /**
     * URL of the preview image
     */
    photo?: string
    /**
     * Page title
     */
    title?: string
    /**
     * Page absolute URL
     */
    url?: string
}
