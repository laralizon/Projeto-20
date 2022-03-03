const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var world
var engine

var block1
var block2
var block3


function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	var plane_options={
		isStatic: true
	}

	plane = Bodies.rectangle(600,480,1200,2,plane_options)
	World.add(world,plane)

	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	
	var block2_options = {
		restitution:0.07,
		friction:0.01,
		frictionAir:0.1
	}
	
	var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}


	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world, block1)

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3)

	rectMode(CENTER);

	fill("red")

	ellipseMode(CENTER)
	
  
}


function draw() {
	background("green");

	Engine.update(engine);
	
	rect(plane.position.x, plane.position.y, 1200, 2)
	ellipse(block1.position.x, block1.position.y, 10);
	rect(block2.position.x, block2.position.y, block2.width, block2.height);
	rect(block3.position.x, block3.position.y, block3.width, block3.height);
  	
	
	
	drawSprites();
 
}



