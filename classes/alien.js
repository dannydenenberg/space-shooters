let pictures = ['data:image/jpeg;base64,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', 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_reasonably_small.jpg', 'data:image/jpeg;base64,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', 'https://www.peoplespunditdaily.com/wp-content/uploads/2017/09/Jeff-Sessions-Press-Conference-128x128.jpg', 'data:image/jpeg;base64,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', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Robert_L._Wilkie%2C_acting_SECVA_photo.jpg/220px-Robert_L._Wilkie%2C_acting_SECVA_photo.jpg'];

function Alien(xx, yy) {
  this.x = xx;
  this.y = yy;

  this.speed = 30;
  this.maxRows = 6;
  this.currentRow = 1;
  this.wallPixels = height / this.maxRows;
  this.wallCounter = 0;
  this.hasHitWall = false;
  this.right = true;

  // for trump cabinet
  // this.pic = loadImage(pictures[Math.floor(Math.random() * pictures.length - 1)]);

  // for regular game
  this.pic = loadImage('pics/ufoeli.png');

  // shoot trumps cabinet
  //this.pic = loadImage(pictures[Math.floor(Math.random() * pictures.length)]);



  this.show = function() {
    image(this.pic, this.x, this.y);
  }

  // TODO: make the alien path
  this.move = function() {
    // move the alien
    if (!this.hasHitWall && this.right) {
      this.x += this.speed;
    } else if (!this.hasHitWall && !this.right) {
      this.x -= this.speed;
    } else if (this.hasHitWall) {
      this.y += this.speed;
      this.wallCounter += this.speed;
    }

    /**
     * check to see what has happened. Should the next action be to go down, left, or right.
     * The logic order here is very important.
     * Checking if the alien has hit the wall HAS to come before checking if the wall length frames is done
     */



    // if the alien has hit a wall, then change the hasHitWall variable and the moving right variable
    if ((this.x + this.pic.width >= width || this.x <= 0) && this.wallCounter == 0) {
      this.hasHitWall = true;
      this.right = !this.right;
    }

    // if the wall has been gone through the wall
    if (this.wallCounter >= this.wallPixels) {
      this.hasHitWall = false;
      this.wallCounter = 0;
    }


  }


  this.hasCollidedWith = function(a) {
    if (a.y < 0 - a.w) return false;
    if (a.y <= this.y + this.pic.height && a.x >= this.x && a.x <= this.x + this.pic.width) {
      return true;
    }
  }

  this.hasCollidedWithHero = function(a, w) {
    if (a.y < 0 - w) return false;
    if (a.y <= this.y + this.pic.height && a.x >= this.x && a.x <= this.x + this.pic.width) {
      return true;
    }
  }


}