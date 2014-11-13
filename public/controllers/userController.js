angular.module('redditclone', [])
.controller('userController', ['$scope', '$http', function($scope, $http) {
    $scope.username = "";
    $scope.password = "";
    $scope.login = function() {
        $http.post('/login', { "name": $scope.username, "password": $scope.password })
            .success(function(data, status, headers, config) {
                console.log(data);
            })
            .error(function(data, status, headers, config) {
                console.log("FAAAIL");
            });
    };
}]);
