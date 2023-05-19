---
sidebar_positon: 1
---

This endpoint requests a payment session for VISA/Mastercard.

#### POST
```js
https://payments.relworx.com/api/visa/request-session
```

### Arguments

|Parameter	|Type	|Required	|Description
|-----------|-------|-----------|-----------------
|account_no	|string	|Yes	|Business account number. This is generated for you when you create a business account.
|reference	|string	|Yes	|A unique generated string to identify your request. A minimum of 8 and maximum of 36 characters is allowed.
|currency	|string	|Yes	|3 letter ISO currency code for example UGX. No currency conversion is done. Currently we support UGX and USD.
|amount	|decimal	|Yes	|Amount to be deducted from Visa/Mastercard card holder.
|description|	string|	No	|A description for the request.


#### Sample request to get a payment session

```js
curl "https://payments.relworx.com/api/visa/request-session" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.relworx.v2" \
  -H "Authorization: Bearer <--Your API Key-->" \
  -d '{
        "account_no": "RELJH012BV45P",
        "reference": "52750b30ffbc7de3b36",
        "currency": "UGX",
        "amount": 10000.00,
        "description": "Payment Request.",
    }'
```

#### Sample response. Load returned payment_url to access visa payment form.

```js
{
    "success": true,
    "message": "Visa/Mastercard payment url generated successfully.",
    "payment_url": "https://payments.relworx.com/merchant-payment/1573621698448/visa-mastercard"
}

```