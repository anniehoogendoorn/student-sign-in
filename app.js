var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
  url: "",
  templateUrl: "partials/home.html"
  });

  // $stateProvider.state('signIn', {
  //   url: "/sign-in",
  //   templateUrl: "partials/sign-in.html",
  //   controller: 'SignInCtrl'
  // });
  //
  // $stateProvider.state('presence', {
  //   url: "/presence",
  //   templateUrl: "partials/presence.html",
  //   controller: 'PresenceCtrl'
  // });

});
