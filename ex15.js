const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro positivo: ", function(input) {
  const N = parseInt(input);
  let fatorial = 1;

  for (let i = 1; i <= N; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${N} é ${fatorial}`);
  rl.close();
});
