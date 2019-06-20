class ObstaclesTwo {
  constructor() {
    this.obstaclePutin;
    this.obstacleEnemyTwo;
    this.obstacleFriendTwo;
    
    this.speedPutin = 0;
    this.speedEnemy = 0;
    this.speedFriend = 0;

    this.x2 = WIDTH / 22;
    this.y1 = HEIGHT / 10;
    this.y2 = HEIGHT / 10;
  }

  setup() {
    this.x1 = random((WIDTH / 2) + (WIDTH / 8) - (WIDTH / 40), (WIDTH / 2) + 3 * (WIDTH / 8))  
    this.obstaclePutin = loadImage("assets/Putin.png");
    //this.obstacleEnemyTwo = loadImage("assets/Ayatollah.png");
    //this.obstacleFriendTwo = loadImage("assets/MBS.png")
  }

// Draw Putin
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
 if (keyIsDown(38)) {
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

  if (this.intersectPutin(putinBoarders, playerTwo.rect)){
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

// Draw enemy
drawEnemyTwo() {
  image(obstacleEnemyTwo, this.x1, this.y1, this.x2, this.y2)
  
    this.y1 += this.speedEnemy;
    this.speedEnemy -= 0.6;

  if (this.speedEnemy <= 0) {
    this.speedEnemy = 0
  }

  // CREATE boardes for collission
  this.left = this.x1;
  this.right = this.x1 + this.x2;
  this.top = this.y1;
  this.bottom = this.y1 + this.y2;
  
  this.checkCollission();

 // Acceleration
  if (keyIsDown(38)) {
  this.speedEnemy += 1.2;
}

// Speed Limit
if (this.speedEnemy >= 10) {
  this.speedEnemy = 10
}
}

checkCollission() {
  const putinBoarders = {
    left: this.left,
    right: this.right,
    top: this.top,
    bottom: this.bottom,
  }

  if (this.intersectPutin(putinBoarders, playerTwo.rect)){
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

// Draw friend
drawFriendTwo() {
  image(obstacleFriendTwo, this.x1, this.y1, this.x2, this.y2)
  
    this.y1 += this.speedFriend;
    this.speedFriend -= 0.5;

  if (this.speedFriend <= 0) {
    this.speedFriend = 0
  }

  // CREATE boardes for collission
  this.left = this.x1;
  this.right = this.x1 + this.x2;
  this.top = this.y1;
  this.bottom = this.y1 + this.y2;
  
  this.checkCollission();


 // Acceleration
if (keyIsDown(38)) {
  this.speedFriend += 1.0;
}

// Speed Limit
if (this.speedFriend >= 8) {
  this.speedFriend = 8
}
  }

checkCollission() {
  const putinBoarders = {
    left: this.left,
    right: this.right,
    top: this.top,
    bottom: this.bottom,
  }

  if (this.intersectPutin(putinBoarders, playerTwo.rect)){
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