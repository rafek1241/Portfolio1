﻿(function () {
    'use strict'
    angular.module('app')
        .service("MenuService", MenuService);
    MenuService.$inject = [];
    function MenuService() {
        var vm = this;
        vm.selectedIndex = 0;


        vm.menu = [
            { id: 0, icon: "", plName: "Strona główna", enName:"Homepage", url: "/" },
            { id: 1, icon: "", plName: "O Mnie", enName: "About me", url: "about-me" },
            { id: 3, icon: "", plName: "Moje projekty", enName: "My projects", url: "#" },
            { id: 4, icon: "", plName: "Kontakt", enName: "Contact", url: "#" },
        ];

    }
})();