'use strict';

window.isCreateClickFunc = (function () {
  var numberOfPin = 8;
  var allPin = document.querySelector('.tokyo__pin-map');
  // создание меток и генерация меток
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.isCreateDataFunc.length; i++) {
    var newPin = document.createElement('div');
    newPin.className = 'pin';
    newPin.innerHTML = '<img  src="' + window.isCreateDataFunc[i].author.avatar + '"  class="rounded" width="40" height="40" tabindex="0">';
    newPin.style = 'left: ' + window.isCreateDataFunc[i].location.x + 'px; top: ' + window.isCreateDataFunc[i].location.y + 'px';
    fragment.appendChild(newPin);
  }
  allPin.appendChild(fragment);
  var pinOpen = document.querySelectorAll('.pin');
  var pinSelected = document.querySelector('.tokyo__pin-map');
  var dialogCard = document.querySelector('.dialog');
  var pinClose = dialogCard.querySelector('.dialog__close');
  // сделали активной первую метку, которая выбрана по умолчанию
  pinSelected.children[1].classList.add('pin--active');
  var chosenPin;
  var delPinActiveFunc = function () {
    for (var j = 0; j < pinOpen.length; j++) {
      if (pinOpen[j].classList.contains('pin--active')) {
        pinOpen[j].classList.remove('pin--active');
      }
    }
  };
  // функция присвоения номера i (номер объекта в нашем массиве из 8-и объектов) при нажатии на соответствующую метку
  var pinNumberChoce = function () {
    for (var j = 0; j < numberOfPin + 1; j++) {
      if (pinOpen[j].classList.contains('pin--active')) {
        chosenPin = j - 1;
      }
    }
  };
  // функция закрытия при нажатии на крестик
  var closeDialogFunc = function () {
    dialogCard.style.display = 'none';
    delPinActiveFunc();
  };
  // удаляем сгенерированные удобства (вайфай, кондиционер...)от предыдущей метки
  var delSpanFunc = function () {
    var delSpan = document.querySelector('.lodge__features');
    while (delSpan.firstChild) {
      delSpan.removeChild(delSpan.firstChild);
    }
  };
  // функция закрытия окна при нажатии Esc
  var onEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closeDialogFunc();
    }
  };
  // функция отлова событий с помощью делегирования
  var actionOnClicOrEter = function (evt) {
    var event = evt || window.event;
    var target = event.target || event.srcElement;
    if (target.closest('img')) {
      target.parentNode.classList.toggle('pin--active');
      pinNumberChoce();
      window.isImageCardFunc(chosenPin);
    }
    if (target.classList.contains('pin')) {
      target.classList.toggle('pin--active');
      pinNumberChoce();
      window.isImageCardFunc(chosenPin);
    }
  };
  var clickOrEnterOnPinFunc = function (evt) {
    dialogCard.style.display = 'block';
    delSpanFunc();
    delPinActiveFunc();
    actionOnClicOrEter(evt);
  };
  // функция закрытия окна при нажатии Esc
  var onEnterPress = function (evt) {
    if (evt.keyCode === 13) {
      clickOrEnterOnPinFunc();
    }
  };
  return {
    clickOrEnterOnPinFunc: clickOrEnterOnPinFunc,
    onEnterPress: onEnterPress,
    closeDialogFunc: closeDialogFunc,
    onEscPress: onEscPress
  }
})();
