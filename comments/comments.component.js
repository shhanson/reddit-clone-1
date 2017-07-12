(function () {
  angular.module('app')
    .component('comments', {
      controller: function commentsController() {
        const vm = this;

        vm.$onInit = function onInit() {
          vm.comments = [];
          vm.comment = {};
        };

        vm.addComment = function addComment() {
          if (!vm.comment.body) {
            console.error('Comment cannot be blank!');
            return;
          }
          vm.comments.push(vm.comment);
          vm.comment = {};
        };

        vm.getCommentCount = function getCommentCount() {
          return vm.comments.length;
        };
      },
      templateUrl: '/comments/comments.template.html',
    });
}());
