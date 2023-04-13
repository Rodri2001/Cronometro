let tiempo = 0;
let cronometro;
let running = false;

function iniciar() {
  if (!running) {
    running = true;
    cronometro = setInterval(function () {
      tiempo++;
      actualizar();
    }, 1000);
  }
}

function detener() {
  clearInterval(cronometro);
  running = false;
}

function reiniciar() {
  clearInterval(cronometro);
  tiempo = 0;
  running = false;
  actualizar();
}

function actualizar() {
  let horas = Math.floor(tiempo / 3600);
  let minutos = Math.floor((tiempo - (horas * 3600)) / 60);
  let segundos = tiempo - (horas * 3600) - (minutos * 60);

  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  document.getElementById("cronometro").innerHTML = horas + ":" + minutos + ":" + segundos;
}
