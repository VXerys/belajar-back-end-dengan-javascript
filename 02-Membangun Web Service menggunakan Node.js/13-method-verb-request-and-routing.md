# 🚀 Belajar Back-End Pemula dengan JavaScript: Routing dengan Hapi

Selamat datang di dokumentasi pembelajaran saya untuk kursus **"Belajar Back-End Pemula dengan JavaScript"**! Di sini, saya akan membagikan pengetahuan dan pengalaman saya dalam mempelajari konsep routing menggunakan framework **Hapi**. Dokumentasi ini dirancang untuk membantu pemula memahami konsep routing dengan cara yang jelas dan terstruktur.

---

## 📚 **Daftar Isi**
- [🚀 Belajar Back-End Pemula dengan JavaScript: Routing dengan Hapi](#-belajar-back-end-pemula-dengan-javascript-routing-dengan-hapi)
  - [📚 **Daftar Isi**](#-daftar-isi)
  - [1. Pengenalan Routing dengan Hapi 🧭](#1-pengenalan-routing-dengan-hapi-)
    - [Contoh Dasar Routing:](#contoh-dasar-routing)
  - [2. Membuat Route Configuration 🛠️](#2-membuat-route-configuration-️)
    - [Contoh Route Configuration:](#contoh-route-configuration)
  - [3. Menambahkan Multiple Routes 📂](#3-menambahkan-multiple-routes-)
    - [Contoh Multiple Routes:](#contoh-multiple-routes)
  - [4. Memisahkan Routes ke Berkas Terpisah 📄](#4-memisahkan-routes-ke-berkas-terpisah-)
    - [Contoh Berkas `routes.js`:](#contoh-berkas-routesjs)
  - [5. Latihan Routing 🏋️‍♂️](#5-latihan-routing-️️)
    - [Kode Lengkap `routes.js`:](#kode-lengkap-routesjs)
  - [6. Penjelasan Kode Latihan 💡](#6-penjelasan-kode-latihan-)
  - [7. Referensi 📚](#7-referensi-)

---

## 1. Pengenalan Routing dengan Hapi 🧭
Routing adalah proses menentukan bagaimana sebuah aplikasi merespons permintaan (request) dari client berdasarkan **method** (GET, POST, dll.) dan **URL** yang diminta. Dalam framework **Hapi**, routing tidak dilakukan di dalam request handler seperti pada cara native, melainkan menggunakan objek **route configuration** yang disimpan dalam method `server.route()`.

### Contoh Dasar Routing:
```javascript
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
```
Pada contoh di atas, kita membuat sebuah route untuk method **GET** pada path `/` yang mengembalikan pesan "Hello World!".

---

## 2. Membuat Route Configuration 🛠️
Objek **route configuration** memiliki beberapa properti penting:
- **method**: Method HTTP yang digunakan (GET, POST, dll.).
- **path**: URL path yang akan di-handle.
- **handler**: Fungsi yang akan menangani request dan mengembalikan response.

### Contoh Route Configuration:
```javascript
server.route({
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
        return 'About Page';
    }
});
```
Pada contoh ini, route akan merespons permintaan **GET** pada path `/about` dengan pesan "About Page".

---

## 3. Menambahkan Multiple Routes 📂
Untuk menambahkan lebih dari satu route, kita dapat menggunakan **array** dalam method `server.route()`.

### Contoh Multiple Routes:
```javascript
server.route([
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    }
]);
```
Dengan cara ini, kita dapat menentukan banyak route sekaligus dalam satu blok kode.

---

## 4. Memisahkan Routes ke Berkas Terpisah 📄
Untuk menjaga kode tetap terorganisir, kita dapat memisahkan konfigurasi route ke dalam berkas JavaScript terpisah. Ini sesuai dengan prinsip **Single Responsibility Principle**.

### Contoh Berkas `routes.js`:
```javascript
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    }
];

module.exports = routes;
```
Kemudian, kita dapat mengimpor berkas ini ke dalam `server.js`:
```javascript
const routes = require('./routes');
server.route(routes);
```

---

## 5. Latihan Routing 🏋️‍♂️
Pada latihan ini, kita akan membuat route configuration dengan ketentuan berikut:
- **URL `/`**:
  - Method **GET**: Mengembalikan "Homepage".
  - Method **lainnya**: Mengembalikan "Halaman tidak dapat diakses dengan method tersebut".
- **URL `/about`**:
  - Method **GET**: Mengembalikan "About page".
  - Method **lainnya**: Mengembalikan "Halaman tidak dapat diakses dengan method tersebut".
- **URL lainnya**:
  - Method **apapun**: Mengembalikan "Halaman tidak ditemukan".

### Kode Lengkap `routes.js`:
```javascript
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;
```

---

## 6. Penjelasan Kode Latihan 💡
- **Method `'*'`**: Menunjukkan bahwa route dapat diakses dengan semua method HTTP.
- **Path `'/{any*}'`**: Digunakan untuk menangani permintaan pada path yang belum ditentukan.
- **Prioritas Route**: Route yang lebih spesifik akan diutamakan. Misalnya, route dengan method **GET** akan diutamakan daripada route dengan method `'*'`.

---

## 7. Referensi 📚
Berikut beberapa referensi yang dapat membantu Anda memahami lebih dalam tentang routing dengan Hapi:
- [Dokumentasi Resmi Hapi](https://hapi.dev/)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

