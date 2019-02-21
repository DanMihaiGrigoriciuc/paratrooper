function Background (game){
    this.game = game

    this.img = new Image();
    //this.img.src = "./img/cielo-campo-mercato-sfondo-america.jpg"
    //this.img.src = "./img/autunno-cielo-verde-foresta-natura.jpg"
    //this.img.src = "./img/colori-cielo-erba-campo-umore.jpg"
    this.img.src = './img/sky-with-clouds.jpg';


    this.x = 0;
    this.y = 0;
    this.dy = 0.3

}
Background.prototype.draw = function (){
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x, this.y + this.game.canvas.height, this.game.canvas.width, this.game.canvas.height);
}    
Background.prototype.move = function (){
    this.y -= this.dy
    if (this.y < -this.game.canvas.height) this.y = 0;

    

};  