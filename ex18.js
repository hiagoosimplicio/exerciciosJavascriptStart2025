const readline = require('readline');

// Interface para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário
rl.question('Digite um número N: ', (input) => {
  const N = parseInt(input);
  const pares = [];
  const impares = [];

  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    } else {
      impares.push(i);
    }
  }

  console.log('Números pares:', pares);
  console.log('Números ímpares:', impares);

  rl.close();
});
