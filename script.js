// 👉 1. Lista de perguntas
const perguntas = [
  {
    pergunta: "1. Um parceiro controla com quem a mulher fala, onde vai e até o que veste. Qual tipo de violência é essa?",
    opcoes: ["Física", "Moral", "Psicológica"],
    correta: 2
  },
  {
    pergunta: "2. A mulher foi forçada a manter relações sexuais mesmo sem consentimento. Qual o tipo de violência?",
    opcoes: ["Sexual", "Psicológica", "Patrimonial"],
    correta: 0
  },
  {
    pergunta: "3. Destruição de documentos pessoais da mulher configura:",
    opcoes: ["Moral", "Física", "Patrimonial"],
    correta: 2
  },
  {
    pergunta: "4. O agressor expõe fotos íntimas da vítima sem consentimento. Qual tipo de violência?",
    opcoes: ["Sexual", "Moral", "Física"],
    correta: 1
  },
  {
    pergunta: "5. A mulher é agredida com socos e pontapés. Que tipo de violência é essa?",
    opcoes: ["Física", "Psicológica", "Sexual"],
    correta: 0
  },
  {
    pergunta: "6. A vítima é ridicularizada, chamada de inútil e burra constantemente. Tipo de violência?",
    opcoes: ["Patrimonial", "Psicológica", "Física"],
    correta: 1
  },
  {
    pergunta: "7. O parceiro se recusa a dar dinheiro para necessidades básicas. Qual o tipo?",
    opcoes: ["Sexual", "Moral", "Patrimonial"],
    correta: 2
  },
  {
    pergunta: "8. A mulher é impedida de estudar ou trabalhar. Que tipo de violência isso representa?",
    opcoes: ["Psicológica", "Patrimonial", "Moral"],
    correta: 1
  },
  {
    pergunta: "9. A mulher é forçada a engravidar contra sua vontade.",
    opcoes: ["Sexual", "Física", "Psicológica"],
    correta: 0
  },
  {
    pergunta: "10. O agressor acusa a mulher de traição sem provas, com humilhações públicas.",
    opcoes: ["Moral", "Sexual", "Física"],
    correta: 0
  },
  {
    pergunta: "11. A mulher é ameaçada de morte caso o denuncie. Isso é:",
    opcoes: ["Psicológica", "Sexual", "Moral"],
    correta: 0
  },
  {
    pergunta: "12. Rasgar roupas da vítima é um ato de violência:",
    opcoes: ["Física", "Sexual", "Patrimonial"],
    correta: 2
  },
  {
    pergunta: "13. Gravar áudios íntimos sem consentimento é considerado violência:",
    opcoes: ["Psicológica", "Sexual", "Moral"],
    correta: 1
  },
  {
    pergunta: "14. Espalhar mentiras sobre a reputação da vítima é violência:",
    opcoes: ["Física", "Moral", "Psicológica"],
    correta: 1
  },
  {
    pergunta: "15. Impedir a mulher de sair de casa ou trancar portas é violência:",
    opcoes: ["Sexual", "Física", "Psicológica"],
    correta: 2
  }
];

// 👉 2. Variáveis e elementos HTML
let perguntaAtual = 0;
let pontuacao = 0;
let selecionada = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// 👉 3. Embaralhar array de perguntas
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 👉 4. Mostrar pergunta
function mostrarPergunta() {
  const p = perguntas[perguntaAtual];
  questionEl.textContent = p.pergunta;
  optionsEl.innerHTML = "";

  p.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => selecionarOpcao(btn, index);
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

// 👉 5. Selecionar opção
function selecionarOpcao(botao, index) {
  const botoes = optionsEl.querySelectorAll("button");
  botoes.forEach(b => b.classList.remove("selected"));
  botao.classList.add("selected");
  selecionada = index;
  nextBtn.disabled = false;
}

// 👉 6. Clique no botão "Próxima"
nextBtn.onclick = () => {
  if (selecionada === perguntas[perguntaAtual].correta) {
    pontuacao++;
  }

  perguntaAtual++;
  selecionada = null;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
};

// 👉 7. Mostrar resultado final
function mostrarResultado() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

// 👉 8. Recomeçar quiz
function restartQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  selecionada = null;
  resultEl.classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  embaralharArray(perguntas); // embaralhar novamente
  mostrarPergunta();
}

// 👉 9. Iniciar quiz embaralhando as perguntas
embaralharArray(perguntas);
mostrarPergunta();
