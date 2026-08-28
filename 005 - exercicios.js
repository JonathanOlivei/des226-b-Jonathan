let entrada = require("prompt-sync")();

let recebeNome = "";
let recebeProfissao = "";
let recebeDataNasc = 0;

recebeNome = entrada("Digite seu nome comleto: ");
recebeProfissao = entrada("Digite sua profissão ou cargo atual: ");
recebeDataNasc = entrada("Digite o ano que você nesceu: ");

console.log("-------------");
console.log("CARTÃO DE VISITA");
console.log("-------------");
console.log("Nome: " + recebeNome);
console.log("Cargo: " + recebeProfissao);
console.log("Data de nascimento:" + recebeDataNasc);
console.log("-------------");
console.log(typeof recebeNome);
console.log(typeof recebeProfissao);
console.log(typeof recebeDataNasc);
