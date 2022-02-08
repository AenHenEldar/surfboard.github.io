document.addEventListener('DOMContentLoaded', () => {
    const reviewList = document.querySelector('.review__list');

    reviewList.addEventListener('click', e => {
        const list = e.currentTarget;
        const item = e.target;
        if(item.classList.contains('review__item') && !item.classList.contains('active')) {
            list.querySelector('.active').classList.remove('active');
            item.classList.add('active');

            document.querySelector('.review__container.active').classList.remove('active');
            document.querySelectorAll('.review__container')[Array.from(item.parentNode.children).indexOf(item)]
                .classList.add('active');
        }
    })
});