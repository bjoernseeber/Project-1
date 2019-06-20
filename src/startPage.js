class StartPage {
  constructor() {
  this.background;
  this.trump;
  this.ayatollah;
  this.startGame = false;
  this.putin;
  this.MBS;
  this.kim;

  this.button;

  }

  setup() {
  this.background = loadImage("assets/nuke.jpg")
  this.trump = loadImage("assets/Trump.png")
  this.ayatollah = loadImage("assets/Ayatollah.png")
  this.putin = loadImage("assets/Putin.png")
  this.MBS = loadImage("assets/MBS.png")
  this.kim = loadImage("assets/Kim.png")
  
  this.button = createButton('START');
  this.button.parent('canvas1')
  this.button.position(WIDTH / 2 - WIDTH / 50, 15* (HEIGHT /20));
  this.button.style('background-color','red');
  this.button.mousePressed(()=>{
    this.startGame = true
  })
  }

  drawStartPage() {
    image(this.background, 0, 0, WIDTH, HEIGHT)
    textSize(30);
    fill(50);
    text("Control", WIDTH / 2 - WIDTH / 25, HEIGHT / 15)
  }

  drawExplanationTrump() {

    // Draw explanation Trump
    fill(150,150,150, 150);
    rect(WIDTH / 15, HEIGHT / 10, WIDTH / 3, 8 * (HEIGHT / 10));

    image(this.trump, 4 * (WIDTH / 20), 1.2 * (HEIGHT / 10), WIDTH / 18, HEIGHT / 8);

    textSize(20);
    fill(0);
    textSize(20);
    fill(0);
    text("W - Key",  2 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("A - Key",  2 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("D - Key",  2 * (WIDTH / 20) , 15 * (HEIGHT / 30));
    image(this.putin,  2.1 * (WIDTH / 20) , 17.5 * (HEIGHT / 30), WIDTH / 25, HEIGHT / 12 );
    image(this.MBS,  2 * (WIDTH / 20) , 20.3 * (HEIGHT / 30), WIDTH / 20, HEIGHT / 12.5 );
    image(this.ayatollah,  2 * (WIDTH / 20) , 23 * (HEIGHT / 30), WIDTH / 22, HEIGHT / 10.5 );

    text("=",  4.5 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("=",  4.5 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("=",  4.5 * (WIDTH / 20) , 14.5 * (HEIGHT / 30));
    text("=",  4.5 * (WIDTH / 20) , 19 * (HEIGHT / 30));
    text("=",  4.5 * (WIDTH / 20) , 22 * (HEIGHT / 30));
    text("=",  4.5 * (WIDTH / 20) , 25 * (HEIGHT / 30));

    text("forward",  6 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("left",  6 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("right",  6 * (WIDTH / 20) , 15 * (HEIGHT / 30));
    text("+5 pts.",  6 * (WIDTH / 20) , 19 * (HEIGHT / 30));
    text("+25 pts.",  6 * (WIDTH / 20) , 22 * (HEIGHT / 30));
    text("-50 pts.",  6 * (WIDTH / 20) , 25 * (HEIGHT / 30));

  }

  drawExplanationAyatollah() {

    // Draw explanation Ayatollah
    fill(150,150,150, 150);
    rect(WIDTH - WIDTH / 3 - WIDTH / 15, HEIGHT / 10, WIDTH / 3, 8 * (HEIGHT / 10));

    image(this.ayatollah, WIDTH / 2 + 5 * (WIDTH / 20), 1.2 * (HEIGHT / 10), WIDTH / 20, HEIGHT / 8);

    textSize(20);
    fill(0);
    text("↑ - Key",  12.7 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("← - Key",  12.7 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("→ - Key",  12.7 * (WIDTH / 20) , 15 * (HEIGHT / 30));
    image(this.putin,  12.9 * (WIDTH / 20) , 17.5 * (HEIGHT / 30), WIDTH / 25, HEIGHT / 12 );
    image(this.kim,  12.8 * (WIDTH / 20) , 20.3 * (HEIGHT / 30), WIDTH / 20, HEIGHT / 12.5 );
    image(this.trump,  12.8 * (WIDTH / 20) , 23 * (HEIGHT / 30), WIDTH / 20, HEIGHT / 10 );

    text("=",  15.5 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("=",  15.5 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("=",  15.5 * (WIDTH / 20) , 14 * (HEIGHT / 30));
    text("=",  15.5 * (WIDTH / 20) , 19 * (HEIGHT / 30));
    text("=",  15.5 * (WIDTH / 20) , 22 * (HEIGHT / 30));
    text("=",  15.5 * (WIDTH / 20) , 25 * (HEIGHT / 30));

    text("forward",  17 * (WIDTH / 20) , 9 * (HEIGHT / 30));
    text("left",  17 * (WIDTH /20) , 12 * (HEIGHT / 30));
    text("right",  17 * (WIDTH / 20) , 14 * (HEIGHT / 30));
    text("+5 pts.",  17 * (WIDTH / 20) , 19 * (HEIGHT / 30));
    text("+25 pts.",  17 * (WIDTH / 20) , 22 * (HEIGHT / 30));
    text("-50 pts.",  17 * (WIDTH / 20) , 25 * (HEIGHT / 30));
  }

}