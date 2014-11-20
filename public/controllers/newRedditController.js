redditclone.controller('newRedditController', ['$scope', '$http', '$location', 'loginService', function($scope, $http, $location, loginService) {
    $scope.title = "";
    $scope.loggedIn = loginService.loggedIn;

    $scope.newReddit = function() {
        if(loginService.loggedIn) {
            $http.post('/entry', {"title": $scope.title,
                                  "url": $scope.link,
                                  "username": loginService.user.username})
            .success(function (data, status, headers, config) {
                $location.path('/');
                //$scope.loggedIn = true;
            })
            .error(function (data, status, headers, config) {
                //$scope.loggedIn = false;
            });
        }
    };

}]);
