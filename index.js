const validateFields = (form, fields) => {
    fields.forEach(field => {
        field.removeClass('input-error');
        if(field.val().trim() === '') {
            field.addClass('input-error');
        }
    })

    return !form.find('.input-error').length;
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const display = document.querySelector('.wrapper__container');
    const sections = $('section');
    let inScroll = false;

    const slideSection = (direction, isIndex) => {
        const section = $('section.active');
        let index;

        if(!inScroll) {
            inScroll = true;

            if(direction === 'next' && section.next().length) {
                index = section.next().index();
            } else if(direction === 'prev' && section.prev().length) {
                index = section.prev().index();
            } else if(isIndex) {
                index = direction;
            }

            if(index !== undefined) {
                const position = index * -100;
                section.removeClass('active');
                sections.eq(index).addClass('active');
                display.style.transform = `translateY(${position}%)`;

                const curSec = sections.eq(index);
                const menuItem = curSec.attr('data-sidemenu-theme');
                const nav = $('#nav');
                const hamburger = $('#hamburger');

                if(menuItem === 'black') {
                    nav.addClass('nav_black');
                    hamburger.addClass('hamburger_black');
                } else {
                    nav.removeClass('nav_black');
                    hamburger.removeClass('hamburger_black');
                }
            }
            inScroll = false;
            /*setTimeout(() => {
                inScroll = false;
            }, 1000)*/
        }
    }

    window.addEventListener('wheel', e => {
        if(e.deltaY < 0) {
            slideSection('prev')
        } else if(e.deltaY > 0) {
            slideSection('next')
        }
    })
    window.addEventListener('keydown', e => {
        const tagName = e.target.tagName.toLowerCase();

        if(tagName !== 'input' && tagName !== 'textarea') {
            switch (e.keyCode) {
                case 38: //prev
                    slideSection('prev')
                    break
                case 40: //next
                    slideSection('next')
                    break
            }
        }
    })

    $('[data-scroll-to]').click(e => {
        const $this = $(e.currentTarget);
        if(!$this.hasClass('form__link')) {
            e.preventDefault();

            const target = $this.attr('data-scroll-to');
            const reqSection = $(`[data-section-id=${target}]`);

            slideSection(reqSection.index(), isIndex = true);
        }
    })

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

    document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();

        const form = $(e.currentTarget);
        const name = form.find('[name="name"]');
        const phone = form.find('[name="phone"]');
        const comment = form.find('[name="comment"]');
        const to = form.find('[name="to"]');
        const modal = $('#modal');
        const modalContent = modal.find('.modal__content');

        modal.removeClass('error-modal');

        if(validateFields(form, [name, phone, comment, to])) {
            const request = $.ajax({
                url: 'https://webdev-api.loftschool.com/sendmail',
                method: 'post',
                data: {
                    name: name.val(),
                    phone: phone.val(),
                    comment: comment.val(),
                    to: to.val()
                }
            })

            request.done(data => {
                modalContent.text = data.message;
                form[0].reset();
            });
            request.fail(error => {
                modalContent.text = error.responseJSON.message;
                modal.addClass('error-modal');
            });
            request.always(() => {
                $.fancybox.open({
                    'src': '#modal',
                    'type': 'inline',
                })
            });
        }
    })
    document.querySelector('.form-close-btn').addEventListener('click', (e) => {
        e.preventDefault();

        $.fancybox.close();
    })
});