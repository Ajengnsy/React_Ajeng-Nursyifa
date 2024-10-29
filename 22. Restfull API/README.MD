# React_Ajeng-Nursyifa

# 3 poin penting

1. Front-end adalah bagian dari sebuah aplikasi atau website yang langsung berinteraksi dengan pengguna.
2. Front-end sebagai penghubung antara ui ux dan back end
3. Front end biasanya bertugas untuk membuat tampilan web atau antarmuka yang nyaman dan interaktif
4. Front-end sering mengguakan html,css dan java script

# RESTful API

RESTful API (Representational State Transfer) adalah gaya arsitektur yang digunakan untuk membangun layanan web, memungkinkan komunikasi antar sistem melalui protokol HTTP. RESTful API populer karena kesederhanaan dan fleksibilitasnya, memungkinkan berbagai aplikasi berinteraksi secara efisien dan terstruktur.

## Prinsip Dasar RESTful API

1. **Stateless**  
   Setiap permintaan dari klien ke server harus memuat semua informasi yang diperlukan tanpa bergantung pada permintaan sebelumnya. Server tidak menyimpan konteks antara permintaan.

2. **Client-Server**  
   Memisahkan tanggung jawab antara klien (pengguna aplikasi) dan server (penyedia data), memungkinkan keduanya berkembang secara independen.

3. **Uniform Interface**  
   Menggunakan aturan yang konsisten, seperti metode HTTP berikut:

   - **GET**: Mengambil data dari server.
   - **POST**: Menambahkan data baru ke server.
   - **PUT**: Memperbarui data yang sudah ada di server.
   - **DELETE**: Menghapus data di server.

4. **Cacheable**  
   Respons dapat di-cache untuk meningkatkan kinerja dan mengurangi beban server.

5. **Layered System**  
   RESTful API dapat diakses melalui berbagai lapisan (seperti load balancer atau proxy server) tanpa memengaruhi klien.

## Struktur URL dalam RESTful API

RESTful API menggunakan struktur URL hierarkis untuk menunjukkan entitas data, sehingga mudah dipahami dan diakses. Contoh:

- `GET /users`: Mengambil daftar semua pengguna.
- `GET /users/1`: Mengambil data pengguna dengan ID 1.
- `POST /users`: Menambahkan pengguna baru.
- `PUT /users/1`: Memperbarui data pengguna dengan ID 1.
- `DELETE /users/1`: Menghapus pengguna dengan ID 1.

## Format Data yang Digunakan

RESTful API umumnya menggunakan format **JSON** (JavaScript Object Notation) karena ringan dan mudah dibaca. Meskipun begitu, **XML** juga didukung di beberapa layanan.

## Keunggulan RESTful API

- **Kemudahan Pengembangan**: RESTful API sederhana dan konsisten, sehingga mudah dipahami dan dikembangkan.
- **Fleksibilitas Akses**: RESTful API dapat diakses dari berbagai perangkat dan platform, seperti browser, aplikasi mobile, atau perangkat IoT.
- **Scalability**: RESTful API memungkinkan skalabilitas yang tinggi karena arsitekturnya yang tidak bergantung pada status (stateless).

RESTful API adalah pendekatan modular dan sederhana yang cocok untuk aplikasi yang membutuhkan komunikasi data antara server dan klien.
