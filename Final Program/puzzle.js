function puzzleGame() {
  
  background('#88D5FF');
  
  rectMode(CORNER);
  textAlign(CENTER);
  noStroke();  
  
  image(puzzlepage, 0, 0, 700, 600);
  
  // Task description
  rectMode(CORNER);
  fill('black');
  noStroke();
  textSize(35);
  text("Complete the Puzzle", 350, 70);
  textSize(18);
  text("Click and drag a puzzle piece to bring it to the correct spot on the puzzle board.", 350, 100);
  
  //puzzleboard
  fill('beige');
  rect(275, 175, 340, 300);
  noFill();
  stroke('rgb(242,242,111)');
  strokeWeight(10);
  //left vertical line
  line(277, 175, 277, 475);
  
  //bottom horizontal line
  line(277,475,610,475);
  
  //right vertical line
  line(610,175,610,475);
  
  //top horizontal line
  line(277,175,610,175);
  
  //middle horizontal line
  line(277,325,610,325);
  
  //middle vertical line
  line(445,175,445,475);

  // Return Button
  stroke('#FFB6C1');
  strokeWeight(4);
  rectMode(CENTER);
  fill('#f0eab6')
  rect(100, 525, 150, 75);
  noStroke();
  
  fill('black');
  textSize(30);
  text("Return", 100, 535);
  
  
// Dragging logic
  if (mouseIsPressed) {
    if (pieceDragging === -1) {
      // Loop backwards from the last piece to the first to get the top-most image
      for (let i = piecePositions.length - 1; i >= 0; i--) {
        if (
          mouseX > piecePositions[i].x &&
          mouseX < piecePositions[i].x + 125 &&
          mouseY > piecePositions[i].y &&
          mouseY < piecePositions[i].y + 125
        ) {
          pieceDragging = i;
          offsetX = mouseX - piecePositions[i].x;
          offsetY = mouseY - piecePositions[i].y;
          break;
        }
      }
    } else {
      // Update the position of the dragging piece
      piecePositions[pieceDragging].x = mouseX - offsetX;
      piecePositions[pieceDragging].y = mouseY - offsetY;
    }
  } else {
    // Stop dragging when the mouse is released
    pieceDragging = -1;
  }

  // Draw puzzle pieces after updating their positions
  for (let i = 0; i < piecePositions.length; i++) {
    switch (i) {
      case 0:
        image(puzz1, piecePositions[i].x, piecePositions[i].y, 125, 125);

        break;
      case 1:
        image(puzz2, piecePositions[i].x, piecePositions[i].y, 125, 125);
        break;
      
      case 2:
        image(puzz3, piecePositions[i].x, piecePositions[i].y, 125, 125);
        break;
        
      case 3:
        image(puzz4, piecePositions[i].x, piecePositions[i].y, 125, 125);
        break;
    }
  }
  
  rectMode(CORNER);
  
  if (position1 == true &&
      position2 == true &&
      position3 == true &&
      position4 == true) {
      strokeWeight(15)
      fill('#FFF6A5')
      stroke('#FFB6C1');
      rect(180,100,350,400, 30);
      textSize(35);
      noFill();
      noStroke();
      fill('pink')
      text("Congratulations!!", 355, 155);
      textSize(12);
      textStyle(BOLD);
      text("Click the return button to go back to the activity page.", 355,475);
      textStyle(NORMAL);
      image(croosh,205, 175,300,275);
      }
  rectMode(CENTER);

}