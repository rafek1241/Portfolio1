(function () {
    'use strict'
    angular.module('app', ['ngRoute', /*'ejangular'*/])
        .config(config)
        .run(run);

    //https://stackoverflow.com/a/31882959  -- Smart dependency injection #remember

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                // :variable to pass in path, ex. "/students/:studentId"
                templateUrl: 'Partials/index.html',
                controller: 'IndexController',
                controllerAs: "vm",
            })
            //....
            .otherwise({
                redirectTo: '/',
            });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
    run.$inject = ['$rootScope', '$location'];
    function run($rootScope, $location) {
        $rootScope.title = "Robert Szachnowski - Developer";
        $rootScope.currentUrl = "/";
    }


})();