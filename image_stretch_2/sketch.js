let parrot;

function preload() {
  parrot = loadImage("parrot.jpg");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  image(parrot, 0, 0, mouseX, mouseY);
}
