const anos = ['Copas', 1994, 1998, 2022, 2006, 2010, 2014, 2018, 2022];
const carros = ['Gol', 'Fusca', 'Virtus', 'Ka'];

for (let ano of anos) {
    console.log(ano);
}
console.log();

console.table(carros);
console.log();


// Adiciona elemento ao final do array
carros.push('Fiesta', 'Brasília');

console.table(carros);
console.log();


// Adiciona elemento no início do array
carros.unshift('Pálio');
console.table(carros);
console.log();


// Remove elemento ao final do array
let carroRemovido = carros.pop();
console.table(carros);
console.log(`Carro removido: ${carroRemovido}`);
console.log();


// Remove elemento no início do array
carros.shift();
console.table(carros);
console.log();


// Removendo elementos a partir de uma posição no array
carros.splice(1, 1); // Posição inicial e a quantidade de itens a excluir
console.table(carros);
console.log();


// Adicionando elementos a partir de uma posição no array
carros.splice(1, 0, 'Uno');
console.table(carros);
console.log();


// Substituindo elementos a partir de uma posição no array
carros.splice(carros.length, 2, 'Brasília', 'Pálio', 'Golf');
console.table(carros);
console.log();