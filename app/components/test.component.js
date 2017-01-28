'use strict';

import angular from "angular";
// import uiRouter from "angular-ui-router";

export class TestController {

  /*@ngInject*/
  constructor() {
    console.log("test")
  }

}

export default angular.module('app.test', [])
  .component('test', {
    template: require('./test.html'),
    controller: TestController
  })
  .name;
