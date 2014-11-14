redditclone.controller('newRedditController', ['$scope', '$http', function($scope, $http) {
    $scope.title = "";
    $scope.password = "";
    $scope.user = "";

    $http.get('/login')
        .success(function(data,headers, config) {
            console.log("Login Name: " + name.length );
            $scope.user = data.name;
        });

    $scope.isLoggedIn = function() {
        if($scope.user == ""){
            $scope.user = $http.get('/login').name
        }
        console.log('Username: ' + $scope.user);

        return $scope.user;
    }

    $scope.newReddit = function() {
        if($scope.isLoggedIn) {
            $http.post('/entry', {"title": $scope.title, "url": $scope.link, "name": $scope.user})
                .success(function (data, status, headers, config) {
                    //$scope.loggedIn = true;
                })
                .error(function (data, status, headers, config) {
                    //$scope.loggedIn = false;
                });
        }
    };

}]);
