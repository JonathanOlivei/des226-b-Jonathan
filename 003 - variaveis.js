let entrada = require("prompt-sync")();

let nome = "Jonathan"; //string

let idade = 21; // number

let trabalha = true; // false -- comentário

let endereco = {
  rua: "brasil",
  num: 40,
  bairro: "centro",
}; // object ex: padrão chave/valor

let funcao = () => console.log("oi"); //function ex: bloco de código

// console.log(Tiposdevariáveis);
// console.log("varialve: nome");

let conteudoDigitado = entrada("Digite uma frase: ");

console.log("Tipo de variáveis");
console.log("Variavel: nome:" + typeof nome);
console.log("Variavel: idade:" + typeof idade);
console.log("Variavel: trabalha:" + typeof trabalha);
console.log("Variavel: endereco:" + typeof endereco);
console.log("Variavel: funcao:" + typeof funcao);
console.log("--------------------------------------------------------------");
let nomeDigitado;
let idadeDigitada;
let trabalhoDigitado;

console.log();

nomeDigitado = entrada("Digite seu nome:");
idadeDigitada = entrada("Digite sua idade:");
trabalhaDigitado = entrada("Você trabalha?");

console.log("Nome:" + nomeDigitado + "tipo" + typeof nomeDigitado);
console.log("Idade:" + idadeDigitada + "tipo" + typeof idadeDigitada);
console.log("Trabalha:" + trabalhaDigitado + "tipo" + typeof trabalhaDigitado);
console.log("--------------------------------------------------------------");
