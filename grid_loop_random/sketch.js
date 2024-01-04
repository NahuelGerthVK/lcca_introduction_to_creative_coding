let accent = "#B8BE24"; // nice green color
let sizes = []; // this will be our random sizes 

function setup() {
  createCanvas(900, 900);
  noStroke();

  // fill array with random sizes
  for (let i = 0; i < 100; i++) {
    sizes[i] = random(5, 50); // random value between 5 and 50
  }
}

function draw() {

  background(accent);
  fill("white");

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let index = j * 10 + i;
      ellipse(i * 100, j * 100, sizes[index], sizes[index]);
    }
  }
}