# Latihan: Membuat Permintaan HTTP (HTTP Request)

## 🚀 Latihan: Membuat Request HTTP

Lantas seperti apa sih sebenarnya bentuk **request** dan **response** pada **HTTP**? Penasaran? Mari kita coba membuat **request** pada **web service** kedai kopi melalui **cURL**. Silakan buka **CMD** atau **Terminal** pada komputer Anda.

### 🛠️ Apa Itu cURL?

**cURL** atau **Client URL** merupakan software berbasis command line yang dapat melakukan transaksi data melalui beberapa protokol internet, salah satunya **HTTP/S**. **cURL** dapat diakses secara langsung tanpa proses instalasi melalui **Terminal** (Linux dan Mac) atau **CMD** (Windows) [[4]].

---

## 🧪 Tiga Skenario untuk Membuat Request HTTP

Kita akan melakukan tiga skenario berikut:
1. **Meminta daftar kopi tersedia.**
2. **Membeli kopi yang tersedia.**
3. **Membeli kopi yang tidak tersedia.**

Mari kita mulai dengan **skenario pertama**.

### 🕵️‍♂️ Skenario 1: Mendapatkan Daftar Kopi Tersedia

Buatlah **request** untuk mendapatkan daftar kopi yang tersedia dengan menuliskan kode berikut pada **CMD** atau **Terminal** Anda:

```bash
curl -X GET https://coffee-api.dicoding.dev/coffees -i
```

#### ✨ Bedah Kode:
- **`curl`**: Perintah untuk menggunakan program **cURL** pada **Terminal** atau **CMD**.
- **`-X GET`**: Menetapkan **HTTP method/verb** yang kita gunakan. **GET** berarti kita ingin mendapatkan sebuah data.
- **`https://coffee-api.dicoding.dev/coffees`**: Alamat **request** yang dituju.
- **`-i`**: Memberikan informasi detail terhadap **response** yang diberikan (HTTP response headers).

#### 📢 Respons dari Web Server:
Setelah menuliskan kode tersebut, tekan **Enter**. Anda akan mendapatkan **response** dari **web server** seperti ini:

``` bash
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 01 Nov 2021 07:41:52 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 188
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache
accept-ranges: bytes

{
    "message": "Berikut daftar kopi yang tersedia",
    "coffees": [
        {
            "id": 1,
            "name": "Kopi Tubruk",
            "price": 12000
        },
        {
            "id": 2,
            "name": "Kopi Tarik",
            "price": 15000
        },
        {
            "id": 3,
            "name": "Kopi Jawa",
            "price": 18000
        }
    ]
}
```

#### 📝 Bedah Respons:
- **`HTTP/1.1`**: Versi **HTTP** yang digunakan oleh **web server** dalam menanggapi **permintaan**.
- **`200`**: Status code dari **request**. Karena status code diawali dengan angka `2`, berarti **request** kita berhasil dilakukan.
- **`OK`**: Pesan teks dari status code, `200` berarti “OK”.
- **`Content-Type: application/json;`**: Tipe konten yang digunakan **web server** dalam memberikan data. Karena nilainya `application/json`, itu berarti server menggunakan format **JSON**.
- **`JSON Data`**: Data yang diberikan oleh **web server**. Kita bisa melihat **web server** memberikan informasi kopi yang tersedia beserta harganya menggunakan format **JSON**.

---

### 🛒 Skenario 2: Membeli Kopi yang Tersedia

Langsung ke **skenario kedua**, buat **permintaan** membeli kopi yang tersedia dengan menuliskan perintah berikut:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i
```

#### ✨ Bedah Kode:
- **`-X POST`**: Dalam **request** kali ini kita menggunakan **method POST**. Karena membeli bukan hanya meminta data, tetapi juga akan mengubah jumlah stok kopi yang ada. Selain itu, kita juga melampirkan data berupa kopi apa yang akan dipesan. Sehingga tidak masuk akal bila kita menggunakan **GET request**.
- **`-H "Content-Type: application/json"`**: Menetapkan nilai `"Content-Type: application/json"` pada **Header request**. Fungsinya untuk memberitahu server bahwa kita melampirkan data dalam bentuk **JSON**.
- **`-d <JSON Content>`**: Data yang dilampirkan pada **request**. Data ini berformat **JSON** dan memiliki informasi kopi apa yang ingin dipesan.
- **`https://coffee-api.dicoding.dev/transactions`**: Alamat **request** yang dituju untuk membeli kopi.

#### 📢 Respons dari Web Server:
Setelah menuliskan perintah di atas, silakan tekan **Enter**. Anda akan mendapatkan **response** seperti ini dari **web server**:

```bash
HTTP/1.1 201 Created
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 01 Nov 2021 07:44:29 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{
    "message": "Pesanan berhasil!",
    "success": true
}
```

#### 📝 Bedah Respons:
- **`HTTP/1.1 201 Created`**: Status code `201` berarti **request** berhasil dan **resource** baru telah dibuat.
- **`{"message": "Pesanan berhasil!", "success": true}`**: Pesan yang memberitahu bahwa pesanan kopi berhasil diproses.

---

### 🛑 Skenario 3: Membeli Kopi yang Tidak Tersedia

Langsung ke **skenario terakhir**, yakni membeli kopi yang tidak tersedia. Tuliskan perintah yang sama seperti sebelumnya. Namun, dengan **tipe kopi** yang tentunya tidak tersedia pada daftar. Contohnya **Kopi Luwak**.

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i
```

#### 📢 Respons dari Web Server:
Setelah menuliskan perintah di atas, silakan tekan **Enter**. Kali ini Anda akan mendapatkan **response** seperti ini:

```
HTTP/1.1 404 Not Found
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 01 Nov 2021 07:45:23 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 66
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{
    "message": "Pesanan gagal, kopi tidak ditemukan!",
    "success": false
}
```

#### 📝 Bedah Respons:
- **`HTTP/1.1 404 Not Found`**: Status code `404` berarti **request** yang Anda lakukan tidak dapat diproses oleh server karena kopi **Luwak** tidak ada (not found) pada daftar kopi.
- **`{"message": "Pesanan gagal, kopi tidak ditemukan!", "success": false}`**: Pesan yang memberitahu bahwa pesanan kopi gagal karena kopi yang diminta tidak tersedia.

---

## 🌟 Kesimpulan

Melalui latihan ini, semoga Anda semakin mengerti bagaimana **client** dan **server** berkomunikasi melalui **protokol HTTP**. Anda telah mempraktikkan **request** dan **response** menggunakan **cURL**, serta memahami **status code** yang muncul dalam **HTTP**.

Selamat mencoba dan semoga sukses! 🚀