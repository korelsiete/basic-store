const mainSearch = document.querySelector(".container #search");
const dropdownSearch = document.querySelector(".dropdown-menu #search");

function captureText() {
  console.log("capturado");
}

for (const search of [mainSearch, dropdownSearch]) {
  search.addEventListener("keyup", captureText);
}
