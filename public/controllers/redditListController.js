redditclone.controller('redditListController', ['$scope', '$http', function($scope, $http) {
    $scope.reddits = [];

    $http.get('/entries')
        .success(function(data, status, headers, config) {
            console.log("Loaded " + data.length + " reddits");
            $scope.reddits = data;
        });
}]);
