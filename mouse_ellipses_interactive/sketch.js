let accent = "#B8BE24";
let ellipseSize1;
let ellipseSize2;

function setup() {
  createCanvas(900, 900);
  noStroke(); // no contour
  noCursor(); // hide default cursor
}

function draw() {
  background("black");

  fill("white");

  // ellipse 1
  ellipseSize1 = map(mouseX, 0, width, 20, 800);
  ellipse(225, 450, ellipseSize1, 600);

  // ellipse 2
  ellipseSize2 = map(mouseX, 0, width, 800, 20);
  ellipse(675, 450, ellipseSize2, 600);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}


