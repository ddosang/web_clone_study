const changeRegionButton = document.querySelector('.button--region');
const dimFooter = document.querySelector('.dim--footer');
const closeButton = document.querySelector('.button--close');

const DIM_FOOTER = 'dim--footer';
const DIM_FOOTER_OPEN = 'dim--footer--open';

changeRegionButton.addEventListener('click', function () {
    document.body.classList.add('stop-scrolling');
    dimFooter.classList.add(DIM_FOOTER_OPEN);
});

dimFooter.addEventListener('click', function (event) {
    if (event.target.classList.contains(DIM_FOOTER)) {
        document.body.classList.remove('stop-scrolling');
        dimFooter.classList.remove(DIM_FOOTER_OPEN);
    }
});
closeButton.addEventListener('click', function () {
    document.body.classList.remove('stop-scrolling');
    dimFooter.classList.remove(DIM_FOOTER_OPEN);
});

