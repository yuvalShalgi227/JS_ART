const canvasSketch = require('canvas-sketch');

const utils = require('./draw-components/drawUtils');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = ({ width, height }) => {
  let Agents =[];
  utils.initAgents(Agents, width, height);
  
  return ({ context, width, height }) => {
    context.lineWidth = 2;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    utils.drawLines(Agents, context);
    Agents.forEach( agent => {
      agent.update();
      agent.bounce(width,height);
      agent.draw(context);
    })
  };

};

canvasSketch(sketch, settings);