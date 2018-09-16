'use strict';


(function () {
  var template = document.querySelector('#hotel');
  var container = document.querySelector('.hotels__container');


  if (template && container) {
    // IE fix
    var templateContent = window.util.getTemplateContent(template);

    var hotelTemplate = templateContent.querySelector('.hotel-card');
    var starTemplate = templateContent.querySelector('.hotel-card__star');


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

      return fragment;
    };

    var renderMessage = function () {
      var message = document.createElement('p');

      message.textContent = 'Не удалось найти ни одного отеля. Измените критерии поиска.';
      message.classList.add('hotels__search-error');

      return message;
    };


    var renderContent = function (hotels) {
      var content = hotels.length ? renderHotels(hotels) : renderMessage();

      container.innerHTML = '';
      container.appendChild(content);
    };


    window.renderContent = renderContent;
  }
})();