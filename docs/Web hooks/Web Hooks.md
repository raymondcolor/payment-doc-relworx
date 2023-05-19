---
sidebar_position: 1
---

# Web Hooks
When the status of your request changes from pending to either failed or success, a POST request is sent to your configured webhook endpoint including details of your request after processing. You are required to acknowledge the webhook request by responding with a HTTP 200 OK, otherwise sending is retried 10 times with exponential backoff.

<div >
   <p>You can set/configure webhook endpoints for each of your business accounts under business account settings.</p>
</div>

####

```
{
  "status": "success",
  "message":  "Request payment completed successfully.",
  "customer_reference": "kemist656ehgvcd",
  "internal_reference": "fdd10a4c5d6b459d54ebc5f09d095101",
  "msisdn": "+256773454899",
  "amount": 500.0,
  "currency": "UGX",
  "provider": "mtn_mobile_money",
  "charge": 12.5
}
```

