var mainEl = document.querySelector('.container');
var submitButton = document.querySelector('#start-quiz');
var timerEl = document.querySelector('.timer');

var questionIndex = 0;
var myQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    }
];

function startQuiz() {
    mainEl.innerHTML = '';
    displayQuestion(myQuestions[questionIndex])
    //displayAnswers()

    //start timer countdown
    var timeLeft = 75;
    var quizTimer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(quizTimer);
        }
    }, 1000);
}

function displayQuestion(questionObj) { //questionObj? where from? function displayAnswers(answersObj)?
    // increase questionIndex by 1
    questionIndex = questionIndex + 1;

    // display question and answers
    var questionH3 = document.createElement('h3') // <h3></h3>
    questionH3.innerHTML = questionObj.question // <h3>some text here</h3>
    console.log(questionH3);
    mainEl.appendChild(questionH3);
    
    //create ul dynamically?
    
    //var answersli = document.createElement('li')
    //answersLi.innerHTML = answersObj.answers
    //console.log(answersLi);
    //mainEl.appendChild(answersLi);

    //And/Or.....

    //var answersButton = document.createElement("button");
    //editButtonEl.textContent = "";
    //editButtonEl.className = "buttons";
    //editButtonEl.setAttribute();
    //mainEl.appendChild(answersButton);

    // if correct display "Correct!" and if incorrect display "Wrong!" 
    // when user clicks a answer take time off if wrong and display next question
    // check if quiz is over, if over call showResults
    
    //if (questionIndex === myQuestions.length) {
     //   endQuiz();
       //  return;
     //}
};

function endQuiz() {}

submitButton.addEventListener('click', startQuiz)