// Lista de múltiplos de 5 entre 1 e 100
let count = 0;

console.log("Múltiplos de 5 entre 1 e 100:");

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
    count++;
  }
}

console.log(`Total de múltiplos de 5: ${count}`);
