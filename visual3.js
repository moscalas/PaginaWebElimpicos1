var data = [];
var maxData;


function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(BOTTOM);

    data.push(3600000000);
    data.push(3572000000);
    data.push(98200000);
    data.push(56000000);
  
  maxData = max(data);
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 0);
  stroke(89, 86, 74);

  var angleSeparation = 360 / data.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }
  var offset = 200;
  var nombres = [' FIFA World Cup', ' Rio 2016 Summer Olympics', ' Super Bowl LIII', ' Wimblendon'];
  var dataMultiplier = (height/2-offset-padding) / maxData;


  for (var i = 0; i < data.length; i = i + 1) {
    push();
    var currentData = data[i];
    var finalHeight = currentData * dataMultiplier;
    var animatedHeight = map(maxValue, 0, 400, 0, finalHeight);
    translate(width / 2, height / 2);
    rotate(angleSeparation * i);
    rect(0, offset, angleSeparation*2, animatedHeight);
    text(Math.floor(currentData)+ nombres[i], offset-20, 0);
    pop();
  }

}