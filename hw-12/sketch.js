float x;
float y;
float d;

FloatList allXs;
FloatList allYs;
FloatList allDs; //added

void setup() {

  frameRate(8);

  background(255);
  size(500, 500);

  allXs=new FloatList();
  allYs=new FloatList();
  allDs=new FloatList(); //added
}

void draw() {

  boolean found=true;

  while (found==true) {
    found=false;
    x=random(width);
    y=random(height);
    d=random(35, 65);
    for (int i=0; i<allXs.size(); i++) {
      float fnx=allXs.get(i);
      float fny=allYs.get(i);
      float fnd=allDs.get(i); //added

      if (dist(fnx, fny, x, y)<(d/2+fnd/2)) { //added
        found=true;
      }
    }
    allXs.append(x);
    allYs.append(y);
    allDs.append(d); //added
  }


  for (int i=0; i<allXs.size(); i++) {
    float fnx=allXs.get(i);
    float fny=allYs.get(i);
    float fnd=allDs.get(i); //added

    fill(50);
    noStroke();
    ellipse(x, y, d, d);

    fill(255);
    stroke(50);
    ellipse(x-5, y-5, d, d);
  }
}
