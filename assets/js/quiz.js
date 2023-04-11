const playerScore = document.getElementById('player-score');
const questionText = document.getElementById('question-text');
const answerButtonA = document.getElementById('a');
const answerButtonB = document.getElementById('b');
const answerButtonC = document.getElementById('c');
const answerButtonD = document.getElementById('d');
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
        question: "QUESTION 4:<br><br>Which pirate commanded a ship name Adventure Galley?",
        answers: [
            {option:"A: Blackbeard", answer:false},
            {option:"B: Henry Every", answer:false},
            {option:"C: William Kidd", answer:true},
            {option:"D: Anne Bonny", answer:false}
        ]
    },
    {
        question: "QUESTION 5:<br><br>Which are the four terrestrial planets in our solar system?",
        answers: [
            {option:"A: Earth, Mars, Neptune and Venus", answer:false},
            {option:"B: Mars, Neptune, Earth and Uranus", answer:false},
            {option:"C: Venus, Earth, Saturn and Mars", answer:false},
            {option:"D: Mercury, Venus, Mars and Earth", answer:true}
        ]
    },
    {
        question: "QUESTION 6:<br><br>What is the largest capital city in North America?",
        answers: [
            {option:"A: Ottawa", answer:false},
            {option:"B: Mexico City", answer:true},
            {option:"C: Washington, D.C.", answer:false},
            {option:"D: Panama City", answer:false}
        ]
    },
    {
        question: "QUESTION 7:<br><br>The Pantheon is located in which historic city?",
        answers: [
            {option:"A: Athens", answer:false},
            {option:"B: Cairo", answer:false},
            {option:"C: Istanbul", answer:false},
            {option:"D: Rome", answer:true}
        ]
    },
    {
        question: "QUESTION 8:<br><br>Which was the last dynasty in China?",
        answers: [
            {option:"A: Ming", answer:false},
            {option:"B: Liao", answer:false},
            {option:"C: Qing", answer:true},
            {option:"D: Yuan", answer:false}
        ]
    },
    {
        question: "QUESTION 9:<br><br>What was the language of the Aztecs?",
        answers: [
            {option:"A: Sumerian", answer:false},
            {option:"B: Tarahumara", answer:false},
            {option:"C: Aramaic", answer:false},
            {option:"D: Nahuatl", answer:true}
        ]
    },
    {
        question: "QUESTION 10:<br><br>Which star is nearest to Earth?",
        answers: [
            {option:"A: Lalande 21185", answer:false},
            {option:"B: Proxima Centauri", answer:true},
            {option:"C: The Sun", answer:false},
            {option:"D: Rigil Kentaurus", answer:false}
        ]
    },
];

// event listeners for control buttons
restartButton.addEventListener('click', restart);

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
        } else {
            submit();
        }
    };
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
        } else {
            submit();
        }
    };
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
        } else {
            submit();
        }
        
    };
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
        } else {
            submit();
        }
    };
}
startQuiz();

// allows user to navigate to next question
function next() {
    currentQuestion++;
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
        } else {
            submit();
        }
    };
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
        } else {
            submit();
        }
    };
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
        } else {
            submit();
        }
    };
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
        } else {
            submit();
        }
    }
}

// submits all answers, hides questions and quiz buttons and returns a message with the player score
function submit() {
    answerButtonA.classList.add('hide');
    answerButtonB.classList.add('hide');
    answerButtonC.classList.add('hide');
    answerButtonD.classList.add('hide');
    questionText.innerHTML = `Well done! You scored ${score}/10!`;
}

// resets variables to restart the quiz
function restart() {
    currentQuestion = 0;
    answerButtonA.classList.remove('hide');
    answerButtonB.classList.remove('hide');
    answerButtonC.classList.remove('hide');
    answerButtonD.classList.remove('hide');
    score = 0;
    playerScore.innerHTML = score;
    startQuiz();
}