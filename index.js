
//hamburger menu

let button = document.querySelector(".hamburger");
let navbar = document.getElementById('navbar');


function menu() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
        button.src = './assets/shared/icon-close.svg';
    } else {
        navbar.style.display = 'none';
        button.src = './assets/shared/icon-hamburger.svg';
    }
}



