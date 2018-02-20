/**
 * Creepy Spinning Variable Person
 *
 */

function setup() {
  // Setup basic elements
  createCanvas(500, 500);
  background(255, 185, 155);
}

let headAngle = 0;
let headRotationRate = 0;
let armAngle = 0;
let headWidth = 80;
let headHeight = 40;

function draw() {
    // erase every frame
    background( 'rgb(56, 177, 255)' );
    // turn the cursor off
    noCursor();

    // UPDATE VALUES
    // base head rotation rate on mouseY pos
    headRotationRate = (mouseY * 0.1) - 20;
    // update head angle,
    // to equal itself plus headRotationRate
    headAngle = headAngle + headRotationRate;
    // set the arm to spin at a constant rate
    armAngle = armAngle - 3;


    // *****************************
    // PERSON SANDBOX
    // *****************************
    push();

    // make the person follow the mouse.
    translate( mouseX, mouseY );

    // draw the spinning forarm
    push();
    // left arm
    push();
    // move the center to facilitate rotate
    translate( -10, -20 );
    // rotate, based on mouseX position
    rotate( radians( mouseX) );
    // draw arm and hand
    pop();


        // Main body
        push();
        //SPINNNN
        translate( -10, -20 );
        rotate( radians( mouseX) );
        smooth();
        strokeWeight(0);
        fill(250,250,250);
        triangle(65, -40, 1, -160, -65, -40);
        strokeWeight(3);


        //horns and string

        line(1, -1000, 1, -140);
        strokeWeight(0);
        fill(0,100,124);
        triangle(60, -190, 1, -100, -60, -190);

        // Head
        push();
        strokeWeight(0);
        translate(0, -150);
        fill(255, 255, 255);
        ellipse(0, 0, 100, 100);


        // Eyes
        strokeWeight(0);
        fill(187,224,224);
        ellipse(-35, 15, 15, 11);
        fill(0,100,124);
        ellipse(-23, 1, 20, 28);

        fill(187,224,224);
        ellipse( 35, 15, 15, 11);
        fill(0,100,124);
        ellipse( 23, 1, 20, 28);
        pop();

        strokeWeight:(5);

        // Mouth
        push();
        strokeWeight(0);
        fill(0,100,124);
        arc(0, -129, 21, 20, 0, PI, CHORD);
        pop();

        // Naming

        push();
        translate( 0, 50 );
        textAlign(CENTER);
        textSize(20);
        textFont("Acumin Pro Thin");
        text("Yewlin Monster", 0, 27);
        textSize(9);
        text("By Charlene Mundel",0,40);
        textSize(15);
        text("てるてるぼうず",0,55);
        textFont("Yu Gothic UI Light");
        pop();

    }
