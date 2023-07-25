let question = {
    QuestionFour: 'A very helpful tool used in development and debugging for printing content to the debugger is:',
    multipleChoice: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 3
};

let btnBox = document.getElementById('btn');
btnBox.addEventListener('click', function(){
    console.log('Clicked');
    window.open("questionFive.html", "_self");
});