---
sidebar_position: 5
---

This API endpoint enables you to purchase a product.

#### Purchase amount and charge will be deducted from your business account's mobile money UGX wallet.

#### HTTP Request (POST)

```
https://payments.relworx.com/api/products/purchase
```

#### Arguments

|Parameter	|Type	|Description
|-----------|-------|------------
|account_no	|string	|Business account code. This is generated for you when you create a business account.
|validation_reference|	string	|Validation reference obtained during validation.

#### Sample request for product purchase.

Make sure to replace <--Your API Key--> with your generated API Key.

```
curl "https://payments.relworx.com/api/products/purchase" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.relworx.v2" \
  -H "Authorization: Bearer <--Your API Key-->" \
  -d '{
        "account_no": "RELJH012BV45P",
        "validation_reference": "416b358df57e82a6uyd"
    }'
```

#### Sample response.

```
{
    "success": true,
    "message": "Product purchase in progress.",
    "internal_reference": "ae84c6691c6b9706061b2f093d25ced5"
}
```