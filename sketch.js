var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var gameState = 0
var rect1 ,rect2, rect3;
var isKeyPressed = 1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1 = createSprite(400,650,200,20);
	rect1.shapeColor = color(250,1,1);

	rect2 = createSprite(500,600,20,100);
	rect2.shapeColor = color(250,1,1);

	rect3 = createSprite(300,600,20,100);
	rect3.shapeColor = color(250,1,1);
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	Engine.run(engine);

	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;

}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.collide(rect1);
  
  drawSprites();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.velocityY = 8;
  }
}



