// While
let qntNotas = Number(prompt('Quantas notas?'));
let cont = 1;
let soma = 0;
let nota = 0;

while (cont <= qntNotas) {

    nota = Number(prompt(`Digite a ${cont}ª nota`));
    soma += nota;
    cont++;

}

nota = soma / 4;

console.log(`Média: ${nota}\n`);


// Do while
cont = 1;
soma = 0;
nota = 0;

do {

    nota = Number(prompt(`Digite a ${cont}ª nota`));
    soma += nota;
    cont++;

} while (cont <= qntNotas);

nota = soma / 4;

console.log(`Média: ${nota}\n`);