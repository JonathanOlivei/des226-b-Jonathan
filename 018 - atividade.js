let entrada = require("prompt-sync")();

let valorDaCompra = entrada("Digite o valor da compra: ");

let frete = valorDaCompra < 150 ? 20 : 0;

frete == 0
  ? console.log("Frete grátis!")
  : console.log(`O valor do frete é: R$ ${frete.toFixed(2)}`);
