var vehicles = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    p = new Vehicle(400,50);
    vehicles.push(p);
}

function mousePressed() {
    var p = new Vehicle(mouseX, mouseY, random(2,4));
    vehicles.push(p);
  }

function draw() {
    background(51);
    let traget = createVector(mouseX,mouseY);
    vehicles.forEach((v) => {
        v.seek(traget);
        v.update();
        v.display();
    });
    p.display()
}