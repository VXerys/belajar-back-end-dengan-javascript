# Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server dengan Hapi 🚀

## Table of Contents 📚
- [Belajar Back-End Pemula dengan JavaScript: Membuat HTTP Server dengan Hapi 🚀](#belajar-back-end-pemula-dengan-javascript-membuat-http-server-dengan-hapi-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Pengenalan Membuat HTTP Server dengan Hapi 🚀](#pengenalan-membuat-http-server-dengan-hapi-)
  - [Instalasi Modul @hapi/hapi 📦](#instalasi-modul-hapihapi-)
  - [Struktur Kode Dasar Hapi 💻](#struktur-kode-dasar-hapi-)
    - [Penjelasan Kode 📝](#penjelasan-kode-)
  - [Menjalankan Server 🖥️](#menjalankan-server-️)
  - [Latihan Praktik 🛠️](#latihan-praktik-️)
    - [Langkah-Langkah Praktik](#langkah-langkah-praktik)
  - [Referensi 📚](#referensi-)

---

## Pengenalan Membuat HTTP Server dengan Hapi 🚀

Dalam pembelajaran ini, kita akan mempelajari cara membuat **HTTP Server** menggunakan **Hapi**, sebuah framework Node.js yang populer untuk membangun aplikasi back-end. Berbeda dengan menggunakan core module `http` secara langsung, Hapi menyediakan cara yang lebih terstruktur dan mudah untuk membuat server.

Hapi adalah modul pihak ketiga yang dapat diinstal melalui **NPM (Node Package Manager)**. Dengan Hapi, kita dapat mengatur konfigurasi server seperti **port** dan **host** dengan lebih mudah, serta menangani permintaan (request) dan respons (response) secara efisien.

---

## Instalasi Modul @hapi/hapi 📦

Sebelum menggunakan Hapi, kita perlu menginstal modulnya terlebih dahulu. Berikut langkah-langkahnya:

1. Buka Terminal pada direktori proyek Anda.
2. Jalankan perintah berikut untuk menginstal modul `@hapi/hapi`:

   ```bash
   npm install @hapi/hapi
   ```

3. Setelah instalasi selesai, pastikan modul telah terdaftar di berkas `package.json` dengan melihat properti `dependencies`. Contoh:

   ```json
   "dependencies": {
     "@hapi/hapi": "^21.3.2"
   }
   ```

🎉 Selamat! Modul Hapi telah berhasil diinstal dan siap digunakan.

---

## Struktur Kode Dasar Hapi 💻

Berikut adalah struktur kode dasar untuk membuat HTTP server menggunakan Hapi:

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

### Penjelasan Kode 📝

1. **Import Modul Hapi**:
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
   Method `Hapi.server()` digunakan untuk membuat server. Parameter yang diterima adalah objek `ServerOptions`, di mana kita dapat mengatur **port** dan **host** server.

3. **Menjalankan Server**:
   ```javascript
   await server.start();
   console.log(`Server berjalan pada ${server.info.uri}`);
   ```
   Proses menjalankan server dilakukan secara asynchronous menggunakan `await`. Setelah server berhasil dijalankan, alamat server akan ditampilkan di konsol.

---

## Menjalankan Server 🖥️

Setelah menulis kode, simpan berkas (misalnya `server.js`) dan jalankan server dengan perintah berikut:

```bash
npm run start
```

Jika server berhasil dijalankan, Anda akan melihat pesan berikut di konsol:

```
Server berjalan pada http://localhost:5000
```

Anda dapat mengakses server tersebut melalui browser atau menggunakan **cURL**. Secara default, Hapi akan mengembalikan respons **"Not Found"** jika tidak ada request handler yang menangani permintaan.

---

## Latihan Praktik 🛠️

### Langkah-Langkah Praktik

1. **Instalasi Modul**:
   Pastikan modul `@hapi/hapi` sudah terinstal dengan menjalankan perintah:
   ```bash
   npm install @hapi/hapi
   ```

2. **Menulis Kode**:
   Buat atau buka berkas `server.js`, lalu tulis kode dasar Hapi seperti yang telah dijelaskan sebelumnya.

3. **Menjalankan Server**:
   Jalankan server dengan perintah:
   ```bash
   npm run start
   ```

4. **Menguji Server**:
   Buka browser atau gunakan cURL untuk mengakses `http://localhost:5000`. Anda akan melihat respons **"Not Found"** karena belum ada route yang didefinisikan.

---

## Referensi 📚

Berikut beberapa referensi yang dapat membantu Anda memahami lebih dalam tentang Hapi dan pembuatan HTTP server:

1. [Dokumentasi Resmi Hapi](https://hapi.dev/)
2. [Node.js Documentation](https://nodejs.org/en/docs/)
3. [JavaScript Asynchronous Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

---

[🔝 Kembali ke Table of Contents](#table-of-contents-📚)