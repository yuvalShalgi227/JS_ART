class Particle {
    constructor(x,y,mas) {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mas = mas;
    }
    update() {
        this.vel = this.vel.add(this.acc);
        this.pos = this.pos.add(this.vel);
        this.acc.set(0);

    }
    display() {
        fill(255);
        ellipse(this.pos.x,this.pos.y,48,48);
    }
    applayForce(force) {
        // don't chaneg the force, use it's value (can be better if this copy is not created each time)
        let forceCopy = force.copy();
        forceCopy.div(this.mas);
        this.acc = this.acc.add(forceCopy);
    }
    edge() {
        if (this.pos.y < 0 || this.pos.y > height) {
          this.vel.y *=-1;
        }
        if (this .pos.x < 0 || this.pos.x > width ) {
          this.vel.x *=-1;
        }
    }
}