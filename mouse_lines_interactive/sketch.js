let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noStroke(); // no contour
  noCursor(); // hide default cursor
}

function draw() {
  background(accent);

  noFill();
  stroke("white");
  strokeWeight(60);

  // line 1 (from top left to mouse)
  line(0, 0, mouseX, mouseY);

  // line 2 (from top right to mouse)
  line(width, 0, mouseX, mouseY);

  // line 3 (from bottom left to mouse)
  line(0, height, mouseX, mouseY);

  // line 4 (from bottom right to mouse)
  line(width, height, mouseX, mouseY);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}


