function Player (game) {
    this.game = game;
    this.img = new Image();
    this.img.src = './img/player.png';
    this.w = 50;
    this.h = 75;

    this.x = 600;
    this.y = 100;
  

  
}

Player.prototype.draw =  function() {

  this.game.ctx.drawImage (this.img, this.x, this.y, this.w, this.h)      
 }

 Player.prototype.move = function(){
  document.onkeyup = function(e){
    switch(e.keyCode) {
        case 39:
            this.moveRight()
            break;
        case 37:
            this.moveLeft()
            break;
    }
}.bind(this)

}

Player.prototype.moveLeft = function(){
  
  this.x -= 30

}

Player.prototype.moveRight = function(){
  
  this.x += 30
}
