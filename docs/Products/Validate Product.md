---
sidebar_position: 4
---

This API endpoint validates a product. Product validation is required before every product purchase.

#### HTTP Request (POST)

```js
https://payments.relworx.com/api/products/validate
```

#### Arguments

|Parameter	|Type	|Required	|Description
|-----------|-------|-----------|---------------------
|account_no	|string	|Yes	|Business account number. This is generated for you when you create a business account.
|reference	|string	|Yes	|A unique generated string to identify your request. A minimum of 8 and maximum of 36 characters is allowed.
|msisdn	|string	|Yes	|Product receiver account number. i.e Yaka / National water meter number.
|amount	|decimal	|Yes	|Product purchase amount / price.
|product_code|	string	|Yes	|Code for product.
|contact_phone|	string  |	Yes	  |Contact phone number for on which SMS is sent after product purchase.
|location_id|	string|	No	|Parameter is required for validating product code NATIONAL_WATER. Get this value from the choice-list of product with code NATIONAL_WATER.

#### Sample request for product validation.

Make sure to replace <--Your API Key--> with your generated API Key.

```js
curl "https://payments.relworx.com/api/products/validate" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.relworx.v2" \
  -H "Authorization: Bearer <--Your API Key-->" \
  -d '{
        "account_no": "RELJH012BV45P",
        "reference": "52750b30ffbc7de3b36",
        "msisdn": "0701454887",
        "amount": 1000,
        "product_code": "MTN_UG_AIRTIME",
        "contact_phone": "0701454832",
    }'
```

#### Response Parameters

|Parameter	|Description
|-----------|-------------
|customer_name	|Name of customer to receive product if available.
|validation_reference	|A unique reference that identifies a validation. This is required when purchasing product.

#### Sample response.

```js
{
    "success": true,
    "customer_name": "",
    "validation_reference": "416b358df57e82a6"
}
```