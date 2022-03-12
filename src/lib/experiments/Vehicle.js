export default class Vehicle {
	constructor(x, y, targetX, targetY) {
		this.pos = new Vector(x, y);
		this.target = new Vector(targetX, targetY);

		this.vel = new Vector(0, 0);
		this.acc = new Vector(0, 0);

		this.mouse = null;

		this.maxSpeed = 10;
		this.maxForce = 1;
	}

	update() {
		this.pos.add(this.vel);
		this.vel.add(this.acc);

		this.acc.set(new Vector(0, 0));
	}

	applyForce(force) {
		this.acc.add(force);
	}

	behave() {
		const force = this.arrive(this.target);
		this.applyForce(force);

		if (this.mouse) {
			const distance = new Vector(this.mouse.x, this.mouse.y);
			distance.sub(this.pos);
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
		desired.sub(this.pos);

		desired.setMag(this.maxSpeed);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.vel);
		force.limit(this.maxForce);

		return force;
	}

	arrive(target) {
		const desired = new Vector(target.x, target.y);
		desired.sub(this.pos);

		let speed = this.maxSpeed;
		const d = desired.mag();

		if (d < 50) speed = (speed * d) / 50;

		desired.setMag(speed);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.vel);
		force.limit(this.maxForce);

		return force;
	}

	flee(target) {
		const desired = new Vector(target.x, target.y);
		desired.sub(this.pos);

		desired.setMag(this.maxSpeed);
		desired.mult(-1);

		const force = new Vector(desired.x, desired.y);
		force.sub(this.vel);

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

	mult(d) {
		this.x *= d;
		this.y *= d;
	}

	set(vector) {
		this.x = vector.x;
		this.y = vector.y;
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
