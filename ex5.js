// arquivo: situacaoAluno.js
const readlineSync = require('readline-sync');

console.log('--- Sistema de Avaliação ---');

let nota = readlineSync.questionFloat('Digite a nota do aluno (0 a 10): ');

console.log('--------------------------------');

if (nota < 0 || nota > 10) {
  console.log('⚠️ Nota inválida! Digite um valor entre 0 e 10.');
} else if (nota >= 7) {
  console.log('✅ Aluno APROVADO!');
} else if (nota >= 5 && nota < 7) {
  console.log('🟡 Aluno em RECUPERAÇÃO.');
} else {
  console.log('❌ Aluno REPROVADO.');
}
