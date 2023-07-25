let question = {
    QuestionThree: 'Arrays in JavaScript can be used to store:',
    multipleChoice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 3
};

let btnBox = document.getElementById('btn');
btnBox.addEventListener('click', function(){
    console.log('Clicked');
    window.open("questionFour.html", "_self");
});


