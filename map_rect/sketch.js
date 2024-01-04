let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noStroke();
  noCursor();
}

function draw() {
  background("black");

  fill("white");
  rect(0, 0, map(mouseX, 0, width, 0, 450), 900);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}