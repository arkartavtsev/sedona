'use strict';


(function () {
  var sortPane = document.querySelector('.sort-pane');


  if (sortPane) {
    var searchResults = sortPane.querySelector('output[name="search-results"]');


    var searchHotels = function (hotels, constraints) {
      var searchedHotels = [];

      if (hotels) {
        hotels.forEach(function (hotel) {
          var isMatch = true;

          if (constraints.type.indexOf(hotel.type) === -1 || hotel.cost < constraints.costLimit.lower || hotel.cost > constraints.costLimit.upper) {
            isMatch = false;
          }

          for (var key in constraints.features) {
            if (constraints.features[key] && constraints.features[key] !== hotel.features[key]) {
              isMatch = false;
            }
          }

          if (isMatch) {
            searchedHotels.push(hotel);
          }
        });
      }

      searchResults.textContent = searchedHotels.length;

      return searchedHotels;
    };

    var showHotels = function (hotels, constraints) {
      var SortParameters = {
        type: sortPane.querySelector('.sort-type__control--current').dataset.name,
        order: sortPane.querySelector('.sort-order__control--current').dataset.name
      };

      var hotelsToShow = searchHotels(hotels, constraints);

      window.sortHotels(hotelsToShow, SortParameters);
    };


    window.showHotels = showHotels;
  }
})();
