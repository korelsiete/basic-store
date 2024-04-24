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

function renderNavOptions(container) {
  for (let option of optionsForNav) {
    const li = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    li.appendChild(anchor);
    container.appendChild(li);
  }
}

function renderFooterOptions(container) {
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
    container.append(div);
  }
}

export { renderNavOptions, renderFooterOptions };
