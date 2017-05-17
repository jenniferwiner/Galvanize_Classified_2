(function() {
  'use strict'

  angular.module('app')
  .component('posts', {
    controller: PostController,
    templateUrl: 'posts/posts.template.html'
  })

  PostController.$inject = ['PostService']

  function PostController(PostService) {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
      vm.posts = []
      getAllPosts()
    }

    function getAllPosts() {
      PostService
        .getAll()
        .then(success, fail)

      function success(result) {
        vm.posts = result
      }

      function fail(err) {
        console.log(err)
      }
    }
  }
})()
