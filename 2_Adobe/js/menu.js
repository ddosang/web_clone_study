const body = document.body;
const header = document.querySelector('.header');
const menuItems = document.querySelectorAll('.menu__item');
const menuButtons = document.querySelectorAll('.menu__title');
const dims = document.querySelectorAll('.dim');


const MENU_OPEN = 'menu__item--open';
const MENU_CLOSE = 'menu__item';
const DIM_OPEN = 'dim--open';

const SCROLL_UP = "scroll-up";
const SCROLL_DOWN = "scroll-down";


let lastScroll = 0;

function headerScrolled() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll ) {
        // down
        header.classList.add(SCROLL_DOWN);
    } else if (
        currentScroll < lastScroll 
    ) {
        // up
        header.classList.remove(SCROLL_DOWN);
    }
    lastScroll = currentScroll;
}

menuItems.forEach((item, index) => item.addEventListener('click', function () {
    closeSearch();

    menuItems.forEach((item, index2) => {
        if (index == index2) {
            item.classList.toggle(MENU_OPEN);
        }
        else if (item.classList.contains(MENU_OPEN)) {
            item.classList = MENU_CLOSE;
        }
    });

}));


dims.forEach(dim => dim.addEventListener('click', function (event) {
    if (event.target.classList.contains(DIM_OPEN)) {
        dim.classList.remove(DIM_OPEN);
    }
}));

window.addEventListener('scroll', function () {
    menuItems.forEach(menuItem => menuItem.classList = MENU_CLOSE);
    const currentScroll = window.pageYOffset;
    headerScrolled();
});