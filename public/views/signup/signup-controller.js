wxlApp.controller('SignupController', function ($scope) {

    var self = this;

    self.signup = function() {

        console.log("Signing up... " + self.user.firstName + " " + self.user.lastName);

        // TODO: Do the signup.

    };

    self.checkEmailAvailability = function() {

        // TODO: Check if the email is already in use.
        return true;

    }

});