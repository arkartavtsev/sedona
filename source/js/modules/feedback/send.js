'use strict';


(function () {
  var feedbackForm = document.querySelector('.feedback-form');


  if (feedbackForm) {
    var URL = 'https://echo.htmlacademy.ru';
    var RELOAD_TIMEOUT = 1000;

    var Popup = {
      SuccessLoad: {
        TITLE: 'Ваш отзыв отправлен!',
        TEXT: 'Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!',
        BTN_TEXT: 'Ок'
      },
      ErrorLoad: {
        TITLE: 'Что-то пошло не так!',
        TEXT: 'К сожалению, Ваш отзыв не был отправлен. ',
        BTN_TEXT: 'Ещё раз'
      }
    };


    var feedbackBtn = feedbackForm.querySelector('.feedback-form__btn');

    var popupBtn = document.querySelector('.popup__btn');


    var onSuccessPopupBtnClick = function () {
      window.popup.close();

      popupBtn.removeEventListener('click', onSuccessPopupBtnClick);
    };

    var onErrorPopupBtnClick = function () {
      window.popup.close();

      setTimeout(function () {
        window.backend.upload(new FormData(feedbackForm), URL, sendForm, showError);
      }, RELOAD_TIMEOUT);

      popupBtn.removeEventListener('click', onErrorPopupBtnClick);
    };


    var sendForm = function () {
      feedbackBtn.disabled = false;
      window.popup.open(Popup.SuccessLoad.TITLE, Popup.SuccessLoad.TEXT, Popup.SuccessLoad.BTN_TEXT);
      feedbackForm.reset();

      popupBtn.addEventListener('click', onSuccessPopupBtnClick);
    };

    var showError = function (serverStatusText) {
      feedbackBtn.disabled = false;
      window.popup.open(Popup.ErrorLoad.TITLE, Popup.ErrorLoad.TEXT + serverStatusText, Popup.ErrorLoad.BTN_TEXT);

      popupBtn.addEventListener('click', onErrorPopupBtnClick);
    };


    var onFeedbackSubmit = function (evt) {
      evt.preventDefault();
      feedbackBtn.disabled = true;

      window.backend.upload(new FormData(feedbackForm), URL, sendForm, showError);
    };


    feedbackForm.addEventListener('submit', onFeedbackSubmit);
  }
})();
