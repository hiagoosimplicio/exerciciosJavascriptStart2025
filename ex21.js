const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (input) => {
  const N = parseInt(input);
  let divisores = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisores.push(i);
    }
  }

  console.log(`Divisores de ${N}: ${divisores.join(', ')}`);
  
  if (divisores.length === 2) {
    console.log('É primo');
  } else {
    console.log('Não é primo');
  }

  rl.close();
});
