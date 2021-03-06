 function Bird() {
	this.y = height/2;
	this.x = 64;

	this.gravity = 0.6 * speedUp;
	this.lift = -15 * speedUp;
	this.velocity = 0* speedUp;
	this.show = function () {
		fill(255, 187, 51);
		ellipse(this.x, this.y, 25, 25);
	}
	this.up= function(){
		this.velocity += this.lift;

	}
	this.update= function () {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity =0;
		}
		if (this.y <0 ) {
			this.y = 0;
			this.velocity = 0;
		}

	}
}
