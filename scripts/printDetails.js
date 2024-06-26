const query = location.search;
const params = new URLSearchParams(query);
const idQuery = params.get("id");

function changeImage(e) {
  const selectedSrc = e.target.src;
  const mainImage = document.querySelector(".main-image");
  mainImage.src = selectedSrc;
}

function changeSubtotal(e, price) {
  const quantity = e.target.value;
  const total = quantity * price;
  const totalPrice = document.querySelector(".checkout-total-price");
  totalPrice.innerText = `$${total}`;
}

function saveProduct(id) {
  const { title, price, images, description } = products.find(
    (product) => product.id === id
  );
  const colorValue = document.querySelector("#color-" + id).value;
  const quantityValue = Number(document.querySelector("#quantity-" + id).value);
  const productValues = {
    id,
    title,
    price,
    description,
    image: images[0].url,
    color: { [colorValue]: quantityValue },
    quantity: quantityValue,
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.some((product) => product.id === id)) {
    const sameProduct = cart.find((product) => product.id === id);
    sameProduct.color[colorValue]
      ? (sameProduct.color[colorValue] += quantityValue)
      : (sameProduct.color[colorValue] = quantityValue);

    sameProduct.quantity += productValues.quantity;
  } else {
    cart.push(productValues);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function createProductDetails(product) {
  const { title, description, price, images, colors, id } = product;
  return `<div class="product-image product-section">
            ${images
              .map((image) => {
                return `<div class="thumbnail-container">
              <img src=${image.url} alt=${image.alt} onClick="changeImage(event)"/>
            </div>`;
              })
              .join("")}
            <img
              class="main-image"
              src=${images[0].url}
              alt=${images[0].alt}
            />
          </div>

          <div class="product-description product-section">
            <h1 class="title">${title}</h1>
            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>
                <select id="color-${id}" type="text" placeholder="Selecciona un color">
                  ${colors
                    .map((color) => {
                      return `<option value=${color
                        .toLowerCase()
                        .split(" ")
                        .join("-")}>${color}</option>`;
                    })
                    .join("")}
                </select>
              </fieldset>
            </form>
            <div class="info">
              <span>Descripción</span>
              <p>${description}</p>
            </div>
          </div>

          <div class="product-checkout product-section">
            <div class="checkout-container">
              <span class="checkout-total-label">Total:</span>
              <h2 class="checkout-total-price">$${price}</h2>
              <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
              </p>

              <ul class="checkout-policy-list">
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/truck.png" alt=""
                  /></span>
                  <span class="policy-desc">
                    Agrega el producto al carrito para conocer los costos de
                    envío</span
                  >
                </li>
                <li>
                  <span class="policy-icon"
                    ><img src="./assets/plane.png" alt=""
                  /></span>
                  <span class="policy-desc">
                    Recibí aproximadamente entre 10 y 15 días hábiles,
                    seleccionando envío normal</span
                  >
                </li>
              </ul>

              <div class="checkout-process">
                <div class="top">
                  <input id="quantity-${id}" type="number" value="1" min="1" max="99" onchange="changeSubtotal(event, ${price})"/>
                  <button class="btn-primary">Comprar</button>
                </div>
                  <div class="bottom" onclick="saveProduct(${id})">
                    <button class="btn-outline">Añadir al carrito</button>
                </div>
              </div>
            </div>
          </div>
  `;
}

function printDetails(selector, products, id = idQuery) {
  const product = products.find((product) => product.id == id);

  const container = document.getElementById(selector);
  const productDetailHTML = createProductDetails(product);
  container.innerHTML = productDetailHTML;
}
