function matchingGame() {
  background('#88D5FF');
  
  rectMode(CENTER);
  stroke('#FFB6C1')
  strokeWeight(2);
  fill('#f0eab6')
  rect(75, 35, 125, 50);
  textSize(30);
  noStroke();
  fill('black');
  text("Return", 75, 45);
  
  rectMode(CORNER);
  textAlign(CENTER);
  

  
  //sand
  noStroke();
  fill('#f4e98a');
  ellipse(170, 560, 600, 120);
  ellipse(600, 560, 600, 120);
  
  //title
  fill('black');
  textSize(30);
  text("Match The Shapes", 350, 50);
  textSize(20);
  text("Tap a shape and match it to the corresponding shape", 350, 100);

  stroke(1);
  strokeWeight(2);
  //shapes 1 
  fill('salmon');
  circle(200, 180, 80);
  circle(500, 450, 80);
  
  //shapes 2

  fill('#90EE90');
  rect(40, 400, 80, 80);
  rect(500, 140, 80, 80);
  
  //shapes 3
  fill('yellow')
  arc(250, 400, 80, 80, 10, 20);
  arc(450, 290, 80, 80, 10, 20);
}