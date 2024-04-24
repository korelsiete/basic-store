class Product {
  constructor(
    id,
    title,
    price,
    stock,
    images,
    onSale,
    supplier,
    colors = [],
    description
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onSale = onSale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (this.stock - units < 0) return console.error("No hay suficiente stock");
    this.stock -= units;
    console.log(
      `Se vendieron ${units} unidades de ${this.title}, quedan: ${this.stock}`
    );
  }
}

const products = [
  new Product(
    1,
    "MacBook Pro 15'4",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
  new Product(
    2,
    "Iphone 10",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
  new Product(
    3,
    "AirPods",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
  new Product(
    4,
    "Smart Watch",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
  new Product(
    5,
    "Tablet 10'4",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
  new Product(
    6,
    "USB port for Mac",
    750000,
    10,
    ["./assets/mock1.jpg", "./assets/mock2.jpg"],
    true,
    "Apple",
    ["Space Gray", "Silver"],
    "Space gray"
  ),
];

function createCard(product) {
  return `<a class="product-card" href="./details.html">
  <img
    src="${product.images[0]}"
    alt="${product.title}"
    class="product-img"
  />
  <div class="product-info">
    <span class="product-title">${product.title}</span>
    <span class="product-description">${product.description}</span>
    <div class="product-price-block">
      <span class="price">$${product.price}</span>
      <span class="discount">${product.onSale ? "50% Off" : ""}</span>
    </div>
    <div class="product-tax-policy">
      Incluye impuesto País y percepción AFIP
    </div>
  </div>
</a>`;
}

function printCards(arrayProducts, selector) {
  try {
    let templateProducts = "";

    arrayProducts.forEach((product) => {
      templateProducts = templateProducts + createCard(product);
    });

    const productContainer = document.getElementById(selector);
    productContainer.innerHTML = templateProducts;
  } catch (error) {
    console.error(error);
  }
}

export { products, printCards };
