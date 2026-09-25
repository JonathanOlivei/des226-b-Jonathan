let entrada = require("prompt-sync")();

let usuario = "Klovis";
let senha = "1475369";
let usOk = false;
let snOk = false;
let acessoaPermitido = false;

console.log("Insira seus dados para acessar o sistema!");

let loginUsuario = entrada("Nome de usuário: ");
let loginSenha = entrada("Senha: ");

if (usuario == loginUsuario) {
  console.log("Nome de usuário verificado com sucesso!");
  usOk = true;
}

if (senha == loginSenha) {
  console.log("Senha verificada com sucesso!");
  snOk = true;
}

if (usOk == true) {
  if (snOk == true) {
    acessoaPermitido
     = true;
  }
}

if (acessoaPermitido == true) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

entrada("Pressione enter para finalizar o programa");
