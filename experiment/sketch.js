

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


function setup() {
  bg = loadImage("assets/rain.png");
  createCanvas(1000, 800);
  // Make a new Pendulum with an origin position and armlength
  p = new Pendulum(createVector(width / 2, 0), 300);

}

function draw() {
  background(bg);
  p.go();
}

function mousePressed() {
  p.clicked(mouseX, mouseY);
}

function mouseReleased() {
  p.stopDragging();
}
