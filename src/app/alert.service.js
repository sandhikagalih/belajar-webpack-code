const cekInputValid = require('./utils/cekInputValid');

module.exports = class AlertService {
  constructor() {
    this.error = document.querySelector('#error');
  }

  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if (cekInputValid(angka[index])) {
        return pesan + '';
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, 'Silahkan masukkan angka yang benar: ');

    this.error.classList.remove('d-none');
    this.error.innerText = hasil;
  };

  sembunyikanError = () => this.error.classList.add('d-none');
}
