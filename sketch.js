var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redbottom,rb,rl,rr,redright,redleft;
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
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	
	rb=createSprite(0,45,200,20);
	rb.shapeColor="red";
	
	rl=createSprite(0,45,20,100);
	rl.shapeColor="red";

	rr = createSprite(0,45,20,100);
	rr.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	redbottom = Bodies.rectangle(400,650,200,20);
	redleft = Bodies.rectangle(300,610,20,100);
	redright = Bodies.rectangle(500,610,20,100);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  rb.x=redbottom.position.x;
  rb.y=redbottom.position.y;

  rr.x=redright.position.x;
  rr.y=redright.position.y;

  rl.x=redleft.position.x;
  rl.y=redleft.position.y;
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
	
 }
}



