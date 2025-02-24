
# 🚀 Belajar Back-End Pemula dengan JavaScript: Same-Origin Policy & CORS

## 📚 Daftar Isi
- [🚀 Belajar Back-End Pemula dengan JavaScript: Same-Origin Policy \& CORS](#-belajar-back-end-pemula-dengan-javascript-same-origin-policy--cors)
  - [📚 Daftar Isi](#-daftar-isi)
  - [🛑 Same-Origin Policy](#-same-origin-policy)
    - [Contoh Kasus SOP](#contoh-kasus-sop)
  - [🌐 Cross-Origin Resource Sharing (CORS)](#-cross-origin-resource-sharing-cors)
    - [Contoh Header CORS](#contoh-header-cors)
  - [🛠️ Menerapkan CORS di Hapi](#️-menerapkan-cors-di-hapi)
    - [Konfigurasi Global](#konfigurasi-global)
    - [Konfigurasi per-Rute](#konfigurasi-per-rute)
  - [🔧 Langkah Praktis Penerapan CORS](#-langkah-praktis-penerapan-cors)
  - [📖 Referensi](#-referensi)
    - [JavaScript \& CORS](#javascript--cors)
    - [Pengembangan Back-End](#pengembangan-back-end)

---

## 🛑 Same-Origin Policy

**Same-Origin Policy (SOP)** adalah kebijakan keamanan yang membatasi interaksi antara sumber daya web dari *origin* yang berbeda. *Origin* didefinisikan oleh tiga komponen:  
1. **Protokol** (contoh: `http://`, `https://`)  
2. **Host** (contoh: `localhost`, `dicodingacademy.com`)  
3. **Port** (contoh: `:5000`, `:80` [default])  

### Contoh Kasus SOP  
Aplikasi client di `http://notesapp-v1.dicodingacademy.com` mencoba mengakses data dari server `http://localhost:5000`. Karena *origin* berbeda (port `:80` vs `:5000`), permintaan akan **ditolak** oleh browser.  

💡 **Mengapa SOP Penting?**  
- Mencegah serangan *Cross-Site Request Forgery (CSRF)*.  
- Melindungi data sensitif yang diakses dari *origin* tidak tepercaya.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🌐 Cross-Origin Resource Sharing (CORS)

**CORS** adalah mekanisme yang memungkinkan server untuk mengizinkan permintaan dari *origin* yang berbeda. Cara kerjanya:  
1. Server menambahkan header `Access-Control-Allow-Origin` pada respons.  
2. Browser memeriksa header ini untuk menentukan apakah permintaan diizinkan.  

### Contoh Header CORS  
```javascript
// Izinkan akses dari origin spesifik
response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');

// Izinkan akses dari semua origin (*)
response.header('Access-Control-Allow-Origin', '*');
```

🚀 **Kapan Menggunakan `*`?**  
Gunakan `*` hanya untuk sumber daya publik (contoh: API terbuka). Hindari untuk data sensitif!

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🛠️ Menerapkan CORS di Hapi

### Konfigurasi Global  
Aktifkan CORS untuk **semua rute** dengan menambahkan properti `cors` saat membuat server:  
```javascript
const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'], // Izinkan semua origin
    },
  },
});
```

### Konfigurasi per-Rute  
Aktifkan CORS hanya untuk rute tertentu menggunakan `options.cors`:  
```javascript
{
  method: 'POST',
  path: '/notes',
  handler: addNoteHandler,
  options: {
    cors: {
      origin: ['*'], 
    },
  },
}
```

💡 **Tips!**  
- Gunakan array untuk mengizinkan beberapa origin: `origin: ['http://client1.com', 'http://client2.com']`.  
- Konfigurasi per-rute berguna untuk API dengan akses terbatas.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🔧 Langkah Praktis Penerapan CORS

1. **Buka `server.js`**  
   Tempatkan konfigurasi CORS di level server.  

2. **Tambahkan Properti `cors`**  
   ```javascript
   routes: {
     cors: {
       origin: ['*'],
     },
   },
   ```

3. **Restart Server**  
   Pastikan server berjalan ulang untuk menerapkan perubahan.  

4. **Uji dengan Aplikasi Client**  
   - Coba tambahkan catatan baru.  
   - Jika berhasil, halaman akan kembali ke beranda tanpa error.  

🎉 **Hasil yang Diharapkan**  
![Catatan berhasil ditambahkan](https://dicodingacademy.com/success-example.png)  

⚠️ **Catatan Penting**  
- Data mungkin belum terlihat karena perlu implementasi *endpoint* GET.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📖 Referensi

### JavaScript & CORS
- [MDN Web Docs: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
- [Hapi CORS Documentation](https://hapi.dev/api/?v=20.2.2#-routeoptionscors)  

### Pengembangan Back-End
- [Panduan REST API](https://restfulapi.net/)  
- [Best Practices for API Security](https://owasp.org/www-project-api-security/)  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
