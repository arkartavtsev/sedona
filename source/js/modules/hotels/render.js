'use strict';


(function () {
  var template = document.querySelector('#hotel-template');
  var container = document.querySelector('.hotels__container');


  if (template && container) {
    // IE fix
    var templateContent = window.util.getTemplateContent(template);

    var hotelTemplate = templateContent.querySelector('.hotel-card');
    var starTemplate = templateContent.querySelector('.hotel-card__star');


    var addStars = function (count) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < count; i++) {
        fragment.appendChild(starTemplate.cloneNode(true));
      }

      return fragment;
    };

    var addDescription = function (hotelElement, hotelData) {
      var description = hotelElement.querySelector('.hotel-card__description');

      description.querySelector('.hotel-card__title').textContent = hotelData.title;
      description.querySelector('.hotel-card__category-transcription').textContent = 'Категория отеля: ' + hotelData.category + ' звезды';
      description.querySelector('.hotel-card__category').appendChild(addStars(hotelData.category));
      description.querySelector('.hotel-card__rating').textContent = 'Рейтинг: ' + hotelData.rating;
      description.querySelector('.hotel-card__type').textContent = hotelData.type;
      description.querySelector('.hotel-card__price').textContent = 'От ' + hotelData.cost + ' \u20BD';
    };

    var addPhoto = function (hotelElement, hotelData) {
      var photoContainer = hotelElement.querySelector('.hotel-card__photo-container');
      var photo = photoContainer.querySelector('.hotel-card__photo');

      photo.src = 'img/hotel-' + hotelData.id + '-mobile@1x.jpg';
      photo.srcset = 'img/hotel-' + hotelData.id + '-mobile@2x.jpg 2x';
      photo.alt = 'Отель ' + hotelData.title;

      photoContainer.querySelector('[data-source-type="jpg"]').srcset = 'img/hotel-' + hotelData.id + '@1x.jpg 1x, img/hotel-' + hotelData.id + '@2x.jpg 2x';

      photoContainer.querySelector('[data-source-type="webp-mobile"]').srcset = 'img/hotel-' + hotelData.id + '-mobile@1x.webp 1x, img/hotel-' + hotelData.id + '-mobile@2x.webp 2x';

      photoContainer.querySelector('[data-source-type="webp"]').srcset = 'img/hotel-' + hotelData.id + '@1x.webp 1x, img/hotel-' + hotelData.id + '@2x.webp 2x';
    };


    var createAnotherHotel = function (hotel) {
      var anotherHotel = hotelTemplate.cloneNode(true);

      addDescription(anotherHotel, hotel);
      addPhoto(anotherHotel, hotel);

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
