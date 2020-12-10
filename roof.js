class Roof {
	constructor(x, y, w, h) {
		this.body = Bodies.rectangle(x, y, w, h);
		this.body.isStatic = true;
		World.add(engine.world, this.body);
		this.width = w;
		this.height = h;
		this.image = loadImage("topRod.png");
	}
	display() {
		imageMode(CENTER);
		image(
			this.image,
			this.body.position.x,
			this.body.position.y,
			this.width,
			this.height
		);
	}
}
