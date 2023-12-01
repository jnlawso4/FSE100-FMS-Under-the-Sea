function drawLine(tracingVariation) {
  switch(tracingVariation) {
      
      case 1:
        if (mouseIsPressed && dist(mouseX, mouseY, 350, 300) > 100 && dist(mouseX, mouseY, 350, 300) < 140) {
          stroke('lightgreen')
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
          }
        else if (mouseIsPressed && mouseX > 175 && mouseX < 525 && mouseY > 150 && mouseY < 450)   {
          stroke('red');
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
         }
      break;
      
      
      case 2:
        if (mouseIsPressed && mouseX >= 270 && mouseX <= 430 && mouseY >= 220 && mouseY <= 380 || mouseIsPressed && mouseX >= 175 && mouseX <= 230 && mouseY >= 150 && mouseY <= 450 || mouseIsPressed && mouseX <= 525 && mouseX >= 470 && mouseY >= 150 && mouseY <= 450 || mouseIsPressed && mouseX >= 175 && mouseX <= 525 && mouseY >= 150 && mouseY <= 180 || mouseIsPressed && mouseX >= 175 && mouseX <= 525 && mouseY >= 420 && mouseY <= 450)               
        {
          stroke('red');
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
        }
        else if (mouseIsPressed && mouseX >= 230 && mouseX <= 470 && mouseY >= 180 && mouseY <= 420) 
        {
          stroke('lightgreen')
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
        }
      break;
      
      case 3: 
        if (mouseIsPressed && (mouseLineDistance(mouseX, mouseY, 350, 200, 450, 400) > 20) && (mouseLineDistance(mouseX, mouseY, 350, 200, 250, 400)) > 20 && (mouseLineDistance(mouseX, mouseY, 250, 400, 450, 400)) > 20 && mouseX > 175 && mouseX < 525 && mouseY > 150 && mouseY < 450) 
        {
          stroke('red');
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
        }
        else if (mouseIsPressed && mouseX > 175 && mouseX < 525 && mouseY > 150 && mouseY < 450)
        {
          stroke('lightgreen')
          strokeWeight(8);
          line(mouseX, mouseY, pmouseX, pmouseY);
          noStroke();
        }
      break;
      }
}