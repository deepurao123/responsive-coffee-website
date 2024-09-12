let navbar = document.querySelector(".navbar");
let toggleBtnIcon = document.querySelector("#menu-btn");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
  let isOpen = navbar.classList.contains("active");
  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars";
};

let cartItem = document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
