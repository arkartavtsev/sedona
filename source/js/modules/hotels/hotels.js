'use strict';


(function () {
  var searchForm = document.querySelector('.search-form');
  var sortPane = document.querySelector('.sort-pane');


  if (searchForm && sortPane) {
    var URL = 'data/hotels.json';
    var RELOAD_TIMEOUT = 1000;

    var ErrorPopup = {
      TITLE: 'Что-то пошло не так!',
      TEXT: 'Не удалось загрузить список отелей. ',
      BTN_TEXT: 'Ещё раз'
    };


    var loadedHotels;
    var searchConstraints;


    var searchBtn = searchForm.querySelector('.search-form__btn');

    var sortTypeGroup = sortPane.querySelector('.sort-pane__sort-type');
    var sortTypeBtns = sortTypeGroup.querySelectorAll('.sort-type__control');
    var currentTypeBtn = sortTypeGroup.querySelector('.sort-type__control--current');

    var sortOrderGroup = sortPane.querySelector('.sort-pane__sort-order');
    var sortOrderBtns = sortOrderGroup.querySelectorAll('.sort-order__control');
    var currentOrderBtn = sortOrderGroup.querySelector('.sort-order__control--current');

    var popupBtn = document.querySelector('.popup__btn');


    var showHotelsUnserConstraints = function () {
      searchConstraints = window.specifyConstraints();
      window.showHotels(loadedHotels, searchConstraints);
    };


    var onPopupBtnClick = function () {
      window.popup.close();

      setTimeout(function () {
        window.backend.download(URL, loadHotels, showError);
      }, RELOAD_TIMEOUT);

      popupBtn.removeEventListener('click', onPopupBtnClick);
    };


    var loadHotels = function (data) {
      // IE не поддерживает xhr.responseType = 'json'
      loadedHotels = JSON.parse(data);

      showHotelsUnserConstraints();
    };

    var showError = function (serverStatusText) {
      window.popup.open(ErrorPopup.TITLE, ErrorPopup.TEXT + serverStatusText, ErrorPopup.BTN_TEXT);

      popupBtn.addEventListener('click', onPopupBtnClick);
    };


    var onSearchBtnClick = function (evt) {
      evt.preventDefault();
      showHotelsUnserConstraints();
    };

    var onSortTypeBtnClick = function (evt) {
      evt.preventDefault();

      if (evt.target !== currentTypeBtn) {
        currentTypeBtn.classList.remove('sort-type__control--current');
        evt.target.classList.add('sort-type__control--current');
        currentTypeBtn = evt.target;

        window.removeDebounce(function () {
          window.showHotels(loadedHotels, searchConstraints);
        });
      }
    };

    var onSortOrderBtnClick = function (evt) {
      evt.preventDefault();

      if (evt.target !== currentOrderBtn) {
        currentOrderBtn.classList.remove('sort-order__control--current');
        evt.target.classList.add('sort-order__control--current');
        currentOrderBtn = evt.target;

        window.removeDebounce(function () {
          window.showHotels(loadedHotels, searchConstraints);
        });
      }
    };


    window.backend.download(URL, loadHotels, showError);


    searchBtn.addEventListener('click', onSearchBtnClick);

    sortTypeBtns.forEach(function (btn) {
      btn.addEventListener('click', onSortTypeBtnClick);
    });

    sortOrderBtns.forEach(function (btn) {
      btn.addEventListener('click', onSortOrderBtnClick);
    });
  }
})();
