function panelPerfil() {
  const perfil = document.getElementById("panel-p");
  perfil.classList.toggle("dropdown-content");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("dropdown-content")) {
        openDropdown.classList.remove("dropdown-content");
      }
    }
  }
};
