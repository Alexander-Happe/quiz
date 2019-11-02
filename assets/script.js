var timer = document.querySelector(".timer")
var header = document.querySelector(".head")
var info = document.querySelector(".info")
var startbttn = document.getElementById("start-bttn")
var highbttn = document.getElementById("score-bttn")

var secondsleft = 75;
var secondselapsed = 0;
var interval;

function starttime(){
    
    interval = setInterval(function(){
        secondsleft--;
        displaytime()
        if (secondsleft <= 0)
            clearInterval(interval)
        console.log(secondsleft)
    }, 1000)
}
function displaytime(){
    timer.textContent = "Time: " + secondsleft
}
starttime()
startbttn.addEventListener("click", function(){
    //start timer at 75 sec
})
highbttn.addEventListener("click", function(){
    //transfer to high score page w/ local storage log
})