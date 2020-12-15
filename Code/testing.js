let x;

function setup() {
  createCanvas(400, 400);
  x = width / 2
}

function draw() {
  background(0, 200, 200);
  if (x == 202) {
    x = 198;
  }
  else {
    x = 202;
  }
    circle(x, height/2, 50)
}