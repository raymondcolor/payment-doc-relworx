---
sidebar_postion: 2
---

| Code     | Meaning
|----------|--------------------
| 200      | OK - Request was successful
|400       |Bad Request - Malformed request or missing required parameters
|401       |Unauthorized - Missing token, expired token
|403       |Forbidden - You are trying to access a resource for which you don't have proper access rights.
|404       |Not Found - You are trying to access a resource that does not exist
|422       |Unprocessable Entity - You provided all the required parameters but they are not proper for the request
|500       |Internal Server Error - We had a glitch in our servers. Retry the request in a little while or contact support
|503       |Service Unavailable – We’re temporarily offline for maintenance. Please try again later.