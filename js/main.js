document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;
    const menu = document.documentElement;
    if (targetItem.closest('.icon-menu')) {
        menu.classList.toggle('menu-open');
        if (menu.classList.contains('menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}