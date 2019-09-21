// basket-modal
// ----------------------------------------------------------------------

'use strict';

const cardLink = document.querySelector('.card__link');
const basketModal = document.querySelector('.basket-modal');
const overlayModal = document.querySelector('.overlay-modal');

// basket modal
cardLink.addEventListener('click', function (event) {
  event.preventDefault();
  basketModal.classList.add('basket-modal--opened');
  overlayModal.classList.add('overlay-modal--opened');
});

// overlay modal
overlayModal.addEventListener('click', function () {
  basketModal.classList.remove('basket-modal--opened');
  overlayModal.classList.remove('overlay-modal--opened');
});
