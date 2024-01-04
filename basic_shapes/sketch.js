// comments can be used to document and structure your code
// you can also use them to outline and sketch your code before you write it


// here starts our setup function, it only runs once!
function setup() {

  createCanvas(900, 900); // this defines the size of the canvas, width and height

}

// here starts our draw function, it runs 60 times per second!
function draw() {

  // this is our background color
  background("#FFBA00");

  fill("white");
  ellipse(width/2, height/2, 300, 300);

  stroke("#3C2F85");
  strokeWeight(10);
  line(0, 0, width, height);
  // here will be yellow sqare


  // here will be a blue triangle
}


