/*
Quando clicar na seta avançar temos que esconder todas as imagens e mostrar a próxima imagem.

    A imagem atual começa em 0, porque a primeira imagem 
    assim que for clicado no avançar eu preciso adicionar +1 ao
    contador de imagens pra poder saber que agora vou mostrar a segunda imagem.

    Esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

    Mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela.

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})









