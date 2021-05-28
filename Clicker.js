var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");


function run() {
  setInterval(drawCircle, 500)
  
}

function drawCircle() {
    var x =  Math.floor(Math.random() * 580);
    var y =  Math.floor(Math.random() * 580);
    var radius = 20;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    //ctx.fillStyle();
    ctx.fill();
}
