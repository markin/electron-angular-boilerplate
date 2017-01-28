'use strict';

import './components/view1.component';
import './components/view2.component';

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode({
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('view1', {
      url: '/',
      template: '<view1></view1>'
    })
    .state('view2', {
      url: '/view2',
      template: '<view2></view2>'
    });
}
