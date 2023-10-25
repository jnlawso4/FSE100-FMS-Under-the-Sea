// Home Screen
function homePage() {
  background('#88D5FF');
  
  // Bubbles
  fill('#88D5FF');
  stroke('#c0e9ff');
  strokeWeight(1);
  circle(50, 50, 70);
  
  fill('#88D5FF');
  stroke('#c0e9ff');
  strokeWeight(1);
  circle(90, 190, 30);
  
  fill('#88D5FF');
  stroke('#c0e9ff');
  strokeWeight(1);
  circle(40, 130, 50);
  
  
  // Left Water Shadow
  fill('#69b6df');
  noStroke();
  arc(70, 580, 600, 300, PI, TWO_PI);
  
  // Right Water Shadow
  fill('#69b6df');
  noStroke();
  arc(700, 500, 650, 200, PI, TWO_PI);
  
  // Back Sand
  fill('#f4e98a');
  stroke('black');
  strokeWeight(1);
  triangle(700, 450, 700, 600, 150, 510);
  
  fill('#f29dd0');
  stroke('magenta');
  strokeWeight(2);
  triangle(525, 400, 625, 400, 575, 500);
  
  fill('lightgrey');
  stroke('grey');
  arc(550, 510, 100, 80, PI, TWO_PI);
  line(500, 510, 600, 510);
  
  fill('lightgrey');
  stroke('grey');
  arc(500, 520, 100, 80, PI, TWO_PI);
  line(450, 520, 550, 520);
  
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
  
  // Settings Icon
  fill('grey');
  noStroke();
  circle(620, 60, 70);
  
  fill('#88D5FF');
  noStroke();
  circle(620, 60, 35);
  
  fill('#88D5FF');
  circle(620, 30, 13);
  
  fill('#88D5FF');
  circle(643, 40, 13);
  
  fill('#88D5FF');
  circle(650, 60, 13);
  
  fill('#88D5FF');
  circle(646, 83, 13);
  
  fill('#88D5FF');
  circle(620, 90, 13);
  
  fill('#88D5FF');
  circle(595, 83, 13);
  
  fill('#88D5FF');
  circle(590, 60, 13);
  
  fill('#88D5FF');
  circle(597, 38, 13);
  
  // Buttons
  stroke('#FFB6C1');
  strokeWeight(2);
  fill('#f4e98a');
  rect(350,400,200,100);
  fill('black');
  noStroke();
  textSize(buttonTextSize);
  text('Play', 350,405);
  
  // Title
  fill('#ed95d9');
  stroke(1);
  strokeWeight(3);
  textSize(titleTextSize);
  text('Under the Sea', 350, 150);
  
}