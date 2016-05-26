wxlApp.controller('NavigationController', function ($rootScope, $scope, $log, $http, $state) {

    var self = this;

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    var authenticate = function(credentials, callback) {

        var headers = credentials ?
            { authorization : "Basic " + btoa(credentials.email + ":" + credentials.password) } : {};

        $http.get('api/user', { headers : headers })
            .success(function(data) {

                $log.log('Attempting login with user ' + headers);

                if (data.name) {
                    $rootScope.authenticated = true;
                }
                else {
                    $rootScope.authenticated = false;
                }

                callback && callback();

            })
            .error(function() {

                $rootScope.authenticated = false;
                callback && callback();

            });

    };

    authenticate();

    self.credentials = {};

    self.login = function() {

        $log.log("Credentials : " + self.credentials.email);

        authenticate(self.credentials, function () {

            if ($rootScope.authenticated) {
                self.error = false;
                $state.go('dashboard');
            }
            else {
                self.error = true;
            }

        });

    };

    self.logout = function() {

        $http.post('logout', {}).finally(function() {
            $rootScope.authenticated = false;
            $state.go('home');
        });

    };

});