// a simple form of animation using the sin() function
// decide which value you want to animate (eg. the ellipse size)
// then use this expression: map(sin(frameCount * 0.01), -1, 1, 0, 100

// make it faster? — change the 0.01 to a bigger number
// make it slower? — change the 0.01 to a smaller number
// make the circle grow bigger? — change the 500 to a bigger number

function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {
  background("#FFBA00");

  fill(255);
  ellipse(450, 450, map(sin(frameCount * 0.05), -1, 1, 0, 500));
}
