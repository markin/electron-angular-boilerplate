'use strict';

import './components/home.component';
import './components/test.component';

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('test', {
      url: '/test',
      template: '<test></test>'
    });
}
