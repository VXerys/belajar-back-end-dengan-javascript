
# 📚 Belajar Back-End Pemula dengan JavaScript: Struktur Proyek Hapi

## 📑 Daftar Isi
1. [Struktur Proyek](#-struktur-proyek)
2. [Deskripsi Berkas](#-deskripsi-berkas)
3. [Setup Proyek](#-setup-proyek)
4. [Contoh Kode](#-contoh-kode)
5. [Referensi](#-referensi)

---

## 🏗️ Struktur Proyek
Pada pengembangan back-end dengan **Hapi.js**, struktur proyek yang terorganisir sangat penting untuk memudahkan pengembangan dan pemeliharaan kode. Berikut struktur yang direkomendasikan:

```
notes-app-back-end
├── node_modules
├── src
│   ├── handler.js
│   ├── notes.js
│   ├── routes.js
│   └── server.js
├── .eslintrc.json
├── package-lock.json
└── package.json
```

**Keterangan:**
- **`src/`**: Folder utama untuk menyimpan semua berkas JavaScript.
- **`server.js`**: Konfigurasi server Hapi.
- **`routes.js`**: Definisi rute (endpoint) API.
- **`handler.js`**: Fungsi-fungsi penanganan permintaan (request handlers).
- **`notes.js`**: Penyimpanan data sementara dalam bentuk array objek.

💡 **Tips:**  
Gunakan prinsip **single responsibility**—setiap berkas hanya bertanggung jawab atas satu tugas spesifik!

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📂 Deskripsi Berkas

### 1. `server.js`
Berkas ini bertugas untuk membuat dan menjalankan server HTTP menggunakan Hapi. Contoh tugas:
- Import modul Hapi.
- Konfigurasi port dan host.
- Menghubungkan rute dari `routes.js`.
- Menjalankan server.

### 2. `routes.js`
Bertugas mendefinisikan rute API (path, method, dan handler). Contoh:
- Rute `GET /notes` untuk mengambil data catatan.
- Rute `POST /notes` untuk menambahkan catatan baru.

### 3. `handler.js`
Berisi fungsi-fungsi yang dipanggil saat permintaan diterima. Contoh:
- `addNoteHandler`: Menambahkan catatan baru ke array.
- `getAllNotesHandler`: Mengembalikan seluruh data catatan.

### 4. `notes.js`
Menyimpan data sementara dalam array objek. Contoh struktur data:
```javascript
const notes = [
  { id: 1, title: 'Belajar Hapi', tags: ['nodejs'], body: '...' },
];
```

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## ⚙️ Setup Proyek

### Langkah 1: Install Dependencies
Jalankan perintah berikut di terminal:
```bash
npm init -y
npm install @hapi/hapi nodemon eslint --save
```

### Langkah 2: Konfigurasi `package.json`
Pastikan `scripts` di `package.json` mengarah ke folder `src`:
```json
"scripts": {
  "start": "nodemon ./src/server.js",
  "lint": "eslint ./src"
}
```

### Langkah 3: Pindahkan Berkas
Pindahkan `server.js` ke folder `src`, lalu buat berkas baru untuk `routes.js`, `handler.js`, dan `notes.js`.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🧩 Contoh Kode

### `server.js`
```javascript
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
```

### `routes.js`
```javascript
const { addNoteHandler, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
];

module.exports = routes;
```

### `handler.js`
```javascript
const { addNote, getAllNotes } = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = Date.now(); // ID unik berdasarkan timestamp
  addNote({ id, title, tags, body });
  return h.response({ status: 'success', message: 'Catatan ditambahkan' });
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: { notes: getAllNotes() },
});

module.exports = { addNoteHandler, getAllNotesHandler };
```

### `notes.js`
```javascript
const notes = [];

const addNote = (note) => notes.push(note);
const getAllNotes = () => notes;

module.exports = { addNote, getAllNotes };
```

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📚 Referensi
- **[Hapi.js Documentation](https://hapi.dev/)**  
  Dokumentasi resmi Hapi.js untuk mempelajari lebih dalam tentang framework ini.
  
- **[Node.js Modules](https://nodejs.org/api/modules.html)**  
  Panduan modularisasi di Node.js untuk memisahkan kode menjadi beberapa berkas.

- **[ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)**  
  Konfigurasi ESLint untuk menjaga kualitas kode JavaScript.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
```