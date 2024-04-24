function filterProducts(event, products = []) {
  const searchValue = event.target.value.toLowerCase().trim();
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue);
  });
  return filteredProducts;
}

export { filterProducts };
