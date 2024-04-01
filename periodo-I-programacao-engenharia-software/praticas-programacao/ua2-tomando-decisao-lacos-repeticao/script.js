const n1 = Number(prompt('Digite a nota 1'));
const n2 = Number(prompt('Digite a nota 2'));
const n3 = Number(prompt('Digite a nota 3'));
const n4 = Number(prompt('Digite a nota 4'));

const media = (n1 + n2 + n3 + n4) / 4;

if (media >= 7) {
    document.body.innerHTML = `Aprovado com média ${media}`;
}
else {

    if (media < 5) {
        document.body.innerHTML = `Reprovado com média ${media}`;
    }
    else {
        document.body.innerHTML = `Recuperação com média ${media}`;
    }
}