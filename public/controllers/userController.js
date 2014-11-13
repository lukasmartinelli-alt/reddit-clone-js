angular.module('redditclone', [])
.controller('userController', ['$scope', '$http', function($scope, $http) {
    $scope.username = "";
    $scope.password = "";
    $scope.loggedIn = false;

    $scope.login = function() {
        $http.post('/login', { "name": $scope.username, "password": $scope.password })
            .success(function(data, status, headers, config) {
                console.log("User " + $scope.username + " logged in");
                $scope.loggedIn = true;
            })
            .error(function(data, status, headers, config) {
                $scope.loggedIn = false;
            });
    };
    $scope.register = function() {
        $http.post('/register', { "name": $scope.username, "password": $scope.password })
            .success(function(data, status, headers, config) {
                console.log("User " + $scope.username + " registered");
                $scope.login();
            });
    };

}]);
