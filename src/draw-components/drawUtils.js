import Agent from './Agent';

import {getDistance} from '../calulation-utils/distanceUtil'
const random = require('canvas-sketch-util/random');

export const initAgents = (Agents, width, height, NUMBER_OF_AGENTS) => {
  for (let i = 0; i < NUMBER_OF_AGENTS; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);
    Agents.push(new Agent(x, y));
  }
}

export  const drawLines = (Agents, context, maxLines) => {
    for (let i = 0; i < Agents.length; i++) {
      let agentA = Agents[i];
      for (let j = i + 1; j < Agents.length; j++) {
        let agentB = Agents[j];
        
        if (getDistance(agentA,agentB)> maxLines) continue;
        context.beginPath();
        context.moveTo(agentA.pos.x, agentA.pos.y);
        context.lineTo(agentB.pos.x, agentB.pos.y);
        context.stroke();
      }
    }
};

