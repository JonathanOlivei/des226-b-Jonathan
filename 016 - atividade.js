let entrada = require("prompt-sync")();

let nota1 = entrada("Digite a primeira nota: ");
let nota2 = entrada("Digite a segunda nota: ");
let nota3 = entrada("Digite a terceira nota: ");

let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);

let media = soma / 3;

if (media >= 7) {
  console.log("Aprovado Direto!");
  console.log(`Média: ${media.toFixed(2)}`);
} else if (media < 7 && media >= 5) {
  console.log("Aluno em recuperação!");
  console.log(`Média: ${media.toFixed(2)}`);
} else {
  console.log("Aluno reprovado!");
  console.log(`Média: ${media.toFixed(2)}`);
}
