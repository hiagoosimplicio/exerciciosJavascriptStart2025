const readline = require('readline');

// Interface para ler entrada do usuário via terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário
rl.question('Digite um número N: ', (input) => {
  const N = parseInt(input); // Converte entrada para número inteiro
  let soma = 0;

  // Soma de 1 até N
  for (let i = 1; i <= N; i++) {
    soma += i;
  }

  console.log(`A soma de 1 até ${N} é: ${soma}`);
  rl.close();
});
