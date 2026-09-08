let entrada = require("prompt-sync")();

let strNum1 = entrada("Insira o 1° valor: ");
let strNum2 = entrada("Insira o 2° valor: ");

let num1 = parseInt(strNum1);
let num2 = parseInt(strNum2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log(`soma: ${num1} + ${num2} = ${soma}`);
console.log(`soma: ${num1} - ${num2} = ${subtracao}`);
console.log(`soma: ${num1} x ${num2} = ${multiplicacao}`);
console.log(`soma: ${num1} ÷ ${num2} = ${divisao.toFixed(2)}`);
console.log(`soma: ${num1} ÷ ${num2} = ${restoDivisao}`);
