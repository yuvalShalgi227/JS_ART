const random = require('canvas-sketch-util/random');
import Point from './Point';
import {MAX_POINT_SIZE,MIN_POINT_SIZE,SPEED} from '../../consts/drawConsts';
class Agent {
    constructor(x,y) {
        const speed = SPEED;
        this.pos = new Point(x,y);
        this.val = new Point(random.range(-1*speed,speed),random.range(-1*speed,speed));
        this.rad = random.range(MIN_POINT_SIZE,MAX_POINT_SIZE);
    }
    update() {
        this.pos.x += this.val.x;
        this.pos.y += this.val.y;
    }
    bounce(width,height) {
        if (this.pos.x >= width -6 || this.pos.x <= 0) this.val.x *= -1;
        if (this.pos.y >= height -6 || this.pos.y <= 0) this.val.y *= -1;
    }
    draw(context) {
        context.save()
        context.lineWidth = 2;
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.rad, 0 , Math.PI * 2);
        context.fill();
        context.stroke();
        context.restore();
    } 
  };

export default Agent;