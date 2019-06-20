class GameTwo {
  constructor() {
  this.horizon;

  this.speedTwo = 0;
  this.y1 = HEIGHT / 6;
  this.y2 = 2*(HEIGHT / 6);
  this.y3 = 3*(HEIGHT / 6);
  this.y4 = 4*(HEIGHT / 6);
  this.y5 = 5*(HEIGHT / 6);

  this.obstaclesPutinTwo = [];
  this.obstaclesEnemyTwo = [];
  this.obstaclesFriendTwo = [];

  this.blinkSpeed = 1;
  this.blink = 100;
  this.timeCount = 96;
  }

  setup() {
  this.horizon = loadImage("assets/Nuke-adjusted-2.png")

  this.button = createButton('RESTART');
  this.button.parent('canvas1')
  this.button.position(WIDTH / 2 - WIDTH / 38, 15* (HEIGHT /20));
  this.button.style('background-color','green');
  this.button.hide();

  this.button.mousePressed(restartGame);
    function restartGame() {
    location.reload();
  }
  }

  drawHorizon() {
    image(this.horizon, WIDTH / 2, 0, WIDTH / 2, HEIGHT / 4.9)

    if(this.timeCount === 0) {
      this.button.show();
    }     
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
// ADD EFFEKT SEITENLINIE
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

  // Natural stalling
  this.speedTwo -= 0.3

  if (this.speedTwo <= 0) {
    this.speedTwo = 0
  }

// Acceleration
    if (keyIsDown(38)) {
      this.speedTwo += 0.6;
    }

// Speed Limit
if (this.speedTwo >= 6) {
  this.speedTwo = 6
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

if (frameCount % 50 === 0 && this.obstaclesPutinTwo.length < 2) {
  this.obstaclesPutinTwo.push(new ObstaclesTwo());
  this.obstaclesPutinTwo[this.obstaclesPutinTwo.length-1].setup()
}

this.obstaclesPutinTwo.forEach((obstacles, i) => {
obstacles.drawPutin();

  //Erase Putin 
  if(  obstacles.checkCollission() || obstacles.y1 > HEIGHT){
    this.obstaclesPutinTwo.splice(i,1)
}

 // Add Score Putin
  if(  obstacles.checkCollission()){
  playerTwo.score += 5;
}
});

// Draw Enemy Obstacle
if (frameCount % 225 === 0 && this.obstaclesEnemyTwo.length < 2) {
  this.obstaclesEnemyTwo.push(new ObstaclesTwo());
  this.obstaclesEnemyTwo[this.obstaclesEnemyTwo.length-1].setup()
}

this.obstaclesEnemyTwo.forEach((obstacles,i) => {
obstacles.drawEnemyTwo();

//Erase Enemy
if(obstacles.checkCollission() || obstacles.y1 > HEIGHT){
  this.obstaclesEnemyTwo.splice(i,1)
}

// Add Score Enemy
if(obstacles.checkCollission()){
playerTwo.score -= 50;
}
});

// Draw Friend Obstacle
if (frameCount % 125 === 0 && this.obstaclesFriendTwo.length < 2) {
  this.obstaclesFriendTwo.push(new ObstaclesTwo());
  this.obstaclesFriendTwo[this.obstaclesFriendTwo.length-1].setup()
}

this.obstaclesFriendTwo.forEach((obstacles,i) => {
obstacles.drawFriendTwo();

//Erase Friend
if(obstacles.checkCollission() || obstacles.y1 > HEIGHT){
  this.obstaclesFriendTwo.splice(i,1)
}

// Add Score Friend
if(obstacles.checkCollission()){
playerTwo.score += 25;
}
});
}

drawBoarder () {
  stroke(10);
  fill(255);
  rect(WIDTH / 2, 0, WIDTH / 200, HEIGHT)
}

drawScoreBox () {
  stroke(0);
  fill(255, 0, 0, 150);
  rect(WIDTH - WIDTH / 8, 0, WIDTH / 8, HEIGHT / 9.8)
}

// TIMECOUNT

drawTimeCount(){
  
  // Blink rythm
this.blink = this.blink + this.blinkSpeed;

if ( this.blink > 240 ) {
  this.blinkSpeed = -10 ;
}
if ( this.blink < 50 ) {
  this.blinkSpeed = 10 ;
}


  // Background
  stroke(0);
  fill(255);
  rect(WIDTH / 2 - WIDTH / 16, 0, WIDTH / 8, HEIGHT / 9.8)

  stroke(3);
  fill(255, 255, 150, this.blink);
  rect(WIDTH / 2 - WIDTH / 16, 0, WIDTH / 8, HEIGHT / 9.8)

  if (frameCount % 3 === 0) {
      this.timeCount -= 0.1
  }
  
  if (this.timeCount <= 0) {
    this.timeCount = 0
  }
  
  textSize(20);
  fill(0);
  text(`T - ${this.timeCount.toFixed(1)}`,  WIDTH / 2 - WIDTH / 40 , HEIGHT / 15);
  }


//Background Sound

playBackgroundSound(){ 
if (!backgroundMusic.isPlaying()) {
  backgroundMusic.play();
}

if (this.timeCount === 0) {
  backgroundMusic.stop();
}

}
}