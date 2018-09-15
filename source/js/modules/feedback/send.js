'use strict';


(function () {
  var feedbackForm = document.querySelector('.feedback-form');


  if (feedbackForm) {
    var URL = 'https://echo.htmlacademy.ru';

    var Message = {
      Title: {
        SUCCESS: 'Ваш отзыв отправлен!',
        ERROR: 'Что-то пошло не так!'
      },
      Text: {
        SUCCESS: 'Спасибо за Ваше участие, Ваш отзыв уже поступил к нам. Мы обязательно учтём все Ваши замечания!',
        ERROR: 'К сожалению, Ваш отзыв не был отправлен. '
      }
    };


    var feedbackBtn = feedbackForm.querySelector('.feedback-form__btn');


    var sendForm = function () {
      feedbackBtn.disabled = false;
      window.popup.open(Message.Title.SUCCESS, Message.Text.SUCCESS);
      feedbackForm.reset();
    };

    var showError = function (serverStatusText) {
      feedbackBtn.disabled = false;
      window.popup.open(Message.Title.ERROR, Message.Text.ERROR + serverStatusText);
    };


    var onFeedbackSubmit = function (evt) {
      evt.preventDefault();
      feedbackBtn.disabled = true;

      window.backend.upload(new FormData(feedbackForm), URL, sendForm, showError);
    };


    feedbackForm.addEventListener('submit', onFeedbackSubmit);
  }
})();
