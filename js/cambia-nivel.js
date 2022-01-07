function subeNivel() {
  nivelActual++;
  document.querySelector("#sonido-inicio").play();
  document.querySelector("#sonido-victoria").pause();
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }

  document.querySelector("#nivel").innerText = nivelTexto;
  document.querySelector("#sonido-inicio").play();
  document.querySelector("#sonido-derrota").pause();
}

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
