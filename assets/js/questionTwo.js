let question = {
  QuestionTwo: 'The condition in an "if/else" statement is enclosed with:',
  multipleChoice: ['quotes', 'curley brackets', 'parenthesis', 'square brackets'],
  correctAnswer: 2
};

function rightAnswer(){
  var ele = document.getElementsByName('bGroup');
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
  window.open("questionThree.html", "_self");
});
