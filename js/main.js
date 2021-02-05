const buttonTryElement = document.querySelector(".js-button");
const counterElement = document.querySelector(".js-counter");
const userNumberElement = document.querySelector(".js-input-number");
const pistaElement = document.querySelector(".js-pista");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

function getInner(clue) {
  pistaElement.innerHTML = clue;
}

function checkNumbers() {
  let userNumberValue = parseInt(userNumberElement.value);

  if (userNumberValue < 1 || userNumberValue > 100) {
    getInner("El número tiene que estar entre 1 y 100.");
  } else if (userNumberValue > randomNumber) {
    getInner("Número demasiado alto");
  } else if (userNumberValue < randomNumber) {
    getInner("Número demasiado bajo");
  } else if (userNumberValue === randomNumber) {
    getInner("¡¡¡Has acertado. Enhorabuena campeona!!!");
  } else {
    getInner("¡A jugar! Prueba un número");
  }
}

let counter = 0;
function takeCounter() {
  counter++;
  counterElement.innerHTML = counter;
}

function handleClickResult(ev) {
  ev.preventDefault();
  checkNumbers();
  takeCounter();
}
buttonTryElement.addEventListener("click", handleClickResult);
