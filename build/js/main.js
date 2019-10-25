'use strict';

(function (Lemurs) {
  var button = document.querySelector('button');

  var lemurs = new Lemurs();

  var onButtonClick = function () {
    lemurs.clear();
    lemurs.render();
  };

  lemurs.render();
  button.addEventListener('click', onButtonClick);
})(window.Lemurs);
