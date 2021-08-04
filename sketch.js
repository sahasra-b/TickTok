
function setup() {
   let c = createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  c.position(50, 100);
}

function draw() {
  {
    let hr = hour();
  let mn= minute();
  let sc= second();
  angleMode(DEGREES);

  background(0);  
  
  let scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,110,199);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  translate(0, 0);
  drawSprites();
  //arc(50, 55, 50, 50, 0, HALF_PI);

  let mnAngle = map(mn, 2, 60, 0, 360);

  push();
  rotate(mnAngle);
  stroke(0,255,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  translate(0, 0);
  drawSprites();
  //arc(50, 55, 50, 50, 0, HALF_PI);

  let hrAngle = map(hr, 0, 60, 90, 360);

  push();
  rotate(hrAngle);
  stroke(255,0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  translate(0, 0);
  drawSprites();
  //arc(50, 55, 50, 50, 0, HALF_PI);

  //let mnAngle = map(mn, 0, 60, 0, 360);

}


}