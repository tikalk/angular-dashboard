'use strict';

/**
 * @ngdoc overview
 * @name angularDashboardApp
 * @description
 * # angularDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('angularDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/flot', {
        templateUrl: 'views/flot.html',
        controller: 'FlotCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/morris', {
        templateUrl: 'views/morris.html',
        controller: 'MorrisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
