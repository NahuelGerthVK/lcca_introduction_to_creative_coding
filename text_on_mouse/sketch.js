function setup() {
  createCanvas(900, 900);
  noCursor();
  noStroke();
}

function draw() {
  background("#3C2F85");

  textSize(500);
  fill("#ffffff");
  text("Aa", mouseX + 15, mouseY - 15);

  // ellipse
  fill("#FFBA00");
  ellipse(mouseX, mouseY, 40, 40);
}
