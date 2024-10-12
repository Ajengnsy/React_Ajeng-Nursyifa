# React_Ajeng-Nursyifa

# Clean Code

Dokumen ini memberikan panduan tentang prinsip-prinsip clean code yang perlu diadopsi dalam proyek pengembangan perangkat lunak. Tujuannya adalah untuk meningkatkan kualitas kode, membuatnya lebih mudah dipahami, dipelihara, dan dikembangkan.

## Prinsip-Prinsip Utama

- **Kemudahan Dibaca:**
  - Gunakan nama variabel, fungsi, dan kelas yang deskriptif (misalnya, `userName` bukan `x`).
  - Tambahkan komentar yang menjelaskan bagian kode yang kompleks atau tidak jelas.
  - Hindari komentar yang menjelaskan kode yang sudah jelas.
- **Konsistensi:**
  - Terapkan konvensi penamaan yang konsisten di seluruh proyek (misalnya, camelCase, snake_case).
  - Gunakan struktur kode yang konsisten (misalnya, indenasi, spasi, letak kurung kurawal).
  - Ikuti gaya coding yang telah disepakati dalam tim.
- **Simpel dan Ringkas:**
  - Fungsi harus memiliki satu tanggung jawab.
  - Hindari pengulangan kode (DRY principle).
  - Gunakan algoritma yang efisien.
- **Struktur dan Organisasi:**
  - Bagi kode menjadi modul-modul yang lebih kecil.
  - Terapkan prinsip Single Responsibility Principle (SRP).
  - Gunakan pola desain yang sesuai.
- **Efisiensi dan Kinerja:**
  - Hindari operasi yang tidak perlu.
  - Optimalkan kode secara bijak, tetapi jangan mengorbankan keterbacaan.
- **Penanganan Kesalahan:**
  - Tangani kesalahan dengan tepat menggunakan mekanisme error handling yang sesuai.
  - Berikan pesan error yang informatif.

## Contoh Penerapan

```javascript
// Contoh fungsi dengan nama yang deskriptif dan komentar yang jelas
function calculateTotal(price, quantity) {
  // Menghitung total harga berdasarkan harga satuan dan jumlah
  return price * quantity;
}
```
