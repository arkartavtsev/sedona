'use strict';


(function () {
  var container = document.querySelector('.hotels__container');


  if (container) {
    var ESC_KEYCODE = 27;

    var URL = 'data/hotels.json';

    var ResponseCode = {
      SUCCESS: 200,
      BAD_REQUEST: 400,
      NOT_FOUND: 404,
      ENTERNAL_ERROR: 500
    };


    // IE <template> polyfill
    var getTemplateContent = function (template) {
      if ('content' in document.createElement('template')) {
        return document.importNode(template.content, true);
      } else {
        var fragment = document.createDocumentFragment();
        var children = template.childNodes;

        for (var i = 0; i < children.length; i++) {
          fragment.appendChild(children[i].cloneNode(true));
        }

        return fragment;
      }
    };


    var template = document.querySelector('#hotel');
    var templateContent = getTemplateContent(template);
    var hotelTemplate = templateContent.querySelector('.hotel-card');
    var starTemplate = templateContent.querySelector('.hotel-card__star');


    var overlay = document.querySelector('.overlay');

    var popup = document.querySelector('.popup');
    var popupTitle = popup.querySelector('.popup__title');
    var popupText = popup.querySelector('.popup__text');
    var popupBtn = popup.querySelector('.popup__btn');


    var createStars = function (count) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < count; i++) {
        fragment.appendChild(starTemplate.cloneNode(true));
      }

      return fragment;
    };

    var createAnotherHotel = function (hotel) {
      var anotherHotel = hotelTemplate.cloneNode(true);
      var photoContainer = anotherHotel.querySelector('.hotel-card__photo-container');
      var photo = photoContainer.querySelector('.hotel-card__photo');
      var description = anotherHotel.querySelector('.hotel-card__description');

      photo.src = 'img/hotel-' + hotel.id + '-mobile@1x.jpg';
      photo.srcset = 'img/hotel-' + hotel.id + '-mobile@2x.jpg 2x';
      photo.alt = 'Отель ' + hotel.title;

      photoContainer.querySelector('#source-jpg').srcset = 'img/hotel-' + hotel.id + '@1x.jpg 1x, img/hotel-' + hotel.id + '@2x.jpg 2x';
      photoContainer.querySelector('#source-webp-mobile').srcset = 'img/hotel-' + hotel.id + '-mobile@1x.webp 1x, img/hotel-' + hotel.id + '-mobile@2x.webp 2x';
      photoContainer.querySelector('#source-webp').srcset = 'img/hotel-' + hotel.id + '@1x.webp 1x, img/hotel-' + hotel.id + '@2x.webp 2x';

      description.querySelector('.hotel-card__title').textContent = hotel.title;
      description.querySelector('.hotel-card__category-transcription').textContent = 'Категория отеля: ' + hotel.category + ' звезды';
      description.querySelector('.hotel-card__category').appendChild(createStars(hotel.category));
      description.querySelector('.hotel-card__rating').textContent = 'Рейтинг: ' + hotel.rating;
      description.querySelector('.hotel-card__type').textContent = hotel.type;
      description.querySelector('.hotel-card__price').textContent = 'От ' + hotel.cost + ' \u20BD';

      return anotherHotel;
    };

    var renderHotels = function (hotels) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < hotels.length; i++) {
        fragment.appendChild(createAnotherHotel(hotels[i]));
      }

      container.innerHTML = '';
      container.appendChild(fragment);
    };


    var onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    };

    var openPopup = function (text) {
      popupTitle.textContent = 'Что-то пошло не так!';
      popupText.textContent = 'Не удалось загрузить список отелей. ' + text;

      popupBtn.addEventListener('click', closePopup);
      overlay.addEventListener('click', closePopup);
      document.addEventListener('keydown', onPopupEscPress);

      popup.classList.add('popup--shown');
      overlay.hidden = false;
    };

    var closePopup = function () {
      overlay.hidden = true;
      popup.classList.remove('popup--shown');
      popupBtn.removeEventListener('click', closePopup);
      overlay.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onPopupEscPress);
    };


    var loadHotelsData = function () {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case ResponseCode.SUCCESS:
            // IE не поддерживает xhr.responseType = 'json'
            var response = JSON.parse(xhr.response);
            renderHotels(response);
            break;
          case ResponseCode.BAD_REQUEST:
            openPopup('Неверный запрос.');
            break;
          case ResponseCode.NOT_FOUND:
            openPopup('Запрашиваемый ресурс не найден.');
            break;
          case ResponseCode.ENTERNAL_ERROR:
            openPopup('Внутренняя ошибка сервера.');
            break;
          default:
            openPopup('Код ответа сервера: ' + xhr.status + ' ' + xhr.statusText + '.');
        }
      });

      xhr.addEventListener('error', function () {
        openPopup('Произошла ошибка соединения.');
      });

      xhr.addEventListener('timeout', function () {
        openPopup('Запрос к серверу не успел выполниться за отведённое время.');
      });

      xhr.open('GET', URL);
      xhr.send();
    };


    popup.hidden = false;

    loadHotelsData();
  }
})();
