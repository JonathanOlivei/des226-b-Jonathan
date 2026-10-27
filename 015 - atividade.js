let entrada = require("prompt-sync")();

let cliente1 = {
  nome: "Maria",
  senha: "111",
  acesso: true,
  aconpanhado: false,
};

let cliente2 = {
  nome: "Joao",
  senha: "000",
  acesso: false,
};

let veriAcesso = false;
let idade = false;
let perm = false;
let aconpanhado = false;

let recebeNome = entrada("Digite seu nome: ");

let recebeSenha = entrada("Digite sua senha: ");

let recebeIdade = entrada("Digite sua idade: ");

let recebeAcompanhado = entrada("Você está acompanhado? (S/N): ");

if (recebeIdade >= 18) {
  idade = true;
} else if (recebeIdade < 18) {
  idade = false;
}

if (recebeAcompanhado == "S" || recebeAcompanhado == "s") {
  aconpanhado = true;
} else if (recebeAcompanhado == "N" || recebeAcompanhado == "n") {
  aconpanhado = false;
}

if (recebeNome == cliente1.nome && recebeSenha == cliente1.senha) {
  veriAcesso = cliente1.acesso;
  perm = true;
} else if (recebeNome == cliente2.nome && recebeSenha == cliente2.senha) {
  veriAcesso = cliente2.acesso;
  perm = true;
} else if (recebeNome == cliente3.nome && recebeSenha == cliente3.senha) {
  veriAcesso = cliente3.acesso;
  perm = true;
} else {
  console.log("Acesso negado!");
  veriAcesso = false;
}

if (veriAcesso == true && perm == true) {
  if (aconpanhado == true && idade == true) {
    console.log("Acesso permitido!");
    console.log(`seja bem-vindo ${recebeNome}!`);
  } else if (aconpanhado == false && idade == true) {
    console.log("Acesso permitido!");
    console.log(`seja bem-vindo ${recebeNome}!`);
  } else if (aconpanhado == true && idade == false) {
    console.log("Acesso permitido!");
    console.log(`seja bem-vindo ${recebeNome}!`);
  } else if (aconpanhado == false && idade == false) {
    console.log("Acesso negado!");
  }
} else {
  console.log("Acesso negado!");
}
