var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("assets/des.jpg");
  frameRate(60);

}

function setup() {
  createCanvas(636, 848);
  smallPoint = 0.5;
  largePoint = 4;
  imageMode(CENTER);
  noStroke();
  background(0);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width)*1);
  var y = floor(random(img.height)*1);
  var bx = ceil(map(mouseX, 0, 100, 0, 5));//pixles get smaller if you move it to the left
  var pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);

}
