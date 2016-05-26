var wxlApp = angular.module('wxlApp', [
    'ngMessages',
    'ui.bootstrap',
    'ui.router',
    'ui.navbar'
]);

wxlApp.config(
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home/home.html',
                controller: 'HomeController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '../views/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '../views/signup/signup.html',
                controller: 'SignupController'
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $locationProvider.html5Mode({
            enabled: true
        });
    }
);

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

wxlApp.directive("compareTo", compareTo);