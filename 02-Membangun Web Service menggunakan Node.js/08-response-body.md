# Belajar Back-End Pemula dengan JavaScript 🚀

## Table of Contents 📚
- [Belajar Back-End Pemula dengan JavaScript 🚀](#belajar-back-end-pemula-dengan-javascript-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Introduction to HTTP Response 🌐](#introduction-to-http-response-)
  - [Response Header and Body 📝](#response-header-and-body-)
    - [Header Response](#header-response)
    - [Body Response](#body-response)
  - [Writing Data to Response Body ✍️](#writing-data-to-response-body-️)
  - [Practical Example: Changing Response Body to JSON 🚀](#practical-example-changing-response-body-to-json-)
    - [Full Example: Request Listener dengan JSON Response](#full-example-request-listener-dengan-json-response)
  - [References 📚](#references-)

---

## Introduction to HTTP Response 🌐

Dalam komunikasi antara client dan server, HTTP response adalah jawaban yang diberikan oleh server terhadap permintaan (request) dari client. Response ini terdiri dari dua bagian utama: **header** dan **body**. 

- **Header**: Berisi metadata tentang response, seperti status code, tipe konten (MIME types), dan informasi lainnya yang diperlukan oleh client.
- **Body**: Berisi data utama atau konten yang dikirimkan oleh server kepada client.

---

## Response Header and Body 📝

### Header Response
Header respons menyimpan informasi yang menjelaskan tentang data yang dikirimkan. Informasi ini bisa berupa status respons, tipe konten, tanggal, dan metadata lainnya. Penting untuk dicatat bahwa header hanya berisi informasi yang menjelaskan data utama, bukan data itu sendiri.

### Body Response
Body respons adalah tempat di mana data utama disimpan. Dalam konteks back-end development dengan JavaScript, kita menggunakan objek `http.ServerResponse` untuk menulis data ke body respons. Objek ini merupakan instance dari `WritableStream`, yang memungkinkan kita untuk menulis data menggunakan method `response.write()` dan mengakhirinya dengan `response.end()`.

---

## Writing Data to Response Body ✍️

Untuk menulis data ke body respons, kita dapat menggunakan method `response.write()` dan `response.end()`. Berikut adalah contoh sederhana:

```javascript
const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};
```

Kita juga bisa mempersingkat penulisan dengan menggunakan `response.end()` untuk menulis data sekaligus mengakhiri proses penulisan:

```javascript
const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};
```

**Penting:** Selalu pastikan untuk menulis status dan header respons sebelum menulis data ke body. Hal ini karena metadata harus sudah ditentukan sebelum data utama dikirimkan.

---

## Practical Example: Changing Response Body to JSON 🚀

Pada latihan ini, kita akan mengubah format respons dari HTML menjadi JSON. Berikut adalah langkah-langkahnya:

1. **Mengubah Content-Type Header**: Pastikan header `Content-Type` diatur ke `application/json`.
2. **Menggunakan JSON.stringify()**: Karena `response.end()` hanya menerima string atau buffer, kita perlu mengubah objek JavaScript menjadi JSON string menggunakan `JSON.stringify()`.

Contoh kode untuk mengubah respons ketika halaman tidak ditemukan:

```javascript
response.end(JSON.stringify({
    message: 'Halaman tidak ditemukan!',
}));
```

**Testing dengan cURL**:
```bash
curl -X GET http://localhost:5000/anything
// output: { "message":"Halaman tidak ditemukan!"}
```

### Full Example: Request Listener dengan JSON Response
Berikut adalah contoh lengkap dari fungsi `requestListener` yang merespons dengan JSON:

```javascript
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node.js');

    const { method, url } = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};
```

**Testing dengan cURL**:
```bash
curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}
curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
```

---

## References 📚

- [Node.js Documentation: http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
- [MDN Web Docs: HTTP Response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response)
- [JSON.stringify() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

---

[🔝 Back to Table of Contents](#table-of-contents)