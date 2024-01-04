let accent = "#B8BE24"; // nice green color

function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {

  background(accent);
  fill("white");

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {

      ellipse(i * 100, j * 100, 20, 20);

    }
  }
}