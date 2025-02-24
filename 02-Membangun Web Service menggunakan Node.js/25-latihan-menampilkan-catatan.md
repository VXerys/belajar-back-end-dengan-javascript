
# 📚 Belajar Back-End Pemula dengan JavaScript: Menampilkan Catatan

## 📋 Daftar Isi
- [🚀 Menampilkan Semua Catatan](#-menampilkan-semua-catatan)
- [🔍 Menampilkan Catatan Spesifik Berdasarkan ID](#-menampilkan-catatan-spesifik-berdasarkan-id)
- [📌 Referensi](#-referensi)

---

## 🚀 Menampilkan Semua Catatan
**Tujuan**: Membuat endpoint untuk menampilkan semua catatan yang tersimpan di server.

### Langkah 1: Konfigurasi Route
Tambahkan route dengan method `GET` dan path `/notes` di `routes.js`:
```javascript
// routes.js
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
    handler: getAllNotesHandler, // Handler untuk GET semua catatan
  },
];
```

### Langkah 2: Membuat Handler
Buat fungsi `getAllNotesHandler` di `handler.js`:
```javascript
// handler.js
const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes, // Mengembalikan array 'notes' yang tersimpan
  },
});
```

**Penjelasan**:
- Fungsi ini mengembalikan seluruh data catatan dalam bentuk respons JSON.
- Tidak menggunakan parameter `request` dan `h` karena tidak diperlukan di sini.

---

## 🔍 Menampilkan Catatan Spesifik Berdasarkan ID
**Tujuan**: Membuat endpoint untuk menampilkan satu catatan berdasarkan ID.

### Langkah 1: Tambahkan Route dengan Parameter ID
Di `routes.js`, tambahkan route untuk path `/notes/{id}`:
```javascript
// routes.js
{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler, // Handler untuk GET catatan spesifik
},
```

### Langkah 2: Membuat Handler untuk ID Spesifik
Buat fungsi `getNoteByIdHandler` di `handler.js`:
```javascript
// handler.js
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params; // Ambil ID dari parameter URL
  
  // Cari catatan dengan ID yang sesuai
  const note = notes.filter((n) => n.id === id)[0];

  if (note) {
    return {
      status: 'success',
      data: { note },
    };
  }

  // Jika tidak ditemukan, kirim respons error 404
  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};
```

**Penjelasan**:
- `request.params` digunakan untuk mengambil parameter dari URL (misal: `/notes/123` → `id = "123"`).
- `filter()` digunakan untuk mencari catatan dengan ID yang cocok. Karena hasilnya array, akses elemen pertama dengan `[0]`.
- Jika catatan tidak ditemukan, kirim respons dengan status `404` menggunakan toolkit `h` dari Hapi.js.

---

## 💡 Tips Penting
1. **Penyimpanan Sementara**: 
   - Data catatan disimpan di array `notes` di memori server. Data akan hilang jika server dimulai ulang.
   - 💡 Untuk penyimpanan permanen, nantinya bisa diintegrasikan dengan database seperti MySQL atau MongoDB.

2. **Validasi ID**:
   - Pastikan ID yang dikirim valid (misal: format UUID) sebelum memproses permintaan.

3. **Error Handling**:
   - Selalu tangani kasus ketika data tidak ditemukan untuk menghindari server crash.

---

## 📌 Referensi
1. [Dokumentasi Resmi Hapi.js](https://hapi.dev/)
2. [JavaScript Array Methods: filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
3. [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi)
