
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Particle();
}
function draw() {
    background(51);
    //applayForce
    p.update();
    p.display();
}