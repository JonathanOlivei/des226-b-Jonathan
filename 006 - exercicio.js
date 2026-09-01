let entrada = require("prompt-sync")();

let nomeJogo = "Grand Theft Auto VI";
let nota = 10;
let semValor;
let nulo = null;
let recomendacao;

let numeroInt = parseInt(nota, 10);

let recomendacaoFinal = recomendacao === "sim" ? true : false;

console.log("nome do jogo: " + typeof nomeJogo);
console.log("Nota: " + typeof numeroInt);
console.log("Recomendação: " + typeof recomendacaoFinal);
console.log("Indefinido: " + typeof semValor);
console.log("nullo: " + typeof nulo);
