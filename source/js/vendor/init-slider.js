const initCoachesSlider = () => {
  const coachesContainer = document.querySelector('.coaches__slider');
  const coachesControl = document.querySelector('.coaches__control');

  coachesControl.removeAttribute('data-nojs');

  const coachesSlider = new Swiper(coachesContainer, {

    autoHeight: true,

    loop: true,
    simulateTouch: true,

    breakpoints: {

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
  });

  return coachesSlider;
};

export { initCoachesSlider };
