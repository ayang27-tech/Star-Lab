function setup() {
  createCanvas(600, 400);
  background(135, 206, 250); // Light blue background for the sky

  // Sun (combined shape using ellipse and triangle)
  fill(255, 223, 0); // Yellow
  noStroke();
  ellipse(500, 80, 80, 80); // Sun body
  for (let i = 0; i < 8; i++) { // Sun rays
    push();
    translate(500, 80);
    rotate(radians(45 * i));
    triangle(-10, -40, 0, -60, 10, -40);
    pop();
  }

  // House base
  fill(255, 105, 97); // Salmon color
  rect(150, 200, 200, 150); // House rectangle

  // Roof (combined shape using triangle)
  fill(139, 69, 19); // Brown color
  triangle(140, 200, 250, 100, 360, 200); // Roof

  // Door
  fill(101, 67, 33); // Darker brown
  rect(225, 280, 50, 70); // Door rectangle

}
