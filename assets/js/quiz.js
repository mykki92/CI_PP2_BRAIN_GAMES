const playerScore = document.getElementById('player-score');
const questionText = document.getElementById('question-text');
const answerButtonA = document.getElementById('a');
const answerButtonB = document.getElementById('b');
const answerButtonC = document.getElementById('c');
const answerButtonD = document.getElementById('d');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;
//Array containing quiz questions
let questions = [
    {
        question: "What is the only continent on Earth that does not have a desert?",
        answers: [
            {option:"A: Asia", answer:false},
            {option:"B: Europe", answer:true},
            {option:"C: Antarctica", answer:false},
            {option:"D: South America", answer:false}
        ]
    },
    {
        question: "Which is the hottest planet in the Milky Way?",
        answers: [
            {option:"A: Saturn", answer:false},
            {option:"B: Jupiter", answer:false},
            {option:"C: Venus", answer:true},
            {option:"D: Mars", answer:false}
        ]
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            {option:"A: Apollo", answer:true},
            {option:"B: Hermes", answer:false},
            {option:"C: Dionysus", answer:false},
            {option:"D: Ares", answer:false}
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            {option:"A: 1", answer:false},
            {option:"B: 2", answer:false},
            {option:"C: 3", answer:true},
            {option:"D: 47", answer:false}
        ]
    },
    {
        question: "The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
]

restartButton.addEventListener('click', restart);
prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);
submitButton.addEventListener('click', submit);

function startQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let ano = 2;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let ano = 3;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    prevButton.classList.add('hide');
}

startQuiz();

function prev() {
    currentQuestion--;
    if(currentQuestion<=0){
        prevButton.classList.add('hide');
        nextButton.classList.remove('hide');
    }
    
    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let ano = 2;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let ano = 3;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }

    nextButton.classList.remove('hide');
}

function next() {
    currentQuestion++;
    if(currentQuestion>=4){
        nextButton.classList.add('hide');
        prevButton.classList.remove('hide');
    }

    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let ano = 2;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let ano = 3;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<4){
            next();
        }
    }

    prevButton.classList.remove('hide');
}

function submit() {
    prevButton.classList.add('hide');
    nextButton.classList.add('hide');
    submitButton.classList.add('hide');
    answerButtonA.classList.add('hide');
    answerButtonB.classList.add('hide');
    answerButtonC.classList.add('hide');
    answerButtonD.classList.add('hide');
    questionText.innerHTML = `Well done! You scored ${score}/5!`;
}

function restart() {
    currentQuestion = 0;
    prevButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    submitButton.classList.remove('hide');
    answerButtonA.classList.remove('hide');
    answerButtonB.classList.remove('hide');
    answerButtonC.classList.remove('hide');
    answerButtonD.classList.remove('hide');
    score = 0;
    playerScore.innerHTML = score;
    startQuiz();
}