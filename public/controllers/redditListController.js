
redditclone.controller('redditListController', ['$scope', '$http', 'socketService', 'loginService', function($scope, $http, socketService, loginService) {
    $scope.reddits = [];
    $scope.commentAddedID = -1;
    function extendReddit(entry) {
        entry.areCommentsVisible = false;
        entry.setCommentsVisible = function (){
            this.areCommentsVisible = true;
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
                console.log("Loaded " + data.length + " reddits");
                // Add areCommentsVisible property
                data.forEach(function(entry) {
                    extendReddit(entry);
                    if(entry.id === $scope.commentAddedID) {
                        console.log("id = " + $scope.commentAddedID);
                        $scope.commentAddedID = -1;
                    }
                });
                $scope.reddits = data;
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

    $scope.$http = $http;
    $scope.update = function() {
        this.$http.get('/entries')
            .success(function (data, status, headers, config) {
                console.log("Loaded " + data.length + " reddits");
                // Add areCommentsVisible property
                data.forEach(function (entry) {
                    entry.areCommentsVisible = false;
                    entry.setCommentsVisible = function () {
                        this.areCommentsVisible = true;
                    };
                    entry.newCommentText = "";
                    entry.submitNewComment = function () {
                        console.log("New comment added: " + this.newCommentText);
                        $http.post("/entry/" + entry.id + "/comment", {text: entry.newCommentText}).success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            console.log("comment added");
                        })
                    };
                });
                this.reddits = data;
                console.log("Loaded2 " + this.reddits.length + " reddits");
            }.bind(this));

    };
    $scope.update($http);
}]);

