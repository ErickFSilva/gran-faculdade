// Variáveis Globais
let tabuleiro, board, aviso, jogador, linha, coluna;


// Função que será chamada com o carregamento da página
function iniciar() {
    tabuleiro = [];
    board = document.querySelector('#board');
    aviso = document.querySelector('#aviso');
    jogador = 1;

    for (let i = 0; i < 3; i++) {
        tabuleiro[i] = [];

        for (let j = 0; j < 3; j++) {
            tabuleiro[i][j] = 0;
        }
    }

    // console.table(tabuleiro);
    exibir();
}


// A função exibir() irá montar o tabuleiro
function exibir() {
    let tabela = '<table callpading="10" border="1">';

    for (let i = 0; i < 3; i++) {
        tabela += '<tr>';

        for (let j = 0; j < 3; j++) {

            switch (tabuleiro[i][j]) {
                case -1:
                    marcador = 'X';
                    break;

                case 1:
                    marcador = 'O';
                    break;

                default:
                    marcador = '_';
            }

            tabela += `<td> ${marcador} </td>`;
        }

        tabela += '</tr>';
    }

    tabela += '</table>';

    board.innerHTML = tabela;
}


function jogar() {
    aviso.innerHTML = `Vez do jogador: ${numeroJogador()}`;
    linha = document.querySelector('#linha').value - 1;
    coluna = document.querySelector('#coluna').value - 1;

    if (tabuleiro[linha][coluna] == 0) {
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1;
    }
    else {
        aviso.innerHTML = 'Esse campo já foi marcado';
    }

    console.table(tabuleiro);
    jogador++;
    exibir();
    checar();
}


function checar() {

    // Linhas
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

        if (soma == 3 || soma == -3) {
            aviso.innerHTML = `O jogador ${numeroJogador()} ganhou!`;
        }
    }

    // Colunas
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

        if (soma == 3 || soma == -3) {
            aviso.innerHTML = `O jogador ${numeroJogador()} ganhou!`;
        }
    }

    // Diagonal
    let soma = 0;
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];

    if (soma == 3 || soma == -3) {
        aviso.innerHTML = `O jogador ${numeroJogador()} ganhou!`;
    }
}


function numeroJogador() {
    return (jogador % 2) + 1;
}