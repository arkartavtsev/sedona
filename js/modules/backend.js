'use strict';


(function () {
  var ResponseCode = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    ENTERNAL_ERROR: 500
  };


  var createXHR = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case ResponseCode.SUCCESS:
          onLoad(xhr.response);
          break;
        case ResponseCode.BAD_REQUEST:
          onError('Неверный запрос к серверу.');
          break;
        case ResponseCode.NOT_FOUND:
          onError('Запрашиваемый ресурс не найден на сервере.');
          break;
        case ResponseCode.ENTERNAL_ERROR:
          onError('Произошла внутренняя ошибка сервера.');
          break;
        default:
          onError('Код ответа сервера: ' + xhr.status + ' ' + xhr.statusText + '.');
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения с сервером.');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос к серверу не успел выполниться за отведённое время.');
    });

    return xhr;
  };


  var downloadData = function (url, onLoad, onError) {
    var xhr = createXHR(onLoad, onError);

    xhr.open('GET', url);
    xhr.send();
  };

  var uploadData = function (data, url, onLoad, onError) {
    var xhr = createXHR(onLoad, onError);

    xhr.open('POST', url);
    xhr.send(data);
  };


  window.backend = {
    download: downloadData,
    upload: uploadData
  };
})();