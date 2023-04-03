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
//Array containing quiz questions and answer options
let questions = [
    {
        question: "QUESTION 1:<br><br>What is the only continent on Earth that does not have a desert?",
        answers: [
            {option:"A: Asia", answer:false},
            {option:"B: Europe", answer:true},
            {option:"C: Antarctica", answer:false},
            {option:"D: South America", answer:false}
        ]
    },
    {
        question: "QUESTION 2:<br><br>Which is the hottest planet in the Milky Way?",
        answers: [
            {option:"A: Saturn", answer:false},
            {option:"B: Jupiter", answer:false},
            {option:"C: Venus", answer:true},
            {option:"D: Mars", answer:false}
        ]
    },
    {
        question: "QUESTION 3:<br><br>Who was the Ancient Greek God of the Sun?",
        answers: [
            {option:"A: Apollo", answer:true},
            {option:"B: Hermes", answer:false},
            {option:"C: Dionysus", answer:false},
            {option:"D: Ares", answer:false}
        ]
    },
    {
        question: "QUESTION 4:<br><br>How many hearts does an octopus have?",
        answers: [
            {option:"A: 1", answer:false},
            {option:"B: 2", answer:false},
            {option:"C: 3", answer:true},
            {option:"D: 47", answer:false}
        ]
    },
    {
        question: "QUESTION 5:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
    {
        question: "QUESTION 3:<br><br>Who was the Ancient Greek God of the Sun?",
        answers: [
            {option:"A: Apollo", answer:true},
            {option:"B: Hermes", answer:false},
            {option:"C: Dionysus", answer:false},
            {option:"D: Ares", answer:false}
        ]
    },
    {
        question: "QUESTION 5:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
    {
        question: "QUESTION 5:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
    {
        question: "QUESTION 5:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
    {
        question: "QUESTION 5:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
]

// event listeners for control buttons
restartButton.addEventListener('click', restart);
prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);
submitButton.addEventListener('click', submit);

// starts quiz and generates questions with answer options
function startQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let num = 0;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let num = 1;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let num = 2;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let num = 3;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    prevButton.classList.add('hide');
}

startQuiz();

// allows user to navigate to previous question
function prev() {
    currentQuestion--;
    if(currentQuestion<=0){
        prevButton.classList.add('hide');
        nextButton.classList.remove('hide');
    }
    
    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let num = 0;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let num = 1;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let num = 2;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let num = 3;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }

    nextButton.classList.remove('hide');
}

// allows user to navigate to next question
function next() {
    currentQuestion++;
    if(currentQuestion>=9){
        nextButton.classList.add('hide');
        prevButton.classList.remove('hide');
    }

    questionText.innerHTML = questions[currentQuestion].question;
    answerButtonA.innerHTML = questions[currentQuestion].answers[0].option;
    answerButtonA.onclick = () => {
        let num = 0;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonB.innerHTML = questions[currentQuestion].answers[1].option;
    answerButtonB.onclick = () => {
        let num = 1;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonC.innerHTML = questions[currentQuestion].answers[2].option;
    answerButtonC.onclick = () => {
        let num = 2;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }
    answerButtonD.innerHTML = questions[currentQuestion].answers[3].option;
    answerButtonD.onclick = () => {
        let num = 3;
        if(questions[currentQuestion].answers[num].answer){
            if(score<10){
                score++;
            }
        }
        playerScore.innerHTML = score;
        if(currentQuestion<9){
            next();
        }
    }

    prevButton.classList.remove('hide');
}

// submits all answers, hides questions and quiz buttons and returns a message with the player score
function submit() {
    prevButton.classList.add('hide');
    nextButton.classList.add('hide');
    submitButton.classList.add('hide');
    answerButtonA.classList.add('hide');
    answerButtonB.classList.add('hide');
    answerButtonC.classList.add('hide');
    answerButtonD.classList.add('hide');
    questionText.innerHTML = `Well done! You scored ${score}/10!`;
}

// resets variables to restart the quiz
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