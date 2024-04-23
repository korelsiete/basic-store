const mainNav = document.querySelector(".container .nav ul");
const dropdownNav = document.querySelector(".dropdown-menu .nav ul");
const footerContainer = document.querySelector(".columns-container");

const optionsForNav = [
  { title: "Ofertas", linkTo: "#" },
  { title: "Cómo comprar", linkTo: "#" },
  { title: "Costos y tarifas", linkTo: "#" },
  { title: "Mis pedidos", linkTo: "#" },
  { title: "Garantía", linkTo: "#" },
];

const optionsForFooter = [
  {
    opts: [
      { title: "Ofertas", linkTo: "#", isTitle: true },
      { title: "Laptop", linkTo: "#" },
      { title: "Audio", linkTo: "#" },
      { title: "Auriculares", linkTo: "#" },
    ],
  },
  {
    opts: [
      { title: "Cómo comprar", linkTo: "#", isTitle: true },
      { title: "Formas de pago", linkTo: "#" },
      { title: "Envíos", linkTo: "#" },
      { title: "Devoluciones", linkTo: "#" },
    ],
  },
  {
    opts: [
      { title: "Costos y tarifas", linkTo: "#", isTitle: true },
      { title: "Impuestos", linkTo: "#" },
      { title: "Facturación", linkTo: "#" },
    ],
  },
  {
    opts: [
      { title: "Mis pedidos", linkTo: "#", isTitle: true },
      { title: "Pedir nuevamente", linkTo: "#" },
      { title: "Lista de deseos", linkTo: "#" },
    ],
  },
  { opts: [{ title: "Garantía", linkTo: "#", isTitle: true }] },
];

// Loop to add the NAV options
for (let nav of [mainNav, dropdownNav]) {
  for (let option of optionsForNav) {
    // Create a new list item
    const li = document.createElement("li");

    // Create a link and their properties
    const anchor = document.createElement("a");
    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    // Add the link to the list
    li.appendChild(anchor);

    // Add the list item to the nav
    nav.appendChild(li);
  }
}

// Loop to add the FOOTER options
for (let option of optionsForFooter) {
  let div = document.createElement("div");
  div.className = "col";
  let ul = document.createElement("ul");

  for (let opt of option.opts) {
    const li = document.createElement("li");
    if (opt.isTitle) li.className = "col-main-item";

    const a = document.createElement("a");
    a.textContent = opt.title;
    a.href = opt.linkTo;

    li.appendChild(a);
    ul.appendChild(li);
  }

  div.appendChild(ul);
  footerContainer.append(div);
}
