
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
                templateUrl: 'Partials/homepage.html',
                controller: 'HomepageController',
                controllerAs: "vm",
                resolve: {
                    'test': ['$rootScope', function ($rootScope) {
                    $rootScope.MenuService.selectedIndex = 0;
                    return $rootScope.bodyClass = 1;
                    }],
                }
            })
            .when('/about-me', {
                templateUrl: 'Partials/about-me.html',
                controller: 'AboutController',
                controllerAs: 'vm',
                resolve: {
                    'test': ['$rootScope', function ($rootScope) {
                        $rootScope.MenuService.selectedIndex = 1;
                        return $rootScope.bodyClass = 2;
                    }],
                }
            })
            //....
            .otherwise({
                redirectTo: '/',
            });
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
    run.$inject = ['$rootScope', '$location','MenuService'];
    function run($rootScope, $location, MenuService) {
        $rootScope.title = "Robert Szachnowski - .Net Developer";
        $rootScope.currentUrl = "/";
        $rootScope.MenuService = MenuService;

        $rootScope.chooseBodyClass = function () {
            switch ($rootScope.bodyClass) {
                case 1:
                    return "homepage";
                    break;
                case 2:
                    return "about-me";
                    break;
                case 3:
                    return "works";
                    break;
                case 4:
                    return "projects";
                    break;
                case 5:
                    return "contact";
                    break;
                default:
            }
        }

    }


})();