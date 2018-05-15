'use strict';

window.orderPopup = (function (){
  var popupModal = document.querySelector('.popup-wrapper ');
  var popupCloseModalBtn = popupModal.querySelector('.popup-module__close');


  popupCloseModalBtn.addEventListener('click', function(evt) {
    evt.stopPropagation();
    popupModal.classList.remove('popup-wrapper--open');
    document.body.classList.remove('no-scroll');
    document.addEventListener('click', closeOnOuterClick);
  });
})();