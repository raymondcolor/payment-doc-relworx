---
sidebar_position: 4
---

This endpoint checks balance on a mobile money wallet.

### HTTP Request

##### POST
```js
https://payments.relworx.com/api/mobile-money/check-wallet-balance
```
### Arguments

|Parameter	|Type	|Required	|Description
|-----------|-------|-----------|-----------------
|account_no	 |string	|Yes	|Business account number. This is generated for you when you create a business account.
|currency	|string	|Yes	|3 letter ISO currency code for example UGX.

### HTTP Response

|Parameter	|Type	|Description
|-----------|-------|-----------------
|balance   |string	|Balance on mobile money wallet.

### Sample  check wallet balance request.

Make sure to replace <--Your API Key--> with your obtained api key.

```js
   curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key-->" https://payments.relworx.com/api/mobile-money/check-wallet-balance\?account_no\=RELB0C798FGHVCS\&currency\=UGX
```
### Sample response.
```js
{
    "success": true,
    "balance": 0.0,
}
```