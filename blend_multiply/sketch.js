function setup() {
  createCanvas(900, 900);
  noStroke();
  noCursor();
}

function draw() {

  blendMode(BLEND);
  background("white");

  fill("red");
  ellipse(width / 2, height / 2, 500, 500);

  blendMode(MULTIPLY);
  fill("blue");
  ellipse(mouseX, mouseY, 500, 500);
}