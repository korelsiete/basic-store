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

const producto1 = new Product(
  1,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto2 = new Product(
  2,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto3 = new Product(
  3,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto4 = new Product(
  1,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto5 = new Product(
  1,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto6 = new Product(
  6,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);
const producto7 = new Product(
  7,
  "MacBook Pro 15'4",
  750000,
  10,
  ["./assets/mock1.jpg", "./assets/mock2.jpg"],
  true,
  "Apple",
  ["Space Gray", "Silver"],
  "Space gray"
);

const products = [producto1, producto2, producto3, producto4, producto5];

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
  let templateProducts = "";

  arrayProducts.forEach((product) => {
    templateProducts = templateProducts + createCard(product);
  });

  const productContainer = document.getElementById(selector);
  productContainer.innerHTML = templateProducts;
}

printCards(products, "products");
