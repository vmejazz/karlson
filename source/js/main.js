/**********************************************
 *  Инициализация фото-слайдера
 ********************************************/

var mySwiper = new Swiper ('.photo-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.photo-slider__next',
    prevEl: '.photo-slider__prev',
  },

  // fadeEffect: {
  //   crossFade: true
  // },

  slidesPerView: 3,
  // spaceBetween: 10,

  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    720: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
})

/**********************************************
 *  Инициализация меню-слайдера
 ********************************************/

var mySwiper = new Swiper ('.carte-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.carte-slider__next',
    prevEl: '.carte-slider__prev',
  },

  slidesPerView: 3,
  // spaceBetween: 10,

  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    720: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
})
