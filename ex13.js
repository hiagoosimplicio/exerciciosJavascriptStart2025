const readline = require('readline');

// Criando interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitando número ao usuário
rl.question('Digite um número inteiro de 1 a 10: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log('Por favor, digite um número válido entre 1 e 10.');
  } else {
    console.log(`\nTabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }

  rl.close();
});
