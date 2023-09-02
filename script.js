var val=60;
var score= 0;
var s;
function getHit(){
    s = Math.floor(Math.random()*10);
    document.querySelector("#hit-count").textContent=s;
}

function bubbles(){
    var r="";
for(var i=1 ;  i<=160 ; i++)
{
    var value = Math.floor(Math.random()*10)
    r += `<div class="bubble">${value}</div>` ;
}
document.querySelector("#pbtm").innerHTML = r;
}

function timerStart(){
   var interval = setInterval(function () {
    if(val>0)
    {
        val--;
    document.querySelector("#clock").textContent=val;
  }
  else{
    clearInterval(interval);
    document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER!<h1>`;
}
   },1000);
}

function pointsGrow(){
 score += 10;
 document.querySelector("#pt").textContent=score;

}

document.querySelector("#pbtm")
.addEventListener("click",function(data){
var numClick = Number(data.target.textContent);
if(numClick==s){
    pointsGrow();
    bubbles();
    getHit();
}
})
getHit();
timerStart();
bubbles();