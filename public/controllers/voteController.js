redditclone.controller('voteController', ['$scope', '$http', 'socketService', 'loginService', function($scope, $http, socketService, loginService) {
    socketService.on('upComment', function(rank){
        console.log(rank);
    });

    socketService.on('message', function(message)  {
        console.log(message);
    });

    $scope.upComment = function() {
            $http.post('/comment/:id/up');
    };

    $scope.testBack = "";

    socketService.on('testBack', function(message)  {
        $scope.testBack = message;
        console.log(message);
    });

    $scope.upEntryButton = function(id) {
        //$http.post('/entry/0/up');
        socketService.emit('test', {send: 'data'});
    };

}]);