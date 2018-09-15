'use strict';


(function () {
  var popup = document.querySelector('.popup');
  var overlay = document.querySelector('.overlay');


  if (popup && overlay) {
    var ESC_KEYCODE = 27;


    var popupTitle = popup.querySelector('.popup__title');
    var popupText = popup.querySelector('.popup__text');
    var popupBtn = popup.querySelector('.popup__btn');


    var onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        closePopup();
      }
    };

    var closePopup = function () {
      overlay.hidden = true;
      popup.classList.remove('popup--shown');

      popupBtn.removeEventListener('click', closePopup);
      overlay.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onPopupEscPress);
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


    popup.hidden = false;


    window.popup = {
      open: openPopup,
      close: closePopup
    };
  }
})();
