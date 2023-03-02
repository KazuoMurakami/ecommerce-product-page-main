let incremento = document.querySelector(".img-plus");
let decremento = document.querySelector(".img-minus");
let number = document.querySelector(".number-itens");
let value = 0;

incremento.addEventListener("click", increment);
decremento.addEventListener("click", decrement);

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
