var frameTime;

function mousePressed() {
// Home Page Click Events
  if (screen == homepage) {  
    
    // if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
    //   buttonSound.play();
    //   screen = settingspage;
    // }
    
    
    if (mouseX >= 250 && mouseX <= 450 && mouseY >= 250 && mouseY <= 350) {
      buttonSound.play();
      screen = activitypage;
      
      frameTime = millis();
      
    }
    
    
  }
  
// Settings Page Click Events
//   if (screen == settingspage) {
//     if (mouseX >= 25 && mouseX <= 175 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
//       buttonSound.play();
//       screen = homepage;
      
//     }
    
    
//   }

  
// Activity Page Click Events
  if (screen == activitypage) {
    if (mouseX >= 25 && mouseX <= 175 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2) ) {
      buttonSound.play();
      screen = homepage;
      
    }
    
    
//     if (mouseX >= 585 && mouseX <= 655 && mouseY >= 25 && mouseY <= 95) {
//       buttonSound.play();
//       screen = settingspage;
      
//     }
    
    
    if (mouseX >= 40 && mouseX <= 225 && mouseY <= 335 && mouseY >= 150) {
      frameTime = millis();
      buttonSound.play();
      screen = tracinggame;
      tracingGame(tracingVariation);
      // mouseIsPressed = false;
      tracingActive = 1;
      // mouseIsPressed = false;
      
    }
    if (mouseX >= 350 - (185/2) && mouseX <= (350 - (185/2)) + 185 && mouseY <= 335 && mouseY >= 150 && millis() > frameTime + 25) {
      buttonSound.play();
      screen = puzzlegame;
      
    }
    if (mouseX >= 475 && mouseX <= 475 + 185 && mouseY <= 335 && mouseY >= 150) {
      frameTime = millis()
      buttonSound.play();
      screen = matchinggame;
      completeSoundHasBeenPlayed = false;
    }
    
    
  }
  
// Tracing Game Return Button
  if (screen == tracinggame) {
    if ((mouseX >= 25 && mouseX <= 175 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) || (mouseX > 350 - 125/2 && mouseX < 350 + 125/2 && mouseY > 415 && mouseY < 460 && trace1 == 3)) {
      
      buttonSound.play();
      screen = activitypage;
      tracingActive = 0;
      tracingVariation = 1;
      shapesTraced = 0;
      
      resetTraces();
  
    }
    
    if (trace1 == 3 && mouseX > 350 - (125/2) && mouseX < 350 + (125/2) && mouseY > 355 && mouseY < 405 && tracingVariation < 3) {
      
      tracingVariation++;
      resetTraces();
      tracingGame(tracingVariation);
      
      frameTime = millis();
    }
}
  
// Puzzle Game Return Button
  if (screen == puzzlegame) {
    if (mouseX >= 25 && mouseX <= 175 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2)) {
      buttonSound.play();
      screen = activitypage;
      piecePositions = [
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) },
    { x: random(10,145), y: random(200,350) }
  ];
      switchImages();
      correct.stop();
      congrats.stop();
      
      congratsShown = false;
    }

  }

// Matching Game Mouse Interaction
  if (screen == matchinggame) {
    matchingOpen = true;
    
    if (mouseX >= 25 && mouseX <= 175 && mouseY <= 525 + (75/2) && mouseY >= 525 - (75/2) || (mouseX > 350 - 125/2 && mouseX < 350 + 125/2 && mouseY > 405 && mouseY < 455 && doneMatching == 1)) {
      buttonSound.play();
      screen = activitypage;
      makeRandom();
      
// Updates the number of each shape clicked and the stroke of each shape.
      
      // Resets the game.
      circlesClicked = 0;
      ycirclesClicked = 0;
      rectClicked = 0;
      triClicked = 0;
      
      scoreValue = 0;
      currentShapeType = 0;
      currentShape = 0;
      
      updateStroke(1,1);
      updateStroke(2,1);
      updateStroke(3,1);
      updateStroke(4,1);
      updateStroke(5,1);
      updateStroke(6,1);
      updateStroke(7,1);
      updateStroke(8,1);
      
      doneMatching = 0;
      matchingBegin = false;
      matchingOpen = false;
      
      makeRandom();
      
    }
    
//     if (mouseX > 250 && mouseX < 450 && mouseY > 250 && mouseY < 350 && matchingBegin == false) {
//       matchingBegin = true;
//     }
    
//     if (matchingBegin == true) {
// Salmon Circle 1 is Clicked:
    
    if (dist(circle1posx, circle1posy, mouseX, mouseY) < 40 && circlesClicked < 3 && millis() > frameTime + 500) {  
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 1) {
            
            circlesClicked++;
            currentShape = 1;
            currentShapeType = 1;
            updateStroke(1, 0);
            
          }
          else if (currentShape == 1) {
            
            circlesClicked--;
            updateStroke(1, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 1:
          if (currentShape != 1) {
            
            circlesClicked++;
            currentShape = 1;
            currentShapeType = 1;
            updateStroke(1, 0);
            
          }
          else if (currentShape == 1) {
            
            circlesClicked--;
            updateStroke(1, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 2 && ycirclesClicked != 2) {
            if (currentShape == 5) {
              updateStroke(5, 1);
            }
            
            if (currentShape == 6) {
              updateStroke(6, 1);
            }
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 2) {
            if (currentShape == 3) {
              updateStroke(3,1);
            }
            if (currentShape == 4) {
              updateStroke(4,1);
            }
            rectClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            if (currentShape == 7) {
              updateStroke(7,1);
            }
            if (currentShape == 8) {
              updateStroke(8,1);
            }
            triClicked = 0;
          }
          currentShape = 1;
          currentShapeType = 1;
          updateStroke(1, 0);
          circlesClicked++;  
          
          break;
      }      
    }
    
// Salmon Circle 2 is Clicked:
    
    if (dist(circle2posx, circle2posy, mouseX, mouseY) < 40 && circlesClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 2) {
            
            circlesClicked++;
            currentShape = 2;
            currentShapeType = 1;
            updateStroke(2, 0);
            
          }
          else if (currentShape == 2) {
            
            circlesClicked--;
            updateStroke(2, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 1:
          if (currentShape != 2) {
            
            circlesClicked++;
            currentShape = 2;
            currentShapeType = 1;
            updateStroke(2, 0);
            
          }
          else if (currentShape == 2) {
            
            circlesClicked--;
            updateStroke(2, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 2 && ycirclesClicked != 2) {
            updateStroke(5, 1);
            updateStroke(6, 1);
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 2) {
            updateStroke(3, 1);
            updateStroke(4, 1);
            rectClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            updateStroke(7, 1);
            updateStroke(8, 1);
            triClicked = 0;
          }
          
          currentShape = 2;
          currentShapeType = 1;
          updateStroke(2, 0);
          circlesClicked++;  
          
          break;
      
    }
} 
// If both Salmon Circles have been clicked, increase the Score.
    
    if (circlesClicked == 2) {
      scoreValue++;
      circlesClicked = 3;
      currentShape = 0;
      currentShapeType = 0;
    }
      
// Yellow Circle 1 is Clicked:    

    if (dist(ycircle1posx, ycircle1posy, mouseX, mouseY) < 40 && ycirclesClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 5) {
    
            ycirclesClicked++;
            currentShape = 5;
            currentShapeType = 2;
            updateStroke(5, 0);
            
          }
          else if (currentShape == 5) {
            
            ycirclesClicked--;
            updateStroke(5, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 2:
          if (currentShape != 5) {
            
            ycirclesClicked++;
            currentShape = 5;
            currentShapeType = 2;
            updateStroke(5, 0);
            
          }
          else if (currentShape == 5) {
            
            ycirclesClicked--;
            updateStroke(5, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 2) {
            updateStroke(3, 1);
            updateStroke(4, 1);
            rectClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            updateStroke(7, 1);
            updateStroke(8, 1);
            triClicked = 0;
          }
          currentShape = 5;
          currentShapeType = 2;
          updateStroke(5, 0);
          ycirclesClicked++;  
          
          break;
      
    }
    }
    
// Yellow Circle 2 is Clicked:
    
    if (dist(ycircle2posx, ycircle2posy, mouseX, mouseY) < 40 && ycirclesClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 6) {
    
            ycirclesClicked++;
            currentShape = 6;
            currentShapeType = 2;
            updateStroke(6, 0);
            
          }
          else if (currentShape == 6) {
            
            ycirclesClicked--;
            updateStroke(6, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 2:
          if (currentShape != 6) {
            
            ycirclesClicked++;
            currentShape = 6;
            currentShapeType = 2;
            updateStroke(6, 0);
            
          }
          else if (currentShape == 6) {
            
            ycirclesClicked--;
            updateStroke(6, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 2) {
            updateStroke(3, 1);
            updateStroke(4, 1);
            rectClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            updateStroke(7, 1);
            updateStroke(8, 1);
            triClicked = 0;
          }
          currentShape = 6;
          currentShapeType = 2;
          updateStroke(6, 0);
          ycirclesClicked++;  
          
          break;
    }
    }
    
// If both Yellow Circles have been clicked, increase the Score:    

    if (ycirclesClicked == 2) {
      scoreValue++;
      ycirclesClicked = 3;
      currentShape = 0;
      currentShapeType = 0;
    }
    
// Rectangle 1 is Clicked:
    
    if (dist(rect1posx, rect1posy, mouseX, mouseY) < 40 && rectClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 3) {
    
            rectClicked++;
            currentShape = 3;
            currentShapeType = 3;
            updateStroke(3, 0);
            
          }
          else if (currentShape == 3) {
            
            rectClicked--;
            updateStroke(3, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 3:
          if (currentShape != 3) {
            
            rectClicked++;
            currentShape = 3;
            currentShapeType = 3;
            updateStroke(3, 0);
            
          }
          else if (currentShape == 3) {
            
            rectClicked--;
            updateStroke(3, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 2 && ycirclesClicked != 2) {
            updateStroke(5, 1);
            updateStroke(6, 1);
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            updateStroke(7, 1);
            updateStroke(8, 1);
            triClicked = 0;
          }
          currentShape = 3;
          currentShapeType = 3;
          updateStroke(3, 0);
          rectClicked++;  
          
        break;
      }
    }
    
// Rectangle 2 is Clicked:
    
    if (dist(rect2posx, rect2posy, mouseX, mouseY) < 40 && rectClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 4) {
    
            rectClicked++;
            currentShape = 4;
            currentShapeType = 3;
            updateStroke(4, 0);
            
          }
          else if (currentShape == 4) {
            
            rectClicked--;
            updateStroke(4, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 3:
          if (currentShape != 4) {
            
            rectClicked++;
            currentShape = 4;
            currentShapeType = 3;
            updateStroke(4, 0);
            
          }
          else if (currentShape == 4) {
            
            rectClicked--;
            updateStroke(4, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 2 && ycirclesClicked != 2) {
            updateStroke(5, 1);
            updateStroke(6, 1);
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 4 && triClicked != 2) {
            updateStroke(7, 1);
            updateStroke(8, 1);
            triClicked = 0;
          }
          currentShape = 4;
          currentShapeType = 3;
          updateStroke(4, 0);
          rectClicked++;  
          
        break;
      }
    }
    
// If both Rectangles are clicked, increase Score:    

    if (rectClicked == 2) {
      scoreValue++;
      rectClicked = 3;
      
      currentShape = 0;
      currentShapeType = 0;
    }
    
    if (dist(tri1centerx, tri1centery, mouseX, mouseY) < 38 && triClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 7) {
    
            triClicked++;
            currentShape = 7;
            currentShapeType = 4;
            updateStroke(7, 0);
            
          }
          else if (currentShape == 7) {
            
            triClicked--;
            updateStroke(7, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 4:
          if (currentShape != 7) {
            
            triClicked++;
            currentShape = 7;
            currentShapeType = 4;
            updateStroke(7, 0);
            
          }
          else if (currentShape == 7) {
            
            triClicked--;
            updateStroke(7, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 2 && ycirclesClicked != 2) {
            updateStroke(5, 1);
            updateStroke(6, 1);
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 3) {
            updateStroke(3, 1);
            updateStroke(4, 1);
            rectClicked = 0;
          }
          currentShape = 7;
          currentShapeType = 4;
          updateStroke(7, 0);
          triClicked++;  
          
        break;
      }
    }
    
    if (dist(tri2centerx, tri2centery, mouseX, mouseY) < 38 && triClicked < 3 && millis() > frameTime + 500) {
      buttonSound.play();
      switch(currentShapeType) {
        case 0:
          if (currentShape != 8) {
    
            triClicked++;
            currentShape = 8;
            currentShapeType = 4;
            updateStroke(8, 0);
            
          }
          else if (currentShape == 8) {
            
            triClicked--;
            updateStroke(8, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        case 4:
          if (currentShape != 8) {
            
            triClicked++;
            currentShape = 8;
            currentShapeType = 4;
            updateStroke(8, 0);
            
          }
          else if (currentShape == 8) {
            
            triClicked--;
            updateStroke(8, 1);
            currentShapeType = 0;
            currentShape = 0;
            
          }
          break;
          
        default:
          if (currentShapeType == 1 && circlesClicked != 2) {
            updateStroke(1, 1);
            updateStroke(2, 1);
            circlesClicked = 0;
          }
          else if (currentShapeType == 2 && ycirclesClicked != 2) {
            updateStroke(5, 1);
            updateStroke(6, 1);
            ycirclesClicked = 0;
          }
          else if (currentShapeType == 3 && rectClicked != 3) {
            updateStroke(3, 1);
            updateStroke(4, 1);
            rectClicked = 0;
          }
          currentShape = 8;
          currentShapeType = 4;
          updateStroke(8, 0);
          triClicked++;  
          
        break;
      }
    }
    
    if (triClicked == 2) {
      scoreValue++;
      triClicked = 3;
      
      currentShape = 0;
      currentShapeType = 0;
    }
    
    if (scoreValue == 4) {
      doneMatching = 1; 
      
      if (completeSoundHasBeenPlayed == false) {
        completeSound.play();
      }
      
      completeSoundHasBeenPlayed = true;
      
    }
  }
}
// }