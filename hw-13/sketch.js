let bubbles = [];

let angerseal;
let seal = [];

function preload() {
  angerseal = loadImage('seals/angerseal.png');

  for (let i = 0; i < 6; i++) {
    seal[i] = loadImage(`seals/seals${i}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    let x = 25 + 218 * i;
    let y = random(height);
    let r = (117);

    // let kitten = random(seals);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();


  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.seal = random(seal);

  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.seal = angerseal; //random(seal);
    }
  }

  move() {
    this.x = this.x + random(-2, 1);
    this.y = this.y - 3;

    if (this.y < 0) {
      this.y = height;
    }
  }

  show() {
    image(this.seal, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
