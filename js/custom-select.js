'use strict';

window.customSelect = ( function() {
  var startTimeSelect = document.querySelectorAll('.begin-time');
  var startTimeVariantList = document.querySelectorAll('.begin-time-variants-list');

  startTimeSelect[0].addEventListener('click', function() {
    startTimeVariantList[0].classList.toggle('begin-time-variants-list--open');
  });

  startTimeSelect[1].addEventListener('click', function() {
    startTimeVariantList[1].classList.toggle('begin-time-variants-list--open');
  });
})();