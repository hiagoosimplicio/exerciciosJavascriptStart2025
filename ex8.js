const readline = require('readline');

// Cria interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta a idade
rl.question('Digite sua idade: ', (input) => {
  const idade = parseInt(input);

  if (isNaN(idade) || idade < 0) {
    console.log('Idade inválida.');
  } else if (idade <= 12) {
    console.log('Classificação: Infantil');
  } else if (idade <= 17) {
    console.log('Classificação: Juvenil');
  } else if (idade <= 39) {
    console.log('Classificação: Adulto');
  } else {
    console.log('Classificação: Master');
  }

  rl.close(); // Fecha a interface
});
