class Walker {
    constructor(initx, inity) {
        this.pos = createVector(initx, inity)
        this.vel = createVector(0, 0);
        this.display = this.display.bind(this);
        this.w = random(BALL_SIZE/10,BALL_SIZE);
        this.h = random(BALL_SIZE/10,BALL_SIZE);
        this.grow = true;
        this.col= [255, 204, 100]
    };
    display = (offset) => {
      this.col[0] += this.grow && this.col[0] <255 ? offset: offset*-1;
      this.col[1] += !this.grow && this.col[1] <150 ? offset: offset*-1;
      this.col[2] += !this.grow && this.col[2] <150 ? offset: offset*-1;
      // let r= this.col[0];
      // let g= this.col[1]*(1 + noise(frame));
      // let b= this.col[2]*noise(frame);
      colorMode(HSB);
      fill(this.col[0],this.col[1], this.col[2]);
      ellipse(this.pos.x, this.pos.y,this.w  ,this.h );
    };
    setGrow = (value) => {
      this.grow = value;
    };
    updateVal(){
      this.vel.add(this.acc);
    };
    updateAcc() {
      let mouse = createVector(mouseX, mouseY);
      this.acc = p5.Vector.sub(mouse, this.pos);
      this.acc.setMag(0.08);
    };
    normLimitsForces() {
      //rotate from size
      if (this.vel.mag()>100) {
        this.acc.rotate(-0.3);
        this.vel.setMag(10);
      }else {
        this.acc.rotate(0.3);
      }
    };
    setSize(offset) {
      this.w =  Math.abs(this.w + offset);
      this.h =  Math.abs(this.h + offset);
    };
    walk = (offset) => {
      this.updateAcc();
      this.updateVal();
      this.normLimitsForces();
      this.pos.add(this.vel);
     
      //implement growth change
      if (!this.grow){
        offset = offset * -1;
      }
      
      this.edge();
      this.setSize(offset);
    };
    edge() {
      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y *=-1;
      }
      if (this .pos.x < 0 || this.pos.x > width ) {
        this.vel.x *=-1;
      }
      
    }
  
  }