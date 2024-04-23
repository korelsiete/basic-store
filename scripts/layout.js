const mainNav = document.querySelector(".container .nav ul");
const dropdownNav = document.querySelector(".dropdown-menu .nav ul");

const options = [
  { title: "Ofertas", linkTo: "#" },
  { title: "Cómo comprar", linkTo: "#" },
  { title: "Costos y tarifas", linkTo: "#" },
  { title: "Mis pedidos", linkTo: "#" },
  { title: "Garantía", linkTo: "#" },
];

for (let nav of [mainNav, dropdownNav]) {
  for (let option of options) {
    // Create a new list item
    const li = document.createElement("li");

    // Create a link and their properties
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    // Add the link to the list
    li.appendChild(anchor);

    // Add the list item to the nav
    nav.appendChild(li);
  }
}
