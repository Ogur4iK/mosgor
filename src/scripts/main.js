import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

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