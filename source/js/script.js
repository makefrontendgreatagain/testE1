var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button--right',
        prevEl: '.swiper-button--left',
    }
});

var buttons = document.querySelectorAll('.button--tabs');

let buttonAllClicled = document.querySelector('.button--all');

buttonAllClicled.addEventListener('click', function (event) {
    event.preventDefault();
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button--selected');
    }
    buttonAllClicled.classList.add('button--selected')
});

let buttonNewClicked = document.querySelector('.button--new');

buttonNewClicked.addEventListener('click', function (event) {
    event.preventDefault();
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button--selected');
    }
    buttonNewClicked.classList.add('button--selected')
});

let buttonSalesClicled = document.querySelector('.button--sales');

buttonSalesClicled.addEventListener('click', function (event) {
    event.preventDefault();
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button--selected');
    }
    buttonSalesClicled.classList.add('button--selected')
});

let buttonHitsClicled = document.querySelector('.button--hits');

buttonHitsClicled.addEventListener('click', function (event) {
    event.preventDefault();
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button--selected');
    }
    buttonHitsClicled.classList.add('button--selected')
});
