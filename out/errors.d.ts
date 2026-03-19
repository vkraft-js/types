/**
 * @module
 *
 * This module contains VK API error types
 *
 * @example import errors
 * ```typescript
 * import { VKError, VKErrorCode } from "@vkraft/types/errors";
 * ```
 *
 * Based on VK API v5.199
 *
 * Generated at 19.03.2026, 13:17:19 using [types](https://github.com/vkraft/types) generator
 */

/**
 * All known VK API error codes.
 */
export type VKErrorCode =
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
    | 27
    | 28
    | 29
    | 30
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
    | 43
    | 100
    | 101
    | 103
    | 104
    | 105
    | 106
    | 113
    | 114
    | 118
    | 119
    | 121
    | 122
    | 125
    | 129
    | 140
    | 141
    | 146
    | 147
    | 150
    | 171
    | 173
    | 174
    | 175
    | 176
    | 177
    | 180
    | 181
    | 182
    | 183
    | 200
    | 201
    | 203
    | 204
    | 205
    | 210
    | 211
    | 212
    | 213
    | 214
    | 219
    | 220
    | 221
    | 222
    | 223
    | 224
    | 225
    | 232
    | 242
    | 243
    | 250
    | 251
    | 252
    | 253
    | 260
    | 300
    | 302
    | 500
    | 600
    | 601
    | 602
    | 603
    | 629
    | 630
    | 631
    | 632
    | 633
    | 634
    | 635
    | 636
    | 700
    | 701
    | 702
    | 703
    | 704
    | 706
    | 711
    | 714
    | 800
    | 801
    | 900
    | 901
    | 902
    | 907
    | 908
    | 909
    | 910
    | 911
    | 912
    | 913
    | 914
    | 917
    | 919
    | 920
    | 921
    | 922
    | 924
    | 925
    | 927
    | 931
    | 932
    | 935
    | 936
    | 939
    | 940
    | 942
    | 943
    | 944
    | 945
    | 946
    | 947
    | 949
    | 950
    | 962
    | 969
    | 970
    | 985
    | 987
    | 988
    | 990
    | 1009
    | 1010
    | 1011
    | 1012
    | 1105
    | 1114
    | 1116
    | 1117
    | 1118
    | 1150
    | 1151
    | 1152
    | 1153
    | 1154
    | 1155
    | 1160
    | 1170
    | 1251
    | 1256
    | 1257
    | 1260
    | 1400
    | 1401
    | 1402
    | 1403
    | 1404
    | 1405
    | 1406
    | 1407
    | 1408
    | 1409
    | 1410
    | 1411
    | 1412
    | 1413
    | 1414
    | 1415
    | 1416
    | 1417
    | 1418
    | 1419
    | 1421
    | 1423
    | 1424
    | 1425
    | 1426
    | 1427
    | 1429
    | 1430
    | 1431
    | 1432
    | 1433
    | 1434
    | 1435
    | 1436
    | 1438
    | 1446
    | 1456
    | 1457
    | 1458
    | 1518
    | 1525
    | 1526
    | 1531
    | 1532
    | 1600
    | 1602
    | 1900
    | 1901
    | 1902
    | 2000
    | 2100
    | 2101
    | 2102
    | 3102
    | 3300
    | 3301
    | 3302
    | 3303
    | 3304
    | 3305
    | 3609
    | 3610
    | 3611
    | 3800
    | 9999
    | 11500
    | 11003
    | 11004
    | 11005
    | 11006
    | 11101
    | 11102

/**
 * VK API error response.
 */
export interface VKError {
    /**
     * Error code
     */
    error_code: VKErrorCode
    /**
     * Error message
     */
    error_msg: string
    /**
     * Request parameters that caused the error
     */
    request_params: { key: string; value: string }[]
}

/**
 * Map of VK API error codes to descriptions.
 */
export interface VKErrorDescriptions {
    /**
     * Unknown error occurred (global)
     */
    1: "Unknown error occurred"
    /**
     * Application is disabled. Enable your application or use test mode (global)
     */
    2: "Application is disabled. Enable your application or use test mode"
    /**
     * Unknown method passed (global)
     */
    3: "Unknown method passed"
    /**
     * Incorrect signature (global)
     */
    4: "Incorrect signature"
    /**
     * User authorization failed (global)
     */
    5: "User authorization failed"
    /**
     * Too many requests per second (global)
     */
    6: "Too many requests per second"
    /**
     * Permission to perform this action is denied (global)
     */
    7: "Permission to perform this action is denied"
    /**
     * Invalid request (global)
     */
    8: "Invalid request"
    /**
     * Flood control (global)
     */
    9: "Flood control"
    /**
     * Internal server error (global)
     */
    10: "Internal server error"
    /**
     * In test mode application should be disabled or user should be authorized (global)
     */
    11: "In test mode application should be disabled or user should be authorized"
    /**
     * Unable to compile code
     */
    12: "Unable to compile code"
    /**
     * Runtime error occurred during code invocation (global)
     */
    13: "Runtime error occurred during code invocation"
    /**
     * Captcha needed (global)
     */
    14: "Captcha needed"
    /**
     * Access denied (global)
     */
    15: "Access denied"
    /**
     * HTTP authorization failed (global)
     */
    16: "HTTP authorization failed"
    /**
     * Validation required (global)
     */
    17: "Validation required"
    /**
     * User was deleted or banned (global)
     */
    18: "User was deleted or banned"
    /**
     * Content blocked
     */
    19: "Content blocked"
    /**
     * Permission to perform this action is denied for non-standalone applications (global)
     */
    20: "Permission to perform this action is denied for non-standalone applications"
    /**
     * Permission to perform this action is allowed only for standalone and OpenAPI applications (global)
     */
    21: "Permission to perform this action is allowed only for standalone and OpenAPI applications"
    /**
     * Upload error
     */
    22: "Upload error"
    /**
     * This method was disabled (global)
     */
    23: "This method was disabled"
    /**
     * Confirmation required (global)
     */
    24: "Confirmation required"
    /**
     * Token confirmation required (global)
     */
    25: "Token confirmation required"
    /**
     * Group authorization failed (global)
     */
    27: "Group authorization failed"
    /**
     * Application authorization failed (global)
     */
    28: "Application authorization failed"
    /**
     * Rate limit reached (global)
     */
    29: "Rate limit reached"
    /**
     * This profile is private (global)
     */
    30: "This profile is private"
    /**
     * Need wait
     */
    32: "Need wait"
    /**
     * Not implemented yet (global)
     */
    33: "Not implemented yet"
    /**
     * Client version deprecated (global)
     */
    34: "Client version deprecated"
    /**
     * Client update needed (global)
     */
    35: "Client update needed"
    /**
     * Method execution was interrupted due to timeout
     */
    36: "Method execution was interrupted due to timeout"
    /**
     * User was banned (global)
     */
    37: "User was banned"
    /**
     * Unknown application (global)
     */
    38: "Unknown application"
    /**
     * Unknown user (global)
     */
    39: "Unknown user"
    /**
     * Unknown group (global)
     */
    40: "Unknown group"
    /**
     * Additional signup required (global)
     */
    41: "Additional signup required"
    /**
     * IP is not allowed (global)
     */
    42: "IP is not allowed"
    /**
     * This section is temporary unavailable (global)
     */
    43: "This section is temporary unavailable"
    /**
     * One of the parameters specified was missing or invalid (global)
     */
    100: "One of the parameters specified was missing or invalid"
    /**
     * Invalid application API ID (global)
     */
    101: "Invalid application API ID"
    /**
     * Out of limits
     */
    103: "Out of limits"
    /**
     * Not found
     */
    104: "Not found"
    /**
     * Couldn't save file
     */
    105: "Couldn't save file"
    /**
     * Unable to process action
     */
    106: "Unable to process action"
    /**
     * Invalid user id (global)
     */
    113: "Invalid user id"
    /**
     * Invalid album id
     */
    114: "Invalid album id"
    /**
     * Invalid server
     */
    118: "Invalid server"
    /**
     * Invalid title
     */
    119: "Invalid title"
    /**
     * Invalid hash
     */
    121: "Invalid hash"
    /**
     * Invalid photos
     */
    122: "Invalid photos"
    /**
     * Invalid group id
     */
    125: "Invalid group id"
    /**
     * Invalid photo
     */
    129: "Invalid photo"
    /**
     * Page not found
     */
    140: "Page not found"
    /**
     * Access to page denied
     */
    141: "Access to page denied"
    /**
     * The mobile number of the user is unknown
     */
    146: "The mobile number of the user is unknown"
    /**
     * Application has insufficient funds
     */
    147: "Application has insufficient funds"
    /**
     * Invalid timestamp (global)
     */
    150: "Invalid timestamp"
    /**
     * Invalid list id
     */
    171: "Invalid list id"
    /**
     * Reached the maximum number of lists
     */
    173: "Reached the maximum number of lists"
    /**
     * Cannot add user himself as friend
     */
    174: "Cannot add user himself as friend"
    /**
     * Cannot add this user to friends as they have put you on their blacklist
     */
    175: "Cannot add this user to friends as they have put you on their blacklist"
    /**
     * Cannot add this user to friends as you put him on blacklist
     */
    176: "Cannot add this user to friends as you put him on blacklist"
    /**
     * Cannot add this user to friends as user not found
     */
    177: "Cannot add this user to friends as user not found"
    /**
     * Note not found
     */
    180: "Note not found"
    /**
     * Access to note denied
     */
    181: "Access to note denied"
    /**
     * You can't comment this note
     */
    182: "You can't comment this note"
    /**
     * Access to comment denied
     */
    183: "Access to comment denied"
    /**
     * Access denied (global)
     */
    200: "Access denied"
    /**
     * Access denied (global)
     */
    201: "Access denied"
    /**
     * Access to group denied (global)
     */
    203: "Access to group denied"
    /**
     * Access denied
     */
    204: "Access denied"
    /**
     * Access denied
     */
    205: "Access denied"
    /**
     * Access to wall's post denied
     */
    210: "Access to wall's post denied"
    /**
     * Access to wall's comment denied
     */
    211: "Access to wall's comment denied"
    /**
     * Access to post comments denied
     */
    212: "Access to post comments denied"
    /**
     * Access to status replies denied
     */
    213: "Access to status replies denied"
    /**
     * Access to adding post denied
     */
    214: "Access to adding post denied"
    /**
     * Advertisement post was recently added
     */
    219: "Advertisement post was recently added"
    /**
     * Too many recipients
     */
    220: "Too many recipients"
    /**
     * User disabled track name broadcast
     */
    221: "User disabled track name broadcast"
    /**
     * Hyperlinks are forbidden
     */
    222: "Hyperlinks are forbidden"
    /**
     * Too many replies
     */
    223: "Too many replies"
    /**
     * Too many ads posts
     */
    224: "Too many ads posts"
    /**
     * Donut is disabled
     */
    225: "Donut is disabled"
    /**
     * Reaction can not be applied to the object
     */
    232: "Reaction can not be applied to the object"
    /**
     * Too many friends
     */
    242: "Too many friends"
    /**
     * Comment has not been deleted
     */
    243: "Comment has not been deleted"
    /**
     * Access to poll denied
     */
    250: "Access to poll denied"
    /**
     * Invalid poll id
     */
    251: "Invalid poll id"
    /**
     * Invalid answer id
     */
    252: "Invalid answer id"
    /**
     * Access denied, please vote first
     */
    253: "Access denied, please vote first"
    /**
     * Access to the groups list is denied due to the user's privacy settings
     */
    260: "Access to the groups list is denied due to the user's privacy settings"
    /**
     * This album is full (global)
     */
    300: "This album is full"
    /**
     * Albums number limit is reached
     */
    302: "Albums number limit is reached"
    /**
     * Permission denied. You must enable votes processing in application settings (global)
     */
    500: "Permission denied. You must enable votes processing in application settings"
    /**
     * Permission denied. You have no access to operations specified with given object(s) (global)
     */
    600: "Permission denied. You have no access to operations specified with given object(s)"
    /**
     * Permission denied. You have requested too many actions this day. Try later.
     */
    601: "Permission denied. You have requested too many actions this day. Try later."
    /**
     * Some part of the request has not been completed
     */
    602: "Some part of the request has not been completed"
    /**
     * Some ads error occurs (global)
     */
    603: "Some ads error occurs"
    /**
     * Object deleted
     */
    629: "Object deleted"
    /**
     * Lookalike request with same source already in progress
     */
    630: "Lookalike request with same source already in progress"
    /**
     * Max count of lookalike requests per day reached
     */
    631: "Max count of lookalike requests per day reached"
    /**
     * Given audience is too small
     */
    632: "Given audience is too small"
    /**
     * Given audience is too large
     */
    633: "Given audience is too large"
    /**
     * Lookalike request audience save already in progress
     */
    634: "Lookalike request audience save already in progress"
    /**
     * Max count of lookalike request audience saves per day reached
     */
    635: "Max count of lookalike request audience saves per day reached"
    /**
     * Max count of retargeting groups reached
     */
    636: "Max count of retargeting groups reached"
    /**
     * Cannot edit creator role
     */
    700: "Cannot edit creator role"
    /**
     * User should be in club
     */
    701: "User should be in club"
    /**
     * Too many officers in club
     */
    702: "Too many officers in club"
    /**
     * You need to enable 2FA for this action
     */
    703: "You need to enable 2FA for this action"
    /**
     * User needs to enable 2FA for this action
     */
    704: "User needs to enable 2FA for this action"
    /**
     * Too many addresses in club
     */
    706: "Too many addresses in club"
    /**
     * Application is not installed in community
     */
    711: "Application is not installed in community"
    /**
     * Invite link is invalid - expired, deleted or not exists
     */
    714: "Invite link is invalid - expired, deleted or not exists"
    /**
     * This video is already added
     */
    800: "This video is already added"
    /**
     * Comments for this video are closed
     */
    801: "Comments for this video are closed"
    /**
     * Can't send messages for users from blacklist
     */
    900: "Can't send messages for users from blacklist"
    /**
     * Can't send messages for users without permission
     */
    901: "Can't send messages for users without permission"
    /**
     * Can't send messages to this user due to their privacy settings
     */
    902: "Can't send messages to this user due to their privacy settings"
    /**
     * Value of ts or pts is too old
     */
    907: "Value of ts or pts is too old"
    /**
     * Value of ts or pts is too new
     */
    908: "Value of ts or pts is too new"
    /**
     * Can't edit this message, because it's too old
     */
    909: "Can't edit this message, because it's too old"
    /**
     * Can't sent this message, because it's too big
     */
    910: "Can't sent this message, because it's too big"
    /**
     * Keyboard format is invalid
     */
    911: "Keyboard format is invalid"
    /**
     * This is a chat bot feature, change this status in settings
     */
    912: "This is a chat bot feature, change this status in settings"
    /**
     * Too many forwarded messages
     */
    913: "Too many forwarded messages"
    /**
     * Message is too long
     */
    914: "Message is too long"
    /**
     * You don't have access to this chat
     */
    917: "You don't have access to this chat"
    /**
     * You can't see invite link for this chat
     */
    919: "You can't see invite link for this chat"
    /**
     * Can't edit this kind of message
     */
    920: "Can't edit this kind of message"
    /**
     * Can't forward these messages
     */
    921: "Can't forward these messages"
    /**
     * You left this chat
     */
    922: "You left this chat"
    /**
     * Can't delete this message for everybody
     */
    924: "Can't delete this message for everybody"
    /**
     * You are not admin of this chat
     */
    925: "You are not admin of this chat"
    /**
     * Chat does not exist
     */
    927: "Chat does not exist"
    /**
     * You can't change invite link for this chat
     */
    931: "You can't change invite link for this chat"
    /**
     * Your community can't interact with this peer
     */
    932: "Your community can't interact with this peer"
    /**
     * User not found in chat
     */
    935: "User not found in chat"
    /**
     * Contact not found
     */
    936: "Contact not found"
    /**
     * Message request already sent
     */
    939: "Message request already sent"
    /**
     * Too many posts in messages
     */
    940: "Too many posts in messages"
    /**
     * Cannot pin one-time story
     */
    942: "Cannot pin one-time story"
    /**
     * Cannot use this intent
     */
    943: "Cannot use this intent"
    /**
     * Limits overflow for this intent
     */
    944: "Limits overflow for this intent"
    /**
     * Chat was disabled
     */
    945: "Chat was disabled"
    /**
     * Chat not supported
     */
    946: "Chat not supported"
    /**
     * Can't add user to chat, because user has no access to group
     */
    947: "Can't add user to chat, because user has no access to group"
    /**
     * Can't edit pinned message yet
     */
    949: "Can't edit pinned message yet"
    /**
     * Can't send message, reply timed out
     */
    950: "Can't send message, reply timed out"
    /**
     * You can't access donut chat without subscription
     */
    962: "You can't access donut chat without subscription"
    /**
     * Message cannot be forwarded
     */
    969: "Message cannot be forwarded"
    /**
     * Cannot pin an expiring message
     */
    970: "Cannot pin an expiring message"
    /**
     * Cannot write to notifications only groups
     */
    985: "Cannot write to notifications only groups"
    /**
     * Need message request
     */
    987: "Need message request"
    /**
     * Pending message request
     */
    988: "Pending message request"
    /**
     * Drop device cache
     */
    990: "Drop device cache"
    /**
     * Unknown reaction passed
     */
    1009: "Unknown reaction passed"
    /**
     * This reaction has been disabled
     */
    1010: "This reaction has been disabled"
    /**
     * Reactions limit for this message has been reached
     */
    1011: "Reactions limit for this message has been reached"
    /**
     * Writing is disabled for this chat
     */
    1012: "Writing is disabled for this chat"
    /**
     * Too many auth attempts, try again later
     */
    1105: "Too many auth attempts, try again later"
    /**
     * Anonymous token has expired (global)
     */
    1114: "Anonymous token has expired"
    /**
     * Anonymous token is invalid (global)
     */
    1116: "Anonymous token is invalid"
    /**
     * Access token has expired (global)
     */
    1117: "Access token has expired"
    /**
     * Anonymous token ip mismatch (global)
     */
    1118: "Anonymous token ip mismatch"
    /**
     * Invalid document id
     */
    1150: "Invalid document id"
    /**
     * Access to document deleting is denied
     */
    1151: "Access to document deleting is denied"
    /**
     * Invalid document title
     */
    1152: "Invalid document title"
    /**
     * Access to document is denied
     */
    1153: "Access to document is denied"
    /**
     * Access to document restoring is denied
     */
    1154: "Access to document restoring is denied"
    /**
     * Document was deleted too long ago
     */
    1155: "Document was deleted too long ago"
    /**
     * Original photo was changed
     */
    1160: "Original photo was changed"
    /**
     * Too many feed lists
     */
    1170: "Too many feed lists"
    /**
     * This achievement is already unlocked
     */
    1251: "This achievement is already unlocked"
    /**
     * Subscription not found
     */
    1256: "Subscription not found"
    /**
     * Subscription is in invalid status
     */
    1257: "Subscription is in invalid status"
    /**
     * Invalid screen name
     */
    1260: "Invalid screen name"
    /**
     * Too late for restore
     */
    1400: "Too late for restore"
    /**
     * Comments for this market are closed
     */
    1401: "Comments for this market are closed"
    /**
     * Album not found
     */
    1402: "Album not found"
    /**
     * Item not found
     */
    1403: "Item not found"
    /**
     * Item already added to album
     */
    1404: "Item already added to album"
    /**
     * Too many items
     */
    1405: "Too many items"
    /**
     * Too many items in album
     */
    1406: "Too many items in album"
    /**
     * Too many albums
     */
    1407: "Too many albums"
    /**
     * Item has bad links in description
     */
    1408: "Item has bad links in description"
    /**
     * Extended market not enabled
     */
    1409: "Extended market not enabled"
    /**
     * Variants not enabled
     */
    1410: "Variants not enabled"
    /**
     * Variants error
     */
    1411: "Variants error"
    /**
     * Grouping items with different properties
     */
    1412: "Grouping items with different properties"
    /**
     * Grouping already has such variant
     */
    1413: "Grouping already has such variant"
    /**
     * Grouping has other properties
     */
    1414: "Grouping has other properties"
    /**
     * Grouping must have variants
     */
    1415: "Grouping must have variants"
    /**
     * Variant not found
     */
    1416: "Variant not found"
    /**
     * Property not found
     */
    1417: "Property not found"
    /**
     * Max properties limit exceeded
     */
    1418: "Max properties limit exceeded"
    /**
     * Max variant limit exceeded
     */
    1419: "Max variant limit exceeded"
    /**
     * Name too long
     */
    1421: "Name too long"
    /**
     * Variant value is too long
     */
    1423: "Variant value is too long"
    /**
     * Unknown property type
     */
    1424: "Unknown property type"
    /**
     * Grouping must have two or more items
     */
    1425: "Grouping must have two or more items"
    /**
     * Item must have distinct properties
     */
    1426: "Item must have distinct properties"
    /**
     * Cart is empty
     */
    1427: "Cart is empty"
    /**
     * Specify width, length, height and weight all together
     */
    1429: "Specify width, length, height and weight all together"
    /**
     * VK Pay status can not be changed
     */
    1430: "VK Pay status can not be changed"
    /**
     * Market was already enabled in this group
     */
    1431: "Market was already enabled in this group"
    /**
     * Market was already disabled in this group
     */
    1432: "Market was already disabled in this group"
    /**
     * Invalid image crop format
     */
    1433: "Invalid image crop format"
    /**
     * Crop bottom right corner is outside of the image
     */
    1434: "Crop bottom right corner is outside of the image"
    /**
     * Crop size is less than the minimum
     */
    1435: "Crop size is less than the minimum"
    /**
     * Order not found
     */
    1436: "Order not found"
    /**
     * Market not enabled
     */
    1438: "Market not enabled"
    /**
     * Main album can not be hidden
     */
    1446: "Main album can not be hidden"
    /**
     * Order status is invalid
     */
    1456: "Order status is invalid"
    /**
     * Failed to set album as main
     */
    1457: "Failed to set album as main"
    /**
     * Failed to unset album as main
     */
    1458: "Failed to unset album as main"
    /**
     * Item is not deleted
     */
    1518: "Item is not deleted"
    /**
     * Market is disabled
     */
    1525: "Market is disabled"
    /**
     * Market services are disabled
     */
    1526: "Market services are disabled"
    /**
     * Add item to service album
     */
    1531: "Add item to service album"
    /**
     * Add service to market album
     */
    1532: "Add service to market album"
    /**
     * Story has already expired
     */
    1600: "Story has already expired"
    /**
     * Incorrect reply privacy
     */
    1602: "Incorrect reply privacy"
    /**
     * Card not found
     */
    1900: "Card not found"
    /**
     * Too many cards
     */
    1901: "Too many cards"
    /**
     * Card is connected to post
     */
    1902: "Card is connected to post"
    /**
     * Servers number limit is reached
     */
    2000: "Servers number limit is reached"
    /**
     * Stickers are not purchased
     */
    2100: "Stickers are not purchased"
    /**
     * Too many favorite stickers
     */
    2101: "Too many favorite stickers"
    /**
     * Stickers are not favorite
     */
    2102: "Stickers are not favorite"
    /**
     * Specified link is incorrect (can't find source)
     */
    3102: "Specified link is incorrect (can't find source)"
    /**
     * Recaptcha needed (global)
     */
    3300: "Recaptcha needed"
    /**
     * Phone validation needed (global)
     */
    3301: "Phone validation needed"
    /**
     * Password validation needed (global)
     */
    3302: "Password validation needed"
    /**
     * Otp app validation needed (global)
     */
    3303: "Otp app validation needed"
    /**
     * Email confirmation needed (global)
     */
    3304: "Email confirmation needed"
    /**
     * Assert votes (global)
     */
    3305: "Assert votes"
    /**
     * Token extension required (global)
     */
    3609: "Token extension required"
    /**
     * User is deactivated (global)
     */
    3610: "User is deactivated"
    /**
     * Service is deactivated for user (global)
     */
    3611: "Service is deactivated for user"
    /**
     * Can't set AliExpress tag to this type of object
     */
    3800: "Can't set AliExpress tag to this type of object"
    /**
     * Not supported http method (global)
     */
    9999: "Not supported http method"
    /**
     * CheckUserAction confirmation required (global)
     */
    11500: "CheckUserAction confirmation required"
    /**
     * Empty filter params
     */
    11003: "Empty filter params"
    /**
     * Empty snippet data
     */
    11004: "Empty snippet data"
    /**
     * Too many snippets
     */
    11005: "Too many snippets"
    /**
     * Not found snippet
     */
    11006: "Not found snippet"
    /**
     * Can't translate.
     */
    11101: "Can't translate."
    /**
     * Multiple source languages. Only one allowed.
     */
    11102: "Multiple source languages. Only one allowed."
}
