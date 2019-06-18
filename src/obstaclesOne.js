class ObstaclesOne {
  constructor() {
    this.obstaclePutin;
    this.obstacleEnemyOne;
    this.obstacleFriendOne;
    
    this.speedPutin = 0;

    
    this.x2 = WIDTH / 40;
    this.y1 = HEIGHT / 10;
    this.y2 = HEIGHT / 15;
  }

  setup() {
    this.x1 = random((WIDTH / 8) - (WIDTH / 40), 3 * (WIDTH / 8) + (WIDTH / 40))  
    this.obstaclePutin = loadImage("assets/Putin.png"); 
    this.obstacleEnemy = loadImage("assets/Ayatollah.jpg")
  }

  drawPutin() {
    image(obstaclePutin, this.x1, this.y1, this.x2, this.y2)
  
    this.y1 += this.speedPutin;
    this.speedPutin -= 0.3;

  if (this.speedPutin <= 0) {
    this.speedPutin = 0
  }

  // CREATE boardes for collission
  this.left = this.x1;
  this.right = this.x1 + this.x2;
  this.top = this.y1;
  this.bottom = this.y1 + this.y2;
  
  this.checkCollission();


 // Acceleration
if (keyIsDown(87)) {
  this.speedPutin += 0.6;
}

// Speed Limit
if (this.speedPutin >= 6) {
  this.speedPutin = 6
}

  }

checkCollission() {
  const putinBoarders = {
    left: this.left,
    right: this.right,
    top: this.top,
    bottom: this.bottom,
  }

  if (this.intersectPutin(putinBoarders, playerOne.rect)){
    return true
  }
}

intersectPutin(rectA, rectB) {
  return !(
    rectA.left > rectB.right ||
    rectA.right < rectB.left ||
    rectA.top > rectB.bottom ||
    rectA.bottom < rectB.top
  );
}

drawEnemyOne() {
  image(obstacleEnemyOne, this.x1, this.y1, this.x2, this.y2)
  
    this.y1 += this.speedPutin;
    this.speedPutin -= 0.3;

  if (this.speedPutin <= 0) {
    this.speedPutin = 0
  }

  // CREATE boardes for collission
  this.left = this.x1;
  this.right = this.x1 + this.x2;
  this.top = this.y1;
  this.bottom = this.y1 + this.y2;
  
  this.checkCollission();


 // Acceleration
if (keyIsDown(87)) {
  this.speedPutin += 0.6;
}

// Speed Limit
if (this.speedPutin >= 6) {
  this.speedPutin = 6
}

  }

checkCollission() {
  const putinBoarders = {
    left: this.left,
    right: this.right,
    top: this.top,
    bottom: this.bottom,
  }

  if (this.intersectPutin(putinBoarders, playerOne.rect)){
    return true
  }
}

intersectPutin(rectA, rectB) {
  return !(
    rectA.left > rectB.right ||
    rectA.right < rectB.left ||
    rectA.top > rectB.bottom ||
    rectA.bottom < rectB.top
  );
}

drawFriendOne() {
  image(obstacleEnemyOne, this.x1, this.y1, this.x2, this.y2)
  
    this.y1 += this.speedPutin;
    this.speedPutin -= 0.3;

  if (this.speedPutin <= 0) {
    this.speedPutin = 0
  }

  // CREATE boardes for collission
  this.left = this.x1;
  this.right = this.x1 + this.x2;
  this.top = this.y1;
  this.bottom = this.y1 + this.y2;
  
  this.checkCollission();


 // Acceleration
if (keyIsDown(87)) {
  this.speedPutin += 0.6;
}

// Speed Limit
if (this.speedPutin >= 6) {
  this.speedPutin = 6
}

  }

checkCollission() {
  const putinBoarders = {
    left: this.left,
    right: this.right,
    top: this.top,
    bottom: this.bottom,
  }

  if (this.intersectPutin(putinBoarders, playerOne.rect)){
    return true
  }
}

intersectPutin(rectA, rectB) {
  return !(
    rectA.left > rectB.right ||
    rectA.right < rectB.left ||
    rectA.top > rectB.bottom ||
    rectA.bottom < rectB.top
  );
}


}
