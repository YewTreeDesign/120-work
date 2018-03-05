Charlene Mundel, Sect. 50

[Live Sketch Link]()


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

1.Q: Please describe what the original code is doing.

A: The code is moving around the campus and bouncing off
of the walls of the set canvas. While creating a trail as it moves indefinantly.

2.Q: Why is it working the way it is?

A: Instead of the circle wonder off of the canvas it bounces once it touches
the edge of the canvas. When the shape hits the edge of the window,
through the code you are telling it to reverses its direction.

example:

xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );

  reverse its direction by multiplying by -1


  if (xpos > width-rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height-rad || ypos < rad) {
    ydirection *= -1;
  }

  There is no escape for the ball now.




3. Q: What does each line do?


A:  Each line? If refering to line of code it's setting a collision point where
the ball would bounce off of or move in a different/opposite direction.

4. Q: How can you make the ball change direction?

This sortof plays on the same as question 2.

If you just have xpos = xpos + ( xspeed * xdirection );
it would bounce off of one of the walls of the canvas but the problem is that
it can still vanish through the other wall.

unless this question is refering to clicking the ball with the mouse that is another
way to change it's direction.
judging by function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

}

It would run on the same concept if it were to be in contact of the edge of the
canvas, but instead it's by the click of a mouse.


-->


## How did you alter the sketch?

<!--
5. Q:Please describe how and why you changed the sketch?

A: I randomnized my desired color and i removed the stroke for the circle. I also changed
the sizes of the circles. If my mouse is anywhere near the center of the canvas
the circles would get smaller, if away from it stays huge.

I like how this turned out because of the interactive part I gave it, it reacts to my
crusor with out even clicking it. I also enjoy the ray of colors it gives, aswell the illusion of dimension
-->
