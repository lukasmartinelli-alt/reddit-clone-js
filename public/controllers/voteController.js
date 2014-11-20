redditclone.controller('voteController', ['$scope', '$http', 'socketService', function($scope, $http, socketService) {
    socketService.on('message', function(message)  {
        console.log(message);
    });

}]);