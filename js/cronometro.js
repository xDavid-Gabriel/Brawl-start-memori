function iniciaCronometro() {
    var segundos = 10;
    var minutos = 0;
    var segundosTexto;
    var minutosTexto;
    
  
    function actualizaContador() {
      //segundos = segundos +1;
      //if (segundos > 59){
       // segundos = 00;
       // minutos = minutos + 1;
     // }

      segundos--;
      if (segundos < 0) {
        segundos = 59;
        minutos--;
      }
      if (minutos < 0) {
        segundos = 0;
        minutos = 0;
        clearInterval(cronometro);
        timeOver();
      }

     segundosTexto = segundos;
     minutosTexto = minutos;
      if (segundos < 10) {
        segundosTexto = "0" + segundos;
      }
      if (minutos < 10) {
        minutosTexto = "0" + minutos;
      }
      document.querySelector("#minutos").innerText = minutosTexto;
      document.querySelector("#segundos").innerText = segundosTexto;
    }
    cronometro = setInterval(actualizaContador, 1000);
 }
  