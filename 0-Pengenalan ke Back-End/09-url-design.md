# URL Design

## 📌 Pengantar

**URL**, **Path**, atau **Endpoint** merupakan salah satu bagian terpenting yang harus diperhatikan ketika membangun **REST API**. Dengan merancang **endpoint** yang baik, penggunaan API akan lebih mudah dipahami. Dalam merancang **endpoint**, ikutilah aturan umum atau **convention** agar penggunaan API kita memiliki standar yang diharapkan oleh banyak developer. Berikut adalah beberapa standar dalam merancang **endpoint** [[1]].

---

## 📘 Gunakan Kata Benda Daripada Kata Kerja pada Endpoint Path

Hindari penggunaan kata kerja dalam menetapkan nama **endpoint** (titik akhir path). Contohnya `/getArticles` atau `/addArticles`. Karena aksi dapat ditentukan secara jelas melalui **HTTP Verb**, kita tidak perlu lagi menambahkan kata kerja di **endpoint**. Dengan adanya **HTTP verbs**, Anda cukup memberikan **endpoint** `GET /articles` untuk mendapatkan data artikel atau `POST /articles` untuk menambahkan artikel [[1]].

**Contoh:**
- **Salah**: `/getArticles`
- **Benar**: `/articles` (dengan **HTTP Verb** `GET`)

---

## 📦 Gunakan Kata Jamak pada Endpoint untuk Resource Collection

Selalu gunakan kata jamak (plural) saat memberikan nama **endpoint**. Ini karena jarang ada data yang hanya memiliki satu item. Dengan menggunakan kata jamak, kita menjadi konsisten dengan apa yang ada di **database**. Tabel pada **database** biasanya memiliki lebih dari satu record (data).

**Contoh:**
- **Salah**: `/article`
- **Benar**: `/articles`

### 📝 Mendapatkan Satu Data Spesifik
Bagaimana jika ingin mengakses satu data saja? Contohnya mendapatkan satu artikel secara spesifik? Gunakan **path parameter** untuk mendapatkan data spesifik. **Endpoint** `/articles/:id` merupakan contoh yang baik untuk mendapatkan artikel secara spesifik berdasarkan **ID**.

**Contoh:**
- **Endpoint**: `/articles/123`
- **Aksi**: Mendapatkan artikel dengan **ID** `123`.

---

## 📁 Gunakan Endpoint Berantai untuk Resource yang Memiliki Hirarki/Relasi

Endpoint dari resource yang memiliki hirarki/relasi sebaiknya dituliskan secara berantai. Contohnya untuk mendapatkan daftar komentar dari sebuah artikel, **endpoint** `GET /articles/:id/comments` merupakan contoh yang tepat. Penggunaan **endpoint** tersebut masuk akal karena untuk mendapatkan **comments** pada respons, kita perlu tahu komentar pada artikel mana yang akan ditampilkan. Prinsip ini juga memperjelas permintaan dari **client** hanya dengan melihat **endpoint** yang dituju [[1]].

**Contoh:**
- **Endpoint**: `/articles/123/comments`
- **Aksi**: Mendapatkan daftar **comments** dari artikel dengan **ID** `123`.

### 🛠️ Prinsip Berantai pada HTTP Verb Lain
Prinsip ini juga cocok diterapkan pada **HTTP Verb** lain, seperti **POST**, **PUT**, dan **DELETE**. Misalnya:
- **POST /articles/123/comments**: Menambahkan komentar pada artikel dengan **ID** `123`.
- **PUT /articles/123/comments/456**: Memperbarui komentar dengan **ID** `456` pada artikel dengan **ID** `123`.
- **DELETE /articles/123/comments/456**: Menghapus komentar dengan **ID** `456` pada artikel dengan **ID** `123`.

