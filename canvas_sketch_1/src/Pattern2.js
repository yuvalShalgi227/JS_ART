const canvasSketch = require('canvas-sketch');
import {LINE_WIDTH, BACKGROUND_COLOR,  NUMBER_OF_AGENTS, MAX_LINE_SIZE_PATTERN2} from './consts/pattern2DrawConsts'

const utils = require('./draw-components/drawUtils');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = ({ width, height }) => {
  let Agents =[];
  utils.initAgents(Agents, width, height, NUMBER_OF_AGENTS);
  
  return ({ context, width, height }) => {
    context.lineWidth = LINE_WIDTH;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    utils.drawLines(Agents, context, MAX_LINE_SIZE_PATTERN2);
    Agents.forEach( agent => {
      agent.update();
      agent.bounce(width,height);
      agent.draw(context);
    })
  };

};

canvasSketch(sketch, settings);