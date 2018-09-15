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

    var rangeLevel = costRange.querySelector('.range__interval');

    var lowerLimitPicker = costRange.querySelector('.range__picker--lower-limit');
    var upperLimitPicker = costRange.querySelector('.range__picker--upper-limit');

    var limitPickerHalf = lowerLimitPicker.offsetWidth / 2;

    var lowerLimitField = document.querySelector('#lower-limit');
    var upperLimitField = document.querySelector('#upper-limit');


    var assignCurrentPin = function (pin) {
      var currentPin = costRange.querySelector('.range__picker--current');

      if (currentPin) {
        currentPin.classList.remove('range__picker--current');
      }

      pin.classList.add('range__picker--current');
    };

    var getPinPosition = function (cursorPosition, leftEdge, rightEdge) {
      var pinPosition;

      if (cursorPosition < leftEdge) {
        pinPosition = leftEdge - scaleEdge.left;
      } else if (cursorPosition > rightEdge) {
        pinPosition = rightEdge - scaleEdge.left;
      } else {
        pinPosition = cursorPosition - scaleEdge.left;
      }

      return pinPosition;
    };

    var showPickedRange = function () {
      rangeLevel.style.left = lowerLimitPicker.style.left;
      rangeLevel.style.right = 100 - parseInt(upperLimitPicker.style.left, 10) + '%';
    };

    var changeLimitUnderPosition = function (position, limitPicker, limitField) {
      var value = Math.round(position / rangeScale.offsetWidth * 100);

      limitField.value = COST_STEP * value;
      limitPicker.style.left = value + '%';

      showPickedRange();
    };


    var onLowerLimitPickerMouseDown = function () {
      var onLowerLimitPickerMouseMove = function (evt) {
        var leftEdge = scaleEdge.left;
        var rightEdge = upperLimitPicker.getBoundingClientRect().left + limitPickerHalf;
        var pinPosition = getPinPosition(evt.clientX, leftEdge, rightEdge);

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
        var leftEdge = scaleEdge.left;
        var rightEdge = upperLimitPicker.getBoundingClientRect().left + limitPickerHalf;
        var pinPosition = getPinPosition(evt.touches[0].clientX, leftEdge, rightEdge);

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
        var leftEdge = lowerLimitPicker.getBoundingClientRect().right - limitPickerHalf;
        var rightEdge = scaleEdge.right;
        var pinPosition = getPinPosition(evt.clientX, leftEdge, rightEdge);

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
        var leftEdge = lowerLimitPicker.getBoundingClientRect().right - limitPickerHalf;
        var rightEdge = scaleEdge.right;
        var pinPosition = getPinPosition(evt.touches[0].clientX, leftEdge, rightEdge);

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

    upperLimitPicker.addEventListener('mousedown', onUpperLimitPickerMouseDown);
    upperLimitPicker.addEventListener('touchstart', onUpperLimitPickerTouchStart);


    lowerLimitField.addEventListener('change', function () {
      onLimitFieldChange(lowerLimitField, lowerLimitPicker, lowerLimitField.min, upperLimitField.value);
    });

    upperLimitField.addEventListener('change', function () {
      onLimitFieldChange(upperLimitField, upperLimitPicker, lowerLimitField.value, upperLimitField.max);
    });
  }
})();
