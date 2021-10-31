const random = require('canvas-sketch-util/random');
import {AGENT_SPEED} from '../consts/drawConsts';

export const isOutOfRange = (num, limit) => {
    if (num >= limit -6 || num <= 0) return -1;
    return 1;
};

export const agentSpeed = () => {
    return random.range(-1*AGENT_SPEED,AGENT_SPEED)
};

export const getDistance = (agentA, agentB) => (
    Math.sqrt(agentA.pos.x* agentB.pos.x + agentA.pos.y* agentB.pos.y)
)