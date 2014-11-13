
redditclone.controller('redditEntryController', ['$scope', function($scope) {
    $scope.title = "Dorfmarkt knackt Umsatzrekord";
    $scope.votesCount = 103;
    $scope.author = "Piter Sommerlat";
    $scope.commentsCount = 63;
    $scope.timeAgo = "2 days ago";
    $scope.url = "http://www.20min.ch";
}])
redditclone.directive('redditentry', function() {
    return {
        templateUrl: 'directives/reddit/template.html'
    };
})