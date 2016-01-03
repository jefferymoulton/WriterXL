var wxlApp = angular.module('wxlApp', [
    'ngMessages',
    'ui.bootstrap',
    'ui.router',
    'ui.navbar'
]);

wxlApp.config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'pages/signup'
            })
    }
);

wxlApp.directive("compareTo", compareTo);