# 🚀 Belajar Back-End Pemula dengan JavaScript: Menyiapkan Proyek

## 📚 Table of Contents
- [🚀 Belajar Back-End Pemula dengan JavaScript: Menyiapkan Proyek](#-belajar-back-end-pemula-dengan-javascript-menyiapkan-proyek)
  - [📚 Table of Contents](#-table-of-contents)
  - [🛠️ Membuat Proyek Baru](#️-membuat-proyek-baru)
  - [🔄 Menggunakan Nodemon](#-menggunakan-nodemon)
    - [📥 Instalasi Nodemon](#-instalasi-nodemon)
    - [✅ Verifikasi Instalasi](#-verifikasi-instalasi)
  - [📝 Membuat Berkas JavaScript](#-membuat-berkas-javascript)
  - [🖥️ Menjalankan Proyek dengan Nodemon](#️-menjalankan-proyek-dengan-nodemon)
  - [📚 Referensi](#-referensi)

---

## 🛠️ Membuat Proyek Baru

Sebelum memulai pengembangan aplikasi back-end, langkah pertama yang perlu dilakukan adalah menyiapkan proyek baru. Berikut adalah langkah-langkahnya:

1. **Buat Folder Baru**  
   Buat folder baru dengan nama `notes-app-back-end` di direktori berikut:
   - **Windows:** `C:\javascript-projects`
   - **Linux:** `~/javascript-projects`

2. **Buka Folder dengan VSCode**  
   Buka folder tersebut menggunakan Visual Studio Code (VSCode).

3. **Inisialisasi Proyek dengan `npm`**  
   Buka Terminal di VSCode dan jalankan perintah berikut untuk menginisialisasi proyek:
   ```bash
   npm init --y
   ```
   Perintah ini akan menghasilkan file `package.json` yang berisi konfigurasi dasar proyek.

4. **Verifikasi `package.json`**  
   Pastikan file `package.json` telah dibuat di dalam folder proyek Anda.

🎉 **Voila!** Proyek baru Anda telah berhasil dibuat.

---

## 🔄 Menggunakan Nodemon

Nodemon adalah alat yang sangat berguna selama proses pengembangan aplikasi back-end. Alat ini akan secara otomatis menjalankan ulang server setiap kali terjadi perubahan pada kode JavaScript, sehingga Anda tidak perlu menjalankan ulang server secara manual.

### 📥 Instalasi Nodemon

Untuk menginstal Nodemon, jalankan perintah berikut di Terminal proyek:
```bash
npm install nodemon --save-dev
```
Perintah ini akan menginstal Nodemon sebagai `devDependency`, yang berarti alat ini hanya digunakan selama pengembangan dan tidak akan diikutsertakan dalam produksi.

### ✅ Verifikasi Instalasi

Setelah instalasi selesai, Anda dapat memverifikasi bahwa Nodemon telah terpasang dengan memeriksa file `package.json`. Di dalamnya, Anda akan melihat properti `devDependencies` yang mencantumkan Nodemon dan versinya:
```json
{
  "name": "notes-app-back-end",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

## 📝 Membuat Berkas JavaScript

Setelah Nodemon terpasang, langkah selanjutnya adalah membuat berkas JavaScript untuk server. Berikut adalah langkah-langkahnya:

1. **Buat Berkas `server.js`**  
   Buat file baru dengan nama `server.js` di dalam folder proyek.

2. **Tulis Kode Sederhana**  
   Di dalam `server.js`, tulis kode berikut:
   ```javascript
   console.log('Hallo kita akan membuat RESTful API');
   ```
   Kode ini akan mencetak pesan ke konsol ketika server dijalankan.

3. **Konfigurasi `package.json`**  
   Buka file `package.json` dan tambahkan script baru untuk menjalankan `server.js` menggunakan Nodemon:
   ```json
   "scripts": {
     "start": "nodemon server.js"
   }
   ```
   Anda juga dapat menghapus script `test` jika tidak digunakan.

---

## 🖥️ Menjalankan Proyek dengan Nodemon

Untuk menjalankan proyek, jalankan perintah berikut di Terminal:
```bash
npm run start
```
Nodemon akan menjalankan `server.js` dan akan terus memantau perubahan pada kode. Setiap kali Anda menyimpan perubahan pada `server.js`, Nodemon akan secara otomatis menjalankan ulang server.

🎉 **Yuhu!** Kini Anda tidak perlu menjalankan ulang perintah `npm run start` setiap kali terjadi perubahan pada kode.

---

## 📚 Referensi

Berikut adalah beberapa referensi yang dapat membantu Anda memahami lebih dalam tentang topik yang dibahas:

1. **[Nodemon Documentation](https://nodemon.io/)**  
   Dokumentasi resmi Nodemon untuk memahami lebih lanjut tentang cara penggunaan dan fitur-fiturnya.

2. **[npm Documentation](https://docs.npmjs.com/)**  
   Panduan lengkap tentang npm, termasuk cara mengelola dependencies dan scripts.

3. **[JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)**  
   Panduan dasar JavaScript dari MDN untuk memahami sintaks dan konsep dasar.

---

🔙 [Kembali ke Table of Contents](#table-of-contents)