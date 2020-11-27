var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drop;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //package
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	
	//package
	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	//blocks
	block1 = new blocks(450,610,20,100);
	block2 = new blocks(400,650,100,20);
	block3 = new blocks(350,610,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  drop = false;
  
  console.log(packageBody);

  block1.display(20,100);
  block2.display(100,20);
  block3.display(20,100);
   if(keyDown(RIGHT_ARROW)){
	   helicopterSprite.x = helicopterSprite.x+3;
   }

   if(keyDown(LEFT_ARROW)){
	helicopterSprite.x = helicopterSprite.x-3;
}

  keyPressed();

  drawSprites();
  
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	drop === true;
	Body.setStatic(packageBody,false);
  }
}



