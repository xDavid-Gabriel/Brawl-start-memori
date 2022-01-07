//function iniciar() {
//movimientos = 0;
//reparteTarjetas(niveles[nivelActual].tarjetas);
//document.querySelector("#mov").innerText = "00";
//maxContador();
//document.querySelector("#endGame").classList.remove("visible");
//document.querySelector("#timeOver").classList.remove("visible");
//document.querySelector("#gameOver").classList.remove("visible");
//document.querySelector("#feedback").classList.remove("visible");

//document.querySelectorAll(".tarjeta").forEach(function(elemento) {
//elemento.addEventListener("click", descubrir);
//});

// iniciaCronometro();
//}

//function reiniciar(){
//nivelActual = 0;
//actualizaNivel();
//iniciar();
//}

//iniciar();

//document.querySelectorAll(".reiniciar").forEach(function(elemento) {
//elemento.addEventListener("click", reiniciar);
//});

//document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#feedback").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  document.querySelector("#sonido-victoria").pause();

  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");

  document.querySelector("#sonido-inicio").play();
}

function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();

  document.querySelector("#sonido-inicio").play();
}

//iniciar();

//document.querySelectorAll(".reiniciar").forEach(function(elemento) {
//elemento.addEventListener("click", reiniciar);
//});

//document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
