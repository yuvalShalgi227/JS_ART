class Particle {
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }
    // applayForce(force) {

    // }
    update() {
        this.vel.add(this.acc);
    }

    display() {
        fill(255);
        ellipse(width /2,height/2, 48,48);
    }
}