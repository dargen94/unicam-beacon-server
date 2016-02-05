beaconApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }).
      when('/registrati', {
        templateUrl: 'templates/registrati.html',
        controller: 'RegistratiCtrl'
      }).
      when('/dispositivi', {
        templateUrl: 'templates/dispositivi.html',
        controller: 'DispositiviCtrl'
      }).
      when('/utenti', {
        templateUrl: 'templates/utenti.html',
        controller: 'UtentiCtrl'
      }).
      when('/operazioni', {
        templateUrl: 'templates/operazioni.html',
        controller: 'OperazioniCtrl'
      }).
      when('/log', {
        templateUrl: 'templates/log.html',
        controller: 'LogCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
