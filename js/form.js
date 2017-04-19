'use strict';

window.formFunc = (function () {
  var advertTitle = document.getElementById('title');
  advertTitle.required = true;
  var priceTitle = document.getElementById('price');
  priceTitle.required = true;
  priceTitle.min = 1000;
  priceTitle.max = 1000000;
  var types = ['flat', 'house', 'bungalo'];
  var times = ['12', '13', '14'];
  var roomNumbers = ['1', '2', '100'];
  var guestCapasity = ['0', '3', '3'];
  var housePrices = ['1000', '10000', '0'];
  // При изменении времени заезда меняется время выезда
  var selectCheckin = document.querySelector('#time');
  var selectCheckout = document.querySelector('#timeout');
  var housingType = document.querySelector('#type');
  var housingPrice = document.querySelector('#price');
  var roomNumber = document.querySelector('#room_number');
  var capacity = document.querySelector('#capacity');
  var syncValues = function (element, value) {
    element.value = value;
  };
  var syncValueWithMin = function (element, value) {
    element.min = value;
  };
  window.synchronizeFields(selectCheckin, times, selectCheckout, times, syncValues);
  window.synchronizeFields(selectCheckout, times, selectCheckin, times, syncValues);
  window.synchronizeFields(roomNumber, roomNumbers, capacity, guestCapasity, syncValues);
  window.synchronizeFields(housingType, types, housingPrice, housePrices, syncValueWithMin);
  // Адрес
  function setAddress(x, y) {
    var address = document.getElementById('address');
    address.value = 'x: ' + x + ', y: ' + y;
  }
  return {
    setAddress: setAddress
  };
})();
