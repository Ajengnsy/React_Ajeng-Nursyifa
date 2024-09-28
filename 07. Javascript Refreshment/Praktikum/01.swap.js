function swapValues(a, b) {
  console.log("Sebelum swap: a =", a, ", b =", b);

  let temp = a;
  a = b;
  b = temp;

  console.log("Setelah swap: a =", a, ", b =", b);
}

swapValues(13, 17);
