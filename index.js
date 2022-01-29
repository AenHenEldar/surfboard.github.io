document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        hamburgerMenu.classList.toggle('open');
    })
});