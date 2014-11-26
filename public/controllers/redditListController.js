
redditclone.controller('redditListController', ['$scope', '$http', 'socketService', 'loginService', function($scope, $http, socketService, loginService) {
    $scope.reddits = [];
    $scope.commentAddedID = -1;
    $scope.isLoggedIn = function() {
        return loginService.loggedIn;
    };
    function extendReddit(entry) {
        entry.areCommentsVisible = false;
        entry.setCommentsVisible = function (){
            if(loginService.loggedIn === true) {
                this.areCommentsVisible = true;
            }
        };
        entry.newCommentText = "";
        entry.submitNewComment = function() {
            $scope.commentAddedID = entry.id;
            $http.post("/entry/" + entry.id + "/comment",{text:entry.newCommentText}).success(function(data, status, headers, config) {
                console.log("comment added successfully: " + entry.newCommentText);
            })
        };
    };
    $scope.update = function() {
        $http.get('/entries').success(function(data, status, headers, config) {
                data.forEach(function(entry) {
                    extendReddit(entry);
                    if(entry.id === $scope.commentAddedID) {
                        entry.setCommentsVisible();
                        $scope.commentAddedID = -1;
                    }
                });
                $scope.reddits = data;
                console.log("Loaded " + data.length + " reddits");
        });

    };

    $scope.upEntry = function(entryId) {
        if(loginService.loggedIn) {
            socketService.emit('upEntry', {eId: entryId, uId: loginService.user_id});
        }
    };

    $scope.downEntry = function(entryId) {
        if(loginService.loggedIn) {
            socketService.emit('downEntry', {eId: entryId, uId: loginService.user_id});
        }
    };

    $scope.upComment = function(commentId, redditId) {
        if(loginService.loggedIn) {
            socketService.emit('upComment', {cId: commentId, eId: redditId, uId: loginService.user_id});
        }
    };

    $scope.downComment = function(commentId, redditId) {
        if(loginService.loggedIn) {
            socketService.emit('downComment', {cId: commentId, eId: redditId, uId: loginService.user_id});
        }
    };

    socketService.on('voteEntryState', function(reddit){
        $scope.reddits[reddit.id] = reddit;
    });

    socketService.on('voteCommentState', function(comment){
        $scope.reddits[reddit.id].comments[comment.id].ra = comment.rating.value;
    });


    $scope.update();
}]);

