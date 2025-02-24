# Belajar Back-End Pemula dengan JavaScript 🚀

## Table of Contents 📚
1. [Introduction to Body Request](#introduction-to-body-request)
2. [Understanding Streams in Node.js](#understanding-streams-in-nodejs)
3. [Practical Example: Handling POST Requests](#practical-example-handling-post-requests)
4. [Exercise: Getting Body Request](#exercise-getting-body-request)
5. [References](#references)

---

## Introduction to Body Request 📝

When a client makes a request using the **POST** or **PUT** method, the request usually contains data stored in the **body request**. This data can be in various formats such as text, JSON, image files, or other formats. The server then processes this data, either storing it in a database or keeping it as a complete object.

It's important to note that `http.clientRequest` is a subclass of `ReadableStream`. This means that retrieving data from the body is slightly more complex than retrieving data from the headers. The body data is obtained using **streaming techniques**, which utilize `EventEmitter` to send data in chunks. In the case of `http.clientRequest`, the `data` and `end` events are used to retrieve the body data.

---

## Understanding Streams in Node.js 💡

Streams in Node.js are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient manner. They are particularly useful when dealing with large amounts of data that cannot be processed all at once.

### Key Concepts:
- **Readable Streams:** Used to read data from a source.
- **Writable Streams:** Used to write data to a destination.
- **Duplex Streams:** Can both read and write data.
- **Transform Streams:** A type of duplex stream where the output is computed based on the input.

In the context of handling HTTP requests, the `request` object is a readable stream, and the `response` object is a writable stream.

---

## Practical Example: Handling POST Requests 🚀

Let's dive into a practical example of how to handle POST requests and retrieve data from the body.

### Code Example:
```javascript
const requestListener = (request, response) => {
    let body = [];
 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
 
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        response.end(`<h1>Hai, ${body}!</h1>`);
    });
};
```

### Explanation:
1. **Initialization:** We declare a variable `body` and initialize it as an empty array. This array will hold the chunks of data received from the stream.
2. **Data Event:** When the `data` event is triggered, we push the received chunk of data into the `body` array.
3. **End Event:** When the `end` event is triggered, we concatenate all the chunks in the `body` array and convert them into a string using `Buffer.concat(body).toString()`.

---

## Exercise: Getting Body Request 🛠️

In this exercise, we will modify our web server to handle POST requests and display a greeting message based on the data sent in the body.

### Step 1: Simplify the Server Code
First, let's remove the unnecessary logic for PUT and DELETE methods to focus on handling POST requests.

```javascript
const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        let body = [];
        
        request.on('data', (chunk) => {
            body.push(chunk);
        });
     
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            response.end(`<h1>Hai, ${body}!</h1>`);
        });
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
```

### Step 2: Handling JSON Data
The client will send data in JSON format, such as `{ "name": "Dicoding" }`. To extract the `name` value, we need to parse the JSON string.

```javascript
if(method === 'POST') {
  let body = [];
 
  request.on('data', (chunk) => {
    body.push(chunk);
  });
 
  request.on('end', () => {
    body = Buffer.concat(body).toString();
    const { name } = JSON.parse(body);
    response.end(`<h1>Hai, ${name}!</h1>`);
  });
}
```

### Step 3: Testing the Server
Run the server and test it using `curl`:

```bash
curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"
```

### Expected Output:
```html
<h1>Hai, Dicoding!</h1>
```

---

## References 📚

### JavaScript Basics
- [JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Node.js Streams
- [Node.js Streams Documentation](https://nodejs.org/api/stream.html)
- [Understanding Streams in Node.js](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)

### HTTP Requests
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [Handling POST Requests in Node.js](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

---

[Back to Table of Contents](#table-of-contents)