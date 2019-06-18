'use strict';


(function () {
  var headerBar = document.querySelector('.page-header__bar');
  var menu = document.querySelector('.main-nav');


  if (headerBar && menu) {
    var menuBtn = headerBar.querySelector('.menu-btn');


    var onMenuBtnClick = function (evt) {
      evt.preventDefault();
      menu.style.height = (menu.offsetHeight === 0) ? menu.scrollHeight + 'px' : 0;
    };


    var onWindowResize = function () {
      if (document.documentElement.clientWidth >= window.util.Resolution.TABLET) {
        menu.removeAttribute('style');
      }
    };


    headerBar.classList.add('page-header__bar--js');
    menuBtn.classList.add('page-header__menu-btn--js');
    menu.classList.add('page-header__main-nav--js');


    menuBtn.addEventListener('click', onMenuBtnClick);
    window.addEventListener('resize', onWindowResize);
  }
})();