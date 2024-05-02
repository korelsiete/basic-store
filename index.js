"use strict";
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchMain = document.getElementById("main-search");
    const searchDropdown = document.getElementById("dropdown-search");
    const navMain = document.getElementById("main-nav");
    const navDropdown = document.getElementById("dropdown-nav");
    const footer = document.getElementById("footer");

    renderNavOptions(navMain);
    renderNavOptions(navDropdown);
    renderFooterOptions(footer);

    const currentPage = window.location.pathname;
    switch (currentPage) {
      case "/":
        for (const search of [searchMain, searchDropdown]) {
          search.addEventListener("keyup", (event) => {
            const filteredProducts = filterProducts(event, products);
            printCards("products", filteredProducts);
          });
        }
        printCards("products", products);
        break;
      case "/details.html":
        printDetails("details", products);
        break;
      case "/cart.html":
        printCartProducts("cart-container");
        break;
    }
  });
})();
