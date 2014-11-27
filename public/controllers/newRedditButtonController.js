
redditclone.controller('newRedditButtonController', ['$scope', '$translate', 'loginService', function($scope, $translate, loginService) {
    $scope.isLoggedIn = function() {
        return loginService.loggedIn;
    };
}]);

