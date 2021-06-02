var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");
var interval;
var count = 0;
var x;
var y;
var cx;
var cy;
var radius =40;
var circles = [];

function run() {
  interval = setInterval(drawCircle, 1000);
  document.addEventListener("click",countClicks);
  
}

function drawCircle() {
    cx =  Math.floor(Math.random() * 980);
    cy =  Math.floor(Math.random() * 580);
  
    ctx.beginPath();
     ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    //ctx.fillStyle();
    ctx.fill();
}


function countClicks(e){

      x = e.clientX;
      y = e.clientY;

    

    if(pointInCircle(x, y, cx, cy, radius)) {
        count++;
        document.getElementById("score").innerHTML = "Number Of Clicks: " + count;

  }

}
function pointInCircle(x, y, cx, cy, radius) {
 
  var dist_points = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  radius *= radius;
  if (dist_points < radius) {
      return true;
  }
  return false;

}

function end(){
  clearInterval(interval);
  window.location =  "file:///home/user10/Desktop/MouseAccuracyFinal/end-page.html"; // will only work for my desktop, need to change the link so that anyone can use it
}

function restart(){
  window.location = "file:///home/user10/Desktop/MouseAccuracyFinal/Index.html"; // will only work for my desktop, need to change the link so that anyone can use it
}

/*
window.location.pathname = '/end-page.html'

"http://domain.com" -> "http://domain.com/relative-link"
*/