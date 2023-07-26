var timer

let button = document.getElementById('button');

button.addEventListener('click', function(){
    console.log('Clicked');
    window.open("questionOne.html", "_self");
});


// Set the date we're counting down to
var countDowntimeSeconds = 300;

var clock = setInterval(function() {
    countDowntimeSeconds-=1
    document.getElementById('time').innerHTML = countDowntimeSeconds;
}, 1000);