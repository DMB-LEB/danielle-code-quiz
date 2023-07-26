let question = {
    QuestionFour: 'A very helpful tool used in development and debugging for printing content to the debugger is:',
    multipleChoice: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 3
};

function rightAnswer(){
    var ele = document.getElementsByName('dGroup');
    var response;
    var guess;
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
            guess = ele[i].value 
          }
    }
  
    if(guess==undefined){
      response = 'You must choose an option'
    } else if(guess == 3) {
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
    window.open("questionFive.html", "_self");
  });