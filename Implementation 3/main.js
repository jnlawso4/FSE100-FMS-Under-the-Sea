// Declare Globals
var homepage = 1;
var howtoplaypage = 2;
var settingspage = 3;
var activitypage = 4;
var tracinggame = 5;
var puzzlegame = 6;
var matchinggame = 7;

var game1;
var game2;
var game3;

var screen = homepage;

var titleTextSize = 60;
var buttonTextSize = 30;

var buttonSound;
var scoreValue = 0;

var circlesClicked = 0;
var rectClicked = 0;
var ycirclesClicked = 0;

var selectedShape = 0;

// var circ1 = circle(200, 180, 80);
// var circ2 = circle(500, 450, 80);
// var currShape;

// Preload Images
function preload() {
  game1 = loadImage("assets/tracing.png");
  game2 = loadImage("assets/puzzle.png");
  game3 = loadImage("assets/matching.png");
  
  buttonSound = loadSound('assets/select.mp3');

}

// Setup Program
function setup() {
  
  // Set screen size
  createCanvas(700, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont('comic sans ms')
  
  homePage();
  
}

function draw() {
  
if (screen == homepage){
    homePage();
  }
  
  if (screen == settingspage){
    settingsPage();
  }
  
  if (screen == activitypage) {
    activityPage();
  }
  
  if (screen == tracinggame) {
    tracingGame();
  }
  
  if (screen == puzzlegame) {
    puzzleGame();
  }
  
  if (screen == matchinggame) {
    matchingGame();
  }
  
  
}


function mousePressed() {
  
// Home Page Click Events
  if (screen == homepage) {
    if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
      buttonSound.play();
      screen = settingspage;
      
      
    }
    
    
    if (mouseX >= 250 && mouseX <= 450 && mouseY >= 350 && mouseY <= 450) {
      buttonSound.play();
      screen = activitypage;
      
      
    }
    
    
  }
  
// Settings Page Click Events
  if (screen == settingspage) {
    if (mouseX >= 525 && mouseX <= 675 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
      buttonSound.play();
      screen = homepage;
      
    }
    
    
  }

  
// Activity Page Click Events
  if (screen == activitypage) {
    if (mouseX >= 525 && mouseX <= 675 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
      buttonSound.play();
      screen = homepage;
      
    }
    if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
      buttonSound.play();
      screen = settingspage;
      
    }
    if (mouseX >= 40 && mouseX <= 225 && mouseY <= 335 && mouseY >= 150) {
      buttonSound.play();
      screen = tracinggame;
      
    }
    if (mouseX >= 350 - (185/2) && mouseX <= (350 - (185/2)) + 185 && mouseY <= 335 && mouseY >= 150) {
      buttonSound.play();
      screen = puzzlegame;
      
    }
    if (mouseX >= 475 && mouseX <= 475 + 185 && mouseY <= 335 && mouseY >= 150) {
      buttonSound.play();
      screen = matchinggame;
      
    }
    
    
  }
  
// Tracing Game Return Button
  if (screen == tracinggame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      buttonSound.play();
      screen = activitypage;
      
    }
    
    
}
  
// Puzzle Game Return Button
  if (screen == puzzlegame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      buttonSound.play();
      screen = activitypage;
      
    }

  }

// Matching Game Mouse Interaction
  if (screen == matchinggame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      buttonSound.play();
      screen = activitypage;
      
      
// Updates the number of each shape clicked and the stroke of each shape.
      circlesClicked = 0;
      ycirclesClicked = 0;
      rectClicked = 0;
      scoreValue = 0;
      
      updateStroke(1,1);
      updateStroke(2,1);
      updateStroke(3,1);
      updateStroke(4,1);
      updateStroke(5,1);
      updateStroke(6,1);
      
      console.log("Left... Score is reset to zero.");
    }
    
    
// Salmon Circle 1 is Clicked:
    
    if (dist(200, 180, mouseX, mouseY) < 40 && (circlesClicked == 0 || selectedShape == circle2)) {
      circlesClicked++;
      buttonSound.play();
      
      selectedShape = circle1;
      
      console.log("Salmon Circles clicked : " + circlesClicked);
      // updateStroke(selectedShape);
      updateStroke(1, 0);
      
      // if (selectedShape != circle1) {
      //   circlesClicked--;
      //   updateStroke(1, 0);
      // }
      
      
    }
    
// Salmon Circle 2 is Clicked:
    
    if (dist(500, 450, mouseX, mouseY) < 40 && (circlesClicked == 0 || selectedShape == circle1)) {
      circlesClicked++;
      buttonSound.play();
      
      selectedShape = circle2;
      console.log("Salmon Circles clicked : " + circlesClicked);
      updateStroke(2, 0);
      
    }
      
// If both Salmon Circles have been clicked, increase the Score.
    
    if (circlesClicked == 2) {
      scoreValue++;
      console.log("Score increased! Current Score : " + scoreValue);
      circlesClicked = 3;
    }
      
// Yellow Circle 1 is Clicked:    

    if (dist(250, 400, mouseX, mouseY) < 40 && (ycirclesClicked == 0 || selectedShape == ycircle2)) {
      ycirclesClicked++;
      buttonSound.play();
      
      selectedShape = ycircle1;
      console.log("Yellow Circles clicked : " + ycirclesClicked);
      updateStroke(5, 0);
    }
    
// Yellow Circle 2 is Clicked:
    
    if (dist(450, 290, mouseX, mouseY) < 40 && (ycirclesClicked == 0 || selectedShape == ycircle1)) {
      ycirclesClicked++;
      buttonSound.play();
      
      selectedShape = ycircle2;
      console.log("Yellow Circles clicked : " + ycirclesClicked);
      updateStroke(6, 0);
    }
    
// If both Yellow Circles have been clicked, increase the Score:    

    if (ycirclesClicked == 2) {
      scoreValue++;
      console.log("Score increased! Current Score : " + scoreValue);
      ycirclesClicked = 3;
    }
    
// Rectangle 1 is Clicked:
    
    if (dist(80, 440, mouseX, mouseY) < 40 && (rectClicked == 0 || selectedShape == rect2)) {
      rectClicked++;
      buttonSound.play();
      
      selectedShape = rect1;
      console.log("Rectangles clicked : " + rectClicked);
      updateStroke(3, 0);
    }
    
// Rectangle 2 is Clicked:
    
    if (dist(540, 180, mouseX, mouseY) < 40 && (rectClicked == 0 || selectedShape == rect1)) {
      rectClicked++;
      buttonSound.play();
      
      selectedShape = rect2;
      console.log("Rectangles clicked : " + rectClicked);
      updateStroke(4, 0);
    }
    
// If both Rectangles are clicked, increase Score:    

    if (rectClicked == 2) {
      scoreValue++;
      console.log("Score increased! Current Score : " + scoreValue);
      rectClicked = 3;
    }
  }

    

    
}