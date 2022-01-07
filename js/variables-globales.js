var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  //[{valor: "dinamike.png", audio:"#sonido-dinamike"}, {valor:"poco.png", audio:"#sonido-poco"}],
  ["dinamike.png", "poco.png"],
  ["frank.png", "mortis.png"],
  ["primo.png", "colt.png", "rosa.png", "brock.png"],
  ["barley.png", "tick.png", "bull.png", "boo.png"],
  ["leon.png", "mrp.png", "rico.png", "8bit.png"],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12,
  },

  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
  },
];
