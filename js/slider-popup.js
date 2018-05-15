'use strict';

window.sliderPopup = (function (){
  var sliderPopupWrapper = document.querySelector('.slider-popup-wrapper');
  var sliderPopupSlide = sliderPopupWrapper.querySelector('.slider-popup-slide');
  var zoomImg = document.querySelector('.img-zoom');

  function closeOnOuterClick(evt) {
    var target = evt.target;
    if (!target.classList.contains('slider-popup-slider') && sliderPopupWrapper.classList.contains('slider-popup-wrapper--active')) {
      sliderPopupWrapper.classList.remove('slider-popup-wrapper--active');
      document.removeEventListener('click', closeOnOuterClick);
      document.body.classList.remove('no-scroll');
    }
  }

  zoomImg.addEventListener('click', function (evt) {
    evt.stopPropagation();
    sliderPopupWrapper.classList.toggle('slider-popup-wrapper--active');
    sliderPopupSlide.style.backgroundImage = 'url(' + document.querySelector('.swiper-slide-active').dataset.imgurl + ')';
    document.addEventListener('click', closeOnOuterClick);
    document.body.classList.add('no-scroll');
  })

  document.addEventListener('keyup', function(evt) {
    if (evt.keyCode === 27) {
      sliderPopupWrapper.classList.remove('slider-popup-wrapper--active');
    }
  })

})();