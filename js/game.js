var Game = {
    canvas: document.createElement("canvas"),
    keys: {
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
        this.interval = setInterval(function () {
            this.frameCounter++
            if (this.frameCounter > 1000) {
                this.frameCounter = 0
            }
            if (this.enemies.length < 3) {
                
                //if (this.frameCounter % 300 === 0) {
                    this.enemies.push(new Enemies(this))
                    
                //}
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

        if (confirm("GAME OVER. Play again?")) {
            this.reset();
            this.start();
        }
    },

    reset: function () {
        this.background = new Background(this);
        this.player = new Player(this);
        this.enemies = [];

    },
    drawAll: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw();
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

        //this.enemies.move()

    }


}
