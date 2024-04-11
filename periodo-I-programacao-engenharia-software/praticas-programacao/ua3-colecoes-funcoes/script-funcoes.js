// Função principal
function calcular(operacao) {
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    let n2Zero = 'Não é possível dividir um número com 0';
    let resultado = document.getElementById('resultado');

    switch (operacao) {

        case '+':
            resultado.innerHTML = somar(n1, n2);
            break;

        case '-':
            resultado.innerHTML = subtrair(n1, n2);
            break;

        case '*':
            resultado.innerHTML = multiplicar(n1, n2);
            break;

        case '/':

            if (n2 == 0) {
                console.error(n2Zero);
                resultado.innerHTML = n2Zero;
            }
            else {
                resultado.innerHTML = dividir(n1, n2);
            }

            break;

        case '%':

            if (n2 == 0) {
                console.error(n2Zero);
                resultado.innerHTML = n2Zero;
            }
            else {
                resultado.innerHTML = modulo(n1, n2);
            }

            break;
    }
}

calcular();


// Funções auxiliares
function somar(n1, n2) {
    return Number(n1) + Number(n2);
}

function subtrair(n1, n2) {
    return Number(n1) - Number(n2);
}

function multiplicar(n1, n2) {
    return Number(n1) * Number(n2);
}

function dividir(n1, n2) {
    return Number(n1) / Number(n2);
}

function modulo(n1, n2) {
    return Number(n1) % Number(n2);
}

function limpar() {
    const btn_reset = document.getElementById('resultado');

    btn_reset.innerHTML = 0;
}