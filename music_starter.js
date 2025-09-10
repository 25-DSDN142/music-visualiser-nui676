var xMove = 1;

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
   ellipse (270, 290, 100, 120);
pop ();

   //arms and legs
   push ();
   strokeWeight (1);
   stroke (0);
   fill ("yellow");

   //water movement draft
xMove = xMove + 5;
  if (xMove > 950){
  xMove = 0;
   }
push();
strokeWeight (1);
stroke (0)
//ill have to play with these lines, maybe add a map to the colour?
   translate (200, 1+xMove)
   line (200, 0, 200, 100);
   line (100, 0, 100, 100);
   line (50, 100, 50, 200);
   line (-100, -100, -100, -200)

pop();

//turtle legs and arms?
push();
ellipseMode (CORNER);
//left arm

   ellipse (120, 500, 100, 180);

//right arm
   ellipse (420, 500, 100, 180);
//right leg
   ellipse (350, 650, 100, 200);
//left leg
   ellipse (190, 650, 100, 200);
   pop ();
   
   //outershell
   strokeWeight (1);
   stroke (0);
   fill (255);
   ellipse (270, 500, 300, 400);
   
   //innershell border 
   strokeWeight (2)
   stroke (0);
   fill (255)
   ellipse (270, 500, 250, 350);
   
   //so im trying to get the star to wrap around the shells inner edge line(inner shell)
   
   
   //push ();
   //for (let t = 0; t <= 8; t++){
     //xlines (165, 45*t, 1);
    //}
    //pop ();
    
    //push ();
    //for (let s = 0; s <= 8; s++){
    //  spear (100, 150*s, 1);
   // }
    //pop();

//push();
//for (let g = 0; g <= 5; g++){
 // star(257*g, 300, 1);
//}
//pop();

//push ();
//for (let c = 0; c <= 18; c++){
 // tangle (-180, 100*c, 2);
//}
//pop();

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
