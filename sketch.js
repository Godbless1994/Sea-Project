var boat_moving, boat, edges;
var seaImage;
var sea;
function preload(){
boat_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");


}

function setup(){
  createCanvas(800,800);
  //create boat
  sea = createSprite(200,200,20,20);
  sea.addImage("sea",seaImage);
  
  boat = createSprite(400,400);
   boat.addAnimation("moving", boat_moving); 
  
  edges = createEdgeSprites();
  
}

function draw() {
  background("blue");
   boat.scale = 0.3;
  sea.velocityX = -2;
  drawSprites();
 
}