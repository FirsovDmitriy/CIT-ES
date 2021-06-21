require ("swiper/swiper-bundle.css")

import Swiper from 'swiper'

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination])


new Swiper('.main-slider__wrapper', {
  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__next',
    prevEl: '.main-slider__prev',
  }
})

new Swiper('.product-slider__wrapper', {
    slidesPerView: 3.4,

    spaceBetween: 80
})