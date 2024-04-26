"use strict";
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchMain = document.getElementById("main-search");
    const searchDropdown = document.getElementById("dropdown-search");
    const navMain = document.getElementById("main-nav");
    const navDropdown = document.getElementById("dropdown-nav");
    const footer = document.getElementById("footer");

    for (const search of [searchMain, searchDropdown]) {
      search.addEventListener("keyup", (event) => {
        const filteredProducts = filterProducts(event, products);
        printCards("products", filteredProducts);
      });
    }

    printCards("products", products);
    printDetails("details", products);
    renderNavOptions(navMain);
    renderNavOptions(navDropdown);
    renderFooterOptions(footer);
  });
})();
