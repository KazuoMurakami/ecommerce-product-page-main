let incremento = document.querySelector(".img-plus");
let decremento = document.querySelector(".img-minus");
let number = document.querySelector(".number-itens");
let buy = document.querySelector(".cart-finish");
let value = 0;

incremento.addEventListener("click", increment);
decremento.addEventListener("click", decrement);
buy.addEventListener("click", finishBuy);

function increment() {
  value += 1;
  number.textContent = value;
}
function decrement() {
  if (number.textContent == 0) {
    return;
  } else {
    value = value - 1;
    number.textContent = value;
  }
}

function finishBuy() {
  if (number.textContent == 0) {
    window.alert("Selecione pelo menos uma unidade");
  } else {
    window.alert("sucesso");
  }
}

const active = document.querySelector(".active");

const images = document.querySelectorAll(".img-thumbnail");
const imagesArray = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

images.forEach((img) => {
  img.addEventListener("click", effectsImg);
});

function effectsImg() {
  const activeImg = document.querySelector(".active");
  const mainImg = document.querySelector(".img-main");
  if (activeImg) {
    activeImg.classList.remove("active");
  }
  const clickedIndex = Array.from(images).indexOf(this);
  images[clickedIndex].classList.add("active");

  const imagePath = `images/${imagesArray[clickedIndex]}`;
  mainImg.setAttribute("src", imagePath);
}

// if (this == images[0]) {
//   images.this.classList.add("active");
// }
/* parte que faz o funcionamento da aba de carrinho de compras*/

let cart = document.querySelector(".cart");

cart.addEventListener("click", cartSection);

function cartSection() {
  const sectionCart = document.querySelector(".nav-cart");
  sectionCart.classList.toggle("nav-cart-switch");
}
