import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './app.global.css';

import {routeConfig} from './routes';

import './components/view1.component';
import './components/view2.component';

angular.module('app', [uiRouter, 'view1', 'view2']).config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['app'], {
      strictDi: true
    });
    console.log("Ready");
  });
