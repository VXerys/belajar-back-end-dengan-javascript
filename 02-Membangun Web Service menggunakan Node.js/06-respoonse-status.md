# 🚀 Belajar Back-End Pemula dengan JavaScript: Response Status

## 📚 Table of Contents
- [🚀 Belajar Back-End Pemula dengan JavaScript: Response Status](#-belajar-back-end-pemula-dengan-javascript-response-status)
  - [📚 Table of Contents](#-table-of-contents)
  - [1. Introduction to Response Status 🎯](#1-introduction-to-response-status-)
  - [2. Understanding Response Status Code 💡](#2-understanding-response-status-code-)
  - [3. Setting Response Status Code in Node.js 🛠️](#3-setting-response-status-code-in-nodejs-️)
  - [4. Modifying Response Status Message ✏️](#4-modifying-response-status-message-️)
  - [5. Practical Exercise: Updating Response Code 🚀](#5-practical-exercise-updating-response-code-)
    - [Langkah-langkah:](#langkah-langkah)
    - [Contoh Implementasi:](#contoh-implementasi)
    - [Testing dengan cURL:](#testing-dengan-curl)
  - [6. References 📚](#6-references-)

---

## 1. Introduction to Response Status 🎯

Dalam pembahasan sebelumnya, kita telah mempelajari banyak hal tentang **request**. Kita sudah mengenal dan menggunakan **method**, **URL**, **body request**, serta memberikan **respons** sesuai dengan karakteristik request yang ada. Namun, kita belum membahas lebih dalam mengenai **respons** itu sendiri.

Respons yang diberikan oleh server terdiri dari tiga bagian penting:
1. **Status Line (Response Status)**
2. **Response Header**
3. **Response Body**

Pada dokumentasi ini, kita akan fokus membahas **Response Status** terlebih dahulu.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 2. Understanding Response Status Code 💡

**Response Status Code** adalah bagian dari respons yang memberikan informasi apakah sebuah request berhasil atau gagal dilakukan. Status ini terdiri dari:
- **Status Code**: Kode 3 digit angka yang menunjukkan status request.
- **Status Message**: Pesan teks yang menjelaskan status code tersebut.

Status code dibagi menjadi beberapa kategori:
- **100-199**: Informational responses.
- **200-299**: Successful responses.
- **300-399**: Redirect.
- **400-499**: Client error.
- **500-599**: Server errors.

Contoh status code yang sering digunakan:
- **200 OK**: Request berhasil.
- **400 Bad Request**: Request tidak valid.
- **404 Not Found**: Resource yang diminta tidak ditemukan.
- **500 Internal Server Error**: Terjadi kesalahan pada server.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 3. Setting Response Status Code in Node.js 🛠️

Di **Node.js**, kita dapat mengatur **status code** menggunakan properti `response.statusCode`. Berikut contohnya:

```javascript
const requestListener = (request, response) => {
    // Memberitahu client bahwa resource yang diminta tidak ada.
    response.statusCode = 404;
};
```

Pada contoh di atas, server akan mengembalikan status code **404** yang berarti resource yang diminta tidak ditemukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 4. Modifying Response Status Message ✏️

Selain status code, kita juga dapat mengubah **status message** menggunakan properti `response.statusMessage`. Contoh:

```javascript
const requestListener = (request, response) => {
    response.statusCode = 404;
 
    // Mengubah status message default "Not Found" menjadi "User is not found"
    response.statusMessage = 'User is not found';
};
```

Namun, disarankan untuk tidak mengubah status message dari nilai default kecuali benar-benar diperlukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 5. Practical Exercise: Updating Response Code 🚀

Web server yang kita buat saat ini selalu memberikan status **200 OK** untuk semua respons, meskipun request tidak berhasil. Mari kita perbaiki ini dengan memberikan status code yang sesuai.

### Langkah-langkah:
1. Buka berkas `server.js`.
2. Hapus baris kode berikut:
   ```javascript
   response.statusCode = 200;
   ```
3. Tambahkan status code yang sesuai sebelum perintah `response.end()`.

### Contoh Implementasi:
```javascript
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};
```

### Testing dengan cURL:
```bash
curl -X GET http://localhost:5000/about -i
curl -X GET http://localhost:5000/test -i
curl -X DELETE http://localhost:5000/ -i
```

Sekarang, server akan memberikan status respons yang sesuai dengan request yang dilakukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 6. References 📚

Berikut beberapa referensi yang dapat membantu Anda memahami lebih dalam tentang **Response Status**:
- [MDN Web Docs: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Node.js Documentation: HTTP Module](https://nodejs.org/api/http.html)

[🔝 Back to Table of Contents](#table-of-contents)

