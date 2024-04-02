/**
 * Verificar o aumento de salário de acordo com os seguintes cargos:
 * 
 * Estagiário: 100%;
 * Analista: 50%;
 * Gerente: 30%;
 * Presidente: 10%;
 */

let salario = Number(prompt('Digite o salário:'));
let cargo = prompt('Digite o cargo:');
let aumento = 0;

switch(cargo) {

    case 'Estagiário':
        aumento = 1;
        break;
    
    case 'Analista':
        aumento = 0.5;
        break;

    case 'Gerente':
        aumento = 0.3;
        break;

    case 'Presidente':
        aumento = 0.1;
        break;
}

console.log(salario);
console.log(cargo);
console.log(aumento);

let novoSalario = salario + (salario * aumento);

console.log(`O novo salário é R$ ${novoSalario}`);