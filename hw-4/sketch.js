var bubbles=[];
var logolable;

function setup(){
  createCanvas(600,800);
}
function draw(){
  background(0);
  for (var i=bubbles.length-1; i >=0; i--){
    bubbles[i].update();
    bubbles[i] display;
  }

}
function preload(){
  logolable[1]=loadImage('assets/logolable1.png');
  logolable[2]=loadImage('assets/logolable2.png');
  logolable[3]=loadImage('assets/logolable3.png');
  logolable[4]=loadImage('assets/logolable4.png');
  logolable[5]=loadImage('assets/logolable5.png');

}
function mousePressed(){
  var r= (random(0, logolable.length));
  var b = new Bubble(mouseX, mouseY, logolable[r]);
  bubbes.push(b);
}
