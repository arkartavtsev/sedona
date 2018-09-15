'use strict';


(function () {
  var searchForm = document.querySelector('.search-form');


  if (searchForm) {
    var typeSelectors = searchForm.querySelectorAll('input[type="checkbox"][name^="type-"]');
    var infrastructureSelectors = searchForm.querySelectorAll('input[type="checkbox"][name^="infrastructure-"]');
    var lowerLimitField = searchForm.querySelector('#lower-limit');
    var upperLimitField = searchForm.querySelector('#upper-limit');


    var specifyConstraints = function () {
      var constraints = {
        type: [],
        features: {},
        costLimit: {
          lower: lowerLimitField.value,
          upper: upperLimitField.value
        }
      };

      typeSelectors.forEach(function (selector) {
        if (selector.checked) {
          constraints.type.push(selector.dataset.name);
        }
      });

      infrastructureSelectors.forEach(function (selector) {
        if (selector.checked) {
          constraints.features[selector.dataset.name] = true;
        } else {
          constraints.features[selector.dataset.name] = false;
        }
      });

      return constraints;
    };


    window.specifyConstraints = specifyConstraints;
  }
})();
