(function () {
  angular.module('filter', [])
    .component('filter', {
      controller: function filterController() {
        const vm = this;

        vm.$onInit = function onInit() {

        };
      },
      templateUrl: '/filter/filter.template.html',
    });
}());
