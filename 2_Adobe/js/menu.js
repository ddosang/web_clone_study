const body = document.body;
const header = body.querySelector('.header');
const menuItems = header.querySelectorAll('.menu__item');
const dims = header.querySelectorAll('.dim');

const dimMenu = header.querySelector('.dim--menu');
const menu = dimMenu.querySelector('.menu');
const menuButton = header.querySelector('.button--menu');
const subMenuTitles = header.querySelectorAll('.sub-menu__category');

const footer = document.querySelector('footer');
const menuFooters = footer.querySelectorAll('.menu--footer');
const menuFooterTitles = footer.querySelectorAll('.menu--footer__title');

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

menuItems.forEach((item, index) => item.addEventListener('click', function (event) {
    if (window.innerWidth >= 900) {
        closeSearch();
    }

    menuItems.forEach((item, index2) => {
        // event.target 검사 안해도 미디어쿼리 1 2단계에서는 동작했는데
        // 3단계에서는 계속 꺼져서 보니까 이게 문제였음 와우...
        if (event.target.classList.contains('menu__title')) {
            if (index == index2) {
                item.classList.toggle(MENU_OPEN);
            }
            else if (item.classList.contains(MENU_OPEN)) {
                item.classList = MENU_CLOSE;
            }
        }
    });
}));

dims.forEach((dim, index) => dim.addEventListener('click', function(event){
    if (event.target.classList.contains('dim')) {
        menuItems.forEach((item) => {
            if (item.classList.contains(MENU_OPEN)) {
                item.classList = MENU_CLOSE;
            }
        })
        
    }
}));


window.addEventListener('scroll', function () {
    menuItems.forEach(menuItem => menuItem.classList = MENU_CLOSE);
    const currentScroll = window.pageYOffset;
    headerScrolled();
    // media query max-width 899
    dimMenu.classList = "dim--menu";
    subMenuTitles.forEach(title => title.classList = 'sub-menu__category');
});


// media query max-width 899
menuButton.addEventListener('click', function() {
    dimSearch.classList.toggle('dim--search--open');
    dimMenu.classList.toggle('dim--menu--open');
    menuButton.innerText = "menu";
    if (dimMenu.classList.contains('dim--menu--open')) {
        menuItems.forEach(item => item.classList = MENU_CLOSE);
        subMenuTitles.forEach(title => title.classList = 'sub-menu__category');
        menuButton.innerText = "close";
    }
});

subMenuTitles.forEach(title => title.addEventListener('click', function() {
    title.classList.toggle('sub-menu__category--open');
}));

menuFooterTitles.forEach((title, index) => title.addEventListener('click', function() {
    menuFooters[index].classList.toggle('menu--footer--open');
}));