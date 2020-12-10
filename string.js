class String {
	constructor(x, y, oX, oY) {
		this.oX = oX;
		this.oY = oY;
		this.string = Matter.Constraint.create({
			bodyA: x,
			bodyB: y,
			pointB: { x: oX, y: oY },
			length: 250,
			stiffness: 3,
		});
		World.add(engine.world, this.string);
	}
	display() {
		if (this.string.bodyA) {
			line(
				this.string.bodyA.position.x,
				this.string.bodyA.position.y,
				this.string.pointB.x + this.string.bodyB.position.x,
				this.string.pointB.y + this.string.bodyB.position.y
			);
		}
	}
}
