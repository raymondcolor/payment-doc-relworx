---
sidebar_position: 3
---

This API endpoint provides a choice list for a product.

#### HTTP Request (GET)

```js
https://payments.relworx.com/api/products/choice-list
```

#### Arguments

|Parameter	|Type	|Required	|Description
|-----------|--------|----------|---------------
|code	|string	|Yes	|Product code.

#### Sample request to get choice-list of a products.

Make sure to replace <--Your API Key--> with your generated API Key.

```js
     curl -i -H "Accept: application/vnd.relworx.v2" -H "Content-Type: application/json" -H "Authorization: Bearer <--Your API Key-->" https://payments.relworx.com/api/products/choice-list\?code\=NATIONAL_WATER
```

#### Sample response.

```js
{
    "success": true,
    "choice_list": [
        {
            "id": "249378",
            "name": "NWSC Mukono"
        },
        {
            "id": "249375",
            "name": "NWSC Entebbe"
        },
        {
            "id": "249376",
            "name": "NWSC Kawuku"
        },
        {
            "id": "249372",
            "name": "NWSC Iganga"
        },
        {
            "id": "249545",
            "name": "NWSC Lugazi"
        },
        {
            "id": "249373",
            "name": "NWSC Jinja"
        },
        {
            "id": "249374",
            "name": "NWSC Kajjansi"
        },
        {
            "id": "249371",
            "name": "NWSC Kampala"
        },
        {
            "id": "249379",
            "name": "Other NWSC Areas"
        }
    ]
}
```