# Komunikasi Client-Server

## 🔄 Pola Request-Response dalam Komunikasi Client-Server

HTTP/HTTPS merupakan salah satu protokol yang dapat digunakan untuk berinteraksi dengan **Web Server**. Protokol ini terkenal dengan pola **request-response**, artinya untuk mendapatkan sesuatu (response) kita perlu melakukan permintaan terlebih dahulu (request). Pola ini sama seperti ketika kita memesan kopi di kedai kopi.

Ketika Anda ingin membeli kopi, tentu kopi yang diinginkan tidak secara ajaib datang sendiri. Anda sebagai pelanggan perlu mendatangi kasir atau pelayan untuk meminta (request) kopi yang diinginkan, pelayan meneruskan permintaan Anda ke barista, kemudian barista membuatkan kopi, dan memberikannya kembali (response) ke pelayan untuk dihidangkan kepada Anda.

### Analogy Client-Server:
Dalam konteks **Client-Server**, kita dapat menganggap **Client** sebagai **Front-End** dan **Server** sebagai **Back-End**. Pola yang sama berlaku ketika **Client** berkomunikasi dengan **Server**. **Server** tidak akan mengirimkan data apa pun apabila tidak ada permintaan dari **Client**. Ketika **Client** meminta sesuatu, barulah **Server** akan menanggapi.

---

## 📝 Struktur Permintaan (Request)

Ngomong-ngomong tentang permintaan (request), ketika hendak mengajukan permintaan kepada pelayan, Anda harus memberikan informasi jelas perihal apa yang ingin Anda minta. Contohnya, bila meminta kopi, beritahu kopi apa yang ingin dipesan. Bila ingin menanyakan lokasi toilet, ucapkan “Di mana letak toilet?” Jika permintaan yang Anda ajukan tidak memiliki keterangan yang cukup, maka pelayan tidak dapat memproses permintaan Anda.

Begitu pula dengan **request** pada protokol **HTTP**, **request** yang diajukan **Client** harus memiliki informasi yang cukup agar dapat dieksekusi oleh **Server**. Informasi pada **request** dapat mengandung berikut ini [[2]]:

### 1. **Request Line**
Berisikan:
- **Method/Verb**: Seperti `GET` (mengambil data), `POST` (menambahkan/mengirim data), `PUT` (memperbaharui data), atau `DELETE` (menghapus data).
- **Path atau alamat yang diminta**: URL spesifik yang ingin diakses.
- **Versi HTTP yang digunakan**: Misalnya `HTTP/1.1`.

### 2. **Header**
Memuat informasi yang dilampirkan terkait **request**, seperti:
- **Format dokumen**: Contoh: `application/json`, `text/html`.
- **Kunci akses**: Untuk otentikasi.
- **Informasi lainnya**: Seperti konten type, karakter set, dll.

### 3. **Body (Opsional)**
Mengandung data yang dibutuhkan oleh **Server**, bisa dalam bentuk teks, **JSON**, dll. **Body** tidak wajib dilampirkan bila **Server** tidak membutuhkan data apa pun.

Jika informasi yang dilampirkan pada **request** tidak jelas atau tidak sesuai, maka **Server** akan menolaknya dengan **response negatif**.

---

## 🚫 Respons Negatif

**Respons negatif** merupakan **respons** dari **Server** ketika sebuah **permintaan** dari **Client** gagal dipenuhi. Sama seperti di dunia nyata, ketika kita meminta kopi tubruk di kedai, namun permintaan kita tidak dapat dipenuhi sebab alasan teknis. Alih-alih mendapatkan kopi, kita hanya mendapatkan pesan “maaf stok kopi habis” atau “maaf mesin kopi sedang rusak.”

Begitu pula dengan protokol **HTTP**. Bila kita meminta sesuatu yang tidak dapat **Server** proses, maka kita tidak akan mendapatkan data yang diinginkan. **Server** akan memberikan **response negatif** dengan alasan mengapa ia tidak bisa memenuhi permintaan tersebut, contohnya seperti `"Not Found"`, `"Bad Request"`, atau pesan lainnya.

---

## 📜 Struktur Tanggapan (Response)

Setiap **request** yang dilakukan, baik dengan informasi yang sesuai ataupun tidak, akan mendapatkan **response**. **Response** atau **tanggapan** yang dikirimkan dari **Server** untuk **Client** juga mengandung informasi berikut [[3]]:

### 1. **Status Line**
Berisikan:
- **HTTP versi yang digunakan**: Misalnya `HTTP/1.1`.
- **Status Code**: Tiga digit angka yang menandakan keberhasilan dari permintaan.
- **Reason Phrase atau Status Text**: Pesan berdasarkan status code dalam bentuk teks sehingga lebih mudah dimengerti.

### 2. **Header**
Mengandung informasi yang dilampirkan terkait **response**, seperti:
- **Format dokumen**: Contoh: `application/json`, `text/html`.

### 3. **Body (Opsional, namun biasanya selalu dilampirkan)**
Memuat data yang dikirimkan oleh **Server**. Data dapat berupa **HTML**, **JSON**, gambar, dll.

### Status Code
Kita dapat mengetahui sebuah **request** berhasil atau tidak melalui **status code** yang dikirim oleh **response**. Sebuah **request** berhasil bila **status code** **response** diawali dengan angka `1`, `2`, atau `3`. Selain itu, **request** gagal dieksekusi.
