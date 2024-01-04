let boxWidth;
let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noStroke();
  noCursor();
}

function draw() {

  boxWidth = map(mouseX, 0, width, 0, 900);

  background("black");
  fill("white");
  ellipse(width / 2, height / 2, boxWidth, 900);

  // draw ellipse as mouse cursor
  fill(accent);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}


