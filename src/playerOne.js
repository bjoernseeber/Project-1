class PlayerOne {
  constructor() {
    this.imgPlayerOne;
    this.x1 = (WIDTH / 4) - WIDTH / 30;
    this.x2 = WIDTH / 20;
    this.y1 = 4 * (HEIGHT / 5);
    this.y2 = HEIGHT / 10;

    this.score = 0;   
   
  }

  setup() {
    this.imgPlayerOne = loadImage("assets/Trump.png");
    this.createNukeGIF = createImg("assets/Nuke-Off.gif");
    this.createNukeGIF.parent('canvas1');
    this.createNukeGIF.hide();
  }  

  drawPlayerOne() {
    image(this.imgPlayerOne, this.x1, this.y1, this.x2, this.y2)
  
  // Side movements
  if (keyIsDown(65)) {
    this.x1 -= 6;
  }

  if (keyIsDown(68)) {
    this.x1 += 6;
  }

  // Side limitations

  if (this.x1 < (0 + WIDTH / 50)){
    this.x1 = (WIDTH / 50) 
  }

  if (this.x1 > (WIDTH / 2 - WIDTH / 12)){
    this.x1 = (WIDTH / 2 - WIDTH / 12) 
  }

  this.rect = {
    left: this.x1,
    right: this.x1 + this.x2,
    top: this.y1,
    bottom: this.y1 + this.y2,
  }

  // Shows Score Count
  textSize(20);
  fill(255);
  text(`Score: ${this.score}`,  WIDTH / 40 , HEIGHT / 15);
  }

// End result
  drawResultPlayerOne() {

    // Trump wins
    if (gameTwo.timeCount === 0 && this.score > playerTwo.score){
    
    stroke(0);
    fill(255,0,0, 150);
    rect(0, HEIGHT / 5, WIDTH / 2, HEIGHT)

    textSize(36);
    fill(255);
    text(`Trump wins with ${this.score} pts.!`,  2 * (WIDTH / 20) , HEIGHT / 1.5);
    this.createNukeGIF.show();
    this.createNukeGIF.position(3 * (WIDTH / 4) - 6.5 * (WIDTH / 40), HEIGHT / 3);
    if (!nukeExplosion.isPlaying()) {
      nukeExplosion.play();
      }
    if (!nukeExplosionEnhancer.isPlaying()) {
      nukeExplosionEnhancer.play();
    }
    }

    // Trump does not win
    if (gameTwo.timeCount === 0 && this.score <= playerTwo.score){
    this.createNukeGIF.show();
    this.createNukeGIF.position(1 * (WIDTH / 4) - 6.5 * (WIDTH / 40), HEIGHT / 3);
    if (!nukeExplosion.isPlaying()) {
      nukeExplosion.play();
      }
    if (!nukeExplosionEnhancer.isPlaying()) {
      nukeExplosionEnhancer.play();
    }
  }
}
}