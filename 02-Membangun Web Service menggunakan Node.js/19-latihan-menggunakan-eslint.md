# 🚀 Belajar Back-End Pemula dengan JavaScript: Menggunakan ESLint

## 📚 Table of Contents
- [🚀 Belajar Back-End Pemula dengan JavaScript: Menggunakan ESLint](#-belajar-back-end-pemula-dengan-javascript-menggunakan-eslint)
  - [📚 Table of Contents](#-table-of-contents)
  - [1. Introduction to ESLint 📝](#1-introduction-to-eslint-)
  - [2. Installing ESLint ⚙️](#2-installing-eslint-️)
  - [3. Configuring ESLint 🛠️](#3-configuring-eslint-️)
  - [4. Using Dicoding Academy Style Guide 📘](#4-using-dicoding-academy-style-guide-)
  - [5. Running ESLint 🏃‍♂️](#5-running-eslint-️)
  - [6. Integrating ESLint with VSCode 💻](#6-integrating-eslint-with-vscode-)
  - [7. Handling ESLint Errors 🚨](#7-handling-eslint-errors-)
  - [8. References 📖](#8-references-)

---

## 1. Introduction to ESLint 📝
ESLint adalah alat yang membantu Anda menulis kode JavaScript dengan gaya yang konsisten. JavaScript tidak memiliki aturan baku untuk gaya penulisan kode, seperti penggunaan semicolon (`;`). Hal ini sering menyebabkan ketidakkonsistenan dalam penulisan kode. ESLint mengevaluasi kode berdasarkan aturan yang Anda tetapkan, baik aturan yang Anda buat sendiri maupun gaya penulisan yang sudah ada.

💡 **Tip:** ESLint tidak hanya membantu dalam menjaga konsistensi gaya penulisan, tetapi juga dapat mendeteksi kesalahan sintaksis dan masalah potensial dalam kode Anda.

---

## 2. Installing ESLint ⚙️
Untuk menggunakan ESLint, Anda perlu menginstalnya sebagai `devDependencies` pada proyek Anda. Jalankan perintah berikut di Terminal:

```bash
npm init @eslint/config@latest
```

Anda akan diberikan beberapa pertanyaan. Berikut adalah jawaban yang direkomendasikan:

- **How would you like to use ESLint?** -> To check syntax and find problems.
- **What type of modules does your project use?** -> CommonJS (require/exports).
- **Which framework does your framework use?** -> None of these.
- **Does your project use TypeScript?** -> No.
- **Where does your code run?** -> Node (pilih menggunakan spasi).
- **Would you like to …… (seluruh pertanyaan selanjutnya)** -> Y.

Setelah berhasil diinstal, ESLint akan muncul di `package.json` di bawah `devDependencies`.

```json
{
  "devDependencies": {
    "@eslint/js": "^9.7.0",
    "eslint": "^9.7.0",
    "globals": "^15.8.0",
    "nodemon": "^3.1.4"
  }
}
```

---

## 3. Configuring ESLint 🛠️
Setelah instalasi, berkas konfigurasi ESLint dengan nama `.eslint.config.mjs` akan terbentuk. Berkas ini berisi konfigurasi sesuai dengan jawaban yang Anda berikan selama proses instalasi.

```javascript
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  // other config style
];
```

---

## 4. Using Dicoding Academy Style Guide 📘
Untuk menerapkan gaya penulisan yang sama seperti di kelas Dicoding, Anda dapat menginstal `eslint-config-dicodingacademy` dengan perintah berikut:

```bash
npm install --save-dev eslint-config-dicodingacademy
```

Kemudian, tambahkan kode berikut ke dalam berkas `.eslint.config.mjs`:

```javascript
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  // other config style
];
```

---

## 5. Running ESLint 🏃‍♂️
Untuk menjalankan ESLint dan memeriksa kode JavaScript pada proyek Anda, tambahkan script berikut ke dalam `package.json`:

```json
"scripts": {
  "start": "nodemon server.js",
  "lint": "eslint ./"
}
```

Kemudian, jalankan perintah berikut di Terminal:

```bash
npm run lint
```

ESLint akan memeriksa kode Anda dan menampilkan kesalahan atau peringatan jika ada.

---

## 6. Integrating ESLint with VSCode 💻
ESLint dapat diintegrasikan dengan berbagai text editor, termasuk VSCode. Untuk mengaktifkan integrasi, ikuti langkah-langkah berikut:

1. Buka menu **Extensions** di VSCode.
2. Cari ekstensi dengan nama **ESLint**.
3. Tekan tombol **Install** untuk memasang ESLint.

Setelah terpasang, ESLint akan secara otomatis memeriksa kode Anda dan menampilkan tanda kuning pada kode yang tidak sesuai dengan gaya penulisan yang telah ditetapkan.

---

## 7. Handling ESLint Errors 🚨
ESLint akan menampilkan kesalahan atau peringatan jika kode Anda tidak sesuai dengan gaya penulisan yang telah ditetapkan. Misalnya, penggunaan tanda petik dua (`"`) dianggap sebagai kesalahan jika style guide menggunakan tanda petik satu (`'`).

Untuk memperbaiki kesalahan tersebut, Anda dapat mengubah kode Anda sesuai dengan gaya penulisan yang telah ditetapkan. Selain itu, Anda juga dapat mengatur indentasi dan line spacing di VSCode sesuai dengan style guide yang digunakan pada ESLint.

---

## 8. References 📖
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Dicoding Academy JavaScript Style Guide](https://github.com/dicodingacademy/eslint-config-dicodingacademy)
- [Visual Studio Code ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

[🔝 Back to Table of Contents](#table-of-contents)