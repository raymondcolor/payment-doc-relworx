---
sidebar_position: 2
---

The Auto Return feature for Visa/Mastercard redirects the buyer back to your website after payment has completed, failed or due to an error. Here's how to enable Auto Return:

1.  Login to your dashboard and click on accounts.
2.  Click on view button for the business account you use for visa/mastercard payments.
3.  You can view your current Auto Return configuration under settings. Click on edit business account button to change settings.

When you enable Auto Return and configure URL's for Auto Return, the target page must meet the following requirements.

- The text must help the buyer understand that the payment was made and the transaction was completed.
- The text must explain that the buyer will receive an email containing details about the payment transaction.
- The page must provide a good user experience for your customers.

#### Relworx will make a HTTP POST request to your auto-return configured URL. Ensure to verify that Relworx made this request by generating and comparing your signature to relworx_signature value.

##### Generate verification signature to verify Auto Return:

```js
/**
 * @param string $webhook_key the webhooks authentication key
 * @param string $url the webhook url
 * @param string $timestamp the signature timestamp
 * @param array $params the requests POST parameters
 */

// This data is posted to your configured auto-return
// URL plus a relworx_signature value you can compare with to verify request

//Only include these from received POST data.
$params = array(
  "status" => "success",
  "customer_reference" => "shdfjsue789sh8jshuehu",
  "internal_reference" => "jshfufehkshffkseuhfskahakhuefak",
);

function generateSignature($webhook_key, $timestamp, $url, $params) {
    $signed_data = $url;
    $signed_data .= $timestamp;
    ksort($params);
    foreach ($params as $key => $value) {
        $signed_data .= strval($key);
        $signed_data .= strval($value);
    }

    return hash_hmac('sha256', $signed_data, $webhook_key, false);
}
```