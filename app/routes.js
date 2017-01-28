'use strict';

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
