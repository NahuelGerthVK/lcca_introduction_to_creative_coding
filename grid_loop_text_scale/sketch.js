function setup() {
  createCanvas(900, 900);
  noCursor();
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#3C2F85');

  // a nested loop
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {

      fill("white");
      textSize(map(mouseX, 0, 900, 10, 200));
      text("A", i * 100, j * 100);

    }
  }

  // ellipse cursor
  fill("#FFBA00");
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}
