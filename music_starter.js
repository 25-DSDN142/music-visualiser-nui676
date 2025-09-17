var xMove = 1;//have to declare for some reason otherwise it doesn't work
var r = 0;
var blue = 255;

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
  
  
    let v = map (vocal, 0, 100, 0, 114);
    let b = map (bass, 30, 100, 0, 57); 
    let d = map (drum, 0, 100, 0, 255);

    let red = color (234, 64, 52);
    let orange = color (242, 158, 48);
    let yellow = color (239, 242, 48);
  
  
    push ();
  xMove = xMove + 1;
  if (xMove > 200){ xMove = 0;}
  pop ();

  let swim = sin(frameCount * 1 ) *50
  let flap = sin (frameCount * 1) *15

  //left flipper
  push ();
  translate (120, 450);
  rotate (-90 + swim)
  flipper (80);
  pop();
  
  //left foot flipper
  push ();
  translate (200, 700);
  rotate (180 + flap)
  flipper (80)
  pop ();
  
  //right flipper
  push ();
  translate (420, 450);
  scale (-1, 1);
  rotate (-90 + swim);
  flipper (80);
  pop ();

  //right foot flipper
  push ();
  translate (340, 700);
  scale (-1, 1);
  rotate (180 + flap);
  flipper (80);
  pop ();

  //head
  push();
  strokeWeight (1);
  stroke (255);
  fill (0)
  ellipse (270, 305, 90, 130);
  
  //outer circle shell
  strokeWeight (4)
  stroke (yellow)
  fill (red)
  ellipse (270, 500, 280, 380);
  
  //inner circle shell
  strokeWeight (3)
  stroke (orange)
  fill (yellow)
  ellipse (270, 500, 220, 320);
    
  //inner inner circle shell
  strokeWeight (3)
  stroke (red)
  fill (yellow);
  ellipse (270, 500, 150, 230);
  pop();

  //shell
  
  //middle of shell
  
  //black spears
  let centerX = 270;
  let centerY = 500;
  let radiuX = 100/2;
  let radiuY = 200/2;
  let numb = v;
  
  for (let i = 0; i < numb; i++) {
    let angles = i * TWO_PI
    let x = centerX + radiuX * cos(angles);
    let y = centerY + radiuY * sin(angles);
    
    push();
    strokeWeight (1.5);
    stroke (red);
    fill(d)
    
    translate (x, y);
    rotate (angles - 40);
    spear (0, 0, 1);
    pop ();
  }

  //star on the outside
  let centreX = 270;
  let centreY = 500;
  let radiusX = 240/2;
  let radiusY = 340/2;
  let num = b;
  
  for (let i = 0; i < num; i++) {
    let angle = i * TWO_PI
    let x = centreX + radiusX * cos(angle);
    let y = centreY + radiusY * sin(angle);
    
    push();
    strokeWeight (1);
    stroke (orange);
    fill(d)
    
    translate(x, y);
    rotate(angle); 
    star(0, 0, 1);
    pop ();
  }
  
  //triangles in the middle
  let cX = 270;
  let cY = 500;
  let radX = 90/2;
  let radY = 160/2;
  let numbs = v;
  
  for (let i = 0; i < numbs; i++) {
    let angle = i * TWO_PI
    let x = cX + radX * cos(angle);
    let y = cY + radY * sin(angle);
    
    push();
    strokeWeight (1);
    stroke (255);
    fill(d)
    
    translate(x, y);
    rotate(angle); 
    tangle(0, 0, 1);
    pop ();
  }

  //middle of shell
    push ();
    translate (115, 400);
    strokeWeight (2);
    stroke (0);
    xlines (0,0,1.5);
    pop();

}

  

function flipper(size){
  strokeWeight (1);
  stroke (255);
  fill (0);
  beginShape();
  vertex(0, -size*1);
  bezierVertex(size*1, -size*0.5, size*0.5, size*1, 0, size);
  bezierVertex(-size*1, size*0.2, -size*0.1, -size*0.5, 0, -size*1);
  endShape(CLOSE);
}
function tangle(x,y,size){
  push ();
  scale (size);
  triangle (x, y, 
    x+20, y, 
    x+10, y+20);
  pop ();
}
  
function xlines(x,y,size){
push();
scale (size);
line (x+95, y+35, x+115, y+45);
line (x+95, y+45, x+115, y+35);
line (x+100, y+50, x+100, y+70);
line (x+110, y+50, x+110, y+70);
line (x+105, y+50, x+105, y+70);
line (x+95, y+75, x+115, y+75);
line (x+95, y+80, x+115, y+80);
pop ();
}
function spear(x,y,size){
  
push();
scale (size);
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
