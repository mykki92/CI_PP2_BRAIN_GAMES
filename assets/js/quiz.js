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

//Array containing quiz questions
const quizQuestions = [
    {
        //Question 1
        question: "What is the only continent on Earth that does not have a desert?",
        answers: {
            a: "Asia",
            b: "Europe",
            c: "Antarctica",
            d: "South America"
        },
        correctAnswer: "b"
    },
    {
        //Question 2
        question: "Which is the hottest planet in the Milky Way?",
        answers: {
            a: "Saturn",
            b: "Jupiter",
            c: "Venus",
            d: "Mars"
        },
        correctAnswer: "c"
    },
    {
        //Question 3
        question: "Who was the Ancient Greek God of the Sun?",
        answers: {
            a: "Apollo",
            b: "Hermes",
            c: "Dionysus",
            d: "Ares"
        },
        correctAnswer: "a"
    },
    {
        //Question 4
        question: "The Pantheon is located in which historic city?",
        answers: {
            a: "Athens",
            b: "Cairo",
            c: "Istanbul",
            d: "Rome"
        },
        correctAnswer: "d"
    },
    {
        //Question 5
        question: "How many hearts does an octopus have?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "76"
        },
        correctAnswer: "3"
    },
];

