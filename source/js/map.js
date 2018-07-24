'use strict';


(function () {
  var mapContainer = document.querySelector('.sedona-location');

  window.initMap = function () {
    if (mapContainer) {
      var CENTER_COORDS = {
        lat: 34.869867,
        lng: -111.760635
      };


      var map = mapContainer.querySelector('#map');
      var mapProperties = {
        center: CENTER_COORDS,
        zoom: 8,
        minZoom: 4,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        backgroundColor: '#fff'
      };

      var sedonaMap = new google.maps.Map(map, mapProperties);

      var markerIcon = {
        url: 'img/icon-map-marker.svg',
        scaledSize: new google.maps.Size(25, 25)
      };
      var markerProperties = {
        position: CENTER_COORDS,
        map: sedonaMap,
        optimized: false,
        icon: markerIcon
      };

      var marker = new google.maps.Marker(markerProperties);


      mapContainer.classList.add('sedona-location--js');
      mapContainer.querySelector('.sedona-location__img').classList.add('sedona-location__img--js');
    }
  };
})();
