export class Vehicle {
	constructor(x, y, targetX, targetY) {
		this.position = new Vector(x, y);
		this.target = new Vector(targetX, targetY);

		this.velocity = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);

		this.mouse = null;

		this.maxSpeed = 10;
		this.maxForce = 1;
	}

	update() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
		this.acceleration.mult(0);
	}

	applyForce(force) {
		this.acceleration.add(force);
	}

	behave() {
		const force = this.arrive(this.target);
		this.applyForce(force);

		if (this.mouse) {
			const distance = new Vector(this.mouse.x, this.mouse.y);
			distance.sub(this.position);
			const d = distance.mag();
			if (d < 40) {
				const force = this.flee(this.mouse);
				force.mult(3);
				this.applyForce(force);
			}
		}
	}

	seek(target) {
		const desired = new Vector(target.x, target.y);
		desired.sub(this.position);

		desired.setMag(this.maxSpeed);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.velocity);
		force.limit(this.maxForce);

		return force;
	}

	arrive(target) {
		const desired = new Vector(target.x, target.y);
		desired.sub(this.position);

		let speed = this.maxSpeed;
		const d = desired.mag();

		if (d < 50) speed = (speed * d) / 50;

		desired.setMag(speed);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.velocity);
		force.limit(this.maxForce);

		return force;
	}

	flee(target) {
		const desired = new Vector(target.x, target.y);
		desired.sub(this.position);

		desired.setMag(this.maxSpeed);
		desired.mult(-1);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.velocity);

		force.limit(this.maxForce);
		return force;
	}
}

export class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
	}

	sub(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
	}

	mult(scalar) {
		this.x *= scalar;
		this.y *= scalar;
	}

	mag() {
		return (this.x ** 2 + this.y ** 2) ** 0.5;
	}

	setMag(d) {
		const m = this.mag();
		if (m !== 0) this.mult(d / m);
	}

	limit(d) {
		const m = this.mag();
		if (m > d) {
			this.setMag(d);
		}
	}
}
