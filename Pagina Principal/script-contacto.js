var loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", function () {
  console.log("Botón de Inicio de Sesión");
  window.location.href = "index-inicio-sesion.html";
});

var cerrarButton = document.getElementById("cerrar-sesion");
cerrarButton.addEventListener("click", function () {
  console.log("Botón de Cerrar Sesión");
  window.location.href = "index.html";
});