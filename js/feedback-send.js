'use strict';


(function () {
  var feedbackForm = document.querySelector('.feedback-form');


  if (feedbackForm) {
    var ESC_KEYCODE = 27;

    var URL = 'https://echo.htmlacademy.ru';

    var ResponseCode = {
      SUCCESS: 200,
      BAD_REQUEST: 400,
      ENTERNAL_ERROR: 500
    };

    var Message = {
      Title: {
        SUCCESS: 'Ваш отзыв отправлен!',
        ERROR: 'Что-то пошло не так!'
      },
      SUCCESS_TEXT: 'Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!'
    };


    var feedbackBtn = feedbackForm.querySelector('.feedback-form__btn');

    var overlay = document.querySelector('.overlay');

    var popup = document.querySelector('.popup');
    var popupTitle = popup.querySelector('.popup__title');
    var popupText = popup.querySelector('.popup__text');
    var popupBtn = popup.querySelector('.popup__btn');


    var onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    };

    var openPopup = function (title, text) {
      popupTitle.textContent = title;
      popupText.textContent = text;

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

    var sendForm = function () {
      feedbackBtn.disabled = false;
      openPopup(Message.Title.SUCCESS, Message.SUCCESS_TEXT);
      feedbackForm.reset();
    };

    var showError = function (messageText) {
      feedbackBtn.disabled = false;
      openPopup(Message.Title.ERROR, messageText);
    };

    var onFeedbackSubmit = function (evt) {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case ResponseCode.SUCCESS:
            sendForm();
            break;
          case ResponseCode.BAD_REQUEST:
            showError('Неверный запрос');
            break;
          case ResponseCode.ENTERNAL_ERROR:
            showError('Внутренняя ошибка сервера');
            break;
          default:
            showError('Код ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        showError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        showError('Запрос к серверу не успел выполниться за отведённое время');
      });

      evt.preventDefault();
      feedbackBtn.disabled = true;

      xhr.open('POST', URL);
      xhr.send(new FormData(feedbackForm));
    };


    popup.hidden = false;


    feedbackForm.addEventListener('submit', onFeedbackSubmit);
  }
})();
