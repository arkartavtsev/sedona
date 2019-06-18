'use strict';


(function () {
  var feedbackForm = document.querySelector('.feedback-form');


  if (feedbackForm) {
    var fields = feedbackForm.querySelectorAll('.form-field__input');
    var feedbackBtn = feedbackForm.querySelector('.feedback-form__btn');


    var validateFields = function () {
      fields.forEach(function (field) {
        if (!field.validity.valid) {
          field.classList.add('form-field__input--invalid');
        }
      });
    };


    feedbackBtn.addEventListener('click', validateFields);

    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.validity.patternMismatch) {
          field.classList.add('form-field__input--invalid');
        } else {
          field.classList.remove('form-field__input--invalid');
        }
      });
    });
  }
})();