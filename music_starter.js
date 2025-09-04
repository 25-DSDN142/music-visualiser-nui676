
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
   push();
 let v = map (bass, 0, 100, 0, 8);

   for (let i = 1; i <= v; i++){
   //let angle = frameCount * 0.6;
  //rotate(angle); i like this, 
  rotate (3);
   star (25*i, 100, 2);
   }
 pop();

push();
  strokeWeight (1);
  stroke (100);
  noFill();
  //fill (map something to the transparency)
beginShape();
vertex (0, 0)
vertex (50, 50);
vertex (50, 40);
vertex (40, 40);
vertex (40, 30);
vertex (0, 0);
vertex (30, 40);
vertex (40, 40);
vertex (40, 50);
vertex (50, 50);
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
function leaves (x,y,size){
  
  push();
  strokeWeight (100);
  stroke (100);
  //fill (map something to the transparency)

  beginShape ();
  push ();
  scale (size)
  curve (x+100, y+200, x+150, y+80, x+180, y+90, x+250, y+200)
  endShape (CLOSE);
  pop();
  
}