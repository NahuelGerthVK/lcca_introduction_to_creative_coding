let accent = "#B8BE24"; // nice green color

function setup() {
  createCanvas(900, 900);
  noCursor();
  noStroke();
}

function draw() {

  background(accent);
  fill("white");

  for (let i = 0; i < 10; i++) {

    rect(i * 110, 10, 50, 880);

  }
}
