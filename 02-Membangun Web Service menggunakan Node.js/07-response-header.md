
# 📚 Belajar Back-End Pemula dengan JavaScript: Response Header

## 📑 Daftar Isi
- [� Belajar Back-End Pemula dengan JavaScript: Response Header](#-belajar-back-end-pemula-dengan-javascript-response-header)
  - [📑 Daftar Isi](#-daftar-isi)
  - [📌 Pengenalan Response Header](#-pengenalan-response-header)
  - [📌 MIME Types](#-mime-types)
  - [📌 Menggunakan Method `setHeader()`](#-menggunakan-method-setheader)
  - [🚀 Latihan: Mengubah Header Response](#-latihan-mengubah-header-response)
    - [Langkah 1: Ubah `Content-Type` ke JSON](#langkah-1-ubah-content-type-ke-json)
    - [Langkah 2: Tambahkan Header `Powered-By`](#langkah-2-tambahkan-header-powered-by)
    - [Langkah 3: Uji dengan cURL](#langkah-3-uji-dengan-curl)
  - [💡 Dampak Perubahan Header pada Browser](#-dampak-perubahan-header-pada-browser)
  - [🔗 Referensi](#-referensi)
    - [Fitur Utama:](#fitur-utama)

---

## 📌 Pengenalan Response Header
**Response Header** adalah bagian dari respons server yang berisi metadata tentang data yang dikirim ke client. Header ini memberi tahu browser atau client *cara menangani respons*. 

Contoh:  
- Saat server mengirim HTML, header `Content-Type: text/html` memastikan browser merender respons sebagai halaman web.  
- Pada URL `http://localhost:5000`, server mengembalikan teks **"Ini adalah homepage"** yang dibungkus dalam tag HTML `<h1>`, sehingga teks tampak besar dan tebal.

```javascript
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Ini adalah homepage</h1>');
};
```

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 📌 MIME Types
**MIME Types** (Multipurpose Internet Mail Extensions) adalah standar untuk menentukan tipe data yang dikirim dalam respons. Contoh umum:
- `text/html` → Konten HTML  
- `application/json` → Data JSON  
- `image/png` → Gambar PNG  

Server **wajib** menyertakan header `Content-Type` untuk memberi tahu client jenis data yang diterima.  
🔍 *Eksplorasi lebih lanjut: [MDN Common MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)*

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 📌 Menggunakan Method `setHeader()`
Method `setHeader()` digunakan untuk menambahkan atau mengubah nilai header respons.  
**Parameter**:  
1. Nama header (contoh: `'Content-Type'`).  
2. Nilai header (contoh: `'text/html'`).  

**Contoh Penggunaan**:
```javascript
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node.js');
};
```

**Aturan Penulisan Header**:  
- Gunakan **Proper Case** (contoh: `X-Powered-By`, bukan `x-powered-by`).  
- Pisahkan kata dengan tanda hubung (`-`).

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 🚀 Latihan: Mengubah Header Response
**Tujuan**: Mengubah `Content-Type` dari HTML ke JSON dan menambahkan header kustom.

### Langkah 1: Ubah `Content-Type` ke JSON
```javascript
// Sebelum
response.setHeader('Content-Type', 'text/html');

// Sesudah
response.setHeader('Content-Type', 'application/json');
```

### Langkah 2: Tambahkan Header `Powered-By`
```javascript
response.setHeader('Powered-By', 'Node.js');
```

### Langkah 3: Uji dengan cURL
Jalankan server dengan `npm run start`, lalu gunakan perintah:
```bash
curl -i http://localhost:5000
```

**Hasil Respons**:
```
HTTP/1.1 200 OK
Content-Type: application/json
Powered-By: Node.js
```

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 💡 Dampak Perubahan Header pada Browser
- **Sebelum** (`text/html`):  
  Browser merender teks sebagai HTML. Contoh: `<h1>Ini adalah homepage</h1>` → teks besar dan tebal.  

- **Sesudah** (`application/json`):  
  Browser menampilkan data mentah (raw JSON) karena tidak lagi mengenali konten sebagai HTML.  
  Contoh akses `http://localhost:5000` di browser:
  ```
  {"message": "Ini adalah homepage"}
  ```

**Catatan**:  
- Header menentukan *cara client memproses respons*.  
- Ubah format data sesuai kebutuhan (HTML untuk halaman web, JSON untuk API).

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**

---

## 🔗 Referensi
- 📄 [Daftar MIME Types (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)  
- 📄 [Dokumentasi Node.js: response.setHeader()](https://nodejs.org/api/http.html#responsesetheadername-value)  

**[⬆ Kembali ke Daftar Isi](#-daftar-isi)**
``` 

### Fitur Utama:
- **Penjelasan Mendalam**: Setiap konsep dijelaskan dengan contoh kode dan analogi sederhana.
- **Kode Interaktif**: Snippet kode siap dijalankan untuk mempraktikkan pengaturan header.
- **Navigasi Mudah**: Tautan "Kembali ke Daftar Isi" di setiap bagian.
- **Fokus pada JavaScript**: Hanya membahas topik yang relevan dengan transkrip (tidak ada SQL/Postman).