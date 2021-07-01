var ship, ship_sailing,seaImg
var sea

function preload() {
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
  seaImg= loadImage("sea.png");


}

function setup() {
  createCanvas(600, 600);

  //create a trex sprite
  ship= createSprite(200,200,50,40);
 ship.addAnimation(ship_sailing);
 
  //create a ground sprite
  sea = createSprite(300,400);
 sea.addImage(seaImg);
sea.x = sea.width /2;
 sea.velocityX = -100;
  
  
}

function draw() {
   background(0); 
   sea.velocityX = -3; 
   //code to reset the background 
   if(sea.x < 0){ 
     sea.x = sea.width/8; } 
     console.log(ship.y)

     drawSprites(); 
    }