function activityPage() { 
  background('#88D5FF');
  
  rectMode(CENTER);
  
  // Pink Fish
  fill('pink');
  stroke('black');
  strokeWeight(0.5);
  arc(325, 450, 60, 30, PI, -PI)
  
  fill('pink');
  stroke('black');
  strokeWeight(0.5);
  triangle(355, 450, 365, 468, 369, 430);
  
  fill('black');
  noStroke();
  arc(305, 450, 6, 6, PI, -PI)
  
  
  // Left Water Shadow
  fill('#69b6df');
  noStroke();
  arc(70, 580, 600, 300, PI, TWO_PI)
  
  // Right Water Shadow
  fill('#69b6df');
  noStroke();
  arc(700, 500, 650, 200, PI, TWO_PI)
  
  // Back Sand
  fill('#f4e98a');
  stroke('black');
  strokeWeight(1);
  triangle(700, 450, 700, 600, 150, 510);
  
  
  // Front Sand
  fill('#FFF6A5');
  stroke('black');
  strokeWeight(1);
  triangle(0, 475, 0, 600, 700, 600);
  
  // Kelp
  strokeWeight(3);
  stroke('#8dff8f');
  line(50, 480, 70, 500);
  line(70, 500, 70, 480);
  line(70, 480, 53, 460);
  line(53, 460, 80, 430);
  line(80, 430, 65, 400);
  line(65, 400, 65, 430);
  line(65, 430, 35, 460);
  line(35, 460, 50, 480);
  
  // Rocks
  fill('lightgrey');
  stroke('grey');
  arc(150, 520, 100, 80, PI, TWO_PI);
  line(70, 520, 200, 520);
  fill('lightgrey');
  stroke('grey');
  arc(100, 540, 100, 80, PI, TWO_PI);
  line(50, 540, 150, 540);
  
  // Orange fish
  fill('orange');
  stroke('black');
  strokeWeight(0.5);
  arc(445, 430, 60, 30, PI, -PI)
  
  fill('orange');
  stroke('black');
  strokeWeight(0.5);
  triangle(495, 413, 495, 440, 475, 430);
  
  fill('black');
  noStroke();
  arc(425, 430, 6, 6, PI, -PI)
  
  image(activitypage, 0, 0, 700,600);
  
  image(game1,40, 150,185,185);
  image(game2, 350 - (185/2), 150, 185, 185);
  image(game3, 475, 150, 185, 185);
  
//   // Settings icon
//   fill('grey');
//   noStroke();
//   circle(620, 60, 70);
  
//   fill('#88D5FF');
//   noStroke();
//   circle(620, 60, 35);
  
//   fill('#88D5FF');
//   circle(620, 30, 13);
  
//   fill('#88D5FF');
//   circle(643, 40, 13);
  
//   fill('#88D5FF');
//   circle(650, 60, 13);
  
//   fill('#88D5FF');
//   circle(646, 83, 13);
  
//   fill('#88D5FF');
//   circle(620, 90, 13);
  
//   fill('#88D5FF');
//   circle(595, 83, 13);
  
//   fill('#88D5FF');
//   circle(590, 60, 13);
  
//   fill('#88D5FF');
//   circle(597, 38, 13);
  
  // Return Button
  
  fill('#f0eab6');
  stroke('#FFB6C1');
  strokeWeight(4);
  rect(100, 525, 150, 75);
  noStroke();
  textSize(buttonTextSize);
  fill('black');
  text('Return', 100, 535);

  
  fill('black');
  textSize(titleTextSize - 10);
  text('Activities', 350, 100);
  
  textSize(buttonTextSize + 10);
  text('Tracing', 132, 380);
  text('Puzzle', 350, 380);
  text('Matching', (475 + 92.5), 380);
  
}