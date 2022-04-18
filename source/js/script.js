let navMain = document.querySelector('.lead-navigation');
let navToggle = document.querySelector('.lead-navigation__toggle');

if (navMain.classList.contains('lead-navigation--nojs')) {
    navMain.classList.remove('lead-navigation--nojs');
}

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('lead-navigation--closed')) {
        navMain.classList.remove('lead-navigation--closed');
        navMain.classList.add('lead-navigation--opened');
    } else {
        navMain.classList.add('lead-navigation--closed');
        navMain.classList.remove('lead-navigation--opened');
    }
});
