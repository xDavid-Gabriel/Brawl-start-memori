function descubrir() {
    var descubiertas;
    var tarjetasPendientes;
    var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
    );
  
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta");

    //sonido Dinamike

    if(this.dataset.valor=== "dinamike.png" && totalDescubiertas.length<1){
    document.querySelector("#sonido-dinamike").cloneNode().play();
    }

    //sonido Poco

    if(this.dataset.valor=== "poco.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-poco").cloneNode().play();
      }
    //sonido frank

    if(this.dataset.valor=== "frank.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-frank").cloneNode().play();
      }
     //sonido mortis
      if(this.dataset.valor=== "mortis.png" && totalDescubiertas.length<1){
        document.querySelector("#sonido-mortis").cloneNode().play();
        }
     //sonido Primo

     if(this.dataset.valor=== "primo.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-primo").cloneNode().play();
      }
    //sonido Colt

    if(this.dataset.valor=== "colt.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-colt").cloneNode().play();
      }
     //sonido rosa

    if(this.dataset.valor=== "rosa.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-rosa").cloneNode().play();
      }
       //sonido brock

    if(this.dataset.valor=== "brock.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-brock").cloneNode().play();
      }
       //sonido barley

    if(this.dataset.valor=== "barley.png" && totalDescubiertas.length<1){
        document.querySelector("#sonido-barley").cloneNode().play();
        }
       //sonido tick

    if(this.dataset.valor=== "tick.png" && totalDescubiertas.length<1){
        document.querySelector("#sonido-tick").cloneNode().play();
        }
        //sonido bull

    if(this.dataset.valor=== "bull.png" && totalDescubiertas.length<1){
        document.querySelector("#sonido-bull").cloneNode().play();
        }
       //sonido boo

    if(this.dataset.valor=== "boo.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-boo").cloneNode().play();
      }
      //sonido leon

      if(this.dataset.valor=== "leon.png" && totalDescubiertas.length<1){
        document.querySelector("#sonido-leon").cloneNode().play();
        }
     //sonido mrp

     if(this.dataset.valor=== "mrp.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-mrp").cloneNode().play();
      }
    //sonido rico

    if(this.dataset.valor=== "rico.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-rico").cloneNode().play();
      }
    //sonido 8bit

    if(this.dataset.valor=== "8bit.png" && totalDescubiertas.length<1){
      document.querySelector("#sonido-8bit").cloneNode().play();
      }
  
  




    //document.querySelector("#sonido-carta").cloneNode().play();

  
    
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
    actualizaContador();
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0) {
      setTimeout (finalizar, 1000);
    }
  }
  
  function comparar(tarjetasAcomparar) {
    //var audioTarjetas;
    //(audioTarjetas);
    
    if (
      tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor
    ) {
      acierto(tarjetasAcomparar);
    } else {
      error(tarjetasAcomparar);
    }
  
  }

 // function descubrir() {
  //  var descubiertas;
  //  var tarjetasPendientes;
  //  var totalDescubiertas = document.querySelectorAll(
  //    ".descubierta:not(.acertada)"
  //  );
  
   // if (totalDescubiertas.length > 1) {
    //  return;
   // }
  
   // this.classList.add("descubierta");
  //  document
    //  .querySelector("#sonido-carta")
    //  .cloneNode()
     // .play();
  
   // descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    //if (descubiertas.length < 2) {
    //  return;
  //  }
  
   // comparar(descubiertas);
   // actualizaContador();
  //  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  //  if (tarjetasPendientes.length === 0) {
    //  setTimeout(finalizar, 1000);
    //}
  //}
  
 // function comparar(tarjetasAComparar) {
   // if (
   //   tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
   // ) {
     // acierto(tarjetasAComparar);
   // } else {
    //  error(tarjetasAComparar);
   // }
  //}
  