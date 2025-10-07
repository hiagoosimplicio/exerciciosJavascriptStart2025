// arquivo: compararPrecos.js
const readlineSync = require('readline-sync');

console.log('--- Comparador de Preços ---');

// lê os preços como números decimais
let preco1 = readlineSync.questionFloat('Digite o preço do primeiro produto: R$ ');
let preco2 = readlineSync.questionFloat('Digite o preço do segundo produto: R$ ');

console.log('------------------------------');

if (preco1 < preco2) {
  console.log(`O primeiro produto é mais barato (R$ ${preco1.toFixed(2)}).`);
} else if (preco2 < preco1) {
  console.log(`O segundo produto é mais barato (R$ ${preco2.toFixed(2)}).`);
} else {
  console.log('🎉 Os dois produtos têm o mesmo preço! Promoção imperdível!');
}
