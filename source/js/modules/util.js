'use strict';


(function () {
  var KeyCode = {
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    ESC: 27
  };

  var Resolution = {
    TABLET: 768,
    DESKTOP: 1200
  };


  // IE forEach polyfill
  if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // IE <template> polyfill
  var getTemplateContent = function (template) {
    if ('content' in document.createElement('template')) {
      return document.importNode(template.content, true);
    } else {
      var fragment = document.createDocumentFragment();
      var children = template.childNodes;

      for (var i = 0; i < children.length; i++) {
        fragment.appendChild(children[i].cloneNode(true));
      }

      return fragment;
    }
  };


  window.util = {
    KeyCode: KeyCode,
    Resolution: Resolution,

    getTemplateContent: getTemplateContent
  };
})();
