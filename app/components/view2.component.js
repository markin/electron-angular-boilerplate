'use strict';

import angular from "angular";
// import uiRouter from "angular-ui-router";

export class View2Controller {

  /*@ngInject*/
  constructor() {
    console.log("view 2")
  }

}

export default angular.module('app.view2', [])
  .component('view2', {
    template: require('./view2.html'),
    controller: View2Controller
  })
  .name;
