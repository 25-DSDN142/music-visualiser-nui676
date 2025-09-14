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
  //turtle head?
   strokeWeight (1);
   stroke (0);
   fill (255);
   ellipse (275, 320, 120, 135);
pop ();

//push ();
//water movement draft
//xMove = xMove + 1;
//if (xMove > 950){
 // xMove = 0;}
//pop ();


let swing = sin (frameCount *2)*5
let swingout = sin (frameCount *3)*7

push ();
ellipseMode (CORNER);

strokeWeight (1);
stroke (255);
fill (0);
//left leg
translate (160 + 50, 600);
rotate (swing)
ellipse (-50, 0, 100, 180);
pop ();

push ();
strokeWeight (1);
stroke (255);
fill (0);
//right leg
translate (330 + 50, 690);
rotate (-swing);
ellipse (-50, 0, 100, 180);
pop();

push ();
strokeWeight (1);
stroke (255);
fill (0);
//left arm
translate (120 + 50, 480);
rotate (-swingout);
ellipse (-50, 0, 100, 180);
pop();

push ();
strokeWeight (1);
stroke (255);
fill (0);
//right arm
translate (430 + 50, 480);
rotate (swingout);
ellipse (-50, 0, 100, 180);
pop();

push();
   //Shell
   strokeWeight (2)
   stroke (0);
   fill (255)
   ellipse (270, 500, 350, 350);
pop();


let centerX = 270;
let centerY = 500;
let radius = 150;
let numStars = 57;

for (let i = 0; i < numStars; i++) {
  let angle = i * TWO_PI
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

push (); 
  translate(x, y);
  rotate(angle); 
  star(0, 0, 1);
pop ();
}

let centreX = 275;
let centreY = 500;
let radiuks = -550;
let triangl = 100;

for (let t = 0; t < triangl; t++) {
  let angle = t * TWO_PI
  let g = centreX + radiuks * cos(angle);
  let a = centreY + radiuks * sin(angle);

  push ();
  translate (g, a);
  rotate (angle);
  tangle (0, 0, 1);
  pop ();

}
}

function tangle (x, y, size){
  push ();
  strokeWeight (1);
  stroke (0);
  fill (0);

  triangle (x+380, y+200, 
    x+400, y+200, 
    x+390, y+220);
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
   strokeWeight (1);
   stroke (150);
   // fill(155 )
   fill(0)
   
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
