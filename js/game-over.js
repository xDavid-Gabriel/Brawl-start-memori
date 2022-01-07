function gameOver() {
    clearInterval(cronometro);
    document.querySelector("#gameOver").classList.add("visible");
    document.querySelector("#sonido-derrota").play();
    document.querySelector("#sonido-inicio").pause();

  }
  
  function timeOver() {
    document.querySelector("#timeOver").classList.add("visible");
    document.querySelector("#sonido-derrota").play();
    document.querySelector("#sonido-inicio").pause();
  }