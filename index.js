let w, h;
let rocketPic;
let SPACE = 32; // charcode for the space
let points = 0;
let alienKills = 0;
let gameOn = true;

// keeps track of his level
let level = 1;
let alienGenerationSpeed = 90; // number of miliseconds between alien generation

// recursivly adds numberToGenerate aliens to the game
function generateAliens(numberOfAliensToGenerate) {
  if (numberOfAliensToGenerate == 0) {
    // make sure to set the waitingForAlienGeneration variable so that next time all of the aliens are killed, the hero.show() function will generate more
    hero.waitingForAlienGeneration = false;
    return;
  }

  setTimeout(
    function() {
      generateOneRandomSpeedAlien();
      generateAliens(numberOfAliensToGenerate - 1);
    },
    alienGenerationSpeed
  );
}

// adds one alien to the array
function generateOneAlien() {
  hero.aliens.push(new Alien(0, 0));
}

function generateOneRandomSpeedAlien() {
  let alien = new Alien(0, 0);
  alien.speed = Math.floor(Math.random() * 70) + 10; // returns a random integer from 5 to 45
  hero.aliens.push(alien);
}

let shootingSound;
// let shootingSound = loadSound('shootingSound.mp3');

function preload() {
  //shootingSound = loadSound('shootingSound.mp3');
}


function setup() {
  // createCanvas(screen.width, screen.height);
  createCanvas(1500, 800);
  w = width;
  h = height;
  hero = new Hero('rocket.png');
  // hero = new Hero('http://blog.thehigheredcio.com/wp-content/uploads/2012/01/President-Obama-college-tuition.jpg');
}

let hero;

function draw() {
  background(255, 255, 255); // white
  background(0);

  hero.show();


  showPoints();
  showKills();
  showLevel();

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

function showLevel() {
  textSize(32);
  fill(255, 255, 255);
  text(`Level: ${level}`, width / 2 - 30, height / 2 + 80);
}

// Just for fun, we will add an alien every time a user clicks the mouse
function mousePressed() {
  hero.aliens.push(new Alien(0, 0));
}