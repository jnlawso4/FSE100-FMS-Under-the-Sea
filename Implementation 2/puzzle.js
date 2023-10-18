function puzzleGame() {
  background('#88D5FF');
  
  rectMode(CORNER);
  textAlign(CENTER);
  
  //top of the screen
  fill('white');
  noStroke();
  rect(0,0, 700, 150);
  stroke('black');
  line(0, 150, 700, 150);
  
  stroke('#FFB6C1');
  
  // Return Button
  rectMode(CENTER);
  fill('#f0eab6')
  rect(75, 35, 125, 50);
  noStroke();
  
  rectMode(CORNER);
  fill('black');
  noStroke();
  textSize(30);
  text("Complete the Puzzle", 350, 70);
  textSize(20);
  text("Drag and hold a puzzle piece to bring it to the correct spot", 350, 100);
  
  textSize(30);
  text("Return", 75, 45);
  
  
  //puzzle design
  //sand
  fill('#FFF6A5');
  noStroke();
  ellipse(170, 560, 600, 120);
  ellipse(600, 560, 600, 120);
  
  //crab
  fill('orange');
  ellipse(350, 400, 250, 130);
  
  stroke('orange');
  strokeWeight(5);
  line(280, 450, 200, 500);
  line(290, 450, 230, 500);
  line(300, 450, 260, 500);
  line(310, 450, 290, 505);
  
  line(410, 460, 440, 510);
  line(420, 450, 470, 500);
  line(430, 440, 500, 500);
  line(440, 430, 530, 500);
  
  rect(300, 300, 10, 40);
  rect(380, 300, 10, 40);
  
  fill('white');
  noStroke();
  circle(305, 280, 50);
  circle(385, 280, 50);
  fill('black');
  circle(305, 280, 25);
  circle(385, 280, 25);
  
  //greenery 
  fill('green')
  rect(0, 420, 20, 100);
  rect(25, 460, 20, 60);
  rect(670, 420, 20, 100);
  rect(645, 460, 20, 60);
  
  stroke('black');
  strokeWeight(2);
  line(345, 150, 345, 600);
  line(0, 400, 700, 400)
}