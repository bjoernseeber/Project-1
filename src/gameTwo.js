class GameTwo {
  constructor() {
  this.horizon;

  this.speedTwo = 0;
  this.y1 = HEIGHT / 6;
  this.y2 = 2*(HEIGHT / 6);
  this.y3 = 3*(HEIGHT / 6);
  this.y4 = 4*(HEIGHT / 6);
  this.y5 = 5*(HEIGHT / 6);

  this.obstaclesTwo = [];

  }

  setup() {
  this.horizon = loadImage("assets/Nuke-adjusted-2.png")
  }

  drawHorizon() {
    image(this.horizon, WIDTH / 2, 0, WIDTH / 2, HEIGHT / 4.9)
  }

  drawRoadGround() {
    fill(150,150,150);
    rect(WIDTH / 2, HEIGHT / 5, WIDTH / 2, HEIGHT);
  }

  
  drawRoadSide() {
    fill(195,175,145);
    triangle(WIDTH / 2, HEIGHT / 5, WIDTH / 2, HEIGHT - (HEIGHT / 10),(WIDTH / 2) + (WIDTH / 8) - (WIDTH / 40), HEIGHT / 5)
    triangle((WIDTH / 2) + (3 * (WIDTH / 8) + (WIDTH / 40)), HEIGHT / 5, WIDTH, HEIGHT - (HEIGHT / 10), WIDTH, HEIGHT / 5) 
  }

  drawRoadBoarder() {
    stroke(255,255,255);
    strokeWeight(6);
    line((WIDTH / 2) + (WIDTH / 8) - (WIDTH / 40), HEIGHT / 5, WIDTH / 2 , HEIGHT - (HEIGHT / 10));
    line((WIDTH / 2) + (3 * (WIDTH / 8) + (WIDTH / 40)) , HEIGHT / 5, WIDTH, HEIGHT - (HEIGHT / 10)); 
  }

  drawMiddleLine() {
    stroke(255,255,255);
    strokeWeight(4);
    line(3 * (WIDTH / 4), HEIGHT / 5, 3 * (WIDTH / 4), HEIGHT);
  }

  drawLineEffect() {
    fill(255,255,255);
    triangle(3 * (WIDTH / 4), HEIGHT / 5, 3 * (WIDTH / 4) - WIDTH / 100, HEIGHT, 3 * (WIDTH / 4), HEIGHT);
    triangle(3 * (WIDTH / 4), HEIGHT / 5, 3 * (WIDTH / 4) + WIDTH / 100, HEIGHT, 3 * (WIDTH / 4), HEIGHT);
  }

  drawRoadMovement() {
    strokeWeight(0);
    fill(150,150,150);
    rect(3 * (WIDTH / 4) - (WIDTH / 40), this.y1, WIDTH / 20, HEIGHT / 35);
    rect(3 * (WIDTH / 4) - (WIDTH / 40), this.y2, WIDTH / 20, HEIGHT / 35);
    rect(3 * (WIDTH / 4) - (WIDTH / 40), this.y3, WIDTH / 20, HEIGHT / 35);
    rect(3 * (WIDTH / 4) - (WIDTH / 40), this.y4, WIDTH / 20, HEIGHT / 35);
    rect(3 * (WIDTH / 4) - (WIDTH / 40), this.y5, WIDTH / 20, HEIGHT / 35);

    this.y1 += this.speedTwo; 
    this.y2 += this.speedTwo;
    this.y3 += this.speedTwo;
    this.y4 += this.speedTwo;
    this.y5 += this.speedTwo;


// ACCELERATION
    if (keyIsDown(38)) {
      this.speedTwo += 0.025;
    }
    
    if (keyIsDown(40)) {
      this.speedTwo -= 0.045;
    }

// Let the blocks repeat

  if (this.y1 >= HEIGHT){
    this.y1 = HEIGHT / 5;
  }
  
  if (this.y2 >= HEIGHT){
    this.y2 = HEIGHT / 5;
  }
  
  if (this.y3 >= HEIGHT){
    this.y3 = HEIGHT / 5;
  }
 
  if (this.y4 >= HEIGHT){
    this.y4 = HEIGHT / 5;
  }

  if (this.y5 >= HEIGHT){
    this.y5 = HEIGHT / 5;
  }

// Speed Limitations!
if (this.speedTwo >= 6) {
  this.speedTwo = 6
}

if (this.speedTwo <= 0) {
  this.speedTwo = 0
}


// Obstacles => Make random!

if (frameCount % 200 === 0) {
  this.obstaclesTwo.push(new ObstaclesTwo());
  this.obstaclesTwo[this.obstaclesTwo.length-1].setup()

}

this.obstaclesTwo.forEach(obstacles => {
obstacles.drawPutin();
});


}

drawBoarder () {
  stroke(10);
  fill(100,0,0);
  rect(WIDTH / 2, 0, WIDTH / 100, HEIGHT)
}

    
}
