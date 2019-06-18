class PlayerOne {
  constructor() {
    this.imgPlayerOne;
    this.x1 = (WIDTH / 4) - WIDTH / 30;
    this.x2 = WIDTH / 16;
    this.y1 = 4 * (HEIGHT / 5);
    this.y2 = HEIGHT / 10;

    this.score = 0;    
  }

  setup() {
    this.imgPlayerOne = loadImage("assets/Trump.png");

    // Design Score-Box
  //textSize(WIDTH / 10);  
  //textAlign(LEFT);

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
  text(this.score,0,0, WIDTH / 8, HEIGHT / 8);

  }


}