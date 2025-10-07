const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let totalNumeros = 0;

rl.question('Quantos números você deseja digitar? ', (quantidade) => {
  quantidade = parseInt(quantidade);

  const lerNumero = (i) => {
    if (i < quantidade) {
      rl.question(`Digite o número ${i + 1}: `, (num) => {
        numeros.push(parseFloat(num));
        lerNumero(i + 1);
      });
    } else {
      const soma = numeros.reduce((a, b) => a + b, 0);
      const media = soma / numeros.length;

      console.log('\nNúmeros digitados:', numeros.join(', '));
      console.log(`Média: ${media.toFixed(2)}`);

      rl.close();
    }
  };

  lerNumero(0);
});
