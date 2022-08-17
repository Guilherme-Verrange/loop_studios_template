let menuToggle = document.querySelector('#toggle-nav');
let navBar = document.querySelector('.navbar');
let navList = document.querySelector('.navbar-mobile');

menuToggle.onclick = function(){
    navBar.classList.toggle('active');
    navList.classList.toggle('active');
}