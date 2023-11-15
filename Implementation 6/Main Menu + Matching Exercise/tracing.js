function tracingGame() {
  background('#88D5FF');
  stroke('#FFB6C1');
  
  // Return Button
  fill('#f4e98a')
  rect(75, 35, 125, 50);
  noStroke();
  
  rectMode(CENTER);
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
  rect(350, 300, 350, 300);
  
  //easle
  fill('brown');
  rect(350, 145, 100, 10);
  rect(350, 130, 10, 30);
  rect(350, 455, 110, 10);
  rect(310, 490, 10, 70);
  rect(350, 490, 10, 70);
  rect(390, 490, 10, 70);
  
  //sand
  fill('#FFF6A5')
  ellipse(170, 560, 600, 120);
  ellipse(600, 600, 600, 250);
  
  stroke(300);
  stroke('red');
  noStroke();
  
  noFill();
  stroke(1);
  setLineDash([20, 20]);
  circle(350, 300, 240)
  
  setLineDash([0]);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}