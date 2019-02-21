window.onload = function() {
  document.querySelector('#start-game').onclick = function() {
    document.querySelector(".inicio").style.display = "none"
    Game.init("canvas");
  }

  document.querySelector('#ower-game').onclick = function() {
    Game.init("canvas");
    document.querySelector('.game-over').style.display = 'none'
  }
 
  
};

  