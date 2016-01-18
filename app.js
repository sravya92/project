angular
  .module('angularPractice', ['ui.router', 'ngCookies'])
  .config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /home
    $urlRouterProvider.otherwise("/welcome");

    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "login/login.tmpl.html",
        controller: 'LoginCtrl'
      })
      .state('registration', {
        url: "/registration",
        templateUrl: "registration/registration.html",
        controller:'RegCtrl'
      })
      .state('welcome', {
        url: "/welcome",
        templateUrl: "home/home.tmpl.html",
        
      })
  });