let bubbles = [];
let  doritos;
let penguin = [];



function preload() {
  doritos = loadImage("penguins/doritos.png");
  for (let i = 0; i < 11; i++) {
    penguin[i] = loadImage(`penguins/penguins${i}.png`);

  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(0);
    // let kitten = random(penguin);
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
    this.penguin = random(penguin);

  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    image(doritos, mouseX-doritos.width/2, mouseY-doritos.height/2);
    image(this.penguin, this.x, this.y, this.r, this.r);


    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }


}
