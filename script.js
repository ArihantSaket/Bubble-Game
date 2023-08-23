var timer = 6;
var score = 0;
var rnum = 0;

function updateScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getHit(){
    rnum = Math.floor(Math.random()*10);
    document.querySelector("#hiter").textContent = rnum;
}

function makeBubble(){
    var clutter = "";
    for (var i = 1; i<=90; i++){
        let num = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${num}</div>`
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTime(){
    var time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#intTimer").textContent = timer;
        }

        else{
            clearInterval(time)
            var last = document.querySelector(".panel-bottom").innerHTML = `<h1 class="last-text">Your Score is: ${score}</h1>`;
        }
    }, 1000);
}

document.querySelector(".panel-bottom").addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === rnum){
        updateScore();
        makeBubble();
        getHit();
        }
});

getHit();
runTime();
makeBubble();