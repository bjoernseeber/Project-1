class ObstaclesTwo {
  constructor() {
    this.obstaclePutin;
    
    this.speedPutin = 0;

    this.y1 = HEIGHT / 5;

  }

  setup() {
    this.obstaclePutin = loadImage("assets/Putin.png");

  }

  drawPutin() {
    image(obstaclePutin, 3* (WIDTH / 4), this.y1, WIDTH / 25, WIDTH / 25)

  this.y1 += this.speedPutin;

 // Acceleration
 if (keyIsDown(38)) {
  this.speedPutin += 0.025;
}

if (keyIsDown(40)) {
  this.speedPutin -= 0.045;
}


    }


  }
