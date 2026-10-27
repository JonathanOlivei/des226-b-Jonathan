let entrada = require("prompt-sync")();

let prodCode1 = 13579;
let descProd1 = "Smartphone Samsung Galaxy S21";

let prodCode2 = 99865;
let descProd2 = "IPhone 13 Pro Max";

let prodCode3 = 44532;
let descProd3 = "Notebook Dell Inspiron 15";

let recebeProdCode = entrada("Digite o código do produto: ");

switch (recebeProdCode) {
  case "13579":
    console.log(`Produto: ${descProd1}`);
    break;
  case "99865":
    console.log(`Produto: ${descProd2}`);
    break;
  case "44532":
    console.log(`Produto: ${descProd3}`);
    break;
  default:
    console.log("Produto não encontrado!");
    break;
}
