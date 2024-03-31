function somar() {

    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const resultado = document.getElementById('resultado');

    const soma = n1 + n2;

    resultado.innerHTML = soma;

}


function subtrair() {

    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const resultado = document.getElementById('resultado');

    const subtrair = n1 - n2;

    resultado.innerHTML = subtrair;

}


function multiplicar() {

    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = document.getElementById('resultado');

    let multiplicar = Number(n1) * Number(n2);

    resultado.innerHTML = multiplicar;

}


function dividir() {

    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = document.getElementById('resultado');

    let dividir = Number(n1) / Number(n2);

    resultado.innerHTML = dividir;

}


function limpar() {

    const btn_reset = document.getElementById('resultado');

    btn_reset.innerHTML = 0;

}