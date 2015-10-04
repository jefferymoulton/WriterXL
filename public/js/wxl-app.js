var wxlApp = angular.module('wxlApp', [
    'ngRoute',
    'wxlControllers'
]);

wxlApp.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/default',
                controller: 'wxlDefautCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);