let entrada = require("prompt-sync")();

let recebeNumero = entrada("Digite um número: ");

if (recebeNumero % 2 == 0) {
  console.log(`O número ${recebeNumero} é par!`);
} else {
  console.log(`O número ${recebeNumero} é ímpar!`);
}

if (recebeNumero >= 0) {
  console.log(`O número ${recebeNumero} é positivo!`);
} else if (recebeNumero < 0) {
  console.log(`O número ${recebeNumero} é negativo!`);
}
