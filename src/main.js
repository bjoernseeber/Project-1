const gameOne = new GameOne();
const playerOne = new PlayerOne();

const gameTwo = new GameTwo();
const playerTwo = new PlayerTwo();


let obstaclePutin;
let obstacleEnemyOne;

function preload() {
  obstaclePutin = loadImage("assets/Putin.png");
  obstacleEnemyOne = loadImage("assets/Ayatollah.jpg");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  gameOne.setup();
  playerOne.setup();

  gameTwo.setup();
  playerTwo.setup();

}

function draw() {
  clear();
  gameOne.drawRoadGround();
  gameOne.drawRoadSide();
  gameOne.drawRoadBoarder();
  gameOne.drawMiddleLine();
  gameOne.drawLineEffect();
  gameOne.drawRoadMovement();
  gameOne.drawHorizon();
  playerOne.drawPlayerOne();

  gameTwo.drawRoadGround();
  gameTwo.drawRoadSide();
  gameTwo.drawRoadBoarder();
  gameTwo.drawMiddleLine();
  gameTwo.drawLineEffect();
  gameTwo.drawRoadMovement();
  gameTwo.drawHorizon();
  playerTwo.drawPlayerTwo();

  gameOne.drawBoarder();
  gameTwo.drawBoarder();

 

}


window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);


