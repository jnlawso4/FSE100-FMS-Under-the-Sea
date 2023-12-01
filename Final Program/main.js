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

var mainmenu;
var activitypage;
var tracingpage;
var puzzlepage;
var matchingpage;
// var settingspage;

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
  mainmenu = loadImage("assets/mainmenu.jpg");
  activitypage = loadImage("assets/activitypage.jpg");
  tracingpage = loadImage("assets/tracing.jpg");
  puzzlepage = loadImage("assets/puzzlepage.jpg");
  matchingpage = loadImage("assets/matchingpage.jpg");
  // settingspage = loadImage("assets/settingspage.jpg");
  
  game1 = loadImage("assets/tracingicon.png");
  game2 = loadImage("assets/puzzle-1.png");
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
  
  // if (screen == settingspage){
  //   settingsPage();
  // }
  
  if (screen == activitypage) {
    activityPage();
  }
  
  if (screen == tracinggame) {

    if (tracingActive == 1 && millis() > frameTime + 350) {
      drawLine(tracingVariation);
  }
    
    tracingCheck(tracingVariation);
    
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