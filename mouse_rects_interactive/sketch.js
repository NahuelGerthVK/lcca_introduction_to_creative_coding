let accent = "#B8BE24";

function setup() {
  createCanvas(900, 900);
  noStroke(); // no contour
  noCursor(); // hide default cursor
}

function draw() {
  background("black");

  // rect 1
  fill("white");
  rect(40, 40, mouseX - 40, mouseY - 40);

  // rect 2
  fill(accent);
  rect(mouseX, mouseY, 900 - mouseX - 40, 900 - mouseY - 40);
}


