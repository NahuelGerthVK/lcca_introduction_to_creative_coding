let parrot;

function preload() {
  parrot = loadImage("parrot.jpg");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background("white");
  image(parrot, mouseX, mouseY, 100, 100);
}
