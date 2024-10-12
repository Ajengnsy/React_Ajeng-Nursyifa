# React_Ajeng-Nursyifa

# React Hooks

React Hooks adalah mekanisme yang inovatif dalam pengembangan komponen React. Fitur ini memungkinkan pengembang untuk mengelola state dan efek samping (side effects) secara langsung di dalam komponen fungsional, tanpa perlu memperpanjang kelas komponen. Dengan demikian, kode menjadi lebih ringkas, mudah dibaca, dan lebih mudah diuji.

## Istilah-istilah Teknis yang Perlu Digunakan

- **Komponen fungsional:** Fungsi JavaScript yang mengembalikan elemen JSX.
- **State:** Data yang dapat berubah dalam komponen dan memicu render ulang.
- **Props:** Data yang diteruskan dari komponen induk ke komponen anak.
- **Lifecycle methods:** Metode yang dipanggil pada siklus hidup komponen (misalnya, componentDidMount, componentDidUpdate).
- **Side effects:** Interaksi dengan sistem eksternal seperti jaringan, DOM, atau timer.
- **Memoization:** Teknik untuk menyimpan hasil perhitungan yang mahal untuk digunakan kembali.

## Contoh Penggunaan Hooks

- **useEffect:**

  > Hook useEffect memungkinkan pengembang untuk melakukan efek samping setelah komponen dirender atau ketika dependensi berubah.

- **useContext:**

  > Hook useContext menyediakan cara yang efisien untuk berbagi data di antara komponen yang dalam di dalam tree komponen.

- **useMemo:**
  > Memoization dengan hook useMemo dapat meningkatkan performa aplikasi dengan menghindari perhitungan ulang yang tidak perlu.
