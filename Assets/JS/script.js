var mainEl = document.querySelector(".container");
var submitButton = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var quizTimer;
// Switching between questions
var questionIndex = 0; // first questions
var myQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

function startTimer() {
  quizTimer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}
function startQuiz() {
  mainEl.innerHTML = "";
  displayQuestion(myQuestions[questionIndex]);
  startTimer();
  //displayAnswers()

  //click start button

  //start timer countdown
  // var timeLeft = 75;
  // //timeLeft = "#timer"
  // var quizTimer = setInterval(function(){
  //     if(timeLeft <= 0){
  //         clearInterval(quizTimer);
  //     }
  // }, 1000);
}
// document.querySelector('#start-quiz').addEventListener('click', function(){

// })
// hoisting
// closure

function displayQuestion(questionObj) {
  //questionObj? where from? function displayAnswers(answersObj)?
  // increase questionIndex by 1
  questionIndex = questionIndex + 1;

  // display question and answers
  var questionH3 = document.createElement("h3"); // <h3></h3>
  questionH3.innerHTML = questionObj.question; // <h3>some text here</h3>
  console.log(questionH3);
  mainEl.appendChild(questionH3);

  //create ul dynamically?

  // questionObj.answers => { 1: "Peter", 2: "James" }
  for (var i = 0; i < questionObj.answers.length; i++) {
    var answersButton = document.createElement("button"); // []
    answersButton.textContent = questionObj.answers[i]; // []
    mainEl.appendChild(answersButton);
    answersButton.addEventListener("click", function (event) {
      mainEl.innerHTML = "";

      if (event.target.textContent === questionObj.correctAnswer) {
        // alert("Correct!");
        console.log("correct");
      } else {
        // alert("WRONG!");
        console.log("wrong");
        timeLeft = timeLeft - 10;
      }

      if (questionIndex === myQuestions.length || timeLeft <= 0) {
        if (timeLeft <= 0) timeLeft = 0;
        endQuiz();
        return;
      }

      displayQuestion(myQuestions[questionIndex]);
    });
    // TODO: { name: "", age: 5 }
    // Listing all the answer options
  }
  // answersButton.innerHTML = questionObj.answers // {}
  console.log(questionObj.answers);

  //event listener for answer clicks
}
function checkAnswer(event) {
  console.log("hit");
  console.log(event.target.value, myQuestions[questionIndex].correctAnswer);
  // if correct display "Correct!" and if incorrect display "Wrong!"
  if (event.target.value === myQuestions[questionIndex].correctAnswer) {
    alert = "Correct!";
  } else {
    alert = "WRONG!";
  }
}
// when user clicks a answer take time off if wrong and display next question
// if (answer != correctAnswer){
//     timeLeft= (timeLeft-10);
// }
//     })

//     // check if quiz is over, if over call showResults

//     if (questionIndex === myQuestions.length) {
//        endQuiz();
//         return;
//      }
// };

function endQuiz() {
  mainEl.innerHTML = "";
  clearInterval(quizTimer);
  window.location.href = "high-scores.html";
  console.log("end of quiz");
}

submitButton.addEventListener("click", startQuiz); //where to add event listeners for different buttons
//submitButton.addEventListener('click', answersButton)
