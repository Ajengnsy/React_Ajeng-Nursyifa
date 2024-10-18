# React_Ajeng-Nursyifa

# Global State Management dengan Zustand

## Pengertian

Global state management adalah pendekatan dalam pemrograman untuk mengelola dan menyimpan state (data atau informasi) secara terpusat sehingga dapat diakses oleh berbagai komponen dalam aplikasi tanpa perlu mengoper data melalui **prop drilling** (memasukkan data ke dalam komponen yang dalam hirarki komponen).

Dengan global state management, aplikasi dapat lebih mudah mengelola state yang dipakai oleh banyak komponen, meningkatkan efisiensi, dan mengurangi kerumitan dalam pengoperan data antar komponen.

**Zustand** adalah sebuah state management library yang sederhana, ringan, dan efisien untuk mengelola state global dalam aplikasi React. Zustand tidak memerlukan setup yang kompleks seperti Redux dan sangat cocok untuk aplikasi skala kecil hingga menengah yang membutuhkan state global.

### Keunggulan Zustand:

- **Ringan dan sederhana**: Tidak memerlukan banyak konfigurasi dan boilerplate seperti Redux.
- **Performant**: Hanya komponen yang mengakses state tertentu yang akan di-render ulang ketika state tersebut berubah.
- **Global state**: Zustand menyediakan cara untuk berbagi state di seluruh komponen aplikasi tanpa memerlukan prop drilling.

## Cara Menambah dan Menghapus State di Zustand

Untuk menambah dan menghapus state di Zustand, kita perlu membuat action dalam store. Action ini bertugas mengelola perubahan state, baik itu untuk menambah atau menghapus item dari state.

### Langkah-langkah:

1. **Install Zustand**
   Jika belum terpasang, Anda bisa menginstall Zustand dengan perintah berikut:
   ```bash
   npm install zustand
   ```
