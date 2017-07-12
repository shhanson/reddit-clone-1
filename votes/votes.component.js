(function () {
  angular.module('app')
    .component('votes', {
      controller: function votesController() {
        const vm = this;

        vm.$onInit = function onInit() {
          vm.votes = 0;
        };

        vm.upvote = function upvote() {
          vm.votes++;
        };

        vm.downvote = function downvote() {
          if (vm.votes > 0) {
            vm.votes--;
          }
        };
      },
      templateUrl: '/votes/votes.template.html',
    });
}());
