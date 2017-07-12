(function () {
  angular.module('comments', [])
    .component('comments', {
      controller: function commentsController() {
        const vm = this;

        vm.comments = [];
        vm.comment = {};
        vm.$onInit = function onInit() {
          // vm.comments.push({
          //   postID: 0,
          //   body: 'lmao',
          // });
          // vm.comments.push({
          //   postID: 1,
          //   author: 'clownbaby',
          //   body: 'testes 1, 2...uh oh!',
          // });
        };

        vm.addComment = function addComment() {
          vm.comments.push(vm.comment);
          vm.comment = {};
        };
      },
      templateUrl: '/comments/comments.template.html',
    });
}());
