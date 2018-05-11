'use strict';

window.weekTableSwithc = (function () {
  var mainTable = document.querySelector('.schedule-table');
  var forwardBtn = document.querySelector('.schedule-panel-date__btn--right');
  var backwardBtn = document.querySelector('.schedule-panel-date__btn--left');
  var dateInfoBlock = document.querySelector('.schedule-panel-date__info');
  var datesTableHeaders = document.querySelectorAll('.order-date');
  var shipTableToggle = document.querySelectorAll('.ship-choice-input');
  var datesTableHeadersCounter = datesTableHeaders.length;
  var monthDictionary = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август', 'Сентябрь','Октябрь', 'Ноябрь'];
  var startMonday = new Date(2018, 4, 21);
  var startSunday = new Date(2018, 4, 27);
  var INITIAL_DATE = new Date(2018, 4, 21);
  var tempDate = new Date(2018, 4, 21);

  Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
  }

  function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate)
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  function addNextWeek() {
    startMonday.setDate(startMonday.getDate() + 7);
    var monday = startMonday.toLocaleString();
    startSunday.setDate(startSunday.getDate() + 7);
    var sunday = startSunday.toLocaleString();


    return {
      monday: monday.split(',')[0].slice(0,5),
      sunday: sunday.split(',')[0].slice(0,5)
    }
  }

  function weekBackwards() {
    startMonday.setDate(startMonday.getDate() - 7);
    var monday = startMonday.toLocaleString();
    startSunday.setDate(startSunday.getDate() - 7);
    var sunday = startSunday.toLocaleString();


    return {
      monday: monday.split(',')[0].slice(0,5),
      sunday: sunday.split(',')[0].slice(0,5)
    }
  }

  function updateTableDateHeader() {
    var selectedWeekDates = getDates(startMonday, startSunday);
    for (var i = 0; i < datesTableHeadersCounter; i++) {
      datesTableHeaders[i].textContent = selectedWeekDates[i].toLocaleString().split(',')[0].slice(0,5)
      datesTableHeaders[i].offsetParent.dataset.date = selectedWeekDates[i];
    }
  }

  forwardBtn.addEventListener('click', function() {
    var dateForward = addNextWeek();
    dateInfoBlock.textContent = monthDictionary[startMonday.getMonth()] + ' ' + dateForward.monday + ' - ' + dateForward.sunday;
    updateTableDateHeader();
  });

  backwardBtn.addEventListener('click', function() {
    if (startMonday <= INITIAL_DATE) {
      return false;
    } else {
      var dateBackward = weekBackwards(tempDate);
      dateInfoBlock.textContent = monthDictionary[startMonday.getMonth()] + ' ' + dateBackward.monday + ' - ' + dateBackward.sunday;
      updateTableDateHeader();
    }
  });

  shipTableToggle[1].addEventListener('change', function() {
      mainTable.classList.add('schedule-table--ss');
  });

  shipTableToggle[0].addEventListener('change', function() {
    mainTable.classList.remove('schedule-table--ss');
  });

  mainTable.addEventListener('click', function(evt) {
    var currentDate = new Date();
    var target = evt.target;
    var index = Array.prototype.indexOf.call(target.parentNode.children, target)
    var corresponding_th = document.querySelector('.schedule-table th:nth-child(' + (index+1) + ')');
    var columnDate = corresponding_th.dataset.date;

    if (currentDate < columnDate) {
      console.log(true);
    } else {
      console.log(false);
    }
  })

})();