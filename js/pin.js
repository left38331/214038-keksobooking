'use strict';

window.isCreateClickFunc = (function () {
  
  var allPin = document.querySelector('.tokyo__pin-map');
  // функция создания метки
  var patternPin = function (pin) {
    var newPin = document.createElement('div');
    newPin.className = 'pin';
    newPin.innerHTML = '<img  src="' + pin.author.avatar + '"  class="rounded" width="40" height="40" tabindex="0">';
    newPin.style = 'left: ' + pin.location.x + 'px; top: ' + pin.location.y + 'px';
    return newPin;
  };
  // функция создания меток, с данными полученными от сервера из файла load.js
  var successHandler = function (pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 8; i++) {
      fragment.appendChild(patternPin(pins[i]));
    }
    allPin.appendChild(fragment);
  };
  // функция добавлиния и удаления класса pin--active при нажатии на метку
  var addOrDelPinActive = function (data) {
    // показываем по умолчанию первую метку
    window.isImageCardFunc.successHandlerDialog(data, 0);
    var pinOpen = document.querySelectorAll('.pin');
    var pinSelected = document.querySelector('.tokyo__pin-map');
    var dialogCard = document.querySelector('.dialog');
    var pinClose = dialogCard.querySelector('.dialog__close');
    // сделали активной первую метку, которая выбрана по умолчанию
    pinSelected.children[1].classList.add('pin--active');
    var chosenPin;
    // функция удаления класса pin--active, если такой есть
    var delPinActiveFunc = function () {
      for (var j = 0; j < pinOpen.length; j++) {
        if (pinOpen[j].classList.contains('pin--active')) {
          pinOpen[j].classList.remove('pin--active');
        }
      }
    };
    // функция присвоения номера i (номер объекта в нашем массиве из 8-и объектов) при нажатии на соответствующую метку
    var pinNumberChoce = function () {
      for (var j = 0; j < 9; j++) {
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
    // удаляем  удобства (вайфай, кондиционер...) или фотки от предыдущей метки
    var delSpan = document.querySelector('.lodge__features');
    var delPhoto = document.querySelector('.lodge__photos');
    var delSpanFunc = function (spanOrPhoto) {
      while (spanOrPhoto.firstChild) {
        spanOrPhoto.removeChild(spanOrPhoto.firstChild);
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
      if (target.closest('img') && !target.parentNode.classList.contains('pin__main')) {
        target.parentNode.classList.toggle('pin--active');
        delSpanFunc(delSpan);
        delSpanFunc(delPhoto);
        pinNumberChoce();
        window.isImageCardFunc.successHandlerDialog(data, chosenPin);
      } else if (target.classList.contains('pin') && !target.classList.contains('pin__main')) {
        delSpanFunc(delSpan);
        delSpanFunc(delPhoto);
        target.classList.toggle('pin--active');
        pinNumberChoce();
        window.isImageCardFunc.successHandlerDialog(data, chosenPin);
      }
    };
    var clickOrEnterOnPinFunc = function (evt) {
      dialogCard.style.display = 'block';
      delPinActiveFunc();
      actionOnClicOrEter(evt);
    };
    // функция закрытия окна при нажатии Esc
    var onEnterPress = function (evt) {
      if (evt.keyCode === 13) {
        clickOrEnterOnPinFunc();
      }
    };
    pinSelected.addEventListener('click', clickOrEnterOnPinFunc); // открыть окно кликом
    pinSelected.addEventListener('keydown', onEnterPress);        // открыть окно при нажатии Enter
    pinClose.addEventListener('click', closeDialogFunc);          // закрыть окно кликом
    document.addEventListener('keydown', onEscPress);             // закрыть окно при нажатии Esc
  };
  // если ошибка с получением данных с сервера
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: green;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.load(successHandler, addOrDelPinActive, errorHandler);
})();
