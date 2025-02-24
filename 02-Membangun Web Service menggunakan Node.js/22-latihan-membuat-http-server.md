# 🚀 Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server Menggunakan Hapi Framework

## 📚 Table of Contents
- [🚀 Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server Menggunakan Hapi Framework](#-belajar-back-end-pemula-dengan-javascript-membuat-http-server-menggunakan-hapi-framework)
  - [📚 Table of Contents](#-table-of-contents)
  - [🌟 Pengenalan](#-pengenalan)
  - [🛠 Instalasi Hapi Framework](#-instalasi-hapi-framework)
  - [💻 Membuat HTTP Server](#-membuat-http-server)
    - [Penjelasan Kode:](#penjelasan-kode)
  - [🚀 Menjalankan Server](#-menjalankan-server)
  - [🌐 Menghubungkan Web Server dengan Aplikasi Client](#-menghubungkan-web-server-dengan-aplikasi-client)
  - [⚠️ Catatan Penting](#️-catatan-penting)
  - [📖 Referensi](#-referensi)

---

## 🌟 Pengenalan
Dalam latihan ini, kita akan mempelajari cara membuat **HTTP Server** menggunakan **Hapi Framework** dalam JavaScript. Hapi adalah framework Node.js yang populer untuk membangun aplikasi web dan API. Kita akan mulai dari instalasi hingga menjalankan server dan menghubungkannya dengan aplikasi client.

---

## 🛠 Instalasi Hapi Framework
Sebelum memulai, pastikan Anda telah menginstal **Node.js** dan **npm** (Node Package Manager) di sistem Anda. Jika belum, Anda bisa mengunduhnya dari [situs resmi Node.js](https://nodejs.org/).

Untuk menginstal Hapi Framework, jalankan perintah berikut di terminal proyek Anda:
```bash
npm install @hapi/hapi
```
Perintah ini akan mengunduh dan menginstal package Hapi ke dalam proyek Anda.

---

## 💻 Membuat HTTP Server
Setelah menginstal Hapi, buka file `server.js` dan tambahkan kode berikut untuk membuat server HTTP:

```javascript
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
```

### Penjelasan Kode:
1. **Import Hapi Framework**:  
   ```javascript
   const Hapi = require('@hapi/hapi');
   ```
   Kita mengimpor modul Hapi untuk digunakan dalam proyek.

2. **Membuat Server**:  
   ```javascript
   const server = Hapi.server({
     port: 5000,
     host: 'localhost',
   });
   ```
   Kita membuat instance server dengan menentukan port dan host.

3. **Menjalankan Server**:  
   ```javascript
   await server.start();
   console.log(`Server berjalan pada ${server.info.uri}`);
   ```
   Server dijalankan, dan pesan log akan muncul di terminal saat server berhasil dijalankan.

---

## 🚀 Menjalankan Server
Untuk menjalankan server, gunakan perintah berikut di terminal:
```bash
npm run start
```
Pastikan Anda telah mengonfigurasi script `start` di file `package.json` seperti ini:
```json
"scripts": {
  "start": "nodemon server.js"
}
```
**Nodemon** akan memantau perubahan pada file `server.js` dan secara otomatis me-restart server saat ada perubahan.

---

## 🌐 Menghubungkan Web Server dengan Aplikasi Client
Setelah server berjalan, buka browser dan akses URL `http://localhost:5000`. Jika server berhasil dijalankan, Anda akan melihat halaman kosong atau pesan default dari Hapi.

Untuk menghubungkan web server dengan aplikasi client:
1. Buka aplikasi client Anda.
2. Pilih opsi **"Change URL"**.
3. Masukkan URL web server Anda, misalnya `http://localhost:5000`.
4. Klik **"Save"** atau **"Connect"**.

---

## ⚠️ Catatan Penting
1. **Port 5000 pada MacOS**:  
   Jika Anda menggunakan MacOS Monterey, port 5000 mungkin sudah digunakan oleh layanan AirPlay Receiver. Sebagai alternatif, gunakan port lain, misalnya `8000` atau lebih tinggi.

2. **Error pada Halaman**:  
   Jika Anda melihat pesan **"Error displaying notes! Make sure you have done with the back-end or correct url"**, itu wajar karena kita belum menambahkan logika atau endpoint pada server.

---

## 📖 Referensi
1. [Dokumentasi Resmi Hapi Framework](https://hapi.dev/)  
2. [Panduan Node.js untuk Pemula](https://nodejs.org/en/docs/guides/getting-started-guide/)  
3. [Menggunakan Nodemon untuk Development](https://nodemon.io/)  

---

🔙 [Kembali ke Table of Contents](#-table-of-contents)