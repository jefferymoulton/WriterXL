wxlApp.controller('LoginCtrl', function ($scope) {

    var model = this;

    model.user = {
        email: "",
        password: ""
    };

    $scope.signup = function() {

        alert("Signing up... " + model.user.email + " " + model.user.password);

    };

});