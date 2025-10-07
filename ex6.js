const readlineSync = require('readline-sync');

let valor = parseFloat(readlineSync.question("Digite o valor da compra: "));

if (valor > 200) {
    valor = valor - (valor * 0.15); // aplica 15% de desconto
    console.log("Desconto de 15% aplicado!");
} else {
    valor = valor - (valor * 0.05); // aplica 5% de desconto
    console.log("Desconto de 5% aplicado!");
}

console.log("Valor final: R$", valor.toFixed(2));
