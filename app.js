var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'welcome': {
        templateUrl: 'partials/welcome.html',
      },

    }
  });

  $stateProvider.state('signIn', {
    url: "/sign-in",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'sign-in': {
        templateUrl: "partials/sign-in.html",
        controller: 'PresenceCtrl'
      }
    }
  });

  $stateProvider.state('presence', {
    url: "/presence",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'presence': {
        templateUrl: "partials/presence.html",
        controller: 'SignInCtrl'
        
      }
    }
  });

});
