let question2 = {
  QuestionTwo: 'The condition in an "if/else" statement is enclosed with:',
  multipleChoice: ['quotes', 'curley brackets', 'parenthesis', 'square brackets'],
  correctAnswer: 2
};

let btnBox = document.getElementById('btn');
btnBox.addEventListener('click', function(){
  console.log('Clicked');
  window.open("questionThree.html", "_self");
});
