const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var sideRod;
var base;
var constraint1, constraint2, constraint3, constraint4, constraint5;

function preload() {
	sideRod = loadImage("sideRod.png");
	base = loadImage("base.jpg");
}
function setup() {
	createCanvas(830, 600);

	engine = Engine.create();

	world = engine.world;

	roof = new Roof(400, 50, 400, 25);

	bob1 = new Bob(260, 325, 35);

	bob2 = new Bob(330, 325, 35);

	bob3 = new Bob(400, 325, 35);

	bob4 = new Bob(470, 325, 35);

	bob5 = new Bob(540, 325, 35);

	constraint1 = new String(bob1.body, roof.body, -140, 0);

	constraint2 = new String(bob2.body, roof.body, -70, 0);

	constraint3 = new String(bob3.body, roof.body, 0, 0);

	constraint4 = new String(bob4.body, roof.body, 70, 0);

	constraint5 = new String(bob5.body, roof.body, 140, 0);
}

function draw() {
	Matter.Engine.update(engine);
	background(255);

	bob1.display();

	bob2.display();

	bob3.display();

	bob4.display();

	bob5.display();

	constraint1.display();

	constraint2.display();

	constraint3.display();

	constraint4.display();

	constraint5.display();

	image(sideRod, 200, 225, 25, 375);

	image(sideRod, 600, 225, 25, 375);

	image(base, 425, 510, 850, 193);

	roof.display();
}

function keyPressed() {
	if (keyCode == 38) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {
			x: -0.2,
			y: 0.15,
		});
	}
}
