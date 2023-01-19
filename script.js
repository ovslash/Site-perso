var bouton = document.getElementById("btn");
var nav = document.getElementById("menu_sections");
var liens = document.querySelectorAll("a");

console.log(liens);

bouton.onclick = function (e) {
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};

for (let lien of liens) {
  lien.onclick = function (e) {
    nav.style.display = "none";
  };
}
