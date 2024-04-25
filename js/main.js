document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.icon-menu');
    const menu = document.querySelector('.header__menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('menu-open');
        if (menu.classList.contains('menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    const menuItems = document.querySelectorAll('.menu__link');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.remove('menu-open');
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.header__menu') && !e.target.closest('.icon-menu')) {
            menu.classList.remove('menu-open');
            document.body.style.overflow = 'auto';
        }
    });
});
