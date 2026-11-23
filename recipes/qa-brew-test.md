---
title: QA brew test
description: >-
  Call the API in three steps: install the SDK, make a request, and read the
  response.
hidden: false
---
```javascript Node.js
// npx api install "@alvinproject/v1.0#<registry-id>"
import alvinproject from '@api/alvinproject';

alvinproject.server('https://httpbin.org');

const { data, status } = await alvinproject.echoGet();

console.log(status); // 200
console.log(data.url); // https://httpbin.org/get
console.log(data.headers);
```

# Install the SDK

<!-- javascript@1-2 -->

Generate and install the JavaScript SDK from the API definition with `npx api install`, then import it into your project.

# Make the request

<!-- javascript@4-6 -->

Point the SDK at the API server and call the **Echo a GET request** endpoint (`GET /get`).

# Read the response

<!-- javascript@8-10 -->

The call resolves with the HTTP `status` and the parsed JSON `data`. The `/get` endpoint echoes back the request URL and headers.