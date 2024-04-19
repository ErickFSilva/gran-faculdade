// Função para adicionar e remover a quantidade de produto
function alterarQtd(produto, acao) {
    let valor = document.querySelector(`#valor_${produto}`);
    let qtd = document.querySelector(`#qtd_${produto}`);
    let total = document.querySelector(`#total_${produto}`);
    let valorTotal, numeros;

    if (acao == '-' && qtd.innerHTML == '0') {
        alert('Atenção, a quantidade não pode ser menor que zero!');
    }
    else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--;
        valorTotal = somenteNumeros(valor.innerHTML) * qtd.innerHTML;
        total.innerHTML = formatarValor(valorTotal);
    }

    subTotal();
}


// Função para gerar o subtotal dos produtos
function subTotal() {
    let subTotal = 0;

    for (let i = 1; i < 4; i++) {
        numeros = Number(somenteNumeros(document.querySelector(`#total_${i}`).innerHTML));
        subTotal += numeros;
    }

    document.querySelector(`#sub_total`).innerHTML = formatarValor(subTotal);
}


// Função que filtra somente os números
function somenteNumeros(n) {
    return n.replace(/\D/g, '');
}


// Função que formata os valores
function formatarValor(n) {
    return `R$ ${n.toLocaleString('pt-BR')}`;
}