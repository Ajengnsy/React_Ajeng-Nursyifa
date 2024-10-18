# Panduan Penggunaan Regular Expression dan Komponen di React

## Regular Expression (Regex)

Regular expression (regex) adalah pola pencarian teks yang kuat. Dalam konteks React, regex digunakan untuk:

- Memvalidasi input pengguna.
- Memastikan data yang dimasukkan sesuai dengan format yang diharapkan.

### Contoh Penggunaan Regex

- **Validasi Alamat Email**: Memastikan bahwa alamat email yang dimasukkan mengikuti format yang benar.
- **Validasi Nomor Telepon**: Memastikan bahwa nomor telepon sesuai dengan pola yang diharapkan.
- **Validasi Format Tanggal**: Memastikan bahwa tanggal yang dimasukkan sesuai dengan format yang diinginkan.

## Controlled Component

Controlled Component sepenuhnya dikendalikan oleh state komponen, sehingga nilai input selalu sinkron dengan state tersebut. Keuntungan dari Controlled Component meliputi:

- Kontrol yang lebih besar atas validasi.
- Kemampuan untuk membatasi nilai input.
- Pembaruan nilai input secara dinamis berdasarkan perubahan state lainnya.

## Uncontrolled Component

Uncontrolled Component membiarkan DOM mengelola nilai input secara langsung, sehingga nilai input tidak terikat dengan state komponen. Meskipun lebih sederhana, Uncontrolled Component memberikan fleksibilitas yang lebih rendah dalam hal validasi dan pembaruan nilai input.
