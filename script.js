const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Central Style Sheets", "Creative Style System", "Computer Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to link a JavaScript file?",
    options: ["<js>", "<script>", "<link>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<script>", "<js>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", selectOption);
    optionsEl.appendChild(li);
  });
}

function selectOption(e) {
  const selected = e.target.textContent;
  const correct = quizData[currentQuestion].answer;

  if (selected === correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hide");
  document.getElementById("quiz").classList.remove("hide");
  loadQuestion();
});

// Initial load
loadQuestion();
