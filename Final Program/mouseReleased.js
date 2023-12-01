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