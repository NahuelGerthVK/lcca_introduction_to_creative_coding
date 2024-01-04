let accent = "blue";

function setup() {
  createCanvas(900, 900);
  noCursor();
}

function draw() {
  background("#FFBA00");
  fill("white");
  //noStroke();

  // loop
  for (let i = 0; i < 100; i++) {
    rect(i * 5, i * 10, mouseX, mouseY);
  }

  // ellipse as mouse cursor
  fill("black");
  ellipse(mouseX, mouseY, 40, 40);
}
