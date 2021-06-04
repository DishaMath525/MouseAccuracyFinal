var canvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext("2d");
var numberOfClicks = 0;
var circleList = [];
var radius;
var interval;
var color;
var intervalTime;
var duation;
var clickAccuracy;
var numberOfDots;

function getIntervalTime(){
  intervalTime = window.sessionStorage.getItem("intervalTime");
  return intervalTime;
}

function setDurationTime(){
  duration = window.sessionStorage.getItem("durationTime");
  setTimeout(function(){
    window.sessionStorage.setItem("numofclicks",numberOfClicks);
    if(duration == 16000){
      numberOfDots = Math.floor(15000/intervalTime);
    }
    if(duration == 31000){
      numberOfDots = Math.floor(30000/intervalTime);
    } 
    if(duration == 61000){
      numberOfDots = Math.floor(60000/intervalTime);
    }
    clickAccuracy = Math.floor((numberOfClicks/numberOfDots) * 100) + " %";
    window.sessionStorage.setItem("clickAccuracy", clickAccuracy);
    window.location = "end-page.html"
  }, duration);
}

function run() {
  intervalTime = getIntervalTime();
  interval = setInterval(drawCircle, intervalTime);
  canvas.addEventListener('mousedown', (removeCircle));
  setDurationTime();
}

function getColor(){
  color = window.sessionStorage.getItem("colorofcircle");
  return color;
}

function getRadius(){
  
  radius = window.sessionStorage.getItem("circleSize");
  return radius;
}
function drawCircle() {
    var circleX =  Math.floor(Math.random() * 580);
    var circleY =  Math.floor(Math.random() * 580);

    var getCircle = {
      x: circleX,
      y: circleY
    };

    ctx.beginPath();
    radius = getRadius();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    color = getColor();
    ctx.fillStyle = color;
    ctx.fill();
    color = getColor();
    circleList.push({x:circleX, y:circleY});
}

function clickDetection(click, circle){
  //check if mouse clicked on a circle
  return Math.sqrt((click.x - circle.x) ** 2 + (click.y - circle.y) ** 2) < radius;
}

function removeCircle(event){
  //count the clicks if a circle was removed from canvas

  var clickLocation = {
    x: event.offsetX,
    y: event.offsetY
  };

  var newCircles = [];
  circleList.forEach(circle => {
    if (clickDetection(clickLocation, circle)) {
      //if circle was clicked remove from canvas
      ctx.clearRect(circle.x-radius, circle.y - radius, 2*radius, 2*radius);
       numberOfClicks++;
    }else{
      newCircles.push(circle);
    }
    
  });
}

function end(){
  clearInterval(interval);

  window.sessionStorage.setItem("numofclicks",numberOfClicks);
  //window.sessionStorage.clickCount = numberOfClicks;
  window.location =  "end-page.html";
 // document.getElementById("clicks").innerHTML = sessionStorage.clickCount;
  

   numberOfDots = duration/intervalTime;
   clickAccuracy = (numberOfClicks/numberOfDots) * 100;
  window.sessionStorage.setItem("clickAccuracy", clickAccuracy);
  
}




