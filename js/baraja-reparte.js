function barajaTarjetas(lasTarjetas) {
    var resultado;
    var totalTarjetas = lasTarjetas.concat(lasTarjetas);
    resultado = totalTarjetas.sort(function() {
      return 0.5 - Math.random();
    });
    return resultado;
  }
  
  function reparteTarjetas(lasTarjetas) {
    var mesa = document.querySelector("#mesa");
    var grupoTarjetas = barajaTarjetas(lasTarjetas);
    
    mesa.innerHTML = "";
  
    grupoTarjetas.forEach(function(elemento) {
      var tarjeta = document.createElement("div");
  
      tarjeta.innerHTML =  
      "<div class='tarjeta' data-valor= "+ 
      elemento +
       " >" +
      "<div class='tarjeta__contenido'>" + 
      "<img src='img/" + elemento + "'/>"
      "</div></div>";
  
      mesa.appendChild(tarjeta);
    });
  }