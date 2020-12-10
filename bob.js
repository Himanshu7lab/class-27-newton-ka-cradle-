class Bob {
	constructor(x, y, r) {
		this.body = Bodies.circle(x, y, r);
		this.body.density = 5;
		this.body.restitution = 1;
		this.body.friction = 1;
		World.add(engine.world, this.body);
		this.radius = r;
		this.image = loadImage("bob.png");
	}
	display() {
		imageMode(CENTER);
		image(
			this.image,
			this.body.position.x,
			this.body.position.y,
			this.radius * 2,
			this.radius * 2
		);
	}
}
