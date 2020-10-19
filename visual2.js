var data = [];
var maxData;
let cnv;
var boton = Visualv; 
function setup() {
  cnv = createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(BOTTOM);
  cnv.parent(boton);
    data.push(205000000.);
    data.push(149600000.);
    data.push(1480000.);
    data.push(1300000.);

  
  maxData = max(data);
}

function draw() {

  background(0, 0, 0);
  fill(139, 171, 203);
  stroke(0, 0, 0);

  var angleSeparation = 360 / data.length;
  var padding = 10;

  if (frameCount <= 400) {
    maxValue = constrain(frameCount * 2, 0, 400);
  } else {
    maxValue = 400;
  }
  var offset = 200;
  var nombres = [' League of Legends World', ' Dota 2 The International', ' IEM Katowice 2018', ' Overwatch League Playoffs'];
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