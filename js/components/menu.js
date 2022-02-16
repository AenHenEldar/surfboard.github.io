document.addEventListener('DOMContentLoaded', () => {
    $('.menu__item').on('click', (e) => {
        $('.menu__item').not($(e.currentTarget)).removeClass('active');
        $(e.currentTarget).toggleClass('active');
    });
});