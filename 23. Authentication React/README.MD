# Autentikasi dan Otorisasi di React

Autentikasi dan Otorisasi adalah dua konsep penting yang sering digunakan dalam aplikasi React untuk mengamankan akses ke sumber daya atau data sensitif.

## Authentication

Autentikasi adalah proses untuk memverifikasi identitas pengguna. Contohnya, saat pengguna mencoba masuk ke aplikasi dengan username dan password, sistem akan memeriksa apakah informasi yang diberikan cocok dengan yang ada di database.

Dalam React, autentikasi biasanya diterapkan dengan mengirimkan data login ke server. Jika kredensial tersebut valid, server akan mengembalikan token (seperti JSON Web Token atau JWT), yang disimpan di browser, misalnya di `localStorage` atau `sessionStorage`. Token ini kemudian digunakan untuk otentikasi pengguna saat mengakses halaman atau API tertentu. Status login biasanya dikelola menggunakan state atau konteks global seperti `useContext`.

## Authorization

Otorisasi mengacu pada proses menentukan hak akses pengguna terhadap sumber daya atau fitur di aplikasi. Ini terjadi setelah autentikasi. Misalnya, meskipun seorang pengguna berhasil masuk, mereka mungkin hanya memiliki izin untuk melihat halaman tertentu berdasarkan peran mereka (misalnya, admin atau pengguna biasa).

Di aplikasi React, otorisasi dapat dikelola dengan memeriksa peran pengguna sebelum menampilkan komponen atau menggunakan rute khusus seperti `PrivateRoute` dari React Router. Ini memastikan bahwa hanya pengguna yang berwenang yang dapat mengakses halaman tertentu.

## Ringkasan

- **Autentikasi**: Memastikan **siapa** pengguna itu.
- **Otorisasi**: Menentukan **apa** yang diizinkan pengguna untuk lakukan.

Kedua proses ini bekerja bersama untuk mengamankan aplikasi dan memberikan pengalaman yang sesuai berdasarkan identitas dan hak akses pengguna.
