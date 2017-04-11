'use strict';

var avatarImg = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];   // массив выведен за функцию, так как тогда не работает неповторяемость адресов
var titleDiscribe = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];   // массив выведен за функцию, так как тогда не работает неповторяемость описаний квартиры
var randomAvatarOrTitleFunc = function (avatarOrTitle) {                        // функция вывода неповторяющихся адресов изображений и описаний
  var randomImgTitle = Math.floor(Math.random() * avatarOrTitle.length);
  var selectedAvatarImg = avatarOrTitle[randomImgTitle];
  avatarOrTitle.splice(randomImgTitle, 1);
  return selectedAvatarImg;
};
var timeChose = ['12:00', '13:00', '14:00'];
var timeChoseOut = ['12:00', '13:00', '14:00'];
var typeOfHouse = ['flat', 'house', 'bungalo'];
var randomTypeOfHouseOrTimeFunc = function (typeOfHouseTime) {             // функция вывода случайного типа квартиры и времени въезда и выезда
  var randomHouseOrTime = Math.floor(Math.random() * typeOfHouseTime.length);
  var selectedTypeOfHouseOrTime = typeOfHouseTime[randomHouseOrTime];
  return selectedTypeOfHouseOrTime;
};
var randomRoomsFunc = function () {                        // функция вывода случайного количества комнат
  var rooms = [1, 2, 3, 4, 5];
  var randomRooms = Math.floor(Math.random() * rooms.length);
  var selectedRooms = rooms[randomRooms];
  return selectedRooms;
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
var priceOfNight = {
  minimum: 1000,
  maximum: 1000000
};
var numberOfGuests = {
  minimum: 1,
  maximum: 20
};
var randomPriceOrGuests = function (min, max) {                          // функция вывода случайной округленной цены
  var priceOrGuests = Math.floor(Math.random() * (max - min) + min);
  return priceOrGuests;
};
var photosArr = [];                                 // пустой массив фоток
var coordinateX = {
  minimum: 300,
  maximum: 900
};
var coordinateY = {
  minimum: 100,
  maximum: 500
};
var randomXY = function (min, max) {                         // функция вывода случайноых координат х y
  var numberXY = Math.floor(Math.random() * (max - min)) + min;
  return numberXY;
};
var numberOfPin = 8;                   // нужное количество меток (js обхектов) на карте
var funcBuildPin = function () {         // функция генерации обхекта на основе других функций
  var exzamplePin = {
    'author': {
      'avatar': randomAvatarOrTitleFunc(avatarImg)
    },
    'offer': {
      'title': randomAvatarOrTitleFunc(titleDiscribe),
      'address': function () {return this.location.x + ', ' + this.location.y; },
      'price': randomPriceOrGuests(priceOfNight.minimum, priceOfNight.maximum),
      'type': randomTypeOfHouseOrTimeFunc(typeOfHouse),
      'rooms': randomRoomsFunc(),
      'guests': randomPriceOrGuests(numberOfGuests.minimum, numberOfGuests.maximum),
      'checkin': randomTypeOfHouseOrTimeFunc(timeChose),
      'checkout': randomTypeOfHouseOrTimeFunc(timeChoseOut),
      'features': randomFeatures(),
      'description': '      ',
      'photos': photosArr
    },
    'location': {
      'x': randomXY(coordinateX.minimum, coordinateX.maximum),
      'y': randomXY(coordinateY.minimum, coordinateY.maximum)
    }
  };
  return (exzamplePin);
};
var pinAdress = [];       // объявляем пустой массив, куда будут занасится наши js объекты
var i;
var j;
for (i = 0; i < numberOfPin; i++) {              // генерируем столько js объектов сколько нужно, по заданию  numberOfPin = 8
  pinAdress[i] = funcBuildPin(numberOfPin);
}
var allPin = document.querySelector('.tokyo__pin-map');
var fragment = document.createDocumentFragment();                       // создание меток и генерация их
var coordinateX = [];                              // пустой массив для записи туда координат Х
var coordinateY = [];                              // пустой массив для записи туда координат Y
for (i = 0; i < pinAdress.length; i++) {
  var newPin = document.createElement('div');
  newPin.className = 'pin';
  newPin.innerHTML = '<img  src="' + pinAdress[i].author.avatar + '"  class="rounded" width="40" height="40" tabindex="0">';
  newPin.style = 'left: ' + pinAdress[i].location.x + 'px; top: ' + pinAdress[i].location.y + 'px';
  fragment.appendChild(newPin);
  coordinateY[i] = pinAdress[i].location.y;         // запись в массив Х
  coordinateX[i] = pinAdress[i].location.x;         // запись в массив У
}
allPin.appendChild(fragment);
var listElement = document.querySelector('.dialog');                    // начинаем клонировать элемент (левая плашка и описание метки карты)
var replicedElement = document.querySelector('.dialog__panel');
var listTemplate = document.querySelector('#lodge-template').content;
var dialogElement = listTemplate.cloneNode(true);
listElement.replaceChild(dialogElement, replicedElement);                           // замена блока другим
var showPopupFunc = function (pin) {
  listElement.querySelector('.lodge__title').textContent = pinAdress[pin].offer.title;               // внесение данных из массива объектов
  listElement.querySelector('.lodge__address').textContent = ' ' + coordinateX[pin] + ' , ' + coordinateY[pin] + '';              // внесение данных из массива объектов
  listElement.querySelector('.lodge__price').innerHTML = pinAdress[pin].offer.price + ' &#x20bd;/ночь';     // внесение данных из массива объектов
  var flatFunc = function () {                 // функция вывода разных видов апартаментов в зависимости от поступивших данных от js объекта
    var newFlat;
    if (pinAdress[pin].offer.type === 'flat') {
      newFlat = 'Квартира';
    } else if (pinAdress[pin].offer.type === 'bungalo') {
      newFlat = 'Бунгало';
    } else {
      newFlat = 'Дом';
    }
    return newFlat;
  };
  listElement.querySelector('.lodge__type').textContent = flatFunc();     // вызов функции выбора апартаментов
  listElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + pinAdress[pin].offer.guests + ' гостей в ' + pinAdress[pin].offer.rooms + ' в комнатах';              // внесение данных из массива объектов
  listElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + pinAdress[pin].offer.checkin + ' , выезд до ' + pinAdress[pin].offer.checkout + '';        // внесение данных из массива объектов
  var allSpan = document.querySelector('.lodge__features');          // создание пустых span в зависимости от полученных данных
  var fragmentSpan = document.createDocumentFragment();
  for (j = 0; j < pinAdress[pin].offer.features.length; j++) {
    var newSpan = document.createElement('span');
    newSpan.className = 'feature__image feature__image--' + pinAdress[pin].offer.features[j] + '';
    fragmentSpan.appendChild(newSpan);
  }
  allSpan.appendChild(fragmentSpan);
  listElement.querySelector('.lodge__description').innerHTML = pinAdress[pin].offer.description;       // внесение данных из массива объектов
  var avatarTitle = document.querySelector('.dialog__title');
  avatarTitle.children[0].setAttribute('src', '' + pinAdress[pin].author.avatar + '');      // меняем аватарку
};
showPopupFunc(0);        // сразу выводим dialog  с данными от сгенерированной первой метки
