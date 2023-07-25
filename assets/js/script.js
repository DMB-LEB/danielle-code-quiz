// var store = localStorage.getItem();
// var startQuiz = document.getElementsByClassName('.button');

let button = document.getElementById('button');

button.addEventListener('click', function(){
    console.log('Clicked');
    window.open("questionOne.html", "_self");
});
