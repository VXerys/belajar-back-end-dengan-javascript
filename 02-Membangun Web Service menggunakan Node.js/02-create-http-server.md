
# 🚀 Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server

## 📚 Daftar Isi
- [🚀 Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server](#-belajar-back-end-pemula-dengan-javascript-membuat-http-server)
  - [📚 Daftar Isi](#-daftar-isi)
  - [🖥️ Membuat HTTP Server](#️-membuat-http-server)
    - [Langkah-Langkah Membuat Server:](#langkah-langkah-membuat-server)
  - [📨 Request \& Response Object](#-request--response-object)
    - [`request` Object](#request-object)
    - [`response` Object](#response-object)
  - [🛠️ Mengatur Response](#️-mengatur-response)
    - [1. Set Header](#1-set-header)
    - [2. Atur Status Code](#2-atur-status-code)
    - [3. Kirim Respons](#3-kirim-respons)
  - [⚡ Menjalankan Server dengan `listen()`](#-menjalankan-server-dengan-listen)
  - [🧪 Latihan: Membuat HTTP Server Sederhana](#-latihan-membuat-http-server-sederhana)
    - [Langkah 1: Buat File `server.js`](#langkah-1-buat-file-serverjs)
    - [Langkah 2: Jalankan Server](#langkah-2-jalankan-server)
  - [🌐 Testing Server dengan cURL dan Browser](#-testing-server-dengan-curl-dan-browser)
    - [1. Menggunakan cURL](#1-menggunakan-curl)
    - [2. Menggunakan Browser](#2-menggunakan-browser)
  - [📖 Referensi](#-referensi)

---

## 🖥️ Membuat HTTP Server
Node.js menyediakan modul **`http`** untuk membangun web server. Modul ini memungkinkan kita membuat server yang dapat menangani permintaan (request) dari client (seperti browser atau aplikasi) dan mengirimkan respons (response).

### Langkah-Langkah Membuat Server:
1. **Import Modul `http`**  
   Gunakan `require('http')` untuk mengakses modul HTTP.
   ```javascript
   const http = require('http');
   ```

2. **Buat Request Listener**  
   Fungsi ini akan menangani logika respons terhadap permintaan.
   ```javascript
   const requestListener = (request, response) => {
       // Logika respons di sini
   };
   ```

3. **Inisialisasi Server**  
   Gunakan `http.createServer()` untuk membuat instance server.
   ```javascript
   const server = http.createServer(requestListener);
   ```

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📨 Request & Response Object
### `request` Object
- Menyimpan informasi tentang permintaan dari client, seperti:
  - URL yang diakses.
  - Metode HTTP (GET, POST, dll.).
  - Header permintaan.
- Contoh: `request.url` mengembalikan path yang diminta.

### `response` Object
- Digunakan untuk mengirim respons ke client.
- Memiliki metode seperti `setHeader()`, `statusCode`, dan `end()`.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🛠️ Mengatur Response
### 1. Set Header
Tentukan tipe konten yang dikirim (misalnya HTML, JSON).
```javascript
response.setHeader('Content-Type', 'text/html');
```

### 2. Atur Status Code
Kode status HTTP menunjukkan hasil permintaan (misalnya `200` untuk sukses).
```javascript
response.statusCode = 200;
```

### 3. Kirim Respons
Gunakan `response.end()` untuk mengirim konten dan menutup koneksi.
```javascript
response.end('<h1>Halo HTTP Server!</h1>');
```

💡 **Tip**:  
Selalu akhiri respons dengan `end()`, atau client akan menunggu terus!

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## ⚡ Menjalankan Server dengan `listen()`
Method `listen()` mengaktifkan server untuk menerima permintaan. Parameter yang umum digunakan:
- **Port**: Jalur akses server (misal: `5000`).
- **Host**: Domain server (misal: `'localhost'`).
- **Callback**: Fungsi yang dijalankan saat server siap.

Contoh:
```javascript
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
```

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🧪 Latihan: Membuat HTTP Server Sederhana
### Langkah 1: Buat File `server.js`
```javascript
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
```

### Langkah 2: Jalankan Server
```bash
npm run start
```
Jika berhasil, pesan berikut muncul di terminal:  
`Server berjalan pada http://localhost:5000`.

⚠️ **Catatan untuk Windows**:  
Jika muncul pop-up "Windows Defender Firewall", pilih **Allow access**.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🌐 Testing Server dengan cURL dan Browser
### 1. Menggunakan cURL
Jalankan perintah ini di terminal:
```bash
curl -X GET http://localhost:5000/
```
Output:
```html
<h1>Halo HTTP Server!</h1>
```

### 2. Menggunakan Browser
Buka alamat `http://localhost:5000` di browser. Hasilnya:  
![Halaman Browser](https://via.placeholder.com/600x200?text=Halo+HTTP+Server!)

🚀 **Selamat!** Anda telah berhasil membuat web server pertama dengan Node.js! 🎉

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📖 Referensi
1. [Node.js HTTP Module Dokumentasi](https://nodejs.org/api/http.html)
2. [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
3. [Panduan cURL untuk Pemula](https://curl.se/docs/manual.html)

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
