---
sidebar_position: 2
---

This API endpoint provides a price list for a product.

#### HTTP Request (GET)

```
https://payments.relworx.com/api/products/price-list
```

#### Arguments

|Parameter	|Type	|Required	|Description
|-----------|--------|----------|---------------
|code	|string	|Yes	|Product code.

#### Sample request to get price-list of a products.

Make sure to replace <--Your API Key--> with your generated API Key

```
   curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key-->" https://payments.relworx.com/api/products/price-list\?code\=MTN_UG_INTERNET

```

#### Sample response.

```
{
    "success": true,
    "price_list": [
        {
            "code": "MTN_UG_INTERNET:246624",
            "name": "MTN Data Night pack 1GB valid 12am - 6am",
            "price": 2000
        },
        {
            "code": "MTN_UG_INTERNET:246701",
            "name": "MTN Data Quarterly 10GB",
            "price": 75000
        },
        {
            "code": "MTN_UG_INTERNET:246702",
            "name": "MTN Data Quarterly 30GB",
            "price": 150000
        },
        {
            "code": "MTN_UG_INTERNET:246643",
            "name": "MTN Data Quarterly 3GB",
            "price": 30000
        },
        {
            "code": "MTN_UG_INTERNET:246622",
            "name": "MTN Data Daily 50MBs valid for 60Mins",
            "price": 500
        },
        {
            "code": "MTN_UG_INTERNET:246623",
            "name": "MTN Data Daily 1GB valid for 60Mins",
            "price": 5000
        },
        {
            "code": "MTN_UG_INTERNET:246628",
            "name": "MTN Data Weekly 500MBs",
            "price": 5000
        },
        {
            "code": "MTN_UG_INTERNET:246629",
            "name": "MTN Data Weekly1.5Gb",
            "price": 10000
        },
        {
            "code": "MTN_UG_INTERNET:246630",
            "name": "MTN Data Weekly 5GB",
            "price": 20000
        },
        {
            "code": "MTN_UG_INTERNET:246616",
            "name": "MTN Data Daily 15MBs 250",
            "price": 250
        },
        {
            "code": "MTN_UG_INTERNET:246617",
            "name": "MTN Data Daily 40MBs",
            "price": 500
        },
        {
            "code": "MTN_UG_INTERNET:246618",
            "name": "MTN Data Daily 100MBs",
            "price": 1000
        },
        {
            "code": "MTN_UG_INTERNET:246619",
            "name": "MTN Data Daily 300MBs",
            "price": 2000
        },
        {
            "code": "MTN_UG_INTERNET:246621",
            "name": "MTN Data Daily 700MBs",
            "price": 10000
        },
        {
            "code": "MTN_UG_INTERNET:246697",
            "name": "MTN Data Monthly 300MBs",
            "price": 5500
        },
        {
            "code": "MTN_UG_INTERNET:246620",
            "name": "MTN Data Daily 1GB",
            "price": 5000
        },
        {
            "code": "MTN_UG_INTERNET:246633",
            "name": "MTN Data Monthly 10GBs",
            "price": 50000
        },
        {
            "code": "MTN_UG_INTERNET:246634",
            "name": "MTN Data  Monthly 30GBs",
            "price": 100000
        },
        {
            "code": "MTN_UG_INTERNET:246635",
            "name": "MTN Data Monthly 100GBs",
            "price": 550000
        },
        {
            "code": "MTN_UG_INTERNET:246636",
            "name": "MTN Data Monthly 25MBs",
            "price": 1500
        },
        {
            "code": "MTN_UG_INTERNET:246698",
            "name": "MTN Data Monthly 600MBs",
            "price": 10000
        },
        {
            "code": "MTN_UG_INTERNET:246637",
            "name": "MTN Data Monthly 500MBs",
            "price": 20000
        },
        {
            "code": "MTN_UG_INTERNET:246699",
            "name": "MTN Data Monthly 2GB",
            "price": 20000
        }
    ]
}
```