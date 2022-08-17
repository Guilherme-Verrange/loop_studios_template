let menuToggle = document.querySelector('#toggle-nav');
let navBar = document.querySelector('.navbar');
let navList = document.querySelector('.navbar-mobile');

menuToggle.onclick = function(){
    navBar.classList.toggle('active');
    navList.classList.toggle('active');
}

const desiredElement = document.getElementById('.navbar'); // elemento alvo
const pixelsAmount = '5'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('changeStyle'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('changeStyle'); // remove classe "changeColor"
    }
});