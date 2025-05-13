const perguntas = [
    {
        pergunta: "Qual das alternativas representa uma linguagem verbal?",
        opcoes: ["Imagem de uma placa de trânsito", "Um desenho animado sem falas","Uma conversa por telefone", "Um gesto com a mão"],
        correta: 3
    },
    {
        pergunta: "O que é linguagem não verbal?",
        opcoes: ["Quando usamos apenas palavras escritas", " Quando nos comunicamos por meio de imagens, gestos ou sons sem palavras","Quando usamos sons musicais com letras", "Quando falamos ao telefone"],
        correta: 1
    },
    {
        pergunta: "O que é um emoji em uma mensagem de texto?",
        opcoes: ["Um tipo de letra", "Um símbolo que representa uma emoção ou ideia","Uma imagem sem função", "Um erro na digitação"],
        correta: 1
    },
    {
        pergunta: "Qual desses é um exemplo de linguagem mista?",
        opcoes: ["Um texto escrito", "Um som de alarme","Uma fotografia", "Uma tirinha de quadrinhos"],
        correta: 3
    },
    {
        pergunta: "Em qual alternativa temos um exemplo de linguagem verbal e não verbal juntas?",
        opcoes: ["Um texto em braile", "Uma placa com imagem e legenda escrita","Um bilhete manuscrito", "Um vídeo sem som"],
        correta: 1
    },
    {
        pergunta: "Qual dessas linguagens é usada para programar computadores?",
        opcoes: ["Linguagem de programação", "Não verbal","Gestual", "Não verbal"],
        correta: 0
    },
    {
        pergunta: "Como a internet contribui para os multiletramentos?",
        opcoes: ["Impedindo o acesso à informação", "Limitando o uso de diferentes linguagens","Estimulando a leitura apenas de textos longos", "Oferecendo diferentes formas de leitura e comunicação"],
        correta: 3
    },
    {
        pergunta: "O que caracteriza o código restrito, segundo Basil Bernstein?",
        opcoes: ["Linguagem acessível a qualquer público", "Uso de vocabulário técnico","Expressão direta, com poucos detalhes e muito contexto compartilhado", "Discurso formal e elaborado"],
        correta: 2
    },
    {
        pergunta: "O que representa um algoritmo em linguagens de programação?",
        opcoes: ["Uma linguagem oral", "Um conjunto de instruções organizadas para realizar uma tarefa","Um tipo de gráfico", "Um estilo de texto"],
        correta: 1
    },
    {
        pergunta: "Qual fator pode dificultar a interpretação de uma mensagem multimodal (texto + imagem + som)?",
        opcoes: ["O uso de palavras fáceis", "O excesso de elementos que exigem diferentes habilidades de leitura","A presença de legendas", "O idioma local"],
        correta: 1
    },

]

// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opcao o usuario selecionou

const pergunta = document.getElementById ( "pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// funcao que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}
//funcao que mostra a pergunta atual
function mostrarPergunta() {
    //Pega a pergunta atual
    const perguntaAtualObj = perguntas[perguntaAtual]
    // Mostra o texto da pergunta
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = "" //limpa as opcoes anteriores

    // Cria um botao para cada opcao de resposta
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement ("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () =>
        selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

// Para quando o usuário escolher uma opção
function selecionarOpcao(indice){
    opcaoSelecionada = indice
    // Atualiza o visual da opção selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //habilita o botão de proxima
}

function mostrarPontuacao ( ) {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}    
// Funcao para ir para a proxima pergunta
botaoProxima.addEventListener ( "click", () =>{
    // Verifica se a resposta esta correta
    if(opcaoSelecionada == perguntas [perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()
    
    perguntaAtual++
    if(perguntaAtual < perguntas. length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

//Botao para reiniciar o quiz
botaoReiniciar.addEventListener("click", () => {
    // Reseta todas as variaveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    // O quiz aparece e a pontuacao final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
// Inicia o quiz com a primeira pergunta
mostrarPergunta()


    
    
