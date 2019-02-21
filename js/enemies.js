function Enemies (game){
  this.game = game;
  this.img = new Image();
  this.img.src = './img/player.png';

  this.img = new Image();
  this.img.src = './img/naranja.png';

  this.img = new Image();
  this.img.src = './img/rojo.png';




  this.w = 70;
  this.h = 95;

  this.framesCounter = 0;
  this.totalCounter = Math.floor(Math.random() * (100 - 40) + 40);

  this.bullets = []; 
  this.lifeE = 3;  

  this.x =Math.floor(Math.random()* this.game.w);
  console.log(this.x)
  this.y =Math.floor(Math.random()*((this.game.h * 0.8)-(this.game.h * 0.7)+1)+(this.game.h * 0.7));
  this.dx = 1

  this.audio = new Audio();
  this.audio.src = "music/ak47.mp3"

}
Enemies.prototype.draw = function() {
  var img;
  switch(this.lifeE){
    case 3:
    this.img.src = './img/player.png';
    break;
    case 2:
    this.img.src = './img/naranja.png';
    break;
    case 1:
    this.img.src = './img/rojo.png';
    break;

  }
this.game.ctx.drawImage (this.img, this.x, this.y, this.w, this.h)      
  this.drawBullets();
  
}
Enemies.prototype.move = function(){
  this.framesCounter++;    
  if (this.framesCounter % this.totalCounter === 0) this.shoot();
  this.x += this.dx * 0.4
  if (this.x < 0 || this.x > this.game.w){
      this.dx *= -1;
  }
}

Enemies.prototype.drawBullets = function() {   
  this.bullets.forEach(function(bullet) {
      
      bullet.draw();
      bullet.moveUp();
  });
}

Enemies.prototype.shoot = function() {
this.bullets.push(new Bullet(this.game, this.x + this.w  / 2, this.y + this.h ));
this.audio.play();
  
}