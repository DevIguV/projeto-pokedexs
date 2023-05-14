/* alert('Seja bem-vindo meu caro navegador do mundo das internê'); */

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagemTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

// o (toggle) serve como um "switch", adicionando/removendo ou ativando/desativando um codigo, podendo substituir o '.add' e '.remove'

    if (modoEscuroAtivo) {

        //body.classList.remove("modo-escuro");

        imagemTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {

       // body.classList.add("modo-escuro");

        imagemTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }

});


