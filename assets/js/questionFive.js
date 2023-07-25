let question = {
    QuestionFive: 'String values must must be enclosed within _______ when being assigned to variables:',
    multipleChoice: ['commas', 'curley brackets', 'quotes', 'parenthesis'],
    correctAnswer: 2
};

let btnBox = document.getElementById('btn');
btnBox.addEventListener('click', function(){
    console.log('Clicked');
    window.open("scores.html", "_self");
});