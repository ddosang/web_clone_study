const menuItems = document.querySelectorAll('.menu__item');
const menuButtons = document.querySelectorAll('.menu__title');
const dims = document.querySelectorAll('.dim');


menuItems.forEach((item, index) => item.addEventListener('click', function() {
    closeSearch();

    menuItems.forEach((item, index2) => {
        if (index == index2) {
            item.classList.toggle('menu__item--open');
        }
        else if (item.classList.contains('menu__item--open')) {
            item.classList = 'menu__item';
        }
    });
    
}));


dims.forEach(dim => dim.addEventListener('click', function(event) {
    if (event.target.classList.contains('dim--open')) {
        dim.classList.remove('dim--open');
    }
}));

window.addEventListener('scroll', function() {
    menuItems.forEach(menuItem => menuItem.classList = "menu__item");
});