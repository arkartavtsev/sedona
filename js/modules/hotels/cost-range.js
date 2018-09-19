'use strict';


(function () {
  var costRange = document.querySelector('.search-form__range');


  if (costRange) {
    costRange.hidden = false;


    var COST_STEP = 50;


    var rangeScale = costRange.querySelector('.range__scale');

    var scaleEdge = {
      left: rangeScale.getBoundingClientRect().left,
      right: rangeScale.getBoundingClientRect().right
    };

    var pickedRange = costRange.querySelector('.range__interval');

    var lowerLimitPicker = costRange.querySelector('.range__picker--lower-limit');
    var upperLimitPicker = costRange.querySelector('.range__picker--upper-limit');

    var lowerLimitField = document.querySelector('#lower-limit');
    var upperLimitField = document.querySelector('#upper-limit');


    var getPinCenterCoordinate = function (pin) {
      return pin.getBoundingClientRect().left + pin.offsetWidth / 2;
    };


    var getPinPosition = function (coordinate, leftEdge, rightEdge) {
      var pinPosition;

      if (coordinate < leftEdge) {
        pinPosition = leftEdge - scaleEdge.left;
      } else if (coordinate > rightEdge) {
        pinPosition = rightEdge - scaleEdge.left;
      } else {
        pinPosition = coordinate - scaleEdge.left;
      }

      return pinPosition;
    };

    var showPickedRange = function () {
      pickedRange.style.left = lowerLimitPicker.style.left;
      pickedRange.style.right = 100 - parseInt(upperLimitPicker.style.left, 10) + '%';
    };

    var changeLimitUnderPosition = function (position, limitPicker, limitField) {
      var value = Math.round(position / rangeScale.offsetWidth * 100);

      limitField.value = COST_STEP * value;
      limitPicker.style.left = value + '%';

      showPickedRange();
    };


    var assignCurrentPin = function (pin) {
      var currentPin = costRange.querySelector('.range__picker--current');

      if (currentPin) {
        currentPin.classList.remove('range__picker--current');
      }

      pin.classList.add('range__picker--current');
      pin.focus();
    };


    var onLowerLimitPickerMouseDown = function () {
      var onLowerLimitPickerMouseMove = function (evt) {
        var pinPosition = getPinPosition(evt.clientX, scaleEdge.left, getPinCenterCoordinate(upperLimitPicker));

        changeLimitUnderPosition(pinPosition, lowerLimitPicker, lowerLimitField);
      };

      var onLowerLimitPickerMouseUp = function () {
        document.removeEventListener('mousemove', onLowerLimitPickerMouseMove);
        document.removeEventListener('mouseup', onLowerLimitPickerMouseUp);
      };

      assignCurrentPin(lowerLimitPicker);

      document.addEventListener('mousemove', onLowerLimitPickerMouseMove);
      document.addEventListener('mouseup', onLowerLimitPickerMouseUp);
    };

    var onLowerLimitPickerTouchStart = function () {
      var onLowerLimitPickerTouchMove = function (evt) {
        var pinPosition = getPinPosition(evt.touches[0].clientX, scaleEdge.left, getPinCenterCoordinate(upperLimitPicker));

        changeLimitUnderPosition(pinPosition, lowerLimitPicker, lowerLimitField);
      };

      var onLowerLimitPickerTouchEnd = function () {
        document.removeEventListener('touchmove', onLowerLimitPickerTouchMove);
        document.removeEventListener('touchend', onLowerLimitPickerTouchEnd);
      };

      assignCurrentPin(lowerLimitPicker);

      document.addEventListener('touchmove', onLowerLimitPickerTouchMove);
      document.addEventListener('touchend', onLowerLimitPickerTouchEnd);
    };


    var onUpperLimitPickerMouseDown = function () {
      var onUpperLimitPickerMouseMove = function (evt) {
        var pinPosition = getPinPosition(evt.clientX, getPinCenterCoordinate(lowerLimitPicker), scaleEdge.right);

        changeLimitUnderPosition(pinPosition, upperLimitPicker, upperLimitField);
      };

      var onUpperLimitPickerMouseUp = function () {
        document.removeEventListener('mousemove', onUpperLimitPickerMouseMove);
        document.removeEventListener('mouseup', onUpperLimitPickerMouseUp);
      };

      assignCurrentPin(upperLimitPicker);

      document.addEventListener('mousemove', onUpperLimitPickerMouseMove);
      document.addEventListener('mouseup', onUpperLimitPickerMouseUp);
    };

    var onUpperLimitPickerTouchStart = function () {
      var onUpperLimitPickerTouchMove = function (evt) {
        var pinPosition = getPinPosition(evt.touches[0].clientX, getPinCenterCoordinate(lowerLimitPicker), scaleEdge.right);

        changeLimitUnderPosition(pinPosition, upperLimitPicker, upperLimitField);
      };

      var onUpperLimitPickerTouchEnd = function () {
        document.removeEventListener('touchmove', onUpperLimitPickerTouchMove);
        document.removeEventListener('touchend', onUpperLimitPickerTouchEnd);
      };

      assignCurrentPin(upperLimitPicker);

      document.addEventListener('touchmove', onUpperLimitPickerTouchMove);
      document.addEventListener('touchend', onUpperLimitPickerTouchEnd);
    };


    var changeCoordinateByArrow = function (evt, pin) {
      var coordinate = getPinCenterCoordinate(pin);

      switch (evt.keyCode) {
        case window.util.KeyCode.LEFT_ARROW:
          coordinate -= rangeScale.offsetWidth / 100;
          break;
        case window.util.KeyCode.RIGHT_ARROW:
          coordinate += rangeScale.offsetWidth / 100;
          break;
      }

      return coordinate;
    };


    var onLimitPickerKeydown = function (evt, constraints, limitPicker, limitField) {
      if (evt.keyCode === window.util.KeyCode.LEFT_ARROW || evt.keyCode === window.util.KeyCode.RIGHT_ARROW) {
        var coordinate = changeCoordinateByArrow(evt, limitPicker);

        var pinPosition = getPinPosition(coordinate, constraints.left, constraints.right);

        assignCurrentPin(limitPicker);
        changeLimitUnderPosition(pinPosition, limitPicker, limitField);
      }
    };


    var onRangeScaleClick = function (evt) {
      if (evt.target === rangeScale || evt.target === pickedRange) {
        var pickedRangeCenterCoordinate = pickedRange.getBoundingClientRect().left + pickedRange.offsetWidth / 2;

        if (evt.clientX < getPinCenterCoordinate(lowerLimitPicker) || evt.clientX <= pickedRangeCenterCoordinate) {
          assignCurrentPin(lowerLimitPicker);
          changeLimitUnderPosition(evt.clientX - scaleEdge.left, lowerLimitPicker, lowerLimitField);
        }

        if (evt.clientX > getPinCenterCoordinate(upperLimitPicker) || evt.clientX > pickedRangeCenterCoordinate) {
          assignCurrentPin(upperLimitPicker);
          changeLimitUnderPosition(evt.clientX - scaleEdge.left, upperLimitPicker, upperLimitField);
        }
      }
    };


    var onLimitFieldChange = function (field, picker, lowerLimit, upperLimit) {
      if (parseInt(field.value, 10) <= parseInt(lowerLimit, 10)) {
        field.value = lowerLimit;
      }

      if (parseInt(field.value, 10) >= parseInt(upperLimit, 10)) {
        field.value = upperLimit;
      }

      picker.style.left = parseInt(field.value, 10) / COST_STEP + '%';

      showPickedRange();
      assignCurrentPin(picker);
    };


    lowerLimitPicker.style.left = '0%';
    upperLimitPicker.style.left = '100%';

    showPickedRange();


    lowerLimitPicker.addEventListener('mousedown', onLowerLimitPickerMouseDown);
    lowerLimitPicker.addEventListener('touchstart', onLowerLimitPickerTouchStart);

    lowerLimitPicker.addEventListener('keydown', function (evt) {
      var Constraints = {
        left: scaleEdge.left,
        right: getPinCenterCoordinate(upperLimitPicker)
      };

      onLimitPickerKeydown(evt, Constraints, lowerLimitPicker, lowerLimitField);
    });

    upperLimitPicker.addEventListener('mousedown', onUpperLimitPickerMouseDown);
    upperLimitPicker.addEventListener('touchstart', onUpperLimitPickerTouchStart);

    upperLimitPicker.addEventListener('keydown', function (evt) {
      var Constraints = {
        left: getPinCenterCoordinate(lowerLimitPicker),
        right: scaleEdge.right
      };

      onLimitPickerKeydown(evt, Constraints, upperLimitPicker, upperLimitField);
    });


    rangeScale.addEventListener('click', onRangeScaleClick);


    lowerLimitField.addEventListener('change', function () {
      onLimitFieldChange(lowerLimitField, lowerLimitPicker, lowerLimitField.min, upperLimitField.value);
    });

    upperLimitField.addEventListener('change', function () {
      onLimitFieldChange(upperLimitField, upperLimitPicker, lowerLimitField.value, upperLimitField.max);
    });
  }
})();