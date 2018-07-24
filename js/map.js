'use strict';


(function () {
  var mapContainer = document.querySelector('.sedona-location');

  window.initMap = function () {
    if (mapContainer) {
      mapContainer.classList.add('sedona-location--js');
      mapContainer.querySelector('.sedona-location__img').classList.add('sedona-location__img--js');
      var sedona = {lat: 34.869867, lng: -111.760635};
      var sedonaMap = new google.maps.Map(document.getElementById('map'), {
        center: sedona,
        zoom: 7,
        minZoom: 4,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        backgroundColor: '#fff'
      });

      var marker = new google.maps.Marker({
        position: sedona,
        map: sedonaMap,
        icon: 'img/icon-map-marker.svg'
      });
    }
  }

  console.log('dd');
})();
