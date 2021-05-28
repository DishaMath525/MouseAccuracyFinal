var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");
var interval;


function run() {
  interval = setInterval(drawCircle, 500)
  
}

function drawCircle() {
    var x =  Math.floor(Math.random() * 980);
    var y =  Math.floor(Math.random() * 580);
    var radius = 20;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    //ctx.fillStyle();
    ctx.fill();
}

function end(){
  clearInterval(interval);
  window.location =  "file:///home/user10/Desktop/MouseAccuracyFinal/end-page.html";
}

function restart(){
  window.location = "file:///home/user10/Desktop/MouseAccuracyFinal/Clicker.html";
}
