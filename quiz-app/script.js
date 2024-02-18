const questions = [
    {
        question: "In the film Ratatouille, Remy the rat, was an excellent",
        answers: [
            {text: "Chef", correct: true},
            {text: "Sailor", correct: false},
            {text: "Pilot", correct: false},
            {text: "Footballer", correct: false}
        ]
    },

    {
        question: "Which one of the following characters is not one of the Looney Tunes?",
        answers: [
            {text: "Proky Pig", correct: false},
            {text: "Daffy Duck", correct: false},
            {text: "Spongebob", correct: true},
            {text: "Sylvester James Pussycat", correct: false}
        ]
    },

    {
        question: "What is the original name of Winnie the Pooh?",
        answers: [
            {text: "Edward Bear", correct: true},
            {text: "Wendall Bear", correct: false},
            {text: "Christopher Bear", correct: false},
            {text: "Michael Bear", correct: false}
        ]
    },

    {
        question: "What is the name of the mad scientist in Phineas and Ferb?",
        answers: [
            {text: "Dr. Candance", correct: false},
            {text: "Dr. Fischer", correct: false},
            {text: "Dr. Camila", correct: false},
            {text: "Dr. Doofenshmirtz", correct: true}
        ]
    },

    {
        question: "What is the name of Tintin’s dog?",
        answers: [
            {text: "Rainy", correct: false},
            {text: "Snowy", correct: true},
            {text: "Windy", correct: false},
            {text: "Sunny", correct: false}
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
} )
startQuiz();