// arquivo: entradaShow.js
const readlineSync = require('readline-sync');

console.log('--- Controle de Entrada do Show ---');

let idade = readlineSync.questionInt('Digite sua idade: ');

if (idade >= 18) {
  console.log('✅ Entrada permitida! Bem-vindo ao show!');
} else {
  console.log('🚫 Entrada negada. Você deve ter 18 anos ou mais.');
}
