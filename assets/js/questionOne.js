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

  
  // function showQuestionOne(q1) { 
  //   let QuestionOneDiv = document.getElementById('questionOne');
  //   let multiChoice = document.querySelectorAll(".multipleChoice");
  //   multiChoice.forEach(function(element, index)
  //   {element.textContent = q1.multipleChoice[index];}); 
  // }
  // showQuestionOne(question);



    // question.onsubmit = function rightAnswer(question){
  //   if (selection==question.correctAnswer){
  //     response = "Correct!"
  //   } else {
  //     response = 'Incorrect ❌'
  //   }
  // }