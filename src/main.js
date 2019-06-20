const startPage = new StartPage();

const gameOne = new GameOne();
const playerOne = new PlayerOne();

const gameTwo = new GameTwo();
const playerTwo = new PlayerTwo();

let obstaclePutin;
let obstacleEnemyOne;
let obstacleFriendOne;
let obstacleEnemyTwo;
let obstacleFriendTwo;

let loadNukeGIF; 
let createNukeGIF;

let nukeExplosion;

function preload() {
  obstaclePutin = loadImage("assets/Putin.png");
  obstacleEnemyOne = loadImage("assets/Ayatollah.png");
  obstacleFriendOne = loadImage("assets/MBS.png");
  obstacleEnemyTwo = loadImage("assets/Trump.png");
  obstacleFriendTwo = loadImage("assets/Kim.png");

  nukeExplosion = loadSound("assets/Sound/Nuke-Explosion.mp3");
  nukeExplosionEnhancer = loadSound("assets/Sound/Nuke-Explosion-Enhancer.mp3");
  backgroundMusic = loadSound("assets/Sound/Background.mp3");

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas1");

  startPage.setup();

  gameOne.setup();
  playerOne.setup();

  gameTwo.setup();
  playerTwo.setup();

  
}

function draw() {
  clear();

  if(!startPage.startGame){
  startPage.drawStartPage();
  startPage.drawExplanationTrump();
  startPage.drawExplanationAyatollah();
  }
  
  if(startPage.startGame){
  startPage.button.remove()
  gameOne.drawRoadGround();
  gameOne.drawRoadSide();
  gameOne.drawRoadBoarder();
  gameOne.drawMiddleLine();
  gameOne.drawLineEffect();
  gameOne.drawRoadMovement();
  gameOne.drawHorizon();
  gameOne.drawScoreBox();
  gameOne.drawBoarder();

  playerOne.drawPlayerOne();
  playerOne.drawResultPlayerOne();
 
  gameTwo.drawRoadGround();
  gameTwo.drawRoadSide();
  gameTwo.drawRoadBoarder();
  gameTwo.drawMiddleLine();
  gameTwo.drawLineEffect();
  gameTwo.drawRoadMovement();
  gameTwo.drawHorizon();
  gameTwo.drawScoreBox();
  gameTwo.drawBoarder();
  
  gameTwo.drawTimeCount();
  gameTwo.playBackgroundSound();

  playerTwo.drawPlayerTwo();
  playerTwo.drawResultPlayerTwo();
}
}


window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);




