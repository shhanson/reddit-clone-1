(function () {
  angular.module('posts', [])
    .component('posts', {
      controller: function postsController() {
        const vm = this;

        vm.posts = [];
        vm.post = {};

        vm.$onInit = function onInit() {
          vm.posts.push({
            title: 'Test Post 1 Title',
            author: 'bigrig',
            body: 'FIRSTTT!!! LOLLLL',
            imageURL: 'http://via.placeholder.com/150x150',
          });
          vm.posts.push({
            title: 'Test Post 2 Title',
            author: 'jesse',
            body: 'Hello, world!',
            imageURL: 'http://via.placeholder.com/150x150',
          });
        };

        vm.addPost = function addPost() {
          vm.posts.push(vm.post);
          vm.post = {};
        };
      },
      templateUrl: '/posts/posts.template.html',
    });
}());
