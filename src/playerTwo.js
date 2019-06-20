class PlayerTwo {
  constructor() {
    this.imgPlayerTwo;
    this.x1 = 3 * (WIDTH / 4) - WIDTH / 30;
    this.x2 = WIDTH / 20;
    this.y1 = 4 * (HEIGHT / 5);
    this.y2 = HEIGHT / 10;

    this.score = 0;
  }

  setup() {
    this.imgPlayerTwo = loadImage("assets/Ayatollah.png");
    this.createNukeGIF = createImg("assets/Nuke-Off.gif");
    this.createNukeGIF.parent('canvas1');
    this.createNukeGIF.hide();
  }  

  drawPlayerTwo() {
    image(this.imgPlayerTwo, this.x1, this.y1, this.x2, this.y2)
  
  // Side movements  
    if (keyIsDown(37)) {
      this.x1 -= 6;
    }
  
    if (keyIsDown(39)) {
      this.x1 += 6;
    }

  // Side limitations 
  
  if (this.x1 < (WIDTH / 2 + WIDTH / 50)){
    this.x1 = (WIDTH / 2 + WIDTH / 50) 
  }

  if (this.x1 > (WIDTH - WIDTH / 12)){
    this.x1 = (WIDTH - WIDTH / 12) 
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
  text(`Score: ${this.score}`, WIDTH - WIDTH / 10 , HEIGHT / 15);
}

// End result
drawResultPlayerTwo() {

  // Ayatolah wins
  if (gameTwo.timeCount === 0 && this.score > playerOne.score){
    
    stroke(0);
    fill(255,0,0, 150);
    rect(WIDTH / 2, HEIGHT / 5, WIDTH / 2, HEIGHT)

    textSize(36);
    fill(255);
    text(`Ayatollah wins with ${this.score} pts.!`,  12 * (WIDTH / 20) , HEIGHT / 1.5);
    this.createNukeGIF.show()
    this.createNukeGIF.position(1 * (WIDTH / 4) - 6.5 * (WIDTH / 40), HEIGHT / 3);
  }

    // Ayatollah does not win
    if (gameTwo.timeCount === 0 && this.score <= playerOne.score){
    this.createNukeGIF.show()
    this.createNukeGIF.position(3 * (WIDTH / 4) - 6.5 * (WIDTH / 40), HEIGHT / 3);
  }
  
}


}

