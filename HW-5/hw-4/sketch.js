function setup() {
    // Setup basic elements
    createCanvas(500, 500);
    background(255, 185, 155);

    // move everything to the center of the canvas
    translate(250, 350);

    // Main body
    push();
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
    // translate to the head position
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
