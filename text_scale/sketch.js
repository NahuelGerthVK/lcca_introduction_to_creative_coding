function setup() {
  createCanvas(900, 900);
  noCursor();
}

function draw() {
  background("#3C2F85");

  // scale the text with our mouse (from left to right)
  textSize(mouseX);

  // text styling
  fill("white");
  noStroke();
  textAlign(CENTER, CENTER);

  // draw the text
  text("Aa", 450, 450);

  // ellipse cursor
  fill("#FFBA00");
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);

}
