redditclone.factory('loginService', ['$http', function($http) {
    return {
        loggedIn: false,
        user: { username: "", password: "" },
        logout: function() {
            this.loggedIn = false;
            sessionStorage.username = "";
            sessionStorage.password = "";
        },
        login: function(username, password, callback) {
            $http.post('/login', { "name": username, "password": password })
            .success(function(data, status, headers, config) {
                console.log("User " + username + " logged in");
                this.loggedIn = true;
                this.user = { username: username, password: password };
                sessionStorage.username = username;
                sessionStorage.password = password;
                callback();
            }.bind(this))
            .error(function(data, status, headers, config) {
                this.loggedIn = false;
            }.bind(this));
        },
        register: function(username, password, callback) {
            $http.post('/register', { "name": username, "password": password })
            .success(function(data, status, headers, config) {
                console.log("User " + username + " registered");
                this.login(name, password, function() {
                    callback();
                });
            }.bind(this))
            .error(function(data, status, headers, config) {
                this.loggedIn = false;
            }.bind(this));
        }
    };
}]);
