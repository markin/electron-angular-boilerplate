import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './app.global.css';

import {routeConfig} from './routes';

import './components/home.component';
import './components/test.component';

angular.module('app', [uiRouter, 'app.home', 'app.test']).config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['app'], {
      strictDi: true
    });
    console.log("Ready");
  });
