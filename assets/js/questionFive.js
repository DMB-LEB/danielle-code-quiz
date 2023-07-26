let question = {
    QuestionFive: 'String values must must be enclosed within _______ when being assigned to variables:',
    multipleChoice: ['commas', 'curley brackets', 'quotes', 'parenthesis'],
    correctAnswer: 2
};

function rightAnswer(){
    var ele = document.getElementsByName('eGroup');
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
      response = 'Incorrect ❌'
      document.getElementById('nextQuestion').style.visibility='visible';
    }
  
    document.getElementById("result").innerHTML = response;
  }
  
  let nextQuestionClass = document.getElementById('nextQuestion');
  nextQuestion.addEventListener('click', function(){
    window.open("scores.html", "_self");
  });