var sea,seaImg;

var boat;
function preload(){
seaImg = loadImage("sea.png");
boatImg = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
 sea = createSprite(200,200,400,400)
 sea.addImage(seaImg);
 

 boat = createSprite(200,350,50,50);
 boat.addImage(boatImg);
 boat.scale = 0.1;
 
}

function draw() {
  background("blue");

  sea.velocityX = -4;
  if(sea.x <0){
    sea.x = sea.width/2;
  }

  console.log(sea.x);
  
 drawSprites();
}