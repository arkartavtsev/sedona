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


    var hotels;
    var hotelsToShow = [];


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

    // IE forEach polyfill
    if ('NodeList' in window && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }


    var template = document.querySelector('#hotel');
    var templateContent = getTemplateContent(template);
    var hotelTemplate = templateContent.querySelector('.hotel-card');
    var starTemplate = templateContent.querySelector('.hotel-card__star');


    var overlay = document.querySelector('.overlay');

    var popup = document.querySelector('.popup');
    var popupTitle = popup.querySelector('.popup__title');
    var popupText = popup.querySelector('.popup__text');
    var popupBtn = popup.querySelector('.popup__btn');


    var searchForm = document.querySelector('.search-form');
    var typeSelectors = searchForm.querySelectorAll('input[type="checkbox"][name^="type-"]');
    var infrastructureSelectors = searchForm.querySelectorAll('input[type="checkbox"][name^="infrastructure-"]');
    var lowerLimitField = searchForm.querySelector('#lower-limit');
    var upperLimitField = searchForm.querySelector('#upper-limit');
    var searchBtn = searchForm.querySelector('.search-form__btn');


    var sortPane = document.querySelector('.sort-pane');
    var searchResults = sortPane.querySelector('output[name="search-results"]');

    var sortTypeGroup = sortPane.querySelector('.sort-pane__sort-type');
    var sortTypeBtns = sortTypeGroup.querySelectorAll('.sort-type__control');
    var currentSortBtn = sortTypeGroup.querySelector('.sort-type__control--current');

    var sortOrderGroup = sortPane.querySelector('.sort-pane__sort-order');
    var sortOrderBtns = sortOrderGroup.querySelectorAll('.sort-order__control');
    var currentOrderBtn = sortOrderGroup.querySelector('.sort-order__control--current');


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

    var renderHotels = function (hotelsToRender) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < hotelsToRender.length; i++) {
        fragment.appendChild(createAnotherHotel(hotelsToRender[i]));
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
            hotels = JSON.parse(xhr.response);
            showHotels();
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


    var showHotels = function () {
      hotelsToShow = [];
      var constraints = {
        type: [],
        features: {}
      };

      typeSelectors.forEach(function (selector) {
        if (selector.checked) {
          constraints.type.push(selector.dataset.name);
        }
      });

      infrastructureSelectors.forEach(function (selector) {
        if (selector.checked) {
          constraints.features[selector.dataset.name] = true;
        } else {
          constraints.features[selector.dataset.name] = false;
        }
      });

      if (hotels) {
        hotels.forEach(function (hotel) {
          var isMatch = true;

          if (constraints.type.indexOf(hotel.type) === -1 || hotel.cost < lowerLimitField.value || hotel.cost > upperLimitField.value) {
            isMatch = false;
          }

          for (var key in constraints.features) {
            if (constraints.features[key] && constraints.features[key] !== hotel.features[key]) {
              isMatch = false;
            }
          }

          if (isMatch) {
            hotelsToShow.push(hotel);
          }
        });
      }

      searchResults.textContent = hotelsToShow.length;
      sortHotels();

      if (!hotelsToShow.length) {
        var message = document.createElement('p');
        message.textContent = 'Не удалось найти ни одного отеля. Измените критерии поиска.';
        message.classList.add('hotels__search-error');
        container.appendChild(message);
      }
    };

    var onSearchBtnClick = function (evt) {
      evt.preventDefault();
      showHotels();
    };


    var DEBOUNCE_INTERVAL = 500;

    var lastTimeout;

    var removeDebounce = function (callback) {
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(callback, DEBOUNCE_INTERVAL);
    };


    var orderNumericValues = function (left, right) {
      switch (currentOrderBtn.dataset.name) {
        case 'by-increase':
          return left - right;
        case 'by-decrease':
          return right - left;
        default:
          return 0;
      }
    };


    var sortByCost = function () {
      hotelsToShow.sort(function (left, right) {
        return orderNumericValues(left.cost, right.cost);
      });
    };

    var sortByStars = function () {
      hotelsToShow.sort(function (left, right) {
        return orderNumericValues(left.category, right.category);
      });
    };

    var sortByRating = function () {
      hotelsToShow.sort(function (left, right) {
        return orderNumericValues(left.rating, right.rating);
      });
    };


    var sortHotels = function () {
      switch (currentSortBtn.dataset.name) {
        case 'by-cost':
          sortByCost();
          break;
        case 'by-stars':
          sortByStars();
          break;
        case 'by-rating':
          sortByRating();
          break;
      }

      renderHotels(hotelsToShow);
    };


    var onSortTypeBtnClick = function (evt) {
      evt.preventDefault();

      if (evt.target !== currentSortBtn) {
        currentSortBtn.classList.remove('sort-type__control--current');
        evt.target.classList.add('sort-type__control--current');
        currentSortBtn = evt.target;

        removeDebounce(sortHotels);
      }
    };

    var onSortOrderBtnClick = function (evt) {
      evt.preventDefault();

      if (evt.target !== currentOrderBtn) {
        currentOrderBtn.classList.remove('sort-order__control--current');
        evt.target.classList.add('sort-order__control--current');
        currentOrderBtn = evt.target;

        removeDebounce(sortHotels);
      }
    };


    popup.hidden = false;
    loadHotelsData();


    searchBtn.addEventListener('click', onSearchBtnClick);

    sortTypeBtns.forEach(function (btn) {
      btn.addEventListener('click', onSortTypeBtnClick);
    });

    sortOrderBtns.forEach(function (btn) {
      btn.addEventListener('click', onSortOrderBtnClick);
    });
  }
})();
