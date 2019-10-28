const hamButton = document.querySelector('.page-header__ham-button');
const mainNavigation = document.querySelector('.main-navigation');

hamButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainNavigation.classList.toggle('main-navigation--hide');
})

document.addEventListener("DOMContentLoaded", function(event) {
  if (window.screen.width <= 400) {
    mainNavigation.classList.toggle('main-navigation--hide');
  }
});
