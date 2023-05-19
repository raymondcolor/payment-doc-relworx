---
sidebar_position: 3
---

This api endpoint validates a mobile money subscriber’s phone number.

### HTTP Request

##### POST
```
https://payments.relworx.com/api/mobile-money/validate
```
### Arguments

|Parameter	|Type	|Required	|Description
|-----------|-------|-----------|-----------------
|msisdn	    |string	|Required	|Mobile money subscriber’s phone number. Should be internationally formatted for-example +256701345674. Only Airtel Uganda phone numbers are supported for validation at the moment.

### HTTP Response

|Parameter	|Type	|Description
|-----------|-------|-----------------
|customer_name|	string	|Shows registered customer name for specified msisdn.

### Sample  validate mobile number request.

```
Make sure to replace <--Your API Key--> with your obtained api key.

 curl "https://payments.relworx.com/api/mobile-money/validate" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/vnd.relworx.v2" \
  -H "Authorization: Bearer <--Your API Key-->" \
  -d '{
        "msisdn": "+256703560861"
    }'

```
### Sample response.
```
{
    "success": true,
    "message": "Msisdn +256701345674 successfully validated.",
    "customer_name": "CUSTOMER NAME"
}
```