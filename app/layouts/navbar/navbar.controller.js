(function() {
    'use strict';

    angular
        .module('jhipsterApp', ['ui.router'])
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];

    function NavbarController ($state) {
        var vm = this;

        vm.isNavbarCollapsed = true;
    }
})();
