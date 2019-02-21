function Player(game) {
  this.game = game;
  this.img = new Image();
  this.img.src = './img/enemy.png';
  this.w = 50;
  this.h = 75;

  this.x = 600;
  this.y = 200;
  this.lifeP = 5;
  this.bullets = []
}

Player.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  this.drawBullets();
}

Player.prototype.drawBullets = function() {
  this.bullets.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
}


Player.prototype.move = function () {
  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 39:
        this.moveRight()
        break;
      case 37:
        this.moveLeft()
        break;
        case 32:
        this.shoot();
        break;
    }
  }.bind(this)

}
/////////////////////////////////////////////////////////////////////////
Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.x + this.w / 2  , this.y + this.h );
  this.bullets.push(bullet);
};

Player.prototype.moveLeft = function () {
  
  this.x -= 30
}

Player.prototype.moveRight = function () {
  this.x += 30
}
