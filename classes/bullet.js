function Bullet(xx, yy) {
  this.x = xx;
  this.y = yy;

  this.w = 10;
  this.h = 10;

  this.show = function() {
    ellipse(this.x, this.y, this.w, this.h);
  };
}