let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noCursor();
}

function draw() {

  background("black");

  // line 1
  strokeWeight(mouseX);
  stroke(accent);
  line(0, 0, 900, 900);

  // line 2
  strokeWeight(mouseX * 0.5);
  stroke("white");
  line(0, 0, 900, 900);

  // mouse
  noStroke();
  ellipse(mouseX, mouseY, 90, 90);
}
