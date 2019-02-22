window.onload = function() {
  document.querySelector('#start-game').onclick = function() {
    document.querySelector(".inicio").style.display = "none"
    Game.init("canvas");
  }

  document.querySelector('#ower-game').onclick = function() {
    Game.init("canvas");
    document.querySelector('.game-over').style.display = 'none'
  }
 
  document.querySelector('#win-game').onclick = function() {
    Game.init("canvas");
    document.querySelector('.game-win').style.display = 'none'
  }

  document.querySelectorAll('.home').forEach(function(button) {
    button.onclick = function() {
      document.querySelector(".inicio").style.display = "block";
      document.querySelector('.game-over').style.display = 'none';
      document.querySelector('.game-win').style.display = 'none'; 
    }
  })
};

  