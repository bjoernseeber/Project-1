class GameOne {
  constructor() {
  this.horizon;

  this.speedOne = 0;
  this.y1 = HEIGHT / 6;
  this.y2 = 2*(HEIGHT / 6);
  this.y3 = 3*(HEIGHT / 6);
  this.y4 = 4*(HEIGHT / 6);
  this.y5 = 5*(HEIGHT / 6);

  this.obstaclesPutinOne = [];
  this.obstaclesEnemyOne = [];
  this.obstaclesFriendOne = [];
  }

  setup() {
  this.horizon = loadImage("assets/Nuke-adjusted-2.png")
  }

  drawHorizon() {
    image(this.horizon, 0, 0, WIDTH / 2, HEIGHT / 4.9)
  }

  drawRoadGround() {
    fill(150,150,150);
    rect(0, HEIGHT / 5, WIDTH / 2, HEIGHT);
  }

  
  drawRoadSide() {
    fill(195,175,145);
    triangle(0, HEIGHT / 5, 0, HEIGHT - (HEIGHT / 10), (WIDTH / 8) - (WIDTH / 40), HEIGHT / 5)
    triangle(3 * (WIDTH / 8) + (WIDTH / 40), HEIGHT / 5, WIDTH / 2, HEIGHT - (HEIGHT / 10), WIDTH / 2, HEIGHT / 5) 
  }

  drawRoadBoarder() {
    stroke(255,255,255);
    strokeWeight(6);
    line((WIDTH / 8) - (WIDTH / 40) , HEIGHT / 5, 0 , HEIGHT - (HEIGHT / 10));
    line(3 * (WIDTH / 8) + (WIDTH / 40), HEIGHT / 5, WIDTH / 2, HEIGHT - (HEIGHT / 10)); 
  }

  drawMiddleLine() {
    stroke(255,255,255);
    strokeWeight(4);
    line(WIDTH / 4 , HEIGHT / 5, WIDTH / 4 , HEIGHT);
  }

// ADD EFFEKT SEITENLINIE
  drawLineEffect() {
    fill(255,255,255);
    triangle(WIDTH / 4, HEIGHT / 5, WIDTH / 4 - WIDTH / 100, HEIGHT, WIDTH / 4, HEIGHT);
    triangle(WIDTH / 4, HEIGHT / 5, WIDTH / 4 + WIDTH / 100, HEIGHT, WIDTH / 4, HEIGHT);
  }

  drawRoadMovement() {
    strokeWeight(0);
    fill(150,150,150);
    rect((WIDTH / 4) - (WIDTH / 40), this.y1, WIDTH / 20, HEIGHT / 35);
    rect((WIDTH / 4) - (WIDTH / 40), this.y2, WIDTH / 20, HEIGHT / 35);
    rect((WIDTH / 4) - (WIDTH / 40), this.y3, WIDTH / 20, HEIGHT / 35);
    rect((WIDTH / 4) - (WIDTH / 40), this.y4, WIDTH / 20, HEIGHT / 35);
    rect((WIDTH / 4) - (WIDTH / 40), this.y5, WIDTH / 20, HEIGHT / 35);

    this.y1 += this.speedOne; 
    this.y2 += this.speedOne;
    this.y3 += this.speedOne;
    this.y4 += this.speedOne;
    this.y5 += this.speedOne;

  // Natural stalling
    this.speedOne -= 0.3

    if (this.speedOne <= 0) {
      this.speedOne = 0
    }

    // Acceleration
  if (keyIsDown(87)) {
    this.speedOne += 0.6;
  }

// Speed Limit
if (this.speedOne >= 6) {
  this.speedOne = 6
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

// OBSTACLES

// Draw Putin Obstacle
  if (frameCount % 50 === 0 && this.obstaclesPutinOne.length < 2) {
    this.obstaclesPutinOne.push(new ObstaclesOne());
    this.obstaclesPutinOne[this.obstaclesPutinOne.length-1].setup()
}

this.obstaclesPutinOne.forEach((obstacles,i) => {
  obstacles.drawPutin();

  //Erase Putin 
  if(obstacles.checkCollission() || obstacles.y1 > HEIGHT){
    this.obstaclesPutinOne.splice(i,1)
}

 // Add Score Putin
  if(obstacles.checkCollission()){
  playerOne.score += 5;
}
});

// Draw Enemy Obstacle
if (frameCount % 225 === 0 && this.obstaclesEnemyOne.length < 2) {
  this.obstaclesEnemyOne.push(new ObstaclesOne());
  this.obstaclesEnemyOne[this.obstaclesEnemyOne.length-1].setup()
}

this.obstaclesEnemyOne.forEach((obstacles,i) => {
obstacles.drawEnemyOne();

//Erase Enemy
if(obstacles.checkCollission() || obstacles.y1 > HEIGHT){
  this.obstaclesEnemyOne.splice(i,1)
}

// Add Score Enemy
if(obstacles.checkCollission()){
playerOne.score -= 50;
}
});

// Draw Friend Obstacle
if (frameCount % 125 === 0 && this.obstaclesFriendOne.length < 2) {
  this.obstaclesFriendOne.push(new ObstaclesOne());
  this.obstaclesFriendOne[this.obstaclesFriendOne.length-1].setup()
}

this.obstaclesFriendOne.forEach((obstacles,i) => {
obstacles.drawFriendOne();

//Erase Friend
if(obstacles.checkCollission() || obstacles.y1 > HEIGHT){
  this.obstaclesFriendOne.splice(i,1)
}

// Add Score Friend
if(obstacles.checkCollission()){
playerOne.score += 25;
}
});
}

drawBoarder () {
  stroke(0);
  fill(255);
  rect(WIDTH / 2 - WIDTH / 200, 0, WIDTH / 200, HEIGHT)
}

drawScoreBox () {
  stroke(0);
  fill(255,0,0, 150);
  rect(0, 0, WIDTH / 8, HEIGHT / 9.8)
}
}