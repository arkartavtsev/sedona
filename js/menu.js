'use strict';

(function () {
  var headerBar = document.querySelector('.page-header__bar');

  if (headerBar) {
    var menuBtn = headerBar.querySelector('.menu-btn');
    var menu = document.querySelector('.main-nav');

    var toggleMenu = function (evt) {
      evt.preventDefault();

      if (menu.offsetHeight === 0) {
        menu.style.height = menu.scrollHeight + 'px';
      } else {
        menu.style.height = 0;
      }

    };

    headerBar.classList.add('page-header__bar--js');
    menuBtn.classList.add('page-header__menu-btn--js');

    menuBtn.addEventListener('click', toggleMenu);
  }
})();
