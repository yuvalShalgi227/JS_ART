const NUMBER_OF_AGENTS = 200;
const BALL_SIZE = 48;

let balls= [];
const randomRange = (min,max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);


//todo why is using a callback fucntion not working ?
function setup() {
  createCanvas(2080, 800);
  for (let i =1; i <= NUMBER_OF_AGENTS; i++) {
    balls.push(new Walker(randomRange(0,1080),randomRange(0,800)));
  }
}

function draw() {
  background(51);
  let offset =1 ;
  for (let i =1; i <= NUMBER_OF_AGENTS; i++) {
    if (balls[i -1].w > 100) {
      balls[i -1].setGrow(false);
    }
    if (balls[i -1].w < 10) {
      balls[i -1].setGrow(true);
    }
    balls[i -1].walk(offset);
    balls[i -1].display(offset);
  }
}

class Walker {
  display = (offset) => {
    this.col[0] += this.grow && this.col[0] <255 ? offset: offset*-1;
    this.col[1] += !this.grow && this.col[1] <150 ? offset: offset*-1;
    this.col[2] += !this.grow && this.col[2] <150 ? offset: offset*-1;
    let r= this.col;
    let g= this.col*1.5;
    let b= this.col*0.5;
    colorMode(HSB);
    fill(this.col[0],this.col[1], this.col[2]);
    ellipse(this.pos.x, this.pos.y,this.w  ,this.h );
  };
  setGrow = (value) => {
    this.grow = value;
  };
  walk = (offset) => {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.08);
    //set limit on vel
    let s = this.vel.mag;
    this.vel.add(this.acc);
    if (this.vel.mag()>10) {
      this.vel.setMag(1);
    }
    

    this.pos.add(this.vel);
    if (!this.grow){
      offset = offset * -1;
    }
    this.w =  Math.abs(this.w + offset);
    this.h =  Math.abs(this.h + offset);

};
    constructor(initx, inity) {
        this.pos = createVector(initx, inity)
        this.vel = createVector(0, 0);
        this.display = this.display.bind(this);
        this.walk = this.walk.bind(this);
        this.w = randomRange(BALL_SIZE/10,BALL_SIZE);
        this.h = randomRange(BALL_SIZE/10,BALL_SIZE);
        this.grow = true;
        this.col= [255, 204, 100]

    }

}