import angular from "angular";
import uiRouter from "angular-ui-router";
import "angular-electron";
import "angular-ui-bootstrap";
import "angular-formly";
import "angular-formly-templates-bootstrap";


import "./app.global.css";
import {routeConfig} from "./routes";

import "./components/view1.component";
import "./components/view2.component";

angular.module('electron_app', [uiRouter, 'ui.bootstrap', 'formly', 'formlyBootstrap', 'angular-electron', 'view1', 'view2'])
  .config(routeConfig)
  .run(
    function (app) {
      console.log("User data:", app.getPath('userData'));
      console.log("App data:", app.getPath('appData'));
      console.log("User home:", app.getPath('home'));
    }
  );

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['electron_app'], {
      strictDi: true
    });
  });
