import { cekInputValid } from "./utils/cekInputValid.js";
import { parseInput } from "./utils/parseInput.js";

export const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();

  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = parseInput(...input);
    if (cekInputValid(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult("");
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });

  jokesService.onClick(() => {
    fetch("https://candaan-api.vercel.app/api/text/random")
      .then((response) => response.json())
      .then((data) => {
        jokesService.setModal(data.data);
      });
  });
};
