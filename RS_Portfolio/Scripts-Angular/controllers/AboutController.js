(function () {
    'use strict'
    angular.module('app')
        .controller("AboutController", AboutController);
    AboutController.$inject = [];
    function AboutController() {
        var vm = this;


        vm.flippedSkill = null;
        vm.skills = [
            { id: 0, name: 'AngularJS', descr: 'Kontrolery, serwisy, dyrektywy i wiele innych', logo: '../Resources/angularjs_logo.png', level: 80 },
            { id: 1, name: 'HTML', descr: 'I wszystko co z nim związane', logo: '../Resources/html5_logo.png', level: 100 },
            { id: 2, name: 'Javascript', logo: '../Resources/JavaScript_02-1.png', level: 80 },
            { id: 3, name: 'Javascript', logo: '../Resources/JavaScript_02-1.png', level: 80 },
            { id: 4, name: 'AngularJS', descr:'Kontrolery, serwisy, dyrektywy i wiele innych', logo:'../Resources/angularjs_logo.png', level:80},
            { id: 5, name: 'HTML', descr:'I wszystko co z nim związane', logo:'../Resources/html5_logo.png', level:100},
            { id: 6, name: 'Javascript', logo:'../Resources/JavaScript_02-1.png', level:80},
            { id: 7, name: 'Javascript', logo: '../Resources/JavaScript_02-1.png', level: 80 },
        ]
    }
})();