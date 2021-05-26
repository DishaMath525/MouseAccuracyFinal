var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");


function run() {
    
  drawCircle();
}

function drawCircle(event) {
    var x =  Math.floor(Math.random() * 600);
    var y =  100;
    var radius = 10;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}