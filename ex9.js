const readline = require('readline');

// Interface para leitura do console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o salário: ', (input) => {
  const salario = parseFloat(input);

  let imposto = 0;

  if (salario <= 2000) {
    console.log('Isento de imposto.');
  } else if (salario <= 5000) {
    imposto = (salario - 2000) * 0.10;
    console.log(`Imposto: R$ ${imposto.toFixed(2)}`);
  } else {
    // 10% sobre os 3000 (2000 a 5000) + 20% sobre o que excede 5000
    imposto = (3000 * 0.10) + ((salario - 5000) * 0.20);
    console.log(`Imposto: R$ ${imposto.toFixed(2)}`);
  }

  rl.close();
});
