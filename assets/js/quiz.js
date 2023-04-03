let questionContainer = document.getElementById('question');
let submitButton = document.getElementById('submit-button');
let resultsContainer = document/getElementById('results');

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

generateQuiz(quizQuestions, questionContainer, submitButton, resultsContainer);

function generateQuiz(questions, questionContainer, submitButton, resultsContainer){

  function showQuestions(questions, questionContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      answers = [];
    
      for(letter in questions[i].answers){
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div id="question">' + questions[i].question + '</div>'
        + '<div id="answers">' + answers.join('') + '</div>'
      );
    }

    questionContainer.innerHTML = output.join('');
    }

    function showResults(questions, questionContainer, resultsContainer){
    
        // gather answer containers from our quiz
        var answerContainers = questionContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
          // find selected answer
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
          // if answer is correct
          if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[i].style.color = 'red';
          }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
      }
    
      // show questions right away
      showQuestions(questions, questionContainer);
      
      // on submit, show results
      submitButton.onclick = function(){
        showResults(questions, questionContainer, resultsContainer);
      }
}
