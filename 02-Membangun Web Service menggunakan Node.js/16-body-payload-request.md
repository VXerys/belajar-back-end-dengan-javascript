# 📚 Belajar Back-End Pemula dengan JavaScript: Mengelola Body/Payload Request dengan Hapi 🚀

Selamat datang di dokumentasi pembelajaran saya untuk kursus **"Belajar Back-End Pemula dengan JavaScript"**! Di sini, saya akan membagikan pengetahuan dan pemahaman saya tentang topik yang dibahas dalam kursus ini, khususnya tentang **mengelola body/payload request menggunakan framework Hapi**. Mari kita mulai! 🎉

---

## 📑 **Table of Contents**
- [📚 Belajar Back-End Pemula dengan JavaScript: Mengelola Body/Payload Request dengan Hapi 🚀](#-belajar-back-end-pemula-dengan-javascript-mengelola-bodypayload-request-dengan-hapi-)
  - [📑 **Table of Contents**](#-table-of-contents)
  - [1. Pengenalan Body/Payload Request 💡](#1-pengenalan-bodypayload-request-)
  - [2. Menggunakan Hapi untuk Mengelola Payload 🚀](#2-menggunakan-hapi-untuk-mengelola-payload-)
    - [Bagaimana Cara Kerjanya?](#bagaimana-cara-kerjanya)
    - [Keuntungan Menggunakan Hapi:](#keuntungan-menggunakan-hapi)
  - [3. Contoh Praktis: Membuat Route Handler 📝](#3-contoh-praktis-membuat-route-handler-)
    - [Penjelasan Kode:](#penjelasan-kode)
    - [Contoh Payload dari Client:](#contoh-payload-dari-client)
    - [Output:](#output)
  - [4. Referensi \& Sumber Belajar 📚](#4-referensi--sumber-belajar-)

---

## 1. Pengenalan Body/Payload Request 💡

Ketika kita membangun aplikasi back-end, salah satu tugas penting adalah **mengelola data yang dikirim oleh client melalui request**. Data ini biasanya dikirim dalam bentuk **body** atau **payload** request. Misalnya, ketika seorang pengguna mengisi formulir login, data seperti `username` dan `password` akan dikirim sebagai payload.

Dalam **Node.js**, untuk mendapatkan data dari body request, kita harus berurusan dengan **Readable Stream**. Proses ini bisa menjadi rumit karena kita perlu membaca data dari stream secara bertahap dan mengubahnya menjadi format yang bisa digunakan (misalnya, objek JavaScript).

Namun, kabar baiknya adalah **Hapi**, sebuah framework Node.js, menyederhanakan proses ini! 🎉

---

## 2. Menggunakan Hapi untuk Mengelola Payload 🚀

Hapi memudahkan kita untuk mengelola payload request tanpa harus berurusan dengan stream secara manual. Di balik layar, Hapi secara otomatis mengubah payload JSON menjadi objek JavaScript. Ini berarti kita tidak perlu lagi menggunakan `JSON.parse()` untuk mengonversi data!

### Bagaimana Cara Kerjanya?
- Ketika client mengirimkan payload berupa JSON, Hapi akan memprosesnya dan menyimpannya dalam properti `request.payload`.
- Kita bisa langsung mengakses data tersebut melalui `request.payload` di dalam **route handler**.

### Keuntungan Menggunakan Hapi:
1. **Sederhana**: Tidak perlu menangani stream secara manual.
2. **Otomatis**: Konversi JSON ke objek JavaScript dilakukan secara otomatis.
3. **Efisien**: Mengurangi kode boilerplate yang tidak perlu.

---

## 3. Contoh Praktis: Membuat Route Handler 📝

Mari kita lihat contoh praktis bagaimana menggunakan Hapi untuk mengelola payload request. Berikut adalah contoh sederhana untuk membuat route handler yang menerima data login dari client:

```javascript
const Hapi = require('@hapi/hapi');

// Membuat server Hapi
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

// Mendefinisikan route untuk login
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        // Mengakses payload dari request
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});

// Menjalankan server
const start = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

start();
```

### Penjelasan Kode:
1. **Membuat Server**: Kita membuat server Hapi dengan port `3000` dan host `localhost`.
2. **Mendefinisikan Route**: Route `/login` menggunakan method `POST` untuk menerima data login.
3. **Mengakses Payload**: Data login (username dan password) diakses melalui `request.payload`.
4. **Menjalankan Server**: Server dijalankan dan siap menerima request.

### Contoh Payload dari Client:
```json
{
    "username": "harrypotter",
    "password": "encryptedpassword"
}
```

### Output:
Ketika client mengirimkan payload di atas, server akan merespons dengan:
```
Welcome harrypotter!
```

---

## 4. Referensi & Sumber Belajar 📚

Berikut adalah beberapa referensi dan sumber belajar yang dapat membantu Anda memahami lebih dalam tentang topik ini:

1. **Dokumentasi Resmi Hapi**:  
   [https://hapi.dev/](https://hapi.dev/)
2. **Belajar Node.js Dasar**:  
   [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
3. **Memahami JSON dan JavaScript Objects**:  
   [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
4. **Tutorial Hapi untuk Pemula**:  
   [https://www.digitalocean.com/community/tutorials/getting-started-with-hapi](https://www.digitalocean.com/community/tutorials/getting-started-with-hapi)

---

[Kembali ke Table of Contents](#table-of-contents)
