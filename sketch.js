const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, ground;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,700,1100,20);
	stone = new Stone(100,600);
	tree = new Tree(750,510,300,400);
	mango1 = new Mango(700,400);
	mango2 = new Mango(763,434);
	mango3 = new Mango(680,451);
	mango4 = new Mango(772,400);
	mango5 = new Mango(812,484);
	slingshot = new Slingshot(stone.body,{x: 100, y: 600});

	Engine.run(engine);
}


function draw() {
  background(255);

  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display(); 

  imageMode(CENTER);
  image(boy, 150,650,150,200);
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}

function mouseReleased() {
	slingshot.fly();
	Matter.Body.applyForce(stone.body,stone.body.position,{x:80 ,y:-80 });
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x: 235 , y: 420});
		slingshot.attach(stone.body);
	}
}