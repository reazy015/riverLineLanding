'use strict';

window.orderDropdown = (function (){
  var dropdownBtn = document.querySelector('.current-button-mobile');
  var submenu = document.querySelector('.buttons-wrapper-helper');

  dropdownBtn.addEventListener('click', function () {
    submenu.classList.toggle('buttons-wrapper-helper--active');
  })

})();