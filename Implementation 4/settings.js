function settingsPage() {
  background('#72B4D7');
  
  //bubbles
  fill('#72B4D7')
  stroke('#c0e9ff')
  strokeWeight(1);
  circle(50, 50, 70);
  
   fill('#72B4D7')
  stroke('#c0e9ff')
  strokeWeight(1);
  circle(80, 150, 30);
  
  
  //left water shadow
  fill('#5DA1C6');
  noStroke();
  arc(70, 580, 600, 300, PI, TWO_PI)
  
  //right water shadow
  fill('#5DA1C6');
  noStroke();
  arc(700, 500, 650, 200, PI, TWO_PI)
  
  //submarine
  fill('#5DA1C6');
  noStroke();
  arc(450, 300, 300, 75, PI, -PI)
  
  fill('#5DA1C6');
  noStroke();
  triangle(400, 300, 450, 250, 600, 300);
  
  fill('#5DA1C6');
  noStroke();
  square(350, 240, 15);
  
  fill('#5DA1C6');
  noStroke();
  square(350, 250, 15);
  
  fill('#5DA1C6');
  noStroke();
  square(350, 260, 15);
  
  fill('#5DA1C6');
  noStroke();
  square(350, 270, 16);
  
  fill('#5DA1C6');
  noStroke();
  square(340, 240, 16);
  
  
  //back sand
  fill('#D7CE7B');
  stroke('black');
  strokeWeight(1);
  triangle(700, 450, 700, 600, 150, 510);

  fill('silver');
  stroke('grey');
  arc(550, 510, 100, 80, PI, TWO_PI);
  line(500, 510, 600, 510);
  
  
   fill('silver');
  stroke('grey');
  arc(500, 520, 100, 80, PI, TWO_PI);
  line(450, 520, 550, 520);
  
  //front sand
  fill('#DBD391');
  stroke('black');
  strokeWeight(1);
  triangle(0, 475, 0, 600, 700, 600);
  
  //clam
  fill('#E5B6D1');
  stroke('purple');
  arc(100, 550, 100, 50, -PI, PI);
  strokeWeight(2);
  line(78, 550, 150, 550);
  
  // Return Button
  stroke('#FFB6C1');
  strokeWeight(2);
  fill('#f0eab6');
  rect(600, 525, 150, 75);
  textSize(buttonTextSize);
  noStroke()
  fill('black');
  text('Return', 600, 535);
  
  // Font Size
  stroke(1);
  strokeWeight(3);
  textSize(50);
  fill('#e889d2')
  text('Settings', 110, 75);
  textSize(buttonTextSize + 5);
  text('Font Size', 100, 200);
  
  fill('white');
  rect(280, 190, 150, 50);
  
  

}