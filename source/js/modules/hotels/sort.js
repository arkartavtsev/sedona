'use strict';


(function () {
  var orderValues = function (left, right, sortOrder) {
    switch (sortOrder) {
      case 'by-increase':
        return left - right;
      case 'by-decrease':
        return right - left;
      default:
        return 0;
    }
  };


  var sortByCost = function (hotels, sortOrder) {
    hotels.sort(function (left, right) {
      return orderValues(left.cost, right.cost, sortOrder);
    });
  };

  var sortByStars = function (hotels, sortOrder) {
    hotels.sort(function (left, right) {
      return orderValues(left.category, right.category, sortOrder);
    });
  };

  var sortByRating = function (hotels, sortOrder) {
    hotels.sort(function (left, right) {
      return orderValues(left.rating, right.rating, sortOrder);
    });
  };


  var sortHotels = function (hotels, parameters) {
    switch (parameters.type) {
      case 'by-cost':
        sortByCost(hotels, parameters.order);
        break;
      case 'by-stars':
        sortByStars(hotels, parameters.order);
        break;
      case 'by-rating':
        sortByRating(hotels, parameters.order);
        break;
    }

    window.renderContent(hotels);
  };


  window.sortHotels = sortHotels;
})();
