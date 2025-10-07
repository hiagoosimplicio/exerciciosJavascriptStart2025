const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro positivo: ', (resposta) => {
  const N = parseInt(resposta);

  if (isNaN(N) || N <= 0) {
    console.log('Por favor, digite um número inteiro positivo válido.');
  } else {
    for (let i = 1; i <= N; i++) {
      console.log(`Número atual: ${i}`);
    }
  }

  rl.close();
});
