function finalizar() {
    clearInterval(cronometro);
     if (nivelActual < niveles.length - 1) {
      document.querySelector("#feedback").classList.add("visible");
      document.querySelector("#sonido-victoria").play();
      document.querySelector("#sonido-inicio").pause();
      
    } else {
      document.querySelector("#endGame").classList.add("visible");
      document.querySelector("#sonido-victoria").play();
      document.querySelector("#sonido-inicio").pause();
    }
  }