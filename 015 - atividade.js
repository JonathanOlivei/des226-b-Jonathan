let entrada = require("prompt-sync")();

let cliente3 = {
  nome: "Maria Oliveira",
  idade: 20,
  acesso: true,
  aconpanhado: false,
};

let recebeNome = entrada("Digite seu nome: ");

let recebeSenha = entrada("Digite sua senha: ");

if (recebeNome == cliente1.nome && recebeSenha == cliente1.senha) {
  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente1.nome}`);
  console.log(`Sua idade é de ${cliente1.idade} anos`);
  console.log(`Você está acompanhado? ${cliente1.aconpanhado}`);
  cliente1.acesso = true;
} else if (recebeNome == cliente2.nome && recebeSenha == cliente2.senha) {
  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente2.nome}`);
  console.log(`Sua idade é de ${cliente2.idade} anos`);
  console.log(`Você está acompanhado? ${cliente2.aconpanhado}`);
  cliente2.acesso = true;
} else if (recebeNome == cliente3.nome && recebeSenha == cliente3.senha) {
  console.log("Acesso permitido!");
  console.log(`Bem-vindo ${cliente3.nome}`);
  console.log(`Sua idade é de ${cliente3.idade} anos`);
  console.log(`Você está acompanhado? ${cliente3.aconpanhado}`);
  cliente3.acesso = true;
}

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
