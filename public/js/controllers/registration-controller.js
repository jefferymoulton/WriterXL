wxlApp.controller('RegistrationCtrl', function ($scope) {

    var self = this;

    self.user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    self.signup = function() {

        alert("Signing up... " + self.user.firstName + " " + self.user.lastName);

        // TODO: Do the signup.

    };

    self.checkEmailAvailability = function() {

        // TODO: Check if the email is already in use.
        return true;

    }

});