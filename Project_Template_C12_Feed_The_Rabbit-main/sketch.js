var garden , rabbit;
var gardenImg , rabbitImg ;
var apple , appleImg ;
var leaf , leafImg ;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
   
   createCanvas(400,400);

   //moving background
   garden = createSprite(200,200);
   garden.addImage(gardenImg);

   //creating rabbit running
   rabbit = createSprite(180,340,30,30);
   rabbit.scale = 0.09;
   rabbit.addImage(rabbitImg);
} 

function draw(){
  background(0);
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var select_sprites = Math.round(random(1.3));
  if (frameCount % 80 ==0){
    if (select_sprites == 1)
    { createApples();}
    else if (select_sprites == 2){
      createApples();
    }
    else{createApples();}
    drawSprites();
  }
}