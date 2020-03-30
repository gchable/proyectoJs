// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});


if (location.search) {
  // Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var url = location.search;
  var expresionRegular = new RegExp(/id=(\d)*/);
  var eventoId = url.match(expresionRegular);
  eventoId = eventoId[1];
  //var eventoId = location.search.match(/id=(\d)*/)[1];
  fetch('info.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      evento = data.eventos.find(function (element) {
        return element.id == eventoId;
      })

      var datos = `
        <div>
          <a href="javascript:history.go(-1)"><h3>${evento.nombre}</h3></a>
          <p class="fecha">${evento.fecha}</p>
          <p>${evento.descripcion}</p>
          <p class="lugar">Lugar: ${evento.lugar}</p>
          <p class="invitados">Invitados: ${evento.invitados}</p>
          <p class="precio">Precio: ${evento.precio}</p>
        </div>
      `;
      
      if (document.getElementById("pasados")){
        document.getElementById("pasados").innerHTML = datos;
      }
      
      if (document.getElementById("proximos")) {
        document.getElementById("proximos").innerHTML = datos;
      }
      
    })
    .catch(function (err) {
      console.error(err);
    });
}