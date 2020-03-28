// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = "Campo obligatorio";
    return false;
  }
  return true;
}