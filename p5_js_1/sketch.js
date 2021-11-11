const NUMBER_OF_AGENTS = 40;
const BALL_SIZE = 48;

let ball;
let balls= [];
const randomRange = (min,max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);




//todo why is using a callback fucntion not working ?
function setup() {

  createCanvas(1080, 800);
  for (let i =0; i < NUMBER_OF_AGENTS; i++) {
    balls.push(new Walker(randomRange(0,1080),randomRange(0,800)));
  }
}

function draw() {
  background(51);
  for (let i =0; i < NUMBER_OF_AGENTS; i++) {
    balls[i].walk();
    balls[i].display();
  }
}

class Walker {
    constructor(initx, inity) {
        this.pos = createVector(initx, inity)
       //acc.Vector.fromAngle();
        this.vel = createVector(0, 0);

        this.display = () => {
            fill(225);
            ellipse(this.pos.x, this.pos.y, randomRange(BALL_SIZE/10,BALL_SIZE), randomRange(BALL_SIZE/10,BALL_SIZE));
        };
        this.walk = () => {
            let mouse = createVector(mouseX, mouseY);
            this.acc = p5.Vector.sub(mouse, this.pos);
            this.acc.setMag(0.1);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        }
    }
}



