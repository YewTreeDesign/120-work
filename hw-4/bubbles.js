function Bubble(x,y,img){
  this. x=x;
  this. y=y;
  this.img=img;

  this.display=function(){
    stroke(100);
    fill(200,100);
    image(this.x, this.y, 48,48);
  }
this.update=function(){
  this.x=this.x+random(-1,1);
  this.y=this.y+random(-1,1);
}
