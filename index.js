document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerMenuItem = document.querySelectorAll('.hamburger-menu__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        hamburgerMenu.classList.toggle('open');
    })
    hamburgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('hamburger-menu__item') || e.target.classList.contains('hamburger-menu__link')) {
            hamburger.classList.toggle('open');
            hamburgerMenu.classList.toggle('open');
        }
    })
});