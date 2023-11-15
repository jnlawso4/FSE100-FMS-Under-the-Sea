function tracingGame() {
  background('#88D5FF');
  stroke('#FFB6C1');
  
  // Return Button
  rect(75, 35, 125, 50);
  noStroke();
  
  rectMode(CORNER);
  textAlign(CENTER);
  
  textSize(30);
  fill('black')
  //name of activity
  text("Tracing", 350, 50);
  
  //back button
  text("Return", 75, 45);
  
  //instructions
  textSize(20);
  text("Drag your finger along the outline shape and word", 350, 100);
  
  //canvas
  noStroke();
  fill('white');
  rect(210, 200, 300, 250);
  
  //easle
  fill('brown');
  rect(310, 190, 100, 10);
  rect(360, 160, 10, 30);
  rect(310, 450, 110, 10);
  rect(360, 460, 10, 60);
  rect(330, 460, 10, 60);
  rect(390, 460, 10, 60);
  
  //sand
  fill('#FFF6A5')
  ellipse(170, 560, 600, 120);
  ellipse(600, 600, 600, 250);
  
  stroke(300);
  stroke('red');
  noStroke();
  
  rectMode(CENTER);
  
}