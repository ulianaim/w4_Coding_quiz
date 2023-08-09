var startButton = document.getElementById("start-quiz")
var startQuiz = document.querySelector(".quiz-title")
var startQuestions = document.querySelector(".question-screen")
var ask = document.getElementById("ask")
var endQuiz = document.querySelector(".end-quiz")
var scoreId = document.querySelector("#score")
var score = 0
var timeEl = document.querySelector(".time")
var correctLabel = document.getElementById("correct-label")
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
        correctAnswer: "all of the above"
    }
]
var index=0
function questionDisplay () {
    ask.textContent = arrayOfQuestions[index].question
    answer1.textContent = arrayOfQuestions[index].answers[0]
    answer2.textContent = arrayOfQuestions[index].answers[1]
    answer3.textContent = arrayOfQuestions[index].answers[2]
    answer4.textContent = arrayOfQuestions[index].answers[3]
}

function gameOver () {
    ask.textContent = ""
    endQuiz.style.display="block"
    scoreId.textContent = score
    document.querySelector(".high-score").style.display="block"
    document.querySelector("#submitBtn").addEventListener("click", function(event) {
        event.preventDefault()
       var initials = document.querySelector("#input").value
       localStorage.setItem(initials, score)

    })

}


startButton.addEventListener("click", function() {
    setTime ()
    startQuiz.style.display = "none";
    startQuestions.style.display = "block";
    for (i=0; i <answers.length; i++) {
  
        answers[i].addEventListener("click", function(event){
            var isLabelEmpty = correctLabel.textContent
            if (isLabelEmpty!== "") {
                return
            }
            if (arrayOfQuestions[index].correctAnswer===event.target.textContent) {
                correctLabel.textContent = "Correct"
                score++
            } else {
                correctLabel.textContent = "Incorrect"
            }
            index++
           
    setTimeout(() => {
        questionDisplay()
        correctLabel.textContent = ""
    }, 1000);
    if(index >= arrayOfQuestions.length) {
        gameOver()
    }
           
        })
    }
    questionDisplay()

})

var secondsLeft = 60

 function setTime() {
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Time left"
        if ( secondsLeft <= 0) {
            clearInterval (timeInterval)
            gameOver()
         }
    }, 1000
    )
    
 }









