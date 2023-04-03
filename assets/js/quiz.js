const playerScore = document.getElementById('player-score');
const questionText = document.getElementById('question-text');
const answerButtonA = document.getElementById('a');
const answerButtonB = document.getElementById('b');
const answerButtonC = document.getElementById('c');
const answerButtonD = document.getElementById('d');
const restartButton = document.getElementById('restart');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit')

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

