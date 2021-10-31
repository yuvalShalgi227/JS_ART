const random = require('canvas-sketch-util/random');
import Point from './Point';
import {MAX_POINT_SIZE,MIN_POINT_SIZE, LINE_WIDTH} from '../consts/drawConsts';
import {isOutOfRange, agentSpeed } from '../calulation-utils/distanceUtil'

class Agent {
    constructor(x,y) {
        this.pos = new Point(x,y);
        this.vector = new Point(agentSpeed(),agentSpeed());
        this.rad = random.range(MIN_POINT_SIZE,MAX_POINT_SIZE);
        this.cruve1 = random.range(100,300)
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
        context.lineWidth = LINE_WIDTH;
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.rad, 0 , Math.PI * 2);
        context.fill();
        context.stroke();
        context.restore();
    } 
  };

export default Agent;