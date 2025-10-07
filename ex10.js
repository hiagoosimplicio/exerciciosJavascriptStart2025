const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dias = [
  "Domingo",  // 1
  "Segunda-feira", // 2
  "Terça-feira",   // 3
  "Quarta-feira",  // 4
  "Quinta-feira",  // 5
  "Sexta-feira",   // 6
  "Sábado"         // 7
];

rl.question("Digite um número de 1 a 7: ", (input) => {
  const numero = parseInt(input);

  if (numero >= 1 && numero <= 7) {
    console.log(`Dia correspondente: ${dias[numero - 1]}`);
  } else {
    console.log("Erro: número fora do intervalo (1 a 7).");
  }

  rl.close();
});
