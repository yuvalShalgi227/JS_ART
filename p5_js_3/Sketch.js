

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Particle();
    a = new Attractor();
}

function draw() {
    background(51);
    a.applyAttract(p);
    p.update();
    p.display();
}