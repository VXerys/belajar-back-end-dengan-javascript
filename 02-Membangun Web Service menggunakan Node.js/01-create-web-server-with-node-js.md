# 🚀 Belajar Back-End Pemula dengan JavaScript: Membangun Web Server menggunakan Node.js

## 📚 Table of Contents
1. [Pendahuluan](#pendahuluan)
2. [Membuat Proyek Node.js](#membuat-proyek-nodejs)
3. [Membuat Berkas `server.js`](#membuat-berkas-serverjs)
4. [Menjalankan Server](#menjalankan-server)
5. [Kesimpulan](#kesimpulan)
6. [Referensi](#referensi)

---

## 🎯 Pendahuluan
Dalam latihan ini, kita akan mempelajari cara membangun **Web Server** menggunakan **Node.js** secara native. Node.js adalah runtime environment yang memungkinkan kita menjalankan JavaScript di sisi server. Dengan Node.js, kita dapat membuat aplikasi back-end yang efisien dan scalable.

---

## 🛠️ Membuat Proyek Node.js

### Langkah 1: Membuat Folder Proyek
Pertama, buat folder baru untuk proyek Node.js Anda.  
- **Windows**: `C:\javascript-projects\nodejs-web-server`  
- **Linux/Mac**: `~/javascript-projects/nodejs-web-server`  

Buka folder tersebut menggunakan **Visual Studio Code (VSCode)**.

### Langkah 2: Inisialisasi Proyek dengan `npm init`
Buka terminal di VSCode dan jalankan perintah berikut:  
```bash
npm init --y
```

💡 **Penjelasan**:  
- `npm init` digunakan untuk membuat file `package.json`, yang berisi metadata proyek.  
- Opsi `--y` digunakan untuk menjawab semua pertanyaan dengan nilai default. Jika Anda ingin menjawab pertanyaan secara manual, hapus `--y`.

Setelah berhasil, Anda akan melihat file `package.json` di dalam folder proyek.

---

## 📝 Membuat Berkas `server.js`

### Langkah 1: Membuat File `server.js`
Buat file baru dengan nama `server.js` di dalam folder proyek. File ini akan berisi kode JavaScript untuk membuat server.

### Langkah 2: Menulis Kode Dasar
Tambahkan kode berikut ke dalam `server.js`:  
```javascript
console.log('Halo, kita akan belajar membuat server');
```

### Langkah 3: Menambahkan Runner Script
Buka file `package.json` dan tambahkan script berikut:  
```json
"scripts": {
    "start": "node server.js"
}
```

💡 **Catatan**:  
- Script `test` dapat dihapus karena tidak digunakan dalam proyek ini.  
- Script `start` digunakan untuk menjalankan file `server.js` menggunakan perintah `npm run start`.

---

## 🚀 Menjalankan Server

### Langkah 1: Menjalankan Server
Di terminal, jalankan perintah berikut:  
```bash
npm run start
```

### Langkah 2: Memeriksa Output
Jika server berhasil dijalankan, Anda akan melihat pesan berikut di terminal:  
```
Halo, kita akan belajar membuat server
```

🎉 **Selamat!** Persiapan proyek Anda sudah selesai, dan server siap untuk dikembangkan lebih lanjut.

---

## 🏁 Kesimpulan
Dalam latihan ini, kita telah mempelajari cara:  
1. Membuat proyek Node.js menggunakan `npm init`.  
2. Membuat file `server.js` untuk menjalankan server.  
3. Menjalankan server menggunakan perintah `npm run start`.  

Langkah-langkah ini adalah dasar untuk membangun aplikasi back-end menggunakan Node.js. Selanjutnya, kita dapat mengembangkan server dengan menambahkan routing, middleware, dan fitur lainnya.

---

## 📖 Referensi
Berikut beberapa referensi untuk mempelajari lebih lanjut tentang Node.js dan JavaScript:  
- [Dokumentasi Resmi Node.js](https://nodejs.org/en/docs/)  
- [JavaScript Basics - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)  
- [Belajar Node.js untuk Pemula](https://www.dicoding.com/academies/256)  

🔙 [Kembali ke Table of Contents](#-table-of-contents)