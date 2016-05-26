wxlApp.controller('SignupController', function ($scope, $http, $timeout) {

    $scope.signup = function() {

        console.log("Signing up... " + $scope.user.firstName + " " + $scope.user.lastName);

        // TODO: Do the signup.

    };

    $scope.emailAvailable = false;
    var email, timeout;

    $scope.checkEmail = function() {

        if ($timeout || !$scope.signupForm.email.$valid) {
            $timeout.cancel(timeout);
        }

        email = $scope.user.email;

        timeout = $timeout(function() {

            $http.get("/user/checkemail/" + encodeURI(email))
                .success( function(data) {
                    return data.available;
                })
                .error( function(data) {

                });

        }, 500);

    };

    /*
    var criteria, timeout;
    
    $scope.$watch('user.email', function(val) {

        if (timeout) {
            $timeout.cancel(timeout);
        }

        criteria = val;

        timeout = $timeout(function () {

            if (criteria && criteria.length > 3) {
                $scope.checkEmail();
            }
            
        }, 500);

    });
    */

});