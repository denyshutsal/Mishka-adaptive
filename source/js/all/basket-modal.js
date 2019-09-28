// basket-modal
// ----------------------------------------------------------------------

'use strict';

const cardLink = document.querySelector('.card__link');
const basketModal = document.querySelector('.basket-modal');
const overlayModal = document.querySelector('.overlay-modal');

// opening a modal basket window
cardLink.addEventListener('click', function (event) {
  event.preventDefault();
  basketModal.classList.add('basket-modal--opened');
  overlayModal.classList.add('overlay-modal--opened');
});

// closing the modal basket window with the Esc key
window.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    basketModalHandler()
  }
});

// сlosing the modal basket window by clicking on the overlay
overlayModal.addEventListener('click', function () {
  basketModalHandler()
});

function basketModalHandler() {
  basketModal.classList.remove('basket-modal--opened');
  overlayModal.classList.remove('overlay-modal--opened');
}
