// Quiz Questions
const quizData = [
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 1
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultSection = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

// Load Question
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => selectAnswer(index);
        optionsEl.appendChild(button);
    });
}

// Check Answer
function selectAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
    }
    nextBtn.style.display = "inline-block";
}

// Next Question
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
});

// Show Result
function showResult() {
    document.querySelector(".quiz-container").classList.add("hidden");
    resultSection.classList.remove("hidden");

    let message = "";

    if (score === quizData.length) {
        message = "Excellent! 🎉";
    } else if (score >= 2) {
        message = "Good Job 👍";
    } else {
        message = "Try Again 😅";
    }

    scoreText.textContent = `Your Score: ${score} / ${quizData.length} - ${message}`;
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultSection.classList.add("hidden");
    document.querySelector(".quiz-container").classList.remove("hidden");
    loadQuestion();
});

// Initial Load
loadQuestion();
nextBtn.style.display = "none";