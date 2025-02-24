# Belajar Back-End Pemula dengan JavaScript: Routing Request 🚀

## Table of Contents 📚
1. [Introduction to Routing](#introduction-to-routing)
2. [Handling URL and Method in JavaScript](#handling-url-and-method-in-javascript)
3. [Practical Example: Routing Request](#practical-example-routing-request)
4. [Testing the Server](#testing-the-server)
5. [References](#references)

---

## Introduction to Routing 🌐

Routing adalah teknik yang digunakan untuk menentukan respons server berdasarkan **path** atau **URL** yang diminta oleh client. Sebagai contoh, ketika kita mengunjungi `dicoding.com` dan `dicoding.com/about`, server akan memberikan respons yang berbeda. Hal ini karena server mengevaluasi URL yang diminta dan memberikan respons sesuai dengan logika yang telah ditentukan.

Dalam konteks back-end development dengan JavaScript, routing sangat penting untuk membangun aplikasi web yang dinamis dan responsif. Dengan routing, kita dapat mengarahkan client ke halaman yang sesuai berdasarkan URL yang mereka akses.

---

## Handling URL and Method in JavaScript 🛠️

Dalam JavaScript, kita dapat dengan mudah menangani **URL** dan **method** dari request yang diterima oleh server. Berikut adalah contoh sederhana bagaimana kita bisa mendapatkan nilai URL dan method dari request:

```javascript
const requestListener = (request, response) => {
    const { url, method } = request;
};
```

- **`url`**: Properti ini mengembalikan nilai path yang diminta oleh client tanpa host dan port. Misalnya, jika client meminta `http://localhost:5000/about`, maka nilai `url` akan menjadi `'/about'`.
- **`method`**: Properti ini mengembalikan method HTTP yang digunakan oleh client, seperti `GET`, `POST`, `PUT`, atau `DELETE`.

Dengan mendapatkan nilai `url` dan `method`, kita dapat menentukan respons yang sesuai untuk setiap request.

---

## Practical Example: Routing Request 🚀

Mari kita praktikkan konsep routing dengan membuat sebuah web server sederhana yang dapat menangani request berdasarkan URL dan method yang diminta.

### 1. Menangani URL `/` 🏠

```javascript
if(url === '/') {
    if(method === 'GET') {
        response.end('<h1>Ini adalah homepage</h1>');
    } else {
        response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
    }
}
```

- **GET**: Mengembalikan pesan "Ini adalah homepage".
- **Other Methods**: Mengembalikan pesan bahwa halaman tidak dapat diakses dengan method yang digunakan.

### 2. Menangani URL `/about` 📄

```javascript
else if(url === '/about') {
    if(method === 'GET') {
        response.end('<h1>Halo! Ini adalah halaman about</h1>');
    } else if(method === 'POST') {
        let body = [];
        
        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
        });
    } else {
        response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
    }
}
```

- **GET**: Mengembalikan pesan "Halo! Ini adalah halaman about".
- **POST**: Mengembalikan pesan yang menyertakan nama yang dikirimkan dalam body request.
- **Other Methods**: Mengembalikan pesan bahwa halaman tidak dapat diakses dengan method yang digunakan.

### 3. Menangani URL Lainnya ❓

```javascript
else {
    response.end('<h1>Halaman tidak ditemukan!</h1>');
}
```

- **Any URL**: Mengembalikan pesan "Halaman tidak ditemukan!" jika URL yang diminta bukan `/` atau `/about`.

---

## Testing the Server 🧪

Setelah menulis kode di atas, kita dapat menguji server dengan menggunakan perintah `curl` atau Postman. Berikut adalah beberapa contoh pengujian:

### 1. Mengakses Homepage 🏠

```bash
curl -X GET http://localhost:5000
# Output: <h1>Ini adalah homepage</h1>
```

### 2. Mengakses Halaman About 📄

```bash
curl -X GET http://localhost:5000/about
# Output: <h1>Halo! Ini adalah halaman about</h1>
```

### 3. Mengirim Data ke Halaman About 📤

```bash
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
# Output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
```

### 4. Mengakses URL yang Tidak Dikenal ❓

```bash
curl -X GET http://localhost:5000/unknown
# Output: <h1>Halaman tidak ditemukan!</h1>
```

---

## References 📚

- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js HTTP Module](https://nodejs.org/api/http.html)
- [Understanding HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

---

[🔝 Back to Table of Contents](#table-of-contents)