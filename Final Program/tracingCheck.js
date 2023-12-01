var trace1 = 0;
var trace2 = 0;
var trace3 = 0;
var trace4 = 0;
var trace5 = 0;
var trace6 = 0;
var trace7 = 0;
var trace8 = 0;
var trace9 = 0;
var trace10 = 0;
var trace11 = 0;
var trace12 = 0;
var trace13 = 0;
var trace14 = 0;
var trace15 = 0;
var trace16 = 0;
var trace17 = 0;
var trace18 = 0;
var trace19 = 0;
var trace20 = 0;
var trace21 = 0;
var trace22 = 0;
var trace23 = 0;
var trace24 = 0;

var accuracy = 0;
var firstClick = 0;

var currentTrace = 0;

var tracingCompleteSoundPlayed = false;

function tracingCheck(tracingVariation) {
  var denominator;
  var congratsText;
  
  textSize(20);
  
  switch(tracingVariation) {
  
  case 1:
      
    denominator = 0.24;
    
      if (mouseIsPressed && dist(mouseX,mouseY, 350, 180) < 20) {
      if (trace1 == 0) {
        trace1 = 1;
        currentTrace = 1;
        firstClick = millis();
      }

      if (trace1 == 1 && (millis() >= firstClick + 3000)) {
        trace1 = 2;
        shapesTraced++;
      }
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 466, 331) < 20) {
      trace2 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 454, 360) < 20) {
      trace3 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 435, 385) < 20) {
      trace4 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 410, 404) < 20) {
      trace5 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 381, 416) < 20) {
      trace6 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 350, 420) < 20) {
      trace7 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 319, 416) < 20) {
      trace8 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 290, 404) < 20) {
      trace9 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 265, 385) < 20) {
      trace10 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 246, 360) < 20) {
      trace11 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 234, 331) < 20) {
      trace12 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 230, 300) < 20) {
      trace13 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 234, 269) < 20) {
      trace14 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 246, 240) < 20) {
      trace15 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 265, 215) < 20) {
      trace16 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 290, 196) < 20) {
      trace17 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 319, 184) < 20) {
      trace18 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 381, 184) < 20) {
      trace19 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 410, 196) < 20) {
      trace20 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 435, 215) < 20) {
      trace21 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 454, 240) < 20) {
      trace22 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 466, 269) < 20) {
      trace23 = 1;
    }

    if (mouseIsPressed && dist(mouseX, mouseY, 470, 300) < 20) {
      trace24 = 1;
    }
      
  break;
    
  case 2:
      
    denominator = 0.16;

    if (mouseIsPressed && dist(mouseX, mouseY, 250, 200) < 20) {
      if (trace1 == 0) {
        trace1 = 1;
        currentTrace = 1;
        firstClick = millis();
      }

      if (trace1 == 1 && (millis() >= firstClick + 3000)) {
        trace1 = 2;
        shapesTraced++;
      }
    }
    
    if (mouseIsPressed && dist(mouseX, mouseY, 250, 400) < 20) {
      trace2 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 200) < 20) {
      trace3 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 400) < 20) {
      trace4 = 1;
    }
    
    if (mouseIsPressed && dist(mouseX, mouseY, 350, 200) < 20) {
      trace5 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 350, 400) < 20) {
      trace6 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 200) < 20) {
      trace7 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 300, 400) < 20) {
      trace8 = 1;
    }  
      
    if (mouseIsPressed && dist(mouseX, mouseY, 400, 200) < 20) {
      trace9 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 400, 400) < 20) {
      trace10 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 250, 300) < 20) {
      trace11 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 300) < 20) {
      trace12 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 250, 250) < 20) {
      trace13 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 250) < 20) {
      trace14 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 250, 350) < 20) {
      trace15 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 350) < 20) {
      trace16 = 1;
    }
  break;
  
  case 3:
    denominator = 0.15;
      
    if (mouseIsPressed && dist(mouseX, mouseY, 350, 200) < 20) {
      if (trace1 == 0) {
        trace1 = 1;
        currentTrace = 1;
        firstClick = millis();
      }

      if (trace1 == 1 && (millis() >= firstClick + 3000)) {
        trace1 = 2;
        shapesTraced++;
      }
    }
    
    if (mouseIsPressed && dist(mouseX, mouseY, 250, 400) < 20) {
      trace2 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 370, 240) < 20) {
      trace3 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 450, 400) < 20) {
      trace4 = 1;
    }
    
    if (mouseIsPressed && dist(mouseX, mouseY, 290, 400) < 20) {
      trace5 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 330, 400) < 20) {
      trace6 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 370, 400) < 20) {
      trace7 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 410, 400) < 20) {
      trace8 = 1;
    }  
      
    if (mouseIsPressed && dist(mouseX, mouseY, 270, 360) < 20) {
      trace9 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 290, 320) < 20) {
      trace10 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 310, 280) < 20) {
      trace11 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 330, 240) < 20) {
      trace12 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 430, 360) < 20) {
      trace13 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 410, 320) < 20) {
      trace14 = 1;
    }
      
    if (mouseIsPressed && dist(mouseX, mouseY, 390, 280) < 20) {
      trace15 = 1;
    }
  break;
  
  }
  
  if (trace1 == 2)  {
    trace1 = 3;
    accuracy = ((trace1 - 2) + trace2 + trace3 + trace4 + trace5 + trace6 + trace7 + trace8 + trace9 + trace10 + trace11 + trace12 + trace13 + trace14 + trace15 + trace16+ trace17 + trace18 + trace19 + trace20 + trace21 + trace22 + trace23 + trace24) / denominator;
  }
  
  if (trace1 == 3) {
    if (tracingCompleteSoundPlayed == false) {
      completeSound.play();
    }
    
    tracingCompleteSoundPlayed = true;

    stroke('#FFB6C1')
    strokeWeight(4);
    fill('#D3D3D3')
    rect(350, 300, 450, 350);
    
    noStroke();
    fill('black');
    
    
    if (accuracy >= 75) {
      textSize(40);
      congratsText = "Great job!";
    }
    else if (accuracy >= 60 && accuracy < 75) {
      textSize(50);
      congratsText = "Well done.";
    }
    else {
      textSize(40);
      congratsText = "Try harder next time.";
    }
    
    text(congratsText, 350, 200);
    
    textSize(25);
    text("You traced " + round(accuracy) + "% of the " + tracingShape + ".", 350, 245);
    
    text("Shapes Traced: " + shapesTraced, 350, 285);
    
    fill('#f0eab6');
    strokeWeight(2);
    stroke("#FFB6C1");
    rect(350, 435, 125, 50);
    
    if (tracingVariation < 3) {
      rect(350, 380, 125, 50);
      noStroke();
      fill('black');
      textSize(20);
      text("Next Shape", 350, 390);
    }
    
    noStroke();
    
    fill('black');
    textSize(30);
    text("Quit", 350, 445);

  }
  
}