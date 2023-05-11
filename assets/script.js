var startButton = document.getElementById("start-quiz")
var startQuiz = document.querySelector(".quiz-title")
var startQuestions = document.querySelector(".question-screen")
var ask = document.getElementById("ask")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answers = document.querySelectorAll(".answer")
var arrayOfQuestions = [
    {
        question: "What is Java Script?", 
        answers: ["scripting language that enables you to create dynamically updating content", "computer language", "language use to animate images", "not computer language"],
        correctAnswer: "scripting language that enables you to create dynamically updating content"
    },
    {
        question: "When Javascript was invented", 
        answers: ["1995", "2005", "2000", "1970"],
        correctAnswer: "1995"
    },
    {
        question: "Commonly used data types DO NOT include", 
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store:", 
        answers: ["numbers", "booleans", "strings", "all of the above"],
        correctAnswer: "alerts"
    }
]
var index=0
function questionDisplay () {
    ask.textContent = arrayOfQuestions[index].question
    answer1.textContent = arrayOfQuestions[index].answers[0]
    answer2.textContent = arrayOfQuestions[index].answers[1]
}

startButton.addEventListener("click", function() {
    startQuiz.style.display = "none";
    startQuestions.style.display = "block";
    for (i=0; i <answers.length; i++) {
        answers[i].addEventListener("click", function(){
            index++
            questionDisplay()
        })
    }
    questionDisplay()

})











// 1. When I click "Start Quiz" - first question appear
// 2. When I answer first question - Correct ot Wrong text is appear and second question appear
// 3. Repeat 5 times 
// 4. After all questions were answers:
//        "You finished the quiz" 
//         score of the quiz
//         Enter your initials and click "Submit" button
// 5. Highscores page loads:
//     Go Back button
//     Clear Highscore button
// 