redditclone.controller('redditListController', ['$scope', '$http', function($scope, $http) {
    $scope.reddits = [];
    $scope.$http = $http;
    $scope.update = function() {
        this.$http.get('/entries')
            .success(function(data, status, headers, config) {
                console.log("Loaded " + data.length + " reddits");
                // Add areCommentsVisible property
                data.forEach(function(entry) {
                    entry.areCommentsVisible = false;
                    entry.setCommentsVisible = function (){
                        this.areCommentsVisible = true;
                    };
                    entry.newCommentText = "";
                    entry.submitNewComment = function() {
                        console.log("New comment added: " + this.newCommentText);
                        $http.post("/entry/" + entry.id + "/comment",{text:entry.newCommentText}).success(function(data, status, headers, config) {
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

