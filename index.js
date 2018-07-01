let w, h;
let rocketPic;
let SPACE = 32; // charcode for the space
let points = 0;
let alienKills = 0;

let shootingSound;
// let shootingSound = loadSound('shootingSound.mp3');

function preload() {
  //shootingSound = loadSound('shootingSound.mp3');
}


function setup() {
  createCanvas(1300, 725);
  w = width;
  h = height;
  hero = new Hero('http://ddenenberg.com/rocket.png');
  // hero = new Hero('http://blog.thehigheredcio.com/wp-content/uploads/2012/01/President-Obama-college-tuition.jpg');
}

let hero;

function draw() {
  background(255, 255, 255); // white
  background(0);

  hero.show();

  showPoints();
  showKills();

  // make it so we can check for someone holding down a key
  if (keyIsPressed) {
    keyPressed();
  }
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    hero.moveRight();
  } else if (keyCode === LEFT_ARROW) {
    hero.moveLeft();
  }
}

// shoot when the key is released so that people cannot spam bullets
function keyReleased() {
  // 32 is space
  if (keyCode === SPACE || keyCode === UP_ARROW) {
    hero.shoot();
  }
}

function showPoints() {
  // display the points
  textSize(32);
  fill(255, 255, 255);
  text(points.toString(), width / 2, height / 2);
}

function showKills() {
  textSize(32);
  fill(255, 255, 255);
  text(`Alien Kills: ${alienKills.toString()}`, width / 2 - 60, height / 2 + 40);
}

// Just for fun, we will add an alien every time a user clicks the mouse
function mousePressed() {
  hero.aliens.push(new Alien(0, 0));
}