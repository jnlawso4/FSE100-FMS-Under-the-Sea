var circle1Stroke = 'black';
var circle1Weight = 3;

var circle2Stroke = 'black';
var circle2Weight = 3;

var rect1Stroke = 'black';
var rect1Weight = 3;

var rect2Stroke = 'black';
var rect2Weight = 3;

var ycircle1Stroke = 'black';
var ycircle1Weight = 3;

var ycircle2Stroke = 'black';
var ycircle2Weight = 3;

function updateStroke(num, clr){
  switch(num) {
    
    case num = 1:
      if (clr == 0) {
        circle1Stroke = 'purple';
        circle1Weight = 6;
      }
      else {
        circle1Stroke = 'black';
        circle1Weight = 3;
      }
      break;
      
    case num = 2:
      if (clr == 0) {
        circle2Stroke = 'purple';
        circle2Weight = 6;
      }
      else {
        circle2Stroke = 'black';
        circle2Weight = 3;
      }
      break;
    
    case num = 3:
      if (clr == 0) {
        rect1Stroke = 'orange';
        rect1Weight = 6;
      }
      else {
        rect1Stroke = 'black';
        rect1Weight = 3;
      }
      break;
    
    case num = 4:
      if (clr == 0) {
        rect2Stroke = 'orange';
        rect2Weight = 6;
      }
      else {
        rect2Stroke = 'black';
        rect2Weight = 3;
      }
      break;
    
    case num = 5:
      if (clr == 0) {
        ycircle1Stroke = 'blue';
        ycircle1Weight = 6;
      }
      else {
        ycircle1Stroke = 'black';
        ycircle1Weight = 3;
      }
      break;
    
    case num = 6:
      if (clr == 0) {
        ycircle2Stroke = 'blue';
        ycircle2Weight = 6;
      }
      else {
        ycircle2Stroke = 'black';
        ycircle2Weight = 3;
      }
      break;
  }
}

function matchingGame() {
  background('#88D5FF');
  
  rectMode(CENTER);
  textAlign(CENTER);
  
  stroke('#FFB6C1')
  strokeWeight(2);
  fill('#f0eab6')
  rect(75, 35, 125, 50);
  textSize(30);
  noStroke();
  fill('black');
  text("Return", 75, 45);
  
 
  

  
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
  
  // Score
  textSize(25);
  text("Score:", 575, 50);
  text(scoreValue, 635, 50);
  

  stroke(circle1Stroke);
  strokeWeight(circle1Weight);
  
  // Circles 
  fill('salmon');
  circle1 = circle(200, 180, 80);
  
  stroke(circle2Stroke);
  strokeWeight(circle2Weight);
  
  circle2 = circle(500, 450, 80);
  
  
  stroke(rect1Stroke);
  strokeWeight(rect1Weight);
  
  // Rectangles
  fill('#90EE90');
  rect1 = rect(80, 440, 80, 80);
  
  stroke(rect2Stroke);
  strokeWeight(rect2Weight);
  
  rect2 = rect(540, 180, 80, 80);
  
  stroke(ycircle1Stroke);
  strokeWeight(ycircle1Weight);
  
  // Yellow Circles
  fill('yellow')
  ycircle1 = arc(250, 400, 80, 80, 10, 20);
  
  stroke(ycircle2Stroke);
  strokeWeight(ycircle2Weight);
  
  ycircle2 = arc(450, 290, 80, 80, 10, 20);
  
}

