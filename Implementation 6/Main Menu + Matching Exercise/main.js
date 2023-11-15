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
var completeSound;

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
  game1 = loadImage("assets/tracing.png");
  game2 = loadImage("assets/puzzle.png");
  game3 = loadImage("assets/matching2.png");
  
  buttonSound = loadSound('assets/select.mp3');
  completeSound = loadSound('assets/game complete.mp3');
  
}

// Setup Program
function setup() {
  
  // Set screen size
  createCanvas(700, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont('comic sans ms')
  makeRandom();
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
    // noLoop();
    
    
  }
  
  if (screen == puzzlegame) {
    puzzleGame();
  }
  
  if (screen == matchinggame) {
    matchingGame(gameVar);
    centroid();
  }
  
}