const random = require('canvas-sketch-util/random');
import Point from './Point';
import {MAX_POINT_SIZE,MIN_POINT_SIZE,SPEED} from '../consts/drawConsts';
import {isOutOfRange} from '../calulation-utils/distanceUtil'
class Agent {
    constructor(x,y) {
        const speed = SPEED;
        this.pos = new Point(x,y);
        this.vector = new Point(random.range(-1*speed,speed),random.range(-1*speed,speed));
        this.rad = random.range(MIN_POINT_SIZE,MAX_POINT_SIZE);
    }
    update() {
        this.pos.x += this.vector.x;
        this.pos.y += this.vector.y;
    }
    bounce(width,height) {
       this.vector.x *= isOutOfRange(this.pos.x, width);
       this.vector.y *= isOutOfRange(this.pos.y,height);
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