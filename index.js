"use strict";
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const searchMain = document.getElementById("main-search");
    const searchDropdown = document.getElementById("dropdown-search");
    const navMain = document.getElementById("main-nav");
    const navDropdown = document.getElementById("dropdown-nav");
    const footer = document.getElementById("footer");
    const userIcon = document.getElementById("user");

    localStorage.getItem("cart") ||
      localStorage.setItem("cart", JSON.stringify([]));
    localStorage.getItem("favorites") ||
      localStorage.setItem("favorites", JSON.stringify([]));
    localStorage.getItem("isOnline") ||
      localStorage.setItem("isOnline", "false");

    userIcon.addEventListener("click", () => {
      const isOnline = JSON.parse(localStorage.getItem("isOnline"));
      localStorage.setItem("isOnline", JSON.stringify(!isOnline));
      renderIcons();
    });

    renderIcons();
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
      case "/favorites.html":
        printFavorites("favorites");
        break;
    }
  });
})();

function renderIcons() {
  const isOnline = localStorage.getItem("isOnline") === "true";
  const userIcon = document.getElementById("user");
  const cartIcon = document.getElementById("cart");
  const favoritesIcon = document.getElementById("favorites");

  if (isOnline) {
    userIcon.classList.remove("login");
    cartIcon.classList.remove("hide");
    favoritesIcon.classList.remove("hide");
  } else {
    userIcon.classList.add("login");
    cartIcon.classList.add("hide");
    favoritesIcon.classList.add("hide");
  }
}
