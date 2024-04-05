// Entrada
const anoVotacao = Number(prompt('Digite o ano da eleição:'));
const anoNascimento = Number(prompt('Digite o ano de nascimento:'));
let mensagem;


// Processamento
const idade = anoVotacao - anoNascimento;

if (idade < 16) {

    mensagem = `Você não tem idade mínima para votar. Idade: ${idade} anos.`;
}
else if (idade < 18) {

    mensagem = `Você pode ou não votar, é facultativo! Idade: ${idade} anos.`;
}
else if (idade < 65) {

    mensagem = `Você é obrigado a votar! Idade: ${idade} anos.`;
}
else {

    mensagem = `Você pode ou não votar, é facultativo! Idade: ${idade} anos.`;
}


// Saída
    console.log(mensagem);