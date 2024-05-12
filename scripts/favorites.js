const NoFavorites = () => {
  const div = document.createElement("div");
  div.style =
    "display: flex; flex-direction: column; gap: 20px; align-items: center; justify-content: center; max-width: 500px; background-color: #f1f1f1; padding: 30px; border-radius: 14  px";

  const h2 = document.createElement("h2");
  h2.textContent = "No tienes productos favoritos :(";
  h2.style =
    "color: #ff3b3c; font-size: 30px; font-weight: 900; text-align: center";

  const anchor = document.createElement("a");
  anchor.className = "btn-primary";
  anchor.textContent = "Ir al carrito";
  anchor.href = "/cart.html";

  div.appendChild(h2);
  div.appendChild(anchor);

  return div;
};

const favoriteCard = (favorite) => {
  const { id, image, price, title } = favorite;
  return `<article class="favorite-card" id="favorite-${id}">
  <figure class="favorite-card-image"><img src=${image} alt="mock product"></figure>
  <div class="favorite-card-content">
    <p>${title}</p>
    <span>$${price}</span>
    <a class="btn-primary" href="/details.html?id=${id}">Ir al producto</a>
    <button class="btn-outline">Quitar favoritos</button>
  </div>
</article>`;
};

function printFavorites(selectorID) {
  const selector = document.getElementById(selectorID);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  let templateFavorites = "";
  favorites.forEach((favorite) => {
    templateFavorites += favoriteCard(favorite);
  });

  !favorites.length && selector.append(NoFavorites());
  favorites.length && (selector.innerHTML = templateFavorites);
}
