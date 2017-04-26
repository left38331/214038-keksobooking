'use strict';

window.isImageCardFunc = (function () {
  var successHandlerDialog = function (data, chosenPin) {
    // начинаем клонировать элемент (левый диалог и описание метки карты)
  var listElement = document.querySelector('.dialog');
  var replicedElement = document.querySelector('.dialog__panel');
  var listTemplate = document.querySelector('#lodge-template').content;
  var dialogElement = listTemplate.cloneNode(true);
  // замена блока другим
  listElement.replaceChild(dialogElement, replicedElement);
  var pinOpen = document.querySelectorAll('.pin');
    listElement.querySelector('.lodge__title').textContent = data[chosenPin].offer.title;
    listElement.querySelector('.lodge__address').textContent = ' ' + data[chosenPin].location.x + ' , ' + data[chosenPin].location.y + '';
    listElement.querySelector('.lodge__price').innerHTML = data[chosenPin].offer.price + ' &#x20bd;/ночь';
    var flatFunc = function () {
      var newFlat;
      if (data[chosenPin].offer.type === 'flat') {
        newFlat = 'Квартира';
      } else if (data[chosenPin].offer.type === 'bungalo') {
        newFlat = 'Бунгало';
      } else {
        newFlat = 'Дом';
      }
      return newFlat;
    };
    // вызов функции выбора апартаментов
    listElement.querySelector('.lodge__type').textContent = flatFunc();
    listElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + data[chosenPin].offer.guests + ' гостей в ' + data[chosenPin].offer.rooms + ' в комнатах';
    listElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + data[chosenPin].offer.checkin + ' , выезд до ' + data[chosenPin].offer.checkout + '';
    var allSpan = document.querySelector('.lodge__features');
    var fragmentSpan = document.createDocumentFragment();
    for (var j = 0; j < data[chosenPin].offer.features.length; j++) {
      var newSpan = document.createElement('span');
      newSpan.className = 'feature__image feature__image--' + data[chosenPin].offer.features[j] + '';
      fragmentSpan.appendChild(newSpan);
    }
    allSpan.appendChild(fragmentSpan);
    listElement.querySelector('.lodge__description').innerHTML = data[chosenPin].offer.description;
    // добавляем фоки с сервака
    var numberPhoto =  data[chosenPin].offer.photos.length;
    var photoParent = listElement.querySelector('.lodge__photos');
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < numberPhoto; j++) {
      var newImg = document.createElement('img');
      newImg.setAttribute('src', '' + data[chosenPin].offer.photos[j] + '');
      newImg.setAttribute('alt', 'Lodge photo');
      newImg.setAttribute('width', '52');
      newImg.setAttribute('height', '42');
      fragment.appendChild(newImg);
    }
    photoParent.appendChild(fragment); 
    var avatarTitle = document.querySelector('.dialog__title');
    // меняем аватарку
    avatarTitle.children[0].setAttribute('src', '' + data[chosenPin].author.avatar + '');
  };
  return {
    successHandlerDialog: successHandlerDialog
  };
})();
