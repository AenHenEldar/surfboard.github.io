document.addEventListener('DOMContentLoaded', () => {
    const teamList = document.querySelectorAll('.team__list');

    teamList.forEach(menu => menu.addEventListener('click', e => {
        const list = e.currentTarget;
        const item = e.target;
        if(item.classList.contains('team__item-title')) {
            if(item !== list.querySelector('.team__item-title.active')
                && item.nextElementSibling !== list.querySelector('.team__item-container.active')) {
                list.querySelector('.team__item-title.active')?.classList?.remove('active');
                list.querySelector('.team__item-container.active')?.classList?.remove('active');
            }

            item.classList.toggle('active');
            item.nextElementSibling.classList.toggle('active');
        }
    }));
});