'use strict';

window.sliderPopup = (function (){
  var sliderPopupWrapper = document.querySelector('.slider-popup-wrapper');
  var sliderPopupSlide = sliderPopupWrapper.querySelector('.slider-popup-slide');
  var currentImgUrl = document.querySelector('.order-panel-slider__item--active').dataset.img;
  var zoomImg = document.querySelector('.img-zoom');

  function closeOnOuterClick(evt) {
    var target = evt.target;
    if (!target.classList.contains('slider-popup-slider') && sliderPopupWrapper.classList.contains('slider-popup-wrapper--active')) {
      sliderPopupWrapper.classList.remove('slider-popup-wrapper--active');
      document.removeEventListener('click', closeOnOuterClick);
      console.log(true);

    }
  }

  zoomImg.addEventListener('click', function (evt) {
    evt.stopPropagation();
    sliderPopupWrapper.classList.toggle('slider-popup-wrapper--active');
    sliderPopupSlide.style.backgroundImage = currentImgUrl;
    document.addEventListener('click', closeOnOuterClick);
  })

})();