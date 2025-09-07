
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
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

   //outershell
   strokeWeight (1);
   stroke (0);
   fill (255);
   ellipse (270, 500, 300, 400);
   
  //innershell border 
   strokeWeight (2)
   stroke (0);
   fill (255)
   ellipse (270, 500, 280, 380);

   //left arm
   strokeWeight (1);
   stroke (0);
   fill (255);
   

   pop ();
   
   //grid
   strokeWeight (1);
   stroke (155);
   line (0, 0, 540, 960);
   line (540, 0, 0, 960);
   line (270, 0, 270, 960);
   line (0, 480, 540, 480);
  }
   
   
   

   
   
   
   
   
   
  
   
   
   
  


function spear (x, y, size,){
  
push();
strokeWeight (1);
stroke (0);
fill(155);
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
   strokeWeight (2);
   stroke (255);
   // fill(155 )
   fill(220, 150)
   
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
