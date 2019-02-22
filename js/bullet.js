function Bullet(game, x, y) {
  this.game = game

  this.x = x;
  this.y = y;
  this.r = 4;

  this.vx = 1;
  this.vy = 2;

  this.gravity = 3;

}
Bullet.prototype.draw = function () {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "black";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.closePath();
}

Bullet.prototype.move = function () {
  this.x += this.vx;

  this.vy += this.gravity;
  this.y += this.vy;

  if (this.y > this.game.player.y0 + this.game.player.h) {
    this.vy *= -1;
  }
};

Bullet.prototype.moveUp = function () {
  this.y -= this.vy;
}