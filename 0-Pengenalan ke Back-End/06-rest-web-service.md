# REST Web Service

## 🌐 Pengantar REST Web Service

Dalam mengembangkan **web service**, Anda perlu menetapkan arsitektur apa yang hendak diadaptasi. Dengan menetapkan arsitektur, **client** dan **server** lebih mudah dalam berkomunikasi karena memiliki pola atau gaya yang konsisten. Salah satu arsitektur **web service** yang banyak digunakan saat ini adalah **REST**.

**REST** atau **REpresentational State Transfer** adalah salah satu gaya arsitektur yang dapat diadaptasi ketika membangun **web service**. Arsitektur ini sangat populer digunakan karena pengembangannya yang relatif mudah. **REST** menggunakan pola **request-response** dalam berinteraksi, artinya ia memanfaatkan protokol **HTTP** seperti yang sudah kita pelajari di materi sebelumnya [[2]].

Dalam implementasinya, arsitektur **REST** benar-benar memisahkan peran **client** dan **server**, bahkan keduanya tidak harus saling mengetahui. Artinya, ketika terjadi perubahan besar di sisi **client**, tidak akan berdampak pada sisi **server**, begitu juga sebaliknya.

---

## 🛠️ REST API

Sebagian dari kalian mungkin mengenal **REST** dengan sebutan **RESTful API**. Ya, memang benar! **RESTful** merupakan sebutan untuk **web services** yang menerapkan arsitektur **REST**. **REST** juga merupakan **API** (application program interface) karena ia digunakan untuk menjembatani antara sistem yang berbeda (**client** dan **server**) [[2]].

### 📘 Apa Itu API?

**API** atau **Application Program Interface** merupakan antarmuka yang menjadi perantara antara sistem aplikasi yang berbeda. **API** tidak hanya dalam bentuk **Web Service**, bisa saja berupa **SDK** (Software Development Kit) atau lainnya.

---

## 📝 Sifat Kunci pada REST API

Berikut beberapa sifat yang menjadi kunci pada **REST API**:

### 1. **Client-Server**
Ini merupakan hal yang paling mendasar dalam membangun **REST API**. **Server** harus bisa merespons permintaan yang dilakukan oleh **client**, baik itu respons berhasil ataupun gagal. Komunikasi **client** dan **server** dilakukan melalui protokol **HTTP** [[6]].

### 2. **Stateless**
**REST API** tidak boleh menyimpan keadaan (state) apa pun terkait **client**. Seluruh state harus tetap disimpan di **client**. Artinya, tidak ada **session** (informasi user yang disimpan) di **REST API**. Permintaan yang dilakukan oleh **client** harus mengandung informasi yang jelas. Jangan berharap **RESTful API** akan menyimpan informasi dari permintaan sebelumnya untuk digunakan di permintaan selanjutnya [[6]].

### 3. **Cacheable**
Agar dapat merespons permintaan dengan cepat, sebaiknya **REST API** menerapkan prinsip **cache**. Sehingga setiap permintaan tidak melulu mengambil dari **database** [[6]].

### 4. **Layered**
Ketika **REST API server** memiliki arsitektur yang kompleks, **client** seharusnya tidak perlu tahu bagaimana **server** melayaninya [[6]].

---

## 📚 Konsep Penting dalam Pembangunan REST API

Sebelum membangun **REST API**, kita perlu mengenal dahulu bagaimana konsep-konsep penting yang harus diterapkan dalam membangun arsitektur ini. Berikut adalah empat poin penting yang perlu diperhatikan:

### 1. **Format Request dan Response**
Format **request** dan **response** harus konsisten dan mudah dipahami. Format yang umum digunakan adalah **JSON** atau **XML** [[1]].

### 2. **HTTP Verbs/Methods**
**HTTP Verbs/Methods** seperti **GET**, **POST**, **PUT**, dan **DELETE** digunakan untuk menentukan tindakan yang dilakukan oleh **client**. Setiap **HTTP Verb** memiliki tujuan yang berbeda, seperti:
- **GET**: Mengambil data.
- **POST**: Menambahkan data.
- **PUT**: Memperbarui data.
- **DELETE**: Menghapus data [[2]].

### 3. **HTTP Response Code**
**HTTP Response Code** digunakan untuk memberikan informasi tentang status dari **request** yang dilakukan oleh **client**. Beberapa contoh status code:
- **200 OK**: Permintaan berhasil diproses.
- **404 Not Found**: Resource yang diminta tidak ditemukan.
- **500 Internal Server Error**: Terjadi kesalahan pada server [[2]].

### 4. **URL Design**
**URL** harus dirancang dengan baik agar mudah dipahami dan dapat memberikan informasi tentang resource yang diakses. Contoh:
- `https://api.example.com/products`: Mengakses daftar produk.
- `https://api.example.com/products/1`: Mengakses detail produk dengan ID `1` [[2]].

---

## 🌟 Yuk Kita Lanjut!

Singkatnya, ketika membangun **REST API**, kita harus memperhatikan empat poin penting tersebut: format **request** dan **response**, **HTTP Verbs/Methods**, **HTTP Response Code**, dan **URL Design**. 

Mari kita bahas lebih detail poin-poin tersebut pada materi selanjutnya! 🚀