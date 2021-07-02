var snowflake,snowflakeImg;
var bgImg,boyImg;

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  bgImg = loadImage("snow3.jpg");
  boyImg=loadAnimation("boy1.png")
}
function setup() {
  createCanvas(800,400);

  boy = createSprite(350,200,20,20);
  boy.addAnimation("boystanding",boyImg);
  boy.scale=0.5;

}

function draw() {
  background(bgImg);
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}