# Web Server dan Web Service

## 📜 Standar Operasional Prosedur (SOP) dalam Sistem Aplikasi

Seperti halnya kedai kopi yang memiliki **Standar Operasional Prosedur (SOP)** selama beroperasi, sistem aplikasi juga memerlukan prosedur yang jelas untuk memastikan semua komponennya bekerja dengan baik. Kita tidak tahu apakah setiap kedai kopi memiliki SOP yang sama atau tidak. Yang kita ketahui secara umum adalah bahwa kedai kopi memiliki **pelayan** sebagai perantara interaksi dari dapur ke pelanggannya. Kita juga tidak mengetahui proses apa yang terjadi ketika barista menyerahkan kopi buatannya ke pelayan. Apakah pelayan memastikan kopi yang dipesan sesuai? Atau diberikan ke pelanggan secara langsung tanpa melalui proses pengecekan? Hal ini hanya diketahui oleh pegawai kedai kopi saja. Sebagai pelanggan, kita hanya menikmati hasil akhirnya, bukan.

Sama halnya seperti sistem aplikasi. Ketika **Front-End** meminta sesuatu hal ke **Back-End**, misalnya meminta data pembatalan transaksi yang terjadi selama bulan Januari, kita sebagai pengguna aplikasi tidak tahu proses apa yang terjadi di **Back-End**. Kita tidak tahu bahwa sebenarnya **Back-End** melakukan proses yang sangat rumit untuk memenuhi permintaan dari **Front-End**. Kita tidak tahu bahwa sebelum mulai mengeksekusi permintaan, **Back-End** sebenarnya perlu memvalidasi permintaan tersebut untuk memastikan ia dapat menyanggupinya. Kita pun tidak tahu bagaimana proses bisnis di belakang berjalan. Hanya pemilik dan pengembang sistem aplikasi tersebut yang paham.

---

## 🔄 Perbedaan SOP dalam Bidang Bisnis

Bidang bisnis bolehlah sama, namun tidak menjamin SOP-nya sama juga. Perbedaan tersebut dipengaruhi oleh banyak faktor, contohnya **model bisnis**, **letak geografis**, **target konsumen**, **tipe kopi atau makanan yang ditawarkan**, ataupun faktor lainnya. SOP haruslah **fleksibel** sesuai dengan keadaan. Misalnya, tidak bisa SOP kedai kopi kelas atas diterapkan ke kedai kopi kelas-kelas bawah. Alhasil, jika dipaksakan, bisnis tersebut dapat gulung tikar.

Sistem untuk aplikasi pun demikian. Kita perlu membuat dan menjalankan program (mirip seperti SOP) agar dapat menentukan logika bisnis sesuai dengan kebutuhan. Program tersebut perlu disimpan di **server** dan dapat diakses secara remote melalui internet atau intranet agar aplikasi **Front-End** dan **Back-End** dapat saling terhubung. Jadi, untuk membuat sistem aplikasi setidaknya membutuhkan:

### 1. **Web Server**
**Web Server** adalah server yang dapat menjalankan program dan dapat diakses melalui internet atau intranet. Web Server bertugas untuk menerima permintaan dari **Front-End**, mengambil data yang diperlukan dari **Back-End**, dan mengirimkan hasilnya kembali ke **Front-End**. Dalam analogi kedai kopi, Web Server berperan sebagai **pelayan** yang menghubungkan **kasir (Front-End)** dengan **barista (Back-End)** [[7]].

### 2. **Web Service**
**Web Service** adalah program yang dijalankan di Web Server agar kebutuhan bisnis terpenuhi. Web Service berjalan di dalam Web Server sehingga ia dapat diakses melalui internet. Melalui Web Service inilah aplikasi **Front-End (client)** dan **Back-End** dapat bertransaksi. Web Service menyediakan antarmuka yang memungkinkan komunikasi antara komponen aplikasi yang berbeda, baik internal maupun eksternal.