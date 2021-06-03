var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");
var numberOfClicks = 0;
var circleList = [];
const radius = 20;

function run() {
  setInterval(drawCircle, 500);
  canvas.addEventListener('mousedown', (removeCircle));
}

function drawCircle() {
    var circleX =  Math.floor(Math.random() * 580);
    var circleY =  Math.floor(Math.random() * 580);

    var getCircle = {
      x: circleX,
      y: circleY
    };

    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    ctx.fill();

    circleList.push({x:circleX, y:circleY});
}

function clickDetection(click, circle){
  //check if mouse clicked on a circle
  return Math.sqrt((click.x - circle.x) ** 2 + (click.y - circle.y) ** 2) < radius;
}

function removeCircle(event){
  //count the clicks if a circle was removed from canvas
  numberOfClicks++;
  document.getElementById("score").innerHTML = "Clicks: " + numberOfClicks;

  var clickLocation = {
    x: event.offsetX,
    y: event.offsetY
  };

  var newCircles = [];
  circleList.forEach(circle => {
    if (clickDetection(clickLocation, circle)) {
      //if circle was clicked remove from canvas
      ctx.clearRect(circle.x-radius, circle.y - radius, 2*radius, 2*radius);
    }else{
      newCircles.push(circle);
    }
  });
}



