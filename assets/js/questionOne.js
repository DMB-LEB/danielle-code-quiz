let question = {
    QuestionOne: 'Commonly used data types DO NOT include:',
    multipleChoice: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
  };

  let btnBox = document.getElementById('btn');
btnBox.addEventListener('click', function(){
    console.log('Clicked');
    window.open("questionTwo.html", "_self");
});

  
  // function showQuestionOne(q1) { 
  //   let QuestionOneDiv = document.getElementById('questionOne');
  //   let multiChoice = document.querySelectorAll(".multipleChoice");
  //   multiChoice.forEach(function(element, index)
  //   {element.textContent = q1.multipleChoice[index];}); 
  // }
  // showQuestionOne(question);