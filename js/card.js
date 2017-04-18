'use strict';

window.isImageCardFunc = (function () {
  var numberOfPin = 8;
  // пустой массив для записи туда координат Х
  var copyCoordinateX = [];
  // пустой массив для записи туда координат Y
  var copyCoordinateY = [];
  for (var i = 0; i < numberOfPin; i++) {
    // запись в массив Х
    copyCoordinateY[i] = window.isCreateDataFunc[i].location.y;
    // запись в массив У
    copyCoordinateX[i] = window.isCreateDataFunc[i].location.x;
  }
  // начинаем клонировать элемент (левый диалог и описание метки карты)
  var listElement = document.querySelector('.dialog');
  var replicedElement = document.querySelector('.dialog__panel');
  var listTemplate = document.querySelector('#lodge-template').content;
  var dialogElement = listTemplate.cloneNode(true);
  // замена блока другим
  listElement.replaceChild(dialogElement, replicedElement);
  // заполнение диалога данными при нажатии на Pin
  var showPopupFunc = function (pin) {
    listElement.querySelector('.lodge__title').textContent = window.isCreateDataFunc[pin].offer.title;
    listElement.querySelector('.lodge__address').textContent = ' ' + copyCoordinateX[pin] + ' , ' + copyCoordinateY[pin] + '';
    listElement.querySelector('.lodge__price').innerHTML = window.isCreateDataFunc[pin].offer.price + ' &#x20bd;/ночь';
    var flatFunc = function () {
      var newFlat;
      if (window.isCreateDataFunc[pin].offer.type === 'flat') {
        newFlat = 'Квартира';
      } else if (window.isCreateDataFunc[pin].offer.type === 'bungalo') {
        newFlat = 'Бунгало';
      } else {
        newFlat = 'Дом';
      }
      return newFlat;
    };
    // вызов функции выбора апартаментов
    listElement.querySelector('.lodge__type').textContent = flatFunc();
    listElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + window.isCreateDataFunc[pin].offer.guests + ' гостей в ' + window.isCreateDataFunc[pin].offer.rooms + ' в комнатах';
    listElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + window.isCreateDataFunc[pin].offer.checkin + ' , выезд до ' + window.isCreateDataFunc[pin].offer.checkout + '';
    var allSpan = document.querySelector('.lodge__features');
    var fragmentSpan = document.createDocumentFragment();
    for (var j = 0; j < window.isCreateDataFunc[pin].offer.features.length; j++) {
      var newSpan = document.createElement('span');
      newSpan.className = 'feature__image feature__image--' + window.isCreateDataFunc[pin].offer.features[j] + '';
      fragmentSpan.appendChild(newSpan);
    }
    allSpan.appendChild(fragmentSpan);
    listElement.querySelector('.lodge__description').innerHTML = window.isCreateDataFunc[pin].offer.description;
    var avatarTitle = document.querySelector('.dialog__title');
    // меняем аватарку
    avatarTitle.children[0].setAttribute('src', '' + window.isCreateDataFunc[pin].author.avatar + '');
  };
  // по умолчанию выводим dialog  с данными от сгенерированной первой метки
  showPopupFunc(0);
  return showPopupFunc;
})();
