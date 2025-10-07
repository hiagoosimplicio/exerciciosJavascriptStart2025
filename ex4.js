// arquivo: estadoAgua.js
const readlineSync = require('readline-sync');

console.log('--- Verificador de Estado da Água ---');

let temperatura = readlineSync.questionFloat('Digite a temperatura em °C: ');

console.log('-------------------------------------');

if (temperatura <= 0) {
  console.log(' A água está no estado **SÓLIDO** (gelo).');
} else if (temperatura > 0 && temperatura < 100) {
  console.log(' A água está no estado **LÍQUIDO**.');
} else {
  console.log(' A água está no estado **GASOSO** (vapor).');
}
