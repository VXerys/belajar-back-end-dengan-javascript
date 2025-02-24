# 📚 Belajar Back-End Pemula dengan JavaScript: Membangun RESTful API untuk Aplikasi Catatan 🚀

## 📋 Table of Contents
1. [Introduction](#introduction)
2. [Kriteria 1 - Web Server dapat menyimpan catatan](#kriteria-1)
3. [Kriteria 2 - Web Server dapat menampilkan catatan](#kriteria-2)
4. [Kriteria 3 - Web Server dapat mengubah catatan](#kriteria-3)
5. [Kriteria 4 - Web Server dapat menghapus catatan](#kriteria-4)
6. [References](#references)

---

## 🌟 Introduction

Dalam kursus ini, kita akan mempelajari cara membangun **RESTful API** untuk aplikasi catatan sederhana menggunakan **JavaScript**. Aplikasi ini akan memiliki fungsi dasar **CRUD** (Create, Read, Update, Delete) yang memungkinkan pengguna untuk menyimpan, melihat, mengubah, dan menghapus catatan. 

Front-End aplikasi sudah disediakan dan dapat diakses melalui tautan berikut: [http://notesapp-v1.dicodingacademy.com/](http://notesapp-v1.dicodingacademy.com/). Namun, aplikasi ini belum berfungsi karena belum ada back-end yang mendukungnya. Tugas kita adalah membuat RESTful API yang memenuhi kriteria tertentu agar aplikasi dapat berjalan dengan baik.

---

## 📝 Kriteria 1 - Web Server dapat menyimpan catatan

### 🎯 Tujuan
Web server harus mampu menyimpan catatan yang ditambahkan melalui aplikasi web. Catatan akan disimpan dalam bentuk array JavaScript di memory server.

### 📂 Struktur Data Catatan
Berikut adalah struktur objek catatan yang akan disimpan:

```javascript
{
  id: string,
  title: string,
  createdAt: string,
  updatedAt: string,
  tags: array of string,
  body: string,
}
```

### 🚀 Contoh Data Nyata
```javascript
{
  id: 'notes-V1StGXR8_Z5jdHi6B-myT',
  title: 'Sejarah JavaScript',
  createdAt: '2020-12-23T23:00:09.686Z',
  updatedAt: '2020-12-23T23:00:09.686Z',
  tags: ['NodeJS', 'JavaScript'],
  body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.',
}
```

### 🔧 Implementasi
- **Route:** `/notes`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Judul Catatan",
    "tags": ["Tag 1", "Tag 2"],
    "body": "Konten catatan"
  }
  ```
- **Response (Success):**
  ```json
  {
    "status": "success",
    "message": "Catatan berhasil ditambahkan",
    "data": {
      "noteId": "V09YExygSUYogwWJ"
    }
  }
  ```
- **Response (Error):**
  ```json
  {
    "status": "error",
    "message": "Catatan gagal untuk ditambahkan"
  }
  ```

### 💡 Tips
- Pastikan `id`, `createdAt`, dan `updatedAt` di-generate di sisi server.
- Gunakan status code `201` untuk respons sukses dan `500` untuk respons gagal.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 📝 Kriteria 2 - Web Server dapat menampilkan catatan

### 🎯 Tujuan
Web server harus mampu menampilkan catatan, baik seluruhnya maupun secara spesifik berdasarkan `id`.

### 🔧 Implementasi
- **Route:** `/notes`
- **Method:** `GET`
- **Response (Success):**
  ```json
  {
    "status": "success",
    "data": {
      "notes": [
        {
          "id": "notes-V1StGXR8_Z5jdHi6B-myT",
          "title": "Catatan 1",
          "createdAt": "2020-12-23T23:00:09.686Z",
          "updatedAt": "2020-12-23T23:00:09.686Z",
          "tags": ["Tag 1", "Tag 2"],
          "body": "Isi dari catatan 1"
        },
        {
          "id": "notes-V1StGXR8_98apmLk3mm1",
          "title": "Catatan 2",
          "createdAt": "2020-12-23T23:00:09.686Z",
          "updatedAt": "2020-12-23T23:00:09.686Z",
          "tags": ["Tag 1", "Tag 2"],
          "body": "Isi dari catatan 2"
        }
      ]
    }
  }
  ```
- **Response (No Notes):**
  ```json
  {
    "status": "success",
    "data": {
      "notes": []
    }
  }
  ```

- **Route:** `/notes/{id}`
- **Method:** `GET`
- **Response (Success):**
  ```json
  {
    "status": "success",
    "data": {
      "note": {
        "id": "notes-V1StGXR8_Z5jdHi6B-myT",
        "title": "Catatan 1",
        "createdAt": "2020-12-23T23:00:09.686Z",
        "updatedAt": "2020-12-23T23:00:09.686Z",
        "tags": ["Tag 1", "Tag 2"],
        "body": "Isi dari catatan 1"
      }
    }
  }
  ```
- **Response (Error):**
  ```json
  {
    "status": "fail",
    "message": "Catatan tidak ditemukan"
  }
  ```

### 💡 Tips
- Gunakan status code `200` untuk respons sukses dan `404` jika catatan tidak ditemukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 📝 Kriteria 3 - Web Server dapat mengubah catatan

### 🎯 Tujuan
Web server harus mampu mengubah catatan, termasuk judul, isi, dan tag.

### 🔧 Implementasi
- **Route:** `/notes/{id}`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Judul Catatan Revisi",
    "tags": ["Tag 1", "Tag 2"],
    "body": "Konten catatan"
  }
  ```
- **Response (Success):**
  ```json
  {
    "status": "success",
    "message": "Catatan berhasil diperbaharui"
  }
  ```
- **Response (Error):**
  ```json
  {
    "status": "fail",
    "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
  }
  ```

### 💡 Tips
- Pastikan `id` yang digunakan sesuai dengan catatan yang ingin diubah.
- Gunakan status code `200` untuk respons sukses dan `404` jika catatan tidak ditemukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 📝 Kriteria 4 - Web Server dapat menghapus catatan

### 🎯 Tujuan
Web server harus mampu menghapus catatan berdasarkan `id`.

### 🔧 Implementasi
- **Route:** `/notes/{id}`
- **Method:** `DELETE`
- **Response (Success):**
  ```json
  {
    "status": "success",
    "message": "Catatan berhasil dihapus"
  }
  ```
- **Response (Error):**
  ```json
  {
    "status": "fail",
    "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
  }
  ```

### 💡 Tips
- Pastikan `id` yang digunakan sesuai dengan catatan yang ingin dihapus.
- Gunakan status code `200` untuk respons sukses dan `404` jika catatan tidak ditemukan.

[🔝 Back to Table of Contents](#table-of-contents)

---

## 📚 References

- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)

[🔝 Back to Table of Contents](#table-of-contents)

