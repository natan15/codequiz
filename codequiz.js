var questions = [
    {
        Question: 'Which of the following function of String object returns the character at the specified index?',
        Answers: [
            { text: 'charAt()', correct: true  },
            { text: 'charCodeAt()', correct: false },
            { text: 'concat()', correct: false },
            { text: 'indexOf()', correct: false }
        ]},

       { Question: 'Which of the following type of variable is visible only within a function where it is defined?',
        Answers: [
            { text: 'global variable', correct: false  },
            { text: 'local variable', correct: true },
            { text: 'Both of the above', correct: false },
            { text: 'None of the above', correct: false }
        ]},

       { Question: 'Which of the following is written in camel case?',
        Answers: [
            { text: 'camelcase', correct: false },
            { text: 'Camelcase', correct: false },
            { text: 'camelCase', correct: true },
            { text: 'cAmelcAse', correct: false}
        ]},

       { Question: 'Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',
        Answers: [
            { text: 'concat()', correct: false },
            { text: 'every()', correct: false },
            { text: 'filter()', correct: true },
            { text: 'some()', correct: false}
        ]},

        {Question: 'Which of the following function of Array object returns a string representing the array and its elements?',
        Answers: [
            { text: 'toSource()', correct: false },
            { text: 'sort()', correct: false },
            { text: 'splice()', correct: false },
            { text: 'toString()', correct: true}
        ]}
    
]


var currentQuestion = 0
var score = 0
var lastQuestion = questions.length;


var startButton = document.querySelector('#start')

    




function startGame(){
    
    //startTimer()
    loadNextQuestion(currentQuestion)

    //function startTimer(duration, display) {
        //var timer = duration, minutes, seconds;
        //setInterval(function () {
           // minutes = parseInt(timer / 60, 10);
           // seconds = parseInt(timer % 60, 10);
    
           // minutes = minutes < 10 ? "0" + minutes : minutes;
           // seconds = seconds < 10 ? "0" + seconds : seconds;
    
           // display.textContent = minutes + ":" + seconds;
    
          //  if (--timer < 0) {
           //     timer = duration;
          //  }
      //  }, 1000);
   // }
    
    //window.onload = function () {
      //  var fiveMinutes = 60 * 5,
           // display = document.querySelector('#time');
       // startTimer(fiveMinutes, display);
  //  };
    
}


   
 


function checkAnswer(e){
   var att = e.target.getAttribute("truth")
    if(att === "true"){
        score++
    }
   loadNextQuestion(currentQuestion++)
} 

function endQuiz(){
    if(currentQuestion > lastQuestion){
  }  showScores()
 
}
function loadNextQuestion(currentQuestion){

    var newQuestion = questions[currentQuestion]
    document.querySelector("#question").textContent = newQuestion.Question

    var answer = newQuestion.Answers[0].text
    var answerValue = newQuestion.Answers[0].correct
    document.querySelector("#answerOne").textContent = answer
    document.querySelector("#answerOne").setAttribute("truth", answerValue)

    answer = newQuestion.Answers[1].text
    answerValue = newQuestion.Answers[1].correct
    document.querySelector("#answerTwo").textContent = answer
    document.querySelector("#answerTwo").setAttribute("truth", answerValue)
    
    answer = newQuestion.Answers[2].text
    answerValue = newQuestion.Answers[2].correct
    document.querySelector("#answerThree").textContent = answer
    document.querySelector("#answerThree").setAttribute("truth", answerValue)

   answer = newQuestion.Answers[3].text
   answerValue = newQuestion.Answers[3].correct
    document.querySelector("#answerFour").textContent = answer
    document.querySelector("#answerFour").setAttribute("truth", answerValue)
    

     

    
    


   
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + score + "</h2>";
    var element = document.getElementById("#quiz-container");
    element.innerHTML = gameOverHTML;
    
};


document.querySelector('#start').addEventListener('click', startGame)
document.querySelector('#answerOne').addEventListener('click', checkAnswer)
document.querySelector('#answerTwo').addEventListener('click', checkAnswer)
document.querySelector('#answerThree').addEventListener('click', checkAnswer)
document.querySelector('#answerFour').addEventListener('click', checkAnswer)

