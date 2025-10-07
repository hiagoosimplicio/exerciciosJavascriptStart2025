const readline = require('readline');

// Cria interface para ler entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número N para ver os N primeiros números da sequência de Fibonacci: ', (input) => {
  const N = parseInt(input);

  if (isNaN(N) || N <= 0) {
    console.log("Por favor, digite um número inteiro positivo.");
    rl.close();
    return;
  }

  // Sequência de Fibonacci começa com 0 e 1
  let fib = [];

  for (let i = 0; i < N; i++) {
    if (i === 0) {
      fib.push(0); // Primeiro número
    } else if (i === 1) {
      fib.push(1); // Segundo número
    } else {
      // Cada número é a soma dos dois anteriores
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  console.log(`Os ${N} primeiros números da sequência de Fibonacci são:`);
  console.log(fib.join(', '));
  console.log("Cada número (a partir do terceiro) é a soma dos dois anteriores.");

  rl.close();
});
