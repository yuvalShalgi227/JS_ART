
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i =0; i <= NUMBER_OF_AGENTS; i++) {
    balls.push(new Walker(random(1080),random(800)));
  }
}

function draw() {
  background(51);
  frame += 1;
  let offset =1 ;
  for (let i =0; i <= NUMBER_OF_AGENTS; i++) {
    if (balls[i].w > 100) {
      balls[i].setGrow(false);
    }
    if (balls[i].w < 10) {
      balls[i].setGrow(true);
    }
    balls[i].walk(offset);
    balls[i].display(offset);
  }
}