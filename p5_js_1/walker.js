class Walker {
    display = (offset) => {
      this.col[0] += this.grow && this.col[0] <255 ? offset: offset*-1;
      this.col[1] += !this.grow && this.col[1] <150 ? offset: offset*-1;
      this.col[2] += !this.grow && this.col[2] <150 ? offset: offset*-1;
      let r= this.col[0];
      let g= this.col[1]*(1 + noise(offX));
      let b= this.col[2]*noise(offX);
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
      //set limit on velocity
      let s = this.vel.mag;
      this.vel.add(this.acc);
      if (this.vel.mag()>10) {
        this.vel.setMag(1);
      }
  
      //rotate from size
      if (this.vel.mag()>10) {
        this.acc.rotate(-0.3);
        this.vel.setMag(2);
      }else {
        this.acc.rotate(0.3);
      }
      this.pos.add(this.vel);
  
      //implement groth chaange
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
          this.w = random(BALL_SIZE/10,BALL_SIZE);
          this.h = random(BALL_SIZE/10,BALL_SIZE);
          this.grow = true;
          this.col= [255, 204, 100]
  
      }
  
  }