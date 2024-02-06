const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const opcaoCor = document.getElementById("opcao-cor");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const azulInverno = {
    name: "Azul-Inverno",
    folder: "imagens-azul-inverno"
}; //struct

const verdeCipreste = {
    name: "Verde-Cipreste",
    folder: "imagens-verde-cipreste"
};

const meiaNoite = {
    name: "Meia-Noite",
    folder: "imagens-meia-noite"
};

const estelar = {
    name: "Estelar", 
    folder: "imagens-estelar"
};

const rosaClaro = {
    name: "Rosa-Claro",
    folder: "imagens-rosa-claro"
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-" + imagemSelecionada + ".jpeg"
}

function trocarTamanho(){
    // Atualizar tamanhoSelecionado
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    // Mudar o tamanho da imagem de acordo com a opção
        if(opcoesTamanho[tamanhoSelecionado] === "41 mm"){
            imagemVisualizacao.classList.add("caixa-pequena");
        }else{
            imagemVisualizacao.classList.remove("caixa-pequena");
        }

    // Mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name + " para caixa de " + opcoesTamanho[tamanhoSelecionado]; // innerText != innerHTML
}

function trocarCor(){
    // Atualizar variável
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0);

    // trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name + " para caixa de " + opcoesTamanho[tamanhoSelecionado];

    // trocar nome da cor
    nomeCorSelecionada.innerText = "Cor - " + opcoesCores[corSelecionada].name;
    
    // trocar imagem das miniaturas
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-0.jpeg"
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-1.jpeg"
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-2.jpeg"

    // trocar imagem de visualização
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-" + imagemSelecionada + ".jpeg"
}