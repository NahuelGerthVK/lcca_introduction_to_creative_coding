let accent = "#B8BE24";
let ellipseX;
let ellipseY;

function setup() {
  createCanvas(900, 900);
  noStroke(); // no contour
  noCursor(); // hide default cursor
}

function draw() {
  background("black");

  noFill();
  stroke("white");
  strokeWeight(60);

  // ellipse
  ellipseX = map(mouseX, 0, width, 900, 0);
  ellipseY = map(mouseY, 0, height, 900, 0);
  ellipse(ellipseX, ellipseY, 600, 600);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}


