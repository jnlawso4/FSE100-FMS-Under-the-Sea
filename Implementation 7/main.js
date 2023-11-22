// Declare Globals
var homepage = 1;
var howtoplaypage = 2;
var settingspage = 3;
var activitypage = 4;
var tracinggame = 5;
var puzzlegame = 6;
var matchinggame = 7;

var tracingActive = 0;
var tracingNotStarted = 1;

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

var buttonSound;
var completeSound;

let crab1, crab2, crab3, crab4; 
let octo1, octo2, octo3, octo4; 
let shark1, shark2, shark3, shark4; 

let congratsShown = false;

var scoreValue = 0;

var circlesClicked = 0;
var rectClicked = 0;
var ycirclesClicked = 0;
var triClicked = 0;

var currentShape = 0
var currentShapeType = 0;
var completeSoundHasBeenPlayed = false;

// Preload Images
function preload() {
  game1 = loadImage("assets/tracingicon.png");
  game2 = loadImage("assets/puzzle.png");
  game3 = loadImage("assets/matching2.png");
  
  croosh = loadImage("assets/crush.png");
  correct = loadSound("assets/happy.mp3");
  congrats = loadSound("assets/congrats.mp3");
  
    crab1 = loadImage("assets/crabba1.png");
  crab2 = loadImage("assets/crabba2.png");
  crab3 = loadImage("assets/crabba3.png");
  crab4 = loadImage("assets/crabba4.png");
  
  octo1 = loadImage("assets/octo1.png");
  octo2 = loadImage("assets/octo2.png");
  octo3 = loadImage("assets/octo3.png");
  octo4 = loadImage("assets/octo4.png");
  
  shark1 = loadImage("assets/shark1.png");
  shark2 = loadImage("assets/shark2.png");
  shark3 = loadImage("assets/shark3.png");
  shark4 = loadImage("assets/shark4.png");
  
  buttonSound = loadSound('assets/select.mp3');
  completeSound = loadSound('assets/game complete.mp3');
  
}

// Setup Program
function setup() {
  correct.setLoop(false);
  // Set screen size
  createCanvas(700, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont('comic sans ms')
  makeRandom();
  homePage();
  piecePositions = [
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) }
  ];
  switchImages();
  
}

function switchImages(setNumber) {
   if (setNumber) {
    // Use the setNumber parameter to determine which set to use
    switch (setNumber) {
      case 1:
        puzz1 = shark1;
        puzz2 = shark2;
        puzz3 = shark3;
        puzz4 = shark4;
        break;
      case 2:
        puzz1 = crab1;
        puzz2 = crab2;
        puzz3 = crab3;
        puzz4 = crab4;
        break;
      case 3:
        puzz1 = octo1;
        puzz2 = octo2;
        puzz3 = octo3;
        puzz4 = octo4;
        break;
      default:
      
        puzz1 = shark1;
        puzz2 = shark2;
        puzz3 = shark3;
        puzz4 = shark4;
        break;
    }
  } else {
    // Randomly pick a set when setNumber is not specified
    const randomSet = Math.floor(Math.random() * 3) + 1;

    switch (randomSet) {
       case 1:
        puzz1 = shark1;
        puzz2 = shark2;
        puzz3 = shark3;
        puzz4 = shark4;
        break;
      case 2:
        puzz1 = crab1;
        puzz2 = crab2;
        puzz3 = crab3;
        puzz4 = crab4;
        break;
      case 3:
        puzz1 = octo1;
        puzz2 = octo2;
        puzz3 = octo3;
        puzz4 = octo4;
        break;
      default:
      
        puzz1 = shark1;
        puzz2 = shark2;
        puzz3 = shark3;
        puzz4 = shark4;
        break;
    }
  }

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
    
    if (tracingActive == 1) {
      if (mouseIsPressed && dist(mouseX, mouseY, 350, 300) > 100 && dist(mouseX, mouseY, 350, 300) < 140) {
        stroke('lightgreen')
        strokeWeight(8);
        line(mouseX, mouseY, pmouseX, pmouseY);
        noStroke();
      }
      else if (mouseIsPressed && mouseX > 175 && mouseX < 525 && mouseY > 150 && mouseY < 450) {
        stroke('red');
        strokeWeight(8);
        line(mouseX, mouseY, pmouseX, pmouseY);
        noStroke();
      }
  }
    
    tracingCheck();
    
  }
    // noLoop();
  
  if (screen == puzzlegame) {
    puzzleGame();
  }
  
  if (screen == matchinggame) {
    matchingGame(gameVar);
    centroid();
  }
}

function mouseReleased() {
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
    correct.stop();
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
    correct.stop();
    
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
    correct.stop();
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
    correct.stop();
  }
  
    // Congrats pop up
   if (position1 && position2 && position3 && position4 && !congratsShown) {
    correct.stop();
    congrats.play();
    congratsShown = true; // Set the flag to true after showing congrats pop-up
  } else {
    // Play the correct sound only if none of the pieces are in the correct position
    if (position1 || position2 || position3 || position4 && !congratsShown) {
      if (!correct.isPlaying()) {
        correct.play();
      }
    }
  }
  
}
