
var trex ,trex_running;
function preload(){
 
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")


}

function setup(){
  createCanvas(600,200)
 
  //create a trex sprite
  trex = createSprite(150,190,80,80)
 trex.addAnimation("running",trex_running)
 trex.scale = 0.5
 ground = createSprite(300,200,600,40)


}

function draw(){
  background("wheat")
 
trex.collide(ground)

trex.velocityY = trex.velocityY +0.8
  
if (keyDown("space")){
 trex.velocityY=- 10
 
  }



 drawSprites()
}
