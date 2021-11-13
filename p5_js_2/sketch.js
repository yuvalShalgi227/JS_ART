
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Particle(width/2, height/2 ,2);
    p2 = new Particle(width/4, height/2, 4);
}

function updateP(part, g) {

   
    part.applayForce(g);
    if (mouseIsPressed){
        let wind = createVector(0.2,0);
        part.applayForce(wind);
    }
    part.update();
    part.edge();
    part.display();

}
function draw() {
    background(51);
    let gravity1 = createVector(0,0.1*p.mas);
    let gravity2 = createVector(0,0.1*p2.mas);
    updateP(p, gravity1);
    updateP(p2,gravity2);

}