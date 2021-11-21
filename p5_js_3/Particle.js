class Particle {
    constructor() {
        this.pos = createVector(400, 50);
        this.vel = createVector(1,0);
        this.acc = createVector(0,0);
        this.mas = 1;
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    applayForce(force) {
        // don't chaneg the force, use it's value (can be better if this copy is not created each time)
        let forceCopy = force.copy();
        forceCopy.div(this.mas);
        this.acc = this.acc.add(forceCopy);
    }
    display() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.mas*16, this.mas*16);
    }
}