var circle1Stroke = 'black';
var circle1Weight = 3;
var circle1posx = 0;
var circle1posy = 0;

var circle2Stroke = 'black';
var circle2Weight = 3;
var circle2posx = 0;
var circle2posy = 0;

var rect1Stroke = 'black';
var rect1Weight = 3;
var rect1posx = 0;
var rect1posy = 0;

var rect2Stroke = 'black';
var rect2Weight = 3;
var rect2posx = 0;
var rect2posy = 0;

var ycircle1Stroke = 'black';
var ycircle1Weight = 3;
var ycircle1posx = 0;
var ycircle1posy = 0;

var ycircle2Stroke = 'black';
var ycircle2Weight = 3;
var ycircle2posx = 0;
var ycircle2posy = 0;

var tri1Stroke = 'black';
var tri1Weight = 3;
var tri1posx = 0;
var tri1posy = 0;
var tri1centerx = 0;
var tri1centery = 0;

var tri2Stroke = 'black';
var tri2Weight = 3;
var tri2posx = 0;
var tri2posy = 0;
var tri2centerx = 0;
var tri2centery = 0;

var doneMatching = 0;

let gameVariations = [1, 2, 3];

var gameVar = 0;

var matchingBegin = false;
var matchingOpen = false; 


function makeRandom() {
  gameVar = random(gameVariations);
  console.log(gameVar);
}

function matchingGame(variation) {
  background('#88D5FF');
  
  rectMode(CENTER);
  textAlign(CENTER);
  
  switch(variation) {
    case 1:
      circle1posx = 200;
      circle1posy = 180;
      
      circle2posx = 500;
      circle2posy = 450;
      
      ycircle1posx = 250;
      ycircle1posy = 400;
      
      ycircle2posx = 450;
      ycircle2posy = 290;
      
      rect1posx = 80;
      rect1posy = 440;
      
      rect2posx = 540;
      rect2posy = 180;
      
      tri1posx = 30;
      tri1posy = 310;
      
      tri2posx = 590;
      tri2posy = 330;
    break;
    
    case 2:
      circle1posx = 240;
      circle1posy = 410;
      
      circle2posx = 500;
      circle2posy = 200;
      
      ycircle1posx = 180;
      ycircle1posy = 200;
      
      ycircle2posx = 590;
      ycircle2posy = 300;
      
      rect1posx = 370;
      rect1posy = 400;
      
      rect2posx = 100;
      rect2posy = 310;
      
      tri1posx = 300;
      tri1posy = 280;
      
      tri2posx = 480;
      tri2posy = 420;
    break;
    
    case 3:
      circle1posx = 100;
      circle1posy = 430;
      
      circle2posx = 500;
      circle2posy = 400;
      
      ycircle1posx = 240;
      ycircle1posy = 210;
      
      ycircle2posx = 610;
      ycircle2posy = 360;
      
      rect1posx = 300;
      rect1posy = 380;
      
      rect2posx = 610;
      rect2posy = 240;
      
      tri1posx = 100;
      tri1posy = 310;
      
      tri2posx = 420;
      tri2posy = 280;
    break;
  }
  
  // Return Button
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
  
  // Circle 1
  
  circle(circle1posx, circle1posy, 80);
    
  stroke(circle2Stroke);
  strokeWeight(circle2Weight);
  
  // Circle 2
  
  
  circle(circle2posx, circle2posy, 80);
  
  if (circlesClicked >= 3) {
    updateStroke(1,2);
    updateStroke(2,2);
  }
  
  stroke(rect1Stroke);
  strokeWeight(rect1Weight);
  
  // Rectangles
  fill('#90EE90');
  
  // Rectangle 1
  rect(rect1posx, rect1posy, 80, 80);
  
  stroke(rect2Stroke);
  strokeWeight(rect2Weight);
  
  //  Rectangle 2
  
  rect(rect2posx, rect2posy, 80, 80);
  
  if (rectClicked >= 3) {
    updateStroke(3,2);
    updateStroke(4,2);
  }
  
  stroke(ycircle1Stroke);
  strokeWeight(ycircle1Weight);
  
  // Yellow Circles
  fill('yellow')
  
  // Y Circle 1
  
  arc(ycircle1posx, ycircle1posy, 80, 80, 10, 20);
  
  stroke(ycircle2Stroke);
  strokeWeight(ycircle2Weight);
  
  // Y Circle 2
  
  arc(ycircle2posx, ycircle2posy, 80, 80, 10, 20);

  if (ycirclesClicked >= 3) {
    updateStroke(5,2);
    updateStroke(6,2);
  }
  
  // Triangles
  fill('#ffb347');
  
  stroke(tri1Stroke);
  strokeWeight(tri1Weight);
  
  
  triangle(tri1posx, tri1posy, tri1posx+40, tri1posy-70, tri1posx+80, tri1posy);
  
  stroke(tri2Stroke);
  strokeWeight(tri2Weight)
  
  triangle(tri2posx, tri2posy, tri2posx+40, tri2posy-70, tri2posx+80, tri2posy);
  
  if (triClicked >= 3) {
    updateStroke(7,2);
    updateStroke(8,2);
  }
  
  if (doneMatching == 1) {
    stroke('#FFB6C1')
    strokeWeight(4);
    fill('#D3D3D3')
    rect(350, 300, 450, 350);
    
    noStroke();
    fill('black');
    textSize(50);
    text("Congratulations!", 350, 200);
    
    textSize(25);
    text("You matched all the shapes.", 350, 250);
    
    fill('#f0eab6');
    strokeWeight(2);
    stroke("#FFB6C1");
    rect(350, 430, 125, 50);
    noStroke();
    
    fill('black');
    textSize(30);
    text("Okay", 350, 440);
     
    
  }
  
//   if (matchingBegin == false && matchingOpen == true) {
//     // fill('#D3D3D3');
//     stroke('#FFB6C1');
//     strokeWeight(2);
//     // rect(350, 300, 320, 220);
    
//     fill('#f0eab6')
//     rect(350,300, 200, 100);
//     noStroke();
    
//     fill('black');
//     textSize(30);
//     text("Begin", 350,310);
//   }
}

function centroid() {
      tri1centerx = ((tri1posx) + (tri1posx + 40) + (tri1posx + 80)) / 3;
      
      tri2centerx = ((tri2posx) + (tri2posx + 40) + (tri2posx + 80)) / 3;

      tri1centery = ((tri1posy) + (tri1posy - 70) + (tri1posy)) / 3;
      
      tri2centery = ((tri2posy) + (tri2posy - 70) + (tri2posy)) / 3;
}

