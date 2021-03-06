// Hemos omitido los acentos en los comentarios por compatibilidad
$(document).ready(function () {

});
//Define las variables que necesites
var eventosProximos, eventosPasados, html ="", html2="";

//Carga los datos que estan en el JSON (info.json) usando AJAX
fetch('info.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Guarda el resultado en variables
    var fechaActual = data.fechaActual;
    var data = data.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    eventosProximos = data.filter(function (x) {
      return x.fecha > fechaActual;
    });

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    eventosProximos = eventosProximos.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return 1;
      }
      return -1;
    });

    //Extrae solo dos eventos
    //Crea un string que contenga el HTML que describe el detalle del evento
    //Recorre el arreglo y concatena el HTML para cada evento
    for (var i = 0; i < 2; i++) {
      html += `
        <div>
          <h3 id="${eventosProximos[i].id}"><a href="proximos.html?id=${eventosProximos[i].id}">${eventosProximos[i].nombre}</h3><a>
          <p class="fecha">${eventosProximos[i].fecha}</p>
          <p>${eventosProximos[i].descripcion}</p>
        </div>
      `;
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html;

    //Agregar funcion para mostrar el detalle
    $("div[id=proximos] h3").click(function () {
      $(".detalleProximos").fadeToggle();
    });

    // -----------------EVENTOS PASADOS-----------------------

    //Clasifica los eventos segun la fecha actual del JSON
    eventosPasados = data.filter(function (x) {
      return x.fecha < fechaActual;
    });

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    eventosPasados = eventosPasados.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
      return -1;
    });

    //Extrae solo dos eventos
    //Crea un string que contenga el HTML que describe el detalle del evento
    //Recorre el arreglo y concatena el HTML para cada evento
    for (var i = 0; i < 2; i++) {
      html2 += `
        <div>
          <h3 id="${eventosPasados[i].id}"><a href="pasados.html?id=${eventosPasados[i].id}">${eventosPasados[i].nombre}</h3><a>
          <p class="fecha">${eventosPasados[i].fecha}</p>
          <p>${eventosPasados[i].descripcion}</p>
        </div>
      `;
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = html2;

    //Agregar funcion para mostrar el detalle
    $("div[id=pasados] h3").click(function () {
      $(".detallePasados").fadeToggle();
    });
  })
  .catch(function (err) {
    console.error(err);
  });