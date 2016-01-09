var wxlApp = angular.module('wxlApp', [
    'ngMessages',
    'ui.bootstrap',
    'ui.router',
    'ui.navbar'
]);

wxlApp.config(
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'pages/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'pages/signup/signup.html'
            })
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