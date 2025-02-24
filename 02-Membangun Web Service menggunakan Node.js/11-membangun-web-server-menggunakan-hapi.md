
# 🚀 Belajar Back-End Pemula dengan JavaScript: Membangun Web Server menggunakan Hapi

## 📚 Daftar Isi
- [Menyiapkan Project](#-menyiapkan-project)
- [Struktur Proyek dan Konfigurasi](#-struktur-proyek-dan-konfigurasi)
- [Menjalankan Server](#-menjalankan-server)
- [Referensi](#-referensi)

---

## 📁 Menyiapkan Project

### Langkah 1: Membuat Folder Proyek
Buat folder baru dengan nama `hapi-web-server` di lokasi berikut:
- **Windows**: `C:\javascript-projects`
- **Linux/macOS**: `~/javascript-projects`

💡 **Tips**:  
Pastikan folder `javascript-projects` sudah ada sebelumnya. Jika belum, silakan buat terlebih dahulu.

### Langkah 2: Inisialisasi Proyek dengan npm
Buka folder proyek di VSCode, lalu jalankan perintah berikut di Terminal:
```bash
npm init --y
```
Perintah ini akan membuat berkas `package.json` secara otomatis dengan konfigurasi default.

---

## 🛠️ Struktur Proyek dan Konfigurasi

### 1. Konfigurasi NPM Script
Ubah bagian `scripts` pada `package.json` menjadi:
```json
"scripts": {
  "start": "node server.js"
}
```
📝 **Penjelasan**:  
- `start`: Perintah untuk menjalankan server menggunakan `node server.js`.
- Dengan konfigurasi ini, kita bisa menjalankan server menggunakan `npm run start`.

### 2. Membuat Berkas `server.js`
Buat berkas baru bernama `server.js` di root folder proyek, lalu tambahkan kode berikut:
```javascript
console.log('Halo, kita akan belajar membuat server menggunakan Hapi');
```
💡 **Catatan**:  
Ini adalah langkah awal untuk memastikan proyek berjalan dengan baik. Nantinya, kita akan mengganti kode ini dengan implementasi Hapi.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🖥️ Menjalankan Server

### Langkah 1: Eksekusi Perintah
Jalankan server dengan perintah berikut di Terminal:
```bash
npm run start
```

### Langkah 2: Verifikasi Output
Jika berhasil, Anda akan melihat pesan di Terminal:
```
Halo, kita akan belajar membuat server menggunakan Hapi
```
🎉 **Selamat!** Proyek Anda sudah siap untuk dikembangkan lebih lanjut dengan Hapi.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📖 Referensi
### 1. Dokumentasi Resmi
- **[npm Documentation](https://docs.npmjs.com/)**: Panduan lengkap penggunaan npm.
- **[Hapi.js](https://hapi.dev/)**: Dokumentasi resmi framework Hapi untuk membangun web server.

### 2. Sumber Belajar Lain
- **[Node.js Guides](https://nodejs.org/en/docs/guides/)**: Memahami dasar-dasar Node.js.
- **[JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Konsep dasar JavaScript untuk pemula.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
