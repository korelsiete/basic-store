const mainSearch = document.querySelector(".container #search");
const dropdownSearch = document.querySelector(".dropdown-menu #search");

function captureText(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.key);
  console.log(event.target.value);
}

for (const search of [mainSearch, dropdownSearch]) {
  search.addEventListener("keyup", (event) => captureText(event));
}
