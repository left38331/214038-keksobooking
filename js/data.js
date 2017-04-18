'use strict';

window.isCreateDataFunc = (function () {
  // массив выведен за функцию, так как тогда не работает неповторяемость адресов
  var avatarImg = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
  // массив выведен за функцию, так как тогда не работает неповторяемость описаний квартиры
  var titleDiscribe = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  // функция вывода неповторяющихся адресов изображений и описаний
  var randomAvatarOrTitleFunc = function (avatarOrTitle) {
    var randomImgTitle = Math.floor(Math.random() * avatarOrTitle.length);
    var selectedAvatarImg = avatarOrTitle[randomImgTitle];
    avatarOrTitle.splice(randomImgTitle, 1);
    return selectedAvatarImg;
  };
  var timeChose = ['12:00', '13:00', '14:00'];
  var timeChoseOut = ['12:00', '13:00', '14:00'];
  var typeOfHouse = ['flat', 'house', 'bungalo'];
  // функция вывода случайного типа квартиры и времени въезда и выезда
  var randomTypeOfHouseOrTimeFunc = function (typeOfHouseTime) {
    var randomHouseOrTime = Math.floor(Math.random() * typeOfHouseTime.length);
    var selectedTypeOfHouseOrTime = typeOfHouseTime[randomHouseOrTime];
    return selectedTypeOfHouseOrTime;
  };
  // функция вывода случайного количества комнат
  var randomRoomsFunc = function () {
    var rooms = [1, 2, 3, 4, 5];
    var randomRooms = Math.floor(Math.random() * rooms.length);
    var selectedRooms = rooms[randomRooms];
    return selectedRooms;
  };
  // функция вывода случайного количества и вида удобств
  var randomFeatures = function () {
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
  // функция вывода случайной округленной цены
  var randomPriceOrGuests = function (min, max) {
    var priceOrGuests = Math.floor(Math.random() * (max - min) + min);
    return priceOrGuests;
  };
  // пустой массив фоток
  var photosArr = [];
  var coordinateX = {
    minimum: 300,
    maximum: 900
  };
  var coordinateY = {
    minimum: 100,
    maximum: 500
  };
  // функция вывода случайноых координат х y
  var randomXY = function (min, max) {
    var numberXY = Math.floor(Math.random() * (max - min)) + min;
    return numberXY;
  };
  // нужное количество меток (js обхектов) на карте
  var numberOfPin = 8;
  // функция генерации обекта на основе других функций
  var funcBuildPin = function () {
    var exzamplePin = {
      'author': {
        'avatar': randomAvatarOrTitleFunc(avatarImg)
      },
      'offer': {
        'title': randomAvatarOrTitleFunc(titleDiscribe),
        'address': function () {
          return this.location.x + ', ' + this.location.y;
        },
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
  // объявляем пустой массив, куда будут занасится наши js объекты
  var pinAdress = [];
  // генерируем столько js объектов сколько нужно, по заданию  numberOfPin = 8
  for (var i = 0; i < numberOfPin; i++) {
    pinAdress[i] = funcBuildPin(numberOfPin);
  }
  return pinAdress;
})();
