const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você sai da escola se depara com lixo no chão, qual é a sua atitude?.",
        alternativas: [
            {
                texto: "Isso esta muito sujo!.",
                afirmacao: "Passa direto sem ao menos se importar com o ambiente poluído. "
            },
            {
                texto: "Nossa que sujeira, acho que posso limpar e jogar no local correto!.",
                afirmacao: "Quis ajudar limpando o local."
            }
        ]
    },
    {
        enunciado: "Temos que praticar e ajudar o bem estar do ambiente a sua volta, qual o seu posicionamento?",
        alternativas: [
            {
                texto: "Utilizar formas e maneiras diferentes de ajudar e limpar o meio ambiente.",
                afirmacao: "Contribuiu com a sociedade e ajudou o planeta."
            },
            {
                texto: "Comecei com atos simples como jogar lixo no lixo, e materiais reciclados nos seus respectivos lugares de descarte.",
                afirmacao: "Sentiu o ambiente mais leve e aconchegante."
            }
        ]
    },
    {
        enunciado: "Após a elaboração das suas ações para a sustentabilidade, onde começaria a ajudar?",
        alternativas: [
            {
                texto: "Somente em casa.",
                afirmacao: "Ouve uma limpeza significativa mas as ruas em frente sua casa ainda estão sujas."
            },
            {
                texto: "Me preocupo com as pessoas a minha volta, escolho cuidar do meio ambiente no meu trabalho e os locais que frequento.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de sustentabilidade em sua cidade."
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Dentre os principais impactos ambientais causados pela atividade humana, principalmente pelas empresas, podemos citar a diminuição dos mananciais, extinção de espécies, inundações, erosões, poluição, mudanças climáticas, destruição da camada de ozônio, chuva ácida, agravamento do efeito estufa e destruição de habitats";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
