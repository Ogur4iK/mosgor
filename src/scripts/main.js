import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

window.onload = function () {
    const swiperServices = new Swiper('.services-slider', {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperLicenses = new Swiper('.licenses-slider', {
        slidesPerView: 5,
        spaceBetween: 35,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    let openBtns = document.querySelectorAll('#open-menu-services');
    let closeBtns = document.querySelectorAll('#close-service-menu');
    let menu = document.querySelector('.services-menu');
    let body = document.querySelector('body');
    openBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            menuOpen();
            history.pushState(null, document.title, window.location.pathname + '#');
        });
    });

    function menuOpen() {
        menu.classList.add('open');
        body.classList.add('no-scroll');
        body.style.paddingRight = getScrollWidth() + 'px';
        menu.style.paddingLeft = '';
    }
    function menuClose() {
        menu.classList.remove('open');
        body.classList.remove('no-scroll');
        body.style.paddingRight = '';
        menu.style.paddingLeft = getScrollWidth() + 'px';
    }
    function getScrollWidth() {
        let div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            menuClose();
            history.pushState('', document.title, window.location.pathname);
        });
    });

    window.addEventListener("hashchange", menuClose);
}