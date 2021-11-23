class Vehicle {
    constructor(x,y) {
        this.pos = createVector(x, y);
        this.vel = createVector(1,0);
        this.acc = createVector(0,0);
        this.maxSpeed= 100;
        this.maxForce = 0.02;
        this.mas =1;
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
    seek(target) {
        let desired = p5.Vector.sub(target,this.pos);
        desired.limit(this.maxSpeed);
        let streaning = p5.Vector.sub(desired,this.vel);
        streaning.limit(this.maxForce)
        this.applayForce(streaning);


    };
    display() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.mas*16, this.mas*16);
    }
}