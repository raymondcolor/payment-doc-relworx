---
sidebar_position: 1
---

This api endpoint requests for a payment from a mobile money subscriber.

### HTTP Request

##### POST
```js
https://payments.relworx.com/api/mobile-money/request-payment 
```

### Arguments

|Parameter	|Type	|Required|	Description|
|-----------|-------|--------|------------------
|account_no |string| Required|Business account number. This is generated for you when you create a business account.
|reference	|string	|Required	|A unique generated string to identify your request. A minimum of 8 and maximum of 36 characters is allowed.
|msisdn	    |string	|Required	|Mobile money subscribers phone number from which to deduct payment. Should be internationally formatted. for-example +256701345678
|currency	|string	|Required	|3 letter ISO currency code for example UGX. No currency conversion is done, so the currency must be valid for the given phone number (msisdn). Currently we support UGX and KES.
|amount	    |decimal|	Required|	Amount to be deducted from mobile money subscriber’s account.
|description|	string|	Optional|	A description for the request.

### Sample payment request

```js
    curl "https://payments.relworx.com/api/mobile-money/request-payment" \

    -X POST \
    -H "Content-Type: application/json" \
    -H "Accept: application/vnd.relworx.v2" \
    -H "Authorization: Bearer <--Your API Key-->" \
    -d '{
            "account_no": "RELJH012BV45P",
            "reference": "52750b30ffbc7de3b36",
            "msisdn": "+256701345672",
            "currency": "UGX",
            "amount": 500.00,
            "description": "Payment Request."
        }'
```
### Sample response.
```js
 {
    "success": true,
    "message": "Request payment in progress.",
    "internal_reference": "d3ae5e14f05fcc58427331d38cb11d42"
  }
```