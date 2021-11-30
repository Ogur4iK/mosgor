import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

function createTabs(tabsSelector, contentsSelector) {
    const tabs = document.querySelectorAll(tabsSelector);
    const contents = document.querySelectorAll(contentsSelector);
    tabs[0].classList.add('active');
    contents[0].classList.add('active');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabTarget = this.getAttribute('data-tab');
            const content = document.querySelector(tabTarget);
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            contents.forEach(content => {
                content.classList.remove('active');
            });
            content.classList.add('active');
            this.classList.add('active');
        });
    });
}

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


    const openBtns = document.querySelectorAll('#open-menu-services');
    const closeBtns = document.querySelectorAll('#close-service-menu');
    const menu = document.querySelector('.services-menu');
    const body = document.querySelector('body');
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
        const div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
    openBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            menuOpen();
            history.pushState(null, document.title, window.location.pathname + '#');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            menuClose();
            history.pushState('', document.title, window.location.pathname);
        });
    });

    window.addEventListener("hashchange", menuClose);

    createTabs('.tab-top-btn', '.tab-top-content');
    createTabs('.tab-bottom-btn', '.tab-bottom-content');
    createTabs('.result-tab', '.result-tab-content');
}