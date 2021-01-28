const buttonTryElement = document.querySelector('.js-button');
const counterElement =  document.querySelector('.js-counter');
const userNumberElement = document.querySelector('.js-input-number');
const pistaElement = document.querySelector('.js-pista')

//Take random number between 1 and 100.
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
const randomNumber = getRandomNumber(100)
console.log(randomNumber)

//Comprobacion de números
function checkNumbers () {
let userNumberValue = parseInt(userNumberElement.value);

if( userNumberValue < 1 || userNumberValue > 100) {
    pistaElement.innerHTML= "El número tiene que estar entre 1 y 100"
}
else if( userNumberValue > randomNumber){
    pistaElement.innerHTML = "Número demasiado alto";

} else if ( userNumberValue < randomNumber) {
    pistaElement.innerHTML = "Número demasiado bajo" ;

}else if ( userNumberValue === randomNumber){
    pistaElement.innerHTML= "¡¡¡Has acertado. Enhorabuena campeona!!!";

} else { 
    pistaElement.innerHTML= "¡A jugar! Prueba un número"

}
}

let counter = 0
function takeCounter() {
    counter++;
    counterElement.innerHTML= counter;
}

function handleClickResult(ev){

checkNumbers()
takeCounter()
}


buttonTryElement.addEventListener('click', handleClickResult);