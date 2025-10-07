const readline = require('readline');

// Interface para ler do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar e capturar dados
rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idadeStr) => {
        const idade = parseInt(idadeStr);

        if (idade < 18) {
            console.log('Desculpe, você não pode comprar o ingresso por ser menor de idade.');
            rl.close();
            return;
        }

        rl.question('Digite o valor do ingresso: ', (valorStr) => {
            let valor = parseFloat(valorStr);
            let valorFinal = valor;

            if (valor >= 100) {
                valorFinal = valor * 0.8; // aplica 20% de desconto
            }

            console.log('\n--- Ingresso ---');
            console.log(`Nome: ${nome}`);
            console.log(`Idade: ${idade}`);
            console.log(`Valor pago: R$ ${valorFinal.toFixed(2)}`);
            rl.close();
        });
    });
});
