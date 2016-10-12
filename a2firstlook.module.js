(function () {
  'use strict';

  angular
    .module('a2firstlook', ['ngMaterial'])
    .config(configure);

  configure.$inject = ['$mdThemingProvider', '$mdIconProvider'];
  function configure($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('pink')
      .warnPalette('red');
  }
})();