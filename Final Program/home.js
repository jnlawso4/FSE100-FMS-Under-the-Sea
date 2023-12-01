// Home Screen
function homePage() {
  background('#88D5FF');
  
  image(mainmenu, 0, 0, 700, 600);
  
//   // Settings Icon
//   fill('grey');
//   noStroke();
//   circle(620, 60, 70);
  
//   fill('#88D5FF');
//   noStroke();
//   circle(620, 60, 35);
  
//   fill('#88D5FF');
//   circle(620, 30, 13);
  
//   fill('#88D5FF');
//   circle(643, 40, 13);
  
//   fill('#88D5FF');
//   circle(650, 60, 13);
  
//   fill('#88D5FF');
//   circle(646, 83, 13);
  
//   fill('#88D5FF');
//   circle(620, 90, 13);
  
//   fill('#88D5FF');
//   circle(595, 83, 13);
  
//   fill('#88D5FF');
//   circle(590, 60, 13);
  
//   fill('#88D5FF');
//   circle(597, 38, 13);
  
  // Play Button
  stroke('#FFB6C1');
  strokeWeight(5);
  fill('#f0eab6');
  rect(350,300,200,100);
  fill('black');
  noStroke();
  textSize(buttonTextSize);
  text('Play', 350,305);
  
  // Title
  fill('#ed95d9');
  stroke(1);
  strokeWeight(3);
  textSize(titleTextSize);
  text('Under the Sea', 350, 150);
  
}