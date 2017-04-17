'use strict';

(function () {
  var pinSelected = document.querySelector('.tokyo__pin-map');
  var dialogCard = document.querySelector('.dialog');
  var pinClose = dialogCard.querySelector('.dialog__close');
  pinSelected.addEventListener('click', window.isCreateClickFunc.clickOrEnterOnPinFunc); // открыть окно кликом
  pinSelected.addEventListener('keydown', window.isCreateClickFunc.onEnterPress);        // открыть окно при нажатии Enter
  pinClose.addEventListener('click', window.isCreateClickFunc.closeDialogFunc);          // закрыть окно кликом
  document.addEventListener('keydown', window.isCreateClickFunc.onEscPress);             // закрыть окно при нажатии Esc
})();
