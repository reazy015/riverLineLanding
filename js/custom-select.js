'use strict';

window.customSelect = ( function() {
  var startTimeSelect = document.querySelector('.begin-time');
  var startTimeVariantList = document.querySelector('.begin-time-variants-list');

  startTimeSelect.addEventListener('click', function() {
    startTimeVariantList.classList.toggle('begin-time-variants-list--open');
  })
})();