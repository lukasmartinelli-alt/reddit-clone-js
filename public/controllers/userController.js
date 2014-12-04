redditclone.controller('userController', ['$scope', '$http', 'loginService',
 function($scope, $http, loginService) {
    $scope.loggedIn = false;

    $scope.logout = function() {
        loginService.logout();
        $scope.loggedIn = false;
    };

    $scope.login = function() {
        loginService.login($scope.username, $scope.password, function() {
            $scope.loggedIn = loginService.loggedIn;
        });
    };

    $scope.register = function() {
        loginService.register($scope.username, $scope.password, function() {
            $scope.loggedIn = loginService.loggedIn;
        });
    };

    if(sessionStorage.username) {
        $scope.username = sessionStorage.username;
        $scope.password = sessionStorage.password;
        $scope.login();
    }
}]);
