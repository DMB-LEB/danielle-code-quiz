let question = {
    QuestionThree: 'Arrays in JavaScript can be used to store:',
    multipleChoice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 3
};

function rightAnswer(){
    var ele = document.getElementsByName('cGroup');
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
    window.open("questionFour.html", "_self");
  });
