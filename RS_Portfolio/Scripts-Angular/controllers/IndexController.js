(function () {
    'use strict'
    angular.module('app')
        .controller("IndexController", ['$rootScope', function ($rootScope) {
            var vm = this;
            vm.test = "elo2";
            $rootScope.elo2 = "Test";

        }]);

})();