function Avion(game){
this.game = game;
this.img = new Image();
this.img.src = 'img/f-22png';
this.w = 50;
this.h = 75;

this.x = 200;
this.y = 100;

}
Avion.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    //this.drawBullets();
  }
  