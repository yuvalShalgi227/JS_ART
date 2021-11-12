const NUMBER_OF_AGENTS = 200;
const BALL_SIZE = 48;
let chunks = [];
let frame =0;
let balls= [];


const randomRange = (min,max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);
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
    
   
    if (this.vel.mag()>10) {
      this.acc.rotate(-0.3);
      this.vel.setMag(1);
    }else {
      this.acc.rotate(0.3);
    }
    
    this.vel.add(this.acc);
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

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement('video');
  vid.id = 'recorded'
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}

class Recorder {
  constructor() {
    chunks.length = 0;
    let stream = document.querySelector('canvas').captureStream(30),
    recorder_temp = new MediaRecorder(stream);
    this.recorder1 = recorder_temp;
    this.recorder1.ondataavailable = e => {
      if (e.data.size) {
        chunks.push(e.data);
      }
    }
  };
  startRec = () => {
    this.recorder1.start();
  };
  stopRec = () => {
    this.recorder1.onstop = exportVideo;
    this.recorder1.stop();
  };
};



//todo why is using a callback fucntion not working ?
function setup() {
  createCanvas(2080, 800);
 
  for (let i =1; i <= NUMBER_OF_AGENTS; i++) {
    balls.push(new Walker(randomRange(0,1080),randomRange(0,800)));
  }
}

function draw() {
  if (frame === 0){
    let rec = new Recorder();
    rec.startRec();
  }
  frame += 1;
  if (frame>600) {
    rec.stopRec();
  }
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

