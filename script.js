if (window.screen.width <= 720) {
  var bouton = document.getElementById("btn");
  var nav = document.getElementById("menu_sections");
  var liens = document.getElementsByClassName("menu_sections_lien");

  document.addEventListener("mouseup", function (event) {
    for (let lien of liens) {
      lien.onclick = function (e) {
        nav.style.display = "none";
      };
    }
    if (bouton.contains(event.target)) {
      if (nav.style.display == "flex") {
        nav.style.display = "none";
      } else {
        nav.style.display = "flex";
      }
    } else if (!nav.contains(event.target)) {
      nav.style.display = "none";
      console.log("11111111111111");
    }
  });
}
