Rangkuman Pengenalan ke Back-End
Anda berada di akhir dari modul Pengenalan ke Back-End. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.



Pengertian Back-End
Dalam pengembangan sistem aplikasi, pernahkah mendengar istilah Front-End dan Back-End? Istilah tersebut terasa familier, apalagi bila Anda baru terjun dalam bidang pemrograman. Faktanya, Front-End dan Back-End merupakan opsi bidang dalam profesi Software Developer. Anda perlu menentukan yang harus difokuskan. Lalu, apa arti dari istilah-istilah itu dalam pengembangan aplikasi? Oke, kita bahas dari Front-End terlebih dahulu.

Front-End merupakan bagian dari aplikasi yang terlihat dan digunakan langsung oleh pengguna (end-user). Orang yang menggeluti bidang ini disebut Front-End Developer. Aplikasi yang dibuat oleh seorang Front-End Developer dapat berupa web, mobile native, desktop, atau platform lainnya. Di mana pun aplikasi berjalan, fokus utama seorang Front-End Developer adalah membangun aplikasi yang memiliki performa baik, mudah diakses, serta memiliki tampilan yang menarik.

Sementara itu, Back-End merupakan bagian dari aplikasi yang bertanggung jawab untuk menyediakan kebutuhan yang tak terlihat oleh pengguna (tidak berinteraksi langsung dengan pengguna), seperti bagaimana data disimpan, diolah, serta ditransaksikan secara aman. Itu semua bertujuan untuk mendukung aplikasi Front-End bekerja sesuai dengan fungsinya. Sosok yang menggeluti bidang ini disebut Back-End Developer.



Server
Server merupakan sebuah sistem yang dapat menyediakan sumber daya berupa data, layanan, atau program untuk disajikan ke komputer lain[1].  Ingat! Pengertian dari server bukanlah sebuah perangkat keras ataupun komputer, namun server sendiri lebih merujuk kepada sistem yang dapat membuat perangkat (termasuk komputer) dapat melayani sebuah permintaan dari perangkat lain. Jika diterjemahkan ke dalam Bahasa Indonesia, server memang berarti penyaji, atau pelayan. 

Berikut beberapa tipe server sesuai dengan layanan yang baik untuk Anda ketahui.

File Server : melayani penyimpanan dan pendistribusian berkas.
Application Server : melayani hosting sebuah program atau aplikasi.
DNS Server : mengubah nama domain (contoh: dicoding.com) ke dalam bentuk IP Address (contoh: 75.2.21.170).
Web Server : melayani hosting sebuah program atau aplikasi (seperti Application Server) yang dapat diakses oleh client melalui internet maupun intranet.
Database Server : melayani penyimpanan dan pendistribusian data terstruktur.


Web Server dan Web Service
Kita perlu membuat dan menjalankan program (mirip seperti SOP) agar dapat menentukan logika bisnis sesuai dengan kebutuhan. Program tersebut perlu disimpan di server dan dapat diakses secara remote melalui internet atau intranet agar aplikasi Front-End dan Back-End dapat saling terhubung. Jadi, untuk membuat sistem aplikasi, setidaknya kita membutuhkan:

Web Server: Server yang dapat menjalankan program dan dapat diakses melalui internet atau intranet. 
Web Service: Program yang dijalankan di web server agar kebutuhan bisnis terpenuhi.

Web service berjalan di dalam web server sehingga ia dapat diakses melalui internet. Melalui web service inilah aplikasi Front-End (client) dan Back-End dapat bertransaksi.



Komunikasi Client-Server
Pada protokol HTTP, request yang diajukan client harus memiliki informasi yang cukup agar dapat dieksekusi oleh server. Informasi pada request dapat mengandung poin-poin berikut:

Request line: berisikan method/verb seperti GET (mengambil data), POST (menambahkan/mengirim data), PUT (memperbaharui data), atau DELETE (menghapus data); path atau alamat yang diminta; dan versi HTTP yang digunakan.
Header: memuat informasi yang dilampirkan terkait request seperti format dokumen (contoh: application/json, text/html, dsb), kunci akses, dll.
Body (opsional): mengandung data yang dibutuhkan oleh server, bisa dalam bentuk teks, JSON, dll. Body tidak wajib dilampirkan bila server tidak membutuhkan data apa pun.

Setiap request yang dilakukan, baik dengan informasi yang sesuai maupun tidak, akan mendapatkan respons. Respons atau tanggapan yang dikirimkan dari server untuk client juga mengandung informasi. Berikut beberapa informasi yang dilampirkan oleh respons:

Status line: berisikan HTTP versi yang digunakan; status code berupa tiga digit angka yang menandakan keberhasilan dari permintaan; reason phrase atau status text yang merupakan pesan berdasarkan status code dalam bentuk teks sehingga lebih mudah dimengerti.
Header: mengandung informasi yang dilampirkan terkait response seperti format dokumen.
Body (opsional, tetapi biasanya selalu dilampirkan): memuat data yang dikirimkan oleh server. Data dapat berupa HTML, JSON, gambar, dsb.



REST Web Service
REST atau REpresentational State Transfer adalah salah satu gaya arsitektur yang dapat diadaptasi ketika membangun web service. Berikut beberapa sifat yang menjadi kunci pada REST API:

Client-Server: Ini merupakan hal yang paling mendasar dalam membangun REST API. Server harus bisa merespons permintaan yang dilakukan client, baik itu respons berhasil maupun gagal. Komunikasi client dan server dilakukan melalui protokol HTTP.
Stateless: REST API tidak boleh menyimpan keadaan (state) apa pun terkait client. Seluruh state harus tetap disimpan di client. Artinya, tidak ada session (informasi user yang disimpan) di REST API. Permintaan yang dilakukan client harus mengandung informasi yang jelas. Jangan berharap RESTful API akan menyimpan informasi dari permintaan sebelumnya untuk digunakan di permintaan selanjutnya.
Cacheable: Agar dapat merespons permintaan dengan cepat, sebaiknya REST API menerapkan prinsip cache sehingga setiap permintaan tidak melulu mengambil dari database.
Layered: Ketika REST API server memiliki arsitektur yang kompleks, client seharusnya tidak perlu tahu bagaimana server melayaninya.

Selain itu, sebelum membangun REST API, kita perlu mengenal dahulu bagaimana konsep-konsep penting yang harus diterapkan dalam membangun arsitektur ini. Apa saja?

Singkatnya, ketika membangun REST API, kita harus memperhatikan empat poin berikut:

Format Request dan Response.
HTTP Verbs/Methods.
HTTP Response code.
URL Design.



Format Request dan Response
REST API seringnya menggunakan JavaScript Object Notation atau JSON sebagai format data baik itu pada request ataupun response. JSON merupakan salah satu format standar dalam transaksi data. Bahkan, saat ini JSON menjadi format terpopuler mengalahkan pendahulunya yaitu XML.

Sebenarnya Anda bisa menggunakan XML pada REST API, namun sebaiknya gunakan JSON agar lebih mudah dibaca dan efisien dalam transaksi data.

Agar REST API selalu merespons dengan format JSON, pastikan setiap respons terdapat properti Content-Type dengan nilai application/json.



HTTP Verbs dan Response Code
Karena REST API menggunakan protokol HTTP, kita dapat memanfaatkan HTTP verbs untuk menentukan aksi.

GET untuk mendapatkan data, POST untuk mengirimkan data baru, PUT untuk memperbarui data yang ada, dan DELETE untuk menghapus data. Verbs tersebutlah yang umum digunakan dalam operasi CRUD.



Status-Line merupakan salah satu bagian dari HTTP Response. Di dalam status line terdapat response code yang mengindikasikan bahwa permintaan yang client lakukan berhasil atau tidak. Karena itu, ketika membangun REST API kita perlu memperhatikan dan menetapkan response code secara benar.

Status code bernilai 3 digit angka. Pada REST API, berikut nilai-nilai status code yang sering digunakan:

200 (OK) - Permintaan client berhasil dijalankan oleh server.
201 (Created) - Server berhasil membuat/menambahkan resource yang diminta client.
400 (Bad Request) - Permintaan client gagal dijalankan karena proses validasi input dari client gagal.
401 (Unauthorized) - Permintaan client gagal dijalankan. Biasanya ini disebabkan karena pengguna belum melakukan proses autentikasi.
403 (Forbidden) - Permintaan client gagal dijalankan karena ia tidak memiliki hak akses ke resource yang diminta.
404 (Not Found) - Permintaan client gagal dijalankan karena resource yang diminta tidak ditemukan.
500 (Internal Server Error) - Permintaan client gagal dijalankan karena server mengalami eror (membangkitkan Exception).
503 (Service Unavailable) - Permintaan client gagal dijalankan karena server tidak dapat menangani permintaan. 


URL Design
URL, Path, atau Endpoint merupakan salah satu bagian terpenting yang harus diperhatikan ketika membangun REST API. Dengan merancang endpoint yang baik, penggunaan API akan lebih mudah dipahami. Dalam merancang endpoint, ikutilah aturan umum atau convention agar penggunaan API kita memiliki standar yang diharapkan oleh banyak developer. Lalu, seperti apa standar dalam merancang endpoint? 

Gunakan Kata Benda daripada Kata Kerja pada Endpoint Path
Gunakan Kata Jamak pada Endpoint untuk Resource Collection
Gunakan Endpoint berantai untuk resource yang memiliki hirarki/relasi


Dengan ringkasan tersebut, diharapkan Anda dapat memahami semua materi yang telah disampaikan. Jika belum, Anda bisa ulas kembali materi yang diberikan pada modul ini dan juga menanyakannya di forum diskusi. Untuk Anda yang sudah merasa mantap, yuk lanjut ke modul berikutnya!