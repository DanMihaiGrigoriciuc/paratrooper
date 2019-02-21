var Game = {
    canvas: document.createElement("canvas"),
    keys: {
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
    },

    init: function (id) {
        // Obtenemos el canvas y su contexto
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");

        // Obtenemos el alto y el ancho de la página (la pantalla entera)
        this.w = window.innerWidth;
        this.h = window.innerHeight;

        // Establecemos estos valores al canvas para que ocupe toda la página
        this.canvas.width = this.w;
        this.canvas.height = this.h;

        // Iniciamos la partida


        this.start();
    },

    start: function () {
        this.reset()
        for (var i = 0; i <= 5; i++) {
            this.enemies.push(new Enemies(this))

        }
        
        this.interval = setInterval(function () {
            this.frameCounter++
            if (this.frameCounter > 1000) {
                this.frameCounter = 0
            }
            

            if (this.isCollision()) {
                console.log("choca")
                
                this.gameOver();
              }
            this.drawAll()
            this.moveAll()
        }.bind(this), 1000 / this.fps);

    },

    stop: function () {
        clearInterval(this.interval);
    },

    gameOver: function () {
        this.stop();
        document.querySelector('.game-over').style.display = 'block'
        // if (confirm("GAME OVER. Play again?")) {
        //     this.reset();
        //     this.start();
        // }
    },
    gameWin: function () {
        this.stop();
        document.querySelector('.game-win').style.display = 'block'
    },
    reset: function () {
        this.background = new Background(this);
        this.player = new Player(this);
        this.enemies = [];

    },
    ///////////////////////////////////////////////////////////////////
    isCollision: function (){
        var colision = false
         this.enemies.forEach(function(enemy, indexEnemy) {
             this.player.bullets.forEach(function(bullet, index){
                 
                if((enemy.x + enemy.w) >= bullet.x &&
                bullet.x + (bullet.r * 2) >= enemy.x &&
                enemy.y + enemy.h >= bullet.y &&
                bullet.y + (bullet.r *2) >= enemy.y)
                {
                    console.log("le he dado")
                    this.player.bullets.splice(index, 1);

                    enemy.lifeE--;
                    if (enemy.lifeE === 0) {
                        this.enemies.splice(indexEnemy, 1);

                        console.log('quedan ', this.enemies.length, ' enemigos')

                        if(this.enemies.length == 0){
                            this.gameWin();
                        }
                    }


                    /*this.enemies.lifeE --;
                    if(this.enemies.lifeE == 0){
                        this.gameOver();
                    }*/

                    
                    
                }
             }.bind(this));
             
             enemy.bullets.forEach(function(bullet, indexBullet){
               // // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )   
               if (this.player.x + this.player.w >= bullet.x &&
                bullet.x + (bullet.r * 2) >= this.player.x &&
                this.player.y + this.player.h >= bullet.y &&
                bullet.y + (bullet.r * 2) >= this.player.y) {
                    console.log('colisión');
                    enemy.bullets.splice(indexBullet, 1);

                    this.player.lifeP --;
                    console.log('vidas restantes', this.player.lifeP)
                    if(this.player.lifeP == 0){
                        this.gameOver();
                    }
                    
                }
               
             }.bind(this));           

    }.bind(this));
    },
    //////////////////////////////////////////////////////////////////

    drawAll: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw();
        //this.avion.draw();      
        this.player.draw();
        this.enemies.forEach(function (enemy) {
            enemy.draw();
        });

        
    },
    moveAll: function () {
        this.background.move()
        this.player.move()
        this.enemies.forEach(function (enemy) {
            enemy.move();
        });
        }


}
