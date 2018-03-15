

// Pendulum

// Gravity Force = Mass * Gravitational Constant;
// Pendulum Force = Gravity Force * sine(theta)
// Angular Acceleration = Pendulum Force / Mass = gravitational acceleration * sine(theta);

// Note this is an ideal world scenario with no tension in the
// pendulum arm, a more realistic formula might be:
// Angular Acceleration = (g / R) * sine(theta)

// For a more substantial explanation, visit:
// http://www.myphysicslab.com/pendulum1.html
let p;
var bg;
var yew1;
var yew2;

function preload(){
  yew1=loadImage('assets/yew1.png');
  yew2=loadImage('assets/yew2.png');

}

function setup() {

  createCanvas(800, 600);
  // Make a new Pendulum with an origin position and armlength
  p = new Pendulum(createVector(width / 2, 0), 300);

}

function draw() {
  background(255, 153, 102);
  p.go();
}

function mousePressed() {
  p.clicked(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}
