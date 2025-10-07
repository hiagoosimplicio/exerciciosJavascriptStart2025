// arquivo: caixaEletronico.js //
const readlineSync = require('readline-sync');

function lerInteiro(promptText) {
  while (true) {
    const entrada = readlineSync.question(promptText);
    // tenta converter para inteiro (base 10)
    const n = parseInt(entrada, 10);
    // checa se é um número e se a conversão preservou a string (evita "12abc" => 12)
    if (!isNaN(n) && String(n).trim() === String(entrada).trim()) {
      return n;
    }
    console.log('Entrada inválida. Digite um número inteiro (ex: 100).');
  }

}

function gavetaParaValor(valor) {
  // usa o valor absoluto para tratar sinais (-3 é ímpar)
  return Math.abs(valor) % 2 === 0 ? 'Gaveta PAR' : 'Gaveta ÍMPAR';
}

function main() {
  console.log('--- Sistema de Caixa Eletrônico (verifica Par/Ímpar) ---');
  const saque = lerInteiro('Digite o valor do saque (inteiro): ');
  const tipo = Math.abs(saque) % 2 === 0 ? 'Par' : 'Ímpar';
  const gaveta = gavetaParaValor(saque);

  console.log('-------------------------------');
  console.log(`Valor solicitado: ${saque}`);
  console.log(`Resultado: ${tipo}`);
  console.log(`Usar: ${gaveta}`);
  console.log('-------------------------------');
}

main();
