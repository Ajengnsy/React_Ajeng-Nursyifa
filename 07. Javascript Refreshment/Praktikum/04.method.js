const calculator = {
  // tambah
  add: function (a, b) {
    return a + b;
  },

  // kurang
  subtract: function (a, b) {
    return a - b;
  },

  // kali
  multiply: function (a, b) {
    return a * b;
  },

  // bagi
  divide: function (a, b) {
    if (b === 0) {
      return "kode error jangan di bagi 0 yah!!!";
    }
    return a / b;
  },
};

console.log(calculator.add(102, 76));
console.log(calculator.subtract(103, 5));
console.log(calculator.multiply(10, 4));
console.log(calculator.divide(40, 5));
console.log(calculator.divide(10, 0));
