'use strict';


(function () {
  var sedonaLocation = document.querySelector('.sedona-location');


  window.initMap = function () {
    if (sedonaLocation) {
      var CENTER_COORDS = {
        lat: 34.869867,
        lng: -111.760635
      };


      var mapContainer = sedonaLocation.querySelector('#map');

      var mapProperties = {
        center: CENTER_COORDS,
        zoom: 8,
        minZoom: 4,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        backgroundColor: '#fff'
      };

      var map = new google.maps.Map(mapContainer, mapProperties);


      var markerIcon = {
        url: 'img/icon-map-marker.svg',
        scaledSize: new google.maps.Size(25, 25)
      };

      var markerProperties = {
        position: CENTER_COORDS,
        map: map,
        optimized: false,
        icon: markerIcon
      };

      var marker = new google.maps.Marker(markerProperties);


      sedonaLocation.classList.add('sedona-location--js');
    }
  };
})();