$(document).ready(function(){
    $('.board__slider').bxSlider();
});

const slider = $('.board__slider').bxSlider({
    pager: false,
    controls: false,
    startSlide: 1
});

const board = document.querySelector('.board');
const arrowLeft = board.querySelector('.arrow-left');
const arrowRight = board.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
    slider.goToPrevSlide();
})
arrowRight.addEventListener('click', () => {
    slider.goToNextSlide();
})