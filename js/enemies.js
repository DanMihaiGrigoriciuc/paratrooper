function Enemies (game){
    this.game = game;
    this.img = new Image();
    this.img.src = './img/derTab.png';
    this.w = 50;
    this.h = 75;
/*

Math.floor(Math.random() * 6) + 1  

ALEATORIO ENTRE this.game.canvas.width * 0.9 Y this.game.canvas.width * 0.7

*/
    this.x =Math.floor(Math.random()* this.game.w);
    console.log(this.x)
    this.y =Math.floor(Math.random()*((this.game.h * 0.9)-(this.game.h * 0.7)+1)+(this.game.h * 0.7));
    this.dx = 1
}
Enemies.prototype.draw = function() {
  this.game.ctx.drawImage (this.img, this.x, this.y, this.w, this.h)      

    
}
Enemies.prototype.move = function(){

    this.x += this.dx * 0.7
    if (this.x < 0 || this.x > this.game.w){
        this.dx *= -1;
        this.img = new Image()
        //this.img.src = './img/izqTab.png';   

    }
}