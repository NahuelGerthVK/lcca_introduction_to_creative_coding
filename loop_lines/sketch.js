let accent = "#B8BE24"; // nice green color

function setup() {
  createCanvas(900, 900);  
}

function draw() {

  background(accent);
  stroke("white");

  for (let i = 0; i < 10; i++) {

    strokeWeight(i * 5);
    line(i * 110, 0, i * 110, 900);

  }
}
