let accent = "#B8BE24"; // nice green color

function setup() {
  createCanvas(900, 900);
  noStroke();
  noCursor(); // hide the cursor
}

function draw() {

  background(accent);

  // draw cursor
  fill("white");
  ellipse(mouseX, mouseY, 50, 50);

  // draw text
  fill("black");
  textSize(50);
  textAlign(LEFT, CENTER);
  text("x(" + mouseX + ") y(" + mouseY+ ")", mouseX + 40, mouseY);
}