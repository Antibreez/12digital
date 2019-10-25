'use strict';

(function (Constants) {
	var lemursName = Constants.LEMURS_NAME;
  var lemursNumber = Constants.LEMURS_NUMBER;

  var getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

	var getQuantity = function () {
  	return getRandomNumber(lemursNumber.min, lemursNumber.max);
  };

  var getRandomLemur = function () {
  	return lemursName[getRandomNumber(0, lemursName.length - 1)];
  };

  var makeLemurs = function () {
    return Array(getQuantity()).fill(null).map(getRandomLemur);
  };

  window.Mock = {
  	make: makeLemurs
  };
})(window.Constants);
