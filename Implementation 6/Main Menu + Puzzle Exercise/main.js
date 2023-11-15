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

let croosh;

let correct;
let wrong;
let congrats;

let puzz1, puzz2, puzz3, puzz4;
let piecePositions = []; 
let pieceDragging = -1; 
let offsetX, offsetY;

let position1 = false;
let position2 = false;
let position3 = false;
let position4 = false;


var screen = homepage;

var titleTextSize = 60;
var buttonTextSize = 30;


// Preload Images
function preload() {
  game1 = loadImage("assets/tracing.png");
  game2 = loadImage("assets/puzzle.png");
  game3 = loadImage("assets/matching.png");
  puzz1 = loadImage("assets/piece1.png");
  puzz2 = loadImage("assets/piece2.png");
  puzz3 = loadImage("assets/piece3.png");
  puzz4 = loadImage("assets/piece4.png");
  croosh = loadImage("assets/crush.png");
  correct = loadSound("assets/happy.mp3");
  wrong = loadSound("assets/wrong.mp3");
  congrats = loadSound("assets/congrats.mp3");
  
}

// Setup Program
function setup() {
  correct.setLoop(false);
  // Set screen size
  createCanvas(700, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont('comic sans ms')
  
    piecePositions = [
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) }
  ];
}

function draw() {
  
    background(220);
  

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

  // Parameters for the congrats pop up
  if ( 
    piecePositions[0].x >= 277 &&
    piecePositions[0].x <= 445 &&
    piecePositions[0].y >= 175 &&
    piecePositions[0].y <= 325) {
    position1 = true;
    correct.play();
    
  } else {
    position1 = false;
  }
  
if ( 
    piecePositions[1].x >= 445 &&
    piecePositions[1].x <= 610 &&
    piecePositions[1].y >= 175 &&
    piecePositions[1].y <= 325) {
    position2 = true;
    correct.play();
    
  } else {
    position2 = false;
    
  }

  if ( 
    piecePositions[2].x >= 277 &&
    piecePositions[2].x <= 445 &&
    piecePositions[2].y >= 325 &&
    piecePositions[2].y <= 475) {
    position3 = true;
    correct.play();
    
  } else {
    position3 = false;
  }

  if ( 
    piecePositions[3].x >= 445 &&
    piecePositions[3].x <= 610 &&
    piecePositions[3].y >= 325 &&
    piecePositions[3].y <= 475) {
    position4 = true;
    correct.play();
    
  } else {
    position4 = false;
  }
  
    // Congrats pop up
  if (position1 == true &&
      position2 == true &&
      position3 == true &&
      position4 == true) {
      congrats.play();
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
      piecePositions = [
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) }
  ];
    }
    
  }

// Matching Game Return Button
  if (screen == matchinggame) {
    if (mouseX >= 75 - (125/2) && mouseX <= 75 + (125/2) && mouseY <= 55 && mouseY >= 10) {
      screen = activitypage;
    } 
  }


  
}