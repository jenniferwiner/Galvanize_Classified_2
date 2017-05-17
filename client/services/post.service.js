(function() {
  'use strict'

  angular.module('app')
  .service('PostService', PostService)

  PostService.$inject = ['$http', '$q']

  function PostService($http, $q) {
    this.getAll = getAll

    function getAll() {
      let req = {
        method: 'GET',
        url: `api/classifieds/`
      }

      return $http(req).then(success, fail)
    }

    function success(result) {
      return result.data
    }

    function fail(err) {
      return $q.reject(err)
    }
  }
})()
