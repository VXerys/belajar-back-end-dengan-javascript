# Format Request dan Response

## 📘 Pengantar

**REST API** seringnya menggunakan **JavaScript Object Notation** (JSON) sebagai format data baik pada **request** maupun **response**. JSON merupakan salah satu format standar dalam transaksi data. Bahkan, saat ini JSON menjadi format terpopuler mengalahkan pendahulunya, yaitu **XML** [[3]].

Sebenarnya, Anda bisa menggunakan **XML** pada **REST API**, namun sebaiknya gunakan **JSON** agar lebih mudah dibaca dan efisien dalam transaksi data. **JSON** lebih ringan, mudah dipahami, dan lebih cepat dibaca oleh aplikasi, sehingga sangat cocok untuk **REST API**.

### 🚀 Keunggulan JSON:
- **Sederhana**: Struktur data yang mudah dipahami dan dibaca.
- **Efisien**: Ukuran file yang lebih kecil dibandingkan **XML**.
- **Populer**: Digunakan secara luas dalam pengembangan aplikasi modern.

---

## 🎯 Menggunakan JSON dalam REST API

Agar **REST API** selalu merespons dengan format **JSON**, pastikan setiap **response** terdapat properti **Content-Type** dengan nilai `application/json`. Contohnya:

```http
Content-Type: application/json
```

### 📄 Struktur JSON
Seperti namanya, **JSON** memiliki struktur seperti **JavaScript Object**, yakni menggunakan **key-value**. Bedanya, **key** pada **JSON** selalu dituliskan menggunakan tanda kutip dua (`""). **Value** pada **JSON** dapat menampung nilai primitif seperti **string**, **number**, **boolean**, atau nilai non-primitif seperti **object** atau **array**.

Contoh struktur **JSON**:

```json
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

### 📝 Contoh JSON pada Latihan Sebelumnya
Pada latihan sebelumnya, Anda sudah melihat bagaimana bentuk **JSON** ketika mengirimkan data pembelian kopi dan data pada **body response** dari server. Berikut contoh **JSON** ketika melakukan **GET request** terhadap URL `https://coffee-api.dicoding.dev/coffees`:

```json
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

---

## 🛠️ Bukan Hanya JavaScript

Meskipun **JSON** memiliki nama **JavaScript Object Notation**, bukan berarti kita harus menggunakan **JavaScript** untuk mengolah data dengan format **JSON**. **Format JSON** dapat digunakan oleh hampir semua bahasa pemrograman yang ada. Bahasa pemrograman seperti **Python**, **Java**, **PHP**, **Ruby**, dan lainnya mendukung **JSON** dengan baik.

### 📚 Contoh Penggunaan JSON dalam Beberapa Bahasa Pemrograman:

#### 1. **Python**
```python
import json

data = {
    "message": "Berikut daftar kopi yang tersedia",
    "coffees": [
        {"id": 1, "name": "Kopi Tubruk", "price": 12000},
        {"id": 2, "name": "Kopi Tarik", "price": 15000},
        {"id": 3, "name": "Kopi Jawa", "price": 18000}
    ]
}

json_data = json.dumps(data)
print(json_data)
```

#### 2. **Java**
```java
import org.json.JSONObject;
import org.json.JSONArray;

JSONObject data = new JSONObject();
JSONArray coffees = new JSONArray();

JSONObject coffee1 = new JSONObject();
coffee1.put("id", 1);
coffee1.put("name", "Kopi Tubruk");
coffee1.put("price", 12000);

JSONObject coffee2 = new JSONObject();
coffee2.put("id", 2);
coffee2.put("name", "Kopi Tarik");
coffee2.put("price", 15000);

JSONObject coffee3 = new JSONObject();
coffee3.put("id", 3);
coffee3.put("name", "Kopi Jawa");
coffee3.put("price", 18000);

coffees.put(coffee1);
coffees.put(coffee2);
coffees.put(coffee3);

data.put("message", "Berikut daftar kopi yang tersedia");
data.put("coffees", coffees);

System.out.println(data.toString());
```

#### 3. **PHP**
```php
$data = [
    "message" => "Berikut daftar kopi yang tersedia",
    "coffees" => [
        ["id" => 1, "name" => "Kopi Tubruk", "price" => 12000],
        ["id" => 2, "name" => "Kopi Tarik", "price" => 15000],
        ["id" => 3, "name" => "Kopi Jawa", "price" => 18000]
    ]
];

echo json_encode($data);
```

---

## 🌟 Kesimpulan

**JSON** adalah format data yang sangat populer dalam pengembangan **REST API**. Dengan struktur yang sederhana dan efisien, **JSON** memudahkan pengembang untuk mengirim dan menerima data antara **client** dan **server**. Meskipun **JSON** memiliki nama **JavaScript Object Notation**, format ini dapat digunakan oleh hampir semua bahasa pemrograman, menjadikannya pilihan yang ideal dalam pengembangan aplikasi modern.

Semoga dengan penjelasan ini, Anda lebih memahami tentang **format request dan response** dalam **REST API**! 🚀