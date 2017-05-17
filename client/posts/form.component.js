(function() {
  'use strict'

  angular.module('app')
  .component('form', {
    controller: FormController,
    templateUrl: 'posts/form.template.html'
  })

  function FormController() {
    const vm = this
  }
})()
