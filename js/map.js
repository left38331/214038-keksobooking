'use strict';

(function () {
  var pinSelected = document.querySelector('.tokyo__pin-map');
  var dialogCard = document.querySelector('.dialog');
  var pinClose = dialogCard.querySelector('.dialog__close');
  pinSelected.addEventListener('click', window.isCreateClickFunc.clickOrEnterOnPinFunc); // открыть окно кликом
  pinSelected.addEventListener('keydown', window.isCreateClickFunc.onEnterPress);        // открыть окно при нажатии Enter
  pinClose.addEventListener('click', window.isCreateClickFunc.closeDialogFunc);          // закрыть окно кликом
  document.addEventListener('keydown', window.isCreateClickFunc.onEscPress);             // закрыть окно при нажатии Esc
  // зменение адреса при перемещении метки на карте
  var adressForm = document.getElementById('address');
  var ourPin = document.querySelector('.pin__main');
  ourPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      var mainPinWidth = 74;
      var mainPinHeight = 94;
      var y = ourPin.offsetTop - shift.y;
      var x = ourPin.offsetLeft - shift.x;
      var coordXMainPin = x + mainPinWidth / 2;
      var coordYMainPin = y + mainPinHeight;
      var maxMapX = 1200;
      var maxMapY = 665;
      if (coordXMainPin > 0 && coordXMainPin < maxMapX) {
        ourPin.style.left = x + 'px';
      }
      if (coordYMainPin > 0 && coordYMainPin < maxMapY) {
        ourPin.style.top = y + 'px';
      }
      window.formFunc.setAddress(coordXMainPin, coordYMainPin);
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
