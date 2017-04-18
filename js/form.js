'use strict';

window.formFunc = (function () {
  var advertTitle = document.getElementById('title');
  advertTitle.required = true;
  var priceTitle = document.getElementById('price');
  priceTitle.required = true;
  priceTitle.min = 1000;
  priceTitle.max = 1000000;
  var timeInChoise = document.getElementById('time');
  var timeOutChoise = document.getElementById('timeout');
  var chosenTypeOfHouse = document.getElementById('type');
  var chosenPriceForNight = document.getElementById('price');
  var chosenRoomNumber = document.getElementById('room_number');
  var chosenNumberGuests = document.getElementById('capacity');
  // зависимость времени убытия от выбора времени прибытия
  timeInChoise.addEventListener('change', function () {
    if (timeInChoise.selectedIndex === 1) {
      timeOutChoise.selectedIndex = 1;
    } else if (timeInChoise.selectedIndex === 2) {
      timeOutChoise.selectedIndex = 2;
    } else {
      timeOutChoise.selectedIndex = 0;
    }
  });
  // зависимость выбора типа жилья на минимаьную цену
  chosenTypeOfHouse.addEventListener('change', function () {
    if (chosenTypeOfHouse.selectedIndex === 1) {
      chosenPriceForNight.min = 0;
    } else if (chosenTypeOfHouse.selectedIndex === 2) {
      chosenPriceForNight.min = 10000;
    } else {
      chosenPriceForNight.min = 1000;
    }
  });
  // зависимость выбора количества комнат на количество гостей
  chosenRoomNumber.addEventListener('change', function () {
    if (chosenRoomNumber.selectedIndex === 0) {
      chosenNumberGuests.selectedIndex = 1;
    } else if (timeInChoise.selectedIndex === 1) {
      chosenNumberGuests.selectedIndex = 0;
    } else {
      chosenNumberGuests.selectedIndex = 0;
    }
  });
  // Адрес
  function setAddress(x, y) {
    var address = document.getElementById('address');
    address.value = 'x: ' + x + ', y: ' + y;
  }
  return {
    setAddress: setAddress
  };
})();
