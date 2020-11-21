var wall ,car,weight,speed;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background(0);  
  drawSprites();
}