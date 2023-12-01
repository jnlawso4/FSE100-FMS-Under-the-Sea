var tracingVariation = 1;
var tracingShape;
var shapesTraced = 0;

function tracingGame(tracingVariation) {
  
  background('#88D5FF');
  
  rectMode(CENTER);
  textAlign(CENTER);
  
  image(tracingpage, 0, 0, 700, 600);
  
  textSize(35);
  fill('black')
  //name of activity
  text("Tracing", 350, 50);
  textSize(20);
  text("Hold left click and drag to trace the shape.", 350, 85);

  // Return Button
  stroke('#FFB6C1');
  strokeWeight(4);
  fill('#f0eab6')
  rect(100, 525, 150, 75);
  
  noStroke();
  textSize(30);
  fill('black');
  text("Return", 100, 535);
  
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
      
  
    if (tracingVariation == 1) {
      tracingShape = "circle";
      textSize(20);
      text("Start at the top of the circle.", 350, 495);
      
      noFill();
      stroke(1);
      
      setLineDash([25, 25]);
      circle(350, 300, 240);
      setLineDash([0, 0]);
    }
    else if (tracingVariation == 2) {
      tracingShape = "square";
      textSize(17.5);
      text("Start at the top left of the square.", 350, 495);
      
      noFill();
      stroke(1);
          
      setLineDash([25, 25]);
      rect(350, 300, 200, 200);
      setLineDash([0, 0]);
      
      line(250, 200, 250, 210);
      line(250, 400, 260, 400);
      line(450, 400, 450, 390);
      line(450, 200, 440, 200);
    }
    else if (tracingVariation == 3) {
    tracingShape = "triangle";
    textSize(18.5);
    text("Start at the top of the triangle.", 350, 495);
    
    noFill();
    stroke(1);
    
    setLineDash([21, 21]);
    triangle(350, 200, 250, 400, 450, 400);
    setLineDash([0,0]);
      
    line(250, 400, 265, 400);
    line(450, 400, 438, 400);
    line(250, 400, 260, 380);
    line(450, 400, 440, 380);
    line(350, 200, 359, 218.5);
    }
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}