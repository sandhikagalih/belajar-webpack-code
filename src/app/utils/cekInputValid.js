const cekInputValid = (...angka) => {
  return angka.every((num) => typeof num === "number" && !isNaN(num));
};

module.exports = cekInputValid;
