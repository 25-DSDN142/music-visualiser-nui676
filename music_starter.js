var xMove = 1;
var swing = sin (frameCount *2)*5

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background("blue")
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  angleMode(DEGREES);
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   
   //rotate(angle); i like this,
   //let angle = frameCount * 0.6;
  
   


push ();
//water movement draft
xMove = xMove + 1;
if (xMove > 950){
 xMove = 0;}
pop ();



push();
   //Shell
   strokeWeight (2)
   stroke (0);
   fill ("white")
   ellipse (270, 500, 350, 350);

pop();

//shell patterns
//star pattern
let centerX = 270;
let centerY = 500;
let radius = 150;
let numStars = 57;

for (let i = 0; i < numStars; i++) {
  let angle = i * TWO_PI
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

push (); 
   strokeWeight (1);
   stroke (150);
   // fill(155 )
   fill(0)
  translate(x, y);
  rotate(angle +xMove); 
  star(0, 0, 1);
pop ();
}

//outer spears
let centx = 270;
let centy = 500;
let circles = 80;
let spears = 58

for (let t = 0; t < spears; t++) {
  let angle = t * TWO_PI + xMove
  let x = centx + circles * cos(angle);
  let y = centy + circles * sin(angle);

  push ();
  translate (x, y );
  rotate (angle - 40);
  spear (0, 0, 1);
  pop ();
}
//first set of triangles
let centreX = 270;
let centreY = 500;
let innerRadius = 120;
let triangl = 100

for (let t = 0; t < triangl; t++) {
  let angle = t * TWO_PI
  let x = centreX + innerRadius * cos(angle);
  let y = centreY + innerRadius * sin(angle);

  push ();
  translate (x, y);
  rotate (angle+80);
  tangle (0, 0, 1);
  pop ();
}
//star in the middle
push ();
translate (260, 475);
rotate (20)
star (0, 0, 1.5)
pop ();


//inner spears
let cntx = 270;
let cnty = 500;
let circl = 50;
let spearz = 58

for (let t = 0; t < spearz; t++) {
  let angle = t * TWO_PI
  let x = cntx + circl * cos(angle);
  let y = cnty + circl * sin(angle);
  
  push ();
  translate (x, y);
  rotate (angle - 40);
  spear (0, 0, 1);
  pop ();
  
  
}
let centrx = 270;
let centry = 500;
let innernRadius = -100;
let lines = 57

//x lines in the middle
for (let t = 0; t < lines; t++) {
  let angle = t * TWO_PI
  let x = centrx + innernRadius * cos(angle);
  let y = centry + innernRadius * sin(angle);

  push ();
  translate (x, y);
  rotate (angle - 10);
  xlines (0, 0, 1);
  pop ();
}

push ();
translate (20, 20);
flipper
pop ();

}
function flipper(size){
  beginShape();
  vertex(0, -size*0.5);
  bezierVertex(size*0.5, -size*0.5, size*0.8, size*0.2, 0, size);
  bezierVertex(-size*0.8, size*0.2, -size*0.5, -size*0.5, 0, -size*0.5);
  endShape(CLOSE);
}
function tangle (x, y, size){
  push ();
  triangle (x, y, 
    x+20, y, 
    x+10, y+20);
  pop ();
}
  
function xlines (x, y, size){
push();
strokeWeight (2);
stroke (0);

line (x+95, y+35, x+115, y+45);
line (x+95, y+45, x+115, y+35);
line (x+100, y+50, x+100, y+70);
line (x+110, y+50, x+110, y+70);
line (x+105, y+50, x+105, y+70);
line (x+95, y+75, x+115, y+75);
line (x+95, y+80, x+115, y+80);
pop ();
}
function spear (x, y, size,){
  
push();
strokeWeight (2);
stroke (0);
fill("red");

beginShape();
vertex (x, y)
vertex (x+50, y+50);
vertex (x+50, y+40);
vertex (x+40, y+40);
vertex (x+40, y+30);
vertex (x, y);
vertex (x+30, y+40);
vertex (x+40, y+40);
vertex (x+40, y+50);
vertex (x+50, y+50);
endShape (CLOSE);
pop();
}

function star(x,y,size){
   
  push();   
   beginShape ();
   scale(size);
   vertex (x, y);
   vertex (x+25, y+25);
   vertex (x+25, y+12.5);
   vertex (x+12.5, y+12.5);
   vertex (x+25, y);
   vertex (x+12.5, y);
   vertex (x+12.5, y+25);
   vertex (x, y+25);
   vertex (x+12.5, y+12.5);
   vertex (x, y+12.5);
   endShape (CLOSE);
   pop()
}
