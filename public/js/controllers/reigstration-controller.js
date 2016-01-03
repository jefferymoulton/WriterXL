wxlApp.controller('RegistrationCtrl', function ($scope) {

    var model = this;

    model.user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repassword: ""
    };

    $scope.signup = function() {

        alert("Signing up... " + self.firstName + " " + self.lastName);

    };

    self.login = function() {

    };

});