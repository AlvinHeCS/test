---
title: QA brew test
description: >-
  Call the API from JavaScript in three steps: install the SDK, make a request,
  and read the response.
hidden: false
---
```javascript JavaScript
// npm install axios
const axios = require('axios');


async function brewTest() {
  const response = await axios.get('https://httpbin.org/get', {
    params: { tea: 'oolong' },
  });

  console.log(response.status);       // 200
  console.log(response.data.args);    // { tea: 'oolong' }
  console.log(response.data.headers); // request headers echoed back
}

brewTest();
```

# Install the SDK

<!-- javascript@1-3 -->

Install the HTTP client package with npm, then import it into your script.

# Make the request

<!-- javascript@5-8 -->

Send a `GET` request to the `/get` endpoint. Pass any query parameters in `params`; they're echoed back in the response.

# Read the response

<!-- javascript@10-12 -->

The response body is in `response.data`. Check `response.status` for the HTTP status code, then read fields such as `args` and `headers`.