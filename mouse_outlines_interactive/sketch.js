let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noStroke(); // no contour
  noCursor(); // hide default cursor
}

function draw() {
  background("black");

  noFill();
  stroke("white");
  strokeWeight(map(mouseX, 0, width, 0, 500));

  // circle 1
  ellipse(225, 225, 450, 450);

  // circle 2
  ellipse(675, 225, 450, 450);

  // circle 3
  ellipse(225, 675, 450, 450);

  // circle 4
  ellipse(675, 675, 450, 450);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 90, 90);
}


