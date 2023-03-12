//    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens =document.querySelector

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        

        //    - passo 3 - desmarcar o botão selecionado anterior
       desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionada
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('ativa');
        imagemAtiva.classList('ativa')

        // passo 6 - fazer aparecer a imagem correspondente ao botão clicado

imagens[indice].classList.add('ativa');


    })
})



