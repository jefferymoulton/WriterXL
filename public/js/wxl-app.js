var wxlApp = angular.module('wxlApp', [
    'ngRoute',
    'ui.bootstrap',
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