wxlApp.controller('RegistrationCtrl', function ($scope) {

    var model = this;

    model.user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signup = function() {

        alert("Signing up... " + model.user.firstName + " " + model.user.lastName);

    };

});