

class Attractor  {
    constructor() {
        this.mas = 20;
        this.G = 1
        this.pos = createVector(width/2,height/2)
    }
    applyAttract(p) {
        let force = p5.Vector.sub(this.pos, p.pos);
        let distance = force.mag();
        distance = constrain(distance,5,25);
        force.normalize();
        //let s = this.mas*p.mas * gloablG/(distance*distance)
        var strength = (this.G * this.mas * p.mas) / (distance * distance);
        force.mult(strength);
        return force;
    }
    display() {
        fill(255);
        ellipse(width /2,height/2, this.mas*2, this.mas*2);
    }
}