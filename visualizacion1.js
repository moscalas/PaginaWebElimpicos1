let bars = [];
let x = 100;
let c = 0;
let w = 90;
let cnv1;
let env, osc, delay;

function setup() {
  cnv1 = createCanvas(930, 600);
  cnv1.parent(visualizacionV1);
  colorMode(HSB);
  for (let i = 0; i < 3; i++) {
    bars.push(new Bar(x, c, w));
    x += 100;
    c += 45;
  }
 
  new p5.Oscillator('square');
  delay = new p5.Delay();
}

function draw() {
  background(0, 0, 80);
  for (let i = 0; i < bars.length; i++) {
    let delayTime = map(bars[0].y, height, 0, 0.00, 1.125);
    let dt = delayTime.toFixed(2);
    let feedback = map(bars[1].y, height, 0, 0.00, 1.125);
    let fb = feedback.toFixed(2);
    let lowPass = floor(map(bars[2].y, height, 0, 0, 5000));

    if (mouseIsPressed) {
      if (mouseX > bars[i].x - w / 2 && mouseX < bars[i].x + w / 2) {
        bars[i].update(mouseIsPressed);
      }
    }
    bars[i].display();
    delay.process(osc, delayTime, feedback, lowPass);

    stroke(0);
    strokeWeight(4);
    textSize(32);
    fill(0, 100, 100);
    text('League of Legends World: ' + dt, 400, 100);
    fill(45, 100, 100);
    text('Dota 2 The International: ' + fb, 400, 150);
    fill(90, 100, 100);
    text('IEM Katowice 2018: ' + lowPass, 400, 200);
  }
}

function Bar(x, c, w) {

  this.x = x;
  this.y = height - 30;
  this.c = c;
  this.w = w;
  this.update = function(bool) {
    if (bool) {
      this.y = constrain(mouseY, 50, height);
      let prevy = this.y;
    } else {
      this.y = prevy;
    }
  }

  this.display = function() {
    fill(c, 100, 100);
    rect(this.x - (this.w / 2), height, this.w, this.y - height);
  }
}