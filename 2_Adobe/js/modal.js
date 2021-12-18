const changeRegionButton = document.querySelector('.button--region');
const dimFooter = document.querySelector('.dim--footer');
const closeButton = document.querySelector('.button--close');

changeRegionButton.addEventListener('click', function() {
    dimFooter.classList.add('dim--footer--open');
});

dimFooter.addEventListener('click', function(event) {
    if (event.target.classList.contains('dim--footer')) {
        dimFooter.classList.remove('dim--footer--open');
    }
});
closeButton.addEventListener('click', function() {
    dimFooter.classList.remove('dim--footer--open');
});