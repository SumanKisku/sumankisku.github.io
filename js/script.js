let headerNav = document.querySelector('.header-navigation');
let hamburger = document.querySelector('.hamburger-menu');


hamburger.addEventListener('click', () => {
    headerNav.classList.toggle('visible');
});