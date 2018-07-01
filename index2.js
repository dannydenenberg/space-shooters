function draw() {
  background(255, 255, 255); // white
  background(0);

  hero.show();

  // make it so we can check for someone holding down a key
  if (keyIsPressed) {
    keyPressed();
  }
}

function Game() {
  this.pic = loadImage(img);
  this.bullets = [];

  this.bulletSpeed = 8;

  this.show = function() {
    // show the bullets
    for (b in this.bullets) {
      this.bullets[b].show();
    }

    // move the bullets for the next frame
    this.moveBullets();
  }


  // show the bullets flying across the screen
  this.moveBullets = function() {
    for (b in this.bullets) {
      this.bullets[b].y -= this.bulletSpeed;
    }
  }

  // hero class (bottom of the screen)
  function Hero(img) {



    // TODO: not really working
    // the width and height of the
    this.w = this.pic.width;
    this.h = this.pic.height;

    // positioning of the hero on the screen
    this.x = width / 2;
    this.y = 700 - 128;



    this.moveBy = 8;

    this.show = function() {
      // show the hero
      image(this.pic, this.x, this.y);


    };

    this.moveRight = function() {
      this.x += this.moveBy;

      // make sure the rocket cannot go off of the screen
      if (this.x + this.pic.width > width) {
        this.x = width - this.pic.width;
      }
    };

    this.moveLeft = function() {
      this.x -= this.moveBy;

      // make sure the rocket cannot go off of the left side of the screen
      if (this.x < 0) {
        this.x = 0;
      }
    };


  };

  // add bullets the array
  this.shoot = function() {
    // add a new bullet at the position of the hero
    this.bullets.push(new Bullet(this.x + this.pic.width / 2, this.y));
  };

}


function Bullet(xx, yy) {
  this.x = xx;
  this.y = yy;

  this.w = 10;
  this.h = 10;

  this.show = function() {
    ellipse(this.x, this.y, this.w, this.h);
  };
}