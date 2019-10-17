const photoList = document.querySelector('.photo-slider__list');
const carteList = document.querySelector('.carte-slider__list');
const modalImg = document.querySelector('.modal-img');
const closeModalButton = modalImg.querySelector('.modal-img__button-close');

const ESC_KEYCODE = 27;

const checkModal = () => {
  return statusModal = document.querySelector('.modal-img--hide') ? false : true;
};

const openModal = (target) => {
  const newSource = target.src;
  const modalBigImage = modalImg.querySelector('img');
  modalBigImage.src = newSource;
  modalImg.classList.remove('modal-img--hide');
};

photoList.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(evt.target);
})

closeModalButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalImg.classList.add('modal-img--hide');
})

carteList.addEventListener('click', (evt) => {
  evt.preventDefault();
  openModal(evt.target);
})

document.addEventListener('keydown', (evt) => {
  if (checkModal()) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModalButton.click();
    }
  }
})
