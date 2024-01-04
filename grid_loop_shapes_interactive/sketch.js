let color1 = "#B8BE24";

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(color1);

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {

      noStroke();
      fill("white");
      ellipse(i * 100, j * 100, map(mouseX, 0, 900, 0, 40), map(mouseX, 0, 900, 0, 40));

      fill("black");
      rect(i * 100, j * 100, 100, 20);

    }
  }
}
