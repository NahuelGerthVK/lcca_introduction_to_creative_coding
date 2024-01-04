function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {

  // we can use html colors like this: "black"
  background("black");

  // or we can use hex colors like this: "#ffffff"
  fill("#ffffff");
  ellipse(225, 450, 450, 450);

  // or we can use rgb colors like this: 255, 0, 0
  fill(255, 0, 0);
  ellipse(675, 450, 450, 450);

  // we can also use colors with transparency like this: 0, 0, 255, 100
  fill(0, 0, 255, 100);
  ellipse(450, 450, 450, 450);
}
