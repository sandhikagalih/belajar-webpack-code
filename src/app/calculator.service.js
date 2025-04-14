module.exports = class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector("#operand1");
    this.operand2 = document.querySelector("#operand2");
    this.tombolTambah = document.querySelector("#tombol-tambah");
    this.hasil = document.querySelector("#hasil");
  }

  getInput() {
    return [this.operand1.value, this.operand2.value];
  }

  setResult(angka1, angka2) {
    if (angka1 == "") {
      return (this.hasil.innerHTML = "");
    }
    this.hasil.innerText = angka1 + angka2;
  }

  onClick(cb) {
    this.tombolTambah.addEventListener("click", cb);
  }
};
