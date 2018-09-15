'use strict';


(function () {
  var feedbackForm = document.querySelector('.feedback-form');


  if (feedbackForm) {
    var fields = feedbackForm.querySelectorAll('.form__field');
    var feedbackBtn = feedbackForm.querySelector('.feedback-form__btn');


    var validateFields = function () {
      fields.forEach(function (field) {
        if (!field.validity.valid) {
          field.classList.add('form__field--invalid');
        }
      });
    };


    feedbackBtn.addEventListener('click', validateFields);

    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.validity.patternMismatch) {
          field.classList.add('form__field--invalid');
        } else {
          field.classList.remove('form__field--invalid');
        }
      });
    });
  }
})();
