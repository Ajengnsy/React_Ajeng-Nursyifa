## Ajeng Nursyifa

# AI Chat

AI dalam kode ini dirancang untuk berinteraksi dengan pengguna melalui percakapan yang dinamis, di mana setiap pesan dari pengguna dan respons AI disimpan dalam `chatHistory`. Riwayat percakapan ini berfungsi sebagai bentuk "ingatan sementara" yang memungkinkan AI mengingat apa yang telah dikatakan sebelumnya. Dengan menampilkan seluruh percakapan, pengguna dapat melihat alur komunikasi yang terjadi, memberikan pengalaman yang lebih alami dan interaktif.

Selain ingatan sementara, AI juga memiliki "memori statis" berupa data harga pasar yang disimpan di file `dataHarga.js`. Data ini mencakup harga berbagai komoditas seperti cabai, seblak, telur, beras, dan geprek, lengkap dengan satuannya. Ketika pengguna bertanya tentang harga suatu barang, AI memeriksa apakah ada kata kunci yang sesuai dalam pertanyaan. Jika ada, AI merespons dengan informasi yang diambil dari data harga tersebut, memberikan jawaban yang relevan dan spesifik.

Namun, jika AI tidak menemukan kecocokan kata kunci dalam pertanyaan pengguna, ia menggunakan fungsi `generateContent` untuk menghasilkan jawaban berdasarkan prompt yang diberikan. Ini memungkinkan AI untuk tetap responsif meskipun topik pembicaraan tidak secara langsung terkait dengan data harga yang dimilikinya. Dengan kombinasi ingatan riwayat percakapan dan data harga yang terstruktur, AI ini dapat memberikan jawaban yang terinformasi dengan baik dan menjaga interaksi tetap lancar serta kontekstual.
