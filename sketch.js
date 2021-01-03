
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree1;
var ground;
var boy,boyImage;
var stone;
function preload(){

boyImage = loadImage("boy.png")	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,620,10,50);
	boy.addImage(boyImage);

	tree1 = new Tree(800,430,400,500);
	ground = new Ground(500,670,1000,20);
	mango = new Mango(650,400,5);
	stone = new Stone(500,350,60,60)

	Engine.run(engine);
  
}


function draw() {
  background(rgb(104,62,220));

  drawSprites();
  tree1.display();
  ground.display();
  mango.display();
  stone.display();
}



