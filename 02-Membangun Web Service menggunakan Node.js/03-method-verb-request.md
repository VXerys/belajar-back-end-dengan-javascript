
# 🚀 Belajar Back-End Pemula dengan JavaScript: Handling HTTP Methods

## 📚 Daftar Isi
- [🚀 Belajar Back-End Pemula dengan JavaScript: Handling HTTP Methods](#-belajar-back-end-pemula-dengan-javascript-handling-http-methods)
  - [📚 Daftar Isi](#-daftar-isi)
  - [🌟 Pengenalan](#-pengenalan)
  - [🔍 Memahami HTTP Method](#-memahami-http-method)
  - [💻 Menangani Request di Node.js](#-menangani-request-di-nodejs)
    - [Mengakses Properti `method`](#mengakses-properti-method)
    - [Logika Kondisional Berdasarkan Method](#logika-kondisional-berdasarkan-method)
  - [🛠 Contoh Praktis: Respons Berbeda Berdasarkan Method](#-contoh-praktis-respons-berbeda-berdasarkan-method)
    - [Penjelasan Kode:](#penjelasan-kode)
  - [📡 Testing dengan cURL](#-testing-dengan-curl)
    - [GET Request](#get-request)
    - [POST Request](#post-request)
    - [PUT Request](#put-request)
    - [DELETE Request](#delete-request)
  - [📖 Referensi](#-referensi)
  - [🎯 Kesimpulan](#-kesimpulan)

---

## 🌟 Pengenalan
Pada materi sebelumnya, kita telah membuat web server sederhana dengan Node.js. Namun, server tersebut belum bisa membedakan jenis permintaan (request) dari client berdasarkan **HTTP method** (seperti GET, POST, PUT, DELETE). Materi ini akan menjelaskan cara menangani berbagai method dan memberikan respons yang sesuai.

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 🔍 Memahami HTTP Method
HTTP method menentukan jenis aksi yang ingin dilakukan client terhadap sumber daya (resource) di server. Contoh umum:
- **GET**: Meminta data dari server.
- **POST**: Mengirim data baru ke server.
- **PUT**: Memperbarui data yang sudah ada.
- **DELETE**: Menghapus data.

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 💻 Menangani Request di Node.js
### Mengakses Properti `method`
Objek `request` dalam fungsi `requestListener` menyediakan properti `method` untuk mengetahui jenis HTTP method yang digunakan client.

```javascript
const requestListener = (request, response) => {
    const method = request.method; // Mengambil nilai method
    // atau gunakan destructuring:
    const { method } = request;
};
```

### Logika Kondisional Berdasarkan Method
Kita bisa menggunakan `if` statement untuk memberikan respons berbeda:

```javascript
if (method === 'GET') {
    // Respons untuk GET
} else if (method === 'POST') {
    // Respons untuk POST
}
// ... dan seterusnya
```

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 🛠 Contoh Praktis: Respons Berbeda Berdasarkan Method
Berikut implementasi server yang merespons dengan pesan berbeda untuk setiap method:

```javascript
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method } = request; // Destructuring method

    if (method === 'GET') {
        response.end('<h1>Hello!</h1>'); // 🟢 Respons GET
    }

    if (method === 'POST') {
        response.end('<h1>Hai!</h1>'); // 🔵 Respons POST
    }

    if (method === 'PUT') {
        response.end('<h1>Bonjour!</h1>'); // 🟡 Respons PUT
    }

    if (method === 'DELETE') {
        response.end('<h1>Salam!</h1>'); // 🔴 Respons DELETE
    }
};

const server = http.createServer(requestListener);

server.listen(5000, 'localhost', () => {
    console.log('Server berjalan di http://localhost:5000');
});
```

### Penjelasan Kode:
1. **`response.setHeader`**: Menetapkan tipe konten sebagai HTML.
2. **`response.statusCode = 200`**: Menandakan respons sukses.
3. **Kondisional `method`**: Setiap method memiliki respons unik.

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 📡 Testing dengan cURL
Untuk menguji server, gunakan perintah cURL dengan method berbeda:

### GET Request
```bash
curl -X GET http://localhost:5000
# Output: <h1>Hello!</h1>
```

### POST Request
```bash
curl -X POST http://localhost:5000
# Output: <h1>Hai!</h1>
```

### PUT Request
```bash
curl -X PUT http://localhost:5000
# Output: <h1>Bonjour!</h1>
```

### DELETE Request
```bash
curl -X DELETE http://localhost:5000
# Output: <h1>Salam!</h1>
```

**Pastikan server sedang berjalan!** Gunakan `npm run start` untuk menjalankannya.

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 📖 Referensi
1. **[Node.js HTTP Documentation](https://nodejs.org/api/http.html)**: Dokumentasi resmi modul `http` Node.js.
2. **[MDN Web Docs: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)**: Penjelasan lengkap tentang HTTP methods.
3. **[cURL Cheat Sheet](https://curl.se/docs/manual.html)**: Panduan penggunaan cURL untuk testing.

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 🎯 Kesimpulan
Dengan memanfaatkan properti `method` dari objek `request`, kita bisa membuat server yang responsif terhadap berbagai jenis permintaan. Ini adalah langkah penting dalam membangun RESTful API di kemudian hari. 

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**
