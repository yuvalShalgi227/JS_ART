

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Particle();
    a = new Attractor();
}

function draw() {
    background(51);
    let force = a.applyAttract(p);
    p.applayForce(force)
    p.update();
    p.display();
    a.display()
}