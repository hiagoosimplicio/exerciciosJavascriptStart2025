const readline = require('readline');

// Interface para entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular potência usando multiplicação
function potencia(base, expoente) {
  let resultado = 1;
  for (let i = 0; i < expoente; i++) {
    resultado *= base;
  }
  return resultado;
}

// Pergunta ao usuário
rl.question('Digite a base: ', (baseInput) => {
  rl.question('Digite o expoente: ', (expoenteInput) => {
    const base = parseInt(baseInput);
    const expoente = parseInt(expoenteInput);

    if (isNaN(base) || isNaN(expoente) || expoente < 0) {
      console.log('Digite números válidos (expoente deve ser >= 0).');
    } else {
      const resultado = potencia(base, expoente);
      console.log(`${base} ^ ${expoente} = ${resultado}`);
    }

    rl.close();
  });
});
