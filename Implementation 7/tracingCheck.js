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

var accuracy = 0;
var firstClick = 0;

var currentTrace = 0;
var tracingCompleteSoundPlayed = false;

function tracingCheck() {
  
  if (mouseIsPressed && dist(mouseX, mouseY, 350, 180) < 20) {
    // console.log("1");
    if (trace1 == 0) {
      trace1 = 1;
      currentTrace = 1;
      firstClick = millis();
    }
    
  
  // if (currentTrace == 1 && mouseIsPressed == false) {
  //   trace1 = 2;
  //   currentTrace = 1;
  //     console.log(trace1);
    if (trace1 == 1 && (millis() >= firstClick + 3000)) {
  
      //
      
      trace1 = 2;
      // console.log(trace1);
    }
  }
    
  
  
  
  if (mouseIsPressed && dist(mouseX, mouseY, (sqrt(3)/2) * 470, 405) < 20) {
    trace6 = 1;
    // console.log("6")
    
    currentTrace = 6;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(3)/2) * 230) + 95, 195) < 20) {
    trace12 = 1;
    // console.log("12")
    
    currentTrace = 12;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(3)/2) * 230) + 95, 405) < 20) {
    trace8 = 1;
    // console.log("8");
    
    currentTrace = 8;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(2)/2) * 470) + 120, ((sqrt(2)/2) * 300) + 150) < 20) {
    trace5 = 1;
    // console.log("5");
    
    currentTrace = 5;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(2)/2) * 470) + 120, ((sqrt(2)/2) * 300) + 25) < 20) {
    trace3 = 1;
    // console.log("3");
    
    currentTrace = 3;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(2)/2) * 230) + 90, ((sqrt(2)/2) * 230) + 68) < 20) {
    trace11 = 1;
    // console.log("11");
    
    currentTrace = 11;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, ((sqrt(2)/2) * 230) + 90, ((sqrt(2)/2) * 230) + 205) < 20) {
    trace9 = 1;
    // console.log("9");
    
    currentTrace = 9;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, 350, 420) < 20) {
    trace7 = 1;
//     console.log("7");
    
    currentTrace = 7;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, 230, 300) < 20) {
    trace10 = 1;
    // console.log("10");
    
    currentTrace = 10;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, 470, 300) < 20) {
    trace4 = 1;
    // console.log("4");
    
    currentTrace = 4;
  }
  
  if (mouseIsPressed && dist(mouseX, mouseY, (sqrt(3)/2) * 470, 195) < 20) {
    trace2 = 1;
    // console.log("2");
    
    currentTrace = 2;
  }
  
  if (trace1 == 2)  {
    trace1 = 3;
    accuracy = ((trace1 - 2) + trace2 + trace3 + trace4 + trace5 + trace6 + trace7 + trace8 + trace9 + trace10 + trace11 + trace12) / 0.12;
  }
  
  
  
  
  //&& trace2 == 1 && trace3 == 1 && trace4 == 1 && trace5 == 1 && trace6 == 1 && trace7 == 1 && trace8 == 1 && trace9 == 1 && trace10 == 1 && trace11 == 1 && trace12 == 1)
  
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
    textSize(50);
    text("Good job!", 350, 200);
    
    textSize(25);
    text("You traced the " + tracingShape, 350, 245);
    
    text(round(accuracy) + "%", 350, 280);
    
    fill('#f0eab6');
    strokeWeight(2);
    stroke("#FFB6C1");
    rect(350, 430, 125, 50);
    noStroke();
    
    fill('black');
    textSize(30);
    text("Okay", 350, 440);
  }
  
}