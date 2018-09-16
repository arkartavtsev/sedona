'use strict';


(function () {
  var INTERVAL = 500;


  var removeDebounce = function (callback) {
    var lastTimeout;

    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(callback, INTERVAL);
  };


  window.removeDebounce = removeDebounce;
})();