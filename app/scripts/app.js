'use strict';

/**
 * @ngdoc overview
 * @name uiProject2App
 * @description
 * # uiProject2App
 *
 * Main module of the application.
 */
angular
  .module('M3', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
        controller:'aboutctrl',
        controllerAs: 'about'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller:'contactctrl',
        controllerAs: 'contact'
      })
      .when('/service',{
        templateUrl: 'views/services.html',
        controller:'servicectrl',
        controllerAs: 'service'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
