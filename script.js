var bouton = document.getElementById("btn");
var nav = document.getElementById("menu_sections");
var liens = document.getElementsByClassName("menu_sections_lien");

console.log(liens);

bouton.onclick = function (e) {
  if (nav.style.display == "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
};

for (let lien of liens) {
  lien.onclick = function (e) {
    nav.style.display = "none";
  };
}
