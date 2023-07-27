const initSmoothNavigation = (elem) => {
  const blockId = elem.getAttribute('href');
  document.querySelector('' + blockId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const headerButton = document.querySelector('.main-header__content a');
const buttonAbonement = document.querySelectorAll('.season-tickets__button');

headerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  initSmoothNavigation(headerButton);
  setTimeout(() => {
    buttonAbonement[0].focus();
  }, 700);
});

const navigationItem = document.querySelectorAll('.main-footer__list a');

navigationItem.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    initSmoothNavigation(item);
  });
});

const footerLogo = document.querySelector('.main-footer__logo a');

footerLogo.addEventListener('click', (evt) => {
  evt.preventDefault(evt);
  initSmoothNavigation(footerLogo);
});

export { initSmoothNavigation }
