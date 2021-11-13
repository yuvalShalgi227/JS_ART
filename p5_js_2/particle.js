class Particle {
    constructor() {
        this.pos = createVector(width/2,height/2);
        this.val = createVector(0,0);
        this.acc = createVector(0,0);


    }
    update() {
        this.val = this.val.add(this.acc);
        this.pos = this.pos.add(this.vel);

    }
    display() {
        fill(255);
        ellipse(this.pos.x,this.pos.y,48,48);
    }
    applayForce(force) {
        this.val = force;

    }
}