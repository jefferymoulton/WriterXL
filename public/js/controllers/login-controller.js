wxlApp.controller('LoginController', function ($scope) {

    var self = this;

    self.login = function() {

        alert("Signing up... " + model.user.email + " " + model.user.password);

    };

});