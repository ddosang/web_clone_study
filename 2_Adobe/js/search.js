// const menuItems = document.querySelectorAll('.menu__item');
const buttonWrap = header.querySelector('.button-wrap');
const searchButton = buttonWrap.querySelector('.button--search');
const dimSearch = buttonWrap.querySelector('.dim--search');
const searchButtonClosed = buttonWrap.querySelector('.button--search--close');

function openSearch() {
    dimSearch.classList.add('dim--open');
    searchButton.classList.add('button--close');
    searchButtonClosed.classList.add('button--open');
}
function closeSearch() {
    dimSearch.classList = "dim--search";
    searchButton.classList = "button--search";
    searchButtonClosed.classList = "button--search--close";
}
function closeMenuInMediaQuery() {
    if (dimMenu.classList.contains('dim--menu--open')) { 
        dimMenu.classList.remove('dim--menu--open');
    }
}


searchButton.addEventListener('click', function() {
    menuItems.forEach((item) => {
        if (item.classList.contains(MENU_OPEN)) {
            item.classList.remove(MENU_OPEN);
        }
    });
    openSearch();
});

searchButtonClosed.addEventListener('click', function() {
    closeSearch();
    // 작은 화면에서 메뉴 열고 큰 화면으로 갔다가,
    // 큰 화면에서 검색만 열고 닫으면 검색창은 닫히고 메뉴만 남아서
    // 검색을 누를 때 메뉴도 같이 없어지게 해주었다.
    closeMenuInMediaQuery();
});

dimSearch.addEventListener('click', function(event) {
    if (event.target.classList.contains('dim--search')) {
        closeSearch();
        closeMenuInMediaQuery();
    }
});

window.addEventListener('scroll', function() {
    closeSearch();
});

