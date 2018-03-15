// Pendulum

// A Simple Pendulum Class
// Includes functionality for user can click and drag the pendulum

// This constructor could be improved to allow a greater variety of pendulums


var yew;
var yew1;
var yew2;

function preload(){

yew=loadImage('assets/yew.png');
yew1=loadImage('assets/yew1.png');
yew2=loadImage('assets/yew2.png');
}


class Pendulum {



  constructor(origin_, r_) {
    // Fill all variables
    this.origin = origin_.copy();
    this.position = createVector();
    this.r = r_;
    this.angle = PI / 5;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995; // Arbitrary damping
    this.ballr = 100.0; // Arbitrary ball radius

    this.dragging = false;
  }


  go() {
    this.update();
    this.drag(); // for user interaction
    this.display();
  }

  // Function to update position
  update() {
    // As long as we aren't dragging the pendulum, let it swing!
    if (!this.dragging) {
      let gravity = 0.4; // Arbitrary constant
      this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle); // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
      this.aVelocity += this.aAcceleration; // Increment velocity
      this.aVelocity *= this.damping; // Arbitrary damping
      this.angle += this.aVelocity; // Increment angle
    }
  }

  display() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0); // Polar to cartesian conversion
    this.position.add(this.origin); // Make sure the position is relative to the pendulum's origin

    stroke(0, 102, 102);
    strokeWeight(2);
    // Draw the arm
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    imageMode(CENTER);
    if (this.dragging) image(yew1);
    // Draw the ball
    image(yew,this.position.x, this.position.y,);
  }


  // The methods below are for mouse interaction

  // This checks to see if we clicked on the pendulum ball
  clicked(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.ballr) {
      this.dragging = true;
    }
  }

  // This tells us we are not longer clicking on the ball
  stopDragging() {
    this.aVelocity = 0; // No velocity once you let go
    this.dragging = false;
  }

  drag() {
    // If we are draging the ball, we calculate the angle between the
    // pendulum origin and mouse position
    // we assign that angle to the pendulum
    if (this.dragging) {
      let diff = p5.Vector.sub(this.origin, createVector(mouseX, mouseY)); // Difference between 2 points
      this.angle = atan2(-1 * diff.y, diff.x) - radians(90); // Angle relative to vertical axis
    }
  }
}
