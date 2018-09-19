'use strict';


(function () {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');


  if (popup && overlay) {
    var popupTitle = popup.querySelector('.popup__title');
    var popupText = popup.querySelector('.popup__text');
    var mainBtn = popup.querySelector('.popup__btn');
    var closeBtn = popup.querySelector('.popup__close-btn');


    var onPopupEscPress = function (evt) {
      if (evt.keyCode === window.util.KeyCode.ESC) {
        evt.preventDefault();
        closePopup();
      }
    };

    var closePopup = function () {
      overlay.hidden = true;
      popup.classList.remove('popup--shown');

      closeBtn.removeEventListener('click', closePopup);
      overlay.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onPopupEscPress);
    };

    var openPopup = function (title, text, btnText) {
      popupTitle.textContent = title;
      popupText.textContent = text;
      mainBtn.textContent = btnText;

      closeBtn.addEventListener('click', closePopup);
      overlay.addEventListener('click', closePopup);
      document.addEventListener('keydown', onPopupEscPress);

      popup.classList.add('popup--shown');
      overlay.hidden = false;
    };


    popup.hidden = false;


    window.popup = {
      open: openPopup,
      close: closePopup
    };
  }
})();