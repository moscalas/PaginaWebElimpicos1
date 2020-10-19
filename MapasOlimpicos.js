

let boop, xray1, xray2, xray3, xray4, xray5, msk, cnv;
let showAll = !true; // set to "true" to show all images and mask.
tamanoMira = 100;
function preload() {
  boop = loadImage('assets/MapamundiO.jpg');
  xray1 = loadImage('assets/MapamundiAmerica.jpg');
  xray2 = loadImage('assets/MapamundiEuropa.jpg');
  xray3 = loadImage('assets/MapamundiAsia.jpg');
  xray4 = loadImage('assets/MapamundiAfrica.jpg');
  xray5 = loadImage('assets/MapamundiOceania.jpg');
  xray = boop;
}

function setup() {
  cnv= createCanvas(boop.width*(1+showAll*3), boop.height);
  msk = createGraphics(boop.width, boop.height);
  msk.noStroke();
  msk.fill(0);
  noLoop();
  noCursor();
  cnv.parent(MapaOlimpico);
  btn1 = createButton('America');
  btn2 = createButton('Europa');
  btn3 = createButton('Asia'); 
  btn4 = createButton('Africa');
  btn5 = createButton('Oceania');  
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  btn2.mousePressed(btnPressed2);
  btn3.mousePressed(btnPressed3);
  btn4.mousePressed(btnPressed4);
  btn5.mousePressed(btnPressed5);


  //se crea un elemento que agrupa todos los botones
  buttons = selectAll('button');
  //a los botones se les da caracteristicas
  for (let i = 0; i < buttons.length; i++) 
  {
    //que tengan este tamaño
    buttons[i].size(70, 20);
    //que se ubiquen de esta forma
    buttons[i].parent(MapaOlimpico);
  }
}

function copySrcChannelToDstAlpha(src, channel, dst) {
  // This function copies any channel from source to the alpha channel of destination.
  // Src and dst doesn't need to have the same size.
  // As of p5.js v. 0.8.0, mask() works on images already with an alpha channel,
  // while on Processing 1.4.8 it copies the blue to the alpha channel...
  src.loadPixels();
  dst.loadPixels();
  let maxX = min(src.width,  dst.width ) * 4;
  let maxY = min(src.height, dst.height);
  let y, x, srcOfs, dstcOfs;
  for (y = 0; y < maxY; y++) {
    srcOfs = y * 4 * src.width + channel;
    dstOfs = y * 4 * dst.width + 3;
    for (x = 0; x < maxX; x += 4) {
      dst.pixels[x + dstOfs] = src.pixels[x + srcOfs];
    }
  }
  dst.updatePixels();
}

function draw() {
  if (showAll)
    background(255);
  msk.background(255);
  msk.ellipse(mouseX, mouseY, tamanoMira, tamanoMira);
  copySrcChannelToDstAlpha(msk, 0, boop);
  if (showAll) {
    image(msk,  boop.width*1, 0);
    image(xray, boop.width*2, 0);
    image(boop, boop.width*3, 0);
  }
  image(xray, 0, 0);
  image(boop, 0, 0);
}

function mouseMoved() {
  redraw();
}
function btnPressed1() 
{
  xray = xray1;
  tamanoMira = 530;
}
function btnPressed2() 
{
  xray = xray2;
  tamanoMira = 550;
}
function btnPressed3() 
{
  xray = xray3; 
  tamanoMira = 520;
}
function btnPressed4() 
{
  xray = xray4; 
  tamanoMira = 100;
}
function btnPressed5() 
{
  xray = xray5; 
  tamanoMira = 250;
}