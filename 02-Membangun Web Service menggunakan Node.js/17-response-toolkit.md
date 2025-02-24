
# 🚀 Belajar Back-End Pemula dengan JavaScript: Hapi Response Toolkit

## 📚 Daftar Isi
1. [Pengenalan Fungsi Handler](#pengenalan-fungsi-handler)
2. [Parameter `request` dan `h`](#parameter-request-dan-h)
3. [Kapan Menggunakan `h`?](#kapan-menggunakan-h)
4. [Mengustomisasi Respons HTTP](#mengustomisasi-respons-http)
5. [Contoh Praktis](#contoh-praktis)
6. [Referensi](#referensi)

---

## 1. Pengenalan Fungsi Handler <a name="pengenalan-fungsi-handler"></a>
Fungsi `handler` pada Hapi adalah inti dari penanganan permintaan (request) dari client. Fungsi ini menerima dua parameter: `request` dan `h`. 

**Contoh Sederhana:**
```javascript
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Homepage'; // Langsung mengembalikan teks
    },
});
```
📝 **Penjelasan:**  
- Fungsi `handler` bertugas memproses permintaan dan menghasilkan respons.
- Secara default, respons akan memiliki status code `200 OK`.

[🔙 Kembali ke Daftar Isi](#daftar-isi)

---

## 2. Parameter `request` dan `h` <a name="parameter-request-dan-h"></a>

### 🛠️ `request` Parameter
Objek `request` menyimpan informasi detail dari permintaan client, seperti:
- **Path/query parameters**
- **Payload** (data yang dikirim client)
- **Headers** permintaan

💡 **Tips:**  
Eksplorasi properti `request` untuk mengakses data yang diperlukan, misalnya `request.params` atau `request.payload`.

### 🧰 `h` (Response Toolkit)
Parameter `h` adalah objek yang menyediakan metode untuk membangun respons. Fungsi utamanya:
- Mengatur **status code**
- Menambahkan **header** kustom
- Menentukan **tipe konten** (content-type)

[🔙 Kembali ke Daftar Isi](#daftar-isi)

---

## 3. Kapan Menggunakan `h`? <a name="kapan-menggunakan-h"></a>
Gunakan `h` ketika Anda perlu mengontrol **detail respons** yang tidak bisa dilakukan dengan mengembalikan nilai langsung.

**Contoh Kasus:**  
```javascript
handler: (request, h) => {
    return h.response('created').code(201); // Status code diubah menjadi 201
}
```
🚀 **Poin Penting:**  
- Jika hanya mengembalikan nilai langsung (seperti `return 'Homepage'`), status code tetap `200 OK`.
- Gunakan `h.response()` untuk kasus yang memerlukan penyesuaian (status code, header, dll).

[🔙 Kembali ke Daftar Isi](#daftar-isi)

---

## 4. Mengustomisasi Respons HTTP <a name="mengustomisasi-respons-http"></a>
Anda bisa mengustomisasi respons menggunakan metode dari `h.response()`.

### 📝 Metode yang Tersedia:
- `.code(number)` → Mengatur status code.
- `.type(string)` → Menentukan tipe konten (e.g., `'text/plain'`, `'application/json'`).
- `.header(name, value)` → Menambahkan header kustom.

**Contoh 1: Notasi Detail**
```javascript
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain'); // Tipe konten: teks
    response.header('X-Custom', '123'); // Header kustom
    return response;
};
```

**Contoh 2: Notasi Berantai (Chained)**
```javascript
const handler = (request, h) => {
    return h.response('success')
        .type('application/json')
        .header('Cache-Control', 'no-cache')
        .code(200);
};
```
💡 **Tips:**  
Notasi berantai lebih ringkas dan mudah dibaca!

[🔙 Kembali ke Daftar Isi](#daftar-isi)

---

## 5. Contoh Praktis <a name="contoh-praktis"></a>

### 🌐 Membuat Endpoint POST dengan Status 201
```javascript
server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        // Simulasikan pembuatan data pengguna
        const newUser = { id: 1, name: 'John Doe' };
        return h.response(newUser)
            .type('application/json')
            .code(201);
    },
});
```

### 🔧 Menambahkan Header Kustom
```javascript
handler: (request, h) => {
    return h.response('Hello World!')
        .header('X-Powered-By', 'Hapi')
        .header('Content-Language', 'id');
}
```

[🔙 Kembali ke Daftar Isi](#daftar-isi)

---

## 6. Referensi <a name="referensi"></a>
- 📚 [Dokumentasi Resmi Hapi.js](https://hapi.dev/api/?v=20.3.2#response-toolkit)
- 🔧 [Panduan Membuat Respons di Hapi](https://hapi.dev/tutorials/routing/?lang=en_US#response)
- 🚀 [Contoh Kode Hapi di GitHub](https://github.com/hapijs/hapi/tree/main/examples)

[🔙 Kembali ke Daftar Isi](#daftar-isi)
