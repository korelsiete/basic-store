import { products, printCards } from "./products.js";

const mainSearch = document.querySelector(".container #search");
const dropdownSearch = document.querySelector(".dropdown-menu #search");

function captureEvent(event) {
  const searchValue = event.target.value.toLowerCase().trim();
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue);
  });

  printCards(filteredProducts, "products");
}

for (const search of [mainSearch, dropdownSearch]) {
  search.addEventListener("keyup", (event) => captureEvent(event));
}
