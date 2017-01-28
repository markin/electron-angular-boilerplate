'use strict';

import angular from "angular";
// import uiRouter from "angular-ui-router";

export class HomeController {

  /*@ngInject*/
  constructor() {
    console.log("home")
  }

}

export default angular.module('app.home', [])
  .component('home', {
    template: require('./home.html'),
    controller: HomeController
  })
  .name;
