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
  for(var1=0;i<3;1++){
    logolable[i]=loadImage('images/logolable'+1+'.png')

}
function mousePressed(){
  var r= (random(0, logolable.length));
  var b = new Bubble(mouseX, mouseY, logolable[r]);
  bubbes.push(b);
}
