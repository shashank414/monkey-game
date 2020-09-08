var monkey
var banana
var stone
var monkeyimage
var bananaimage
var stoneimage
var score
var ground
var bananagroup
var stonegroup
var gameState
var end
var score

function preload(){
monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaimage=loadImage("banana.png");
stoneimage=loadImage("stone.png");
}
function spawnObstacles() {
  if(frameCount % 120 === 0) {
    stone = createSprite(300,370,20,50);
  stone.addAnimation("monkey", stoneimage);
  stone.scale = 0.2;
  stone.velocityX=-3;
    stonegroup.add(stone);
  }
}

function spawnbanana() {
  if(frameCount % 240 === 0) {
    banana = createSprite(300,250,20,50);
  banana.addAnimation("monkey", bananaimage);
  banana.scale = 0.1;
  banana.velocityX=-3;
    bananagroup.add(banana);
  }
}




function setup() {
  createCanvas(400, 400);
 monkey = createSprite(50,340,20,50);
  monkey.addAnimation("monkey", monkeyimage);
  monkey.scale = 0.2;
  bananagroup=createGroup();
  stonegroup=createGroup();
  ground=createSprite(200,400,800,10);
  gamestate="PLAY"
  score=0
}

function draw() {
  background(220);
  if(keyDown("space") && monkey.y >= 200){
      monkey.velocityY = -10 ;
      
    }
  
  
  if(monkey.isTouching(stonegroup))
     {monkey.destroy();
      gamestate="END"
     
     }
  
  if(monkey.isTouching(bananagroup))
     {bananagroup.destroyEach();
      gamestate="END"
     
     }
  
  
  
  if(gamestate==="PLAY"){
     
    spawnObstacles();
  spawnbanana(); 
   score=score+1  
     
     }
  
  if(gameState==="END")
    {
      stonegroup.velocityX=0;
     bananagroup.velocityX=0;
      gameState=end
     }
  monkey.velocityY=monkey.velocityY+1
  drawSprites();
  monkey.collide(ground);
 text("Score: "+ score, 300,15);
}