// const menuItems = document.querySelectorAll('.menu__item');
const searchButton = document.querySelector('.button--search');
const dimSearch = document.querySelector('.dim--search');
const searchButtonClosed = document.querySelector('.button--search--close');

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
});

dimSearch.addEventListener('click', function(event) {
    if (event.target.classList.contains('dim--search')) {
        closeSearch();
    }
});

window.addEventListener('scroll', function() {
    closeSearch();
});

