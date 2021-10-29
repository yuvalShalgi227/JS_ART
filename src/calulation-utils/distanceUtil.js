const random = require('canvas-sketch-util/random');
import {SPEED} from '../consts/drawConsts';

export const isOutOfRange = (num, limit) => {
    if (num >= limit -6 || num <= 0) return -1;
    return 1;
};

export const agentSpeed = () => {
    return random.range(-1*SPEED,SPEED)
};