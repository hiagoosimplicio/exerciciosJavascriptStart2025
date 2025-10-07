const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alunos = [];

function perguntar(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

async function main() {
  const qtdAlunos = parseInt(await perguntar("Quantos alunos serão cadastrados? "));

  for (let i = 0; i < qtdAlunos; i++) {
    console.log(`\n--- Aluno ${i + 1} ---`);
    const nome = await perguntar("Nome: ");
    const notas = [];

    for (let j = 0; j < 3; j++) {
      let nota = parseFloat(await perguntar(`Nota ${j + 1} (0 a 10): `));
      while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(await perguntar(`Nota inválida. Digite novamente (0 a 10): `));
      }
      notas.push(nota);
    }

    const media = notas.reduce((a, b) => a + b, 0) / 3;
    let situacao = "";

    if (media >= 7) situacao = "Aprovado";
    else if (media >= 5) situacao = "Recuperação";
    else situacao = "Reprovado";

    alunos.push({ nome, media: media.toFixed(2), situacao });
  }

  console.log("\n=== RELATÓRIO FINAL ===");
  alunos.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Média: ${aluno.media}`);
    console.log(`Situação: ${aluno.situacao}\n`);
  });

  rl.close();
}

main();
