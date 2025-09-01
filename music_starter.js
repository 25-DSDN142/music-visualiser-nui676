
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
   line ()

strokeWeight (2);
stroke (255);
fill(155)
beginShape ();
vertex (0, 0);
vertex (25, 25);
vertex (25, 12.5);
vertex (12.5, 12.5);
vertex (25, 0);
vertex (12.5, 0);
vertex (12.5, 25);
vertex (0, 25);
vertex (12.5, 12.5);
vertex (0, 12.5)
endShape (CLOSE);

line (0, 0, 540, 960)//canvas size?




}