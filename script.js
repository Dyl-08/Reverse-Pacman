function setup() {
  createCanvas(400, 400);
}

function draw() {
  drawBackground();
  
 // Save the current transformation matrix and apply transformations
 push();
  
 // Translate to the mouse position
 translate(mouseX, mouseY);
 
 // Rotate by 50 degrees
 rotate(radians(50));
 
 // Draw the racket handle
 fill(139, 69, 19); // Brown color for the handle
 rect(-5, 8, 10, 25, 5); // Rounded rectangle for the handle

 // Draw the racket head
 fill(255, 0, 0); // Red color for the racket head
 ellipse(0, 0, 40, 48); // Ellipse for the racket head

 // Draw the edge of the racket head
 stroke(0); // Black color for the edge
 strokeWeight(2); // Thicker edge
 noFill();
 ellipse(0, 0, 40, 48); // Outline of the racket head
 
 // Restore the previous transformation matrix
 pop();
}


function drawBackground() {
  // Draw brick background on the top half
  let brickWidth = 40;
  let brickHeight = 20;
  for (let y = 0; y < height / 2; y += brickHeight) {
    for (let x = (y / brickHeight) % 2 == 0 ? 0 : -brickWidth / 2; x < width; x += brickWidth) {
      fill(178, 34, 34); // Firebrick color for bricks
      stroke(100, 50, 0); // Dark brown for brick lines
      rect(x, y, brickWidth, brickHeight);
    }
  }
  
  // Draw concrete background on the bottom half
  fill(200); // Light gray color for concrete
  noStroke();
  rect(0, height / 2, width, height / 2);

  fill(0);
  noStroke();
  rect(width / 4, height / 2 + 10, width / 2, height / 2.5);

  push();
  translate(width / 2, height / 2 + 10 + height / 2.5 / 2); // Translate to the center of the table
  rotate(radians(45)); // Rotate by 45 degrees
  fill(0, 0, 175); // Dark blue color
  stroke(0);
  strokeWeight(2);
  rect(-width / 6, -height / 12, width / 18, height / 2.5); // Draw the stool centered on the translation point
  pop();
}
