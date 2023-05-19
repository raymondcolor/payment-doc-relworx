---
sidebar_position: 1
---

This API endpoint provides a list of products available for purchase.

#### HTTP Request (GET)

```
https://payments.relworx.com/api/products
```

#### Response Parameters


|Parameter	|Description
|-----------|---------------
|name	    |Name of the product.
|code	    ||Unique code to identify a product.
category	|Category for a product.
|has_price_list	|Indicates whether a product has price packages for subscription.
|has_choice_list	|Indicates whether a product has a support list of choice options for purchase.
billable	|Indicates whether Relworx charges you to purchase a product.


#### Sample request to get list of available products.

Make sure to replace <--Your API Key--> with your generated API Key.

```
 curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key-->" https://payments.relworx.com/api/products
 ```

 #### Sample response.

 ```
 {
    "success": true,
    "products": [
        {
            "name": "Africell Uganda Airtime",
            "code": "AFRICELL_UG_AIRTIME",
            "category": "AIRTIME",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Airtel Uganda Airtime",
            "code": "AIRTEL_UG_AIRTIME",
            "category": "AIRTIME",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "MTN Uganda Airtime",
            "code": "MTN_UG_AIRTIME",
            "category": "AIRTIME",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Uganda Telecom Airtime",
            "code": "UTL_AIRTIME",
            "category": "AIRTIME",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Africell Uganda Internet",
            "code": "AFRICELL_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "MTN Uganda Internet",
            "code": "MTN_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Smile Uganda Internet",
            "code": "SMILE_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Roke Telecom Internet",
            "code": "ROKE_TELECOM_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Tangerine Internet",
            "code": "TANGERINE_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "UTL Internet",
            "code": "UTL_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Airtel Uganda Internet",
            "code": "AIRTEL_UG_INTERNET",
            "category": "INTERNET",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "AZAM TV",
            "code": "AZAM_TV",
            "category": "TV",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "DSTV",
            "code": "DSTV",
            "category": "TV",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "GOtv",
            "code": "GO_TV",
            "category": "TV",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "Zuku TV",
            "code": "ZUKU_TV",
            "category": "TV",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "StarTimes",
            "code": "STARTIMES_TV",
            "category": "TV",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "National Water",
            "code": "NATIONAL_WATER",
            "category": "UTILITIES",
            "has_price_list": false,
            "has_choice_list": true,
            "billable": false
        },
        {
            "name": "UMEME PostPaid",
            "code": "UMEME_POST_PAID",
            "category": "UTILITIES",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "UMEME PrePaid (Yaka)",
            "code": "UMEME_PRE_PAID",
            "category": "UTILITIES",
            "has_price_list": false,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "MTN Voice Bundles",
            "code": "MTN_UG_VOICE_BUNDLES",
            "category": "OTHERS",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        },
        {
            "name": "MTN Combo Bundles",
            "code": "MTN_UG_COMBO_BUNDLES",
            "category": "OTHERS",
            "has_price_list": true,
            "has_choice_list": false,
            "billable": false
        }
    ]
}
```