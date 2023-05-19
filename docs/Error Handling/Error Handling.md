---
sidebar_position: 1
---

Relworx API uses HTTP status codes to indicate success or failure of a request. Below is a summary of the HTTP status codes you should expect to handle.

- Codes in the 2XX range mean that the request was processed successfully.
- Codes in the 4XX range mean that something was wrong with the data that you sent. For example, you might have missed some required parameters, or you might be using an expired token for authentication.
- Codes in the 5XX range mean that there is a glitch in our servers.