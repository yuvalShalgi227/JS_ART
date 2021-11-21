var particles = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Particle(400,50,1);
    a = new Attractor();
}

function mousePressed() {
    var p = new Particle(mouseX, mouseY, random(2,4));
    particles.push(p);
  }

function draw() {
    background(51);
    particles.forEach((p) => {
        let force = a.applyAttract(p);
        p.applayForce(force)
        p.update();
        p.display();
    });
    a.display()
}