// Inisialisasi ID produk dengan nilai awal 1
var productId = 1;

// Fungsi untuk menambah produk ke dalam tabel
function addProduct() {
  // Mengambil nilai dari input form berdasarkan ID elemen
  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const productFreshness = document.getElementById("productFreshness").value;
  const productPrice = document.getElementById("productPrice").value;

  // Validasi: Cek apakah semua field input sudah diisi
  if (!productName || !productCategory || !productFreshness || !productPrice) {
    // Tampilkan alert jika ada field yang kosong
    alert("Please fill all fields.");
    return; // Hentikan eksekusi jika ada field yang kosong
  }

  // Ambil elemen tbody dari tabel produk berdasarkan ID
  const tableBody = document.getElementById("productTableBody");

  // Tambahkan baris baru ke tabel
  const newRow = tableBody.insertRow();

  // Setel isi baris baru dengan data yang dimasukkan oleh pengguna
  newRow.innerHTML = `
    <td>${productId++}</td> <!-- Tambahkan ID produk yang unik, lalu increment ID -->
    <td>${productName}</td> <!-- Tampilkan nama produk -->
    <td>${productCategory}</td> <!-- Tampilkan kategori produk -->
    <td>${productFreshness}</td> <!-- Tampilkan kondisi produk (freshness) -->
    <td>${productPrice}</td> <!-- Tampilkan harga produk -->
  `;

  // Reset form setelah produk berhasil ditambahkan
  document.getElementById("productForm").reset();
}
