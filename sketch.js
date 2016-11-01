var x, y, p;
var pa = [];
var huey;
var img;
var song;

function preload()
{
  huey = loadAnimation("assets/Huey_01.png", "assets/Huey_06.png");
  img = loadImage("assets/blackhole2.jpg");
  song = loadSound("assets/lovelyangel.mp3");
}

function setup(){
  createCanvas(640, 480);
  song.play();

  for (var i = 0; i < 200; i++)
  {
  pa[i] = new Particle(450, 250);
  }
}

function draw() {
  image(img, 0, 0);

  for(var i = 0; i < pa.length; i++) {
    pa[i].move();
    pa[i].display();
  }
}

function mouseReleased() {
    println(p);
    pa[pa.length] = new Particle(mouseX, mouseY);
}

var particleIndex = 0;

function Particle(tempX, tempY) {
  this.posX = tempX;
  this.posY = tempY;

  this.life = 0;
  this.maxLife = 100;

  this.id  = particleIndex;
  particleIndex++;

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);

  var particleSize = 10;
  var gravity = 0.1;

  this.move = function() {
    this.life++;
    println(this.life);
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;

    if(this.posY > height) {
      this.vy *= -0.6;
      this.vx *= 0.75;
      this.posY = height - particleSize;
    }

    if (this.life > this.maxLife) {
      pa.splice(this.id, 1);
    }

  };

  this.display = function() {
    animation(huey, this.posX, this.posY, particleSize);
  };

}
