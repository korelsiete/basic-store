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

function createCard(productCart) {
  const { image, title, description, price, quantity, id } = productCart;
  return `<article id="cart-product">
  <figure><img src="${image}" /></figure>
  <div class="cart-product-info">
    <h3>${title}</h3>
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
  <button class="btn-primary">Finaliza tu compra</button>
</article>`;
}

function printCartProducts(selector) {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartProducts);
  let templateProducts = "";

  cartProducts.forEach((productCart) => {
    templateProducts += createCard(productCart);
  });

  const cartContainer = document.getElementById(selector);
  const total = totalToPay(cartProducts);
  cartContainer.innerHTML = templateProducts;
  cartContainer.innerHTML += total;
}
