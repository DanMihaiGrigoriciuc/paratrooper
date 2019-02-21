window.onload = function() {
  document.querySelector('#start-game').onclick = function() {
    document.querySelector(".inicio").style.display = "none"
    Game.init("canvas");
  }
  };