// Toggle Menu
let menuIcon = document.querySelector('#menu-icon'),
nav = document.querySelector('.nav'),
sections = document.querySelector('section'),
body = document.querySelector('body');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}





// Typed.js
const typed = new Typed('#im-a', {
    strings: ['Front-End Web Developer', 'Back-End Web Developer', 'Graphic Designer', 'Android Application Developer', 'IOS Developer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    typeDelay: 500,
    loop: true
});



