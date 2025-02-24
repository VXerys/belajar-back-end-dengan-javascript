
# 🚀 Belajar Back-End Pemula dengan JavaScript: Web Framework di Node.js

## 📚 Daftar Isi
1. [Pengenalan Web Framework](#-pengenalan-web-framework)  
2. [Express.js: Framework Ringan dan Populer](#-expressjs-framework-ringan-dan-populer)  
3. [Hapi: Framework untuk Server Kompleks](#-hapi-framework-untuk-server-kompleks)  
4. [Mengapa Memilih Hapi?](#-mengapa-memilih-hapi)  
5. [Memulai dengan Hapi](#-memulai-dengan-hapi)  
6. [Referensi](#-referensi)  

---

## 🌐 Pengenalan Web Framework
Node.js menyediakan berbagai *web framework* untuk mempermudah pengembangan aplikasi back-end. Setiap framework memiliki keunikan, kelebihan, dan kekurangan. Pemilihan framework bergantung pada kebutuhan proyek, kompleksitas, dan preferensi developer.  

💡 **Tips**  
> Pilih framework yang sesuai dengan kasus penggunaan Anda. Untuk proyek sederhana, framework ringan seperti Express.js cocok. Untuk aplikasi kompleks, pertimbangkan Hapi atau framework lain dengan fitur lebih lengkap.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🎯 Express.js: Framework Ringan dan Populer
### 🔍 Karakteristik
- **Ringan dan Fleksibel**: Express.js tidak membatasi struktur proyek (*unopinionated*), sehingga developer bebas mengatur kode sesuai kebutuhan.  
- **Integrasi Mudah**: Cocok untuk aplikasi yang memerlukan integrasi dengan front-end (seperti React atau Vue.js).  
- **Sintaks Mirip Node.js Native**: Kode Express.js tidak jauh berbeda dengan Node.js murni, sehingga mudah dipelajari.  

### ⚖️ Kelebihan dan Kekurangan
| **Kelebihan**                | **Kekurangan**                          |
|------------------------------|-----------------------------------------|
| Cepat untuk proyek sederhana  | Tidak ada struktur baku                 |
| Komunitas besar               | Membutuhkan banyak *middleware* tambahan |
| Dokumentasi lengkap           | Kurang cocok untuk aplikasi kompleks    |

### 💻 Contoh Kode Dasar
```javascript
// Menggunakan Express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Halo dari Express.js!');
});

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
```

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🛠 Hapi: Framework untuk Server Kompleks
### 🔍 Karakteristik
- **Lingkungan Lengkap**: Menyediakan fitur bawaan seperti *authentication*, CORS, dan validasi input.  
- **Struktur Terorganisir**: Memiliki aturan yang jelas untuk pengembangan API.  
- **Abstraksi Tinggi**: Lebih terstruktur dibandingkan Express.js, tetapi memerlukan pembelajaran lebih dalam.  

### ⚖️ Kelebihan dan Kekurangan
| **Kelebihan**                | **Kekurangan**                          |
|------------------------------|-----------------------------------------|
| Cocok untuk aplikasi kompleks | Kurang fleksibel dalam struktur kode    |
| Fitur bawaan lengkap          | Membutuhkan waktu untuk mempelajari API |
| Dokumentasi terperinci        | Abstraksi jauh dari Node.js native      |

### 🚀 Kenapa Hapi Dipilih di Kelas Ini?
- **REST API Kompleks**: Hapi mendukung pembuatan API dengan fitur siap pakai.  
- **Konsistensi Kode**: Struktur yang terorganisir memudahkan kolaborasi tim.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🧩 Memulai dengan Hapi
### 📝 Langkah-Langkah
1. **Instalasi**  
   ```bash
   npm install @hapi/hapi
   ```

2. **Membuat Server Dasar**  
   ```javascript
   const Hapi = require('@hapi/hapi');

   const init = async () => {
     const server = Hapi.server({
       port: 3000,
       host: 'localhost'
     });

     // Definisikan route
     server.route({
       method: 'GET',
       path: '/',
       handler: (request, h) => {
         return 'Halo dari Hapi!';
       }
     });

     await server.start();
     console.log('Server berjalan di %s', server.info.uri);
   };

   init();
   ```

3. **Menjalankan Server**  
   ```bash
   node server.js
   ```

### 💡 Tips Pengembangan
- Gunakan `server.route()` untuk mendefinisikan endpoint.  
- Manfaatkan plugin Hapi untuk menambahkan fitur seperti autentikasi.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📚 Referensi
### 📖 JavaScript & Node.js
- [Dokumentasi Resmi Hapi](https://hapi.dev/)  
- [Panduan Express.js](https://expressjs.com/)  
- [Node.js Fundamentals](https://nodejs.org/en/docs/guides/)  

### 🔗 Sumber Tambahan
- [Membangun REST API dengan Hapi](https://futurestud.io/learningpaths/hapi)  
- [Perbandingan Framework Node.js](https://www.sitepoint.com/node-js-frameworks-comparison/)  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
