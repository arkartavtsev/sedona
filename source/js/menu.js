'use strict';

(function () {
  var headerBar = document.querySelector('.page-header__bar');

  if (headerBar) {
    var menuBtn = headerBar.querySelector('.menu-btn');
    var menu = document.querySelector('.main-nav');
    var menuHeight = menu.scrollHeight + 'px';

    var onMenuBtnClick = function (evt) {
      evt.preventDefault();

      menu.style.height = (menu.offsetHeight === 0) ? menuHeight : 0;
    };

    var onWindowResize = function () {
      menu.removeAttribute('style');
    };


    headerBar.classList.add('page-header__bar--js');
    menuBtn.classList.add('page-header__menu-btn--js');
    menu.classList.add('page-header__main-nav--js');


    menuBtn.addEventListener('click', onMenuBtnClick);
    window.addEventListener('resize', onWindowResize);
  }
})();
