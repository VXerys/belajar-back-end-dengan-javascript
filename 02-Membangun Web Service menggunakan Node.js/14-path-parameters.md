
# 🚀 Belajar Back-End Pemula dengan JavaScript: Path Parameter dalam Hapi

## 📚 Daftar Isi
- [🚀 Belajar Back-End Pemula dengan JavaScript: Path Parameter dalam Hapi](#-belajar-back-end-pemula-dengan-javascript-path-parameter-dalam-hapi)
  - [📚 Daftar Isi](#-daftar-isi)
  - [🎯 Pengenalan Path Parameter](#-pengenalan-path-parameter)
  - [🔧 Implementasi Path Parameter di Hapi](#-implementasi-path-parameter-di-hapi)
    - [Contoh Kode](#contoh-kode)
    - [Penjelasan](#penjelasan)
  - [🌟 Path Parameter Opsional](#-path-parameter-opsional)
    - [Contoh Kode](#contoh-kode-1)
    - [Penjelasan](#penjelasan-1)
  - [🛠️ Latihan: Membuat Route dengan Path Parameter](#️-latihan-membuat-route-dengan-path-parameter)
    - [Langkah 1: Tambahkan Route di `routes.js`](#langkah-1-tambahkan-route-di-routesjs)
    - [Langkah 2: Uji dengan cURL atau Browser](#langkah-2-uji-dengan-curl-atau-browser)
  - [📖 Referensi](#-referensi)

---

## 🎯 Pengenalan Path Parameter
Path parameter adalah bagian dari URL yang digunakan untuk **menerima nilai dinamis** dari client. Contohnya:  
- `https://github.com/dicodingacademy` → `dicodingacademy` adalah path parameter untuk username.  
- `https://twitter.com/maudyayunda` → `maudyayunda` adalah parameter untuk profil pengguna.  

💡 **Mengapa Path Parameter Penting?**  
- Memungkinkan server merespons permintaan dengan data yang **spesifik** (contoh: profil pengguna, artikel blog).  
- Membuat routing lebih **fleksibel** tanpa harus mendefinisikan route untuk setiap nilai parameter.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🔧 Implementasi Path Parameter di Hapi
Di Hapi Framework, path parameter dibuat dengan membungkus nama parameter menggunakan `{ }`.  

### Contoh Kode
```javascript
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});
```

### Penjelasan
- `path: '/users/{username}'` → `username` adalah parameter yang akan diambil dari URL.  
- Nilai parameter diakses melalui `request.params.username`.  
- Jika client mengakses `/users/harry`, server merespons: `Hello, harry!`.  

⚠️ **Catatan:**  
- Path parameter **wajib diisi**. Jika client mengakses `/users` tanpa parameter, server akan mengembalikan error.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🌟 Path Parameter Opsional
Untuk membuat parameter opsional, tambahkan tanda `?` di akhir nama parameter.  

### Contoh Kode
```javascript
server.route({
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const { username = 'stranger' } = request.params;    
        return `Hello, ${username}!`;
    },
});
```

### Penjelasan
- `path: '/users/{username?}'` → Parameter `username` tidak wajib diisi.  
- Jika client mengakses `/users`, server menggunakan nilai default `stranger` → `Hello, stranger!`.  

🚫 **Batasan:**  
- Parameter opsional **hanya boleh berada di akhir path**. Contoh path tidak valid: `/{one?}/{two}`.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🛠️ Latihan: Membuat Route dengan Path Parameter
Mari praktikkan pembuatan route `/hello/{name?}` yang merespons dengan pesan dinamis.

### Langkah 1: Tambahkan Route di `routes.js`
```javascript
// routes.js
{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        return `Hello, ${name}!`;
    },
},
```

### Langkah 2: Uji dengan cURL atau Browser
- **Dengan Parameter:**  
  ```bash
  curl -X GET http://localhost:5000/hello/dicoding
  # Output: Hello, dicoding!
  ```

- **Tanpa Parameter:**  
  ```bash
  curl -X GET http://localhost:5000/hello
  # Output: Hello, stranger!
  ```

💡 **Tips!**  
- Gunakan `npm run start` untuk menjalankan server.  
- Pastikan tidak ada error saat mengakses route.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📖 Referensi
1. **[Hapi.js Documentation](https://hapi.dev/api/)**  
   Dokumentasi resmi Hapi.js untuk mempelajari routing dan fitur lanjutan.  
2. **[JavaScript Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)**  
   Panduan penggunaan object destructuring untuk mengakses parameter.  
3. **[RESTful API Design](https://restfulapi.net/resource-naming/)**  
   Prinsip desain API yang baik, termasuk penggunaan path parameter.  

[🔙 Kembali ke Daftar Isi](#-daftar-isi)
