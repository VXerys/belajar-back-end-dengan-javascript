
# 🚀 Belajar Back-End Pemula dengan JavaScript: Query Parameters di Hapi

## 📚 Daftar Isi
1. [Apa Itu Query Parameters?](#-apa-itu-query-parameters)  
2. [Menggunakan Query Parameters di Hapi](#-menggunakan-query-parameters-di-hapi)  
3. [Latihan: Menambahkan Dukungan Bahasa](#-latihan-menambahkan-dukungan-bahasa)  
4. [Referensi](#-referensi)  
5. [Kembali ke Daftar Isi](#-kembali-ke-daftar-isi)

---

## 🌐 Apa Itu Query Parameters?
**Query Parameters** adalah cara untuk mengirim data melalui URL dalam bentuk pasangan `key=value`. Mereka umum digunakan untuk operasi seperti pencarian, filter, atau pengaturan khusus (contoh: bahasa).  

### Format Query Parameter
Contoh URL dengan query parameters:  
`http://localhost:5000?name=harry&location=bali`  
- `name=harry`: Parameter pertama  
- `location=bali`: Parameter kedua  

💡 **Fakta Penting:**  
- Dipisahkan oleh tanda `&`.  
- Tidak wajib (opsional) untuk permintaan HTTP.  
- Dapat diakses di sisi server melalui objek `request.query`.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 💻 Menggunakan Query Parameters di Hapi
Di **Hapi**, nilai query parameters diambil dari `request.query`. Berikut contoh implementasinya:

### Contoh Kode Dasar
```javascript
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
});
```

### Penjelasan Kode:
1. **`request.query`**: Objek yang menyimpan semua query parameters.  
2. **Destructuring Assignment**: `const { name, location } = request.query` mengambil nilai `name` dan `location` dari URL.  
3. **Response**: Mengembalikan pesan yang disesuaikan dengan parameter.

🌐 **Contoh Permintaan:**  
`GET http://localhost:5000?name=harry&location=bali`  
**Output:** `Hello, harry from bali`

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🛠️ Latihan: Menambahkan Dukungan Bahasa
**Tujuan:** Memodifikasi endpoint `/hello/{name}` untuk menampilkan pesan dalam bahasa Indonesia jika ada query parameter `lang=id`.

### Langkah 1: Ambil Query Parameter `lang`
```javascript
{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query; // Ambil nilai 'lang'
        
        return `Hello, ${name}!`;
    },
}
```

### Langkah 2: Sesuaikan Pesan Berdasarkan `lang`
```javascript
{
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;

        if (lang === 'id') {
            return `Hai, ${name}!`; // Respons bahasa Indonesia
        }
        return `Hello, ${name}!`; // Respons default (Inggris)
    },
}
```

### 🧪 Uji Coba dengan `curl`
1. **Dengan `lang=id`:**  
   ```bash
   curl -X GET http://localhost:5000/hello/dicoding?lang=id
   ```
   **Output:** `Hai, dicoding!`  

2. **Tanpa `lang`:**  
   ```bash
   curl -X GET http://localhost:5000/hello/dicoding
   ```
   **Output:** `Hello, dicoding!`

📌 **Catatan:**  
- Gunakan `npm run start` untuk menjalankan server.  
- Pastikan parameter `{name?}` memiliki tanda `?` agar bersifat opsional.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 📚 Referensi
1. **[Dokumentasi Resmi Hapi](https://hapi.dev/)**  
   Pelajari lebih lanjut tentang routing dan handling request di Hapi.  
2. **[MDN Web Docs: Query Parameters](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams)**  
   Penjelasan mendalam tentang cara kerja query parameters di URL.  
3. **[JavaScript Destructuring Assignment](https://javascript.info/destructuring-assignment)**  
   Tutorial penggunaan destructuring untuk ekstraksi data.

[🔙 Kembali ke Daftar Isi](#-daftar-isi)

---

## 🔄 Kembali ke Daftar Isi
[⬆️ Kembali ke Atas](#-belajar-back-end-pemula-dengan-javascript-query-parameters-di-hapi)
