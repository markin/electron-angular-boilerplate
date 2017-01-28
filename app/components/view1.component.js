'use strict';

import angular from "angular";
// import uiRouter from "angular-ui-router";

export class View1Controller {

  /*@ngInject*/
  constructor() {
    console.log("view 1")
  }

}

export default angular.module('app.view1', [])
  .component('view1', {
    template: require('./view1.html'),
    controller: View1Controller
  })
  .name;
