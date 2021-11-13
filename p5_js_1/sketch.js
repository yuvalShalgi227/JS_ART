
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i =1; i <= NUMBER_OF_AGENTS; i++) {
    balls.push(new Walker(random(1080),random(800)));
  }
}

function draw() {
  background(51);
  offX += 1;
  let offset =1 ;
  for (let i =1; i <= NUMBER_OF_AGENTS; i++) {
    if (balls[i -1].w > 100) {
      balls[i -1].setGrow(false);
    }
    if (balls[i -1].w < 10) {
      balls[i -1].setGrow(true);
    }
    balls[i -1].walk(offset);
    balls[i -1].display(offset);
  }
}