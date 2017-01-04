(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state'];

    function HomeController ($scope, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;

    }
})();
