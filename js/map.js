'use strict';

var avatarImg = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var randomAvatarFunc = function () {                               // функция вывода неповторяющихся адресов  изображений
  var randomAvatarImg = Math.floor(Math.random() * avatarImg.length);
  var selectedAvatarImg = avatarImg[randomAvatarImg];
  avatarImg.splice(randomAvatarImg, 1);
  return selectedAvatarImg;
};
var titleDiscribe = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var randomTitleDiscribe = function () {                            // функция вывода неповторяющихся описаний квартир
  var randomTitleDiscribe = Math.floor(Math.random() * titleDiscribe.length);
  var selectedTitleDiscribe = titleDiscribe[randomTitleDiscribe];
  titleDiscribe.splice(randomTitleDiscribe, 1);
  return selectedTitleDiscribe;
};
var randomPrice = function () {                          // функция вывода случайной цены
  var minimum = 1000;
  var maximum = 1000000;
  var price = Math.floor(Math.random() * (maximum - minimum) + minimum);
  return price;
};
var randomTypeOfHouse = function () {                     // функция вывода случайного типа квартиры
  var typeOfHouse = ['flat', 'house', 'bungalo'];
  var randomTitleDiscribe = Math.floor(Math.random() * typeOfHouse.length);
  var selectedTypeOfHouse = typeOfHouse[randomTitleDiscribe];
  return selectedTypeOfHouse;
};
var randomRoomsFunc = function () {                        // функция вывода случайного количества комнат
  var rooms = [1, 2, 3, 4, 5];
  var randomRooms = Math.floor(Math.random() * rooms.length);
  var selectedRooms = rooms[randomRooms];
  return selectedRooms;
};
var randomGuests = function () {                    // функция вывода случайного количества гостей
  var minimum = 1;
  var maximum = 20;
  var numberOfGuests = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  return numberOfGuests;
};
var randomTimeFunc = function () {                      // функция вывода случайного времени прибытия
  var timeChose = ['12:00', '13:00', '14:00'];
  var randomTimeChose = Math.floor(Math.random() * timeChose.length);
  var selectedTime = timeChose[randomTimeChose];
  return selectedTime;
};
var randomTimeOutFunc = function () {                  // функция вывода случайного времени убытия
  var timeChoseOut = ['12:00', '13:00', '14:00'];
  var randomTimeChoseOut = Math.floor(Math.random() * timeChoseOut.length);
  var selectedTimeOut = timeChoseOut[randomTimeChoseOut];
  return selectedTimeOut;
};
var randomFeatures = function () {                          // функция вывода случайного количества и вида удобств
  var featuresAll = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }
  featuresAll.sort(compareRandom);
  var minimum = 1;
  var maximum = featuresAll.length + 1;
  var numberFeatures = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  featuresAll.length = numberFeatures;
  return (featuresAll);
};
var photosArr = [];                                 // пустой массив фоток
var randomX = function () {                         // функция вывода случайноых координат х
  var minimum = 300;
  var maximum = 900;
  var numberX = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  return numberX;
};
var randomY = function () {                          // функция вывода случайноых координат y
  var minimum = 100;
  var maximum = 500;
  var numberY = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  return numberY;
};
var flatFunc = function () {                        // функция вывода разных видов апартаментов в зависимости от поступивших данных от js объекта
  var newFlat;
  if (pinAdress[i].offer.type === 'flat') {
    newFlat = 'Квартира';
  } else if (pinAdress[i].offer.type === 'bungalo') {
    newFlat = 'Бунгало';
  } else {
    newFlat = 'Дом';
  }
  return newFlat;
};
var pinAdress = [                                       // массив, состоящий из 8 сгенерированных из JS объектов
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}},
  {'author': {'avatar': randomAvatarFunc()}, 'offer': {'title': randomTitleDiscribe(), 'address': '{{location.x}}, {{location.y}}', 'price': randomPrice(), 'type': randomTypeOfHouse(), 'rooms': randomRoomsFunc(), 'guests': randomGuests(), 'checkin': randomTimeFunc(), 'checkout': randomTimeOutFunc(), 'features': randomFeatures(), 'description': '      ', 'photos': photosArr}, 'location': {'x': randomX(), 'y': randomY()}}
];
var allPin = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();                       // создание меток и генерация их
var i;
for (i = 0; i < pinAdress.length; i++) {
  var newPin = document.createElement('div');
  newPin.className = 'pin';
  newPin.innerHTML = '<img  src="' + pinAdress[i].author.avatar + '"  class="rounded" width="40" height="40">';
  newPin.style = 'left: ' + pinAdress[i].location.x + 'px; top: ' + pinAdress[i].location.y + 'px';
  fragment.appendChild(newPin);
}
allPin.appendChild(fragment);
var listElement = document.querySelector('.dialog');                    // нанинаем клонировать эдемент
var replicedElement = document.querySelector('.dialog__panel');
var listTemplate = document.querySelector('#lodge-template').content;
i = 0;
var dialogElement = listTemplate.cloneNode(true);
listElement.replaceChild(dialogElement, replicedElement);                           // замена блока другим
listElement.querySelector('.lodge__title').innerHTML = pinAdress[i].offer.title;               // внесение данных из массива объектов
listElement.querySelector('.lodge__address').innerHTML = pinAdress[i].offer.address;              // внесение данных из массива объектов
listElement.querySelector('.lodge__price').innerHTML = pinAdress[i].offer.price + ' &#x20bd;/ночь';     // внесение данных из массива объектов
listElement.querySelector('.lodge__type').innerHTML = flatFunc();     // вызов функции выбора апартаментов
listElement.querySelector('.lodge__rooms-and-guests').innerHTML = 'Для ' + pinAdress[i].offer.guests + ' гостей в ' + pinAdress[i].offer.rooms + ' в комнатах';              // внесение данных из массива объектов
listElement.querySelector('.lodge__checkin-time').innerHTML = 'Заезд после ' + pinAdress[i].offer.checkin + ' , выезд до ' + pinAdress[i].offer.checkout + '';        // внесение данных из массива объектов
var allSpan = document.querySelector('.lodge__features');          // создание пустых span в зависимости от полученных данных
var fragmentSpan = document.createDocumentFragment();
var j;
for (j = 0; j < pinAdress[i].offer.features.length; j++) {
  var newSpan = document.createElement('span');
  newSpan.className = 'feature__image feature__image--' + pinAdress[i].offer.features[j] + '';
  fragmentSpan.appendChild(newSpan);
}
allSpan.appendChild(fragmentSpan);
listElement.querySelector('.lodge__description').innerHTML = pinAdress[i].offer.description;       // внесение данных из массива объектов
var avatarTitle = document.querySelector('.dialog__title');
avatarTitle.innerHTML = '<img src="' + pinAdress[i].author.avatar + '" alt="Avatar" width="70" height="70">';       // замена аватарки
