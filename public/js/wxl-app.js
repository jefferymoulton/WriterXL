var wxlApp = angular.module('wxlApp', [
    'ui.bootstrap',
    'ui.router',
    'ui.navbar',
    'NavigationController'
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