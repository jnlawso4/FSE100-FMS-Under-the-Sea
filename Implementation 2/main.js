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


// Preload Images
function preload() {
  game1 = loadImage("assets/tracing.png");
  game2 = loadImage("assets/puzzle.png");
  game3 = loadImage("assets/matching.png");
}

// Setup Program
function setup() {
  
  // Set screen size
  createCanvas(700, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont('comic sans ms')
}

function draw() {
  
// Draw Current Screen
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


function mouseReleased() {
  
// Home Page Click Events
  if (screen == homepage) {
    if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
      screen = settingspage;
    }
    
    if (mouseX >= 250 && mouseX <= 450 && mouseY >= 350 && mouseY <= 450) {
      screen = activitypage;
    }
  }
  
// Settings Page Click Events
  if (screen == settingspage) {
    if (mouseX >= 525 && mouseX <= 675 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
      screen = homepage;
    }
  }

  
// Activity Page Click Events
  if (screen == activitypage) {
    if (mouseX >= 525 && mouseX <= 675 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
      screen = homepage;
    }
    if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
      screen = settingspage;
    }
    if (mouseX >= 40 && mouseX <= 225 && mouseY <= 335 && mouseY >= 150) {
      screen = tracinggame;
    }
    if (mouseX >= 350 - (185/2) && mouseX <= (350 - (185/2)) + 185 && mouseY <= 335 && mouseY >= 150) {
      screen = puzzlegame;
    }
    if (mouseX >= 475 && mouseX <= 475 + 185 && mouseY <= 335 && mouseY >= 150) {
      screen = matchinggame;
    }
  }
  
// Tracing Game Return Button
  if (screen == tracinggame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      screen = activitypage;
    }
}
  
// Puzzle Game Return Button
  if (screen == puzzlegame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      screen = activitypage;
    }
  }

// Matching Game Return Button
  if (screen == matchinggame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      screen = activitypage;
    }
  }
}