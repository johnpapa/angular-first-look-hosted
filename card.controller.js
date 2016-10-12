(function () {
  'use strict';

  angular
    .module('a2firstlook')
    .controller('CardController', CardController);

  CardController.$inject = ['CardService'];

  function CardController(CardService) {
    var vm = this;

    vm.cards = CardService.getCards();
  }
})();