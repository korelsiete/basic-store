function deleteProductOnCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const newCart = cart.filter((product) => product.id != id);
  localStorage.setItem("cart", JSON.stringify(newCart));
  printCartProducts("cart-container");
}

function changeQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const newCart = cart.map((product) => {
    if (product.id == id) {
      return {
        ...product,
        quantity: Number(document.querySelector("#quantity-" + id).value),
      };
    }
    return product;
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
  printCartProducts("cart-container");
}

function addToFavorites(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.find((favorite) => favorite.id == id)) {
    const newFavorites = favorites.filter((favorite) => favorite.id != id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    document.getElementById(`icon-star-${id}`).classList.remove("favorite");
  } else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const selected = cart.find((product) => product.id == id);
    const newFavorites = [...favorites, selected];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    document.getElementById(`icon-star-${id}`).classList.add("favorite");
  }
}

function createCard(productCart) {
  const { image, title, description, price, quantity, id } = productCart;
  return `<article id="cart-product">
  <figure><img src="${image}" /></figure>
  <div class="cart-product-info">
    <div class="title">
      <h3>${title}</h3>
      <figure onclick="addToFavorites(${id})">
      <svg id="icon-star-${id}" class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
      </figure>
    </div>
    <p>${description}</p>
    <div class="check-price">
      <input
        type="number"
        name="quantity"
        class="quantity"
        id="quantity-${id}"
        value="${quantity}"
        min="1"
        max="100"
        onchange="changeQuantity(${id})"
      />
      <span>$${price * quantity}</span>
    </div>
  </div>
  <img class="delete" src="./assets/delete.svg" alt="delete icon" onclick="deleteProductOnCart(${id})"/>
</article>`;
}

function clearCart() {
  localStorage.removeItem("cart");
  printCartProducts("cart-container");
}

function totalToPay(cart) {
  const total = cart.reduce(
    (acc, product) => (acc += product.price * product.quantity),
    0
  );
  return `<article id="total">
  <h2>Resumen del pedido</h2>
  <p class="subtotal">
    <span>Subtotal:</span>
    <span>${total}</span>
  </p>
  <span class="quote">Incluye Impuesto PAIS y percepción AFIP.</span>
  <button class="btn-primary" onclick="clearCart()">Finaliza tu compra</button>
</article>`;
}

function printCartProducts(selector) {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  const emptyCart = `<div class="empty-cart">
  <h2>Carrito vacío</h2>
  <a class="btn-primary" href="/">Ir al Inicio</a>
  </div>`;
  let templateProducts = "";

  cartProducts.forEach((productCart) => {
    templateProducts += createCard(productCart);
  });

  const cartContainer = document.getElementById(selector);
  const total = totalToPay(cartProducts);
  cartContainer.innerHTML = templateProducts || emptyCart;
  cartContainer.innerHTML += total;
}
