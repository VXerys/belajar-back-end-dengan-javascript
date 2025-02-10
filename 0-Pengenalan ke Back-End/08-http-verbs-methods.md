# HTTP Verbs/Methods

## 🚀 Pengantar

Karena **REST API** menggunakan protokol **HTTP**, kita dapat memanfaatkan **HTTP verbs** untuk menentukan aksi. **HTTP verbs** ini sering digunakan dalam operasi **CRUD** (Create, Read, Update, Delete). Berikut adalah beberapa **verbs** yang umum digunakan:

### 1. **GET**
Digunakan untuk mendapatkan data. **GET** adalah salah satu HTTP verbs yang paling sering digunakan, karena ia hanya mengambil data tanpa memodifikasi data yang ada [[2]].

### 2. **POST**
Digunakan untuk mengirimkan data baru. **POST** biasanya digunakan untuk menambahkan entri baru ke dalam database atau sumber data lainnya [[2]].

### 3. **PUT**
Digunakan untuk memperbarui data yang ada. **PUT** menggantikan data yang ada dengan data baru yang dikirimkan oleh **client**. Jika data yang diminta tidak ada, **PUT** akan menciptakan data baru [[2]].

### 4. **DELETE**
Digunakan untuk menghapus data. **DELETE** menghapus data yang ada dari database atau sumber data lainnya [[2]].

### 5. **PATCH**
Digunakan untuk memperbarui data parsial. **PATCH** hanya memperbarui sebagian data yang diminta, bukan seluruh data. Ini sering digunakan ketika hanya sebagian informasi yang perlu diperbarui [[6]].

---

## 📊 HTTP Response Code

**HTTP Response Code** adalah bagian dari **HTTP Response** yang mengindikasikan apakah permintaan dari **client** berhasil dijalankan oleh **server** atau tidak. Ketika membangun **REST API**, kita perlu memperhatikan dan menetapkan **response code** secara benar. Status code bernilai 3 digit angka, dan berikut adalah nilai-nilai status code yang sering digunakan dalam **REST API**:

### 1. **200 (OK)**
Permintaan **client** berhasil dijalankan oleh **server** [[2]].

### 2. **201 (Created)**
**Server** berhasil membuat/menambahkan resource yang diminta oleh **client** [[2]].

### 3. **400 (Bad Request)**
Permintaan **client** gagal dijalankan karena proses validasi input dari **client** gagal [[2]].

### 4. **401 (Unauthorized)**
Permintaan **client** gagal dijalankan. Biasanya ini disebabkan karena pengguna belum melakukan proses autentikasi [[2]].

### 5. **403 (Forbidden)**
Permintaan **client** gagal dijalankan karena pengguna tidak memiliki hak akses ke resource yang diminta [[2]].

### 6. **404 (Not Found)**
Permintaan **client** gagal dijalankan karena resource yang diminta tidak ditemukan [[2]].

### 7. **500 (Internal Server Error)**
Permintaan **client** gagal dijalankan karena **server** mengalami error (membangkitkan exception) [[2]].

### 8. **503 (Service Unavailable)**
Permintaan **client** gagal dijalankan karena **server** tidak dapat menangani permintaan. Biasanya ini terjadi ketika **server** sedang overload atau sedang dalam maintenance [[2]].

---

## 🌟 Penggunaan Response Code yang Tepat

Ketika permintaan **client** gagal dijalankan, kita harus mengembalikan **status code** yang sesuai dengan kesalahan yang terjadi. Penggunaan **response code** yang tepat dapat meminimalisir kebingungan **client/user** dalam memanfaatkan API. Contohnya:
- Jika **client** mencoba mengakses resource yang tidak ada, kembalikan **404 (Not Found)**.
- Jika **client** mencoba mengirimkan data yang tidak valid, kembalikan **400 (Bad Request)**.
- Jika **client** mencoba mengakses resource tanpa izin, kembalikan **403 (Forbidden)**.

