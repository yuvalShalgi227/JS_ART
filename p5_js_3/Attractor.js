
const gloablG = 2;
class Attractor  {
    constructor() {
        this.mas = 2;
        this.pos = createVector(width/4,height/4)
    }
    applyAttract(p) {
        let force = p5.Vector.sub(this.pos, p.pos);
        let distance = force.mag();
        distance = constrain(distance,5,25);
        force.normalize();
        let s = this.mas*p.mas * gloablG/distance*distance
        force.mult(s);
        return s;
    }
    display() {
        fill(255);
        ellipse(width /2,height/2, 48,48);
    }
}