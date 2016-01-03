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