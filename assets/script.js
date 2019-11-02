var timer = document.querySelector(".timer")
var header = document.querySelector(".head")
var info = document.getElementById("info")
var startbttn = document.getElementById("start-bttn")
var highbttn = document.getElementById("score-bttn")
var hide = document.querySelectorAll(".stuff")
var bttndiv = document.getElementById("button")




var secondsleft = 75;
var interval;
var answer = ""

function starttime(){
    interval = setInterval(function(){
        secondsleft--;
        displaytime()
        if (secondsleft <= 0)
            clearInterval(interval)
    }, 1000)
}
function displaytime(){
    timer.textContent = "Time: " + secondsleft
}
function gamestart(){
    starttime()
    for (i=0;i<hide.length; i++){
        hide[i].className = "hide"
    }
    if (answer === ""){
        var question = document.createElement("h2")
        question.className = "info" 
        question.innerHTML = questions[0].title
        info.append(question)
        for (i=0;i<4; i++){
            var buttons = document.createElement("button")
            buttons.className = "questionbttn"
            buttons.innerHTML = questions[0].choices[i]
            buttons.setAttribute("value", questions[0].choices[i])
            bttndiv.append(buttons)
        }
    }
    var newbttns = document.querySelectorAll(".questionbttn")
    
    console.log(newbttns)
    for (i=0;i<newbttns.length;i++){
        console.log(newbttns[i].value)
        newbttns[i].addEventListener("click", function(){
            if (this.value === questions[0].answer){
                console.log(this.value)
                answer = "1"
                console.log(answer)
            }
            else {
                secondsleft = secondsleft - 10
                alert("Wrong")
            }
        })
    }
    if (answer === "1"){
        bttndiv.remove(buttons)
        info.remove(question)
        var question = document.createElement("h2")
        question.className = "info" 
        question.innerHTML = questions[1].title
        info.append(question)
        for (i=0;i<4; i++){
            var buttons = document.createElement("button")
            buttons.className = "questionbttn"
            buttons.innerHTML = questions[1].choices[i]
            buttons.setAttribute("value", questions[1].choices[i])
            bttndiv.append(buttons)
        }
    }
    var newbttns = document.querySelectorAll(".questionbttn")
    
    console.log(newbttns)
    for (i=0;i<newbttns.length;i++){
        console.log(newbttns[i].value)
        newbttns[i].addEventListener("click", function(){
            if (this.value === questions[1].answer){
                console.log(this.value)
                answer = "2"
            }
            else {
                secondsleft = secondsleft - 10
                alert("Wrong")
            }
        })
    }
}

 
   

startbttn.addEventListener("click", function(){
    gamestart()
})
highbttn.addEventListener("click", function(){
    //transfer to high score page w/ local storage log
})