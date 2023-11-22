var tracingVariation = 1;
var tracingShape = "circle.";

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
  text("Hold click with the mouse and trace along the outline.", 350, 90);
  
  
  //sand
  fill('#FFF6A5')
  ellipse(170, 560, 600, 120);
  ellipse(600, 600, 600, 250);
  
  stroke(300);
  stroke('red');
  noStroke();
  
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
    
    fill('white');
    stroke('black');
    rect(350, 490, 300, 40);
    fill('black');
    noStroke();
    text("Start at the top of the " + tracingShape, 350, 495);
  
    noFill();
    stroke(1);
  
    setLineDash([25, 25]);
    circle(350, 300, 240);
    setLineDash([0, 0]);
  
    
  
//     circle(350, 180, 20);
//     circle(350,420, 20);
//     circle(230, 300, 20);
//     circle(470, 300, 20);
  
//     circle((sqrt(3)/2) * 470, 405,20);
  
//     circle((sqrt(3)/2) * 470, 195, 20);
  
//     // Detect game finished circle:
//     circle(((sqrt(3)/2) * 230) + 95, 195, 20);
  
//     circle(((sqrt(3)/2) * 230) + 95, 405, 20);
  
//     circle(((sqrt(2)/2) * 470) + 120, ((sqrt(2)/2) * 300) + 150, 20);
  
//     circle(((sqrt(2)/2) * 470) + 120, ((sqrt(2)/2) * 300) + 25, 20);
  
//     circle(((sqrt(2)/2) * 230) + 90, ((sqrt(2)/2) * 230) + 68, 20);
  
//     circle(((sqrt(2)/2) * 230) + 90, ((sqrt(2)/2) * 230) + 205,20);
    
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}