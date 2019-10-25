'use strict';

(function (Constants, Mock) {
  var totalCell = document.querySelector('.initial-data');
  var resultCell = document.querySelector('.result');

  var lemursName = Constants.LEMURS_NAME;

  var lemursSum = {};

  lemursName.forEach(function (name) {
    lemursSum[name] = 0;
  });

  var hasUniqueValues = function (arr) {
    var uniqueValues = [];

    arr.forEach(function (item) {
      if (uniqueValues.indexOf(item) === -1) {
        uniqueValues.push(item);
      }
    });

    return arr.length === uniqueValues.length;
  };

  var Lemurs = function () {
    this._resultName = '';
    this._total = 0;
  };

  Lemurs.prototype.render = function () {
    var lemurs = this._get();

    totalCell.appendChild(this._makeLemursFragment(lemurs));
    resultCell.appendChild(this._makeResultFragment(this._getResult()));
  };

  Lemurs.prototype.clear = function () {
    totalCell.textContent = '';
    resultCell.textContent = '';

    for (var key in lemursSum) {
      lemursSum[key] = 0;
    }
  };

  Lemurs.prototype._makeLemursFragment = function (lemurs) {
    var fragment = document.createDocumentFragment();

    var d = document.createElement('div');
    d.textContent = lemurs.length;
    fragment.appendChild(d);

    lemurs.forEach(function (lemur) {
      var d = document.createElement('div');
      d.textContent = lemur;
      fragment.appendChild(d);
    });

    return fragment;
  };

  Lemurs.prototype._makeResultFragment = function (result) {
    var fragment = document.createDocumentFragment();

    var d = document.createElement('div');
    d.textContent = result;
    fragment.appendChild(d);

    return fragment;
  };

  Lemurs.prototype._getResult = function () {
    var max = 0;
    var result = '';

    for (var key in lemursSum) {
      if (lemursSum[key] > max) {
        max = lemursSum[key];
        result = key;
      }
    }

    return result;
  };

  Lemurs.prototype._get = function () {
    while (true) {
      var lemurs = Mock.make();

      lemurs.forEach(function (lemur) {
        lemursSum[lemur]++;
      });

      if (hasUniqueValues(Object.values(lemursSum))) {
        return lemurs;
      }

      for (var key in lemursSum) {
        lemursSum[key] = 0;
      }
    }
  };

  window.Lemurs = Lemurs;

})(window.Constants, window.Mock);
