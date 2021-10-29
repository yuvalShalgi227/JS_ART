import Agent from './Agent';
import { NUMBER_OF_AGENTS } from '../consts/drawConsts';
const random = require('canvas-sketch-util/random');

export function initAgents(Agents, width, height) {
  for (let i = 0; i < NUMBER_OF_AGENTS; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);
    Agents.push(new Agent(x, y));
  }
}

export function drawLines(Agents, context) {
    for (let i = 0; i < Agents.length; i++) {
      let agentA = Agents[i];
      for (let j = i + 1; j < Agents.length; j++) {
        let agentB = Agents[j];
        context.beginPath();
        context.moveTo(agentA.pos.x, agentA.pos.y);
        context.lineTo(agentB.pos.x, agentB.pos.y);
        context.stroke();

      }
    }
};

