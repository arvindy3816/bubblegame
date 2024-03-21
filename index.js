var timer = 3;
var score = 0;
var hitrn = 0;

//jis pe click karoge wo element par event raise hoga,aur event listener na milne par event ke parent par listener dhundhega,waha v na milne par event parent ke parent par listener dhundega

function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent =score
}
function makeBubble() {
    var arvind = "";
    for (var i = 0; i <= 80; i++) {
        var hero = Math.floor(Math.random() * 10)
        arvind += `<div class=bubble>${hero}</div>`
    }
    const nerHero = document.querySelector("#pbtm").innerHTML = arvind;
}

  
function runtimer() {
   var timeint = setInterval(function(){
        if(timer>0){
        timer--;
    document.querySelector("#runtimerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over!</h1>`;
        }
},1000)
}
 
function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
 } 
 document.querySelector("#pbtm")
 .addEventListener("click",
 function(chachaclick){
     var clickedNUm =Number(chachaclick.target.textContent);
     if(clickedNUm === hitrn){
        increaseScore();
        makeBubble();
        getnewhit();
     }
 }); 
getnewhit();
runtimer();
makeBubble();
increaseScore();