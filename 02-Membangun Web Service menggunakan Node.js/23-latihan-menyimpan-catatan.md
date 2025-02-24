# 📚 README.md - Belajar Back-End Pemula dengan JavaScript

Selamat datang di dokumentasi perjalanan belajar saya dalam kursus **"Belajar Back-End Pemula dengan JavaScript"**! Di sini, saya akan membagikan pengalaman dan pengetahuan yang saya peroleh selama mengikuti kursus ini, terutama dalam membangun aplikasi back-end menggunakan JavaScript dan Hapi.js.

## 📑 Table of Contents
- [📚 README.md - Belajar Back-End Pemula dengan JavaScript](#-readmemd---belajar-back-end-pemula-dengan-javascript)
  - [📑 Table of Contents](#-table-of-contents)
  - [📝 Introduction](#-introduction)
  - [📝 Menyimpan Catatan](#-menyimpan-catatan)
    - [🛠️ Membuat Route](#️-membuat-route)
    - [📝 Handler untuk Menyimpan Catatan](#-handler-untuk-menyimpan-catatan)
    - [✅ Menangani Respons](#-menangani-respons)
  - [🔒 Mengatasi Same-Origin Policy](#-mengatasi-same-origin-policy)
    - [Solusi](#solusi)

## 📝 Introduction
Kursus ini bertujuan untuk memberikan pemahaman dasar tentang pengembangan back-end menggunakan JavaScript. Dalam kursus ini, kita akan belajar bagaimana membangun server, menangani permintaan dari klien, dan menyimpan data.

## 📝 Menyimpan Catatan
Salah satu fitur yang ingin kita implementasikan adalah kemampuan untuk menyimpan catatan yang ditambahkan dari aplikasi klien. Mari kita bahas langkah-langkah yang diperlukan untuk mencapai ini.

### 🛠️ Membuat Route
Untuk menyimpan catatan, kita perlu membuat route dengan path `/notes` dan method `POST`. Berikut adalah kode yang perlu ditambahkan ke dalam berkas `routes.js`:

```javascript
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: () => {},
  },
];

module.exports = routes;
```

### 📝 Handler untuk Menyimpan Catatan
Selanjutnya, kita perlu membuat fungsi handler yang akan menangani logika penyimpanan catatan. Fungsi ini akan didefinisikan dalam berkas `handler.js`. Berikut adalah langkah-langkahnya:

1. **Membuat Array untuk Menampung Catatan**  
   Buat berkas `notes.js` untuk menyimpan catatan dalam bentuk array:

   ```javascript
   const notes = [];
   module.exports = notes;
   ```

2. **Membuat Fungsi Handler**  
   Di dalam `handler.js`, kita akan membuat fungsi `addNoteHandler`:

   ```javascript
   const addNoteHandler = (request, h) => {
     const { title, tags, body } = request.payload;
     // Logika penyimpanan catatan akan ditambahkan di sini
   };

   module.exports = { addNoteHandler };
   ```

3. **Mengambil Data dari Klien**  
   Kita akan mengambil data catatan dari `request.payload`:

   ```javascript
   const { title, tags, body } = request.payload;
   ```

4. **Membuat Struktur Catatan**  
   Catatan yang disimpan harus memiliki struktur tertentu. Kita akan menggunakan library `nanoid` untuk menghasilkan ID unik:

   ```javascript
   const { nanoid } = require('nanoid');

   const addNoteHandler = (request, h) => {
     const { title, tags, body } = request.payload;
     const id = nanoid(16);
     const createdAt = new Date().toISOString();
     const updatedAt = createdAt;

     const newNote = {
       id,
       title,
       tags,
       body,
       createdAt,
       updatedAt,
     };

     notes.push(newNote);
   };
   ```

### ✅ Menangani Respons
Setelah catatan ditambahkan, kita perlu memberikan respons kepada klien. Berikut adalah cara untuk menangani respons:

```javascript
const isSuccess = notes.filter((note) => note.id === id).length > 0;

if (isSuccess) {
  const response = h.response({
    status: 'success',
    message: 'Catatan berhasil ditambahkan',
    data: {
      noteId: id,
    },
  });
  response.code(201);
  return response;
}

const response = h.response({
  status: 'fail',
  message: 'Catatan gagal ditambahkan',
});
response.code(500);
return response;
```

## 🔒 Mengatasi Same-Origin Policy
Setelah menyelesaikan implementasi, kita mungkin akan menghadapi masalah dengan **Same-Origin Policy** saat mencoba mengakses fitur tambah catatan dari aplikasi klien. Ini adalah kebijakan keamanan yang membatasi bagaimana dokumen atau skrip yang dimuat dari satu asal dapat berinteraksi dengan sumber daya dari asal yang berbeda.

### Solusi
Untuk mengatasi masalah ini, kita perlu mengkonfigurasi server untuk mengizinkan permintaan dari asal yang berbeda. Salah satu cara untuk melakukannya adalah dengan menambahkan header CORS (Cross-Origin Resource Sharing) pada respons server.
