async function fetchData() {
  const simulateApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("SELAMATTT data berhasil diambil yeayy!");
      }, 2000);
    });
  };

  console.log("Mengambil data...");

  const data = await simulateApiCall();

  console.log(data);
}

fetchData();
