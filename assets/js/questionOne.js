  // import { countDowntimeSeconds } from "./script";

let question = {
    QuestionOne: 'Commonly used data types DO NOT include:',
    multipleChoice: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
   
  };
  
  function rightAnswer(){
    var ele = document.getElementsByName('aGroup');
    var response;
    var guess;
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
            guess = ele[i].value 
          }
    }

    if(guess==undefined){
      response = 'You must choose an option'
    } else if(guess == 2) {
      response = "Correct ✅"
      document.getElementById('nextQuestion').style.visibility='visible';
    } else {
      response = 'Incorrect ❌ Try again'
      // document.getElementById('nextQuestion').style.visibility='visible';
    }

    document.getElementById("result").innerHTML = response;
  }

let nextQuestionClass = document.getElementById('nextQuestion');
nextQuestion.addEventListener('click', function(){
    window.open("questionTwo.html", "_self");
});
