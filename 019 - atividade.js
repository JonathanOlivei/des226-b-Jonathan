// let constador = 0;

// while (constador <= 1000000) {
//   console.log(constador);
//   constador = constador + 1;
// }

let i = 1;

console.log("Iniciando contagem na mesma linha");

const intervalo = setInterval(() => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);

  process.stdout.write(`Contagem: ${i}`);

  if (i === 10) {
    clearInterval(intervalo);
    console.log("\n\n Fim da contagem!");
  }
  i++;
}, 500);
