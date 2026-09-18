let entrada = require("prompt-sync")();

let cliente1 = { nome: "Gustavo Silva", senha: "13579", saldo: 1000 };
let cliente2 = { nome: "Luan Santos", senha: "22222", saldo: 0 };
let cliente3 = { nome: "Maria Oliveira", senha: "44444", saldo: 2000 };

let valorDisp = 0;
let cedulas = 0;

console.log("_____________________________________________________");
console.log("Insira seus dados para acessar o sistema!");
let loginUsu = entrada("Insira seu login: ");
let senhaUsu = parseInt(entrada("Insira sua senha: "));
console.log("____________________________________________________");

if (loginUsu == cliente1.nome && senhaUsu == parseInt(cliente1.senha)) {

  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente1.nome}`);
  console.log(`Seu saldo atual é de R$${cliente1.saldo}`);

  valorDisp = cliente1.saldo;

} else if (loginUsu == cliente2.nome && senhaUsu == parseInt(cliente2.senha)) {

  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente2.nome}`);
  console.log(`Seu saldo atual é de R$${cliente2.saldo}`);

  valorDisp = cliente2.saldo;

} else if (loginUsu == cliente3.nome && senhaUsu == parseInt(cliente3.senha)) {

  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente3.nome}`);
  console.log(`Seu saldo atual é de R$${cliente3.saldo}`);

  parseInt(valorDisp) = cliente3.saldo;

} else {
  console.log("Login ou senha incorretos!");
}
let valorSaque = entrada("Quanto deseja sacar? R$");
console.log("____________________________________________________");
if (valorDisp >= valorSaque) {
  console.log(`Saque de R$${valorSaque} realizado com sucesso!`);
  valorDisp -= valorSaque;
  console.log(`Seu saldo atual é de R$${valorDisp}`);
  cedulas = Math.floor(valorSaque / 50);
  console.log(`Você recebeu ${cedulas} cédulas de R$50,00`);
} else {
  console.log("Saldo insuficiente!");
}
console.log("____________________________________________________");
