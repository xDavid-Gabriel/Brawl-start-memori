function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
  });

  //Dinamike
if(lasTarjetas[1].dataset.valor==="dinamike.png"){
  document.querySelector("#sonido-dinamike2").cloneNode().play()}
//Poco
if(lasTarjetas[1].dataset.valor==="poco.png"){
  document.querySelector("#sonido-poco2").cloneNode().play()}  
//Frank
  if(lasTarjetas[1].dataset.valor==="frank.png"){
    document.querySelector("#sonido-frank2").cloneNode().play()}  
//Mortis
if(lasTarjetas[1].dataset.valor==="mortis.png"){
  document.querySelector("#sonido-mortis2").cloneNode().play()}  
//Primo
if(lasTarjetas[1].dataset.valor==="primo.png"){
  document.querySelector("#sonido-primo2").cloneNode().play()}  
//Colt
if(lasTarjetas[1].dataset.valor==="colt.png"){
  document.querySelector("#sonido-colt2").cloneNode().play()}
//Rosa
if(lasTarjetas[1].dataset.valor==="rosa.png"){
  document.querySelector("#sonido-rosa2").cloneNode().play()}  
//Brock
if(lasTarjetas[1].dataset.valor==="brock.png"){
  document.querySelector("#sonido-brock2").cloneNode().play()}   
//Barley
if(lasTarjetas[1].dataset.valor==="barley.png"){
  document.querySelector("#sonido-barley2").cloneNode().play()}
//tick
if(lasTarjetas[1].dataset.valor==="tick.png"){
  document.querySelector("#sonido-tick2").cloneNode().play()} 
//bull
if(lasTarjetas[1].dataset.valor==="bull.png"){
  document.querySelector("#sonido-bull2").cloneNode().play()} 
//boo
if(lasTarjetas[1].dataset.valor==="boo.png"){
  document.querySelector("#sonido-boo2").cloneNode().play()}   
//leon
if(lasTarjetas[1].dataset.valor==="leon.png"){
  document.querySelector("#sonido-leon2").cloneNode().play()}    
//mrp
if(lasTarjetas[1].dataset.valor==="mrp.png"){
  document.querySelector("#sonido-mrp2").cloneNode().play()}
//rico
if(lasTarjetas[1].dataset.valor==="rico.png"){
  document.querySelector("#sonido-rico2").cloneNode().play()}
//8bit
if(lasTarjetas[1].dataset.valor==="8bit.png"){
  document.querySelector("#sonido-8bit2").cloneNode().play()}
  
  
//document.querySelector("#sonido-acierto").play();
//document.querySelector(audioTarjetas).play();

}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function(){
      lasTarjetas.forEach(function(elemento){
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");
      });   
    }, 1800);


}

