var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");
var interval;
var count = 0;
var x;
var y;
var cx;
var cy;
var radius;
var circle;


function run() {
  interval = setInterval(drawCircle, 500);
  document.addEventListener("click",countClicks());
  
}

function drawCircle(event) {
    cx =  Math.floor(Math.random() * 980);
    cy =  Math.floor(Math.random() * 580);
    x = event.screenX;
    y = event.screenY;
    radius = 40;
    ctx.beginPath();
    circle = ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    //ctx.fillStyle();
    ctx.fill();
}


function countClicks(){
    
    if (pointInCircle(x, y, cx, cy, radius)) {
        document.addEventListener("click", function(){
          count++;
         
          document.getElementById("score").innerHTML = "Number Of Clicks: " + count;
    });
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
