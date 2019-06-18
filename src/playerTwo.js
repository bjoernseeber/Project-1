class PlayerTwo {
  constructor() {
    this.imgPlayerTwo;
    this.xPlayerTwo = 3 * (WIDTH / 4) - WIDTH / 30;

  }
  


  setup() {
    this.imgPlayerTwo = loadImage("assets/Ayatollah.jpg");

  }  

  drawPlayerTwo() {
    image(this.imgPlayerTwo, this.xPlayerTwo, 4*(HEIGHT / 5), WIDTH / 16, HEIGHT / 10)
  

  // Side movements  
    if (keyIsDown(37)) {
      this.xPlayerTwo -= 3;
    }
  
    if (keyIsDown(39)) {
      this.xPlayerTwo += 3;
    }

  // Side limitations 
  
  if (this.xPlayerTwo < (WIDTH / 2 + WIDTH / 50)){
    this.xPlayerTwo = (WIDTH / 2 + WIDTH / 50) 
  }

  if (this.xPlayerTwo > (WIDTH - WIDTH / 12)){
    this.xPlayerTwo = (WIDTH - WIDTH / 12) 
  }
  
  }


}