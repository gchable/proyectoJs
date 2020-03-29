// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = " Campo obligatorio";
    return false;
  }
  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerText = " Campo obligatorio";
    return false;
  }
  if (formulario.email.value.trim().length > 0) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(formulario.email.value.trim())) {
      document.getElementById("errorEmail").innerText = " Formato inválido";
      return false;
    }
  }
  if (formulario.contrasena.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerText = " Debe tener mínimo 7 caracteres";
    return false;
  }
  if (formulario.confirmacion.value.trim().length < 7) {
    document.getElementById("errorConfirmacion").innerText = " Debe tener mínimo 7 caracteres";
    return false;
  }
  if (formulario.contrasena.value.trim() != formulario.confirmacion.value.trim()) {
    document.getElementById("errorConfirmacion").innerText = " Contraseña no coincide";
    return false;
  }
  if (formulario.tipo.value == -1) {
    document.getElementById("errorTipo").innerText = " Campo obligatorio";
    return false;
  }
  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = " Campo obligatorio";
    return false;
  }


  return true;
}