var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200)

  //spawning monkey
  monkey = createSprite(50, 160, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1
  
invisibleGround = createSprite(200, 180, 600, 10)
      //invisibleGround.visible = false


  //for jumping
    if (keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -12;
      
      
}
} 

function draw() {
  background("220")
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 1

    //stoping monkey from falling
    monkey.collide(invisibleGround);

//for jumping
    if (keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -12;
      
      
      // if(obstacleGroup.isTouching(monkey)){

    //obstacle.destroy();
     //console.log("game over")
    // }
    }
    



   

  spawnObstacles()


  drawSprites()


}

function spawnObstacles() {
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(600, 165, 20, 20);
    obstacle.velocityX = -5
    obstacle.addImage("obstacle", obstacleImage);

    obstacle.scale = 0.1


    
  }

}