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

    document.querySelector('.form').addEventListener('submit', (e) => {
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