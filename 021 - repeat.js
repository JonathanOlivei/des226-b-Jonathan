let entrada = require("prompt-sync")();

senha = "999999";

senhaDigitada = entrada("Digite sua senha: ");

do {
  senhaDigitada = entrada("Digite sua senha: ");
} while (senha !== senhaDigitada);

entrada("Sistema acessado com sucesso! pressione ENTER para prosseguir.");
