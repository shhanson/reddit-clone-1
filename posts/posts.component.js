(function () {
  angular.module('app')
    .component('posts', {
      controller: function postsController() {
        const vm = this;

        vm.posts = [];
        vm.post = {};

        vm.$onInit = function onInit() {
          vm.posts.push({
            id: 0,
            title: 'Test Post 1 Title',
            author: 'bigrig',
            body: 'FIRSTTT!!! LOLLLL',
            imageURL: 'http://via.placeholder.com/150x150',
          });
          vm.posts.push({
            id: 1,
            title: 'Test Post 2 Title',
            author: 'jesse',
            body: 'Hello, world!',
            imageURL: 'http://via.placeholder.com/150x150',
          });
        };

        vm.addPost = function addPost() {
          if (!vm.post.body || !vm.post.title || !vm.post.author || !vm.post.imageURL) {
            console.error('Missing stuff!');
            return;
          }
          vm.post.id = vm.posts.length;
          vm.posts.push(vm.post);
          vm.post = {};
        };
      },
      templateUrl: '/posts/posts.template.html',
    });
}());