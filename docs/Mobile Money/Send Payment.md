---
sidebar_position: 2
---

This api endpoint sends payment to a mobile money subscriber.

### HTTP Request

##### POST
```
https://payments.relworx.com/api/mobile-money/send-payment
```
### Arguments

|Parameter	|Type	|Required	|Description
|-----------|-------|-----------|-----------------
|account_no	|string	|Required	|Business account number. This is generated for you when you create a business account.
|reference	|string	|Required	|A unique generated string to identify your request. A minimum of 8 and maximum of 36 characters is allowed.
|msisdn	|string	|Required	|The recipient’s mobile money account number to which the money will be sent. Should be internationally formatted for-example +256701345672.
|currency	|string	|Required	|3 letter ISO currency code for example UGX. No currency conversion is done, so the currency must be valid for the given phone number (msisdn). Currently we support UGX and KES.
|amount	|decimal|	Required	|Amount to be sent to recipient’s mobile money account.
|description|	string	|Optional	|A description for the request


### Sample  send payment request

```
curl "https://payments.relworx.com/api/mobile-money/send-payment" \
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
        "description": "Send Payment to John Doe."
    }'

```
### Sample response.
```
{
    "success": true,
    "message": "Send payment in progress.",
    "internal_reference": "d3ae5e14f05fcc58427331d38cb11d42"
}
```