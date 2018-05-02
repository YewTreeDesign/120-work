let seal;
let boop;

function preload(){

seal = new Bubble loadImage('seals/seal.png');

boop = new Bubble loadImage('seals/boop.png');

}

function setup() {
createCanvas(600, 400);

}

function draw() {
background(0);

if (seal.intersects(boop)) {
background(200, 247, 247);
}

seal.show();
boop.show();
seal.move();
boop.x = mouseX;
boop.y = mouseY;

}

class Bubble {
constructor(x, y, r, img) {
this.x = x;
this.y = y;
this.r = r;
this.seal= img;
}

intersects(other) {
  let d = dist(this.x, this.y, other.x, other.y);
  let intersect = (d < this.r + other.r);

  if (intersect) {
    this.seal = boop;
    return true;
   } else {
   return false;
  *and reset it to regular seal*
}

contains(px, py) {
let d = dist(px, py, this.x, this.y);
if (d < this.r) {
return true;
} else {
return false;
}
}

move() {
this.x = this.x + random(-2, 2);
this.y = this.y + random(-2, 2);
}

show() {
image(this.seal, this.x, this.y, this.r);
}
}
