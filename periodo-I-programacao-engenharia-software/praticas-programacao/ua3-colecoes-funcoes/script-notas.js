const notas = [];
const qtdNotas = Number(prompt('Digite a quantidade de notas:'));

for (let i = 0; i < qtdNotas; i++) {
    let nota = Number(prompt(`Digite a ${i+1}ª nota`));
    notas.push(nota);
}

console.table(notas);